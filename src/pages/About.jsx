import { Link } from 'react-router-dom'

const strengths = [
  'Discuter tranquillement pour comprendre le vrai besoin',
  'Entrer dans votre métier, vos idées et vos contraintes',
  'Construire une interface claire, lisible et agréable',
  'Assurer le support après la mise en ligne',
]

const workingSteps = [
  {
    title: 'Cadrer',
    text: 'On discute simplement de votre activité, de vos idées, de vos clients, de votre budget et de ce que le site doit vraiment provoquer.',
  },
  {
    title: 'Structurer',
    text: 'Je transforme le besoin en parcours simple: quelles pages, quels messages, quels appels à l’action, quelle priorité sur mobile.',
  },
  {
    title: 'Designer',
    text: 'Je pose une direction visuelle cohérente avec votre image: couleurs, rythme, typographies, hiérarchie et ambiance générale.',
  },
  {
    title: 'Développer',
    text: 'Je construis le site proprement, je teste les parcours importants, puis je vous accompagne jusqu’à la mise en ligne et après livraison.',
  },
]

const principles = [
  {
    title: 'Clarté avant décor',
    text: 'Une belle interface ne sert à rien si le visiteur ne comprend pas quoi faire. Je commence par le message et le parcours.',
  },
  {
    title: 'Sur-mesure raisonnable',
    text: 'Je construis autour de votre besoin réel, sans empiler des fonctionnalités qui ne servent pas votre objectif.',
  },
  {
    title: 'Communication simple',
    text: 'Je vous explique les choix importants avec des mots compréhensibles, pas avec une démonstration technique inutile.',
  },
]

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <div className="mb-14 scroll-reveal">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">À propos</p>
        <h1 className="font-display text-5xl text-cream mb-4">Un développeur web avec une vraie attention au design</h1>
        <p className="font-body text-muted max-w-2xl">
          Le développement et le design web sont une passion de longue date. Je crée des sites
          sur-mesure pour les personnes qui veulent une présence en ligne plus claire, plus crédible
          et plus agréable à parcourir, sans se perdre dans le jargon technique.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_18rem]">

        <div className="space-y-12">
          <section className="scroll-reveal space-y-6 font-body text-parchment/80 leading-relaxed">
            <p>
              Mon rôle n’est pas seulement de poser du code sur une page. J’aime comprendre ce que vous faites,
              comment vous travaillez, ce que vos clients doivent ressentir et ce que votre site doit débloquer
              pour vous. Plus je comprends le métier, plus le site devient juste.
            </p>
            <p>
              La relation client, je la vois comme une discussion tranquille: vous me parlez de votre activité,
              de vos idées, de vos envies, de vos blocages, et je vous aide à mettre tout ça en forme. Pas besoin
              d’arriver avec un cahier des charges parfait.
            </p>
            <p>
              J’aime les interfaces élégantes, mais jamais juste décoratives. Un beau site doit aussi être lisible,
              rapide à comprendre, agréable sur mobile et utile pour la personne qui visite.
            </p>
            <p className="font-display text-2xl text-gold leading-snug">
              Un site peut être beau, mais il doit surtout être compréhensible, utile et donner envie de passer à l’action.
            </p>
          </section>

          <section className="scroll-reveal">
            <h2 className="font-display text-3xl text-cream mb-6">Ce que j’apporte</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div key={strength} className="border border-gold-dim/25 bg-leather/25 p-5">
                  <p className="font-body text-sm text-parchment/80 leading-relaxed">{strength}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="scroll-reveal">
            <h2 className="font-display text-3xl text-cream mb-6">Ma manière de travailler</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {workingSteps.map((step, index) => (
                <div key={step.title} className="motion-card border border-gold-dim/25 bg-ink/35 p-5">
                  <p className="font-body text-xs text-gold tracking-widest uppercase mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-xl text-cream mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="scroll-reveal">
            <h2 className="font-display text-3xl text-cream mb-6">Ce que je garde en tête sur chaque projet</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {principles.map((principle) => (
                <div key={principle.title} className="motion-card border border-gold-dim/25 bg-leather/25 p-5">
                  <h3 className="font-display text-xl text-cream mb-2">{principle.title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{principle.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="scroll-reveal border border-gold-dim/25 bg-leather/25 p-6 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="font-body text-xs text-gold tracking-widest uppercase mb-2">Votre projet</p>
              <h2 className="font-display text-2xl text-cream mb-2">Vous n’avez pas besoin d’avoir tout cadré.</h2>
              <p className="font-body text-sm text-muted leading-relaxed">
                Si vous savez où vous voulez aller, je peux vous aider à mettre de l’ordre dans les idées,
                prioriser les pages et transformer ça en devis clair.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-5 inline-flex shrink-0 items-center justify-center rounded-[15px] border border-gold bg-gold px-6 py-3 font-body text-sm text-ink hover:bg-cream transition-all duration-200 md:mt-0"
            >
              Parler de mon site
            </Link>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="motion-card scroll-reveal border border-gold-dim/20 bg-leather/20 p-5">
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Stack</p>
            <ul className="font-body text-sm text-muted space-y-1">
              <li>React + Vite</li>
              <li>TailwindCSS</li>
              <li>Django REST Framework</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="motion-card scroll-reveal border border-gold-dim/20 bg-leather/20 p-5">
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Pour qui</p>
            <ul className="font-body text-sm text-muted space-y-1">
              <li>Indépendants & freelances</li>
              <li>Associations</li>
              <li>Petites entreprises</li>
              <li>Artisans & commerçants</li>
            </ul>
          </div>
          <div className="motion-card scroll-reveal border border-gold-dim/20 bg-leather/20 p-5">
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Positionnement</p>
            <p className="font-body text-sm text-muted leading-relaxed">
              Design web, développement, mise en ligne et accompagnement. Pas une agence lourde, pas un template générique.
            </p>
          </div>
          <div className="motion-card scroll-reveal border border-gold-dim/20 bg-leather/20 p-5">
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Après livraison</p>
            <p className="font-body text-sm text-muted leading-relaxed">
              Je reste disponible pour le support, les ajustements et la maintenance selon le besoin du projet.
            </p>
          </div>
          <div className="motion-card scroll-reveal border border-gold-dim/20 bg-leather/20 p-5">
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Non merci</p>
            <p className="font-body text-sm text-muted leading-relaxed">
              Je ne travaille pas sur WordPress. Je préfère construire des sites sur-mesure, propres et cohérents avec votre besoin.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
