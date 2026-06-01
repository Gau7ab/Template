'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;
    const counters = statsRef.current.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.count || '0');
          let current = 0;
          const increment = target / 60;
          const statCard = el.closest('.stat-card');
          const label = statCard?.querySelector('.stat-label')?.textContent || '';
          const suffix = label.includes('%') ? '%' : '+';
          const updateCounter = () => {
            current += increment;
            if (current < target) {
              el.textContent = Math.floor(current) + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = target + suffix;
            }
          };
          updateCounter();
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Available for Consultation
          </div>
          <h1 className="hero-title">
            <span className="line"><span>Educating.</span></span>
            <span className="line"><span>Mentoring.</span></span>
            <span className="line"><span className="gold-text">Empowering.</span></span>
          </h1>
          <p className="hero-description">
            A bold, multifaceted professional shaping futures as a Faculty Coordinator,
            Career Mentor, HR Strategist, and IELTS Tutor — committed to transforming potential into excellence.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              <span>Get in Touch</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#services" className="btn-outline">
              <span>View Expertise</span>
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img src="/hero-profile.png" alt="Professional portrait — Faculty Coordinator and Mentor" />
          </div>
          <div className="hero-stats" ref={statsRef}>
            <div className="stat-card">
              <div className="stat-number" data-count="10">0</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="500">0</div>
              <div className="stat-label">Students Mentored</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="95">0</div>
              <div className="stat-label">% Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
