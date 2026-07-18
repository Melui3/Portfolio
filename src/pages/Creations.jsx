import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { creations, categoryMeta } from '../data/creations'

const FILTERS = [
  { key: 'all',        label: 'Tout'              },
  { key: 'logo',       label: 'Logos'             },
  { key: 'banniere',   label: 'Bannières'         },
  { key: 'transition', label: 'Transitions Twitch'},
]

function CreationCard({ creation, onOpen }) {
  const meta = categoryMeta[creation.category]
  const mediaSrc = creation.image
    ? `${import.meta.env.BASE_URL}${creation.image.replace(/^\//, '')}`
    : null
  const isVideo = mediaSrc?.endsWith('.mp4')
  const mediaClassName = creation.fit === 'contain'
    ? 'w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]'
    : 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'

  return (
    <article className="motion-card scroll-reveal group relative border border-gold-dim/25 bg-leather/30 hover:bg-leather/60 hover:border-gold-dim/60 transition-all duration-400">
      <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />
      <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-gold/15 group-hover:border-gold/40 transition-colors duration-300" />

      {/* Média ou placeholder */}
      <div className="media-frame relative w-full aspect-[16/10] bg-dust/60 overflow-hidden border-b border-gold-dim/20">
        {mediaSrc && isVideo ? (
          <button
            type="button"
            onClick={() => onOpen(creation)}
            className="block w-full h-full cursor-zoom-in text-left"
            aria-label={`Lire la vidéo ${creation.title}`}
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-dust/90 via-leather to-ink p-6 text-center transition-transform duration-500 group-hover:scale-[1.02]">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/45 bg-ink/70 text-gold shadow-[0_10px_30px_rgba(0,0,0,0.28)]" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="font-display text-xl text-cream">{creation.title}</span>
              <span className="font-body text-xs uppercase tracking-widest text-muted">Voir la vidéo</span>
            </div>
          </button>
        ) : mediaSrc ? (
          <button
            type="button"
            onClick={() => onOpen(creation)}
            className="block w-full h-full cursor-zoom-in text-left"
            aria-label={`Agrandir ${creation.title}`}
          >
            <img
              src={mediaSrc}
              alt={creation.title}
              loading="lazy"
              className={mediaClassName}
            />
          </button>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted/40">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
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
    </article>
  )
}

function MediaLightbox({ creation, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!creation) return undefined

    const previouslyFocused = document.activeElement
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, video[controls], [tabindex]:not([tabindex="-1"])',
      )
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.clearTimeout(focusTimer)
      window.removeEventListener('keydown', handleKeyDown)
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus()
      }
    }
  }, [creation, onClose])

  if (!creation) return null

  const mediaSrc = `${import.meta.env.BASE_URL}${creation.image.replace(/^\//, '')}`
  const isVideo = mediaSrc.endsWith('.mp4')

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] bg-ink/95 backdrop-blur-md px-4 py-6 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={creation.title}
      onClick={onClose}
    >
      <div ref={dialogRef} className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fermer l'aperçu"
          className="absolute -top-12 right-0 px-4 py-2 border border-gold/40 bg-leather/90 font-body text-sm text-gold hover:text-cream hover:border-gold transition-all duration-200"
        >
          Fermer
        </button>
        <div className="border border-gold-dim/50 bg-gradient-to-br from-leather/95 via-ink to-dust/80 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          {isVideo ? (
            <video
              src={mediaSrc}
              controls
              autoPlay
              loop
              playsInline
              className="max-h-[78vh] w-full object-contain bg-ink"
            />
          ) : (
            <img
              src={mediaSrc}
              alt={creation.title}
              className="max-h-[78vh] w-full object-contain bg-ink/70"
            />
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function Creations() {
  const [filter, setFilter] = useState('all')
  const [selectedCreation, setSelectedCreation] = useState(null)

  const filtered = filter === 'all'
    ? creations
    : creations.filter((c) => c.category === filter)

  useEffect(() => {
    if (!selectedCreation) return undefined

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedCreation])

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <div className="mb-14 scroll-reveal">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Design & Motion</p>
        <h1 className="font-display text-5xl text-cream mb-4">Créations visuelles</h1>
        <p className="font-body text-muted max-w-lg">
          Logos, bannières et scènes Twitch — chaque création pensée avec une direction artistique
          et une intention claire derrière chaque choix.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10 scroll-reveal">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            aria-pressed={filter === key}
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
        <div className="scroll-reveal text-center py-24 text-muted font-body">
          Aucune création dans cette catégorie pour le moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((creation) => (
            <CreationCard key={creation.id} creation={creation} onOpen={setSelectedCreation} />
          ))}
        </div>
      )}

      <MediaLightbox creation={selectedCreation} onClose={() => setSelectedCreation(null)} />
    </div>
  )
}
