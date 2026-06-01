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
    {
      text: 'Through his leadership in the MBA program, he has created valuable opportunities for students to engage with industry experts and gain real-world insights. His proactive approach in connecting students with HR professionals has been instrumental in shaping future-ready talent.',
      initials: 'MT', name: 'Mohan Thapa ★ CHRO ★', role: 'CHRO | HR Strategy & Org Development @ JCB Nepal',
    },
    {
      text: 'Shikhar possesses an unparalleled ability to connect with people on a profound level. His exceptional communication skills inspire trust, foster collaboration, and drive results. He has a rare talent for convincing others through a thoughtful approach that appeals to logic, emotion, and shared purpose.',
      initials: 'SR', name: 'Sauran Rijal', role: 'Head-Marketing, BATAS MAW Commercial Vehicles',
    },
    {
      text: 'Mr. Shikhar Lamichhane is highly professional and cooperative in his professional position and personally a good person too. I highly recommend him in the management field.',
      initials: 'BS', name: 'Birat Shrestha', role: 'Managing Director at Access Universe Pvt. Ltd.',
    },
    {
      text: 'Shikhar brought his corporate background to the academic environment. He has a highly influential personality that transpires the work atmosphere. His leadership and organizational skills were instrumental in ensuring the smooth operation of the MBA Program.',
      initials: 'PG', name: 'Prem Gaire', role: 'Entrepreneurship Educator & Ecosystem Builder',
    },
    {
      text: 'Shikhar\'s leadership skills are truly commendable; he leads with vision and purpose, consistently inspiring those around him to strive for excellence. His ability to communicate complex ideas with clarity and precision is equally impressive.',
      initials: 'JT', name: 'Jagadish Timilsina', role: 'Attended Wrexham Glyndŵr University',
    },
    {
      text: 'Shikhar impressed everyone with his well-rounded skill set in marketing, sales, and customer service. He has a keen understanding of marketing principles and demonstrated his ability to drive results consistently.',
      initials: 'SB', name: 'Surit Bhattarai', role: 'Student Recruitment Expert | 14+ Years Experience',
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
