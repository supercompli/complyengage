import Link from 'next/link';
import { BRAND, SERVICES } from '@/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#14283F] text-white pt-20 pb-10 border-t-2 border-vibrant-amber/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-serif font-semibold tracking-tight block mb-6">
              {BRAND.name}
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {BRAND.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold mb-6 text-[#24766C]">Services</h4>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-white/80 font-medium hover:text-white transition-colors">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold mb-6 text-[#24766C]">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/sectors" className="text-sm text-white/60 hover:text-white transition-colors">
                  Who We Help
                </Link>
              </li>
              <li>
                <Link href="/our-approach" className="text-sm text-white/60 hover:text-white transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold mb-6 text-[#24766C]">Enquiries</h4>
            <p className="text-sm text-white/60 mb-4">
              Discuss your compliance requirements with our specialist team.
            </p>
            <Link 
              href="/contact" 
              className="inline-block text-sm font-medium border-b border-white/30 hover:border-white pb-1 transition-all"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <p className="text-xs text-white/40">
              © {currentYear} {BRAND.legalName}. All rights reserved.
            </p>
            <p className="text-[10px] text-white/30 max-w-2xl">
              {BRAND.disclaimer}
            </p>
          </div>
          <div className="flex space-x-6">
            <span className="text-xs text-white/40 italic">Registered in England & Wales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
