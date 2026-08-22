import Link from 'next/link';
import { company, policyLinks } from '@/lib/company';
import OperationalDisclaimer from '@/components/OperationalDisclaimer';
import LegalEntityMeta from '@/components/LegalEntityMeta';

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
              Pet products sold online through Shopify, Amazon, and wholesale.
            </p>
            <div className="footer-contact">
              <a href={company.website} className="footer-website">
                {company.websiteDisplay}
              </a>
              <span aria-hidden>·</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span aria-hidden>·</span>
              <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a>
              {company.phone && company.phoneDisplay ? (
                <>
                  <span aria-hidden>·</span>
                  <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
                </>
              ) : null}
            </div>
            <LegalEntityMeta className="footer-meta" />
            <OperationalDisclaimer className="footer-disclaimer" />
            <p className="footer-meta">
              Registered office: {company.address.city}, {company.address.state} ·{' '}
              <Link href="/company">Corporate information</Link>
            </p>
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
          <span>
            © {new Date().getFullYear()} {company.legalName}. {company.jurisdiction}.
          </span>
        </div>
      </div>
    </footer>
  );
}
