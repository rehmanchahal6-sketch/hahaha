'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';
import { useQuote } from '@/components/QuoteProvider';

const productLines = [
  {
    tag: 'Dogs & cats',
    title: 'Food & treats',
    desc: 'Everyday nutrition, treats, and feeding accessories for common household pets.',
    featured: false,
    items: ['Dry & wet food', 'Treats & chews', 'Bowls & feeders', 'Supplements'],
    service: 'Product Inquiry',
  },
  {
    tag: 'All pets',
    title: 'Toys & enrichment',
    desc: 'Interactive and durable products that keep pets active and engaged.',
    featured: true,
    items: ['Chew toys', 'Puzzle feeders', 'Plush & fetch toys', 'Training aids'],
    service: 'Product Inquiry',
  },
  {
    tag: 'Care',
    title: 'Grooming & health',
    desc: 'Hygiene, grooming, and wellness items for routine pet care.',
    featured: false,
    items: ['Brushes & combs', 'Shampoos', 'Dental care', 'Health supplements'],
    service: 'Product Inquiry',
  },
];

const channels = [
  { name: 'Shopify', desc: 'Our direct online store for retail customers.' },
  { name: 'Amazon', desc: 'Marketplace listings for broader nationwide reach.' },
  { name: 'Wholesale', desc: 'Bulk pricing for retailers and pet businesses.' },
];

export default function PricingPage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Products</span>
          <h1>Pet product lines</h1>
          <p>Categories we sell through Shopify, Amazon, wholesale, and dropshipping channels.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {productLines.map((pkg) => (
              <div key={pkg.title} className={`price-card ${pkg.featured ? 'featured' : ''}`}>
                <div>
                  <span className="tag">{pkg.tag}</span>
                  <h3>{pkg.title}</h3>
                  <p>{pkg.desc}</p>
                  <ul>
                    {pkg.items.map((line) => (
                      <li key={line}>
                        <Check size={15} />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'} btn-full`}
                  onClick={() => openQuote(pkg.service)}
                >
                  Contact us
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Channels</span>
            <h2>Where we sell</h2>
            <p>Paudelon LLC sells pet products through established e-commerce platforms.</p>
          </div>
          <div className="feature-grid">
            {channels.map((item) => (
              <div key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            <Link href="/contact" className="text-link">
              Wholesale or order inquiries →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
