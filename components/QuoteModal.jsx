'use client';

import { useEffect, useState } from 'react';
import { Send, X } from 'lucide-react';
import { submitToFormspree } from '@/lib/formspree';

export default function QuoteModal({ isOpen, onClose, initialService = '', showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || 'General Inquiry',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        service: initialService || prev.service || 'General Inquiry',
      }));
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Required';
    if (!formData.email.trim()) next.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = 'Enter a valid email';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await submitToFormspree({
        ...formData,
        source: 'inquiry-modal',
      });
      onClose();
      showToast({
        title: 'Inquiry sent',
        message: 'We’ll get back to you within one business day.',
      });
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <span className="eyebrow">Inquiry</span>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.35rem' }}>Contact Paudelon LLC</h2>
        <p style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>
          Order support, wholesale pricing, or general business questions.
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
                <option>Product Inquiry</option>
                <option>Supplier / Partnership</option>
                <option>Dropshipping</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we help?"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.65rem' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send inquiry'}
              <Send size={15} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
