import Link from 'next/link';
import { company, policyLinks } from '@/lib/company';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand">
              Paudelon
            </Link>
            <p className="footer-tagline">
              Premium pet essentials — sold online through Shopify, Amazon, and wholesale.
            </p>
            <ul className="footer-emails">
              <li>
                <span className="footer-email-label">Contact</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <span className="footer-email-label">Support</span>
                <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a>
              </li>
            </ul>
            <a href={company.website} className="footer-website">
              {company.websiteDisplay}
            </a>
          </div>

          <div className="footer-nav-grid footer-nav-compact">
            <div>
              <h5>Shop</h5>
              <ul className="footer-links">
                <li><Link href="/products">All products</Link></li>
                <li><Link href="/products">Browse catalog</Link></li>
              </ul>
            </div>

            <div>
              <h5>Company</h5>
              <ul className="footer-links">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/company">Corporate information</Link></li>
              </ul>
            </div>

            <div>
              <h5>Policies</h5>
              <ul className="footer-links">
                {policyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-row">
            <span>
              © {new Date().getFullYear()} {company.legalName}. {company.jurisdiction}.
            </span>
            <Link href="/company" className="footer-bottom-link">
              Corporate information
            </Link>
          </div>
          <p className="footer-bottom-note">
            NAICS {company.naics} · Registered office: {company.address.city},{' '}
            {company.address.state} · Digital-first e-commerce — no walk-in retail at the
            registered address.
          </p>
        </div>
      </div>
    </footer>
  );
}
