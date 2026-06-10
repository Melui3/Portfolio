import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  canonicalUrl,
  getSeoForPath,
  SITE_IMAGE_URL,
  SITE_NAME,
  structuredDataForRoute,
} from '../seo'

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

function upsertJsonLd(data) {
  const id = 'structured-data'
  let element = document.getElementById(id)

  if (!element) {
    element = document.createElement('script')
    element.id = id
    element.type = 'application/ld+json'
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(data)
}

export default function Seo() {
  const location = useLocation()

  useEffect(() => {
    const route = getSeoForPath(location.pathname)
    const url = canonicalUrl(route.path)

    document.documentElement.lang = 'fr'
    document.title = route.title

    upsertMeta('name', 'description', route.description)
    upsertMeta('name', 'robots', 'index, follow')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'fr_FR')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:title', route.title)
    upsertMeta('property', 'og:description', route.description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', SITE_IMAGE_URL)
    upsertMeta('name', 'twitter:card', 'summary')
    upsertMeta('name', 'twitter:title', route.title)
    upsertMeta('name', 'twitter:description', route.description)
    upsertMeta('name', 'twitter:image', SITE_IMAGE_URL)
    upsertLink('canonical', url)
    upsertJsonLd(structuredDataForRoute(route))
  }, [location.pathname])

  return null
}
