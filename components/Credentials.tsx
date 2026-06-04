import { GraduationCap, BarChart3 } from 'lucide-react';

export default function Credentials() {
  const degrees = [
    {
      icon: GraduationCap,
      degree: 'Master of Business Administration (MBA)',
      specialization: 'Human Resources Management & Marketing',
      institution: 'Amity Business School, India',
      period: '2013 – 2015',
      accent: 'var(--gold-primary)',
    },
    {
      icon: BarChart3,
      degree: 'Master of Professional Accounting',
      specialization: 'Accounting & Finance',
      institution: 'Melbourne Business School, University of Melbourne, Australia',
      period: '2017 – 2019',
      accent: 'var(--accent-blue)',
    },
  ];

  return (
    <section className="credentials" id="credentials">
      <div className="container">
        <div className="services-header">
          <span className="section-label reveal">Education</span>
          <h2 className="section-title reveal reveal-delay-1">
            Academic <span className="gold-text">Credentials</span>
          </h2>
        </div>
        <div className="credentials-grid">
          {degrees.map((d, i) => (
            <div className={`credential-card reveal${i > 0 ? ' reveal-delay-1' : ''}`} key={i}>
              <div className="credential-icon" style={{ borderColor: d.accent }}><d.icon size={32} /></div>
              <div className="credential-content">
                <h3>{d.degree}</h3>
                <p className="credential-spec">{d.specialization}</p>
                <p className="credential-inst">{d.institution}</p>
                <span className="credential-period" style={{ color: d.accent }}>{d.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
