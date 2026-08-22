'use client';

import Link from 'next/link';
import { useQuote } from '@/components/QuoteProvider';
import CompanyDetails from '@/components/CompanyDetails';
import { company } from '@/lib/company';

export default function AboutPage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1>{company.legalName}</h1>
          <p>
            A {company.entityType} engaged in e-commerce and the online sale of pet products in the
            United States.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 style={{ marginBottom: '1rem' }}>Company overview</h2>
          <p style={{ marginBottom: '1rem' }}>
            {company.legalName} operates as an e-commerce business selling pet products through
            online retail, wholesale, and dropshipping channels. Our primary sales platforms include
            Shopify and Amazon.
          </p>
          <p style={{ marginBottom: '1rem' }}>{company.businessActivity}</p>
          <p>
            We focus on practical, quality pet products—sourced responsibly, listed clearly, and
            fulfilled reliably for retail and wholesale customers.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 820 }}>
          <CompanyDetails />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-grid">
            <div>
              <h3>Online retail</h3>
              <p>Pet products sold directly to consumers through Shopify and Amazon storefronts.</p>
            </div>
            <div>
              <h3>Wholesale supply</h3>
              <p>Bulk orders for retailers, groomers, and pet businesses needing consistent inventory.</p>
            </div>
            <div>
              <h3>Dropshipping</h3>
              <p>Supplier fulfillment partnerships that support scalable online sales operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="trust-panel">
            <h3>Business verification</h3>
            <p>
              Banks, partners, and vendors may contact us for company verification. Please email{' '}
              {company.email} from your official organization address and include your company name
              and reason for the request. We respond within {company.responseTime.toLowerCase()}.
            </p>
            <div className="trust-links">
              <Link href="/faq">FAQ</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/refund-policy">Returns & Refunds</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Questions about our business?</h2>
              <p>Contact us for wholesale pricing, order support, or verification inquiries.</p>
            </div>
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-secondary">
                Contact
              </Link>
              <button className="btn btn-primary" onClick={() => openQuote('General Inquiry')}>
                Send inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
