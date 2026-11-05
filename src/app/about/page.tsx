import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import KeyFigures from '@/components/sections/KeyFigures';
import { BRAND } from '@/config';

export const metadata: Metadata = {
  title: "About",
  description: "An independent consultancy helping UK financial services businesses navigate the complexities of FCA authorisation and ongoing compliance.",
};

export default function About() {
  return (
    <div>
      <Section bg="warm" className="pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#14283F] mb-6">About {BRAND.name}</h1>
        <p className="text-lg text-[#263544]/70 max-w-2xl leading-relaxed">
          An independent consultancy helping UK financial services businesses navigate the complexities of FCA authorisation and ongoing compliance.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-serif font-medium text-[#14283F] mb-8 leading-tight">Expertise grounded in practical experience.</h2>
            <div className="prose prose-slate max-w-none text-[#263544]/80 space-y-6">
              <p>
                {BRAND.name} was established to provide financial services firms with a more structured and transparent alternative to traditional compliance consultancy.
              </p>
              <p>
                We believe that regulatory compliance should be an asset, not a burden. By establishing clear systems and well-documented processes, firms can focus on their commercial growth with the confidence that their regulatory obligations are being met.
              </p>
              <p>
                Our work is focused entirely on the UK financial services market. We support businesses across a range of sectors, from innovative startups to established intermediaries.
              </p>
            </div>
          </div>
          <div className="bg-[#FAF9F6] border border-[#E2E7E8] p-12 rounded-lg">
             <h3 className="text-xs uppercase tracking-widest font-bold text-[#24766C] mb-8">What we stand for</h3>
             <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-[#14283F] mb-2">Independence</h4>
                  <p className="text-xs text-[#263544]/70">We are an independent consultancy. We do not provide principal status, regulatory hosting, or third-party auditing services.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#14283F] mb-2">Transparency</h4>
                  <p className="text-xs text-[#263544]/70">We are clear about what we can and cannot do. We provide fixed-fee proposals and defined scope boundaries for every engagement.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#14283F] mb-2">Professionalism</h4>
                  <p className="text-xs text-[#263544]/70">We maintain the highest standards of professional conduct and data security in all our client interactions.</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* KEY FIGURES */}
      <KeyFigures variant="warm" subtitle="Delivering deep regulatory insight, proven across UK, EU and UAE jurisdictions." />

      <Section bg="white" className="border-t border-[#E2E7E8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-medium text-[#14283F] mb-8 text-center">Our Commitment</h2>
          <div className="bg-white p-10 md:p-16 border border-[#E2E7E8] rounded-sm shadow-sm italic text-center text-lg text-[#14283F]/80 leading-relaxed">
            "Our role is to provide the clarity and support you need to navigate the regulatory landscape. We focus on the details that matter so you can focus on building your business."
          </div>
        </div>
      </Section>

      <Section bg="navy" className="text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Work with a specialist partner.</h2>
        <p className="text-white/70 mb-10 max-w-xl mx-auto">
          Contact us to discuss your compliance requirements and how we can support your business goals.
        </p>
        <Button to="/contact" variant="vibrant" className="px-10">
          Discuss your requirements
        </Button>
      </Section>
    </div>
  );
}
