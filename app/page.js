'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Accordion from '@/components/Accordion';
import ProductCard from '@/components/ProductCard';
import TrustStrip from '@/components/TrustStrip';
import CategoryCarousel from '@/components/CategoryCarousel';
import ReviewsSection from '@/components/ReviewsSection';
import { consumerFaqs, heroBadges } from '@/lib/homeContent';
import { products } from '@/lib/products';

const featuredProducts = products.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section className="hero hero-lifestyle">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-accent">Paudelon</span>
            <h1>Premium essentials your pets will love</h1>
            <p>
              Thoughtfully sourced treats, toys, and everyday care — made for happy dogs, curious
              cats, and the people who adore them.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn btn-primary">
                Shop bestsellers
                <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn btn-secondary">
                Browse all
              </Link>
            </div>
            <div className="hero-badges">
              {heroBadges.map((badge) => (
                <span key={badge} className="hero-badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-visual hero-visual-framed">
            <Image
              src="/images/hero_pet.png"
              alt="Happy dog with premium pet treats and toys"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 480px"
              className="hero-photo"
            />
            <div className="hero-float hero-float-top">★ 4.9/5</div>
            <div className="hero-float hero-float-bottom">Natural ingredients</div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-accent">Shop by category</span>
            <h2>Find what your pet needs</h2>
            <p>Swipe through our most popular categories.</p>
          </div>
          <CategoryCarousel />
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-accent">Bestsellers</span>
            <h2>Featured products</h2>
            <p>Customer favorites for daily treats, playtime, and cozy comfort.</p>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <p className="section-cta-link">
            <Link href="/products" className="text-link">
              View all products →
            </Link>
          </p>
        </div>
      </section>

      <ReviewsSection />

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="section-head section-head-center">
            <span className="eyebrow eyebrow-accent">FAQ</span>
            <h2>Questions? We&apos;ve got answers.</h2>
          </div>
          <Accordion items={consumerFaqs} />
          <p className="section-cta-link section-cta-link-center">
            <Link href="/faq" className="text-link">
              More questions →
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="cta-band cta-band-warm">
            <div>
              <h2>Wholesale & retail partners</h2>
              <p>Bulk pricing for groomers, retailers, and pet businesses.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Wholesale inquiry
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
