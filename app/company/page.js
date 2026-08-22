import Link from 'next/link';
import CompanyDetails from '@/components/CompanyDetails';
import LegalEntityMeta from '@/components/LegalEntityMeta';
import { company, addressBlock, policyLinks } from '@/lib/company';

export const metadata = {
  title: 'Corporate Information',
  description: `Official corporate information for ${company.legalName}, a Wyoming e-commerce company selling pet products online.`,
};

export default function CompanyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Corporate</span>
          <h1>Corporate information</h1>
          <p>
            Official business details for {company.legalName}, published for customers, vendors,
            and authorized verification requests.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <CompanyDetails title="" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 820 }}>
          <LegalEntityMeta />
          <h2 style={{ marginBottom: '1rem', marginTop: '1rem' }}>Business summary</h2>
          <div className="legal-copy">
            <p>
              {company.legalName} is a {company.entityType} formed in {company.jurisdiction}. The
              company is managed by {company.managingMember}, managing member.
            </p>
            <p>{company.businessActivity}</p>
            <p>
              The company sells {company.productFocus.toLowerCase()} through online retail,
              wholesale, and dropshipping. Primary sales channels include Shopify, Amazon, and
              direct B2B arrangements. Principal industry classification: NAICS {company.naics}.
            </p>
            <p>{company.operationsModel}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ marginBottom: '1rem' }}>Contact & verification</h2>
          <div className="feature-grid">
            <div className="panel">
              <h3>Contact</h3>
              <p>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
              <p style={{ marginTop: '0.35rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                Business, wholesale, and verification inquiries
              </p>
            </div>
            <div className="panel">
              <h3>Support</h3>
              <p>
                <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a>
              </p>
              <p style={{ marginTop: '0.35rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                Order help, shipping, and returns
              </p>
            </div>
            <div className="panel">
              <h3>Website</h3>
              <p>
                <a href={company.website}>{company.websiteDisplay}</a>
              </p>
            </div>
            {company.phone && company.phoneDisplay ? (
              <div className="panel">
                <h3>Phone</h3>
                <p>
                  <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
                </p>
              </div>
            ) : null}
            <div className="panel">
              <h3>Registered office</h3>
              <p>{addressBlock}</p>
            </div>
            <div className="panel">
              <h3>Business hours</h3>
              <p>{company.hours}</p>
            </div>
          </div>
          <p style={{ marginTop: '1.25rem', color: 'var(--muted)', maxWidth: '62ch' }}>
            Authorized banks, vendors, and partners requesting company verification should email{' '}
            {company.email} from an official organization address with the company name and purpose
            of the request. Standard documentation may be provided upon identity verification.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            <Link href="/contact" className="text-link">
              Contact form →
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ marginBottom: '1rem' }}>Policies & legal</h2>
          <div className="policy-links-row">
            {policyLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <p style={{ marginTop: '1rem' }}>
            <Link href="/faq" className="text-link">
              Frequently asked questions →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
