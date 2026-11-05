import { NextResponse } from 'next/server';
import { SERVICES, SECTOR_OPTIONS, STAGE_OPTIONS, BRAND } from '@/config';
import { sendMail, MailConfigError } from '@/lib/mailer';

export const runtime = 'nodejs';

const LIMITS = { name: 100, email: 254, company: 150, phone: 40, requirement: 5000 };

const EMAIL_PATTERN = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/;

const fail = (status: number, error: string) => NextResponse.json({ ok: false, error }, { status });

/** Single-line value: collapses newlines so nothing can inject extra header lines or fake lines into the email. */
const oneLine = (value: unknown, max: number) =>
  typeof value === 'string' ? value.replace(/[\r\n\u2028\u2029\t]+/g, ' ').replace(/\s{2,}/g, ' ').trim().slice(0, max) : '';

/** Multi-line value: keeps newlines, strips other control characters. */
const multiLine = (value: unknown, max: number) =>
  typeof value === 'string'
    ? // eslint-disable-next-line no-control-regex
      value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max)
    : '';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('not an object');
    body = parsed as Record<string, unknown>;
  } catch {
    return fail(400, 'Invalid request.');
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots don't retry.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = oneLine(body.name, LIMITS.name);
  const email = oneLine(body.email, LIMITS.email);
  const company = oneLine(body.company, LIMITS.company);
  const phone = oneLine(body.phone, LIMITS.phone);
  const requirement = multiLine(body.requirement, LIMITS.requirement);
  const serviceId = oneLine(body.serviceId, 100);
  const sectorValue = oneLine(body.sector, 50);
  const stageValue = oneLine(body.stage, 50);
  const contactMethod = body.contactMethod === 'phone' ? 'phone' : 'email';

  if (!name || !email || !company || !requirement || !serviceId || !sectorValue || !stageValue) {
    return fail(400, 'Please fill in all required fields.');
  }
  if (!EMAIL_PATTERN.test(email)) {
    return fail(400, 'Please enter a valid email address.');
  }

  const service = SERVICES.find((s) => s.id === serviceId);
  const serviceLabel = service ? service.title : serviceId === 'other' ? 'Other / Not sure' : null;
  const sector = SECTOR_OPTIONS.find((o) => o.value === sectorValue);
  const stage = STAGE_OPTIONS.find((o) => o.value === stageValue);
  if (!serviceLabel || !sector || !stage) {
    return fail(400, 'Please check your selections and try again.');
  }

  const rows: [string, string][] = [
    ['Name', name],
    ['Company', company],
    ['Email', email],
    ['Telephone', phone || 'Not provided'],
    ['Preferred contact', contactMethod === 'phone' ? 'Phone' : 'Email'],
    ['Service required', serviceLabel],
    ['Business sector', sector.label],
    ['Current stage', stage.label],
  ];

  const text = [
    `New enquiry from the ${BRAND.name} website`,
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Requirements:',
    requirement,
  ].join('\n');

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#263544;line-height:1.5">
  <h2 style="font-size:18px;color:#14283F;margin:0 0 16px">New enquiry from the ${escapeHtml(BRAND.name)} website</h2>
  <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
${rows
  .map(
    ([label, value]) =>
      `    <tr><td style="color:#6b7780;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
  )
  .join('\n')}
  </table>
  <h3 style="font-size:14px;color:#14283F;margin:20px 0 6px">Requirements</h3>
  <p style="white-space:pre-wrap;margin:0">${escapeHtml(requirement)}</p>
</div>`;

  try {
    await sendMail({
      subject: `New enquiry: ${serviceLabel} – ${company}`.slice(0, 200),
      text,
      html,
      replyTo: { name, address: email },
    });
  } catch (error) {
    if (error instanceof MailConfigError) {
      // Misconfiguration: log the details server-side, don't leak them to the visitor.
      console.error('[enquiry] Email is not configured:', error.message);
      return fail(503, `We can’t take online enquiries right now. Please email ${BRAND.email} instead.`);
    }
    console.error('[enquiry] Failed to send email:', error);
    return fail(502, `We couldn’t send your enquiry. Please try again, or email ${BRAND.email} instead.`);
  }

  return NextResponse.json({ ok: true });
}
