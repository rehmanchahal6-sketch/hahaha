'use client';

import Link from 'next/link';
import { useQuote } from '@/components/QuoteProvider';

export default function AboutPage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1>Paudelon LLC</h1>
          <p>
            A Wyoming limited liability company engaged in e-commerce and the online sale of pet
            products.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 680 }}>
          <h2 style={{ marginBottom: '1rem' }}>Company overview</h2>
          <p style={{ marginBottom: '1rem' }}>
            Paudelon LLC operates as an e-commerce business selling pet products through online
            retail, wholesale, and dropshipping channels. Our primary sales platforms include
            Shopify and Amazon.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            The company engages in e-commerce, online retail, wholesale, dropshipping, and other
            lawful business activities related to the pet supplies market.
          </p>
          <p>
            We focus on practical, quality products for pet owners—sourced responsibly, listed
            clearly, and fulfilled reliably.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Details</span>
            <h2>Business information</h2>
          </div>
          <div className="feature-grid">
            <div>
              <h3>Legal name</h3>
              <p>Paudelon LLC</p>
            </div>
            <div>
              <h3>Entity type</h3>
              <p>Wyoming limited liability company</p>
            </div>
            <div>
              <h3>Industry</h3>
              <p>E-commerce · Online retail · Pet products</p>
            </div>
            <div>
              <h3>Sales channels</h3>
              <p>Shopify, Amazon, wholesale & dropshipping</p>
            </div>
            <div>
              <h3>Registered address</h3>
              <p>
                30 N Gould St Ste R
                <br />
                Sheridan, WY 82801
              </p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>
                <a href="mailto:sujanpaudel368@gmail.com">sujanpaudel368@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-grid">
            <div>
              <h3>Online retail</h3>
              <p>Pet products sold directly to consumers through our e-commerce storefronts.</p>
            </div>
            <div>
              <h3>Marketplace sales</h3>
              <p>Curated listings on Amazon and other approved online marketplaces.</p>
            </div>
            <div>
              <h3>Wholesale supply</h3>
              <p>Bulk orders for retailers and pet businesses that need consistent inventory.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Questions about our business?</h2>
              <p>Contact us for wholesale pricing, order support, or general inquiries.</p>
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
