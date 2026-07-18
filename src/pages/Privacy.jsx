import { Link } from 'react-router-dom'
import { SITE_EMAIL } from '../seo'

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-14 scroll-reveal">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Données personnelles</p>
        <h1 className="font-display text-5xl text-cream mb-4">Politique de confidentialité</h1>
        <p className="font-body text-muted">
          Cette page explique simplement quelles données peuvent être traitées sur ce site et pourquoi.
        </p>
      </div>

      <div className="space-y-10 font-body text-parchment/80 leading-relaxed">
        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Responsable du site</h2>
          <p>Nathaniel Dujardin, développeur web freelance.</p>
          <p>
            Contact:{' '}
            <a href={`mailto:${SITE_EMAIL}`} className="text-gold hover:text-cream transition-colors duration-200">
              {SITE_EMAIL}
            </a>
          </p>
        </section>

        <div className="separator" />

        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Données envoyées via le formulaire</h2>
          <p>
            Le formulaire de contact peut transmettre votre nom, votre adresse email, le type de projet,
            le budget indiqué, votre message et les informations que vous choisissez d’ajouter.
          </p>
          <p className="mt-3">
            Ces données servent uniquement à répondre à votre demande, préparer un échange ou établir
            une proposition adaptée. Elles ne sont pas vendues ni utilisées pour de la publicité.
          </p>
          <p className="mt-3">
            Les champs marqués d’un astérisque sont nécessaires pour pouvoir vous répondre. Les autres
            informations sont facultatives mais peuvent aider à mieux comprendre votre besoin.
          </p>
        </section>

        <div className="separator" />

        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Base légale</h2>
          <p>
            Le traitement des demandes envoyées via le formulaire repose sur les échanges précontractuels
            ou l’intérêt légitime à répondre à une prise de contact volontaire.
          </p>
          <p className="mt-3">
            La mesure d’audience repose sur votre consentement lorsque vous acceptez le bandeau prévu à cet effet.
          </p>
        </section>

        <div className="separator" />

        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Services utilisés</h2>
          <ul className="space-y-3">
            <li>
              <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-cream transition-colors duration-200">
                FormSubmit
              </a>{' '}
              transmet les messages du formulaire vers mon adresse email.
            </li>
            <li>GitHub Pages héberge le site.</li>
            <li>
              <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-cream transition-colors duration-200">
                Microsoft Clarity
              </a>{' '}
              et{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-cream transition-colors duration-200">
                Google Analytics
              </a>{' '}
              peuvent mesurer l’audience après acceptation.
            </li>
          </ul>
          <p className="mt-3">
            Les champs du formulaire sont masqués pour éviter que les messages saisis apparaissent dans
            les enregistrements d’audience.
          </p>
        </section>

        <div className="separator" />

        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Destinataires</h2>
          <p>
            Les messages sont destinés uniquement à Nathaniel Dujardin. Ils peuvent transiter par les services
            techniques nécessaires au fonctionnement du site et de l’email, notamment FormSubmit et l’hébergeur.
          </p>
        </section>

        <div className="separator" />

        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Durée de conservation</h2>
          <p>
            Les messages de contact sont conservés le temps nécessaire au traitement de votre demande
            et au suivi éventuel de nos échanges. Si un projet est lancé, certaines informations peuvent
            être conservées plus longtemps pour le suivi commercial, la facturation ou la preuve de la prestation.
          </p>
        </section>

        <div className="separator" />

        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Vos droits</h2>
          <p>
            Vous pouvez demander l’accès, la correction ou la suppression des informations que vous avez
            envoyées via le formulaire. Pour cela, contactez-moi par email.
          </p>
          <p className="mt-3">
            Pour la mesure d’audience, vous pouvez aussi modifier votre choix depuis la page{' '}
            <Link to="/cookies" className="text-gold hover:text-cream transition-colors duration-200">
              Gestion des cookies
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
