'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';
import Accordion from '@/components/Accordion';

const channels = [
  {
    title: 'Shopify store',
    desc: 'Direct-to-consumer pet products through our branded online store.',
    service: 'Shopify Store',
  },
  {
    title: 'Amazon',
    desc: 'Curated pet supplies listed and fulfilled through Amazon marketplace channels.',
    service: 'Amazon Marketplace',
  },
  {
    title: 'Wholesale',
    desc: 'Bulk orders for retailers, groomers, and pet businesses seeking reliable supply.',
    service: 'Wholesale Inquiry',
  },
  {
    title: 'Dropshipping',
    desc: 'Efficient fulfillment partnerships that keep inventory lean and orders moving.',
    service: 'Dropshipping',
  },
];

const categories = [
  'Pet food & treats',
  'Toys & enrichment',
  'Grooming & hygiene',
  'Beds & travel gear',
  'Health & wellness',
  'Bowls & feeding accessories',
];

const steps = [
  {
    n: '01',
    title: 'Source',
    desc: 'We partner with vetted suppliers for quality pet products at competitive terms.',
  },
  {
    n: '02',
    title: 'List',
    desc: 'Products are listed on Shopify and Amazon with clear descriptions and accurate inventory.',
  },
  {
    n: '03',
    title: 'Fulfill',
    desc: 'Orders are processed and shipped promptly, with support for retail and wholesale buyers.',
  },
];

const faqs = [
  {
    q: 'What does Paudelon LLC do?',
    a: 'Paudelon LLC is a Wyoming-based e-commerce company engaged in online retail, wholesale, and dropshipping of pet products through Shopify, Amazon, and other lawful sales channels.',
  },
  {
    q: 'Where can I buy your products?',
    a: 'Our pet products are sold through our Shopify store and on Amazon. Wholesale buyers can contact us directly for bulk pricing and availability.',
  },
  {
    q: 'What types of pet products do you sell?',
    a: 'We offer pet food and treats, toys, grooming supplies, beds, health products, and everyday accessories for dogs, cats, and other household pets.',
  },
  {
    q: 'Do you offer wholesale or bulk orders?',
    a: 'Yes. We supply retailers, groomers, and pet businesses with wholesale pricing on select product lines. Send an inquiry with your company details and estimated volume.',
  },
  {
    q: 'How are orders shipped?',
    a: 'Retail orders ship through our standard e-commerce fulfillment process. Wholesale and bulk orders follow agreed delivery terms outlined at the time of purchase.',
  },
  {
    q: 'How do I contact Paudelon LLC?',
    a: 'Email sujanpaudel368@gmail.com or use the contact form. We respond to order questions, wholesale requests, and general business inquiries.',
  },
];

export default function HomePage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Paudelon LLC</span>
            <h1>Quality pet products, sold online.</h1>
            <p>
              A US e-commerce business offering pet supplies through Shopify, Amazon, wholesale, and
              dropshipping channels.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Contact us
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-secondary">
                What we sell
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/hero_paudelon.png"
              alt="Pet products for online retail"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 480px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Business</span>
            <h2>How we operate</h2>
            <p>
              Paudelon LLC engages in e-commerce, online retail, wholesale, dropshipping, and other
              lawful business activities focused on the pet products market.
            </p>
          </div>
          <div className="split-list">
            {channels.map((item) => (
              <div className="split-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="btn btn-secondary btn-sm" onClick={() => openQuote(item.service)}>
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="process-layout">
            <div className="section-head process-intro">
              <span className="eyebrow">Process</span>
              <h2>From supplier to customer</h2>
              <p>A straightforward e-commerce model built for reliable online sales.</p>
            </div>
            <ol className="process-list">
              {steps.map((step) => (
                <li className="process-item" key={step.n}>
                  <span className="process-index" aria-hidden>
                    {step.n}
                  </span>
                  <div className="process-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Products</span>
            <h2>Pet product categories</h2>
            <p>Everyday essentials and specialty items for pets and their owners.</p>
          </div>
          <div className="feature-grid">
            {categories.map((item) => (
              <div key={item}>
                <Check size={18} style={{ marginBottom: '0.5rem' }} />
                <h3>{item}</h3>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            <Link href="/pricing" className="text-link">
              View all categories
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </div>
          <Accordion items={faqs} />
          <p style={{ marginTop: '1rem' }}>
            <Link href="/faq" className="text-link">
              More questions
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Wholesale or partnership inquiry?</h2>
              <p>
                Reach out with your business details. We reply to retail, wholesale, and supplier
                questions.
              </p>
            </div>
            <button className="btn btn-primary" onClick={() => openQuote('Wholesale Inquiry')}>
              Send inquiry
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
