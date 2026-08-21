'use client';

import { useMemo, useState } from 'react';
import { Check, Search } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

const servicesData = [
  {
    category: 'Email',
    title: 'Email marketing',
    desc: 'Campaign planning, templates, and reporting for regular sends.',
    deliverables: ['Template design', 'Campaign copy', 'List hygiene', 'Performance summary'],
  },
  {
    category: 'Email',
    title: 'Email automation',
    desc: 'Triggered flows for welcome, nurture, and re-engagement.',
    deliverables: ['Welcome series', 'Behavioral triggers', 'Tagging setup', 'Flow QA'],
  },
  {
    category: 'Web',
    title: 'Website development',
    desc: 'Clean, fast sites built for clarity and conversions.',
    deliverables: ['Responsive build', 'Basic SEO setup', 'Form integrations', 'Handoff docs'],
  },
  {
    category: 'Web',
    title: 'Website maintenance',
    desc: 'Updates, backups, and small content changes over time.',
    deliverables: ['Monitoring', 'Security updates', 'Backups', 'Content edits'],
  },
  {
    category: 'IT',
    title: 'IT & deliverability',
    desc: 'DNS auth, email platforms, and practical technical support.',
    deliverables: ['SPF / DKIM / DMARC', 'Platform setup', 'Migration help', 'Support hours'],
  },
  {
    category: 'Automation',
    title: 'Business automation',
    desc: 'Connect tools so data moves without double entry.',
    deliverables: ['Workflow mapping', 'Integrations', 'Notifications', 'Error checks'],
  },
];

const categories = ['All', 'Email', 'Web', 'IT', 'Automation'];

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
          <span className="eyebrow">Services</span>
          <h1>Work we take on</h1>
          <p>Email, web, IT, and automation—each with a clear deliverable list.</p>
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
                  Request quote
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
