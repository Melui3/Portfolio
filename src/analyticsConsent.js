export const ANALYTICS_CONSENT_STORAGE_KEY = 'nateos:analytics-consent'
export const SHOW_ANALYTICS_CONSENT_EVENT = 'nateos:show-analytics-consent'

export function requestAnalyticsConsent() {
  if (typeof window === 'undefined') return

  window.localStorage.removeItem(ANALYTICS_CONSENT_STORAGE_KEY)
  window.dispatchEvent(new Event(SHOW_ANALYTICS_CONSENT_EVENT))
}
