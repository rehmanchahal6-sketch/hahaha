'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { getProductImage, getProductRating } from '@/lib/products';
import StarRating from '@/components/StarRating';

export default function ProductCard({ product, compact = false }) {
  const imageSrc = getProductImage(product);
  const { rating, count } = getProductRating(product.slug);

  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-card-link">
        <div className={`product-image ${compact ? 'product-image-sm' : ''}`}>
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes={compact ? '200px' : '(max-width: 640px) 100vw, 280px'}
            className="product-image-main"
          />
          <div className="product-image-overlay">
            <span className="product-quick-shop">
              <ShoppingBag size={16} />
              Quick shop
            </span>
          </div>
        </div>
        <div className="product-body">
          {!compact && <span className="tag tag-soft">{product.forPet}</span>}
          <h3>{product.name}</h3>
          {!compact && <StarRating rating={rating} count={count} />}
          {!compact && <p>{product.shortDesc}</p>}
          <div className="product-footer">
            <span className="product-price">{product.price}</span>
            <span className="product-cta">{compact ? 'View' : 'View product'}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
