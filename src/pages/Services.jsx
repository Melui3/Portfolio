import { Link } from 'react-router-dom'
import {
  audienceSegments,
  faqItems,
  projectAssurances,
  quoteDetails,
  serviceBoundaries,
  services,
  workflowSteps,
} from '../data/services'

function OfferCard({ service, index }) {
  return (
    <article className="motion-card scroll-reveal relative overflow-hidden border border-gold-dim/25 bg-leather/30 p-6 hover:border-gold-dim/60 hover:bg-leather/60 transition-all duration-400">
      <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-gold/35" />
      <p className="font-body text-xs text-gold tracking-widest uppercase mb-4">
        Offre {String(index + 1).padStart(2, '0')}
      </p>
      <h2 className="font-display text-3xl text-cream mb-2">{service.title}</h2>
      <p className="font-display text-3xl text-gold mb-3">{service.price}</p>
      <p className="font-body text-sm text-parchment/75 leading-relaxed mb-5">{service.summary}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        <span className="border border-dust px-2 py-0.5 font-body text-xs text-muted">
          Budget habituel: {service.range}
        </span>
        <span className="border border-dust px-2 py-0.5 font-body text-xs text-muted">
          Délai moyen: {service.delay}
        </span>
      </div>

      <p className="font-body text-xs text-gold tracking-widest uppercase mb-3">Idéal pour</p>
      <p className="font-body text-sm text-muted leading-relaxed mb-5">{service.bestFor}</p>

      <p className="font-body text-xs text-gold tracking-widest uppercase mb-3">Ce que ça apporte</p>
      <ul className="space-y-2 mb-5">
        {service.outcomes.map((item) => (
          <li key={item} className="flex gap-3 font-body text-sm text-parchment/75 leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="font-body text-xs text-gold tracking-widest uppercase mb-3">Inclus</p>
      <ul className="space-y-2">
        {service.includes.map((item) => (
          <li key={item} className="flex gap-3 font-body text-sm text-muted leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {service.deliverables.map((item) => (
          <span key={item} className="border border-gold-dim/25 bg-ink/30 px-2 py-0.5 font-body text-xs text-muted">
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}

function BoundaryBlock({ block }) {
  return (
    <div className="scroll-reveal border border-gold-dim/25 bg-ink/35 p-6">
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
  )
}

function FaqItem({ item }) {
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

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <section className="mb-16 scroll-reveal">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Services & tarifs</p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_20rem] md:items-end">
          <div>
            <h1 className="font-display text-5xl text-cream mb-5">
              Des sites web pensés pour être compris, crédibles et utiles.
            </h1>
            <p className="font-body text-muted max-w-2xl">
              Les tarifs ci-dessous donnent un cadre avant de discuter. Le devis final dépend du nombre de pages,
              du contenu disponible, des fonctionnalités et du niveau d’accompagnement attendu.
            </p>
          </div>
          <div className="border border-gold-dim/25 bg-leather/25 p-5">
            <p className="font-display text-2xl text-cream mb-2">Pas besoin d’un cahier des charges parfait.</p>
            <p className="font-body text-sm text-muted leading-relaxed mb-5">
              Expliquez-moi votre activité, ce que vous voulez obtenir et ce qui vous bloque. Je vous aide à cadrer.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-[15px] border border-gold bg-gold px-5 py-2.5 font-body text-sm text-ink hover:bg-cream transition-all duration-200"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="separator">
          <span className="font-body text-xs text-muted tracking-widest uppercase">Pour qui</span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {audienceSegments.map((segment) => (
            <div key={segment.title} className="motion-card scroll-reveal border border-gold-dim/25 bg-ink/35 p-5">
              <h2 className="font-display text-xl text-cream mb-2">{segment.title}</h2>
              <p className="font-body text-sm text-muted leading-relaxed">{segment.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="separator">
          <span className="font-body text-xs text-muted tracking-widest uppercase">Offres</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <OfferCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="separator">
          <span className="font-body text-xs text-muted tracking-widest uppercase">Cadre clair</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {serviceBoundaries.map((block) => (
            <BoundaryBlock key={block.title} block={block} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="separator">
          <span className="font-body text-xs text-muted tracking-widest uppercase">Avant de commencer</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_0.9fr]">
          <div className="scroll-reveal border border-gold-dim/25 bg-leather/25 p-6">
            <p className="font-body text-xs text-gold tracking-widest uppercase mb-4">Ce que le devis précise</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {quoteDetails.map((detail) => (
                <div key={detail} className="border border-dust bg-ink/25 px-3 py-2 font-body text-sm text-parchment/75">
                  {detail}
                </div>
              ))}
            </div>
          </div>
          <div className="scroll-reveal border border-gold-dim/25 bg-ink/35 p-6">
            <p className="font-body text-xs text-gold tracking-widest uppercase mb-4">Cadre de travail</p>
            <p className="font-body text-sm text-muted leading-relaxed">
              Les prix affichés sont indicatifs. Aucun paiement ne se fait directement sur le site:
              le projet démarre uniquement après échange, devis accepté et modalités validées ensemble.
            </p>
            <Link
              to="/conditions-prestation"
              className="mt-5 inline-flex items-center justify-center rounded-[15px] border border-gold/50 px-5 py-2.5 font-body text-sm text-parchment hover:border-gold hover:text-cream transition-all duration-200"
            >
              Lire les conditions de prestation
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="separator">
          <span className="font-body text-xs text-muted tracking-widest uppercase">Méthode</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {workflowSteps.map((step) => (
            <div key={step.num} className="motion-card scroll-reveal relative border-l border-gold-dim/30 pl-4">
              <span className="absolute -left-1 -top-2 select-none font-display text-5xl text-gold/10">{step.num}</span>
              <h2 className="font-display text-lg text-cream mb-2 mt-4">{step.title}</h2>
              <p className="font-body text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="separator">
          <span className="font-body text-xs text-muted tracking-widest uppercase">Garanties de méthode</span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {projectAssurances.map((assurance) => (
            <div key={assurance.title} className="motion-card scroll-reveal border border-gold-dim/25 bg-ink/35 p-5">
              <h2 className="font-display text-xl text-cream mb-2">{assurance.title}</h2>
              <p className="font-body text-sm text-muted leading-relaxed">{assurance.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="separator">
          <span className="font-body text-xs text-muted tracking-widest uppercase">Questions fréquentes</span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
      </section>

      <section className="scroll-reveal border border-gold/30 bg-gold/5 p-8 text-center">
        <p className="font-body text-gold tracking-widest uppercase text-xs mb-4">Prochaine étape</p>
        <h2 className="font-display text-4xl text-cream mb-4">On regarde ce dont votre site a vraiment besoin ?</h2>
        <p className="font-body text-muted mb-8 max-w-2xl mx-auto">
          Décrivez-moi votre activité et votre objectif. Je vous réponds avec une première lecture claire, sans engagement.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-[15px] bg-gold px-8 py-3 font-body text-ink hover:bg-cream transition-colors duration-200"
        >
          Parler de mon site
        </Link>
      </section>
    </div>
  )
}
