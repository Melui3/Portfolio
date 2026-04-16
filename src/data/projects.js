// ─── PROJETS DATA ────────────────────────────────────────────────────────────
// Chaque projet : id, title, tagline, description, tags, url, github, type, status
// type: 'client' | 'lab'
// status: 'live' | 'wip' | 'soon'
// ─────────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'honey-group',
    title: 'Honey Group',
    tagline: 'Site vitrine tourisme — fullstack complet',
    description:
      'Site vitrine pour une agence de tourisme. Interface React côté client, API Django REST Framework, base de données PostgreSQL. Déployé sur architecture trois tiers gratuite (Infomaniak / Koyeb / Neon).',
    tags: ['React', 'Django', 'PostgreSQL', 'Koyeb', 'Neon'],
    url: 'https://honey-group.infomaniak.ch', // à mettre à jour
    github: null,
    type: 'client',
    status: 'live',
  },
  {
    id: 'prospect',
    title: 'Prospect',
    tagline: 'Outil de prospection commerciale',
    description:
      'Application de gestion de prospection pour freelances et petites équipes. Suivi des contacts, des relances et de l\'avancement des dossiers en un seul endroit.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    url: null,
    github: null,
    type: 'lab',
    status: 'wip',
  },
  {
    id: 'mindlap',
    title: 'MINDLAP',
    tagline: 'Tableau de bord analytique personnel',
    description:
      'Outil de visualisation et d\'analyse de données pour les profils analytiques. Prise de notes structurée, tableaux de bord personnalisables et suivi de métriques custom.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    url: null,
    github: null,
    type: 'lab',
    status: 'wip',
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
  },
  {
    id: 'f1-manager',
    title: 'F1 Manager 2026',
    tagline: 'Interface de gestion d\'écurie F1',
    description:
      'Application de management d\'écurie inspirée de la Formule 1. Gestion des pilotes, stratégies de course et développement technique. Projet passion.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    url: null,
    github: null,
    type: 'lab',
    status: 'wip',
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
  },
]

export const clientProjects = projects.filter((p) => p.type === 'client')
export const labProjects    = projects.filter((p) => p.type === 'lab')
