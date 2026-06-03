'use client';
import { FormEvent, useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react';

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
              Whether you need a corporate trainer, a marketing consultant, a keynote speaker,
              or want to explore academic collaboration — I&apos;d love to hear from you.
            </p>
          </div>
          <div className="contact-methods reveal reveal-delay-3">
            <div className="contact-method">
              <div className="contact-method-icon"><Mail size={24} /></div>
              <div className="contact-method-text">
                <h4>Email</h4>
                <p>shikhar.lamichhane@bostoncollege.edu.np</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-method-icon"><Phone size={24} /></div>
              <div className="contact-method-text">
                <h4>Phone</h4>
                <p>+977-9801314487</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-method-icon"><MapPin size={24} /></div>
              <div className="contact-method-text">
                <h4>Location</h4>
                <p>Bharatpur, Chitwan, Nepal</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-method-icon"><Globe size={24} /></div>
              <div className="contact-method-text">
                <h4>Website</h4>
                <p>www.shikharlamichhane.com.np</p>
              </div>
            </div>
          </div>
          <div className="social-links reveal reveal-delay-4">
            <a href="https://www.linkedin.com/in/shikhar-lamichhane-1430b499/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn" title="LinkedIn">in</a>
            <a href="https://www.facebook.com/shikhar.lamichhane" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook" title="Facebook">f</a>
            <a href="https://www.instagram.com/ckharlamichhane/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram" title="Instagram">ig</a>
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
              <option value="b2b-sales">B2B Sales Training / Workshop</option>
              <option value="marketing">Marketing Strategy Consultation</option>
              <option value="personality">Personality Development Training</option>
              <option value="communication">Communication & Etiquette Workshop</option>
              <option value="speaking">Speaking / Keynote Invitation</option>
              <option value="academic">Academic Collaboration</option>
              <option value="business">Business Partnership</option>
              <option value="mentorship">Career Mentorship</option>
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
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
