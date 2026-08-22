import { trustItems } from '@/lib/homeContent';

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Why shop with us">
      <div className="container">
        <ul className="trust-strip-grid">
          {trustItems.map((item) => (
            <li key={item.title} className="trust-strip-item">
              <span className="trust-strip-icon" aria-hidden>
                {item.icon}
              </span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
