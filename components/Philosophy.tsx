import { Zap, Target, Lightbulb, Users, Sparkles } from 'lucide-react';

export default function Philosophy() {
  const values = [
    { icon: Zap, title: 'Bold Execution', sub: 'Strategy without action is fantasy' },
    { icon: Target, title: 'Real-World Focus', sub: 'Theory meets practice' },
    { icon: Lightbulb, title: 'Continuous Growth', sub: 'Always learning, always evolving' },
    { icon: Users, title: 'People First', sub: 'Every interaction matters' },
    { icon: Sparkles, title: 'Multi-Dimensional', sub: 'Sales, strategy, training, education' },
  ];

  return (
    <section className="philosophy" id="philosophy">
      <div className="container">
        <div className="philosophy-container reveal">
          <div className="philosophy-quote">
            <blockquote>
              &ldquo;The best professionals don&apos;t fit into one box — they bring
              <span className="gold-text"> strategy, sales, leadership, and the ability to train others</span> into
              every room they walk into. That&apos;s the standard I hold myself to.&rdquo;
            </blockquote>
            <cite>&mdash; Shikhar Lamichhane</cite>
          </div>
          <div className="philosophy-values">
            {values.map((v, i) => (
              <div className="value-item" key={i}>
                <div className="value-icon"><v.icon size={32} /></div>
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
