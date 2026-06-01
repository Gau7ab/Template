export default function Philosophy() {
  const values = [
    { icon: '🔥', title: 'Bold Vision', sub: 'Dream big, execute bigger' },
    { icon: '🎯', title: 'Bridge Builder', sub: 'Academia meets industry' },
    { icon: '💡', title: 'Entrepreneurial', sub: 'Innovation-first mindset' },
    { icon: '🤝', title: 'People First', sub: 'Empowering every individual' },
    { icon: '⚡', title: 'Action-Oriented', sub: 'Results over rhetoric' },
  ];

  return (
    <section className="philosophy" id="philosophy">
      <div className="container">
        <div className="philosophy-container reveal">
          <div className="philosophy-quote">
            <blockquote>
              &ldquo;Quality management education isn&apos;t just about degrees — it&apos;s about building
              <span className="gold-text"> practical skills &amp; entrepreneurial mindsets</span> that
              transform +2 graduates into future leaders of Nepal.&rdquo;
            </blockquote>
            <cite>&mdash; Shikhar Lamichhane</cite>
          </div>
          <div className="philosophy-values">
            {values.map((v, i) => (
              <div className="value-item" key={i}>
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
