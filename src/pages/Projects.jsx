import { useState } from 'react'
import { projectCategories, projects, projectsByCategory } from '../data/projects'

const STATUS_LABEL = {
  live: { label: 'En ligne', className: 'text-gold border-gold/45' },
  wip: { label: 'En cours', className: 'text-gold border-gold/40' },
  soon: { label: 'Bientôt', className: 'text-muted border-muted/40' },
}

const categoryByKey = Object.fromEntries(projectCategories.map((category) => [category.key, category]))

function ProjectDetails({ details }) {
  return (
    <div className="mt-5 pt-5 border-t border-gold-dim/20 space-y-4">
      {details.map((detail) => (
        <div key={detail.label}>
          <p className="font-body text-xs text-gold tracking-widest uppercase mb-1.5">{detail.label}</p>
          <p className="font-body text-sm text-parchment/70 leading-relaxed">{detail.body}</p>
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const status = STATUS_LABEL[project.status]
  const category = categoryByKey[project.category]
  const mediaSrc = project.image
    ? `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`
    : null
  const mediaClassName = project.imageFit === 'contain'
    ? 'w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.025]'
    : 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]'

  return (
    <article className="motion-card scroll-reveal group relative overflow-hidden border border-gold-dim/25 bg-leather/30 hover:bg-leather/60 hover:border-gold-dim/60 transition-all duration-400">
      <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />

      {mediaSrc && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="media-frame block relative w-full aspect-[16/10] bg-dust/50 overflow-hidden border-b border-gold-dim/20"
          aria-label={`Voir ${project.title}`}
        >
          <img
            src={mediaSrc}
            alt={`Aperçu du projet ${project.title}`}
            loading="lazy"
            className={mediaClassName}
          />
          <span className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/80 to-transparent" />
          {project.status === 'live' && project.url && (
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-[15px] bg-gold px-4 py-2 font-body text-sm text-ink shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:translate-x-0.5">
              Ouvrir le site
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </span>
          )}
        </a>
      )}

      <div className="p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className={`font-body text-xs border px-2 py-0.5 ${status.className}`}>
            {status.label}
          </span>
          <span className="font-body text-xs text-muted text-right">
            {category.label}
          </span>
        </div>

        <h3 className="font-display text-2xl text-cream mb-1">{project.title}</h3>
        <p className="font-body text-sm text-gold/80 italic mb-4">{project.tagline}</p>
        <p className="font-body text-sm text-parchment/70 leading-relaxed mb-5">{project.description}</p>

        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-body text-muted border border-dust px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {project.status === 'live' && project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-gold bg-gold px-5 py-2.5 font-body text-sm text-ink hover:bg-cream hover:text-ink transition-all duration-200"
              >
                Ouvrir le site
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-muted hover:text-parchment transition-colors duration-200 gold-underline"
              >
                GitHub →
              </a>
            )}
          </div>

          {project.details && (
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex w-fit items-center gap-1.5 border border-dust px-4 py-2 font-body text-xs text-muted hover:border-gold-dim hover:text-gold transition-colors duration-200 shrink-0"
            >
              <span>{open ? 'Masquer la démarche' : 'Lire la démarche'}</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M1 3l4 4 4-4" />
              </svg>
            </button>
          )}
        </div>

        {project.details && (
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              open ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <ProjectDetails details={project.details} />
          </div>
        )}
      </div>
    </article>
  )
}

function EmptyCategory({ message }) {
  return (
    <div className="scroll-reveal border border-dust bg-leather/20 px-6 py-10 text-center">
      <p className="font-body text-muted">{message}</p>
    </div>
  )
}

function CategorySection({ category, items }) {
  return (
    <section className="scroll-reveal">
      <div className="mb-6">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-2">{category.label}</p>
        <h2 className="font-display text-3xl text-cream mb-2">{category.plural}</h2>
        <p className="font-body text-muted max-w-2xl">{category.intro}</p>
      </div>

      {items.length === 0 ? (
        <EmptyCategory message={category.empty} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const visibleCategories = filter === 'all'
    ? projectCategories
    : projectCategories.filter((category) => category.key === filter)

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-14 scroll-reveal">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Portfolio</p>
        <h1 className="font-display text-5xl text-cream mb-4">Mes projets</h1>
        <p className="font-body text-muted max-w-xl">
          Projets clients, concepts réalistes et projets passion — moins de remplissage,
          plus de contexte sur la démarche derrière chaque interface.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-12 scroll-reveal">
        {[
          { key: 'all', label: 'Tout' },
          ...projectCategories.map((category) => ({ key: category.key, label: category.plural })),
        ].map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`font-body text-sm px-4 py-1.5 border transition-all duration-200 ${
              filter === key
                ? 'border-gold bg-gold/10 text-gold'
                : 'border-dust text-muted hover:border-gold-dim hover:text-parchment'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-16">
        {visibleCategories.map((category) => (
          <CategorySection
            key={category.key}
            category={category}
            items={filter === 'all' ? projectsByCategory(category.key) : projectsByCategory(filter)}
          />
        ))}
      </div>
    </div>
  )
}
