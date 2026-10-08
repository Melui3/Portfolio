import test from 'node:test'
import assert from 'node:assert/strict'
import { canonicalUrl, getSeoForPath, NOT_FOUND_SEO, SEO_ROUTES, structuredDataForRoute } from '../src/seo.js'

test('known routes resolve with or without a trailing slash and use one canonical URL', () => {
  for (const route of SEO_ROUTES) {
    assert.equal(getSeoForPath(`${route.path}/`).title, route.title)
    assert.equal(canonicalUrl(`${route.path}/`), canonicalUrl(route.path))
    assert.ok(!route.robots?.includes('noindex'))
  }
})

test('unknown pages stay noindex instead of inheriting home metadata', () => {
  for (const path of ['/not-a-page', '/projets/unknown/', '/404.html']) {
    assert.equal(getSeoForPath(path), NOT_FOUND_SEO)
    assert.equal(getSeoForPath(path).robots, 'noindex, follow')
    assert.notEqual(getSeoForPath(path).title, getSeoForPath('/').title)
  }
})

test('structured data identifies each page using its canonical URL', () => {
  const ids = new Set()
  for (const route of SEO_ROUTES) {
    const data = structuredDataForRoute(route)
    const page = data['@graph'].find((node) => node['@type'] === 'WebPage')
    assert.equal(page.url, canonicalUrl(route.path))
    assert.equal(page.name, route.title)
    assert.ok(!ids.has(page['@id']))
    ids.add(page['@id'])
  }
})
