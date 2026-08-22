'use client';

import Image from 'next/image';
import Link from 'next/link';
import { shopCategories } from '@/lib/homeContent';

export default function CategoryCarousel() {
  return (
    <div className="category-carousel-wrap">
      <div className="category-carousel" role="list">
        {shopCategories.map((cat) => (
          <Link href="/products" key={cat.slug} className="category-card" role="listitem">
            <div className="category-card-image">
              <Image src={cat.image} alt="" fill sizes="140px" style={{ objectFit: 'cover' }} />
            </div>
            <span className="category-card-label">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
