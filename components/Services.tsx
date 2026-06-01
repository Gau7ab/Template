export default function Services() {
  const services = [
    {
      icon: '🏛️',
      title: 'Faculty Coordination',
      desc: 'Orchestrating academic departments to deliver world-class education through strategic planning and resource management.',
      features: ['Curriculum Design & Review', 'Faculty Development Programs', 'Academic Quality Assurance', 'Institutional Strategy'],
    },
    {
      icon: '🧭',
      title: 'Career Mentorship',
      desc: 'One-on-one guidance to help students and early professionals navigate career decisions with clarity and confidence.',
      features: ['Career Path Planning', 'Resume & Interview Coaching', 'Leadership Development', 'Goal-Setting Frameworks'],
    },
    {
      icon: '💼',
      title: 'HR & People Strategy',
      desc: 'Building organizational excellence through strategic human resource management, talent development, and workplace culture.',
      features: ['Talent Acquisition & Onboarding', 'Performance Management', 'Team Building Workshops', 'Policy Development'],
    },
    {
      icon: '🌍',
      title: 'IELTS Preparation',
      desc: 'Proven methodology to achieve target band scores through structured training in all four modules.',
      features: ['Listening & Reading Mastery', 'Writing Task 1 & Task 2', 'Speaking Confidence Building', 'Mock Tests & Feedback'],
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label reveal">What I Do</span>
          <h2 className="section-title reveal reveal-delay-1">
            Expertise That <span className="gold-text">Makes Impact</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Four pillars of professional excellence, each designed to create meaningful change
            in the lives of students, educators, and organizations.
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
