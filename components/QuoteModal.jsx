'use client';

import { useEffect, useState } from 'react';
import { Send, X } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialService = '', showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || 'Email Marketing Campaigns',
    budget: '$1,000 - $3,000 / mo',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        service: initialService || prev.service || 'Email Marketing Campaigns',
      }));
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Full name is required';
    if (!formData.email.trim()) next.email = 'Business email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = 'Enter a valid email';
    if (!formData.company.trim()) next.company = 'Company name is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      showToast({
        title: 'Quote request sent',
        message: 'A Nexora Digital specialist will reply within one business day.',
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'Email Marketing Campaigns',
        budget: '$1,000 - $3,000 / mo',
        message: '',
      });
    }, 700);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <p className="eyebrow">Quote request</p>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.35rem' }}>Tell us what you need</h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '0.98rem' }}>
          Share a few details and we will send a clear scope with pricing—no filler decks.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Your name *</label>
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
                <option>Lead Nurturing</option>
                <option>CRM & Email Platform Setup</option>
                <option>Website Development</option>
                <option>Website Maintenance</option>
                <option>Business Automation</option>
                <option>IT Consulting & Support</option>
                <option>Starter Package</option>
                <option>Growth Package</option>
                <option>Business Package</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Budget range</label>
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
            <label className="form-label">Notes (optional)</label>
            <textarea
              className="form-textarea"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Current tools, goals, or constraints..."
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Submit request'}
              <Send size={15} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
