import { Link } from 'react-router-dom'
import { clientProjects } from '../data/projects'

// ─── Composant carte projet ────────────────────────────────────────────────
function ProjectCard({ project }) {
  return (
    <div className="group relative border border-gold-dim/30 bg-leather/40 p-6 hover:border-gold/60 hover:bg-leather/70 transition-all duration-400">
      {/* Coin décoratif */}
      <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/40 group-hover:border-gold transition-colors duration-300" />
      <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/40 group-hover:border-gold transition-colors duration-300" />

      <p className="font-body text-xs text-gold tracking-widest uppercase mb-3">Réalisation client</p>
      <h3 className="font-display text-2xl text-cream mb-2">{project.title}</h3>
      <p className="font-body text-muted text-sm mb-4 italic">{project.tagline}</p>
      <p className="font-body text-parchment/80 text-sm leading-relaxed mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs font-body text-muted border border-dust px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-gold hover:text-cream transition-colors duration-200"
        >
          Voir le projet →
        </a>
      )}
    </div>
  )
}

// ─── Page Home ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* ── Hero ── */}
      <section className="min-h-[80vh] flex flex-col justify-center py-20 relative">
        {/* Ornement décoratif fond */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" stroke="#c9a84c" strokeWidth="1" fill="none" />
            <circle cx="100" cy="100" r="60" stroke="#c9a84c" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="100" r="40" stroke="#c9a84c" strokeWidth="0.5" fill="none" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="#c9a84c" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-3xl fade-up">
          <p className="font-body text-gold tracking-[0.3em] uppercase text-sm mb-6 fade-up fade-up-delay-1">
            Développeur Web Freelance
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-cream mb-6 leading-tight fade-up fade-up-delay-2">
            Votre présence en ligne,{' '}
            <em className="text-gold not-italic">enfin à votre image.</em>
          </h1>
          <p className="font-body text-lg text-parchment/75 max-w-xl mb-10 fade-up fade-up-delay-3">
            Je conçois des sites web et applications sur-mesure pour les
            indépendants, associations et petites entreprises. Pas de jargon,
            pas de surprise — juste un résultat qui vous ressemble.
          </p>
          <div className="flex flex-wrap gap-4 fade-up fade-up-delay-4">
            <Link
              to="/contact"
              className="font-body px-8 py-3 bg-gold text-ink hover:bg-gold/90 transition-colors duration-200 tracking-wide"
            >
              Parler de mon projet
            </Link>
            <Link
              to="/projets"
              className="font-body px-8 py-3 border border-gold/50 text-parchment hover:border-gold hover:text-cream transition-all duration-200 tracking-wide"
            >
              Voir mes réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="separator">
        <span className="font-body text-xs text-muted tracking-widest uppercase">Réalisations</span>
      </div>

      {/* ── Projets clients ── */}
      <section className="py-16">
        <h2 className="font-display text-3xl text-cream mb-2">Ce que j'ai construit</h2>
        <p className="font-body text-muted mb-10">Des projets réels, pour des clients réels.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {clientProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Link
          to="/projets"
          className="font-body text-sm text-gold hover:text-cream transition-colors duration-200"
        >
          Voir tous les projets →
        </Link>
      </section>

      {/* Séparateur */}
      <div className="separator">
        <span className="font-body text-xs text-muted tracking-widest uppercase">Processus</span>
      </div>

      {/* ── Comment ça marche ── */}
      <section className="py-16">
        <h2 className="font-display text-3xl text-cream mb-2">Comment ça se passe</h2>
        <p className="font-body text-muted mb-12">Simple, transparent, sans mauvaise surprise.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { num: '01', title: 'On en parle',     desc: 'Vous me racontez votre projet, vos besoins, votre budget. Pas de jargon de ma part.' },
            { num: '02', title: 'Je propose',       desc: 'Je vous envoie un devis clair avec ce qui est inclus, les délais, et le tarif.' },
            { num: '03', title: 'On construit',     desc: 'Je développe votre site par étapes. Vous validez à chaque grande étape.' },
            { num: '04', title: 'Vous êtes en ligne', desc: 'Je m\'occupe de la mise en ligne. Votre site est prêt, vous êtes autonome.' },
          ].map(({ num, title, desc }) => (
            <div key={num} className="relative pl-4 border-l border-gold-dim/30">
              <span className="font-display text-5xl text-gold/10 absolute -top-2 -left-1 select-none">{num}</span>
              <p className="font-display text-lg text-cream mb-2 mt-4">{title}</p>
              <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-20 text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-body text-gold tracking-widest uppercase text-xs mb-4">Prêt à commencer ?</p>
          <h2 className="font-display text-4xl text-cream mb-4">Un projet en tête ?</h2>
          <p className="font-body text-muted mb-8">Je réponds à tous les messages sous 48h.</p>
          <Link
            to="/contact"
            className="font-body px-10 py-4 bg-gold text-ink hover:bg-gold/90 transition-colors duration-200 tracking-wide text-lg"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </div>
  )
}
