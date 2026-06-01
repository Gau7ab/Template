'use client';
import { useEffect } from 'react';

export default function Skills() {
  const skills = [
    { name: 'Education Management & Leadership', pct: 95 },
    { name: 'Business Development & Strategy', pct: 92 },
    { name: 'Student Counseling & Admissions', pct: 94 },
    { name: 'Event Organization & Execution', pct: 90 },
    { name: 'HR Management & Marketing', pct: 88 },
    { name: 'Professional Communication', pct: 93 },
  ];

  const tagGroups = [
    { icon: '🎓', title: 'Education & Program Management', tags: ['MBA Program Direction', 'Curriculum Development', 'Faculty Coordination', 'Student Admissions', 'Academic Quality', 'Accreditation'] },
    { icon: '📈', title: 'Business & Strategy', tags: ['Business Development', 'Strategic Partnerships', 'Market Analysis', 'Brand Promotion', 'B2B Relations', 'Revenue Growth'] },
    { icon: '💼', title: 'HR & Marketing', tags: ['Talent Acquisition', 'Performance Management', 'Team Building', 'Employee Engagement', 'Digital Marketing', 'Content Strategy'] },
    { icon: '🧠', title: 'Leadership & Soft Skills', tags: ['Persuasion & Influence', 'Public Speaking', 'Negotiation', 'Critical Thinking', 'Entrepreneurial Mindset', 'Microsoft Office Suite'] },
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
