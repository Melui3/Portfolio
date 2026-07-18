export const SITE_BASE_URL = 'https://nathaniel-dev.fr'
export const SITE_NAME = 'Nathaniel Dujardin'
export const SITE_EMAIL = 'nathaniel@nathaniel-dev.fr'
export const SITE_IMAGE_URL = `${SITE_BASE_URL}/logo-nateos-full.png`

export const SEO_ROUTES = [
  {
    path: '/',
    title: 'Nathaniel Dujardin - Développeur Web Freelance',
    description:
      'Développeur web freelance, je crée des sites vitrines, landing pages et interfaces sur-mesure pour inspirer confiance et recevoir plus facilement des demandes.',
    priority: '1.0',
  },
  {
    path: '/projets',
    title: 'Projets web - Nathaniel Dujardin',
    description:
      'Découvrez mes projets clients, concepts réalistes et concepts passion: interfaces web, branding, UX et déploiements complets.',
    priority: '0.9',
  },
  {
    path: '/services',
    title: 'Services et tarifs web - Nathaniel Dujardin',
    description:
      'Services de création de site web freelance: landing page, site vitrine, espace membre, fonctionnalités avancées et direction visuelle web.',
    priority: '0.9',
  },
  {
    path: '/creations',
    title: 'Créations visuelles - Nathaniel Dujardin',
    description:
      'Logos, bannières et transitions Twitch conçus avec une direction artistique claire et adaptée à chaque univers.',
    priority: '0.7',
  },
  {
    path: '/apropos',
    title: 'À propos - Nathaniel Dujardin',
    description:
      'Mon approche de développeur web freelance: comprendre vos besoins, expliquer clairement, puis livrer un site fiable et sur-mesure.',
    priority: '0.8',
  },
  {
    path: '/contact',
    title: 'Contact - Nathaniel Dujardin',
    description:
      'Demandez un devis gratuit pour votre site vitrine, landing page ou projet web. Réponse sous 48h avec une première lecture claire du besoin.',
    priority: '0.8',
  },
  {
    path: '/mentions-legales',
    title: 'Mentions légales - Nathaniel Dujardin',
    description:
      'Mentions légales, hébergement, données personnelles et propriété intellectuelle du portfolio de Nathaniel Dujardin.',
    priority: '0.3',
  },
  {
    path: '/conditions-prestation',
    title: 'Conditions de prestation - Nathaniel Dujardin',
    description:
      'Cadre des prestations web: devis, tarifs, paiement, contenus, modifications, délais, livraison, propriété et support après mise en ligne.',
    priority: '0.3',
  },
  {
    path: '/politique-confidentialite',
    title: 'Politique de confidentialité - Nathaniel Dujardin',
    description:
      'Politique de confidentialité du site: formulaire de contact, services utilisés, mesure d’audience et droits liés aux données personnelles.',
    priority: '0.3',
  },
  {
    path: '/cookies',
    title: 'Gestion des cookies - Nathaniel Dujardin',
    description:
      'Gestion des cookies et du consentement pour Microsoft Clarity, Google Analytics et la mesure d’audience du site.',
    priority: '0.3',
  },
]

const routeByPath = Object.fromEntries(SEO_ROUTES.map((route) => [route.path, route]))

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/'

  const withoutTrailingSlash = pathname.replace(/\/+$/, '')
  return withoutTrailingSlash || '/'
}

export function canonicalUrl(pathname = '/') {
  const path = normalizePath(pathname)
  return path === '/' ? `${SITE_BASE_URL}/` : `${SITE_BASE_URL}${path}/`
}

export function getSeoForPath(pathname) {
  const path = normalizePath(pathname)
  return routeByPath[path] || routeByPath['/']
}

export function personStructuredData() {
  return {
    '@type': 'Person',
    '@id': `${SITE_BASE_URL}/#person`,
    name: SITE_NAME,
    jobTitle: 'Développeur web freelance',
    email: `mailto:${SITE_EMAIL}`,
    url: `${SITE_BASE_URL}/`,
    sameAs: ['https://github.com/Melui3'],
  }
}

export function websiteStructuredData() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_BASE_URL}/#website`,
    name: `${SITE_NAME} - Portfolio`,
    url: `${SITE_BASE_URL}/`,
    inLanguage: 'fr-FR',
    publisher: { '@id': `${SITE_BASE_URL}/#person` },
  }
}

export function pageStructuredData(route) {
  const url = canonicalUrl(route.path)

  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: route.title,
    description: route.description,
    url,
    isPartOf: { '@id': `${SITE_BASE_URL}/#website` },
    about: { '@id': `${SITE_BASE_URL}/#person` },
    inLanguage: 'fr-FR',
  }
}

export function structuredDataForRoute(route) {
  return {
    '@context': 'https://schema.org',
    '@graph': [personStructuredData(), websiteStructuredData(), pageStructuredData(route)],
  }
}
