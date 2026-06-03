export default function RolesMarquee() {
  const roles = [
    'Marketing Strategist',
    'B2B Sales Expert',
    'Corporate Trainer',
    'MBA Educator',
    'Personality Development Trainer',
    'Business Leader',
    'Startup Advocate',
    'Academic Director',
  ];
  const doubled = [...roles, ...roles];
  return (
    <div className="roles-marquee">
      <div className="marquee-track">
        {doubled.map((role, i) => (
          <span className="marquee-item" key={i}>{role} <span className="divider"></span></span>
        ))}
      </div>
    </div>
  );
}
