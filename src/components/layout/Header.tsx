'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { BRAND, SERVICES } from '@/config';
import Button from '@/components/ui/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Who We Help', href: '/sectors' },
    { name: 'Our Approach', href: '/our-approach' },
    { name: 'About', href: '/about' },
  ];

  const serviceGroups = [
    {
      title: 'Prepare and apply',
      services: SERVICES.filter(s => s.category === 'prepare-and-apply')
    },
    {
      title: 'Operate and maintain',
      services: SERVICES.filter(s => s.category === 'operate-and-maintain')
    },
    {
      title: 'Grow and change',
      services: SERVICES.filter(s => s.category === 'grow-and-change')
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-serif font-semibold text-[#14283F] tracking-tight">
          {BRAND.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center text-sm font-medium hover:text-[#24766C] transition-colors focus-visible:ring-2 focus-visible:ring-vibrant-amber rounded-sm outline-none px-1">
              Services <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full -left-20 pt-4"
                >
                  <div className="bg-white border border-[#E2E7E8] rounded-md shadow-lg p-6 w-[600px] grid grid-cols-3 gap-8">
                    {serviceGroups.map((group) => (
                      <div key={group.title}>
                        <h4 className="text-[10px] uppercase tracking-wider text-[#24766C] font-semibold mb-3">
                          {group.title}
                        </h4>
                        <ul className="space-y-2">
                          {group.services.map((service) => (
                            <li key={service.id}>
                              <Link 
                                href={`/services/${service.slug}`}
                                className="text-sm text-[#263544] hover:text-[#14283F] block py-1 border-l-2 border-transparent hover:border-[#24766C] pl-2 -ml-2 transition-all"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-3 pt-4 border-t border-[#E2E7E8] mt-2">
                      <Link href="/services" className="text-xs font-medium text-[#14283F] hover:underline">
                        View all services →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-[#24766C] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <Button to="/contact" variant="vibrant">
            Discuss your requirements
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#E2E7E8] overflow-y-auto"
          >
            <div className="p-8 space-y-10 pb-32">
              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-widest text-[#24766C] font-bold">Services</p>
                <div className="grid grid-cols-1 gap-6 pl-2">
                  <Link href="/services" className="text-base font-serif font-medium border-l-2 border-vibrant-amber pl-4 py-1">View all Services</Link>
                  <div className="space-y-4 pl-4 border-l border-[#E2E7E8]">
                    {SERVICES.slice(0, 6).map(s => (
                      <Link key={s.id} href={`/services/${s.slug}`} className="block text-sm text-[#263544]/70 hover:text-[#14283F]">{s.title}</Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-widest text-[#24766C] font-bold">Menu</p>
                <div className="space-y-4 pl-2">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="block text-lg font-serif font-medium text-[#14283F]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E2E7E8]">
                <Button to="/contact" variant="vibrant" className="w-full py-4 text-base">
                  Discuss your requirements
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
