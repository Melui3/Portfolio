import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from 'lucide-react'
import SignatureHero from '../components/SignatureHero'
import ProjectPreview from '../components/ProjectPreview'
import '../styles/projects.css'
import { projects } from '../data/projects'
import { creations } from '../data/creations'
import { contactUrlForService, faqItems, services, workflowSteps } from '../data/services'
import '../styles/clientJourney.css'

const featured = projects.find((project) => project.id === 'les-pattes-heureuses')
const examples = [
  { id: 'prospect', label: 'Outil personnel · Démo', text: 'Centraliser les recherches, les contacts et leur suivi.', cta: 'Essayer la démo' },
  { id: 'f1-manager-2026', label: 'Application & jeu · Projet passion', text: 'Choisir son écurie, gérer sa saison et prendre ses décisions de course.', cta: 'Jouer à F1 Manager' },
  { id: 'sunstrider-agency', label: 'Concept passion', text: 'Un parcours éditorial immersif dans les archives de Quel’Thalas.', cta: 'Explorer les archives' },
].map((example) => ({ ...projects.find((project) => project.id === example.id), ...example }))
const offers = [
  { id: 'landing-page', heading: 'Lancer votre offre' },
  { id: 'site-vitrine', heading: 'Présenter votre activité' },
  { id: 'sur-mesure', heading: 'Simplifier votre quotidien' },
].map((offer) => ({ ...services.find((service) => service.id === offer.id), ...offer }))
const selectedCreations = creations.filter((creation) => ['logo-nate-os', 'logo-moonrage-2'].includes(creation.id))
const imageUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

function Example({ project }) {
  return (
    <article className="journey-example motion-card scroll-reveal">
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="media-frame" aria-label={`${project.cta} : ${project.title}`}>
        <ProjectPreview project={project} />
      </a>
      <div className="journey-example-copy">
        <p className="journey-eyebrow">{project.label}</p>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="journey-link">{project.cta} <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </article>
  )
}

export default function Home() {
  return (
    <>
      <SignatureHero />
      <div className="journey-promises" aria-label="Les engagements Nate Os">
        <div className="journey-container">
          {['Devis gratuit, avant de vous engager', 'Un interlocuteur du début à la livraison', 'Mise en ligne accompagnée'].map((text) => <p key={text}><Check size={16} aria-hidden="true" />{text}</p>)}
        </div>
      </div>

      <section id="realisations" className="journey-section journey-container">
        <div className="journey-section-heading scroll-reveal">
          <div><p className="journey-eyebrow">Du design à l’usage</p><h2>Une présence qui inspire confiance.</h2></div>
          <Link to="/projets" className="journey-link">Toutes les réalisations <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <article className="journey-client journey-showcase scroll-reveal">
          <a href={featured.url} target="_blank" rel="noopener noreferrer" className="journey-showcase-art" aria-label="Explorer Les Pattes Heureuses — nouvel onglet">
            <span className="journey-eyebrow">À la une · Les Pattes Heureuses</span>
            <ProjectPreview project={featured} />
            <span className="journey-showcase-caption">Un accueil rassurant. Un parcours clair. <ArrowUpRight size={20} aria-hidden="true" /></span>
          </a>
          <div className="journey-client-copy">
            <p className="journey-eyebrow">Site vitrine · Concept fictif</p>
            <h3>Les Pattes Heureuses</h3>
            <p className="journey-client-intro">La confiance commence avant la première visite.</p>
            <p className="journey-showcase-description">Un cabinet vétérinaire fictif dont le site accompagne les propriétaires : découvrir l’équipe, comprendre les soins et préparer leur visite.</p>
            <dl>
              <div><dt>Une identité rassurante</dt><dd>Vert profond, ivoire et photographies lumineuses donnent le ton.</dd></div>
              <div><dt>Des repères utiles</dt><dd>Soins, tarifs, horaires et préparation du rendez-vous sont faciles à retrouver.</dd></div>
            </dl>
            <div className="journey-actions">
              <a href={featured.url} target="_blank" rel="noopener noreferrer" className="journey-button">Explorer le site <ArrowUpRight size={17} aria-hidden="true" /></a>
              <Link to="/projets?projet=les-pattes-heureuses" className="journey-link">La démarche <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </article>
        <div className="journey-examples-heading"><h3>D’autres besoins, d’autres univers.</h3><p>Des outils et des concepts à essayer, chacun avec sa propre identité.</p></div>
        <div className="journey-examples">{examples.map((project) => <Example key={project.id} project={project} />)}</div>
      </section>

      <section className="journey-container journey-creative">
        <div><p className="journey-eyebrow">Créations visuelles</p><h2>Le sens du détail.</h2><Link to="/creations" className="journey-link">Voir les créations <ArrowRight size={17} aria-hidden="true" /></Link></div>
        <div className="journey-creation-list">{selectedCreations.map((creation) => <Link to="/creations" key={creation.id}><img src={imageUrl(creation.image)} alt="" loading="lazy" width="96" height="96" /><span>{creation.id === 'logo-moonrage-2' ? 'Moonrage — Identité Twitch' : creation.title}</span><ArrowUpRight size={16} aria-hidden="true" /></Link>)}</div>
      </section>

      <section id="services" className="journey-section journey-offers-band">
        <div className="journey-container">
          <div className="journey-section-heading scroll-reveal">
            <div><p className="journey-eyebrow">Services & tarifs</p><h2>De quoi avez-vous besoin ?</h2><p>Un premier repère de budget. Le périmètre et le prix sont confirmés dans votre devis.</p></div>
            <Link to="/services" className="journey-link">Détail des prestations <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="journey-offers">
            {offers.map((offer) => <article key={offer.id} className="journey-offer scroll-reveal">
              <p className="journey-eyebrow">{offer.title}</p><h3>{offer.heading}</h3>
              <p className="journey-price">{offer.price}</p><p className="journey-delay">Délai indicatif : {offer.delay}</p>
              <p>{offer.summary}</p>
              <Link to={contactUrlForService(offer)} className="journey-button journey-button-outline">{offer.contactLabel}<ArrowUpRight size={16} aria-hidden="true" /></Link>
            </article>)}
          </div>
          <p className="journey-other-offers">Besoin d’un <Link to={contactUrlForService(services.find((service) => service.id === 'espace-membre'))}>espace membre</Link> ou d’une <Link to={contactUrlForService(services.find((service) => service.id === 'identite-visuelle'))}>direction visuelle pour votre site</Link> ? On en parle aussi.</p>
        </div>
      </section>

      <section className="journey-section journey-container journey-person">
        <div className="scroll-reveal">
          <p className="journey-eyebrow">Derrière Nate Os</p><h2>Moi, c’est Nathaniel.</h2>
          <p>Designer et développeur web, je suis votre interlocuteur du premier échange à la livraison. J’aime commencer par une discussion tranquille : votre métier, vos clients, ce que vous aimeriez rendre plus simple.</p>
          <Link to="/apropos" className="journey-link">Ma façon de travailler <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <ol className="journey-workflow">
          {workflowSteps.map((step) => <li key={step.num} className="scroll-reveal"><span aria-hidden="true">{step.num}</span><div><h3>{step.title}</h3><p>{step.desc}</p></div></li>)}
        </ol>
      </section>

      <section className="journey-section journey-container journey-faq">
        <div className="scroll-reveal"><p className="journey-eyebrow">Avant de vous lancer</p><h2>Des réponses, pas des surprises.</h2><Link to="/services#apres-livraison" className="journey-link">Et après la mise en ligne ? <ArrowRight size={17} aria-hidden="true" /></Link></div>
        <div>{faqItems.filter((item) => ['Est-ce que je serai propriétaire du site ?', 'Est-ce que tu peux m’aider si je n’ai pas tous les textes ?', 'Comment se passe le paiement ?'].includes(item.question)).map((item) => <details key={item.question}><summary>{item.question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="journey-section journey-container journey-final">
        <p className="journey-eyebrow">Votre projet commence par une conversation</p><h2>Racontez-moi votre idée.</h2><p>Même si elle n’est pas encore tout à fait claire.</p>
        <Link to="/contact" className="journey-button">Parlons de votre projet <ArrowUpRight size={18} aria-hidden="true" /></Link><p className="journey-final-note">Réponse sous 48 h · Devis gratuit · Sans engagement</p>
      </section>
    </>
  )
}
