import type { Metadata, Viewport } from 'next';
import { Inter, Lora } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-lora',
  display: 'swap',
});

const DEFAULT_TITLE = 'ComplyEngage – FCA Authorisation & Compliance Consultancy';
const DEFAULT_DESCRIPTION =
  'Expert compliance consultancy for UK financial services. ComplyEngage provides clear guidance for FCA authorisation and practical support for ongoing regulatory requirements.';

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | ComplyEngage',
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: 'ComplyEngage – FCA Authorisation & Compliance Support',
    description:
      'Specialist support for UK financial firms. From readiness assessments to ongoing compliance monitoring and regulatory reporting.',
    type: 'website',
    url: BRAND.url,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ComplyEngage',
  url: BRAND.url,
  description:
    'Specialist UK financial services compliance consultancy helping firms navigate FCA authorisation and ongoing regulatory obligations.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#263544] font-sans selection:bg-[#24766C]/20">
          <Header />
          <main className="flex-grow pt-20 overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
