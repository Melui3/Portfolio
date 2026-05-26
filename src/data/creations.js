// ─── CRÉATIONS VISUELLES ─────────────────────────────────────────────────────
// category: 'logo' | 'banniere' | 'transition'
// image: chemin depuis /public (ex: '/creations/logo-xyz.png') ou null
// ─────────────────────────────────────────────────────────────────────────────

export const creations = [
  // ── Logos ──────────────────────────────────────────────────────────────────
  {
    id: 'logo-melui',
    title: 'Premier logo pour mon identité digitale',
    category: 'logo',
    context: '[Pour qui — streamer, asso, projet perso]',
    reflexion:
      '[Ta réflexion design ici — pourquoi ces couleurs, ces formes, cette typographie, quelle ambiance tu voulais transmettre.]',
    tools: ['Inkscape'],
    image: '/creations/logo-melui.png',
  },

  // ── Bannières ──────────────────────────────────────────────────────────────
  {
    id: 'banniere-exemple-1',
    title: '[Nom de la bannière]',
    category: 'banniere',
    context: '[Contexte — bannière Twitch, Twitter/X, YouTube]',
    reflexion:
      '[Ta réflexion design — composition, hiérarchie visuelle, cohérence avec le branding global]',
    tools: ['Photoshop'],
    image: null,
  },

  // ── Transitions Twitch ─────────────────────────────────────────────────────
  {
    id: 'transition-exemple-1',
    title: '[Nom de la scène / du pack]',
    category: 'transition',
    context: '[Pour qui — nom du streamer ou projet perso]',
    reflexion:
      '[Ta réflexion — durée, style d\'animation, univers visuel, contraintes OBS/Streamlabs]',
    tools: ['After Effects', 'Illustrator'],
    image: null,
  },
]

export const categoryMeta = {
  logo:       { label: 'Logo',              plural: 'Logos'              },
  banniere:   { label: 'Bannière',          plural: 'Bannières'          },
  transition: { label: 'Transition Twitch', plural: 'Transitions Twitch' },
}

export const creationsByCategory = (cat) =>
  cat === 'all' ? creations : creations.filter((c) => c.category === cat)
