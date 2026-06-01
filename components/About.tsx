export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-image reveal">
          <img src="/hero-action.jpg" alt="Shikhar Lamichhane presenting - Assistant Director MBA Program" />
          <div className="experience-badge">
            <div className="number">7+</div>
            <div className="label">Years Exp.</div>
          </div>
        </div>
        <div className="about-content">
          <span className="section-label reveal">About Me</span>
          <h2 className="section-title reveal reveal-delay-1">
            Bridging the Gap Between<br /><span className="gold-text">Academia &amp; Industry</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            I&apos;m <strong>Shikhar Lamichhane</strong>, currently serving as the Assistant Director of the
            MBA/Graduate Program at <strong>Boston International College (BIC)</strong>, Bharatpur, Chitwan.
            With over 7 years of experience in business development, education management, and
            entrepreneurship, I&apos;m passionate about creating future-ready professionals.
          </p>
          <p className="section-subtitle reveal reveal-delay-2" style={{ marginTop: '1rem' }}>
            I hold an <strong>MBA from Amity Business School, India</strong> (HR &amp; Marketing) and a
            <strong> Master&apos;s in Accounting from Melbourne Business School, University of Melbourne</strong>.
            My mission is to bridge the gap between academic learning and real-world industry demands,
            empowering Nepal&apos;s youth with practical skills and entrepreneurial mindsets.
          </p>
          <div className="about-highlights reveal reveal-delay-3">
            <div className="highlight-item">
              <div className="highlight-icon">🎓</div>
              <div className="highlight-text">
                <h4>MBA Program Leadership</h4>
                <p>Directing academics &amp; admissions</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📈</div>
              <div className="highlight-text">
                <h4>Business Development</h4>
                <p>Strategic growth &amp; partnerships</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🚀</div>
              <div className="highlight-text">
                <h4>Entrepreneurship Advocate</h4>
                <p>Startup bootcamps &amp; mentoring</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🤝</div>
              <div className="highlight-text">
                <h4>Student Counselor</h4>
                <p>Career guidance &amp; empowerment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
