'use client';

export default function Skills() {
  const tagGroups = [
    { icon: '🎓', title: 'Education & Program Management', tags: ['MBA Program Direction', 'Curriculum Development', 'Faculty Coordination', 'Student Admissions', 'Academic Quality', 'Accreditation'] },
    { icon: '📈', title: 'Business & Strategy', tags: ['Business Development', 'Strategic Partnerships', 'Market Analysis', 'Brand Promotion', 'B2B Relations', 'Revenue Growth'] },
    { icon: '💼', title: 'HR & Marketing', tags: ['Talent Acquisition', 'Performance Management', 'Team Building', 'Employee Engagement', 'Digital Marketing', 'Content Strategy'] },
    { icon: '🧠', title: 'Leadership & Soft Skills', tags: ['Persuasion & Influence', 'Public Speaking', 'Negotiation', 'Critical Thinking', 'Entrepreneurial Mindset', 'Microsoft Office Suite'] },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="services-header" style={{ marginBottom: '3rem' }}>
          <span className="section-label reveal">Competencies</span>
          <h2 className="section-title reveal reveal-delay-1">
            Skills &amp; <span className="gold-text">Proficiencies</span>
          </h2>
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
    </section>
  );
}
