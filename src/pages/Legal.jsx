import { Link } from 'react-router-dom'
import { SITE_EMAIL } from '../seo'

export default function Legal() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <div className="mb-14">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Informations légales</p>
        <h1 className="font-display text-5xl text-cream mb-4">Mentions légales</h1>
      </div>

      <div className="space-y-10 font-body text-parchment/80 leading-relaxed">

        <section>
          <h2 className="font-display text-xl text-cream mb-3">Éditeur du site</h2>
          <p>Nathaniel Dujardin</p>
          <p>Développeur web freelance — activité en cours de création</p>
          <p>Directeur de la publication: Nathaniel Dujardin</p>
          <p>France</p>
          <p className="mt-3 text-muted text-sm">
            Les informations d’immatriculation seront ajoutées dès finalisation du statut professionnel.
          </p>
          <p>
            <a href={`mailto:${SITE_EMAIL}`} className="text-gold hover:text-cream transition-colors duration-200">
              {SITE_EMAIL}
            </a>
          </p>
        </section>

        <div className="separator" />

        <section>
          <h2 className="font-display text-xl text-cream mb-3">Hébergement</h2>
          <p>GitHub Pages</p>
          <p className="text-muted text-sm">GitHub, Inc. — 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis</p>
          <p className="text-muted text-sm">
            <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-parchment transition-colors duration-200">
              pages.github.com
            </a>
          </p>
        </section>

        <div className="separator" />

        <section>
          <h2 className="font-display text-xl text-cream mb-3">Données personnelles</h2>
          <p>
            Les informations envoyées via le formulaire de contact servent uniquement à répondre à votre demande.
            Le formulaire est transmis par FormSubmit, un service externe qui redirige le message vers mon adresse email.
            Vous pouvez aussi me contacter directement par email si vous préférez éviter le formulaire.
          </p>
          <p className="mt-3">
            Microsoft Clarity et Google Analytics peuvent être utilisés pour mesurer l'audience, comprendre
            les clics, identifier les pages consultées et améliorer l'expérience du site. Ils ne sont chargés
            qu'après acceptation depuis le bandeau de consentement.
            Les champs du formulaire de contact sont masqués pour éviter l'enregistrement des messages saisis.
          </p>
        </section>

        <div className="separator" />

        <section>
          <h2 className="font-display text-xl text-cream mb-3">Confidentialité et cookies</h2>
          <p>
            Les informations détaillées sur le formulaire, les données personnelles et la mesure
            d’audience sont disponibles sur les pages dédiées.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link to="/conditions-prestation" className="text-gold hover:text-cream transition-colors duration-200">
              Conditions de prestation
            </Link>
            <Link to="/politique-confidentialite" className="text-gold hover:text-cream transition-colors duration-200">
              Politique de confidentialité
            </Link>
            <Link to="/cookies" className="text-gold hover:text-cream transition-colors duration-200">
              Gestion des cookies
            </Link>
          </div>
        </section>

        <div className="separator" />

        <section>
          <h2 className="font-display text-xl text-cream mb-3">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, visuels, code) est la propriété exclusive de
            Nathaniel Dujardin, sauf mention contraire. Toute reproduction, même partielle, est
            interdite sans autorisation préalable.
          </p>
        </section>

      </div>
    </div>
  )
}
