import Link from 'next/link';
import { company, addressBlock, policyLinks } from '@/lib/company';

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
              {company.phone && company.phoneDisplay ? (
                <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
              ) : null}
              <address>
                <span className="footer-address-label">Registered office</span>
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
              <h5>Shop</h5>
              <ul className="footer-links">
                <li><Link href="/products">All products</Link></li>
                <li><Link href="/products">Food & treats</Link></li>
                <li><Link href="/products">Toys & enrichment</Link></li>
                <li><Link href="/products">Grooming & hygiene</Link></li>
              </ul>
            </div>

            <div>
              <h5>Company</h5>
              <ul className="footer-links">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/company">Corporate information</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h5>Customer care</h5>
              <ul className="footer-links">
                <li><Link href="/shipping">Shipping Policy</Link></li>
                <li><Link href="/refund-policy">Returns & Refunds</Link></li>
                <li><Link href="/contact">Order support</Link></li>
              </ul>
            </div>

            <div>
              <h5>Legal</h5>
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

        <div className="footer-facts">
          <div className="footer-fact">
            <span className="footer-fact-label">Legal entity</span>
            <span>{company.legalName}</span>
          </div>
          <div className="footer-fact">
            <span className="footer-fact-label">Managing member</span>
            <span>{company.managingMember}</span>
          </div>
          <div className="footer-fact">
            <span className="footer-fact-label">Website</span>
            <span>{company.websiteDisplay}</span>
          </div>
          <div className="footer-fact">
            <span className="footer-fact-label">Jurisdiction</span>
            <span>{company.stateOfFormation}, USA</span>
          </div>
          <div className="footer-fact">
            <span className="footer-fact-label">Industry / NAICS</span>
            <span>{company.naics}</span>
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
          {company.legalName} is a {company.entityType}. {company.addressPurpose} Contact:{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
          {' '}
          <Link href="/company">Corporate information</Link>.
        </p>
      </div>
    </footer>
  );
}
