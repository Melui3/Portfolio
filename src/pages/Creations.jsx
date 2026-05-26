import { useState } from 'react'
import { creations, categoryMeta } from '../data/creations'

const FILTERS = [
  { key: 'all',        label: 'Tout'              },
  { key: 'logo',       label: 'Logos'             },
  { key: 'banniere',   label: 'Bannières'         },
  { key: 'transition', label: 'Transitions Twitch'},
]

function CreationCard({ creation }) {
  const meta = categoryMeta[creation.category]

  return (
    <div className="group relative border border-gold-dim/25 bg-leather/30 hover:bg-leather/60 hover:border-gold-dim/60 transition-all duration-400">
      <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />
      <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-gold/15 group-hover:border-gold/40 transition-colors duration-300" />

      {/* Image ou placeholder */}
      <div className="relative w-full aspect-video bg-dust/60 overflow-hidden border-b border-gold-dim/20">
        {creation.image ? (
          <img
            src={creation.image}
            alt={creation.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted/40">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="1" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="font-body text-xs tracking-widest uppercase">Visuel à venir</span>
          </div>
        )}
        <span className="absolute top-3 left-3 font-body text-xs border px-2 py-0.5 text-gold border-gold/40 bg-ink/80 backdrop-blur-sm">
          {meta.label}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-cream mb-1">{creation.title}</h3>
        <p className="font-body text-sm text-gold/70 italic mb-4">{creation.context}</p>

        <div className="separator mb-4">
          <span className="font-body text-xs text-muted tracking-widest uppercase">Réflexion</span>
        </div>

        <p className="font-body text-sm text-parchment/70 leading-relaxed mb-5">
          {creation.reflexion}
        </p>

        {creation.tools.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {creation.tools.map((tool) => (
              <span key={tool} className="text-xs font-body text-muted border border-dust px-2 py-0.5">
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Creations() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? creations
    : creations.filter((c) => c.category === filter)

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <div className="mb-14">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Design & Motion</p>
        <h1 className="font-display text-5xl text-cream mb-4">Créations visuelles</h1>
        <p className="font-body text-muted max-w-lg">
          Logos, bannières et scènes Twitch — chaque création pensée avec une direction artistique
          et une intention claire derrière chaque choix.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map(({ key, label }) => (
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

      {filtered.length === 0 ? (
        <div className="text-center py-24 text-muted font-body">
          Aucune création dans cette catégorie pour le moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((creation) => (
            <CreationCard key={creation.id} creation={creation} />
          ))}
        </div>
      )}
    </div>
  )
}
