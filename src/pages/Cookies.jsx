import { useState } from 'react'
import { requestAnalyticsConsent } from '../analyticsConsent'

export default function Cookies() {
  const [bannerRequested, setBannerRequested] = useState(false)

  const showConsentBanner = () => {
    requestAnalyticsConsent()
    setBannerRequested(true)
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-14 scroll-reveal">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Préférences</p>
        <h1 className="font-display text-5xl text-cream mb-4">Gestion des cookies</h1>
        <p className="font-body text-muted">
          Le site utilise uniquement des outils utiles au fonctionnement du contact et à la mesure d’audience.
        </p>
      </div>

      <div className="space-y-10 font-body text-parchment/80 leading-relaxed">
        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Cookies nécessaires</h2>
          <p>
            Le site ne dépose pas de cookie publicitaire et ne propose pas de suivi marketing caché.
            Le choix de consentement est gardé dans le navigateur pour éviter de vous redemander la même chose
            à chaque visite.
          </p>
        </section>

        <div className="separator" />

        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Mesure d’audience</h2>
          <p>
            Microsoft Clarity et Google Analytics peuvent être chargés uniquement si vous acceptez le bandeau
            de consentement. Ils servent à comprendre les pages consultées, les clics, le parcours de navigation
            et les éventuels points de friction.
          </p>
          <p className="mt-3">
            Ces informations m’aident à améliorer le site. Les champs du formulaire de contact restent masqués.
          </p>
        </section>

        <div className="separator" />

        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Modifier votre choix</h2>
          <p>
            Vous pouvez réinitialiser votre choix ici. Le bandeau de consentement réapparaît en bas
            de l’écran pour accepter ou refuser la mesure d’audience.
          </p>
          <p className="mt-3">
            Si les outils d’audience avaient déjà été chargés dans l’onglet, un refus peut recharger la page
            pour repartir sans ces scripts.
          </p>
          <button
            type="button"
            onClick={showConsentBanner}
            className="mt-5 rounded-[15px] border border-gold bg-gold px-5 py-2.5 font-body text-sm text-ink transition-colors duration-200 hover:bg-cream"
          >
            Réafficher le bandeau de consentement
          </button>
          {bannerRequested && (
            <p className="mt-3 font-body text-sm text-gold">
              Le bandeau est affiché en bas de l’écran.
            </p>
          )}
        </section>

        <div className="separator" />

        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Cookies tiers</h2>
          <p>
            Lorsque la mesure d’audience est acceptée, Microsoft Clarity et Google Analytics peuvent déposer
            leurs propres cookies ou identifiants techniques afin de produire leurs statistiques.
          </p>
          <p className="mt-3">
            Vous pouvez consulter les informations de{' '}
            <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-cream transition-colors duration-200">
              Microsoft
            </a>{' '}
            et de{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-cream transition-colors duration-200">
              Google
            </a>{' '}
            sur leurs traitements.
          </p>
        </section>
      </div>
    </div>
  )
}
