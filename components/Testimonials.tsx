export default function Testimonials() {
  const testimonials = [
    {
      text: 'Their IELTS coaching transformed my preparation completely. I achieved a Band 7.5 on my first attempt. The strategies for Writing Task 2 were game-changing.',
      initials: 'RK', name: 'Rajesh K.', role: 'IELTS Student • Band 7.5',
    },
    {
      text: 'As a faculty member, their coordination skills are unmatched. They brought structure, accountability, and a culture of excellence to our entire department.',
      initials: 'SP', name: 'Dr. Sunita P.', role: 'Associate Professor, Dept. of Management',
    },
    {
      text: 'The mentorship I received during my career transition was invaluable. Their HR insight and bold, honest feedback gave me the confidence to take the leap.',
      initials: 'AM', name: 'Anisha M.', role: 'HR Manager, Tech Company',
    },
  ];

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
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
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
