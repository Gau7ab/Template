import { Briefcase, Target, Brain, MessageSquare, Chess } from 'lucide-react';

export default function Training() {
  const workshops = [
    {
      icon: Briefcase,
      title: 'B2B Sales Mastery Workshop',
      desc: 'A practical, hands-on workshop for sales teams and professionals in service-based industries. Covers the full sales cycle from prospecting to closing.',
      audience: 'Sales Teams & Professionals',
    },
    {
      icon: Target,
      title: 'Marketing Strategy Masterclass',
      desc: 'Covering market analysis, STP (Segmentation, Targeting, Positioning), IMC planning, and strategic implementation. Suitable for MBA students and marketing professionals.',
      audience: 'MBA Students & Marketing Pros',
    },
    {
      icon: Brain,
      title: 'Personality Development Training',
      desc: 'Building professional presence, confidence, and interpersonal effectiveness. Ideal for fresh graduates, corporate teams, and individuals in client-facing roles.',
      audience: 'Graduates & Corporate Teams',
    },
    {
      icon: MessageSquare,
      title: 'Business Communication Etiquette',
      desc: 'Professional and corporate communication standards, meeting etiquette, written and verbal communication, and email/presentation best practices.',
      audience: 'Corporate Professionals',
    },
    {
      icon: Chess,
      title: 'Strategic Management Session',
      desc: 'For MBA classrooms and corporate leadership teams. Covers strategic thinking, competitive analysis, and decision-making frameworks.',
      audience: 'MBA Classes & Leadership Teams',
    },
  ];

  return (
    <section className="training" id="training">
      <div className="container">
        <div className="services-header">
          <span className="section-label reveal">Training &amp; Workshops</span>
          <h2 className="section-title reveal reveal-delay-1">
            Hire Me as a <span className="gold-text">Trainer &amp; Speaker</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Customised training programmes for corporates, colleges, institutions, and private
            organisations. Sessions are tailored based on audience and objectives.
          </p>
        </div>
        <div className="training-grid">
          {workshops.map((w, i) => (
            <div className={`training-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''}`} key={i}>
              <div className="training-icon"><w.icon size={32} /></div>
              <div className="training-content">
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                <span className="training-audience">👥 {w.audience}</span>
              </div>
              <a href="#contact" className="training-cta">Enquire Now →</a>
            </div>
          ))}
        </div>
        <div className="training-note reveal">
          <p>💡 <strong>Available for corporate workshops, colleges, institutions, and private organisations.</strong> Sessions are customised based on audience and objectives.</p>
        </div>
      </div>
    </section>
  );
}
