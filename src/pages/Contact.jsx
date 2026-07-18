import { Link } from 'react-router-dom'
import { SITE_BASE_URL, SITE_EMAIL } from '../seo'

const projectTypes = [
  'Landing page',
  'Site vitrine',
  'Espace membre',
  'Réservation / fonctionnalité avancée',
  'Identité visuelle web',
  'Je ne sais pas encore',
]

const budgets = [
  'Moins de 500 €',
  '500 à 1 000 €',
  '1 000 à 2 000 €',
  '2 000 à 3 000 €',
  'À définir ensemble',
]

const contactNotes = [
  'Votre activité et votre public',
  'Ce que le site doit permettre',
  'Les pages ou fonctionnalités imaginées',
  'Une idée de budget ou de délai',
]

export default function Contact() {
  const formSubmitted = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).has('envoye')
    : false
  const redirectUrl = `${SITE_BASE_URL}/contact?envoye=1`

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <div className="mb-14 scroll-reveal">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Contact</p>
        <h1 className="font-display text-5xl text-cream mb-4">Parlons de votre site</h1>
        <p className="font-body text-muted max-w-2xl">
          Décrivez-moi votre besoin, même si tout n’est pas encore clair. Pas besoin d’un cahier des charges:
          je vous réponds sous 48h avec une première lecture du projet, les prochaines étapes et une fourchette réaliste.
        </p>
      </div>

      {formSubmitted && (
        <div className="motion-card scroll-reveal mb-10 border border-gold/40 bg-gold/5 p-6">
          <p className="font-display text-2xl text-cream mb-2">Message envoyé</p>
          <p className="font-body text-sm text-muted">
            Merci, votre demande a bien été transmise. Je reviens vers vous sous 48h.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_18rem]">

        <div>
          <div className="scroll-reveal mb-6 border border-gold-dim/25 bg-leather/25 p-5">
            <p className="font-display text-2xl text-cream mb-2">Vous pouvez venir avec une idée floue.</p>
            <p className="font-body text-sm text-muted leading-relaxed">
              Quelques lignes suffisent pour démarrer. Si votre besoin n’est pas encore précis, je vous aide à
              le transformer en plan clair avant de parler technique.
            </p>
          </div>

          <form
            action={`https://formsubmit.co/${SITE_EMAIL}`}
            method="POST"
            data-clarity-mask="true"
            className="scroll-reveal space-y-5"
          >
            <input type="hidden" name="_subject" value="Nouvelle demande depuis nateos.fr" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={redirectUrl} />
            <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="hidden" />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="font-body text-xs text-muted tracking-widest uppercase block mb-2" htmlFor="name">
                Votre nom *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Jean Dupont"
                className="w-full rounded-[15px] bg-leather/50 border border-dust focus:border-gold/60 outline-none px-4 py-3 font-body text-parchment placeholder-muted/50 transition-colors duration-200"
              />
            </div>
            <div>
              <label className="font-body text-xs text-muted tracking-widest uppercase block mb-2" htmlFor="email">
                Votre email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="jean@exemple.fr"
                className="w-full rounded-[15px] bg-leather/50 border border-dust focus:border-gold/60 outline-none px-4 py-3 font-body text-parchment placeholder-muted/50 transition-colors duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="font-body text-xs text-muted tracking-widest uppercase block mb-2" htmlFor="projectType">
                Type de projet
              </label>
              <select
                id="projectType"
                name="project_type"
                defaultValue=""
                className="w-full rounded-[15px] bg-leather/50 border border-dust focus:border-gold/60 outline-none px-4 py-3 font-body text-parchment transition-colors duration-200"
              >
                <option value="" disabled>Choisir une option</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-body text-xs text-muted tracking-widest uppercase block mb-2" htmlFor="budget">
                Budget estimé
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue=""
                className="w-full rounded-[15px] bg-leather/50 border border-dust focus:border-gold/60 outline-none px-4 py-3 font-body text-parchment transition-colors duration-200"
              >
                <option value="" disabled>Choisir une fourchette</option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="font-body text-xs text-muted tracking-widest uppercase block mb-2" htmlFor="subject">
              Sujet
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Site vitrine pour mon activité"
              className="w-full rounded-[15px] bg-leather/50 border border-dust focus:border-gold/60 outline-none px-4 py-3 font-body text-parchment placeholder-muted/50 transition-colors duration-200"
            />
          </div>

          <div>
            <label className="font-body text-xs text-muted tracking-widest uppercase block mb-2" htmlFor="currentWebsite">
              Site actuel ou inspiration
            </label>
            <input
              id="currentWebsite"
              type="text"
              name="current_website_or_reference"
              placeholder="Votre site actuel, un compte Instagram, ou un exemple que vous aimez"
              className="w-full rounded-[15px] bg-leather/50 border border-dust focus:border-gold/60 outline-none px-4 py-3 font-body text-parchment placeholder-muted/50 transition-colors duration-200"
            />
          </div>

          <div>
            <label className="font-body text-xs text-muted tracking-widest uppercase block mb-2" htmlFor="message">
              Votre message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={7}
              placeholder="Présentez votre activité, ce que le site doit permettre, les pages imaginées, les délais, les exemples que vous aimez..."
              className="w-full rounded-[15px] bg-leather/50 border border-dust focus:border-gold/60 outline-none px-4 py-3 font-body text-parchment placeholder-muted/50 transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="font-body px-8 py-3 bg-gold text-ink hover:bg-cream transition-colors duration-200 tracking-wide rounded-[15px]"
          >
            Envoyer ma demande
          </button>

          <p className="font-body text-xs text-muted">
            * Champs obligatoires. Le formulaire m’envoie directement votre demande par email.
            Les informations servent uniquement à répondre à votre demande et préparer un échange.
            Consultez la{' '}
            <Link to="/politique-confidentialite" className="text-gold hover:text-cream transition-colors duration-200">
              politique de confidentialité
            </Link>
            .
          </p>
          </form>
        </div>

        <div className="space-y-6">
          <div className="motion-card scroll-reveal border border-gold-dim/20 bg-leather/20 p-5">
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Pour commencer</p>
            <ul className="space-y-2">
              {contactNotes.map((note) => (
                <li key={note} className="flex gap-3 font-body text-sm text-muted leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="motion-card scroll-reveal border border-gold-dim/20 bg-leather/20 p-5">
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Réponse</p>
            <p className="font-body text-sm text-muted">Sous 48h, avec une première lecture claire du besoin.</p>
          </div>
          <div className="motion-card scroll-reveal border border-gold-dim/20 bg-leather/20 p-5">
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Direct</p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="font-body text-sm text-parchment hover:text-gold transition-colors duration-200"
            >
              {SITE_EMAIL}
            </a>
          </div>
          <div className="motion-card scroll-reveal border border-gold-dim/20 bg-leather/20 p-5">
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">À prévoir</p>
            <p className="font-body text-sm text-muted">
              Votre activité, votre objectif, vos contenus disponibles, une idée de budget et un délai souhaité.
            </p>
          </div>
          <div className="motion-card scroll-reveal border border-gold-dim/20 bg-leather/20 p-5">
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Cadre</p>
            <p className="font-body text-sm text-muted leading-relaxed mb-3">
              Le projet démarre après échange et devis validé. Les prix affichés sont indicatifs.
            </p>
            <Link
              to="/conditions-prestation"
              className="font-body text-sm text-gold hover:text-cream transition-colors duration-200"
            >
              Lire les conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
