// ─── PROJETS DATA ────────────────────────────────────────────────────────────
// category: 'real-client' | 'demo-tool' | 'realistic-concept' | 'passion-concept'
// status: 'live' | 'demo' | 'wip' | 'soon'
// details: sections affichées dans l'accordéon de la carte projet
// ─────────────────────────────────────────────────────────────────────────────

export const projectCategories = [
  {
    key: 'real-client',
    label: 'Client réel',
    plural: 'Clients réels',
    intro: 'Des projets livrés pour de vrais besoins, avec contraintes métier, déploiement et suivi.',
    empty: 'Aucun client réel dans cette catégorie pour le moment.',
  },
  {
    key: 'demo-tool',
    label: 'Outil en démo',
    plural: 'Outils en version démo',
    intro: 'Des outils personnels ou internes rendus visitables avec des données fictives, pour montrer la logique produit sans exposer de données privées.',
    empty: 'Aucun outil en version démo pour le moment.',
  },
  {
    key: 'realistic-concept',
    label: 'Concepts réalistes',
    plural: 'Concepts réalistes',
    intro: 'Des concepts pensés comme de vrais produits: crédibles, utiles, et prêts à devenir des projets clients.',
    empty: 'Les prochains concepts réalistes arrivent ici.',
  },
  {
    key: 'passion-concept',
    label: 'Concept Passion',
    plural: 'Concepts Passion',
    intro: 'Des expérimentations guidées par une référence, une idée ou un univers que j’avais envie d’explorer.',
    empty: 'Aucun concept passion dans cette catégorie pour le moment.',
  },
]

export const projects = [
  {
    id: 'honey-group',
    title: 'Honey Group',
    tagline: 'Première présence web pour une agence de voyage à Madagascar',
    description:
      "Un site pensé pour lancer l'image de l'entreprise, présenter ses voyages, rassurer les futurs clients et rendre la prise de contact évidente dès les premières secondes.",
    tags: ['Tourisme', 'Site vitrine', 'Expérience client', 'Mobile', 'Identité visuelle'],
    url: 'https://www.honeygroupmadatourism.com/',
    github: null,
    image: '/projects/honey-group.webp',
    imageFit: 'contain',
    category: 'real-client',
    status: 'live',
    details: [
      {
        label: "L'objectif",
        body: "Créer la première présence en ligne de Honey Group, une agence de voyage lancée autour de Madagascar. Le site devait donner une image professionnelle dès le départ, expliquer clairement l'offre, présenter les destinations et faciliter la demande de devis.",
      },
      {
        label: "L'identité visuelle",
        body: "L'univers devait évoquer le voyage, la nature et la chaleur de Madagascar sans perdre en sérieux. Les couleurs solaires, les touches de bleu et les visuels de destinations donnent à la jeune entreprise une image accueillante, structurée et mémorable.",
      },
      {
        label: 'La démarche UX',
        body: "Le parcours a été pensé pour aider un visiteur qui ne connaît pas encore l'agence: comprendre qui elle est, découvrir les expériences proposées, comparer les destinations et trouver rapidement comment demander un devis. L'objectif était de réduire l'hésitation et de rendre le contact évident.",
      },
      {
        label: 'Le responsive',
        body: "Le site devait rester agréable sur téléphone, parce qu'un voyage se prépare souvent depuis un mobile: consultation rapide, partage à un proche, vérification d'une destination ou prise de contact après avoir vu une offre.",
      },
    ],
  },
  {
    id: 'prospect',
    title: 'Prospect',
    tagline: 'Outil interne de prospection en version démo',
    description:
      "Un outil personnel conçu pour rechercher, qualifier et suivre des prospects locaux depuis une seule interface. La version présentée est une démo anonymisée: les données sont fictives et les actions sensibles sont bloquées.",
    tags: ['Outil interne', 'Prospection', 'Dashboard', 'Suivi', 'Démo anonymisée'],
    url: 'https://melui3.github.io/Prospect/?demo=1#/dashboard',
    ctaLabel: 'Ouvrir la démo',
    github: null,
    image: '/projects/prospect-demo.webp',
    imageFit: 'contain',
    category: 'demo-tool',
    status: 'demo',
    details: [
      {
        label: "L'objectif",
        body: "Créer un outil personnel pour organiser ma prospection sans me disperser entre plusieurs fichiers, recherches et notes. L'idée était de centraliser les prospects, garder une trace des campagnes et savoir rapidement quoi faire ensuite.",
      },
      {
        label: "L'identité visuelle",
        body: "L'interface reprend une direction sombre, sobre et concentrée, proche de l'univers Nate Os. Le but n'était pas de faire une application décorative, mais un espace de travail clair, lisible et agréable à utiliser longtemps.",
      },
      {
        label: 'La démarche UX',
        body: "Le parcours a été pensé autour d'un vrai usage: chercher des prospects, les classer, consulter leurs informations, suivre les statuts, préparer des messages et garder une vue d'ensemble. La démo montre le fonctionnement sans exposer ma vraie base de données.",
      },
      {
        label: 'Le responsive',
        body: "L'outil devait rester consultable sur mobile pour vérifier une information, suivre une campagne ou consulter une fiche rapidement. Les actions principales restent visibles, mais l'usage principal reste volontairement plus confortable sur ordinateur.",
      },
    ],
  },
  {
    id: 'les-pattes-heureuses',
    title: 'Les Pattes Heureuses',
    tagline: 'Site vitrine fictif pour cabinet vétérinaire',
    description:
      'Concept réaliste de cabinet vétérinaire pensé pour rassurer les propriétaires, présenter les soins, afficher les tarifs et faciliter la prise de rendez-vous.',
    tags: ['Santé animale', 'Site vitrine', 'Prise de RDV', 'Tarifs', 'Responsive'],
    url: 'https://melui3.github.io/les-pattes-heureuses/',
    github: null,
    image: '/projects/les-pattes-heureuses.webp',
    imageFit: 'contain',
    category: 'realistic-concept',
    status: 'live',
    details: [
      {
        label: "L'objectif",
        body: "Créer un site fictif crédible pour un cabinet vétérinaire de proximité. Le but était de rassurer les propriétaires, présenter clairement les soins proposés et rendre la prise de rendez-vous plus simple dès les premières secondes.",
      },
      {
        label: "L'identité visuelle",
        body: "L'univers devait être doux, propre et professionnel, sans tomber dans quelque chose de trop enfantin. Les verts, les bleus calmes, les fonds crème et les photos lumineuses servent à créer une sensation de confiance, de soin et de proximité.",
      },
      {
        label: 'La démarche UX',
        body: "Le parcours a été pensé pour répondre vite aux questions essentielles: quels animaux sont pris en charge, quels soins sont proposés, quels sont les tarifs, comment prendre rendez-vous et quoi faire en cas d'urgence.",
      },
      {
        label: 'Le responsive',
        body: "Le site devait rester très pratique sur mobile, parce qu'un propriétaire peut avoir besoin de consulter les horaires, appeler le cabinet ou demander un rendez-vous rapidement depuis son téléphone.",
      },
    ],
  },
  {
    id: 'le-coup-de-feu',
    title: 'Le Coup de Feu',
    tagline: 'Restaurant fictif sous pression',
    description:
      "Concept réaliste de restaurant gastronomique à forte personnalité, pensé pour présenter l'univers, faire découvrir le menu et rendre la réservation simple malgré une ambiance volontairement intense.",
    tags: ['Restaurant', 'Réservation', 'Menu filtrable', 'UX', 'Responsive', 'Identité visuelle'],
    url: 'https://melui3.github.io/le-coup-de-feu/',
    github: null,
    image: '/projects/le-coup-de-feu.webp',
    imageFit: 'contain',
    category: 'realistic-concept',
    status: 'live',
    details: [
      {
        label: "L'objectif",
        body: "Créer un site fictif crédible pour un restaurant gastronomique avec une identité très marquée. Le site devait donner envie de découvrir l'adresse, présenter le menu, poser l'ambiance et guider rapidement vers la réservation.",
      },
      {
        label: "L'identité visuelle",
        body: "L'univers repose sur un noir charbon, des accents dorés, du rouge feu et une ambiance de cuisine ouverte sous tension. L'idée était de mélanger le côté premium d'un restaurant gastronomique avec un ton plus mordant, mémorable et volontairement théâtral.",
      },
      {
        label: 'La démarche UX',
        body: "Le parcours a été pensé pour répondre aux questions principales d'un visiteur: quelle est l'ambiance, qu'est-ce qu'on mange, peut-on réserver facilement, quelle table choisir et est-ce que l'expérience vaut le détour. Le menu filtrable, les avis, la galerie, la FAQ et la réservation rendent le site vivant sans perdre en lisibilité.",
      },
      {
        label: 'Le responsive',
        body: "Le site devait rester pratique sur mobile, parce qu'un client peut vouloir consulter le menu, vérifier les disponibilités, montrer l'adresse ou réserver rapidement depuis son téléphone.",
      },
    ],
  },
  {
    id: 'piastries',
    title: 'Piastries',
    tagline: 'Boulangerie fictive inspirée F1',
    description:
      'Concept de marque gourmand et moderne, inspiré de l’univers McLaren et d’Oscar Piastri, mais pensé pour rester lisible et accueillant même sans connaître la référence F1.',
    tags: ['Branding', 'UX', 'Responsive', 'React', 'Vite'],
    url: 'https://melui3.github.io/Piastries/',
    github: null,
    image: '/projects/piastries.webp',
    imageFit: 'contain',
    category: 'passion-concept',
    status: 'live',
    details: [
      {
        label: "L'objectif",
        body: "Créer une identité de marque fictive inspirée de l'univers de la F1 et plus particulièrement de McLaren et d'Oscar Piastri, avec un ton chaleureux, moderne et gourmand.",
      },
      {
        label: "L'identité visuelle",
        body: "Palette inspirée de McLaren (orange, noir, blanc), univers accueillant, logo avec un croissant, et identité capable de fonctionner même si on ne comprend pas la référence F1.",
      },
      {
        label: 'La démarche UX',
        body: 'Le site devait être simple à parcourir, donner faim, mettre les produits en valeur et inspirer confiance dès les premières secondes.',
      },
      {
        label: 'Le responsive',
        body: 'Le design devait rester agréable sur mobile, puisque beaucoup de clients consulteraient le menu ou les horaires sur téléphone.',
      },
    ],
  },
  {
    id: 'sunstrider-agency',
    title: 'Sunstrider Agency',
    tagline: "Portail royal fictif de Quel'Thalas",
    description:
      "Concept de portail officiel fictif pour Quel'Thalas, pensé comme une vitrine royale immersive, lisible et capable de guider le visiteur entre histoire, monarchie, lieux, culture et informations pratiques.",
    tags: ['Worldbuilding', 'Portail fictif', 'UX', 'Responsive', 'Identité visuelle'],
    url: 'https://melui3.github.io/sunstrider-agency/',
    github: null,
    image: '/projects/sunstrider-agency.webp',
    imageFit: 'contain',
    category: 'passion-concept',
    status: 'live',
    details: [
      {
        label: "L'objectif",
        body: "Créer un portail fictif qui donne l'impression d'un vrai site officiel pour Quel'Thalas. Le but était d'accueillir le visiteur, poser l'ambiance du royaume et lui donner rapidement accès aux grandes rubriques: histoire, monarchie, lieux à découvrir, culture, visite et contacts.",
      },
      {
        label: "L'identité visuelle",
        body: "J'ai construit une direction artistique premium, avec noir profond, burgundy, or antique et ivoire chaud. L'idée était de mélanger le côté royal et arcane des Sin'dorei avec une interface élégante, lisible et pas juste décorative.",
      },
      {
        label: 'La démarche UX',
        body: "Le parcours devait rester évident même pour quelqu'un qui ne connaît pas l'univers. Les boutons, les cartes et les rubriques guident vers les informations principales, comme sur un vrai portail public, tout en gardant le côté immersif.",
      },
      {
        label: 'Le responsive',
        body: "Le site devait rester agréable sur téléphone: navigation compacte, textes lisibles, grands appels à l'action et sections bien séparées pour consulter facilement l'histoire, les lieux ou les informations de visite depuis un petit écran.",
      },
    ],
  },
]

export const projectsByCategory = (category) =>
  category === 'all' ? projects : projects.filter((project) => project.category === category)

export const clientProjects = projects.filter((project) => project.category === 'real-client')
export const labProjects = projects.filter((project) => project.category !== 'real-client')
