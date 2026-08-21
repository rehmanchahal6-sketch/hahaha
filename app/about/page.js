'use client';

import { ArrowRight } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

const pillars = [
  {
    title: 'Practical excellence',
    desc: 'Clean setups, authenticated email, and infrastructure that holds up under real use.',
  },
  {
    title: 'Scope transparency',
    desc: 'Proposals spell out deliverables, timelines, and cost before work starts.',
  },
  {
    title: 'Conversion focus',
    desc: 'Email and web work measured by qualified leads and retained customers—not vanity metrics.',
  },
  {
    title: 'Long-term support',
    desc: 'We stay after launch to monitor, maintain, and improve what we built.',
  },
];

export default function AboutPage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1>Operators for growing businesses.</h1>
          <p>
            Nexora Digital is a B2B studio for IT, email automation, and web systems—built for teams that need results without the agency theater.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Why we exist</span>
          <h2 style={{ marginBottom: '1rem' }}>One team instead of three vendors.</h2>
          <p style={{ marginBottom: '1rem' }}>
            Most SMBs juggle separate IT help, email marketers, and web freelancers. Systems drift apart. Messages bounce. Sites slow down. Nobody owns the full picture.
          </p>
          <p>
            We close that gap: deliverability and DNS, automated customer journeys, and websites that actually support the sales motion—under one accountable partner.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(247, 248, 250, 0.7)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Principles</span>
            <h2>What guides the work.</h2>
          </div>
          <div className="feature-strip">
            {pillars.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="cta-band">
            <h2>Prefer a direct conversation?</h2>
            <p>We will review your current setup and tell you honestly what is worth fixing first.</p>
            <button className="btn btn-primary" onClick={() => openQuote()}>
              Work with us
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
