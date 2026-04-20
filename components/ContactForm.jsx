'use client';

import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export default function ContactForm({ className = '', buttonLabel = 'Send' }) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong.');
      }

      setStatus({ type: 'success', message: result.message });
      setFormData(initialState);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <textarea
              className="form-control w-100"
              name="message"
              id="message"
              cols="30"
              rows="9"
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input
              className="form-control"
              name="name"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <input
              className="form-control"
              name="subject"
              id="subject"
              type="text"
              placeholder="Enter Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="button button-contactForm boxed-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : buttonLabel}
        </button>
      </div>
      {status.message ? (
        <p className={status.type === 'success' ? 'text-success' : 'text-danger'}>{status.message}</p>
      ) : null}
    </form>
  );
}