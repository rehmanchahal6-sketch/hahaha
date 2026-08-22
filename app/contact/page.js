'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Send } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';
import CompanyDetails from '@/components/CompanyDetails';
import { company } from '@/lib/company';
import { submitToFormspree } from '@/lib/formspree';

export default function ContactPage() {
  const { showToast } = useQuote();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'General Inquiry',
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
    if (!formData.message.trim()) next.message = 'Required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast({ title: 'Missing fields', message: 'Please fill in the required fields.', type: 'error' });
      return;
    }
    setIsSubmitting(true);
    try {
      await submitToFormspree({
        ...formData,
        source: 'contact-page',
      });
      setDone(true);
      showToast({ title: 'Sent', message: `We’ll reply within ${company.responseTime.toLowerCase()}.` });
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'General Inquiry',
        message: '',
      });
    } catch (error) {
      showToast({
        title: 'Could not send',
        message: error.message || 'Please email us directly or try again.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch</h1>
          <p>
            Order support, wholesale inquiries, and company contact for {company.legalName}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div>
              <CompanyDetails title="Registered company details" />
              <div className="trust-panel" style={{ marginTop: '1rem' }}>
                <h3>Direct contact</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>Business:</strong>{' '}
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>Support:</strong>{' '}
                  <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a>
                </p>
                {company.phone && company.phoneDisplay ? (
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Phone:</strong>{' '}
                    <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
                  </p>
                ) : null}
                <p style={{ marginBottom: 0 }}>
                  <Link href="/company" className="text-link">
                    View corporate information →
                  </Link>
                </p>
              </div>
            </div>

            <div className="panel">
              {done ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
                  <CheckCircle2 size={32} style={{ margin: '0 auto 0.85rem' }} />
                  <h3 style={{ marginBottom: '0.4rem' }}>Message received</h3>
                  <p style={{ marginBottom: '1rem' }}>Thanks—we’ll be in touch.</p>
                  <button className="btn btn-secondary" onClick={() => setDone(false)}>
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ marginBottom: '1rem' }}>Send a message</h3>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Name *</label>
                      <input
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <span className="form-error-msg">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
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
                    <label className="form-label">Company (optional)</label>
                    <input
                      className="form-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Inquiry type</label>
                    <select
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>General Inquiry</option>
                      <option>Business Verification</option>
                      <option>Order Support</option>
                      <option>Wholesale Inquiry</option>
                      <option>Shopify Store</option>
                      <option>Amazon Marketplace</option>
                      <option>Supplier / Partnership</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-textarea"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <span className="form-error-msg">{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : 'Send'}
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
