import { Mic2, MessageSquare, Wrench, BookMarked, Building2, ArrowRight } from 'lucide-react';

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
    { icon: Mic2, label: 'Keynote Address' },
    { icon: MessageSquare, label: 'Panel Discussion' },
    { icon: Wrench, label: 'Workshop' },
    { icon: BookMarked, label: 'Guest Lecture' },
    { icon: Building2, label: 'Corporate Training' },
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
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="speaking-formats reveal">
            <h4>Session Formats</h4>
            <div className="formats-list">
              {formats.map((f, i) => (
                <div className="format-item" key={i}>
                  <span className="format-icon"><f.icon size={24} /></span>
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
