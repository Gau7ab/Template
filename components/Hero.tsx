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
            Assistant Director — MBA Program
          </div>
          <h1 className="hero-title">
            <span className="line"><span>Leading.</span></span>
            <span className="line"><span>Inspiring.</span></span>
            <span className="line"><span className="gold-text">Transforming.</span></span>
          </h1>
          <p className="hero-description">
            I&apos;m <strong>Shikhar Lamichhane</strong> — an education leader, business strategist, and
            youth empowerment advocate shaping the future of management education at
            Boston International College, Bharatpur.
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
            <img src="/shikhar-lamichhane.jpg" alt="Shikhar Lamichhane — Assistant Director MBA Program, Boston International College" />
          </div>
          <div className="hero-stats" ref={statsRef}>
            <div className="stat-card">
              <div className="stat-number" data-count="7">0</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="500">0</div>
              <div className="stat-label">Students Impacted</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="50">0</div>
              <div className="stat-label">Events Organized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
