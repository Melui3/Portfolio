import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="journey-section journey-container journey-final">
      <p className="journey-eyebrow">Erreur 404</p>
      <h1 className="font-display text-4xl mb-6">Ce chemin ne mène plus nulle part.</h1>
      <p>La page a peut-être changé d’adresse, ou le lien est incomplet.</p>
      <Link to="/" className="journey-button">Retrouver l’accueil <ArrowRight size={18} aria-hidden="true" /></Link>
      <p><Link to="/projets" className="journey-link">Explorer les projets</Link></p>
    </section>
  )
}
