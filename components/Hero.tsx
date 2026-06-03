'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;
    const counters = statsRef.current.querySelectorAll<HTMLElement>('[data-count]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.count || '0');
          const suffix = el.dataset.suffix || '+';
          let current = 0;
          const duration = 2000;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            current = Math.floor(eased * target);
            el.textContent = current + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = target + suffix;
            }
          };

          requestAnimationFrame(updateCounter);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            8+ Years | Multi-Sector Experience
          </div>
          <h1 className="hero-title">
            <span className="line"><span>Marketing Strategist.</span></span>
            <span className="line"><span>B2B Sales Expert.</span></span>
            <span className="line"><span className="gold-text">Corporate Trainer. MBA Educator.</span></span>
          </h1>
          <p className="hero-tagline">
            Transforming people, businesses, and institutions — through strategy, sales, and education.
          </p>
          <p className="hero-description">
            With 8+ years of experience across advertising, educational consultancy, international business,
            and academia, I bring a rare combination of real-world sales expertise and academic rigour.
            From Business Development Executive to Branch Manager, CEO of an Australian-based company
            in Nepal, and now directing the MBA Program at Boston International College — all while
            teaching Marketing &amp; Strategic Management and training professionals in personality development.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              <span>Get in Touch</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#training" className="btn-outline">
              <span>Hire Me as Trainer</span>
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img src="/hero-profile.png" alt="Shikhar Lamichhane — Marketing Strategist, B2B Sales Expert, Corporate Trainer, MBA Educator" />
          </div>
          <div className="hero-stats" ref={statsRef}>
            <div className="stat-card">
              <div className="stat-number" data-count="8" data-suffix="+">0</div>
              <div className="stat-label">Years in Sales &amp; Marketing</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="500" data-suffix="+">0</div>
              <div className="stat-label">Professionals Trained</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="5" data-suffix="+">0</div>
              <div className="stat-label">Organisations Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="400" data-suffix="+">0</div>
              <div className="stat-label">MBA Students Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
