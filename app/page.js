'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';
import Accordion from '@/components/Accordion';
import CompanyDetails from '@/components/CompanyDetails';
import ProductCard from '@/components/ProductCard';
import { company, homepageFaqs } from '@/lib/company';
import { products } from '@/lib/products';

const featuredProducts = products.slice(0, 4);
const faqs = homepageFaqs;

const channels = [
  {
    title: 'Shopify store',
    desc: 'Direct-to-consumer pet products through our branded online store.',
    service: 'Shopify Store',
  },
  {
    title: 'Amazon',
    desc: 'Curated pet supplies listed and fulfilled through Amazon marketplace channels.',
    service: 'Amazon Marketplace',
  },
  {
    title: 'Wholesale',
    desc: 'Bulk orders for retailers, groomers, and pet businesses seeking reliable supply.',
    service: 'Wholesale Inquiry',
  },
  {
    title: 'Dropshipping',
    desc: 'Efficient fulfillment partnerships that keep inventory lean and orders moving.',
    service: 'Dropshipping',
  },
];

const categories = [
  'Pet food & treats',
  'Toys & enrichment',
  'Grooming & hygiene',
  'Beds & travel gear',
  'Health & wellness',
  'Bowls & feeding accessories',
];

const steps = [
  {
    n: '01',
    title: 'Source',
    desc: 'We partner with vetted suppliers for quality pet products at competitive terms.',
  },
  {
    n: '02',
    title: 'List',
    desc: 'Products are listed on Shopify and Amazon with clear descriptions and accurate inventory.',
  },
  {
    n: '03',
    title: 'Fulfill',
    desc: 'Orders are processed and shipped promptly, with support for retail and wholesale buyers.',
  },
];

export default function HomePage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Paudelon LLC</span>
            <h1>Quality pet products, sold online.</h1>
            <p>
              A US e-commerce business offering pet supplies through Shopify, Amazon, wholesale, and
              dropshipping channels.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn btn-primary">
                Shop products
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn btn-secondary">
                About Us
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/hero_pet.png"
              alt="Pet products including toys, treats, and supplies for dogs and cats"
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
            <span className="eyebrow">Business</span>
            <h2>How we operate</h2>
            <p>
              Paudelon LLC engages in e-commerce, online retail, wholesale, dropshipping, and other
              lawful business activities focused on the pet products market.
            </p>
          </div>
          <div className="split-list">
            {channels.map((item) => (
              <div className="split-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="btn btn-secondary btn-sm" onClick={() => openQuote(item.service)}>
                  Learn more
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
              <h2>From supplier to customer</h2>
              <p>A straightforward e-commerce model built for reliable online sales.</p>
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

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Shop</span>
            <h2>Featured products</h2>
            <p>Popular pet products from the {company.legalName} catalog.</p>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            <Link href="/products" className="text-link">
              View all products →
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Categories</span>
            <h2>Pet product categories</h2>
            <p>Everyday essentials and specialty items for pets and their owners.</p>
          </div>
          <div className="feature-grid">
            {categories.map((item) => (
              <div key={item}>
                <Check size={18} style={{ marginBottom: '0.5rem' }} />
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="policy-trust-bar">
            <h2>Store policies</h2>
            <p>Transparent policies for shipping, returns, privacy, and terms of service.</p>
            <div className="policy-links-row">
              <Link href="/shipping">Shipping Policy</Link>
              <Link href="/refund-policy">Returns & Refunds</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <span className="eyebrow">Company</span>
            <h2>Official business information</h2>
            <p>Registered details for {company.legalName}. For the full corporate disclosure, visit our <Link href="/company" className="text-link">Corporate Information</Link> page.</p>
          </div>
          <CompanyDetails title="" />
        </div>
      </section>

      <section className="section section-alt">
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

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Wholesale or partnership inquiry?</h2>
              <p>
                Reach out with your business details. We reply to retail, wholesale, and supplier
                questions.
              </p>
            </div>
            <button className="btn btn-primary" onClick={() => openQuote('Wholesale Inquiry')}>
              Send inquiry
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
