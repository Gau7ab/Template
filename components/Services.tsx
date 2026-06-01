export default function Services() {
  const services = [
    {
      icon: '🏛️',
      title: 'MBA Program Leadership',
      desc: 'Leading the MBA/Graduate Program at Boston International College — overseeing admissions, faculty coordination, curriculum enhancement, and student success.',
      features: ['Student Recruitment & Admissions', 'Faculty Coordination & Hiring', 'Curriculum Development', 'Academic Quality Assurance'],
    },
    {
      icon: '📈',
      title: 'Business Development',
      desc: 'Driving strategic growth through partnerships, B2B summits, and building bridges between academic institutions and the business community.',
      features: ['Strategic Partnerships', 'B2B Summits & Conferences', 'Market Analysis & Growth', 'Brand Building & Promotion'],
    },
    {
      icon: '🚀',
      title: 'Entrepreneurship & Events',
      desc: 'Organizing impactful events — Startup Bootcamps, international conferences, leadership sessions, and the Career Advancement Training (CAT) Programme.',
      features: ['Startup Bootcamps', 'International Conferences', 'Leadership Development Sessions', 'CAT Programme (Aptitude & Verbal)'],
    },
    {
      icon: '🤝',
      title: 'Student Counseling & HR',
      desc: 'Guiding students through career decisions while applying HR expertise in talent management, team building, and organizational development.',
      features: ['Career Counseling & Guidance', 'Talent Acquisition Strategy', 'Team Building & Culture', 'Student Engagement Programs'],
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label reveal">What I Do</span>
          <h2 className="section-title reveal reveal-delay-1">
            Expertise That <span className="gold-text">Drives Impact</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Four pillars of professional excellence — from academic leadership to
            entrepreneurship advocacy — creating meaningful change in Nepal&apos;s education landscape.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`service-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-features">
                {s.features.map((f, j) => (<li key={j}>{f}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
