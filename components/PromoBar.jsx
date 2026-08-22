import { promoMessage } from '@/lib/homeContent';

export default function PromoBar() {
  return (
    <div className="promo-bar">
      <div className="container promo-bar-inner">
        <p>{promoMessage}</p>
      </div>
    </div>
  );
}
