'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Check, Search } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

const servicesData = [
  {
    category: 'Email Marketing',
    title: 'Email Marketing Campaigns',
    desc: 'Broadcast strategy, copy, templates, and reporting that keep your list productive.',
    deliverables: [
      'Responsive branded templates',
      'Campaign copy and subject testing',
      'List segmentation',
      'Performance reporting',
    ],
    techStack: 'Klaviyo, Mailchimp, ActiveCampaign, HubSpot',
  },
  {
    category: 'Email Marketing',
    title: 'Email Automation',
    desc: 'Triggered flows that nurture leads and retain customers without daily manual sends.',
    deliverables: [
      'Welcome series',
      'Re-engagement sequences',
      'Behavioral triggers',
      'Tagging and scoring',
    ],
    techStack: 'Klaviyo, ActiveCampaign, Make, Zapier',
  },
  {
    category: 'Email Marketing',
    title: 'Lead Nurturing',
    desc: 'Multi-step drips that educate prospects and move them toward a decision.',
    deliverables: [
      'Funnel architecture',
      'Educational sequences',
      'Lead qualification paths',
      'Conversion tracking',
    ],
    techStack: 'HubSpot CRM, ActiveCampaign, ConvertKit',
  },
  {
    category: 'IT & Infrastructure',
    title: 'CRM & Email Platform Setup',
    desc: 'Clean migrations, DNS authentication, and platform configuration done properly.',
    deliverables: [
      'SPF, DKIM, DMARC',
      'List hygiene and imports',
      'CRM field and pipeline setup',
      'Team roles and access',
    ],
    techStack: 'DNS, Cloudflare, CRM APIs',
  },
  {
    category: 'Web Solutions',
    title: 'Website Development',
    desc: 'Fast, clear sites and landing pages built to represent the brand and capture leads.',
    deliverables: [
      'Responsive UI',
      'Speed and SEO basics',
      'Lead capture integrations',
      'CMS or custom stack',
    ],
    techStack: 'React, Next.js, WordPress, Shopify',
  },
  {
    category: 'Web Solutions',
    title: 'Website Maintenance',
    desc: 'Updates, backups, monitoring, and content edits so the site stays healthy.',
    deliverables: [
      'Uptime monitoring',
      'Security patches',
      'Backups',
      'Content updates',
    ],
    techStack: 'SSL, CDN, Git',
  },
  {
    category: 'Automation',
    title: 'Business Automation',
    desc: 'API and workflow connections that cut double entry across sales and ops tools.',
    deliverables: [
      'CRM ↔ email sync',
      'Webhook integrations',
      'Sales alerts',
      'Internal report triggers',
    ],
    techStack: 'Zapier, Make, REST APIs',
  },
  {
    category: 'IT & Infrastructure',
    title: 'IT Consulting & Support',
    desc: 'Practical guidance on email security, cloud tools, and day-to-day technical support.',
    deliverables: [
      'Stack audit and roadmap',
      'Business email migration',
      'Security guidance',
      'Helpdesk support',
    ],
    techStack: 'Google Workspace, Microsoft 365, AWS, DNS',
  },
];

const categories = ['All', 'Email Marketing', 'Web Solutions', 'Automation', 'IT & Infrastructure'];

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
          s.desc.toLowerCase().includes(q) ||
          s.techStack.toLowerCase().includes(q);
        return catOk && searchOk;
      }),
    [filter, searchTerm]
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Work that keeps systems and revenue connected.</h1>
          <p>
            Browse IT, email, automation, and web services built for small and mid-size teams.
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
              placeholder="Search services or tools…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="services-grid">
            {filtered.map((item) => (
              <article key={item.title} className="panel-interactive">
                <span className="tag">{item.category}</span>
                <h3 style={{ margin: '0.6rem 0 0.5rem' }}>{item.title}</h3>
                <p style={{ marginBottom: '1rem' }}>{item.desc}</p>
                <div style={{ display: 'grid', gap: '0.45rem', marginBottom: '1rem' }}>
                  {item.deliverables.map((d) => (
                    <div className="check-row" key={d}>
                      <Check size={15} />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '0.85rem', marginBottom: '1.1rem', color: 'var(--dim)' }}>
                  Tools: {item.techStack}
                </p>
                <button className="btn btn-primary btn-full" onClick={() => openQuote(item.title)}>
                  Request quote
                  <ArrowRight size={15} />
                </button>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', padding: '3rem 0' }}>No matching services. Try another filter.</p>
          )}
        </div>
      </section>
    </>
  );
}
