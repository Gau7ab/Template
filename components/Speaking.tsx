export default function Speaking() {
  const topics = [
    'Marketing Strategy & IMC',
    'B2B Sales & Service Selling',
    'Personality Development',
    'Business Communication Etiquette',
    'Strategic Management & Leadership',
    'Entrepreneurship & Startup Mindset',
    'Career Development for Graduates',
  ];

  const formats = [
    { icon: '🎤', label: 'Keynote Address' },
    { icon: '💬', label: 'Panel Discussion' },
    { icon: '🛠️', label: 'Workshop' },
    { icon: '🎓', label: 'Guest Lecture' },
    { icon: '🏢', label: 'Corporate Training' },
  ];

  return (
    <section className="speaking" id="speaking">
      <div className="container">
        <div className="speaking-layout">
          <div className="speaking-content">
            <span className="section-label reveal">Speaking &amp; Events</span>
            <h2 className="section-title reveal reveal-delay-1">
              Invite Me to <span className="gold-text">Speak</span>
            </h2>
            <p className="section-subtitle reveal reveal-delay-2">
              I bring energy, real-world insights, and actionable takeaways to every stage.
              Whether it&apos;s a keynote, a panel discussion, or an intensive workshop — my sessions
              are interactive, practical, and designed to leave a lasting impact on the audience.
            </p>

            <div className="speaking-topics reveal reveal-delay-3">
              <h4>Topics I Speak On</h4>
              <div className="tags-container">
                {topics.map((t, i) => (
                  <span className="tag" key={i}>{t}</span>
                ))}
              </div>
            </div>

            <a href="#contact" className="btn-primary reveal reveal-delay-4" style={{ display: 'inline-flex', marginTop: '2rem' }}>
              <span>Invite Me to Speak</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="speaking-formats reveal">
            <h4>Session Formats</h4>
            <div className="formats-list">
              {formats.map((f, i) => (
                <div className="format-item" key={i}>
                  <span className="format-icon">{f.icon}</span>
                  <span className="format-label">{f.label}</span>
                </div>
              ))}
            </div>
            <div className="speaking-note">
              <p>📍 Available for events across Nepal and internationally (virtual sessions supported).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
