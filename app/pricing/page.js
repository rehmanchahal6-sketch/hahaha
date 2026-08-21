'use client';

import { ArrowRight, Check } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';
import Reveal from '@/components/Reveal';
import MagneticButton from '@/components/MagneticButton';

const packages = [
  {
    tag: 'Launch',
    title: 'Framework Setup',
    desc: 'Core email & SMS flows, authentication, and creative foundations.',
    featured: false,
    items: [
      'Lifecycle flow build',
      'SMS channel setup',
      'Deliverability basics',
      'Branded templates',
      'Kickoff reporting',
    ],
    service: 'Framework Setup',
  },
  {
    tag: 'Growth',
    title: 'Retention Engine',
    desc: 'Ongoing campaigns, testing, and optimization for brands ready to scale.',
    featured: true,
    items: [
      'Everything in Launch',
      'Monthly campaign calendar',
      'Continuous A/B testing',
      'Dedicated optimization',
      'Bi-weekly strategy calls',
    ],
    service: 'Retention Engine',
  },
  {
    tag: 'Scale',
    title: 'Full Partnership',
    desc: 'Senior retention partnership with deeper creative and consulting bandwidth.',
    featured: false,
    items: [
      'Everything in Growth',
      'Advanced segmentation',
      'Priority production',
      'Custom reporting',
      'Executive consults',
    ],
    service: 'Full Partnership',
  },
];

export default function PricingPage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h1>Packages that match how retention actually works.</h1>
          <p>Start with setup, grow into always-on optimization. Final scopes are confirmed on your call.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {packages.map((pkg, idx) => (
              <Reveal
                key={pkg.title}
                className={`price-card ${pkg.featured ? 'featured' : ''}`}
                delay={idx * 80}
              >
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
                <MagneticButton
                  className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'} btn-full btn-arrow`}
                  onClick={() => openQuote(pkg.service)}
                >
                  Book a call
                  <ArrowRight size={15} />
                </MagneticButton>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
