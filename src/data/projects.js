// ─── PROJETS DATA ────────────────────────────────────────────────────────────
// category: 'real-client' | 'realistic-concept' | 'passion-concept'
// status: 'live' | 'wip' | 'soon'
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
    tagline: 'Site vitrine pour une agence de voyage à Madagascar',
    description:
      'Un site pensé pour présenter des voyages, rassurer les futurs clients et donner envie de découvrir Madagascar dès les premières secondes.',
    tags: ['Tourisme', 'Site vitrine', 'Expérience client', 'Mobile', 'Identité visuelle'],
    url: 'https://www.honeygroupmadatourism.com/',
    github: null,
    image: '/projects/honey-group.png',
    imageFit: 'contain',
    category: 'real-client',
    status: 'live',
    details: [
      {
        label: "L'objectif",
        body: "Créer une présence en ligne claire et rassurante pour Honey Group, une agence de voyage tournée vers Madagascar. Le site devait aider les visiteurs à comprendre l'offre, découvrir les destinations et passer facilement à la prise de contact.",
      },
      {
        label: "L'identité visuelle",
        body: "L'univers devait évoquer le voyage, la nature et la chaleur de Madagascar sans perdre en sérieux. Les couleurs solaires, les touches de bleu et les visuels de destinations servent à créer une ambiance accueillante, professionnelle et immédiatement identifiable.",
      },
      {
        label: 'La démarche UX',
        body: "Le parcours a été pensé pour aller à l'essentiel: comprendre qui est l'agence, voir les expériences proposées, comparer les destinations et trouver rapidement comment demander un devis. L'objectif était de réduire l'hésitation et de rendre le contact évident.",
      },
      {
        label: 'Le responsive',
        body: "Le site devait rester agréable sur téléphone, parce qu'un voyage se prépare souvent depuis un mobile: consultation rapide, partage à un proche, vérification d'une destination ou prise de contact après avoir vu une offre.",
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
    image: '/projects/piastries.png',
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
]

export const projectsByCategory = (category) =>
  category === 'all' ? projects : projects.filter((project) => project.category === category)

export const clientProjects = projects.filter((project) => project.category === 'real-client')
export const labProjects = projects.filter((project) => project.category !== 'real-client')
