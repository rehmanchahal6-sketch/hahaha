'use client';

import { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Send } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

export default function ContactPage() {
  const { showToast } = useQuote();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Email Marketing',
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
      showToast({ title: 'Missing fields', message: 'Please fill in the required fields.', type: 'error' });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDone(true);
      showToast({ title: 'Sent', message: 'We’ll reply within one business day.' });
    }, 700);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch</h1>
          <p>Questions or project ideas—send a note and we’ll reply.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div>
              <h3 style={{ marginBottom: '0.75rem' }}>Details</h3>
              <div style={{ display: 'grid', gap: '0.85rem' }}>
                <div className="panel" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Mail size={18} />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Email</div>
                    <a href="mailto:sujanpaudel368@gmail.com" style={{ fontWeight: 650 }}>
                      sujanpaudel368@gmail.com
                    </a>
                  </div>
                </div>
                <div className="panel" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <MapPin size={18} style={{ marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Address</div>
                    <div style={{ fontWeight: 650, lineHeight: 1.45 }}>
                      30 N Gould St Ste R
                      <br />
                      Sheridan, WY 82801
                    </div>
                  </div>
                </div>
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
                    <label className="form-label">Company *</label>
                    <input
                      className="form-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                    {errors.company && <span className="form-error-msg">{errors.company}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service</label>
                    <select
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>Email Marketing</option>
                      <option>Email Automation</option>
                      <option>Website Development</option>
                      <option>IT Consulting & Support</option>
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
