import nodemailer from 'nodemailer';
import { BRAND } from '@/config';

/** Thrown when the MAIL_* environment variables are missing, so callers can tell config problems from send failures. */
export class MailConfigError extends Error {}

export interface OutgoingMail {
  subject: string;
  text: string;
  html: string;
  replyTo?: { name: string; address: string };
}

function readConfig() {
  const host = process.env.MAIL_HOST;
  const fromAddress = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO;

  const missing = (
    [
      ['MAIL_HOST', host],
      ['MAIL_FROM', fromAddress],
      ['MAIL_TO', to],
    ] as const
  )
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missing.length > 0) {
    throw new MailConfigError(`Missing environment variable(s): ${missing.join(', ')}`);
  }

  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;

  return {
    host: host as string,
    port: Number(process.env.MAIL_PORT) || 587,
    // true = implicit TLS (port 465). false = plain connection upgraded with STARTTLS (port 587).
    secure: process.env.MAIL_SECURE === 'true',
    auth: user && pass ? { user, pass } : undefined,
    from: { name: process.env.MAIL_FROM_NAME || BRAND.name, address: fromAddress as string },
    to: to as string,
  };
}

/**
 * Sends one email through the configured SMTP server.
 * Resolves only once the server has accepted the message for every recipient; throws otherwise.
 */
export async function sendMail(mail: OutgoingMail): Promise<void> {
  const config = readConfig();

  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
    // Fail fast rather than leaving the visitor's request hanging on an unreachable SMTP server.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });

  const info = await transport.sendMail({
    from: config.from,
    to: config.to,
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });

  if (info.accepted.length === 0 || info.rejected.length > 0) {
    throw new Error(`SMTP server rejected recipient(s): ${info.rejected.join(', ') || 'all'}`);
  }
}
