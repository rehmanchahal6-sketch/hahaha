'use client';

import { customerReviews } from '@/lib/homeContent';
import StarRating from '@/components/StarRating';

export default function ReviewsSection() {
  return (
    <section className="section section-warm">
      <div className="container">
        <div className="section-head section-head-center">
          <span className="eyebrow eyebrow-accent">Reviews</span>
          <h2>Loved by pets & their people</h2>
          <p>Real feedback from customers who shop our pet essentials.</p>
        </div>
        <div className="reviews-carousel">
          {customerReviews.map((review) => (
            <figure key={review.name} className="review-card">
              <StarRating rating={review.rating} />
              <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption>
                <strong>{review.name}</strong>
                <span>{review.pet}</span>
                {review.verified && <span className="review-verified">Verified buyer</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
