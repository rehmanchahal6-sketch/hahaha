import Image from 'next/image';
import Link from 'next/link';
import { getProductImage } from '@/lib/products';

export default function ProductCard({ product, compact = false }) {
  const imageSrc = getProductImage(product);

  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-card-link">
        <div className={`product-image ${compact ? 'product-image-sm' : ''}`}>
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes={compact ? '200px' : '(max-width: 640px) 100vw, 280px'}
            style={{ objectFit: 'cover' }}
          />
          <span className="product-image-label">{product.category}</span>
        </div>
        <div className="product-body">
          <span className="tag">{product.forPet}</span>
          <h3>{product.name}</h3>
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
