'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Play } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';
import Reveal from '@/components/Reveal';
import MagneticButton from '@/components/MagneticButton';

const experts = [
  {
    initials: 'PR',
    name: 'Retention Strategy',
    role: 'Lifecycle systems',
    desc: 'Flow architecture, segmentation, and offer strategy built around repeat purchase behavior.',
  },
  {
    initials: 'QA',
    name: 'Creative & QA',
    role: 'Daily polish',
    desc: 'On-brand templates, inbox QA, and creative that stays sharp across every send.',
  },
  {
    initials: 'DX',
    name: 'Data & Optimization',
    role: 'Always testing',
    desc: 'A/B tests, attribution reads, and weekly iteration so revenue compounds over time.',
  },
];

const services = [
  {
    n: '01',
    title: 'Email & SMS framework setup',
    desc: 'Core flows that nurture leads, recover carts, and reward loyal buyers—with segmentation and templates that feel personal at scale.',
  },
  {
    n: '02',
    title: 'Strategic campaigns',
    desc: 'Launches, promos, and seasonal pushes mapped from purchase data and on-site behavior so every send hits the right audience.',
  },
  {
    n: '03',
    title: 'Continuous A/B testing',
    desc: 'Subject lines, layouts, offers, and timing tested on a loop. Winners get replicated across the program.',
  },
  {
    n: '04',
    title: 'Dedicated optimization',
    desc: 'We watch CTR, AOV, and repeat rate—and adjust copy, timing, and channels before performance stalls.',
  },
  {
    n: '05',
    title: 'Reporting & consultation',
    desc: 'Clear revenue attribution, practical recommendations, and a roadmap for what to scale next.',
  },
];

const cases = [
  {
    brand: 'DTC skincare',
    metric: '+38%',
    label: 'repeat purchase rate',
    note: 'Rebuilt welcome + post-purchase flows with tighter segmentation.',
  },
  {
    brand: 'Apparel brand',
    metric: '2.4x',
    label: 'email-attributed revenue',
    note: 'Campaign calendar + SMS layer for peak season launches.',
  },
  {
    brand: 'Lifestyle ecommerce',
    metric: '-22%',
    label: 'unsubscribe rate',
    note: 'Cleaned sends, improved relevance, and raised engagement quality.',
  },
];

export default function HomePage() {
  const { openQuote } = useQuote();
  const [email, setEmail] = useState('');
  const [waitlistDone, setWaitlistDone] = useState(false);

  const joinWaitlist = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setWaitlistDone(true);
  };

  return (
    <>
      <section className="hero-agency">
        <div className="hero-agency-media">
          <Image
            src="/images/hero_retention.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-agency-scrim" />
        </div>
        <div className="hero-agency-content">
          <span className="eyebrow hero-anim" style={{ '--d': '0ms' }}>
            Paudelon Retention Expertise
          </span>
          <h1 className="hero-anim" style={{ '--d': '80ms' }}>
            Only retention partner <em>you need to scale.</em>
          </h1>
          <p className="hero-anim" style={{ '--d': '180ms' }}>
            Email & SMS systems that turn one-time buyers into repeat customers—built for DTC brands ready to grow with retention, not just ads.
          </p>
          <div className="hero-ctas hero-anim" style={{ '--d': '280ms' }}>
            <MagneticButton className="btn btn-primary btn-arrow" onClick={() => openQuote('Book a Call')}>
              Book a call
              <ArrowRight size={16} />
            </MagneticButton>
            <Link href="/services" className="btn btn-secondary">
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal className="stat-row">
            <div>
              <span className="stat-value">60%</span>
              <span className="stat-label">of revenue often comes from repeat customers—stop leaving it on the table</span>
            </div>
            <div>
              <span className="stat-value">$100K+</span>
              <span className="stat-label">built for DTC brands doing meaningful monthly volume</span>
            </div>
            <div>
              <span className="stat-value">Email+SMS</span>
              <span className="stat-label">one retention system across inbox and phone</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">See the work</span>
            <h2>Retention that compounds.</h2>
            <p>Watch how we think about flows, campaigns, and lifecycle systems that keep customers coming back.</p>
          </Reveal>
          <Reveal>
            <div className="video-panel">
              <button type="button" onClick={() => openQuote('Strategy Call')}>
                <span className="play-dot">
                  <Play size={16} fill="currentColor" />
                </span>
                Play intro / book a walkthrough
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Meet the experts</span>
            <h2>Not your typical agency.</h2>
            <p>
              Paudelon is retention-obsessed—data, daily QA, and brand synergy. Here’s what that means for your store.
            </p>
          </Reveal>
          <div className="experts-grid">
            {experts.map((person, idx) => (
              <Reveal key={person.name} className="expert-card" delay={idx * 80}>
                <div className="expert-avatar">{person.initials}</div>
                <h3>{person.name}</h3>
                <span className="expert-role">{person.role}</span>
                <p>{person.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Email & SMS marketing</span>
            <h2>Service package built to raise LTV.</h2>
            <p>
              We turn your store data into segmented, automated marketing—from robust email flows to strategic SMS—so revenue keeps compounding.
            </p>
          </Reveal>
          <div className="service-stack">
            {services.map((item, idx) => (
              <Reveal key={item.n} className="service-row" delay={idx * 60}>
                <span className="service-num">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="btn btn-ghost btn-sm btn-arrow" onClick={() => openQuote(item.title)}>
                  Book a call
                  <ArrowRight size={14} />
                </button>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/services" className="text-link">
              Explore full service directory →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Proof</span>
            <h2>Results that look like this.</h2>
            <p>Retention systems measured by revenue, repeat rate, and cleaner engagement—not vanity opens alone.</p>
          </Reveal>
          <div className="case-grid">
            {cases.map((item, idx) => (
              <Reveal key={item.brand} className="case-card" delay={idx * 80}>
                <span className="tag">{item.brand}</span>
                <span className="case-metric">{item.metric}</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.label}</h3>
                <p>{item.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="waitlist-band">
            <span className="eyebrow">The Paudelon playbook</span>
            <h2>Join the waitlist.</h2>
            <p>
              A practical retention guide packed with testing insights and frameworks brands use to scale email & SMS—be first when it drops.
            </p>
            {waitlistDone ? (
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)', fontWeight: 700 }}>
                You’re on the list. We’ll be in touch.
              </p>
            ) : (
              <form className="newsletter" onSubmit={joinWaitlist}>
                <input
                  className="form-input"
                  type="email"
                  required
                  placeholder="you@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                  Join the waitlist
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal className="cta-band cta-advanced">
            <div>
              <span className="eyebrow">Next step</span>
              <h2>Book your call now.</h2>
              <p>
                Connect with the team, review your current flows, and get a clear plan to grow retention revenue.
              </p>
            </div>
            <MagneticButton className="btn btn-primary btn-arrow" onClick={() => openQuote('Book a Call')}>
              Book a call
              <ArrowRight size={16} />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
