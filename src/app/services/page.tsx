import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { SERVICES } from '@/config';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Services",
  description: "Clear guidance and practical support tailored to your firm’s specific activities, size and regulatory permissions.",
};

export default function Services() {
  const categories = [
    { id: 'prepare-and-apply', title: 'Prepare and Apply', desc: 'Support for firms seeking initial authorisation or new permissions.' },
    { id: 'operate-and-maintain', title: 'Operate and Maintain', desc: 'Practical support for ongoing compliance and regulatory reporting.' },
    { id: 'grow-and-change', title: 'Grow and Change', desc: 'Managing the regulatory implications of business expansion and change.' },
  ];

  return (
    <div>
      <Section bg="warm" className="pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#14283F] mb-6">Our Services</h1>
        <p className="text-lg text-[#263544]/70 max-w-2xl leading-relaxed">
          Clear guidance and practical support tailored to your firm’s specific activities, size, and regulatory permissions.
        </p>
      </Section>

      {categories.map((cat) => (
        <Section key={cat.id} bg={cat.id === 'operate-and-maintain' ? 'white' : 'white'}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-xs uppercase tracking-widest font-bold text-[#24766C] mb-4">{cat.title}</h2>
              <p className="text-sm text-[#263544]/70 leading-relaxed">{cat.desc}</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.filter(s => s.category === cat.id).map((service) => (
                <Link 
                  key={service.id} 
                  href={`/services/${service.slug}`}
                  className="group p-8 border border-[#E2E7E8] rounded-sm hover:border-[#14283F] transition-all bg-white focus-visible:ring-2 focus-visible:ring-vibrant-amber outline-none"
                >
                  <h3 className="text-xl font-serif font-medium text-[#14283F] mb-3 group-hover:text-[#24766C] transition-colors">{service.title}</h3>
                  <p className="text-sm text-[#263544]/70 mb-6 leading-relaxed line-clamp-3">{service.shortDesc}</p>
                  <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-[#14283F]">
                    Learn more <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section bg="navy" className="text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Not sure which service you need?</h2>
        <p className="text-white/70 mb-10 max-w-xl mx-auto">
          We can help you identify the specific support required for your business model.
        </p>
        <Button to="/contact" variant="vibrant" className="px-10 py-4 text-base">
          Request a consultation
        </Button>
      </Section>
    </div>
  );
}
