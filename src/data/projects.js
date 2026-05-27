// ─── PROJETS DATA ────────────────────────────────────────────────────────────
// type: 'client' | 'lab'
// status: 'live' | 'wip' | 'soon'
// process: { why, how, challenges } — accordion sur la carte projet
// ─────────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'honey-group',
    title: 'Honey Group',
    tagline: 'Site vitrine tourisme — fullstack complet',
    description:
      'Site vitrine pour une agence de tourisme. Interface React côté client, API Django REST Framework, base de données PostgreSQL. Déployé sur architecture trois tiers gratuite (Infomaniak / Koyeb / Neon).',
    tags: ['React', 'Django', 'PostgreSQL', 'Koyeb', 'Neon'],
    url: 'https://www.honeygroupmadatourism.com/',
    github: null,
    type: 'client',
    status: 'live',
    process: {
      why: 'Premier projet client fullstack de bout en bout — l\'opportunité de concevoir une vraie architecture de production, pas juste un front statique. Le client avait besoin d\'un site vitrine mais aussi d\'une interface d\'administration pour gérer son contenu.',
      how: 'Approche API-first : j\'ai d\'abord modélisé les données côté Django, défini les endpoints REST, puis construit le front React par-dessus. Le déploiement sur trois services gratuits (Infomaniak pour le front, Koyeb pour l\'API, Neon pour la DB) a demandé une réflexion sérieuse sur la gestion du CORS et la persistance des connexions.',
      challenges: 'Orchestrer trois services distincts avec des cold starts côté Koyeb, gérer les variables d\'environnement entre les environnements dev/prod, et livrer quelque chose de stable sans infrastructure payante.',
    },
  },
  {
    id: 'prospect',
    title: 'Prospect',
    tagline: 'Outil de prospection commerciale',
    description:
      'Application de gestion de prospection pour freelances et petites équipes. Suivi des contacts, des relances et de l\'avancement des dossiers en un seul endroit.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    url: "https://melui3.github.io/Prospect/",
    github: "https://github.com/Melui3/Prospect",
    type: 'lab',
    status: 'live',
    process: {
      why: 'Besoin personnel : en tant que freelance, je jonglais entre un tableur, des notes éparpillées et mon email pour suivre mes prospects. Aucun outil existant ne correspondait exactement à ce workflow — soit trop lourd (CRM complet), soit trop basique.',
      how: 'MVP centré sur l\'essentiel : une vue pipeline par statut, des rappels de relance, et une fiche contact légère. Pas de base de données serveur au départ — localStorage pour garder la friction minimale à l\'onboarding.',
      challenges: 'Définir le bon niveau de complexité. Chaque fonctionnalité ajoutée risque de transformer l\'outil en mini-CRM — l\'enjeu est de rester dans la zone utile sans basculer dans la surcharge.',
    },
  },
  {
    id: 'mindlap',
    title: 'MINDLAP',
    tagline: 'Tableau de bord analytique personnel',
    description:
      'Outil de visualisation et d\'analyse de données pour les profils analytiques. Prise de notes structurée, tableaux de bord personnalisables et suivi de métriques custom.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    url: "https://melui3.github.io/MINDLAP/",
    github: "https://github.com/Melui3/MINDLAP",
    type: 'lab',
    status: 'live',
    process: {
      why: 'J\'accumule des données sur mes habitudes, mes objectifs, mes projets — mais elles sont silotées dans des apps différentes. L\'idée : un espace unique que je configure selon mes propres métriques, pas celles que quelqu\'un d\'autre a décidé de tracker pour moi.',
      how: 'Architecture modulaire par widgets indépendants. Chaque widget gère ses propres données et son rendu — on peut en ajouter ou retirer sans casser le reste. L\'état global est minimal, chaque module est autonome.',
      challenges: 'Garder l\'interface lisible quand la densité d\'information augmente. Et résister à la tentation de tout tracker — la valeur vient de la sélection, pas de l\'exhaustivité.',
    },
  },
  {
    id: 'pitbudget',
    title: 'PitBudget',
    tagline: 'Gérer son budget sans prise de tête',
    description:
      'Application de gestion budgétaire simple et intuitive. Catégories, objectifs d\'épargne, et vue mensuelle claire — pour ceux qui veulent contrôler leurs finances sans s\'y perdre.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    url: null,
    github: null,
    type: 'lab',
    status: 'wip',
    process: {
      why: 'Les apps budget existantes sont soit trop austères (feuille Excel glorifiée), soit trop complexes (catégories infinies, imports bancaires, graphiques en tout sens). Je voulais quelque chose d\'agréable à utiliser, pas juste fonctionnel.',
      how: 'Focus sur la vue mensuelle comme point d\'entrée central. On voit immédiatement où on en est, ce qui reste, ce qui est prévu. Les objectifs d\'épargne sont visuels — une barre de progression, pas un chiffre sec.',
      challenges: 'Rendre le suivi financier visuellement engageant sans tomber dans le gadget. Et trouver le bon équilibre entre automatisation (calculs) et contrôle manuel (l\'utilisateur reste maître de ses entrées).',
    },
  },
  {
    id: 'f1-manager',
    title: 'F1 Manager 2026',
    tagline: 'Interface de gestion d\'écurie F1',
    description:
      'Application de management d\'écurie inspirée de la Formule 1. Gestion des pilotes, stratégies de course et développement technique. Projet passion.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    url:"https://melui3.github.io/F1-Manager-2026/#/login" ,
    github: "https://github.com/Melui3/F1-Manager-2026",
    type: 'lab',
    status: 'live',
    process: {
      why: 'Projet passion pur. La F1 est un sport que je suis depuis longtemps, et les interfaces de stratégie de course m\'ont toujours fasciné — le mur des stands, les simulations de pit stop, la lecture des données en temps réel. J\'ai voulu recréer ça.',
      how: 'Partir de la logique métier avant l\'UI : modéliser une course, une stratégie de pneus, un développement de châssis. Ensuite seulement construire l\'interface qui expose ces états. Les données de prototype sont simulées mais respectent la réalité technique.',
      challenges: 'La profondeur du domaine. La F1 est extrêmement complexe techniquement — trouver le bon niveau d\'abstraction pour que le simulateur soit fidèle sans devenir ingérable est un défi constant.',
    },
  },
  {
    id: 'player-two',
    title: 'PlayerTwo',
    tagline: 'Bientôt disponible',
    description: 'Un projet en cours de définition. Stay tuned.',
    tags: [],
    url: null,
    github: null,
    type: 'lab',
    status: 'soon',
    process: null,
  },
  {
    id: 'nate_studio_os',
    title: 'Nate Studio OS',
    tagline: 'Bientôt disponible',
    description: 'Un projet en cours de définition. Stay tuned.',
    tags: [],
    url: null,
    github: null,
    type: 'lab',
    status: 'soon',
    process: null,
  }
]

export const clientProjects = projects.filter((p) => p.type === 'client')
export const labProjects    = projects.filter((p) => p.type === 'lab')
