import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us what your business does and where you need support. Discuss your FCA authorisation or ongoing compliance requirements with ComplyEngage.',
};

export default function ContactPage() {
  return <ContactClient />;
}
