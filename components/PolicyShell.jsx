import Link from 'next/link';
import { company } from '@/lib/company';

export default function PolicyShell({ eyebrow, title, updated, children }) {
  return (
    <>
      <section className="page-hero">
        <div className="container policy-hero">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>Last updated: {updated}</p>
          <p className="policy-meta">
            {company.legalName} · {company.websiteDisplay} ·{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="policy-layout">
            <aside className="policy-sidebar">
              <h2>Policies</h2>
              <nav aria-label="Policy pages">
                <ul className="policy-nav">
                  <li><Link href="/shipping">Shipping Policy</Link></li>
                  <li><Link href="/refund-policy">Returns & Refunds</Link></li>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms of Service</Link></li>
                </ul>
              </nav>
              <div className="policy-sidebar-note">
                <p>Questions about orders or policies?</p>
                <Link href="/contact" className="text-link">
                  Contact {company.legalName}
                </Link>
              </div>
            </aside>
            <article className="legal-copy policy-content">{children}</article>
          </div>
        </div>
      </section>
    </>
  );
}
