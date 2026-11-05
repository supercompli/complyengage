'use client';

import { useState, useEffect } from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { SERVICES, BRAND, SECTOR_OPTIONS, STAGE_OPTIONS } from '@/config';
import { Check, ChevronRight, AlertCircle, Mail, Phone, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactClient() {
  // ?service= is read after mount rather than with useSearchParams(): that hook forces the whole
  // page to client-side render at build time, which left the static HTML empty for crawlers.
  const [preselectedService, setPreselectedService] = useState('');

  const [step, setStep] = useState(1);
  const emptyForm = {
    serviceId: preselectedService,
    sector: '',
    stage: '',
    requirement: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    contactMethod: 'email',
    website: '', // honeypot: hidden from real visitors, bots tend to fill it
  };
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('service');
    if (!id) return;
    setPreselectedService(id);
    setFormData(prev => (prev.serviceId ? prev : { ...prev, serviceId: id }));
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.serviceId || !formData.sector || !formData.stage || !formData.requirement) {
      setError('Please fill in all required fields to proceed.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setError('Please fill in all required contact information.');
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) {
        setError(result?.error || `We couldn’t send your enquiry. Please try again, or email ${BRAND.email} instead.`);
        return;
      }
      setSubmitted(true);
    } catch {
      setError(`We couldn’t send your enquiry. Please check your connection and try again, or email ${BRAND.email} instead.`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(emptyForm);
    setStep(1);
    setError('');
    setSubmitted(false);
  };

  return (
    <div>
      <Section bg="warm" className="pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#14283F] mb-8">Tell us what you need help with.</h1>
            <p className="text-lg text-[#263544]/70 mb-12 leading-relaxed">
              Whether you are preparing an initial application or need support with ongoing compliance, we can provide a scoped proposal tailored to your business.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white border border-vibrant-amber/20 rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-vibrant-amber/5">
                  <Clock className="w-5 h-5 text-vibrant-amber" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#14283F] mb-1">Fast initial response</h2>
                  <p className="text-xs text-[#263544]/60">We typically respond to new enquiries within one business day to discuss next steps.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white border border-vibrant-amber/20 rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-vibrant-amber/5">
                  <Mail className="w-5 h-5 text-vibrant-amber" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#14283F] mb-1">Direct communication</h2>
                  <p className="text-xs text-[#263544]/60">You will be put in touch with a specialist consultant who understands your sector.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white border border-vibrant-amber/20 rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-vibrant-amber/5">
                  <Phone className="w-5 h-5 text-vibrant-amber" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#14283F] mb-1">Initial discussion</h2>
                  <p className="text-xs text-[#263544]/60">We offer a no-obligation initial call to understand your requirements and define the scope.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E7E8] rounded-lg shadow-sm p-6 sm:p-8 md:p-12 relative overflow-hidden">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 bg-[#24766C]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check className="w-8 h-8 text-[#24766C]" />
                </div>
                <h2 className="text-2xl font-serif font-medium text-[#14283F] mb-4">Thank you, your enquiry has been sent</h2>
                <div className="bg-[#FAF9F6] border border-[#24766C]/20 p-6 rounded-md mb-8 text-left max-w-md mx-auto">
                   <p className="text-sm text-[#263544]/80 leading-relaxed">
                     We typically respond to new enquiries within one business day, by {formData.contactMethod === 'phone' ? 'phone' : 'email'} as you requested.
                   </p>
                   <div className="mt-4 pt-4 border-t border-[#E2E7E8] space-y-2 text-xs">
                      <p><strong>Name:</strong> {formData.name}</p>
                      <p><strong>Company:</strong> {formData.company}</p>
                      <p><strong>Service:</strong> {SERVICES.find(s => s.id === formData.serviceId)?.title ?? 'Other / Not sure'}</p>
                   </div>
                </div>
                <Button onClick={handleReset} variant="outline">
                  Send another enquiry
                </Button>
              </motion.div>
            ) : (
              <div>
                {/* Step Indicator */}
                <div className="flex items-center gap-4 mb-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${step >= 1 ? 'bg-[#14283F] border-[#14283F] text-white' : 'bg-white border-[#E2E7E8] text-[#263544]/30'}`}>1</div>
                  <div className={`h-px grow ${step >= 2 ? 'bg-[#14283F]' : 'bg-[#E2E7E8]'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${step >= 2 ? 'bg-[#14283F] border-[#14283F] text-white' : 'bg-white border-[#E2E7E8] text-[#263544]/30'}`}>2</div>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.form
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleNext}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-medium text-[#14283F] mb-2">Service required *</label>
                        <select 
                          name="serviceId"
                          value={formData.serviceId}
                          onChange={handleChange}
                          className="w-full bg-[#FAF9F6] border border-[#E2E7E8] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-vibrant-amber/20 focus:border-vibrant-amber transition-all"
                          required
                        >
                          <option value="">Select a service...</option>
                          {SERVICES.map(s => (
                            <option key={s.id} value={s.id}>{s.title}</option>
                          ))}
                          <option value="other">Other / Not sure</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#14283F] mb-2">Business sector *</label>
                        <select 
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          className="w-full bg-[#FAF9F6] border border-[#E2E7E8] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-vibrant-amber/20 focus:border-vibrant-amber transition-all"
                          required
                        >
                          <option value="">Select your sector...</option>
                          {SECTOR_OPTIONS.map(o => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#14283F] mb-2">Current stage *</label>
                        <select 
                          name="stage"
                          value={formData.stage}
                          onChange={handleChange}
                          className="w-full bg-[#FAF9F6] border border-[#E2E7E8] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-vibrant-amber/20 focus:border-vibrant-amber transition-all"
                          required
                        >
                          <option value="">Select your stage...</option>
                          {STAGE_OPTIONS.map(o => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#14283F] mb-2">Description of requirements *</label>
                        <textarea 
                          name="requirement"
                          value={formData.requirement}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Briefly tell us what you need help with..."
                          className="w-full bg-[#FAF9F6] border border-[#E2E7E8] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-vibrant-amber/20 focus:border-vibrant-amber transition-all resize-none"
                          required
                        ></textarea>
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 text-red-600 text-xs">
                          <AlertCircle className="w-4 h-4" />
                          <span>{error}</span>
                        </div>
                      )}

                      <Button type="submit" className="w-full justify-between">
                        Continue <ChevronRight className="w-4 h-4" />
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.form
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Honeypot: invisible to people, tempting to bots. Submissions that fill it are silently dropped. */}
                      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                        <label>
                          Leave this field empty
                          <input
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            value={formData.website}
                            onChange={handleChange}
                          />
                        </label>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#14283F] mb-2">Full name *</label>
                          <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-[#FAF9F6] border border-[#E2E7E8] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-vibrant-amber/20 focus:border-vibrant-amber transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#14283F] mb-2">Business email *</label>
                          <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-[#FAF9F6] border border-[#E2E7E8] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-vibrant-amber/20 focus:border-vibrant-amber transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#14283F] mb-2">Company name *</label>
                          <input 
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-[#FAF9F6] border border-[#E2E7E8] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-vibrant-amber/20 focus:border-vibrant-amber transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#14283F] mb-2">Telephone (optional)</label>
                          <input 
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-[#FAF9F6] border border-[#E2E7E8] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-vibrant-amber/20 focus:border-vibrant-amber transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#14283F] mb-2">Preferred contact method</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 text-sm text-[#263544]/80">
                            <input 
                              type="radio" 
                              name="contactMethod" 
                              value="email" 
                              checked={formData.contactMethod === 'email'}
                              onChange={handleChange}
                              className="accent-[#24766C]"
                            />
                            Email
                          </label>
                          <label className="flex items-center gap-2 text-sm text-[#263544]/80">
                            <input 
                              type="radio" 
                              name="contactMethod" 
                              value="phone" 
                              checked={formData.contactMethod === 'phone'}
                              onChange={handleChange}
                              className="accent-[#24766C]"
                            />
                            Phone
                          </label>
                        </div>
                      </div>

                      {error && (
                        <div role="alert" className="flex items-start gap-2 text-red-600 text-xs">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-px" />
                          <span>{error}</span>
                        </div>
                      )}

                      <div className="pt-4 border-t border-[#E2E7E8]">
                         <p className="text-[10px] text-[#263544]/60 mb-6">
                           By submitting this form, you agree to our privacy policy. We will only use your information to respond to your enquiry.
                         </p>
                         <div className="flex gap-4">
                            <Button onClick={() => setStep(1)} variant="outline" className="grow" disabled={submitting}>
                              Back
                            </Button>
                            <Button type="submit" variant="vibrant" className="grow" disabled={submitting}>
                              {submitting ? 'Sending…' : 'Submit Enquiry'}
                            </Button>
                         </div>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </Section>
      
      <Section className="py-12 border-t border-[#E2E7E8]">
        <div className="bg-[#FAF9F6] p-6 rounded-sm border border-[#E2E7E8] text-center">
           <p className="text-xs text-[#263544]/60 max-w-2xl mx-auto leading-relaxed">
             <strong>Note:</strong> Please do not request identity documents, bank statements or other sensitive application material through this initial enquiry form. We will provide a secure method for document sharing if we proceed to an engagement.
           </p>
        </div>
      </Section>
    </div>
  );
}
