'use client';

import { useMemo, useState } from 'react';
import { Check, Search } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

const servicesData = [
  {
    category: 'Retail',
    title: 'Shopify store',
    desc: 'Direct-to-consumer pet products through our branded Shopify storefront.',
    deliverables: ['Pet food & treats', 'Toys & accessories', 'Grooming supplies', 'Secure checkout'],
  },
  {
    category: 'Retail',
    title: 'Amazon marketplace',
    desc: 'Pet supplies listed and sold through Amazon for nationwide reach.',
    deliverables: ['Product listings', 'Order fulfillment', 'Customer support', 'Inventory management'],
  },
  {
    category: 'Wholesale',
    title: 'Bulk & B2B orders',
    desc: 'Wholesale pet product supply for retailers, groomers, and pet businesses.',
    deliverables: ['Volume pricing', 'Product selection', 'Delivery coordination', 'Account support'],
  },
  {
    category: 'Wholesale',
    title: 'Dropshipping',
    desc: 'Fulfillment partnerships that support lean inventory and scalable online sales.',
    deliverables: ['Supplier coordination', 'Order routing', 'Tracking updates', 'Returns handling'],
  },
  {
    category: 'Products',
    title: 'Food & nutrition',
    desc: 'Treats, supplements, and feeding essentials for dogs, cats, and small pets.',
    deliverables: ['Dry & wet food', 'Treats & chews', 'Supplements', 'Feeding accessories'],
  },
  {
    category: 'Products',
    title: 'Care & lifestyle',
    desc: 'Everyday items that keep pets comfortable, active, and healthy.',
    deliverables: ['Grooming tools', 'Beds & carriers', 'Toys & enrichment', 'Health & hygiene'],
  },
];

const categories = ['All', 'Retail', 'Wholesale', 'Products'];

export default function ServicesPage() {
  const { openQuote } = useQuote();
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(
    () =>
      servicesData.filter((s) => {
        const catOk = filter === 'All' || s.category === filter;
        const q = searchTerm.toLowerCase();
        const searchOk =
          !q || s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q);
        return catOk && searchOk;
      }),
    [filter, searchTerm]
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">What we sell</span>
          <h1>E-commerce & pet products</h1>
          <p>
            Online retail, wholesale, and dropshipping of pet supplies through Shopify, Amazon, and
            direct business channels.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-chip ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', maxWidth: 380, marginBottom: '1.5rem' }}>
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="services-grid">
            {filtered.map((item) => (
              <article key={item.title} className="panel">
                <span className="tag">{item.category}</span>
                <h3 style={{ margin: '0.5rem 0' }}>{item.title}</h3>
                <p style={{ marginBottom: '0.9rem' }}>{item.desc}</p>
                <div style={{ display: 'grid', gap: '0.4rem', marginBottom: '1rem' }}>
                  {item.deliverables.map((d) => (
                    <div className="check-row" key={d}>
                      <Check size={15} />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary btn-full" onClick={() => openQuote(item.title)}>
                  Contact us
                </button>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ padding: '2rem 0', textAlign: 'center' }}>No matches. Try another filter.</p>
          )}
        </div>
      </section>
    </>
  );
}
