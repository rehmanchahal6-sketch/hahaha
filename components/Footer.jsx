import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" style={{ marginBottom: '0.85rem', display: 'inline-flex' }}>
              Nexora<span>Digital</span>
            </Link>
            <p style={{ maxWidth: '28ch', fontSize: '0.98rem' }}>
              Technology, email systems, and web work for businesses that need reliable operators—not another agency pitch deck.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
              <a href="mailto:hello@nexoradigital.com">hello@nexoradigital.com</a>
            </p>
          </div>

          <div>
            <h5>Services</h5>
            <ul className="footer-links">
              <li><Link href="/services">Email Marketing</Link></li>
              <li><Link href="/services">Email Automation</Link></li>
              <li><Link href="/services">Web Development</Link></li>
              <li><Link href="/services">IT Consulting</Link></li>
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
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nexora Digital. All rights reserved.</span>
          <span>Built for small and mid-size teams.</span>
        </div>
      </div>
    </footer>
  );
}
