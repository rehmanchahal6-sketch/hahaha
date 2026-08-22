import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PromoBar from '@/components/PromoBar';
import { QuoteProvider } from '@/components/QuoteProvider';
import { company } from '@/lib/company';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display-loaded',
  display: 'swap',
});

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body-loaded',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: 'Paudelon | Premium Pet Products',
    template: '%s | Paudelon',
  },
  description:
    'Shop premium pet treats, toys, grooming essentials, and everyday care. Fast US shipping, pet-safe materials, and 30-day easy returns.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: company.website,
    siteName: company.tradeName,
    title: 'Paudelon | Premium Pet Products',
    description: 'Premium essentials your pets will love — treats, toys, and care for dogs & cats.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.legalName,
  alternateName: company.tradeName,
  url: company.website,
  email: company.email,
  description: `${company.businessActivity} Product focus: ${company.productFocus}. Registered in ${company.jurisdiction}. NAICS ${company.naics}.`,
  founder: {
    '@type': 'Person',
    name: company.managingMember,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: company.email,
    availableLanguage: 'English',
    areaServed: company.country,
    hoursAvailable: company.hours,
    ...(company.phone ? { telephone: company.phone } : {}),
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.line1,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: company.address.country,
  },
  areaServed: company.country,
  knowsAbout: ['E-commerce', 'Pet products', 'Online retail', 'Wholesale', 'Dropshipping'],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'NAICS',
      value: company.naics,
    },
    {
      '@type': 'PropertyValue',
      name: 'Jurisdiction',
      value: company.jurisdiction,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <QuoteProvider>
          <div className="site-shell">
            <PromoBar />
            <Header />
            <main className="site-main">{children}</main>
            <Footer />
          </div>
        </QuoteProvider>
      </body>
    </html>
  );
}
