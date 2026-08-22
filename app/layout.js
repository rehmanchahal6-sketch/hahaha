import { Bricolage_Grotesque, Source_Serif_4 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { QuoteProvider } from '@/components/QuoteProvider';
import { company } from '@/lib/company';
import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display-loaded',
  display: 'swap',
});

const body = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-body-loaded',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: 'Paudelon LLC | Pet Products E-Commerce',
    template: '%s | Paudelon LLC',
  },
  description:
    'Paudelon LLC is a Wyoming e-commerce company selling pet products through online retail, wholesale, and dropshipping on Shopify and Amazon.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: company.website,
    siteName: company.legalName,
    title: 'Paudelon LLC | Pet Products E-Commerce',
    description:
      'Wyoming e-commerce company engaged in online retail, wholesale, and dropshipping of pet products.',
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
  url: company.website,
  email: company.email,
  description: `${company.businessActivity} Product focus: ${company.productFocus}.`,
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
            <Header />
            <main className="site-main">{children}</main>
            <Footer />
          </div>
        </QuoteProvider>
      </body>
    </html>
  );
}
