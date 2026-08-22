import Link from 'next/link';
import CompanyDetails from '@/components/CompanyDetails';
import { company } from '@/lib/company';

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>{company.legalName}</h1>
          <p>
            A {company.entityType} selling pet products through established online retail,
            wholesale, and dropshipping channels in the United States.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 style={{ marginBottom: '1rem' }}>Who we are</h2>
          <p style={{ marginBottom: '1rem' }}>
            {company.tradeName} is the consumer-facing brand of {company.legalName}. We operate as
            a focused e-commerce business in the pet supplies market, offering practical products
            for dogs, cats, and household pets.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            {company.businessActivity} Our sales channels include Shopify, Amazon, and direct
            wholesale arrangements with retailers and pet businesses.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            The company is managed by {company.managingMember}, managing member, who oversees
            product sourcing, marketplace listings, customer support, and fulfillment coordination.
          </p>
          <p>{company.operationsModel}</p>
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
              <p>Pet products sold to consumers through Shopify and Amazon storefronts.</p>
            </div>
            <div>
              <h3>Wholesale supply</h3>
              <p>Bulk orders for retailers, groomers, and pet businesses needing consistent inventory.</p>
            </div>
            <div>
              <h3>Dropshipping</h3>
              <p>Supplier fulfillment partnerships supporting scalable online sales operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="trust-panel">
            <h3>Corporate information</h3>
            <p>
              Official legal name, registered address, business activity, and policies are published
              on our Corporate Information page for customers and authorized business inquiries.
            </p>
            <div className="trust-links">
              <Link href="/company">Corporate information</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Questions about our business?</h2>
              <p>Contact us for orders, wholesale pricing, or general company inquiries.</p>
            </div>
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <Link href="/company" className="btn btn-secondary">
                Company info
              </Link>
              <Link href="/contact" className="btn btn-primary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
