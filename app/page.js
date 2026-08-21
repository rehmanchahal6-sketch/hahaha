'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

const capabilities = [
  {
    title: 'Email marketing',
    desc: 'Campaigns, segmentation, and reporting that turn your list into a steady revenue channel.',
    service: 'Email Marketing Campaigns',
  },
  {
    title: 'Email automation',
    desc: 'Welcome series, nurture drips, and trigger flows that keep working after you log off.',
    service: 'Email Automation',
  },
  {
    title: 'IT services',
    desc: 'Domain auth, cloud hygiene, and practical support so your stack stays dependable.',
    service: 'IT Consulting & Support',
  },
  {
    title: 'Web solutions',
    desc: 'Fast sites and integrations built for clarity, leads, and long-term maintenance.',
    service: 'Website Development',
  },
];

const steps = [
  {
    n: '01',
    title: 'Discover',
    desc: 'We audit your tools, deliverability, and goals, then agree on a focused roadmap.',
  },
  {
    n: '02',
    title: 'Build',
    desc: 'We configure platforms, ship automations, and harden the systems your team relies on.',
  },
  {
    n: '03',
    title: 'Grow',
    desc: 'We monitor performance, refine campaigns, and keep infrastructure current as you scale.',
  },
];

const reasons = [
  {
    title: 'Business outcomes first',
    desc: 'Every build ties back to operations and revenue—not vanity dashboards.',
  },
  {
    title: 'Clear pricing',
    desc: 'Scoped quotes up front. No surprise retainers buried in the fine print.',
  },
  {
    title: 'Direct communication',
    desc: 'You work with people who know your stack, not a rotating ticket queue.',
  },
];

const packages = [
  {
    tag: 'Starter',
    title: 'Essential Setup',
    desc: 'Foundation work for teams getting email and domain authentication right.',
    featured: false,
    items: [
      'SPF / DKIM / DMARC setup',
      'Email platform integration',
      'One welcome automation',
      'Branded email template',
      'Monthly health report',
    ],
    service: 'Starter Package',
  },
  {
    tag: 'Growth',
    title: 'Growth Engine',
    desc: 'Ongoing campaigns, nurture flows, and light web care for active SMBs.',
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
    title: 'Full Stack Partner',
    desc: 'Custom IT, automation, and development when you need a dedicated operator.',
    featured: false,
    items: [
      'Everything in Growth',
      'IT consulting & support',
      'Custom web / API work',
      'Cross-tool workflows',
      'Priority technical support',
    ],
    service: 'Business Package',
  },
];

const faqs = [
  {
    q: 'What do you actually do?',
    a: 'Email marketing and automation, CRM/platform setup, website builds and maintenance, business automation, and practical IT support for SMBs.',
  },
  {
    q: 'Who is this for?',
    a: 'Small and mid-size teams, B2B service firms, and ecommerce brands that need dependable tech and email systems without hiring a full in-house stack.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most email and platform setups land in 1–2 weeks. Custom websites and deeper IT work typically take 2–4 weeks depending on scope.',
  },
  {
    q: 'Can you work with what we already have?',
    a: 'Yes. We integrate with common email platforms and web stacks—including Klaviyo, ActiveCampaign, HubSpot, WordPress, Shopify, and custom React sites.',
  },
];

export default function HomePage() {
  const { openQuote } = useQuote();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Image
            src="/images/hero_dashboard.png"
            alt="Paudelon operations dashboard"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-scrim" />
        </div>
        <div className="hero-content">
          <span className="hero-brand">
            Paudel<em>on</em>
          </span>
          <h1>Technology and email that keep your business moving.</h1>
          <p>
            We simplify your stack, automate the repetitive work, and turn email into a channel you can trust.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => openQuote()}>
              Get started
              <ArrowRight size={16} />
            </button>
            <Link href="/services" className="btn btn-secondary">
              See services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we cover</span>
            <h2>Four capabilities. One accountable team.</h2>
            <p>Pick a lane or combine them—we keep the systems connected.</p>
          </div>
          <div className="split-list">
            {capabilities.map((item) => (
              <div className="split-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="btn btn-ghost btn-sm" onClick={() => openQuote(item.service)}>
                  Request quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(247, 248, 250, 0.7)' }}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">How we work</span>
            <h2>Discover. Build. Grow.</h2>
            <p>A short path from audit to systems that stay useful.</p>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <div key={step.n}>
                <span className="step-num">{step.n}</span>
                <h3 style={{ marginBottom: '0.55rem' }}>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why teams stay</span>
            <h2>Practical partners, not another SaaS wrapper.</h2>
          </div>
          <div className="feature-strip">
            {reasons.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(247, 248, 250, 0.7)' }}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Packages</span>
            <h2>Start with a clear scope.</h2>
            <p>Every package ends with a transparent quote—not a black-box retainer.</p>
          </div>
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

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-head center" style={{ marginInline: 'auto' }}>
            <span className="eyebrow">FAQ</span>
            <h2>Straight answers.</h2>
          </div>
          <div className="accordion">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  {faq.q}
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === index ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s ease',
                      color: 'var(--accent)',
                    }}
                  />
                </button>
                {openFaq === index && <div className="accordion-content">{faq.a}</div>}
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <Link href="/faq" style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)', fontWeight: 650 }}>
              Browse all questions →
            </Link>
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="cta-band">
            <h2>Ready for a smarter setup?</h2>
            <p>Tell us where your systems are stuck. We will propose a focused plan and a clear number.</p>
            <button className="btn btn-primary" onClick={() => openQuote()}>
              Request a quote
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
