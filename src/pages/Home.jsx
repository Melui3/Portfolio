import { Link } from 'react-router-dom'
import { clientProjects } from '../data/projects'
import { creations, categoryMeta } from '../data/creations'

const featuredCreations = creations.filter((creation) =>
  ['logo-moonrage-1', 'logo-moonrage-2'].includes(creation.id)
)

const services = [
  {
    title: 'Landing page',
    price: '400 à 600 €',
    summary:
      "Une page unique pensée pour présenter une offre, lancer une activité ou transformer une visite en prise de contact.",
    includes: [
      'Un message clair dès les premières secondes',
      'Une structure orientée conversion',
      'Un formulaire ou appel à l’action visible',
    ],
  },
  {
    title: 'Site vitrine',
    price: '700 à 1 000 €',
    summary:
      'Un site complet pour présenter votre activité, vos services, votre histoire et donner confiance avant le premier contact.',
    includes: [
      'Plusieurs pages structurées',
      'Une présentation claire de vos services',
      'Une base propre pour être compris par Google',
    ],
  },
  {
    title: 'Site avec espace membre',
    price: '1 400 à 2 000 €',
    summary:
      'Un site avec connexion pour donner accès à des contenus, documents ou espaces réservés à certains utilisateurs.',
    includes: [
      'Connexion et comptes utilisateurs',
      'Pages ou contenus protégés',
      'Parcours pensé pour les membres',
    ],
  },
  {
    title: 'Réservation / fonctionnalités avancées',
    price: '2 000 à 3 000 €',
    summary:
      'Des fonctionnalités sur mesure pour simplifier une organisation, automatiser une demande ou gérer un parcours plus précis.',
    includes: [
      'Réservation, demande de devis ou workflow dédié',
      'Interfaces adaptées à votre manière de travailler',
      'Moins de tâches répétitives à gérer à la main',
    ],
  },
  {
    title: 'Identité visuelle',
    price: '250 à 500 €',
    summary:
      "Une direction visuelle exploitable pour le web: ambiance, couleurs, typographies et cohérence des supports numériques.",
    includes: [
      'Palette, typographies et principes visuels',
      'Cohérence entre logo, site et supports',
      "Design d’usage, pas illustration sur mesure",
    ],
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
              Visiter le site
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
                className="inline-flex items-center justify-center gap-2 border border-gold bg-gold px-5 py-2.5 font-body text-sm text-ink hover:bg-cream hover:text-ink transition-all duration-200"
              >
                Visiter le site
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            )}
            <Link
              to="/projets"
              className="inline-flex items-center justify-center border border-gold/40 px-5 py-2.5 font-body text-sm text-parchment hover:border-gold hover:text-cream transition-all duration-200"
            >
              Voir le détail
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
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={mediaClassName}
          />
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
      <p className="font-display text-3xl text-gold mb-4">{service.price}</p>
      <p className="font-body text-sm text-parchment/75 leading-relaxed mb-5">{service.summary}</p>

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

// ─── Page Home ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* ── Hero ── */}
      <section className="min-h-[80vh] flex flex-col justify-center py-20 relative overflow-hidden">
        {/* Ornement décoratif fond */}
        <div className="sigil-orbit absolute right-[-3rem] md:right-[-1rem] top-1/2 -translate-y-1/2 w-96 h-96 md:w-[30rem] md:h-[30rem] opacity-20 pointer-events-none">
          <img
            src={`${import.meta.env.BASE_URL}logo-nateos-mark.jpg`}
            alt=""
            className="h-full w-full object-contain mix-blend-screen"
          />
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
      <section className="py-16 scroll-reveal">
        <h2 className="font-display text-3xl text-cream mb-2">Ce que j'ai construit</h2>
        <p className="font-body text-muted mb-10">Des projets réels, pour des clients réels.</p>

        <div className="grid grid-cols-1 gap-6 mb-8">
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
              Les fourchettes servent à cadrer le budget dès le départ. Le devis final dépend du contenu,
              du nombre de pages, des fonctionnalités et du niveau d’accompagnement attendu.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-gold bg-gold px-6 py-3 font-body text-sm text-ink hover:bg-cream hover:text-ink transition-all duration-200"
          >
            Demander un devis
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="scroll-reveal mt-8 border border-gold-dim/25 bg-ink/35 p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="font-body text-xs text-gold tracking-widest uppercase mb-2">Précision importante</p>
            <p className="font-body text-sm text-parchment/75 leading-relaxed">
              Pour l’identité visuelle, je me positionne comme designer web: je définis une direction,
              une cohérence et une expérience visuelle. Je ne propose pas de prestation de graphiste
              illustrateur, donc pas de dessin ou d’illustration sur mesure.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-5 inline-flex shrink-0 items-center justify-center border border-gold/50 px-5 py-2.5 font-body text-sm text-parchment hover:border-gold hover:text-cream transition-all duration-200 md:mt-0"
          >
            Cadrer mon besoin
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
          {[
            { num: '01', title: 'On en parle',     desc: 'Vous me racontez votre projet, vos besoins, votre budget. Pas de jargon de ma part.' },
            { num: '02', title: 'Je propose',       desc: 'Je vous envoie un devis clair avec ce qui est inclus, les délais, et le tarif.' },
            { num: '03', title: 'On construit',     desc: 'Je développe votre site par étapes. Vous validez à chaque grande étape.' },
            { num: '04', title: 'Vous êtes en ligne', desc: 'Je m\'occupe de la mise en ligne. Votre site est prêt, vous êtes autonome.' },
          ].map(({ num, title, desc }) => (
            <div key={num} className="motion-card scroll-reveal relative pl-4 border-l border-gold-dim/30">
              <span className="font-display text-5xl text-gold/10 absolute -top-2 -left-1 select-none">{num}</span>
              <p className="font-display text-lg text-cream mb-2 mt-4">{title}</p>
              <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
            </div>
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
            className="font-body px-10 py-4 bg-gold text-ink hover:bg-gold/90 transition-colors duration-200 tracking-wide text-lg"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </div>
  )
}
