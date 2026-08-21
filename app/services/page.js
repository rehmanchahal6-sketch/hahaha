'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Check, Search } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';
import Reveal from '@/components/Reveal';

const servicesData = [
  {
    category: 'Setup',
    title: 'Email & SMS framework setup',
    desc: 'Workflows that nurture leads, recover carts, and reward loyal shoppers with segmented, personalized messaging.',
    deliverables: [
      'Core lifecycle flows',
      'Email + SMS channel setup',
      'Segmentation foundations',
      'Template system',
    ],
  },
  {
    category: 'Campaigns',
    title: 'Strategic campaigns',
    desc: 'Data-backed promotions for launches, holidays, and always-on revenue pushes.',
    deliverables: [
      'Campaign calendar',
      'Audience targeting',
      'Offer & creative strategy',
      'Launch QA',
    ],
  },
  {
    category: 'Optimization',
    title: 'Continuous A/B testing',
    desc: 'Systematic experiments on subject lines, layouts, and offers that compound performance.',
    deliverables: [
      'Test roadmap',
      'Creative variants',
      'Statistical readouts',
      'Winner rollouts',
    ],
  },
  {
    category: 'Optimization',
    title: 'Dedicated optimization',
    desc: 'Ongoing tuning of timing, copy, and channel mix based on live performance.',
    deliverables: [
      'Weekly performance review',
      'Flow upgrades',
      'Send-time refinement',
      'Cross-channel scaling',
    ],
  },
  {
    category: 'Strategy',
    title: 'Reporting & consultation',
    desc: 'Clear attribution and consultative guidance so you always know what to do next.',
    deliverables: [
      'Revenue reporting',
      'Insight sessions',
      'Priority roadmap',
      'Growth recommendations',
    ],
  },
  {
    category: 'Setup',
    title: 'Deliverability & list health',
    desc: 'Inbox placement, authentication, and list hygiene so your best work actually gets seen.',
    deliverables: [
      'SPF / DKIM / DMARC',
      'List cleaning',
      'Complaint monitoring',
      'Sender reputation care',
    ],
  },
];

const categories = ['All', 'Setup', 'Campaigns', 'Optimization', 'Strategy'];

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
          !q ||
          s.title.toLowerCase().includes(q) ||
          s.desc.toLowerCase().includes(q);
        return catOk && searchOk;
      }),
    [filter, searchTerm]
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Retention systems that scale with you.</h1>
          <p>
            Full-funnel email & SMS—from framework setup to testing, optimization, and reporting.
          </p>
        </div>
      </section>

      <section className="section-tight">
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

          <div style={{ position: 'relative', maxWidth: 420, marginBottom: '2rem' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--dim)',
              }}
            />
            <input
              className="form-input"
              style={{ paddingLeft: '2.4rem' }}
              placeholder="Search services…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="services-grid">
            {filtered.map((item, idx) => (
              <Reveal key={item.title} as="article" className="panel-interactive" delay={(idx % 4) * 70}>
                <span className="tag">{item.category}</span>
                <h3 style={{ margin: '0.6rem 0 0.5rem' }}>{item.title}</h3>
                <p style={{ marginBottom: '1rem' }}>{item.desc}</p>
                <div style={{ display: 'grid', gap: '0.45rem', marginBottom: '1.1rem' }}>
                  {item.deliverables.map((d) => (
                    <div className="check-row" key={d}>
                      <Check size={15} />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary btn-full btn-arrow" onClick={() => openQuote(item.title)}>
                  Book a call
                  <ArrowRight size={15} />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
