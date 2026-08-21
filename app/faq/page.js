'use client';

import { useMemo, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

const faqItems = [
  {
    category: 'General',
    q: 'What services do you offer?',
    a: 'Email marketing, automation, website development and maintenance, business automation, and IT support.',
  },
  {
    category: 'General',
    q: 'Who do you work with?',
    a: 'Small and mid-size businesses that need reliable help without a large in-house team.',
  },
  {
    category: 'Platforms',
    q: 'Which platforms do you specialize in?',
    a: 'Email: Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and ConvertKit. Web: WordPress, Shopify, and custom React/Next.js sites. We also work with Google Workspace and Microsoft 365.',
  },
  {
    category: 'Platforms',
    q: 'Can you work with our existing tools?',
    a: 'Yes. We usually start with what you already use and only recommend a switch when it clearly solves a problem.',
  },
  {
    category: 'Security',
    q: 'How do you handle our data?',
    a: 'We only use access required for the contracted work. We do not sell, rent, or share your contact lists or customer data with third parties for marketing.',
  },
  {
    category: 'Security',
    q: 'What about account security and credentials?',
    a: 'Prefer least-privilege access, shared password managers when possible, and we document changes. You can revoke access when a project or retainer ends.',
  },
  {
    category: 'Security',
    q: 'Do you help with email authentication and deliverability?',
    a: 'Yes. SPF, DKIM, and DMARC setup is a common starting point, along with list hygiene and sender reputation checks.',
  },
  {
    category: 'Process',
    q: 'How long do projects take?',
    a: 'Most email and setup work takes 1–2 weeks. Custom websites usually take 2–4 weeks depending on scope.',
  },
  {
    category: 'Process',
    q: 'How do quotes work?',
    a: 'We confirm scope first, then send a written quote. Work starts after you approve it.',
  },
  {
    category: 'Support',
    q: 'Do you offer ongoing help?',
    a: 'Yes. We can retain for campaigns, maintenance, and technical support after the initial build.',
  },
  {
    category: 'Support',
    q: 'What happens after launch?',
    a: 'You get a clear handoff of what was built. Optional retainers cover monitoring, updates, and iteration.',
  },
];

const categories = ['All', 'General', 'Platforms', 'Security', 'Process', 'Support'];

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
          <h1>Questions</h1>
          <p>Answers about platforms, security, data handling, timing, and how we work.</p>
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
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>
                {openIndex === idx && <div className="accordion-content">{faq.a}</div>}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ padding: '2rem 0', textAlign: 'center' }}>No matching questions.</p>
          )}

          <div className="cta-band" style={{ marginTop: '2.5rem' }}>
            <div>
              <h2>Still stuck?</h2>
              <p>Ask us directly—happy to clarify.</p>
            </div>
            <button className="btn btn-primary" onClick={() => openQuote()}>
              Get a quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
