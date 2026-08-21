'use client';

import { useState } from 'react';
import { CheckCircle2, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

export default function ContactPage() {
  const { showToast, openQuote } = useQuote();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Book a Call',
    budget: '$3,000 - $7,000 / mo',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Required';
    if (!formData.email.trim()) next.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = 'Invalid email';
    if (!formData.company.trim()) next.company = 'Required';
    if (!formData.message.trim()) next.message = 'Required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast({
        title: 'Missing details',
        message: 'Please complete the required fields.',
        type: 'error',
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDone(true);
      showToast({
        title: 'Message sent',
        message: 'We’ll reply to schedule your call.',
      });
    }, 800);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Book your call.</h1>
          <p>Tell us about your brand and current retention setup—we’ll follow up fast.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div>
              <h3 style={{ marginBottom: '0.75rem' }}>Talk to Paudelon</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Prefer to skip the form? Call or email us directly.
              </p>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div className="panel" style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <Phone size={18} color="var(--accent)" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--dim)' }}>Phone</div>
                    <a href="tel:+13072040051" style={{ fontWeight: 650 }}>
                      +1 (307) 204-0051
                    </a>
                  </div>
                </div>
                <div className="panel" style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <Mail size={18} color="var(--accent)" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--dim)' }}>Email</div>
                    <a href="mailto:raman@greyemails.com" style={{ fontWeight: 650 }}>
                      raman@greyemails.com
                    </a>
                  </div>
                </div>
                <div className="panel" style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <MapPin size={18} color="var(--accent)" style={{ marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--dim)' }}>Address</div>
                    <div style={{ fontWeight: 650, lineHeight: 1.45 }}>
                      30 N Gould St Ste R
                      <br />
                      Sheridan, WY 82801
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-secondary"
                style={{ marginTop: '1.25rem' }}
                onClick={() => openQuote('Book a Call')}
              >
                Open quick book-a-call form
              </button>
            </div>

            <div className="panel" style={{ padding: '1.75rem' }}>
              {done ? (
                <div style={{ textAlign: 'center', padding: '2rem 0.5rem' }}>
                  <CheckCircle2 size={36} color="var(--accent)" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ marginBottom: '0.5rem' }}>Got it—talk soon.</h3>
                  <p style={{ marginBottom: '1.25rem' }}>We’ll reach out to lock in a time.</p>
                  <button className="btn btn-secondary" onClick={() => setDone(false)}>
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ marginBottom: '1.25rem' }}>Send a message</h3>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Full name *</label>
                      <input
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <span className="form-error-msg">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Work email *</label>
                      <input
                        type="email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="form-error-msg">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Brand / company *</label>
                    <input
                      className="form-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                    {errors.company && <span className="form-error-msg">{errors.company}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Monthly revenue range</label>
                    <select
                      className="form-select"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option>Under $100K / mo</option>
                      <option>$100K – $250K / mo</option>
                      <option>$250K – $1M / mo</option>
                      <option>$1M+ / mo</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">What should we cover on the call? *</label>
                    <textarea
                      className="form-textarea"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <span className="form-error-msg">{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : 'Book a call'}
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
