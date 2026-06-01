'use client';

import { useRef, useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'I met Shikhar when he invited me to facilitate a workshop for his MBA students, and we instantly bonded over our shared love for education. As someone who spends a lot of time leading sessions on presentations, I quickly notice who is genuinely invested in the room. Shikhar stood out immediately. He didn\'t just organize the event for his students. He sat right alongside them with the pure enthusiasm of a lifelong learner. Shikhar is a true "big picture" guy. He dreams big and actually puts in the work to execute those ideas. Any team would be incredibly lucky to have his blend of visionary thinking and humble eagerness to learn.',
      initials: 'AM',
      name: 'Abhisekh Maskey',
      role: 'Head of Marketing at F1Soft',
    },
    {
      text: 'Working with Mr. Shikhar Lamichhane has been an absolute pleasure. He brings not only professionalism to the table but also a natural charisma that makes collaboration both effective and enjoyable. Shikhar sir is one of the most convincing sales professionals I\'ve had the chance to work with — someone who truly understands the art of communication and persuasion. What sets him apart are his exceptional interpersonal skills. Whether he\'s engaging with clients, leading discussions, or working with a team, his ability to connect and build rapport is unmatched. He\'s confident without being overpowering, and always approaches conversations with clarity, empathy, and purpose.',
      initials: 'AK',
      name: 'Aprameya Khakurel',
      role: 'Loss Adjuster & Career Coach',
    },
    {
      text: 'My own personal experience has shown me that you have a strong work ethic and that you have always been motivated by the achievement of goals rather than by your own personal fallacy. With Significant command on Professional communication and ability to engage in meaningful conversation you have the ability to convince and command.',
      initials: 'SP',
      name: 'Suman Poudel',
      role: 'Principal @ Ankuram Academy',
    },
    {
      text: 'As an HR professional, I truly appreciate Shikhar Sir\'s commitment to bridging the gap between academia and industry. Through his leadership in the MBA program, he has created valuable opportunities for students to engage with industry experts and gain real-world insights. His proactive approach in connecting students with HR professionals has been instrumental in shaping future-ready talent. A remarkable leader dedicated to meaningful collaboration and career development!',
      initials: 'MT',
      name: 'Mohan Thapa',
      role: 'CHRO at JCB Nepal',
    },
    {
      text: 'It is with great enthusiasm that I recommend Shikhar as a stellar professional and a true asset to any team. Having had the privilege of working alongside Shikhar, I can confidently say that he is a paragon of leadership, communication, and influence. He possesses an unparalleled ability to connect with people on a profound level. His exceptional communication skills inspire trust, foster collaboration, and drive results. As a leader, He exemplifies vision, decisiveness, and compassion with a rare talent for convincing others through a thoughtful and considerate approach.',
      initials: 'SR',
      name: 'Sauran Rijal',
      role: 'Head-Marketing at BATAS MAW',
    },
    {
      text: 'Mr. Shikhar Lamichhane is highly professional and cooperative in his professional position and personally a good person too. I highly recommend him in management field. His dedication and excellence are truly commendable.',
      initials: 'BS',
      name: 'Birat Shrestha',
      role: 'Managing Director at Access Universe',
    },
    {
      text: 'I had the pleasure of working with Mr. Shikhar Lamichhane during my time at Boston International College, where he served as the Assistant Director of the MBA Program. Shikhar brought his corporate background to the academic environment. He has a highly influential personality that transpires the work atmosphere. His leadership and organizational skills were instrumental in ensuring the smooth operation of the MBA Program. He has a unique ability to balance academic rigor with student-centric initiatives.',
      initials: 'PG',
      name: 'Prem Gaire',
      role: 'Entrepreneurship Educator',
    },
    {
      text: 'I had the privilege of working closely with Mr. Shikhar Lamichhane during my time at Boston International College, where he serves as the Assistant Director of the MBA program. Shikhar\'s leadership skills are truly commendable; he leads with vision and purpose, consistently inspiring those around him to strive for excellence. His ability to communicate complex ideas with clarity and precision is equally impressive. Shikhar has an innate talent for fostering collaboration and driving positive outcomes. I highly recommend Shikhar for any role that requires exceptional leadership and communication skills.',
      initials: 'JT',
      name: 'Jagadish Timilsina',
      role: 'MBA Graduate, Boston International College',
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 600);
    }
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label reveal">Testimonials</span>
          <h2 className="section-title reveal reveal-delay-1">
            What People <span className="gold-text">Say About Me</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Real stories from students, colleagues, and professionals who&apos;ve experienced the impact firsthand.
          </p>
        </div>
        <div className="testimonials-scroll-wrapper">
          {canScrollLeft && (
            <button
              className="testimonials-scroll-button testimonials-scroll-left"
              onClick={() => scroll('left')}
              aria-label="Scroll testimonials left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <div className="testimonials-scroll" ref={scrollContainerRef} onScroll={checkScroll}>
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
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
          {canScrollRight && (
            <button
              className="testimonials-scroll-button testimonials-scroll-right"
              onClick={() => scroll('right')}
              aria-label="Scroll testimonials right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
