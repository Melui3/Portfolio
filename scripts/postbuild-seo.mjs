import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  canonicalUrl,
  SEO_ROUTES,
  SITE_IMAGE_URL,
  SITE_NAME,
  structuredDataForRoute,
} from '../src/seo.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const marker = '<!-- SEO_META -->'

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function safeJson(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

function seoMeta(route, robots = 'index, follow') {
  const url = canonicalUrl(route.path)
  const title = escapeAttribute(route.title)
  const description = escapeAttribute(route.description)
  const image = escapeAttribute(SITE_IMAGE_URL)

  return [
    `<link rel="canonical" href="${escapeAttribute(url)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta property="og:site_name" content="${escapeAttribute(SITE_NAME)}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${escapeAttribute(url)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${safeJson(structuredDataForRoute(route))}</script>`,
  ].join('\n    ')
}

function renderRouteHtml(template, route, robots) {
  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${escapeAttribute(route.title)}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/s,
      `<meta name="description" content="${escapeAttribute(route.description)}" />`,
    )

  if (html.includes(marker)) {
    html = html.replace(marker, seoMeta(route, robots))
  } else {
    html = html.replace('</head>', `    ${seoMeta(route, robots)}\n  </head>`)
  }

  return html
}

function routeOutputPath(route) {
  if (route.path === '/') return join(distDir, 'index.html')
  return join(distDir, route.path.replace(/^\//, ''), 'index.html')
}

function routeChangeFrequency(route) {
  return [
    '/mentions-legales',
    '/conditions-prestation',
    '/politique-confidentialite',
    '/cookies',
  ].includes(route.path)
    ? 'yearly'
    : 'monthly'
}

function renderSitemap() {
  const urls = SEO_ROUTES.map((route) => `  <url>
    <loc>${escapeAttribute(canonicalUrl(route.path))}</loc>
    <changefreq>${routeChangeFrequency(route)}</changefreq>
    <priority>${escapeAttribute(route.priority)}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

const template = await readFile(join(distDir, 'index.html'), 'utf8')

for (const route of SEO_ROUTES) {
  const outputPath = routeOutputPath(route)
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, renderRouteHtml(template, route), 'utf8')
}

const fallbackRoute = SEO_ROUTES[0]
await writeFile(join(distDir, '404.html'), renderRouteHtml(template, fallbackRoute, 'noindex, follow'), 'utf8')
await writeFile(join(distDir, 'sitemap.xml'), renderSitemap(), 'utf8')

console.log(`Generated SEO HTML for ${SEO_ROUTES.length} routes.`)
