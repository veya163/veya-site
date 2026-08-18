import { ArrowRight, BookOpen, Sparkles, Users } from 'lucide-react'

const pillars = [
  {
    icon: BookOpen,
    title: 'Learning evidence',
    copy: 'Turn real learning activity into evidence teachers and students can understand and act on.',
  },
  {
    icon: Users,
    title: 'Teacher control',
    copy: 'Keep educators in control while AI helps surface patterns, prepare context, and reduce repetitive work.',
  },
  {
    icon: Sparkles,
    title: 'AI harness',
    copy: 'Connect models, tools, skills, and learning context through a practical education-first harness.',
  },
]

export function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Veya home">
          <span className="brand-mark">V</span>
          <span>Veya</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#vision">Vision</a>
          <a href="#platform">Platform</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow">AI-NATIVE LEARNING OS</div>
        <h1>Help every learner move forward with clarity.</h1>
        <p className="hero-copy">
          Veya connects students, teachers, learning evidence, and AI into one practical learning system, without replacing the human judgment education depends on.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#platform">
            Explore Veya <ArrowRight size={18} />
          </a>
          <a className="button secondary" href="#vision">Our vision</a>
        </div>
      </section>

      <section className="statement" id="vision">
        <p>Technology should make learning more visible, teaching more informed, and support more personal.</p>
      </section>

      <section className="pillars" id="platform" aria-label="Veya platform pillars">
        {pillars.map(({ icon: Icon, title, copy }) => (
          <article className="pillar-card" key={title}>
            <span className="icon-wrap"><Icon size={22} /></span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <footer id="contact">
        <div>
          <strong>Veya</strong>
          <p>Learning, understood.</p>
        </div>
        <span>Official website · 2026</span>
      </footer>
    </main>
  )
}
