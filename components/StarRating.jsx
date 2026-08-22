export default function StarRating({ rating, count, size = 'sm' }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return 'full';
    if (i === full && half) return 'half';
    return 'empty';
  });

  return (
    <div className={`star-rating star-rating-${size}`} aria-label={`${rating} out of 5 stars${count ? `, ${count} reviews` : ''}`}>
      <span className="star-rating-stars" aria-hidden>
        {stars.map((type, i) => (
          <span key={i} className={`star star-${type}`}>
            ★
          </span>
        ))}
      </span>
      {count != null && <span className="star-rating-count">({count})</span>}
    </div>
  );
}
