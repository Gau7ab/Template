'use client';
import { useEffect, useRef } from 'react';

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      const halfWidth = track.scrollWidth / 2;
      if (scrollPos >= halfWidth) scrollPos = 0;
      track.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };

    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
    };
  }, []);

  const testimonials = [
    {
      text: 'Shikhar is a true "big picture" guy. He dreams big and actually puts in the work to execute those ideas. He sat right alongside his students with the pure enthusiasm of a lifelong learner. Any team would be incredibly lucky to have his blend of visionary thinking and humble eagerness to learn.',
      initials: 'AM', name: 'Abhisekh Maskey', role: 'Head of Marketing at F1Soft',
    },
    {
      text: 'Shikhar sir is one of the most convincing sales professionals I\'ve had the chance to work with. His exceptional interpersonal skills and ability to connect and build rapport is unmatched. He\'s confident without being overpowering, and always approaches conversations with clarity, empathy, and purpose.',
      initials: 'AK', name: 'Aprameya Khakurel', role: 'Insurance Surveyor | MBA (Marketing) | Trainer',
    },
    {
      text: 'You have a strong work ethic and have always been motivated by the achievement of goals. With significant command on professional communication and ability to engage in meaningful conversation, you have the ability to convince and command.',
      initials: 'SP', name: 'Suman Poudel', role: 'Principal @ Ankuram Academy | PGCHRM IIM Shillong',
    },
  ];

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label reveal">Testimonials</span>
          <h2 className="section-title reveal reveal-delay-1">
            What People <span className="gold-text">Say About Me</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Real recommendations from industry leaders, colleagues, and professionals on LinkedIn.
          </p>
        </div>
      </div>

      <div className="testimonials-scroll-wrapper reveal">
        <div className="testimonials-scroll-track" ref={trackRef}>
          {doubled.map((t, i) => (
            <div className="testimonial-card-h" key={i}>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-info">
                  <h5>{t.name}</h5>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
