'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, ChevronDown, Search } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

const faqItems = [
  {
    category: 'General',
    q: 'What services do you provide?',
    a: 'IT services, email marketing campaigns, automation, CRM integrations, website development and maintenance, and business process automation.',
  },
  {
    category: 'General',
    q: 'Who are your services for?',
    a: 'Small and mid-size businesses, B2B firms, ecommerce brands, and professional services teams that need dependable tech and email systems.',
  },
  {
    category: 'Email Marketing',
    q: 'How does email marketing work with Paudelon?',
    a: 'We handle DNS authentication, list hygiene, templates, copy, drip automation, and conversion reporting end to end.',
  },
  {
    category: 'General',
    q: 'How long does setup take?',
    a: 'Email and platform setups usually take 1–2 weeks. Custom websites typically take 2–4 weeks depending on scope.',
  },
  {
    category: 'Support',
    q: 'Do you provide ongoing support?',
    a: 'Yes. Retainers cover ongoing campaigns, maintenance, security updates, and on-demand IT help.',
  },
  {
    category: 'IT & Web',
    q: 'Can you work with existing websites and email platforms?',
    a: 'Yes—WordPress, Shopify, custom stacks, plus Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and ConvertKit.',
  },
  {
    category: 'General',
    q: 'How can I get started?',
    a: 'Request a quote or contact us. We review your setup and send a tailored scope of work.',
  },
  {
    category: 'IT & Web',
    q: 'Why is SPF, DKIM, and DMARC important?',
    a: 'Major inbox providers require authenticated sending. Proper DNS records protect deliverability and domain reputation.',
  },
  {
    category: 'Support',
    q: 'What are your cancellation and refund terms?',
    a: 'Project milestones and retainers follow our Refund and Cancellation policy published on this site.',
  },
];

const categories = ['All', 'General', 'Email Marketing', 'IT & Web', 'Support'];

export default function FAQPage() {
  const { openQuote } = useQuote();
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

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
          <h1>Answers without the fluff.</h1>
          <p>Common questions about services, timelines, platforms, and support.</p>
          <div style={{ position: 'relative', maxWidth: 480, marginTop: '1.5rem' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '0.9rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--dim)',
              }}
            />
            <input
              className="form-input"
              style={{ paddingLeft: '2.5rem' }}
              placeholder="Search questions…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-chip ${category === cat ? 'active' : ''}`}
                onClick={() => {
                  setCategory(cat);
                  setOpenIndex(0);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="accordion">
            {filtered.map((faq, idx) => (
              <div key={faq.q} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                >
                  {faq.q}
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openIndex === idx ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s ease',
                      color: 'var(--accent)',
                    }}
                  />
                </button>
                {openIndex === idx && <div className="accordion-content">{faq.a}</div>}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', padding: '2rem 0' }}>No matching questions.</p>
          )}

          <div className="cta-band" style={{ marginTop: '3rem' }}>
            <h2>Still stuck?</h2>
            <p>Ask us directly—we will walk through your specific setup.</p>
            <button className="btn btn-primary" onClick={() => openQuote()}>
              Talk to the team
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
