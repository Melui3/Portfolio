import { ANALYTICS_CONSENT_STORAGE_KEY } from './analyticsConsent.js'

const events = new Set(['contact_click', 'email_click', 'generate_lead'])

export function trackContactEvent(name) {
  if (typeof window === 'undefined' || !events.has(name)) return
  try {
    if (window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY) !== 'accepted') return
    // Only event names are sent: never form values or visitor identifiers.
    window.gtag?.('event', name, name === 'generate_lead' ? { lead_source: 'contact_form' } : {})
    window.clarity?.('event', name)
  } catch {
    // Analytics must never block navigation or sending a message.
  }
}
