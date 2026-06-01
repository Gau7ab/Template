export default function RolesMarquee() {
  const roles = [
    'Assistant Director — MBA Program',
    'Education Leader',
    'Business Strategist',
    'Student Counselor',
    'Event Organizer',
    'Entrepreneurship Advocate',
    'Youth Empowerment',
    'HR & Marketing Specialist',
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
