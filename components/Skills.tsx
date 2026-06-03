'use client';
import { useEffect } from 'react';

export default function Skills() {
  const skills = [
    { name: 'Marketing Strategy & IMC', width: 95 },
    { name: 'B2B Sales & Service Selling', width: 93 },
    { name: 'Business Leadership & Strategy', width: 90 },
    { name: 'Corporate Training & Facilitation', width: 92 },
    { name: 'MBA Education & Academic Leadership', width: 94 },
    { name: 'Professional Communication', width: 91 },
    { name: 'Personality Development Training', width: 90 },
    { name: 'Entrepreneurship & Mentoring', width: 88 },
  ];

  const tagGroups = [
    { icon: '🎯', title: 'Marketing & Sales', tags: ['Integrated Marketing Communications', 'Market Segmentation', 'Brand Strategy', 'B2B Sales', 'Service Selling', 'Client Acquisition', 'Revenue Growth'] },
    { icon: '🏢', title: 'Business & Leadership', tags: ['P&L Management', 'Strategic Decision-Making', 'Operations Management', 'International Business', 'Team Building', 'Branch Management'] },
    { icon: '🧠', title: 'Training & Development', tags: ['Personality Development', 'Business Etiquette', 'Confidence Building', 'Presentation Skills', 'Workshop Facilitation', 'Soft Skills'] },
    { icon: '🎓', title: 'Academics & Mentoring', tags: ['Curriculum Design', 'Faculty Coordination', 'Student Counseling', 'Career Mentoring', 'Program Management', 'Entrepreneurship Advocacy'] },
  ];

  useEffect(() => {
    const fills = document.querySelectorAll('.skill-fill');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.width = el.dataset.width + '%';
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    fills.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="services-header" style={{ marginBottom: '3rem' }}>
          <span className="section-label reveal">Competencies</span>
          <h2 className="section-title reveal reveal-delay-1">
            Skills &amp; <span className="gold-text">Proficiencies</span>
          </h2>
        </div>
        <div className="skills-content">
          <div className="skills-list reveal">
            {skills.map((s, i) => (
              <div className="skill-item" key={i}>
                <div className="skill-header">
                  <h4>{s.name}</h4>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" data-width={s.width}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-tags reveal reveal-delay-2">
            {tagGroups.map((g, i) => (
              <div className="tag-group" key={i}>
                <h4>{g.icon} {g.title}</h4>
                <div className="tags-container">
                  {g.tags.map((t, j) => (<span className="tag" key={j}>{t}</span>))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
