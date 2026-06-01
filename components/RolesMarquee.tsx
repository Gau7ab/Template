export default function RolesMarquee() {
  const roles = ['Faculty Coordinator', 'Career Mentor', 'HR Strategist', 'IELTS Expert', 'Workshop Facilitator', 'Student Counselor'];
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
