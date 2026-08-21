'use client';

import { Check } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

const packages = [
  {
    tag: 'Starter',
    title: 'Setup',
    desc: 'Get the basics right—auth, platform, and one solid automation.',
    featured: false,
    items: ['DNS authentication', 'Email platform setup', 'Welcome flow', 'One template'],
    service: 'Starter Package',
  },
  {
    tag: 'Growth',
    title: 'Ongoing',
    desc: 'Regular campaigns and upkeep for teams that send every month.',
    featured: true,
    items: ['Everything in Setup', 'Monthly campaigns', 'Flow updates', 'Light site care'],
    service: 'Growth Package',
  },
  {
    tag: 'Custom',
    title: 'Partner',
    desc: 'Broader support across IT, web, and automation.',
    featured: false,
    items: ['Everything in Ongoing', 'Custom development', 'Priority support', 'Dedicated lead'],
    service: 'Business Package',
  },
];

export default function PricingPage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h1>Simple packages</h1>
          <p>Starting points only. Every project gets a written quote first.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
    </>
  );
}
