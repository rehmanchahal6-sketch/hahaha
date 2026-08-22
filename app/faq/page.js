'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useQuote } from '@/components/QuoteProvider';
import Accordion from '@/components/Accordion';
import { faqItems, company } from '@/lib/company';

const categories = ['All', 'Company', 'General', 'Sales', 'Orders', 'Compliance', 'Contact'];

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
          <h1>Frequently asked questions</h1>
          <p>
            Company information, sales channels, orders, policies, and business verification details
            for {company.legalName}.
          </p>
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
              placeholder="Search questions…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
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

          <div className="trust-panel" style={{ marginTop: '2.5rem' }}>
            <h3>Corporate information</h3>
            <p>
              Official company details are published on our{' '}
              <Link href="/company">Corporate Information</Link> page. For inquiries, contact{' '}
              <a href={`mailto:${company.email}`}>{company.email}</a> or support at{' '}
              <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a>.
            </p>
          </div>

          <div className="cta-band" style={{ marginTop: '2rem' }}>
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
