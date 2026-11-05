import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users } from 'lucide-react';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import KeyFigures from '@/components/sections/KeyFigures';
import { BRAND, SERVICES } from '@/config';

export default function HomePage() {
  const pathways = [
    {
      title: "I’m preparing to apply",
      desc: "Readiness assessments, business plans and application support.",
      link: "/services/fca-authorisation",
      icon: <CheckCircle2 className="w-5 h-5 text-[#24766C]" />
    },
    {
      title: "I’m already authorised",
      desc: "Compliance support, reporting and Consumer Duty reviews.",
      link: "/services/ongoing-compliance",
      icon: <Shield className="w-5 h-5 text-[#24766C]" />
    },
    {
      title: "My business is changing",
      desc: "Permission changes, acquisitions and appointed representative support.",
      link: "/services/variation-of-permission",
      icon: <TrendingUp className="w-5 h-5 text-[#24766C]" />
    }
  ];

  const steps = [
    { number: "01", title: "Understand your business", desc: "We begin by understanding your activities, target market, and specific regulatory requirements." },
    { number: "02", title: "Agree the scope and priorities", desc: "We define a clear scope of work, identifying priorities and agreed deliverables." },
    { number: "03", title: "Prepare and review the work", desc: "Working alongside your team, we prepare and review the required documentation and processes." },
    { number: "04", title: "Support the next stage", desc: "We provide support through the submission process or during the implementation of new systems." }
  ];

  const sectors = [
    "Credit brokers and consumer lending businesses",
    "Insurance intermediaries",
    "Mortgage intermediaries",
    "Financial advisers and investment businesses",
    "Payment and e-money businesses"
  ];

  const faqs = [
    {
      question: "Can you help if we have not started our application?",
      answer: "Yes. In fact, early involvement is often most effective. We can conduct a readiness assessment to help you understand exactly what you need before you start drafting documents."
    },
    {
      question: "Can we get support if we are already authorised?",
      answer: "Absolutely. We provide ongoing compliance monitoring, support with regulatory reporting, and help with specific projects like Consumer Duty implementation or adding new permissions."
    },
    {
      question: "Do you offer ongoing compliance support?",
      answer: "Yes, we offer defined schedules of monitoring and advisory support tailored to the size and complexity of your business."
    },
    {
      question: "Can you guarantee authorisation?",
      answer: "The FCA makes the final authorisation decision. Our role is to support your preparation and help you address the requirements relevant to your application as clearly and robustly as possible."
    },
    {
      question: "How are your fees calculated?",
      answer: "We typically work on a fixed-fee basis for specific projects or a monthly retainer for ongoing support, based on the agreed scope of work."
    },
    {
      question: "What should we prepare for an initial discussion?",
      answer: "A brief summary of your business model, the regulated activities you intend to carry out (or already do), and any specific areas where you feel you need support."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO */}
      <Section bg="warm" className="pt-32 pb-20 md:pt-48 md:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-vibrant-amber/10 text-vibrant-amber text-[10px] font-bold tracking-widest uppercase rounded-sm mb-6">
              {BRAND.shortDescription}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#14283F] leading-tight mb-8">
              A clearer path to FCA authorisation and ongoing compliance.
            </h1>
            <p className="text-lg md:text-xl text-[#263544]/80 leading-relaxed mb-10 max-w-xl">
              Understand what your business needs, prepare a well-organised application and put practical compliance processes in place for the next stage.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button to="/contact" variant="vibrant" className="px-8">
                Discuss your requirements
              </Button>
              <Button to="/services" variant="outline" className="px-8">
                Explore our services
              </Button>
            </div>
            <p className="text-sm text-[#263544]/60 italic">
              Support scoped around your business, permissions and stage of growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-8 md:p-12 rounded-lg border border-[#E2E7E8] shadow-sm relative z-10">
              <h3 className="text-sm font-semibold text-[#14283F] uppercase tracking-widest mb-10 border-b border-[#E2E7E8] pb-4">
                Engagement Plan
              </h3>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-[#FAF9F6] border border-[#E2E7E8] rounded-full flex items-center justify-center text-[#14283F] font-serif font-medium italic">1</div>
                  <div>
                    <h4 className="font-semibold text-[#14283F] mb-2">Understand</h4>
                    <p className="text-sm text-[#263544]/70">Initial gap analysis and requirement scoping.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-[#FAF9F6] border border-[#E2E7E8] rounded-full flex items-center justify-center text-[#14283F] font-serif font-medium italic">2</div>
                  <div>
                    <h4 className="font-semibold text-[#14283F] mb-2">Prepare</h4>
                    <p className="text-sm text-[#263544]/70">Documentation drafting and operational setup.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-white border border-vibrant-amber/30 rounded-full flex items-center justify-center text-vibrant-amber font-serif font-medium italic shadow-sm shadow-vibrant-amber/10">3</div>
                  <div>
                    <h4 className="font-semibold text-[#14283F] mb-2">Support</h4>
                    <p className="text-sm text-[#263544]/70">Ongoing monitoring and regulatory reporting.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-[#E2E7E8] rounded-lg -z-0"></div>
          </motion.div>
        </div>
      </Section>

      {/* KEY FIGURES */}
      <KeyFigures variant="light" />

      {/* 2. CHOOSE YOUR STARTING POINT */}
      <Section withAccent>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-medium text-[#14283F] mb-4">Where is your business today?</h2>
          <p className="text-[#263544]/70">Select the pathway that matches your current situation to see how we can support you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((path, idx) => (
            <Link key={idx} href={path.link} className="group p-8 bg-[#FAF9F6] border border-[#E2E7E8] rounded-md transition-all hover:bg-white hover:shadow-md hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-vibrant-amber outline-none">
              <div className="mb-6">{path.icon}</div>
              <h3 className="text-xl font-serif font-medium text-[#14283F] mb-3 group-hover:text-[#24766C] transition-colors">{path.title}</h3>
              <p className="text-sm text-[#263544]/70 mb-6 leading-relaxed">{path.desc}</p>
              <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-[#14283F]">
                View services <ArrowRight className="ml-2 w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 3. CORE SERVICES */}
      <Section bg="navy">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-serif font-medium mb-4">Support for the decisions and details that matter.</h2>
            <p className="text-white/70">Our services are designed to provide clarity throughout the regulatory lifecycle.</p>
          </div>
          <Button to="/services" variant="outline" className="border-white/20 text-white hover:bg-white/10">
            View all services
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {SERVICES.slice(0, 6).map((service) => (
            <div key={service.id} className="border-t border-white/10 pt-8 group">
              <h3 className="text-lg font-serif font-medium mb-3">{service.title}</h3>
              <p className="text-sm text-white/60 mb-6 leading-relaxed line-clamp-2">{service.shortDesc}</p>
              <Link href={`/services/${service.slug}`} className="text-xs font-semibold uppercase tracking-wider hover:text-vibrant-amber transition-colors focus-visible:text-vibrant-amber outline-none">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. OUR APPROACH */}
      <Section withAccent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-serif font-medium text-[#14283F] mb-6">A structured process. Clear next steps.</h2>
            <p className="text-[#263544]/70 mb-8 leading-relaxed">
              We work as a specialist extension of your team, providing the technical knowledge and practical experience needed to manage complex regulatory requirements.
            </p>
            <Button to="/our-approach" variant="outline">
              Read more about our approach
            </Button>
          </div>
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 pb-10 border-b border-[#E2E7E8] last:border-0 last:pb-0 group">
                <span className="text-3xl font-serif font-medium text-[#E2E7E8] group-hover:text-vibrant-amber/30 transition-colors">{step.number}</span>
                <div>
                  <h3 className="text-lg font-serif font-medium text-[#14283F] mb-2 group-hover:text-vibrant-amber transition-colors">{step.title}</h3>
                  <p className="text-sm text-[#263544]/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. FEATURED RECURRING SERVICE */}
      <Section bg="warm">
        <div className="bg-white border border-[#E2E7E8] rounded-lg overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-16">
            <h2 className="text-3xl font-serif font-medium text-[#14283F] mb-6">Build compliance into everyday operations.</h2>
            <p className="text-[#263544]/70 mb-8 leading-relaxed">
              Ongoing compliance shouldn't be a burden. We help you establish structured routines that make monitoring, reporting, and policy updates a natural part of your business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Compliance calendar",
                "Scheduled reviews",
                "Policy maintenance",
                "Action tracking",
                "Management reporting",
                "Regulatory updates"
              ].map((item) => (
                <div key={item} className="flex items-center text-sm text-[#263544]/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-vibrant-amber mr-3"></div>
                  {item}
                </div>
              ))}
            </div>
            <Button to="/services/ongoing-compliance" variant="secondary">
              Explore ongoing support
            </Button>
          </div>
          <div className="bg-[#14283F]/5 p-8 md:p-12 lg:p-16 flex items-center justify-center lg:border-l border-t lg:border-t-0 border-[#E2E7E8]">
             <div className="w-full max-w-sm space-y-4">
                <div className="bg-white p-4 rounded border border-[#E2E7E8] shadow-sm transform -rotate-2">
                  <div className="h-2 w-24 bg-[#E2E7E8] mb-2"></div>
                  <div className="h-1.5 w-full bg-[#FAF9F6] mb-1"></div>
                  <div className="h-1.5 w-2/3 bg-[#FAF9F6]"></div>
                </div>
                <div className="bg-white p-4 rounded border border-[#E2E7E8] shadow-sm transform translate-x-4">
                  <div className="h-2 w-32 bg-[#24766C]/20 mb-2"></div>
                  <div className="h-1.5 w-full bg-[#FAF9F6] mb-1"></div>
                  <div className="h-1.5 w-4/5 bg-[#FAF9F6]"></div>
                </div>
                <div className="bg-white p-4 rounded border border-[#E2E7E8] shadow-sm transform rotate-1 translate-x-2">
                  <div className="h-2 w-20 bg-[#14283F]/20 mb-2"></div>
                  <div className="h-1.5 w-full bg-[#FAF9F6] mb-1"></div>
                  <div className="h-1.5 w-full bg-[#FAF9F6]"></div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 6. SECTORS */}
      <Section withAccent>
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-serif font-medium text-[#14283F] mb-4">Sectors we support</h2>
          <p className="text-[#263544]/70">The scope of any engagement depends on your specific activities and the applicable regulatory requirements.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div key={sector} className="p-6 border border-[#E2E7E8] rounded-sm hover:border-[#24766C] transition-colors">
              <Users className="w-5 h-5 text-[#24766C] mb-4" />
              <h3 className="text-sm font-semibold text-[#14283F]">{sector}</h3>
            </div>
          ))}
          <Link href="/sectors" className="p-6 bg-[#14283F] text-white rounded-sm flex items-center justify-between group">
            <span className="text-sm font-semibold">Explore all sectors</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* 7. HOW ENGAGEMENTS ARE SCOPED */}
      <Section bg="warm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-medium text-[#14283F] mb-6">Know what is included before work begins.</h2>
            <div className="space-y-6 mb-10">
              {[
                { title: "Initial discussion", desc: "No-obligation conversation to understand your needs." },
                { title: "Review of requirements", desc: "We identify the specific permissions and obligations that apply." },
                { title: "Written scope", desc: "A clear document outlining responsibilities and deliverables." },
                { title: "Agreed fee and milestones", desc: "Transparency on costs and delivery timelines from the start." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#24766C] mt-2 shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#14283F] mb-1">{item.title}</h4>
                    <p className="text-xs text-[#263544]/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#263544]/60 bg-white/50 p-4 rounded border border-[#E2E7E8]">
              Regulatory application fees and other third-party charges, where relevant, are separate unless explicitly included.
            </p>
          </div>
          <div className="bg-[#14283F] p-12 rounded-lg text-white">
            <h3 className="text-xl font-serif font-medium mb-8">Ready to define your scope?</h3>
            <div className="space-y-6 mb-8">
              <Button to="/contact" variant="secondary" className="w-full justify-between">
                Request a fixed-fee proposal <ArrowRight className="w-4 h-4" />
              </Button>
              <Button to="/contact" variant="outline" className="w-full justify-between border-white/20 text-white hover:bg-white/10">
                Ask about monthly support <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. FAQ */}
      <Section id="faq" withAccent>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-medium text-[#14283F] mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-[#E2E7E8] rounded-md overflow-hidden">
              <div className="p-6 bg-white">
                <h3 className="text-lg font-serif font-medium text-[#14283F] mb-4">{faq.question}</h3>
                <p className="text-sm text-[#263544]/70 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. FINAL CTA */}
      <Section bg="navy" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Let’s clarify your next step.</h2>
          <p className="text-xl text-white/70 mb-10">
            Tell us what your business does and where you need support.
          </p>
          <Button to="/contact" variant="vibrant" className="px-10 py-4 text-base">
            Discuss your requirements
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}
