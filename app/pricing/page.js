'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

const packages = [
  {
    tag: 'Starter',
    title: 'Essential Setup',
    desc: 'For teams establishing domain security and a first automation.',
    featured: false,
    items: [
      'SPF / DKIM / DMARC',
      'Email platform integration',
      'Welcome drip',
      'Branded template',
      'Monthly health report',
    ],
    service: 'Starter Package',
  },
  {
    tag: 'Growth',
    title: 'Growth Engine',
    desc: 'For businesses that need ongoing campaigns and maintenance.',
    featured: true,
    items: [
      'Everything in Starter',
      'Up to 4 monthly campaigns',
      'Lead nurture sequences',
      'Audience segmentation',
      'Website maintenance',
    ],
    service: 'Growth Package',
  },
  {
    tag: 'Business',
    title: 'Enterprise Solutions',
    desc: 'For custom IT, automation, and development partnerships.',
    featured: false,
    items: [
      'Everything in Growth',
      'IT consulting & security',
      'Custom web / API work',
      'Cross-system workflows',
      'Priority SLA support',
    ],
    service: 'Business Package',
  },
];

const serviceOptions = [
  { id: 'email_marketing', label: 'Email Marketing Campaigns', base: 600 },
  { id: 'email_automation', label: 'Email Automation & Drips', base: 500 },
  { id: 'web_development', label: 'Website Development', base: 800 },
  { id: 'web_maintenance', label: 'Website Maintenance', base: 250 },
  { id: 'it_support', label: 'IT Support & Security', base: 450 },
];

export default function PricingPage() {
  const { openQuote } = useQuote();
  const [selected, setSelected] = useState(['email_marketing', 'email_automation']);
  const [listSize, setListSize] = useState('1k-5k');

  const toggle = (id) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.length > 1 ? prev.filter((x) => x !== id) : prev;
      }
      return [...prev, id];
    });
  };

  const estimate = () => {
    let base = serviceOptions
      .filter((s) => selected.includes(s.id))
      .reduce((sum, s) => sum + s.base, 0);
    if (listSize === '5k-15k') base *= 1.25;
    if (listSize === '15k+') base *= 1.5;
    return Math.round(base);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h1>Packages with transparent scope.</h1>
          <p>Choose a starting point or estimate a custom mix. Final quotes are itemized before work begins.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {packages.map((pkg) => (
              <div key={pkg.title} className={`price-card ${pkg.featured ? 'featured' : ''}`}>
                <div>
                  <span className="tag">{pkg.tag}</span>
                  <h3>{pkg.title}</h3>
                  <p>{pkg.desc}</p>
                  <ul>
                    {pkg.items.map((line) => (
                      <li key={line}>
                        <Check size={16} />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'} btn-full`}
                  onClick={() => openQuote(pkg.service)}
                >
                  Get a quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(247, 248, 250, 0.7)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="panel" style={{ padding: '2rem' }}>
            <span className="eyebrow">Estimator</span>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Rough monthly baseline</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Select services and list size for a planning number. We refine the real quote after a short discovery call.
            </p>

            <label className="form-label" style={{ marginBottom: '0.65rem', display: 'block' }}>
              Services
            </label>
            <div className="filter-bar" style={{ marginBottom: '1.5rem' }}>
              {serviceOptions.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`filter-chip ${selected.includes(s.id) ? 'active' : ''}`}
                  onClick={() => toggle(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <label className="form-label" style={{ marginBottom: '0.65rem', display: 'block' }}>
              Contact list size
            </label>
            <div className="filter-bar" style={{ marginBottom: '1.75rem' }}>
              {[
                { id: '1k-5k', label: '1k–5k' },
                { id: '5k-15k', label: '5k–15k' },
                { id: '15k+', label: '15k+' },
              ].map((size) => (
                <button
                  key={size.id}
                  type="button"
                  className={`filter-chip ${listSize === size.id ? 'active' : ''}`}
                  onClick={() => setListSize(size.id)}
                >
                  {size.label}
                </button>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--line)',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', color: 'var(--dim)' }}>
                  Estimated monthly baseline
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                  }}
                >
                  ${estimate()}
                  <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--muted)' }}> / mo</span>
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => openQuote(`Custom estimate ($${estimate()}/mo)`)}
              >
                Request detailed quote
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
