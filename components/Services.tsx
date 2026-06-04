import { Compass, Briefcase, Building2, Brain, BookOpen, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Compass,
      title: 'Marketing Strategy',
      desc: 'Expert in designing and executing full-cycle marketing strategies — from market research and segmentation to positioning, messaging, and IMC (Integrated Marketing Communications). I understand how to select the right strategy using tools and frameworks and, critically, how to implement and control it.',
      tags: ['Integrated Marketing Communications (IMC)', 'Market Segmentation & Targeting', 'Brand Strategy', 'Campaign Planning', 'Strategic Positioning', 'Marketing Mix Optimisation'],
    },
    {
      icon: Briefcase,
      title: 'B2B Sales & Service Selling',
      desc: 'Over 8 years of hands-on B2B sales experience across multiple industries — advertising, education, and international business. I specialise in service selling, where the product is intangible and relationship-building is everything. Proven track record of closing deals, building long-term client relationships, and driving revenue.',
      tags: ['B2B Sales Strategy', 'Service Selling', 'Client Acquisition', 'Consultative Selling', 'Relationship Management', 'Revenue Growth', 'Sales Pipeline Management'],
    },
    {
      icon: Building2,
      title: 'Business Leadership & Management',
      desc: 'I have led businesses at various levels — from running a branch to serving as CEO of an Australian-based company\'s Nepal operations. I understand P&L, team building, operational management, and strategic decision-making from the top.',
      tags: ['Branch Management', 'CEO-Level Leadership', 'P&L Management', 'Strategic Decision-Making', 'Operational Excellence', 'International Business'],
    },
    {
      icon: Brain,
      title: 'Corporate Training & Personality Development',
      desc: 'An experienced trainer with a focus on personality development, professional communication, and business communication etiquette. I have delivered training sessions for professionals across organisations, helping individuals develop confidence, clarity, and professional presence.',
      tags: ['Personality Development Training', 'Professional Communication', 'Business Etiquette', 'Communication Skills Workshop', 'Confidence Building', 'Soft Skills Training'],
    },
    {
      icon: BookOpen,
      title: 'MBA Education & Academic Leadership',
      desc: 'I teach Marketing and Strategic Management at the Masters level, bringing real corporate experience into the classroom. I bridge the gap between academic theory and industry practice — my students don\'t just learn frameworks, they learn how to apply them.',
      tags: ['Marketing Management (MBA)', 'Strategic Management', 'Curriculum Development', 'Faculty Coordination', 'Student Mentoring', 'Academic Program Leadership'],
    },
    {
      icon: Zap,
      title: 'Entrepreneurship & Startup Advocacy',
      desc: 'Passionate about building entrepreneurial mindsets in Nepal\'s youth. I organise startup bootcamps, mentoring sessions, and leadership programmes to help aspiring entrepreneurs take their first steps.',
      tags: ['Startup Bootcamps', 'Entrepreneurship Mentoring', 'Youth Empowerment', 'Business Ideation', 'Leadership Development'],
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label reveal">What I Do</span>
          <h2 className="section-title reveal reveal-delay-1">
            Six Pillars of <span className="gold-text">Professional Excellence</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            A rare blend of marketing strategy, sales expertise, business leadership, corporate training,
            academic rigour, and entrepreneurial vision.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`service-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''}`} key={i}>
              <div className="service-icon"><s.icon size={32} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t, j) => (
                  <span className="service-tag" key={j}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
