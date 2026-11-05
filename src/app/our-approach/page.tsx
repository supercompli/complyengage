import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Our Approach",
  description: "Compliance is a shared responsibility. We provide the technical knowledge and structured support, while you retain control and ownership of your business.",
};

export default function OurApproach() {
  const principles = [
    {
      title: "Clarity over complexity",
      desc: "Regulatory requirements can be opaque. We translate complex rules into practical, actionable steps for your business."
    },
    {
      title: "Structured process",
      desc: "We follow a defined methodology to ensure consistency, quality, and transparency throughout every engagement."
    },
    {
      title: "Focus on outcomes",
      desc: "Our work is designed to deliver tangible results—whether that is a submitted application, a policy suite, or a compliance report."
    },
    {
      title: "Collaborative partnership",
      desc: "We work as an extension of your team, transferring knowledge so you can manage your compliance with confidence."
    }
  ];

  return (
    <div>
      <Section bg="warm" className="pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#14283F] mb-6">Our Approach</h1>
        <p className="text-lg text-[#263544]/70 max-w-2xl leading-relaxed">
          Compliance is a shared responsibility. We provide the technical knowledge and structured support, while you retain control and ownership of your business.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-3xl font-serif font-medium text-[#14283F] mb-8 leading-tight">A structured methodology for regulatory projects.</h2>
            <div className="space-y-12">
              {[
                { 
                  step: "01", 
                  title: "Discovery & Analysis", 
                  desc: "We begin with a thorough review of your business activities and regulatory status to identify exact requirements." 
                },
                { 
                  step: "02", 
                  title: "Scoping & Planning", 
                  desc: "We define the project scope, deliverables, and timelines in a written engagement letter, ensuring total transparency on fees." 
                },
                { 
                  step: "03", 
                  title: "Execution & Review", 
                  desc: "Our team prepares the required documentation and systems, with multiple stages of review to ensure quality and accuracy." 
                },
                { 
                  step: "04", 
                  title: "Finalisation & Handover", 
                  desc: "We support the final submission or implementation and ensure your team is trained to manage the ongoing requirements." 
                }
              ].map((s, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="text-4xl font-serif text-[#E2E7E8] transition-colors group-hover:text-[#24766C]/20">{s.step}</span>
                  <div className="pt-2">
                    <h3 className="text-lg font-serif font-medium text-[#14283F] mb-3">{s.title}</h3>
                    <p className="text-sm text-[#263544]/70 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#14283F] p-12 md:p-16 rounded-lg text-white">
            <h2 className="text-2xl font-serif font-medium mb-8">What to expect from an engagement</h2>
            <div className="space-y-6">
              {[
                "Direct access to experienced consultants.",
                "Fixed-fee proposals with no hidden costs.",
                "Clear documentation of all advice and support.",
                "Regular project updates and milestone tracking.",
                "Practical tools and templates you can keep.",
                "Strict confidentiality and data security."
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1 h-1 rounded-full bg-[#24766C] mt-2 shrink-0"></div>
                  <p className="text-sm text-white/70">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-xs text-white/50 italic leading-relaxed">
                Note: We do not suggest that our process is an official FCA processing stage. The regulator's timelines and decisions are independent of our consultancy work.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="warm">
        <h2 className="text-3xl font-serif font-medium text-[#14283F] mb-12 text-center">Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((p, i) => (
            <div key={i} className="bg-white p-8 border border-[#E2E7E8] rounded-sm">
              <h3 className="text-lg font-serif font-medium text-[#14283F] mb-4">{p.title}</h3>
              <p className="text-sm text-[#263544]/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="navy" className="text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Ready to discuss your requirements?</h2>
        <p className="text-white/70 mb-10 max-w-xl mx-auto">
          Contact us for an initial conversation to understand how our approach can support your business.
        </p>
        <Button to="/contact" variant="vibrant" className="px-10">
          Get in touch
        </Button>
      </Section>
    </div>
  );
}
