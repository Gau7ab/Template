'use client';
import { Megaphone, TrendingUp, Globe, Briefcase } from 'lucide-react';

export default function CareerTimeline() {
  const milestones = [
    {
      period: 'Early Career',
      role: 'Business Development Executive',
      org: 'Advertising Agency',
      icon: Megaphone,
      accent: 'var(--accent-blue)',
      responsibilities: [
        'Client acquisition & B2B campaign management',
        'Brand promotion & strategic partnerships',
        'Growing agency revenue through sales',
      ],
    },
    {
      period: 'Growth Phase',
      role: 'Branch Manager',
      org: 'Reputed Educational Consultancy',
      icon: TrendingUp,
      accent: 'var(--accent-emerald)',
      responsibilities: [
        'Full branch P&L management',
        'Team leadership & student enrolments',
        'Operational oversight & branch growth targets',
      ],
    },
    {
      period: 'Leadership',
      role: 'Chief Executive Officer (CEO)',
      org: 'Australian-Based Company — Nepal Operations',
      icon: Globe,
      accent: 'var(--accent-coral)',
      responsibilities: [
        'End-to-end business operations',
        'International client liaison & strategy execution',
        'Building Nepal-side organizational structure',
      ],
    },
    {
      period: 'Present',
      role: 'Assistant Director — MBA Program',
      org: 'Boston International College (BIC), Bharatpur',
      icon: Briefcase,
      accent: 'var(--gold-primary)',
      responsibilities: [
        'Academic leadership & faculty coordination',
        'Teaching Marketing & Strategic Management (MBA)',
        'Industry-academia bridge building & events',
        'Corporate training & personality development',
      ],
    },
  ];

  return (
    <section className="career-timeline" id="career">
      <div className="container">
        <div className="services-header">
          <span className="section-label reveal">My Journey</span>
          <h2 className="section-title reveal reveal-delay-1">
            Career <span className="gold-text">Progression</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            From B2B sales in advertising to CEO of an international company — and now shaping
            the next generation of business leaders.
          </p>
        </div>
        <div className="timeline">
          {milestones.map((m, i) => (
            <div className={`timeline-item reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''}`} key={i}>
              <div className="timeline-marker" style={{ borderColor: m.accent }}>
                <span className="timeline-icon"><m.icon size={24} /></span>
              </div>
              <div className="timeline-connector"></div>
              <div className="timeline-card">
                <div className="timeline-period" style={{ color: m.accent }}>{m.period}</div>
                <h3 className="timeline-role">{m.role}</h3>
                <p className="timeline-org">{m.org}</p>
                <ul className="timeline-responsibilities">
                  {m.responsibilities.map((r, j) => (
                    <li key={j}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
