import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
              Paudelon LLC
            </Link>
            <p style={{ maxWidth: '36ch', marginBottom: '1rem' }}>
              E-commerce company selling pet products through online retail, wholesale, and
              dropshipping on Shopify and Amazon.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
              <a href="mailto:sujanpaudel368@gmail.com">sujanpaudel368@gmail.com</a>
              <br />
              30 N Gould St Ste R
              <br />
              Sheridan, WY 82801
              <br />
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                Wyoming limited liability company
              </span>
            </p>
          </div>

          <div>
            <h5>Business</h5>
            <ul className="footer-links">
              <li><Link href="/services">What we sell</Link></li>
              <li><Link href="/pricing">Products</Link></li>
              <li><Link href="/services">Shopify & Amazon</Link></li>
              <li><Link href="/services">Wholesale</Link></li>
            </ul>
          </div>

          <div>
            <h5>Company</h5>
            <ul className="footer-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5>Legal</h5>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/refund-policy">Returns & refunds</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Paudelon LLC</span>
          <span>Sheridan, Wyoming</span>
        </div>
      </div>
    </footer>
  );
}
