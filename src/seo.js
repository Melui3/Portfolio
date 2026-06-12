export const SITE_BASE_URL = 'https://nathaniel-dev.fr'
export const SITE_NAME = 'Nathaniel Dujardin'
export const SITE_EMAIL = 'nathaniel@nathaniel-dev.fr'
export const SITE_IMAGE_URL = `${SITE_BASE_URL}/logo-full.svg`

export const SEO_ROUTES = [
  {
    path: '/',
    title: 'Nathaniel Dujardin - Développeur Web Freelance',
    description:
      'Développeur web freelance, je crée des sites et applications sur-mesure pour indépendants, associations et petites entreprises.',
    priority: '1.0',
  },
  {
    path: '/projets',
    title: 'Projets web - Nathaniel Dujardin',
    description:
      'Découvrez mes réalisations client et projets personnels en React, Django, PostgreSQL et TailwindCSS.',
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
      'Parlez-moi de votre projet web. Je réponds sous 48h pour cadrer votre besoin, votre budget et les prochaines étapes.',
    priority: '0.8',
  },
  {
    path: '/mentions-legales',
    title: 'Mentions légales - Nathaniel Dujardin',
    description:
      'Mentions légales, hébergement, données personnelles et propriété intellectuelle du portfolio de Nathaniel Dujardin.',
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
