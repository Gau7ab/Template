'use client';
import { useEffect } from 'react';

export default function Skills() {
  const skills = [
    { name: 'Academic Leadership', pct: 95 },
    { name: 'IELTS Coaching (All Modules)', pct: 92 },
    { name: 'Human Resource Management', pct: 90 },
    { name: 'Career Counseling & Mentorship', pct: 94 },
    { name: 'Curriculum Development', pct: 88 },
    { name: 'Public Speaking & Training', pct: 91 },
  ];

  const tagGroups = [
    { icon: '🎓', title: 'Education & Training', tags: ['Curriculum Design', 'Student Assessment', 'Accreditation', 'Workshop Facilitation', 'E-Learning', 'Pedagogy'] },
    { icon: '💼', title: 'HR & Management', tags: ['Recruitment', 'Performance Appraisal', 'Conflict Resolution', 'Employee Engagement', 'Policy Drafting', 'Team Leadership'] },
    { icon: '🌍', title: 'IELTS & Language', tags: ['Academic Writing', 'Speaking Fluency', 'Listening Strategies', 'Reading Comprehension', 'Grammar Mastery', 'Pronunciation'] },
    { icon: '🧠', title: 'Soft Skills', tags: ['Communication', 'Empathy', 'Critical Thinking', 'Decision Making', 'Adaptability', 'Negotiation'] },
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
                  <span>{s.pct}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" data-width={s.pct}></div>
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
