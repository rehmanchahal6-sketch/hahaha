'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useQuote } from '@/components/QuoteProvider';
import Accordion from '@/components/Accordion';

const faqItems = [
  {
    category: 'General',
    q: 'What does Paudelon LLC do?',
    a: 'Paudelon LLC is a Wyoming e-commerce company engaged in online retail, wholesale, and dropshipping of pet products through Shopify, Amazon, and other lawful sales channels.',
  },
  {
    category: 'General',
    q: 'What products do you sell?',
    a: 'We sell pet food and treats, toys, grooming supplies, beds, health products, and everyday accessories for dogs, cats, and other household pets.',
  },
  {
    category: 'General',
    q: 'Where is the company registered?',
    a: 'Paudelon LLC is a Wyoming limited liability company. Our registered mailing address is 30 N Gould St Ste R, Sheridan, WY 82801.',
  },
  {
    category: 'Sales',
    q: 'Where can customers buy your products?',
    a: 'Retail customers can purchase through our Shopify store and Amazon listings. Wholesale buyers should contact us directly for bulk pricing.',
  },
  {
    category: 'Sales',
    q: 'Do you offer wholesale or bulk orders?',
    a: 'Yes. We supply retailers, groomers, and pet businesses with wholesale pricing on select product lines. Include your company name and estimated order volume when you reach out.',
  },
  {
    category: 'Sales',
    q: 'Do you use dropshipping?',
    a: 'Yes. Paudelon LLC uses dropshipping and supplier fulfillment partnerships as part of our e-commerce operations, alongside standard inventory-based sales.',
  },
  {
    category: 'Orders',
    q: 'How are orders fulfilled?',
    a: 'Orders placed on Shopify or Amazon are processed through our standard e-commerce fulfillment workflow. Wholesale orders follow terms agreed at the time of purchase.',
  },
  {
    category: 'Orders',
    q: 'What is your return policy?',
    a: 'Product returns follow the policy stated at checkout on each sales channel. See our Refund Policy page for general guidelines, or contact us for order-specific questions.',
  },
  {
    category: 'Orders',
    q: 'How long does shipping take?',
    a: 'Delivery times depend on the sales channel, product availability, and destination. Estimated delivery windows are shown at checkout on Shopify and Amazon.',
  },
  {
    category: 'Contact',
    q: 'How do I reach Paudelon LLC?',
    a: 'Email sujanpaudel368@gmail.com or use the contact form on our website. We handle retail support, wholesale inquiries, and general business questions.',
  },
  {
    category: 'Contact',
    q: 'Do you work with suppliers or partners?',
    a: 'We evaluate supplier and partnership opportunities related to pet product sourcing and e-commerce fulfillment. Send a brief overview of your company and proposal.',
  },
];

const categories = ['All', 'General', 'Sales', 'Orders', 'Contact'];

export default function FAQPage() {
  const { openQuote } = useQuote();
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      faqItems.filter((item) => {
        const catOk = category === 'All' || item.category === category;
        const q = query.toLowerCase();
        const searchOk =
          !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
        return catOk && searchOk;
      }),
    [category, query]
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h1>Questions</h1>
          <p>Answers about our pet products, sales channels, orders, and wholesale inquiries.</p>
          <div style={{ position: 'relative', maxWidth: 420, marginTop: '1.25rem' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '0.8rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#999',
              }}
            />
            <input
              className="form-input"
              style={{ paddingLeft: '2.3rem' }}
              placeholder="Search…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-chip ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <Accordion key={`${category}-${query}`} items={filtered} />
          ) : (
            <p style={{ padding: '2rem 0', textAlign: 'center' }}>No matching questions.</p>
          )}

          <div className="cta-band" style={{ marginTop: '2.5rem' }}>
            <div>
              <h2>Still have a question?</h2>
              <p>Contact us for order support, wholesale pricing, or general inquiries.</p>
            </div>
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-secondary">
                Contact
              </Link>
              <button className="btn btn-primary" type="button" onClick={() => openQuote()}>
                Send inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
