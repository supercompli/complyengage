import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import { Users, Building2, Briefcase, Calculator, Landmark } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Who We Help",
  description: "We support a range of firms across the UK financial services sector, with work tailored to the activities and permissions of each business.",
};

export default function Sectors() {
  const sectors = [
    {
      title: "Credit brokers and consumer lending",
      icon: <Calculator className="w-6 h-6 text-[#24766C]" />,
      reasons: [
        "Applying for consumer credit permissions.",
        "Managing ongoing reporting obligations.",
        "Ensuring compliance with the Consumer Credit sourcebook (CONC).",
        "Implementing Consumer Duty requirements."
      ],
      services: ["FCA Authorisation", "Ongoing Compliance", "Consumer Duty"],
      infoNeeded: "Proposed lending model, target customer demographic, and distribution channels."
    },
    {
      title: "Insurance intermediaries",
      icon: <Briefcase className="w-6 h-6 text-[#24766C]" />,
      reasons: [
        "Establishing a new brokerage or MGA.",
        "Adding new lines of business or permissions.",
        "Managing client money requirements (CASS 5).",
        "Reviewing product oversight and governance."
      ],
      services: ["FCA Authorisation", "Variation of Permission", "Compliance Systems"],
      infoNeeded: "Professional indemnity insurance details, business plan, and insurer relationship summaries."
    },
    {
      title: "Mortgage intermediaries",
      icon: <Building2 className="w-6 h-6 text-[#24766C]" />,
      reasons: [
        "Applying for mortgage mediation permissions.",
        "Ongoing compliance monitoring of advisor activity.",
        "Regulatory reporting (GABRIEL/RegData).",
        "Advice process reviews."
      ],
      services: ["FCA Authorisation", "Regulatory Reporting", "Ongoing Compliance"],
      infoNeeded: "Advisor numbers, training and competence arrangements, and sourcing system details."
    },
    {
      title: "Financial advisers and investment businesses",
      icon: <Users className="w-6 h-6 text-[#24766C]" />,
      reasons: [
        "Setting up a new DFM or advisory firm.",
        "Implementing MiFID II or post-Brexit requirements.",
        "Client asset (CASS) compliance reviews.",
        "Acquisition of an existing client book."
      ],
      services: ["FCA Authorisation", "Change in Control", "Compliance Systems"],
      infoNeeded: "AUM estimates, investment philosophy, and key personnel experience."
    },
    {
      title: "Payment and e-money businesses",
      icon: <Landmark className="w-6 h-6 text-[#24766C]" />,
      reasons: [
        "Applying for API or EMI authorisation.",
        "Safeguarding arrangement reviews.",
        "AML and financial crime policy development.",
        "Managing cross-border regulatory implications."
      ],
      services: ["FCA Authorisation", "Readiness Assessment", "Compliance Systems"],
      infoNeeded: "Flow of funds diagrams, IT security overview, and safeguarding proposals."
    }
  ];

  return (
    <div>
      <Section bg="warm" className="pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#14283F] mb-6">Who We Help</h1>
        <p className="text-lg text-[#263544]/70 max-w-2xl leading-relaxed">
          We support a range of firms across the UK financial services sector. The scope of our work is always tailored to the specific activities and permissions of each business.
        </p>
      </Section>

      <Section>
        <div className="space-y-24">
          {sectors.map((sector, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-1">
                <div className="mb-6">{sector.icon}</div>
                <h2 className="text-2xl font-serif font-medium text-[#14283F] mb-4 leading-tight">{sector.title}</h2>
                <p className="text-sm text-[#263544]/70 leading-relaxed italic">
                  Engagement scope depends on your specific activities and applicable regulatory requirements.
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#24766C] mb-6">Common reasons for support</h3>
                  <ul className="space-y-4">
                    {sector.reasons.map((r, i) => (
                      <li key={i} className="text-sm text-[#263544]/80 flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E2E7E8] mt-1.5 shrink-0"></span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#24766C] mb-6">Relevant services</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {sector.services.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-[#FAF9F6] border border-[#E2E7E8] text-[10px] uppercase font-bold text-[#14283F] rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#24766C] mb-4">Initial information needed</h3>
                  <p className="text-sm text-[#263544]/70 leading-relaxed bg-[#FAF9F6] p-4 rounded-sm border border-[#E2E7E8]">
                    {sector.infoNeeded}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="warm" className="border-t border-[#E2E7E8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium text-[#14283F] mb-6">Discuss your sector-specific requirements</h2>
          <p className="text-[#263544]/70 mb-10 leading-relaxed">
            Every firm is unique. We can help you understand which permissions are relevant to your business model and how to prepare for the application process.
          </p>
          <Button to="/contact" variant="vibrant" className="px-10">
            Request a discussion
          </Button>
        </div>
      </Section>
    </div>
  );
}
