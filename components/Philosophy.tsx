export default function Philosophy() {
  const values = [
    { icon: '🔥', title: 'Bold Action', sub: 'No half measures' },
    { icon: '🎯', title: 'Precision', sub: 'Results-driven focus' },
    { icon: '💡', title: 'Innovation', sub: 'Fresh approaches' },
    { icon: '🤝', title: 'Empathy', sub: 'Human-first mindset' },
    { icon: '⚡', title: 'Impact', sub: 'Measurable outcomes' },
  ];

  return (
    <section className="philosophy" id="philosophy">
      <div className="container">
        <div className="philosophy-container reveal">
          <div className="philosophy-quote">
            <blockquote>
              &ldquo;Education is not just about filling minds — it&apos;s about <span className="gold-text">igniting them</span>.
              I believe every student carries a flame; my job is to fan it into a fire.&rdquo;
            </blockquote>
            <cite>— Personal Philosophy</cite>
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
