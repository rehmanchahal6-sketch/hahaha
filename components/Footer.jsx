import Link from 'next/link';
import { company, addressBlock } from '@/lib/company';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand">
              {company.legalName}
            </Link>
            <p className="footer-tagline">
              {company.businessActivity} We sell {company.productFocus.toLowerCase()} through{' '}
              {company.salesChannels.join(', ')}.
            </p>
            <div className="footer-contact">
              <a href={company.website} className="footer-website">
                {company.websiteDisplay}
              </a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <address>
                {company.address.line1}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
                <br />
                {company.address.country}
              </address>
              <span className="footer-hours">{company.hours}</span>
            </div>
          </div>

          <div className="footer-nav-grid">
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
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/refund-policy">Returns & Refunds</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-facts">
          <div className="footer-fact">
            <span className="footer-fact-label">Legal entity</span>
            <span>{company.legalName}</span>
          </div>
          <div className="footer-fact">
            <span className="footer-fact-label">Jurisdiction</span>
            <span>{company.stateOfFormation}, USA</span>
          </div>
          <div className="footer-fact">
            <span className="footer-fact-label">Industry</span>
            <span>{company.industry}</span>
          </div>
          <div className="footer-fact">
            <span className="footer-fact-label">Registered office</span>
            <span>{addressBlock}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <span>Governed by the laws of the State of {company.stateOfFormation}</span>
        </div>

        <p className="footer-disclaimer">
          {company.legalName} is a {company.entityType}. The registered address above is the
          company&apos;s official mailing address in {company.stateOfFormation}. For business
          verification inquiries, contact{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </div>
    </footer>
  );
}
