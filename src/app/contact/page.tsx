import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us what your business does and where you need support. Discuss your FCA authorisation or ongoing compliance requirements with ComplyEngage.',
};

export default function ContactPage() {
  // ContactClient reads ?service= via useSearchParams, which needs a Suspense boundary
  // so the rest of the page can still be statically rendered.
  return (
    <Suspense>
      <ContactClient />
    </Suspense>
  );
}
