'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong.');
      }

      setStatus({ type: 'success', message: result.message });
      setEmail('');
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="footer-form">
      <form className="subscribe_form relative mail_part" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          className="placeholder hide-on-focus"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="form-icon">
          <button type="submit" className="email_icon newsletter-submit button-contactForm" disabled={isSubmitting}>
            <img src="/assets/img/logo/form-iocn.png" alt="send" />
          </button>
        </div>
      </form>
      {status.message ? (
        <p className={status.type === 'success' ? 'text-success' : 'text-danger'}>{status.message}</p>
      ) : null}
    </div>
  );
}