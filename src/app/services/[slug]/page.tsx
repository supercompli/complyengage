import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { SERVICES, BRAND } from '@/config';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { ChevronRight, CheckCircle, Info, HelpCircle } from 'lucide-react';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    // shortDesc alone is 54-70 chars; pad to the 120-160 range search engines show in full.
    description: `${service.shortDesc} ${BRAND.name} offers clear guidance and practical support for UK financial services firms.`,
  };
}

export default async function ServiceDetail({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);

  // Unknown slugs fall back to the services index, as the old router did.
  if (!service) {
    redirect('/services');
  }

  const relatedServices = SERVICES.filter(s => s.category === service.category && s.id !== service.id).slice(0, 2);

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-[#FAF9F6] border-b border-[#E2E7E8] py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center text-[10px] uppercase tracking-widest font-semibold text-[#263544]/50">
          <Link href="/" className="hover:text-[#14283F]">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <Link href="/services" className="hover:text-[#14283F]">Services</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-[#14283F]">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <Section bg="white" className="pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#14283F] mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-[#263544]/80 leading-relaxed mb-10">
              {service.longDesc}
            </p>
            
            <div className="bg-[#FAF9F6] p-8 border-l-4 border-vibrant-amber rounded-sm mb-12">
              <h2 className="text-sm font-bold text-[#14283F] uppercase tracking-wider mb-4 flex items-center">
                <Info className="w-4 h-4 mr-2 text-vibrant-amber" /> Who this service is for
              </h2>
              <ul className="space-y-3">
                {service.whoItIsFor.map((item, i) => (
                  <li key={i} className="text-sm text-[#263544]/70 flex items-start">
                    <span className="w-1 h-1 rounded-full bg-[#24766C] mt-2 mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 border border-[#E2E7E8] rounded-md bg-white shadow-sm">
              <h2 className="text-lg font-serif font-medium text-[#14283F] mb-6">Discuss this service</h2>
              <p className="text-sm text-[#263544]/70 mb-8 leading-relaxed">
                Tell us about your requirements and we will provide a scoped proposal.
              </p>
              <Button to={`/contact?service=${service.id}`} variant="vibrant" className="w-full mb-4">
                Enquire now
              </Button>
              <p className="text-[10px] text-center text-[#263544]/40">
                Independent compliance consultancy
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Details */}
      <Section bg="warm" className="border-t border-[#E2E7E8]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-serif font-medium text-[#14283F] mb-8">What support can include</h2>
            <div className="space-y-6">
              {service.whatItIncludes.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle className="w-5 h-5 text-vibrant-amber mt-0.5 shrink-0" />
                  <p className="text-sm text-[#263544]/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-serif font-medium text-[#14283F] mb-8">Tangible deliverables</h2>
            <div className="bg-white p-6 sm:p-8 border border-[#E2E7E8] rounded-sm space-y-4">
              {service.deliverables.map((item, i) => (
                <div key={i} className="pb-4 border-b border-[#E2E7E8] last:border-0 last:pb-0">
                  <p className="text-sm font-medium text-[#14283F]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Requirements & Scoping */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-serif font-medium text-[#14283F] mb-8">Information to provide</h2>
            <p className="text-sm text-[#263544]/70 mb-6 leading-relaxed">
              To deliver this service effectively, we typically require the following information from your team:
            </p>
            <ul className="space-y-4">
              {service.clientInputs.map((item, i) => (
                <li key={i} className="text-sm text-[#263544]/80 flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#E2E7E8] mr-4"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-serif font-medium text-[#14283F] mb-8">How the engagement works</h2>
            <div className="space-y-8">
              {[
                { step: "Initial Discussion", desc: "We discuss your specific needs and the scope of the service." },
                { step: "Project Setup", desc: "We define timelines, milestones, and required resources." },
                { step: "Delivery & Review", desc: "We prepare the deliverables and review them with your team." }
              ].map((s, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="text-xl font-serif italic text-vibrant-amber/30 group-hover:text-vibrant-amber transition-colors">0{i+1}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#14283F]">{s.step}</h3>
                    <p className="text-xs text-[#263544]/60">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Boundary & FAQ */}
      {(service.faqs.length > 0) && (
        <Section bg="warm" className="border-t border-b border-[#E2E7E8]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-medium text-[#14283F] mb-12 text-center flex items-center justify-center">
              <HelpCircle className="w-6 h-6 mr-3 text-[#24766C]" /> Service FAQ
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded border border-[#E2E7E8]">
                  <h3 className="text-lg font-serif font-medium text-[#14283F] mb-3">{faq.question}</h3>
                  <p className="text-sm text-[#263544]/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Scope Disclaimer */}
      <Section className="py-12">
        <div className="bg-[#FAF9F6] p-6 text-center border border-[#E2E7E8] rounded-sm">
          <p className="text-xs text-[#263544]/60 max-w-2xl mx-auto leading-relaxed">
            <strong>Scope Boundary:</strong> {BRAND.name} provides regulatory consultancy and support. We do not provide legal advice, accounting advice, or taxation advice. Regulatory decisions remain at the sole discretion of the Financial Conduct Authority.
          </p>
        </div>
      </Section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section>
          <h2 className="text-2xl font-serif font-medium text-[#14283F] mb-12">Related services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedServices.map((rs) => (
              <Link key={rs.id} href={`/services/${rs.slug}`} className="p-8 border border-[#E2E7E8] hover:border-[#14283F] rounded-sm transition-all">
                <h3 className="text-lg font-serif font-medium text-[#14283F] mb-2">{rs.title}</h3>
                <p className="text-sm text-[#263544]/70 mb-4 line-clamp-2">{rs.shortDesc}</p>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#24766C]">View service →</span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section bg="navy" className="text-center">
        <h2 className="text-3xl font-serif font-medium mb-6">Clarify your next steps for {service.title}</h2>
        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
          Contact us to discuss how this service can be tailored to your business needs.
        </p>
        <Button to={`/contact?service=${service.id}`} variant="secondary" className="px-10">
          Request a consultation
        </Button>
      </Section>
    </div>
  );
}
