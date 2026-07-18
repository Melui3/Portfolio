import { Link } from 'react-router-dom'
import { clientProjects } from '../data/projects'
import { creations, categoryMeta } from '../data/creations'
import {
  audienceSegments,
  faqItems,
  projectAssurances,
  serviceBoundaries as serviceScope,
  services as serviceOffers,
  workflowSteps,
} from '../data/services'

const featuredCreations = creations.filter((creation) =>
  ['logo-nate-os', 'logo-moonrage-2'].includes(creation.id)
)

const trustSignals = [
  {
    title: 'Devis clair',
    text: 'Budget, délais et livrables cadrés avant de commencer.',
  },
  {
    title: 'Mise en ligne incluse',
    text: 'Le site ne reste pas coincé sur un dossier: je vous aide à le publier.',
  },
  {
    title: 'Responsive',
    text: 'Un rendu propre sur mobile, tablette et ordinateur.',
  },
  {
    title: 'SEO de base',
    text: 'Structure, titres, métas et indexation pensés dès le départ.',
  },
]

// ─── Composant carte projet ────────────────────────────────────────────────
function ProjectCard({ project }) {
  const mediaSrc = project.image
    ? `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`
    : null
  const mediaClassName = project.imageFit === 'contain'
    ? 'w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.025]'
    : 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]'

  return (
    <article className="motion-card scroll-reveal group relative overflow-hidden border border-gold-dim/30 bg-leather/40 hover:border-gold/60 hover:bg-leather/70 transition-all duration-400">
      {/* Coin décoratif */}
      <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/40 group-hover:border-gold transition-colors duration-300" />
      <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/40 group-hover:border-gold transition-colors duration-300" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
        {mediaSrc && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="media-frame relative block min-h-[260px] overflow-hidden border-b border-gold-dim/20 bg-dust/60 lg:border-b-0 lg:border-r"
            aria-label={`Visiter ${project.title}`}
          >
            <img
              src={mediaSrc}
              alt={`Aperçu du projet ${project.title}`}
              loading="lazy"
              className={mediaClassName}
            />
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-[15px] bg-gold px-4 py-2 font-body text-sm text-ink shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:translate-x-0.5">
              Voir le site en ligne
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </span>
          </a>
        )}

        <div className="p-6">
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

          <div className="flex flex-wrap gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[15px] border border-gold bg-gold px-5 py-2.5 font-body text-sm text-ink hover:bg-cream hover:text-ink transition-all duration-200"
              >
                Voir le site en ligne
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            )}
            <Link
              to="/projets"
              className="inline-flex items-center justify-center rounded-[15px] border border-gold/40 px-5 py-2.5 font-body text-sm text-parchment hover:border-gold hover:text-cream transition-all duration-200"
            >
              Lire la démarche
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

function CreationPreviewCard({ creation }) {
  const meta = categoryMeta[creation.category]
  const mediaSrc = creation.image
    ? `${import.meta.env.BASE_URL}${creation.image.replace(/^\//, '')}`
    : null
  const isVideo = mediaSrc?.endsWith('.mp4')
  const mediaClassName = creation.fit === 'contain'
    ? 'w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]'
    : 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'

  return (
    <Link
      to="/creations"
      className="motion-card scroll-reveal group relative overflow-hidden border border-gold-dim/25 bg-leather/30 hover:bg-leather/60 hover:border-gold-dim/60 transition-all duration-400"
    >
      <div className="media-frame relative aspect-[16/10] overflow-hidden border-b border-gold-dim/20 bg-dust/60">
        {mediaSrc && isVideo ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-dust/90 via-leather to-ink p-6 text-center transition-transform duration-500 group-hover:scale-[1.02]">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/45 bg-ink/70 text-gold shadow-[0_10px_30px_rgba(0,0,0,0.28)]" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="font-display text-xl text-cream">{creation.title}</span>
            <span className="font-body text-xs uppercase tracking-widest text-muted">Voir dans créations</span>
          </div>
        ) : mediaSrc ? (
          <img
            src={mediaSrc}
            alt={creation.title}
            loading="lazy"
            className={mediaClassName}
          />
        ) : (
          <div className="flex h-full items-center justify-center font-body text-sm text-muted">Visuel à venir</div>
        )}
        <span className="absolute top-3 left-3 font-body text-xs border px-2 py-0.5 text-gold border-gold/40 bg-ink/80 backdrop-blur-sm">
          {meta.label}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl text-cream mb-1">{creation.title}</h3>
        <p className="font-body text-sm text-gold/70 italic mb-3">{creation.context}</p>
        <p className="font-body text-sm text-parchment/70 leading-relaxed line-clamp-4">
          {creation.reflexion}
        </p>
      </div>
    </Link>
  )
}

function ServiceCard({ service, index }) {
  return (
    <article
      className="motion-card scroll-reveal relative overflow-hidden border border-gold-dim/25 bg-leather/30 p-6 hover:bg-leather/60 hover:border-gold-dim/60 transition-all duration-400"
      style={{ '--reveal-delay': `${index * 70}ms` }}
    >
      <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/30" />
      <p className="font-body text-xs text-gold tracking-widest uppercase mb-4">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="font-display text-2xl text-cream mb-2">{service.title}</h3>
      <p className="font-display text-3xl text-gold mb-3">{service.price}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        <span className="border border-dust px-2 py-0.5 font-body text-xs text-muted">
          Budget habituel: {service.range}
        </span>
        <span className="border border-dust px-2 py-0.5 font-body text-xs text-muted">
          Délai moyen: {service.delay}
        </span>
      </div>
      <p className="font-body text-sm text-parchment/75 leading-relaxed mb-5">{service.summary}</p>

      {service.bestFor && (
        <>
          <p className="font-body text-xs text-gold tracking-widest uppercase mb-2">Idéal pour</p>
          <p className="font-body text-sm text-muted leading-relaxed mb-5">{service.bestFor}</p>
        </>
      )}

      <p className="font-body text-xs text-gold tracking-widest uppercase mb-3">Ce qui est inclus</p>
      <ul className="space-y-3">
        {service.includes.map((item) => (
          <li key={item} className="flex gap-3 font-body text-sm text-muted leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function FaqPreview({ item }) {
  return (
    <details className="scroll-reveal group border border-gold-dim/20 bg-leather/20 p-5">
      <summary className="cursor-pointer list-none font-display text-xl text-cream">
        <span className="flex items-center justify-between gap-4">
          {item.question}
          <span className="font-body text-gold transition-transform duration-200 group-open:rotate-45">+</span>
        </span>
      </summary>
      <p className="mt-3 font-body text-sm text-muted leading-relaxed">{item.answer}</p>
    </details>
  )
}

// ─── Page Home ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* ── Hero ── */}
      <section className="min-h-[80vh] flex flex-col justify-center py-20 relative overflow-hidden">
        {/* Ornement décoratif fond */}
        <div className="sigil-orbit absolute right-[-3rem] md:right-[-1rem] top-1/2 -translate-y-1/2 w-96 h-96 md:w-[30rem] md:h-[30rem] opacity-20 pointer-events-none">
          <img
            src={`${import.meta.env.BASE_URL}logo-nateos-mark.png`}
            alt=""
            className="h-full w-full object-contain mix-blend-screen"
          />
        </div>

        <div className="max-w-3xl fade-up">
          <p className="font-body text-gold tracking-[0.3em] uppercase text-sm mb-6 fade-up fade-up-delay-1">
            Nate OS Enterprise
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-cream mb-6 leading-tight fade-up fade-up-delay-2">
            Un site web clair, premium et prêt à{' '}
            <em className="text-gold not-italic">faire passer à l’action.</em>
          </h1>
          <p className="font-body text-lg text-parchment/75 max-w-xl mb-10 fade-up fade-up-delay-3">
            Je conçois des sites vitrines, landing pages et interfaces sur-mesure pour les indépendants,
            artisans, associations et petites entreprises qui veulent inspirer confiance, être compris vite
            et recevoir plus facilement des demandes.
          </p>
          <div className="flex flex-wrap gap-4 fade-up fade-up-delay-4">
            <Link
              to="/contact"
              className="font-body px-8 py-3 bg-gold text-ink hover:bg-gold/90 transition-colors duration-200 tracking-wide rounded-[15px]"
            >
              Demander un devis gratuit
            </Link>
            <Link
              to="/services"
              className="font-body px-8 py-3 border border-gold/50 text-parchment hover:border-gold hover:text-cream transition-all duration-200 tracking-wide rounded-[15px]"
            >
              Voir les services
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="border border-gold-dim/25 bg-ink/35 p-4">
                <p className="font-display text-base text-cream mb-1">{signal.title}</p>
                <p className="font-body text-xs leading-relaxed text-muted">{signal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pour qui ─── */}
      <section className="pb-16 scroll-reveal">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {audienceSegments.map((segment) => (
            <div key={segment.title} className="motion-card border border-gold-dim/25 bg-ink/35 p-5">
              <h2 className="font-display text-xl text-cream mb-2">{segment.title}</h2>
              <p className="font-body text-sm text-muted leading-relaxed">{segment.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16 scroll-reveal">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {projectAssurances.map((assurance) => (
            <div key={assurance.title} className="motion-card border border-gold-dim/25 bg-leather/25 p-5">
              <h2 className="font-display text-xl text-cream mb-2">{assurance.title}</h2>
              <p className="font-body text-sm text-muted leading-relaxed">{assurance.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Séparateur */}
      <div className="separator">
        <span className="font-body text-xs text-muted tracking-widest uppercase">Réalisations</span>
      </div>

      {/* ── Projets clients ── */}
      <section className="py-16 scroll-reveal">
        <h2 className="font-display text-3xl text-cream mb-2">Un vrai lancement client</h2>
        <p className="font-body text-muted mb-10">
          Honey Group partait de zéro: le site devait poser une image crédible dès le lancement de l’entreprise.
        </p>

        <div className="grid grid-cols-1 gap-6 mb-8">
          {clientProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Link
          to="/projets"
          className="font-body text-sm text-gold hover:text-cream transition-colors duration-200"
        >
          Voir le projet client réel et les concepts →
        </Link>
      </section>

      {/* Séparateur */}
      <div className="separator">
        <span className="font-body text-xs text-muted tracking-widest uppercase">Services & tarifs</span>
      </div>

      {/* ── Services & tarifs ── */}
      <section id="services" className="py-16 scroll-reveal">
        <div className="flex flex-col gap-4 mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-3">Tarifs indicatifs</p>
            <h2 className="font-display text-3xl text-cream mb-2">Services web & direction visuelle</h2>
            <p className="font-body text-muted max-w-2xl">
              Les fourchettes donnent un repère avant de discuter. Le devis final dépend du contenu,
              du nombre de pages, des fonctionnalités et de l’accompagnement nécessaire.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-gold/50 px-6 py-3 font-body text-sm text-parchment hover:border-gold hover:text-cream transition-all duration-200 rounded-[15px]"
            >
              Voir toutes les offres
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-gold bg-gold px-6 py-3 font-body text-sm text-ink hover:bg-cream hover:text-ink transition-all duration-200 rounded-[15px]"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {serviceOffers.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="scroll-reveal mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {serviceScope.map((block) => (
            <div key={block.title} className="border border-gold-dim/25 bg-ink/35 p-6">
              <p className="font-body text-xs text-gold tracking-widest uppercase mb-4">{block.title}</p>
              <ul className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-sm text-parchment/75 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="scroll-reveal mt-8 border border-gold-dim/25 bg-leather/25 p-6 md:flex md:items-center md:justify-between md:gap-8">
          <p className="font-body text-sm text-parchment/75 leading-relaxed">
            Pour l’identité visuelle, je me positionne comme designer web: je définis une direction,
            une cohérence et une expérience visuelle exploitable sur votre site. Je ne remplace pas
            un illustrateur ou un graphiste spécialisé en logo complexe.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex shrink-0 items-center justify-center border border-gold/50 px-5 py-2.5 font-body text-sm text-parchment hover:border-gold hover:text-cream transition-all duration-200 rounded-[15px] md:mt-0"
          >
            Parler de mon site
          </Link>
        </div>
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
          {workflowSteps.map(({ num, title, desc }) => (
            <div key={num} className="motion-card scroll-reveal relative pl-4 border-l border-gold-dim/30">
              <span className="font-display text-5xl text-gold/10 absolute -top-2 -left-1 select-none">{num}</span>
              <p className="font-display text-lg text-cream mb-2 mt-4">{title}</p>
              <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Séparateur */}
      <div className="separator">
        <span className="font-body text-xs text-muted tracking-widest uppercase">FAQ</span>
      </div>

      {/* ─── FAQ ─── */}
      <section className="py-16">
        <div className="flex flex-col gap-3 mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl text-cream mb-2">Les questions qui bloquent souvent</h2>
            <p className="font-body text-muted max-w-2xl">
              Le but, c’est que vous sachiez à quoi vous attendre avant même d’envoyer un message.
            </p>
          </div>
          <Link
            to="/services"
            className="font-body text-sm text-gold hover:text-cream transition-colors duration-200"
          >
            Lire tous les détails →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqItems.slice(0, 4).map((item) => (
            <FaqPreview key={item.question} item={item} />
          ))}
        </div>
      </section>

      {/* Séparateur */}
      <div className="separator">
        <span className="font-body text-xs text-muted tracking-widest uppercase">Créations</span>
      </div>

      {/* ── Créations visuelles ── */}
      <section className="py-16 scroll-reveal">
        <div className="flex flex-col gap-3 mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl text-cream mb-2">Créations visuelles</h2>
            <p className="font-body text-muted">Quelques identités et visuels pensés pour poser une ambiance dès le premier regard.</p>
          </div>
          <Link
            to="/creations"
            className="font-body text-sm text-gold hover:text-cream transition-colors duration-200"
          >
            Voir les créations →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCreations.map((creation) => (
            <CreationPreviewCard key={creation.id} creation={creation} />
          ))}
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-20 text-center scroll-reveal">
        <div className="max-w-xl mx-auto">
          <p className="font-body text-gold tracking-widest uppercase text-xs mb-4">Prêt à commencer ?</p>
          <h2 className="font-display text-4xl text-cream mb-4">Un projet en tête ?</h2>
          <p className="font-body text-muted mb-8">Je réponds à tous les messages sous 48h.</p>
          <Link
            to="/contact"
            className="font-body px-10 py-4 bg-gold text-ink hover:bg-gold/90 transition-colors duration-200 tracking-wide text-lg rounded-[15px]"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  )
}
