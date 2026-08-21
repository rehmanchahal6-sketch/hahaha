'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" style={{ display: 'inline-flex', marginBottom: '0.85rem' }}>
              Paudel<span>on</span>
            </Link>
            <p style={{ maxWidth: '32ch', marginBottom: '1.25rem' }}>
              Retention expertise for DTC brands—email & SMS systems that scale repeat revenue.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              <a href="tel:+13072040051">+1 (307) 204-0051</a>
              <br />
              <a href="mailto:raman@greyemails.com">raman@greyemails.com</a>
              <br />
              30 N Gould St Ste R
              <br />
              Sheridan, WY 82801
            </p>
          </div>

          <div>
            <h5>Explore</h5>
            <ul className="footer-links">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">Experts</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
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

          <div>
            <h5>Newsletter</h5>
            <p style={{ fontSize: '0.92rem', marginBottom: '0.85rem' }}>
              Strategies and retention updates—no fluff.
            </p>
            {done ? (
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)', fontWeight: 700 }}>Subscribed.</p>
            ) : (
              <form className="newsletter" onSubmit={subscribe}>
                <input
                  className="form-input"
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-primary btn-sm" type="submit">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Paudelon. All rights reserved.</span>
          <span>Retention Expertise Agency</span>
        </div>
      </div>
    </footer>
  );
}
