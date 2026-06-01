'use client';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-info">
          <div>
            <span className="section-label reveal">Get in Touch</span>
            <h2 className="section-title reveal reveal-delay-1">
              Let&apos;s <span className="gold-text">Connect &amp; Collaborate</span>
            </h2>
            <p className="section-subtitle reveal reveal-delay-2">
              Whether you&apos;re looking for academic collaboration, business partnerships, career guidance,
              or want to organize an event — I&apos;d love to hear from you.
            </p>
          </div>
          <div className="contact-methods reveal reveal-delay-3">
            <div className="contact-method">
              <div className="contact-method-icon">📧</div>
              <div className="contact-method-text">
                <h4>Email</h4>
                <p>shikhar.lamichhane@bostoncollege.edu.np</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-method-icon">📱</div>
              <div className="contact-method-text">
                <h4>Phone</h4>
                <p>+977-9801314487</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-method-icon">📍</div>
              <div className="contact-method-text">
                <h4>Location</h4>
                <p>Bharatpur, Chitwan, Nepal</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-method-icon">🏛️</div>
              <div className="contact-method-text">
                <h4>Organization</h4>
                <p>Boston International College (BIC)</p>
              </div>
            </div>
          </div>
          <div className="social-links reveal reveal-delay-4">
            <a href="https://www.linkedin.com/in/shikhar-lamichhane" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn" title="LinkedIn">in</a>
            <a href="#" className="social-link" aria-label="Facebook" title="Facebook">f</a>
            <a href="#" className="social-link" aria-label="Instagram" title="Instagram">ig</a>
          </div>
        </div>
        <form className="contact-form reveal" id="contactForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="Your first name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Your last name" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="service">I&apos;m Interested In</label>
            <select id="service">
              <option value="">Select a topic...</option>
              <option value="mba">MBA Program Inquiry</option>
              <option value="mentorship">Career Mentorship</option>
              <option value="business">Business Collaboration</option>
              <option value="event">Event / Workshop</option>
              <option value="hr">HR Consultation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Tell me about your goals and how I can help..." required></textarea>
          </div>
          <div className="form-submit">
            <button type="submit" className="btn-primary" style={submitted ? { background: 'linear-gradient(135deg, #34d399, #059669)' } : {}}>
              <span>{submitted ? 'Message Sent! ✓' : 'Send Message'}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
