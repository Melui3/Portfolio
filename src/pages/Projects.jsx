import { useState } from 'react'
import { projects } from '../data/projects'

const STATUS_LABEL = {
  live: { label: 'En ligne',   className: 'text-emerald-400 border-emerald-400/40' },
  wip:  { label: 'En cours',  className: 'text-gold border-gold/40'               },
  soon: { label: 'Bientôt',   className: 'text-muted border-muted/40'             },
}

function ProjectCard({ project }) {
  const status = STATUS_LABEL[project.status]

  return (
    <div className="group relative border border-gold-dim/25 bg-leather/30 hover:bg-leather/60 hover:border-gold-dim/60 transition-all duration-400 p-7">
      <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />

      <div className="flex items-start justify-between mb-4">
        <span className={`font-body text-xs border px-2 py-0.5 ${status.className}`}>
          {status.label}
        </span>
        <span className="font-body text-xs text-muted">
          {project.type === 'client' ? 'Réalisation client' : 'Projet perso'}
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

      <div className="flex gap-4">
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
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted hover:text-parchment transition-colors duration-200"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all') // 'all' | 'client' | 'lab'

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.type === filter)

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header page */}
      <div className="mb-14">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Portfolio</p>
        <h1 className="font-display text-5xl text-cream mb-4">Mes projets</h1>
        <p className="font-body text-muted max-w-lg">
          Réalisations clients et projets personnels — chaque ligne de code
          écrite avec intention.
        </p>
      </div>

      {/* Filtres */}
      <div className="flex gap-2 mb-10">
        {[
          { key: 'all',    label: 'Tous'           },
          { key: 'client', label: 'Clients'        },
          { key: 'lab',    label: 'Projets perso'  },
        ].map(({ key, label }) => (
          <button
            key={key}
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

      {/* Grille projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
