export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-image reveal">
          <img src="/hero-profile.png" alt="About Me — Professional Background" />
          <div className="experience-badge">
            <div className="number">10+</div>
            <div className="label">Years Exp.</div>
          </div>
        </div>
        <div className="about-content">
          <span className="section-label reveal">About Me</span>
          <h2 className="section-title reveal reveal-delay-1">
            A Bold Vision for <br /><span className="gold-text">Transformative Education</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            I bring a unique blend of academic leadership, human resources expertise,
            and language training to every interaction. As a Faculty Coordinator, I bridge
            the gap between institutional goals and student success. As a mentor and HR professional,
            I craft strategies that unlock human potential.
          </p>
          <p className="section-subtitle reveal reveal-delay-2" style={{ marginTop: '1rem' }}>
            My IELTS training programs have helped hundreds achieve their dream scores,
            opening doors to international education and careers. I believe in bold action,
            honest communication, and relentless pursuit of excellence.
          </p>
          <div className="about-highlights reveal reveal-delay-3">
            <div className="highlight-item">
              <div className="highlight-icon">🎓</div>
              <div className="highlight-text">
                <h4>Academic Leader</h4>
                <p>Coordinating faculty &amp; curriculum</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🤝</div>
              <div className="highlight-text">
                <h4>HR Strategist</h4>
                <p>Talent acquisition &amp; development</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📚</div>
              <div className="highlight-text">
                <h4>IELTS Specialist</h4>
                <p>Band 7+ coaching expert</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🧭</div>
              <div className="highlight-text">
                <h4>Career Mentor</h4>
                <p>Guiding professional journeys</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
