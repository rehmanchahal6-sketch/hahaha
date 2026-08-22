import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
              Paudelon
            </Link>
            <p style={{ maxWidth: '30ch', marginBottom: '1rem' }}>
              Practical technology, email, and web work for growing businesses.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
              <a href="mailto:sujanpaudel368@gmail.com">sujanpaudel368@gmail.com</a>
              <br />
              30 N Gould St Ste R
              <br />
              Sheridan, WY 82801
            </p>
          </div>

          <div>
            <h5>Services</h5>
            <ul className="footer-links">
              <li><Link href="/services">Email marketing</Link></li>
              <li><Link href="/services">Automation</Link></li>
              <li><Link href="/services">Web development</Link></li>
              <li><Link href="/services">IT support</Link></li>
            </ul>
          </div>

          <div>
            <h5>Company</h5>
            <ul className="footer-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5>Legal</h5>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/refund-policy">Refunds</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Paudelon</span>
          <span>Sheridan, WY</span>
        </div>
      </div>
    </footer>
  );
}
