export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-image reveal">
          <img src="/hero-profile.png" alt="Shikhar Lamichhane — Professional Portrait" />
          <div className="experience-badge">
            <div className="number">8+</div>
            <div className="label">Years Exp.</div>
          </div>
        </div>
        <div className="about-content">
          <span className="section-label reveal">About Me</span>
          <h2 className="section-title reveal reveal-delay-1">
            A Multi-Dimensional Professional<br /><span className="gold-text">Across Industries &amp; Disciplines</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            I&apos;m <strong>Shikhar Lamichhane</strong> — a Marketing Strategist, B2B Sales Expert,
            Corporate Trainer, and MBA Educator with over 8 years of cross-industry experience
            spanning advertising, educational consultancy, international business, and academia.
          </p>
          <p className="section-subtitle reveal reveal-delay-2" style={{ marginTop: '1rem' }}>
            My career has taken me from managing B2B sales campaigns at an advertising agency, to
            leading an educational consultancy branch, to serving as CEO of an Australian-based
            company&apos;s Nepal operations. Today, I direct the MBA Program at
            <strong> Boston International College</strong> while teaching Marketing &amp; Strategic
            Management at the Masters level and training professionals in personality development
            and business communication.
          </p>
          <div className="about-highlights reveal reveal-delay-3">
            <div className="highlight-item">
              <div className="highlight-icon">🎯</div>
              <div className="highlight-text">
                <h4>Marketing &amp; Sales</h4>
                <p>B2B strategy &amp; revenue growth</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🏢</div>
              <div className="highlight-text">
                <h4>Business Leadership</h4>
                <p>Branch Manager to CEO</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🧠</div>
              <div className="highlight-text">
                <h4>Corporate Trainer</h4>
                <p>Personality &amp; communication</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🎓</div>
              <div className="highlight-text">
                <h4>MBA Educator</h4>
                <p>Marketing &amp; Strategic Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
