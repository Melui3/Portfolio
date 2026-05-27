// ─── CRÉATIONS VISUELLES ─────────────────────────────────────────────────────
// category: 'logo' | 'banniere' | 'transition'
// image: chemin depuis /public (ex: '/creations/logo-xyz.png') ou null
// ─────────────────────────────────────────────────────────────────────────────

export const creations = [

  // ── Logos ──────────────────────────────────────────────────────────────────
  {
    id: 'logo-melui',
    title: 'Logo — Melui',
    category: 'logo',
    context: 'Identité visuelle personnelle',
    reflexion:
      '[Ta réflexion ici — pourquoi ces couleurs, ces formes, quelle ambiance tu voulais transmettre pour ton identité digitale.]',
    tools: ['Inkscape'],
    image: '/creations/logo-melui.png',
  },
  {
    id: 'logo-moonrage-1',
    title: 'Logo Moonrage — v1',
    category: 'logo',
    context: 'Pour Moonrage, streamer Twitch',
    reflexion:
      'Première version du logo pour l\'identité visuelle de la chaîne Twitch de Moonrage. Univers gaming avec une énergie brute — formes et typographie pensées pour être lisibles en petit format (overlay, icône de chaîne) comme en grand.',
    tools: ['Inkscape'],
    image: '/creations/logo_moonrage-1.png',
  },
  {
    id: 'logo-moonrage-2',
    title: 'Logo Moonrage — v2',
    category: 'logo',
    context: 'Pour Moonrage, streamer Twitch',
    reflexion:
      'Évolution du logo après retours — affinage du trait, meilleure lisibilité sur fonds sombres et clairs. La direction artistique reste dans le même univers gaming mais avec plus de personnalité et de précision dans les détails.',
    tools: ['Inkscape'],
    image: '/creations/logo-moonrage-2.png',
  },

  // ── Bannières ──────────────────────────────────────────────────────────────
  {
    id: 'banniere-moonrage',
    title: 'Bannière Moonrage',
    category: 'banniere',
    context: 'Bannière de chaîne Twitch pour Moonrage',
    reflexion:
      'Bannière principale de la chaîne — vibe gaming assumé, palette sombre avec des accents colorés pour l\'énergie. Composition pensée pour fonctionner sur tous les formats (desktop, mobile, application Twitch).',
    tools: ['Canva'],
    image: '/creations/banniere.mp4',
  },
  {
    id: 'banniere-debut-moonrage',
    title: 'Bannière de début — Moonrage',
    category: 'banniere',
    context: 'Écran de démarrage de stream Twitch pour Moonrage',
    reflexion:
      'Animation d\'intro pour lancer le stream. Références Dragon Ball pour coller à l\'univers de Moonrage — dynamisme, couleurs vives, montée en puissance. L\'objectif : capter l\'attention dès les premières secondes et poser l\'ambiance du stream.',
    tools: ['Canva'],
    image: '/creations/banniere-début.mp4',
  },
  {
    id: 'banniere-fin-moonrage',
    title: 'Bannière de fin — Moonrage',
    category: 'banniere',
    context: 'Écran de fin de stream Twitch pour Moonrage',
    reflexion:
      'Écran de fin plus posé que l\'intro, mais avec une touche personnelle : une petite référence au chat de Moonrage glissée dans la composition. Un clin d\'œil pour les viewers fidèles, qui transforme un simple écran de fin en moment de complicité avec la communauté.',
    tools: ['Canva'],
    image: '/creations/banniere-fin-moonrage.mp4',
  },

  // ── Transitions Twitch ─────────────────────────────────────────────────────
  {
    id: 'transition-moonrage',
    title: 'Pack de transitions — Moonrage',
    category: 'transition',
    context: 'Scènes de transition Twitch pour Moonrage',
    reflexion:
      'Transitions animées entre les scènes OBS — cohérentes avec l\'identité visuelle de la chaîne. Durée courte pour ne pas casser le rythme du stream, style gaming avec des références Dragon Ball. Pensées pour fonctionner aussi bien en BRB qu\'entre deux parties.',
    tools: ['Canva'],
    image: '/creations/transition-moonrage.mp4',
  },

]

export const categoryMeta = {
  logo:       { label: 'Logo',              plural: 'Logos'              },
  banniere:   { label: 'Bannière',          plural: 'Bannières'          },
  transition: { label: 'Transition Twitch', plural: 'Transitions Twitch' },
}

export const creationsByCategory = (cat) =>
  cat === 'all' ? creations : creations.filter((c) => c.category === cat)
