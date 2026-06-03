export default function CoursesTeach() {
  const courses = [
    { icon: '📊', title: 'Marketing Management', level: 'MBA Level', desc: 'Full-cycle marketing — from research and STP to IMC planning and campaign execution.' },
    { icon: '♟️', title: 'Strategic Management', level: 'MBA Level', desc: 'Competitive analysis, strategic thinking frameworks, and corporate decision-making.' },
    { icon: '🧩', title: 'Consumer Behaviour & IMC', level: 'MBA Level', desc: 'Understanding buyer psychology and integrating communications across channels.' },
    { icon: '🤝', title: 'Sales & Distribution Management', level: 'MBA Level', desc: 'Managing sales teams, distribution networks, and channel strategy.' },
  ];

  return (
    <section className="courses-teach" id="courses">
      <div className="container">
        <div className="services-header">
          <span className="section-label reveal">Academics</span>
          <h2 className="section-title reveal reveal-delay-1">
            Courses I <span className="gold-text">Teach</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Bringing real corporate experience into MBA classrooms — theory meets practice.
          </p>
        </div>
        <div className="courses-grid">
          {courses.map((c, i) => (
            <div className={`course-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''}`} key={i}>
              <div className="course-icon">{c.icon}</div>
              <div className="course-info">
                <h4>{c.title}</h4>
                <span className="course-level">{c.level}</span>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
