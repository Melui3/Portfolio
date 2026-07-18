import { Link } from 'react-router-dom'
import { SITE_EMAIL } from '../seo'

const sections = [
  {
    title: 'Objet',
    body:
      'Ces conditions expliquent le cadre général des prestations proposées: création de site web, landing page, site vitrine, interface sur mesure, accompagnement à la mise en ligne et direction visuelle web.',
  },
  {
    title: 'Devis et démarrage',
    body:
      'Chaque projet commence par un échange pour comprendre le besoin. Le devis précise le périmètre, les pages ou fonctionnalités prévues, les livrables, le délai estimé, le tarif et les modalités de paiement. Le projet démarre après validation du devis.',
  },
  {
    title: 'Tarifs',
    body:
      'Les tarifs affichés sur le site sont indicatifs. Le site ne permet pas d’acheter directement une prestation. Le prix final dépend du contenu, du nombre de pages, des fonctionnalités, des délais et du niveau d’accompagnement attendu.',
  },
  {
    title: 'Paiement',
    body:
      'Les modalités de paiement sont précisées dans le devis. Sauf mention différente, un acompte peut être demandé pour réserver le créneau de production et lancer le projet. Le solde est réglé selon les étapes prévues ou à la livraison.',
  },
  {
    title: 'Contenus fournis par le client',
    body:
      'Le client fournit les textes, images, accès, informations métier et éléments nécessaires au projet, sauf accompagnement spécifique prévu au devis. Les contenus transmis doivent pouvoir être utilisés légalement.',
  },
  {
    title: 'Modifications',
    body:
      'Les ajustements prévus dans le périmètre du devis sont inclus. Une demande qui change fortement la structure, ajoute une fonctionnalité ou augmente le volume de travail peut faire l’objet d’un devis complémentaire avant réalisation.',
  },
  {
    title: 'Délais',
    body:
      'Les délais sont estimés selon le périmètre du projet et la disponibilité des contenus. Un retard de validation, de retour ou de transmission d’éléments peut décaler la livraison.',
  },
  {
    title: 'Livraison et mise en ligne',
    body:
      'La prestation inclut les livrables prévus au devis et l’accompagnement à la mise en ligne lorsque celui-ci est prévu. Des vérifications finales sont réalisées avant publication.',
  },
  {
    title: 'Propriété et utilisation',
    body:
      'Les éléments réalisés pour le projet sont remis au client selon les conditions du devis, après paiement des sommes dues. Les outils, méthodes, composants génériques et savoir-faire préexistants restent réutilisables.',
  },
  {
    title: 'Support après livraison',
    body:
      'Un accompagnement raisonnable après mise en ligne peut être prévu pour corriger des points liés à la livraison ou aider à la prise en main. Une maintenance longue durée fait l’objet d’un accord séparé.',
  },
  {
    title: 'Annulation ou pause',
    body:
      'Si le projet doit être annulé ou mis en pause, les sommes déjà dues correspondent au travail engagé, aux créneaux réservés et aux livrables déjà produits, selon ce qui est prévu au devis.',
  },
]

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-14 scroll-reveal">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Cadre commercial</p>
        <h1 className="font-display text-5xl text-cream mb-4">Conditions de prestation</h1>
        <p className="font-body text-muted">
          Cette page pose le cadre général. Le devis signé reste le document de référence pour chaque projet.
        </p>
      </div>

      <div className="space-y-10 font-body text-parchment/80 leading-relaxed">
        {sections.map((section) => (
          <section key={section.title} className="scroll-reveal">
            <h2 className="font-display text-xl text-cream mb-3">{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        <div className="separator" />

        <section className="scroll-reveal">
          <h2 className="font-display text-xl text-cream mb-3">Contact</h2>
          <p>
            Pour toute question sur une prestation ou un devis:{' '}
            <a href={`mailto:${SITE_EMAIL}`} className="text-gold hover:text-cream transition-colors duration-200">
              {SITE_EMAIL}
            </a>
            .
          </p>
          <p className="mt-3">
            Les informations relatives aux données personnelles sont détaillées dans la{' '}
            <Link to="/politique-confidentialite" className="text-gold hover:text-cream transition-colors duration-200">
              politique de confidentialité
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
