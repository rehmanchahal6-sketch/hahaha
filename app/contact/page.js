'use client';

import { useState } from 'react';
import { CheckCircle2, Mail, Clock, Send } from 'lucide-react';
import { useQuote } from '@/components/QuoteProvider';

export default function ContactPage() {
  const { showToast } = useQuote();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Email Marketing Campaigns',
    budget: '$1,000 - $3,000 / mo',
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
        message: 'We will respond within one business day.',
      });
    }, 800);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Tell us what you need help with.</h1>
          <p>Questions about deliverability, automation, or a new site—send the details and we will reply promptly.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div>
              <h3 style={{ marginBottom: '0.75rem' }}>Reach the team</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Prefer email? Write us directly or use the form. We treat every inquiry as confidential.
              </p>

              <div style={{ display: 'grid', gap: '1rem' }}>
                <div className="panel" style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <Mail size={18} color="var(--accent)" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--dim)' }}>Email</div>
                    <a href="mailto:hello@paudelon.com" style={{ fontWeight: 650 }}>
                      hello@paudelon.com
                    </a>
                  </div>
                </div>
                <div className="panel" style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <Clock size={18} color="var(--accent)" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--dim)' }}>Hours</div>
                    <div style={{ fontWeight: 650 }}>Mon–Fri, 9:00–18:00 EST</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel" style={{ padding: '1.75rem' }}>
              {done ? (
                <div style={{ textAlign: 'center', padding: '2rem 0.5rem' }}>
                  <CheckCircle2 size={36} color="var(--accent)" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ marginBottom: '0.5rem' }}>Thanks—message received.</h3>
                  <p style={{ marginBottom: '1.25rem' }}>A specialist will follow up shortly.</p>
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
                      <label className="form-label">Business email *</label>
                      <input
                        type="email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="form-error-msg">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="grid-2">
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
                        <option>Email Marketing Campaigns</option>
                        <option>Email Automation</option>
                        <option>Website Development</option>
                        <option>IT Consulting & Support</option>
                        <option>Business Automation</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Budget</label>
                    <select
                      className="form-select"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option>Under $1,000 / mo</option>
                      <option>$1,000 - $3,000 / mo</option>
                      <option>$3,000 - $7,000 / mo</option>
                      <option>$7,000+ / mo</option>
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
                    {isSubmitting ? 'Sending…' : 'Submit inquiry'}
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
