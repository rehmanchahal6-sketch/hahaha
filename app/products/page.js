'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { productCategories, products } from '@/lib/products';
import { company } from '@/lib/company';

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const catOk = filter === 'All' || p.category === filter;
        const q = searchTerm.toLowerCase();
        const searchOk =
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q);
        return catOk && searchOk;
      }),
    [filter, searchTerm]
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Shop</span>
          <h1>Pet products</h1>
          <p>
            Browse the pet product catalog from {company.legalName}. Available through Shopify,
            Amazon, and wholesale inquiry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {productCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-chip ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', maxWidth: 380, marginBottom: '1.5rem' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '0.8rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#999',
              }}
            />
            <input
              className="form-input"
              style={{ paddingLeft: '2.3rem' }}
              placeholder="Search products…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="product-grid">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ padding: '2rem 0', textAlign: 'center' }}>No products match your search.</p>
          )}

          <div className="shop-note">
            <p>
              Retail orders are fulfilled through our{' '}
              <strong>Shopify store</strong> and <strong>Amazon listings</strong>. For wholesale
              pricing, <Link href="/contact">contact us</Link>.
            </p>
            <div className="shop-policies">
              <Link href="/shipping">Shipping Policy</Link>
              <Link href="/refund-policy">Returns & Refunds</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
