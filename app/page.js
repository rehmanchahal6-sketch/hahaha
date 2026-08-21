'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';
import Accordion from '@/components/Accordion';

const services = [
  {
    title: 'Email marketing',
    desc: 'Campaigns, lists, and reporting that keep your audience engaged.',
    service: 'Email Marketing',
  },
  {
    title: 'Automation',
    desc: 'Welcome series, nurture flows, and triggers that run without daily manual work.',
    service: 'Email Automation',
  },
  {
    title: 'Web solutions',
    desc: 'Fast sites and landing pages built to be clear, useful, and easy to maintain.',
    service: 'Website Development',
  },
  {
    title: 'IT support',
    desc: 'Domain setup, deliverability, and practical technical help when you need it.',
    service: 'IT Consulting & Support',
  },
];

const steps = [
  {
    n: '01',
    title: 'Understand',
    desc: 'We review your tools, goals, and constraints before recommending anything.',
  },
  {
    n: '02',
    title: 'Build',
    desc: 'We set up the systems, write the flows, and ship what was agreed—nothing extra.',
  },
  {
    n: '03',
    title: 'Improve',
    desc: 'We monitor results and tighten what matters after launch.',
  },
];

const testimonials = [
  {
    quote:
      'Paudelon cleaned up our email authentication and rebuilt the welcome flow. Deliverability improved within the first month.',
    name: 'Jordan Lee',
    role: 'Operations lead, regional retailer',
  },
  {
    quote:
      'Clear scope, no surprise fees, and the site they shipped is easy for our team to update.',
    name: 'Sam Rivera',
    role: 'Founder, professional services firm',
  },
  {
    quote:
      'We finally have automations that match how we sell—without juggling three different vendors.',
    name: 'Alex Chen',
    role: 'Marketing manager, B2B software',
  },
  {
    quote:
      'They treated DNS and deliverability like a real project, not an afterthought. Inbox placement got noticeably better.',
    name: 'Morgan Blake',
    role: 'E-commerce brand owner',
  },
  {
    quote:
      'Straight answers, written quotes, and work that matched what we agreed. That’s rare.',
    name: 'Casey Nguyen',
    role: 'Director, local services company',
  },
  {
    quote:
      'Our old site was slow and hard to edit. The new one loads fast and we can change content ourselves.',
    name: 'Riley Thompson',
    role: 'Owner, boutique studio',
  },
];

const packages = [
  {
    tag: 'Starter',
    title: 'Setup',
    desc: 'Foundation work for email and domain authentication.',
    featured: false,
    items: ['DNS authentication', 'Platform setup', 'One core automation', 'Branded template'],
    service: 'Starter Package',
  },
  {
    tag: 'Growth',
    title: 'Ongoing',
    desc: 'Monthly campaigns and light maintenance for active teams.',
    featured: true,
    items: ['Everything in Setup', 'Monthly campaigns', 'Flow updates', 'Basic site care'],
    service: 'Growth Package',
  },
  {
    tag: 'Custom',
    title: 'Partner',
    desc: 'Broader IT, web, and automation support under one agreement.',
    featured: false,
    items: ['Everything in Ongoing', 'Custom builds', 'Priority support', 'Direct technical lead'],
    service: 'Business Package',
  },
];

const faqs = [
  {
    q: 'What does Paudelon do?',
    a: 'We help with email marketing, automation, websites, and practical IT support for small and mid-size businesses.',
  },
  {
    q: 'Which platforms do you work with?',
    a: 'Common email tools like Klaviyo, Mailchimp, ActiveCampaign, and HubSpot, plus websites on WordPress, Shopify, or custom React/Next.js stacks.',
  },
  {
    q: 'How do you handle our data and access?',
    a: 'We only request the access needed for the job, use it for contracted work, and do not sell or share your customer lists. Credentials are handled carefully and can be revoked when the project ends.',
  },
  {
    q: 'What about security and email deliverability?',
    a: 'We set up SPF, DKIM, and DMARC where needed, follow secure practices on websites we maintain, and document what was changed so you stay in control.',
  },
  {
    q: 'How do projects usually start?',
    a: 'You request a quote, we ask a few questions, then send a clear scope and price before work begins.',
  },
  {
    q: 'Can you work with tools we already use?',
    a: 'Yes. We prefer to improve what you already have unless a replacement is clearly better for your goals.',
  },
];

export default function HomePage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Paudelon</span>
            <h1>Simple systems that help your business run better.</h1>
            <p>
              Email, automation, websites, and IT support—scoped clearly and built to last.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => openQuote()}>
                Get a quote
                <ArrowRight size={16} />
              </button>
              <Link href="/services" className="btn btn-secondary">
                View services
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/hero_paudelon.png"
              alt="Quiet workspace"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 480px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Services</span>
            <h2>What we help with</h2>
            <p>Four focused areas. Pick one or combine them.</p>
          </div>
          <div className="split-list">
            {services.map((item) => (
              <div className="split-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="btn btn-secondary btn-sm" onClick={() => openQuote(item.service)}>
                  Request quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="process-layout">
            <div className="section-head process-intro">
              <span className="eyebrow">Process</span>
              <h2>How we work</h2>
              <p>Three steps. No mystery phases, no padded timelines.</p>
            </div>
            <ol className="process-list">
              {steps.map((step) => (
                <li className="process-item" key={step.n}>
                  <span className="process-index" aria-hidden>
                    {step.n}
                  </span>
                  <div className="process-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="testimonials">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Testimonials</span>
            <h2>What clients are saying</h2>
            <p>Real feedback from teams we’ve helped with email, web, and IT work.</p>
          </div>
          <div className="testimonials">
            {testimonials.map((item) => (
              <figure className="testimonial" key={item.name}>
                <blockquote>“{item.quote}”</blockquote>
                <cite>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </cite>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Pricing</span>
            <h2>Clear starting points</h2>
            <p>Final quotes are itemized after a short discovery chat.</p>
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
                        <Check size={15} />
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
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </div>
          <Accordion items={faqs} />
          <p style={{ marginTop: '1rem' }}>
            <Link href="/faq" className="text-link">
              More questions
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Have a project in mind?</h2>
              <p>Tell us what you need. We’ll reply with next steps and a clear quote.</p>
            </div>
            <button className="btn btn-primary" onClick={() => openQuote()}>
              Get a quote
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
