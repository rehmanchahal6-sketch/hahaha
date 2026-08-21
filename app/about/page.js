'use client';

import { useQuote } from '@/components/QuoteProvider';

export default function AboutPage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1>A small team focused on useful work.</h1>
          <p>
            Paudelon helps businesses with email, websites, and IT—without the agency noise. We keep scopes clear and communication direct.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 680 }}>
          <h2 style={{ marginBottom: '1rem' }}>Why we exist</h2>
          <p style={{ marginBottom: '1rem' }}>
            Most teams don’t need more tools. They need someone who can connect what they already have, fix what’s broken, and leave things simpler than they found them.
          </p>
          <p>
            That’s the bar we work to—whether it’s deliverability, an automation, or a new site.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="feature-grid">
            <div>
              <h3>Clear scopes</h3>
              <p>You know what’s included before work starts.</p>
            </div>
            <div>
              <h3>Practical builds</h3>
              <p>We prioritize systems you’ll actually use day to day.</p>
            </div>
            <div>
              <h3>Direct contact</h3>
              <p>Questions go to people who know your project.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Want to work together?</h2>
              <p>Send a short note and we’ll take it from there.</p>
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
