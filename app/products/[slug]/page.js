import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { company } from '@/lib/company';
import { getProduct, getRelatedProducts, getProductImage, products } from '@/lib/products';

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: 'Product not found' };

  return {
    title: product.name,
    description: product.shortDesc,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product);
  const imageSrc = getProductImage(product);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/products" className="text-link product-back">
            ← All products
          </Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="product-detail">
            <div className="product-detail-visual">
              <Image
                src={imageSrc}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 480px"
                style={{ objectFit: 'cover' }}
              />
              <span className="product-image-label">{product.category}</span>
            </div>

            <div className="product-detail-info">
              <span className="tag">{product.category}</span>
              <span className="tag" style={{ marginLeft: '0.4rem' }}>
                {product.forPet}
              </span>
              <h1>{product.name}</h1>
              <p className="product-detail-price">{product.price}</p>
              <p className="product-detail-desc">{product.description}</p>

              <ul className="product-highlights">
                {product.highlights.map((item) => (
                  <li key={item}>
                    <Check size={15} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="product-sku">SKU: {product.sku}</p>

              <div className="product-detail-actions">
                <Link href="/contact" className="btn btn-primary">
                  Order inquiry
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Wholesale pricing
                </Link>
              </div>

              <p className="product-channel-note">
                Sold by {company.legalName} on Shopify and Amazon. Contact us for availability and
                channel-specific ordering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="policy-links-row">
            <Link href="/shipping">Shipping Policy</Link>
            <Link href="/refund-policy">Returns & Refunds</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <h2>Related products</h2>
            </div>
            <div className="product-grid product-grid-compact">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} compact />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
