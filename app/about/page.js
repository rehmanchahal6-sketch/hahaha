'use client';

import { ArrowRight } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';
import Reveal from '@/components/Reveal';
import MagneticButton from '@/components/MagneticButton';

const experts = [
  {
    initials: 'ST',
    title: 'Strategy leads',
    desc: 'Lifecycle maps, offer architecture, and retention KPIs tied to real revenue—not vanity metrics.',
  },
  {
    initials: 'CR',
    title: 'Creative & production',
    desc: 'On-brand emails and SMS that pass daily QA and stay consistent across every campaign.',
  },
  {
    initials: 'OP',
    title: 'Optimization desk',
    desc: 'Always-on testing and iteration so winning ideas get scaled across your whole program.',
  },
];

export default function AboutPage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Experts</span>
          <h1>Retention-obsessed operators.</h1>
          <p>
            Paudelon isn’t a generic marketing shop. We live in flows, QA, and brand synergy—so DTC brands get a retention partner that actually scales.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How we show up</span>
            <h2>What that means for your brand.</h2>
          </Reveal>
          <div className="experts-grid">
            {experts.map((item, idx) => (
              <Reveal key={item.title} className="expert-card" delay={idx * 80}>
                <div className="expert-avatar">{item.initials}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal className="cta-band cta-advanced">
            <div>
              <h2>Ready to meet the team?</h2>
              <p>Book a call and we’ll walk through your current retention stack honestly.</p>
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
