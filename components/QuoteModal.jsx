'use client';

import { useEffect, useState } from 'react';
import { Send, X } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialService = '', showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || 'Email Marketing',
    budget: '$1,000 - $3,000 / mo',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        service: initialService || prev.service || 'Email Marketing',
      }));
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Required';
    if (!formData.email.trim()) next.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = 'Enter a valid email';
    if (!formData.company.trim()) next.company = 'Required';
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
        title: 'Request sent',
        message: 'We’ll get back to you within one business day.',
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'Email Marketing',
        budget: '$1,000 - $3,000 / mo',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <span className="eyebrow">Quote</span>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.35rem' }}>Tell us what you need</h2>
        <p style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>
          A few details are enough. We’ll follow up with a clear scope.
        </p>

        <form onSubmit={handleSubmit}>
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
                <option>Email Marketing</option>
                <option>Email Automation</option>
                <option>Website Development</option>
                <option>IT Consulting & Support</option>
                <option>Starter Package</option>
                <option>Growth Package</option>
                <option>Business Package</option>
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
            <label className="form-label">Notes</label>
            <textarea
              className="form-textarea"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Optional context…"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.65rem' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send request'}
              <Send size={15} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
