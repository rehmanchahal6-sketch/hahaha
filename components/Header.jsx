'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          Paudelon
        </Link>

        <nav aria-label="Primary">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${isActive(pathname, item.href) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link href="/contact" className="btn btn-secondary btn-sm nav-contact">
            Contact
          </Link>
          <Link href="/products" className="btn btn-primary btn-sm">
            Shop
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(pathname, item.href) ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-secondary"
            style={{ marginTop: '0.65rem' }}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link href="/products" className="btn btn-primary" onClick={() => setOpen(false)}>
            Shop
          </Link>
        </div>
      )}
    </header>
  );
}
