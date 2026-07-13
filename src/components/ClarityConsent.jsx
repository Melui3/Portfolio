import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const STORAGE_KEY = 'nateos:analytics-consent'
const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID?.trim()
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()
const HAS_ANALYTICS_TOOL = Boolean(CLARITY_PROJECT_ID || GA_MEASUREMENT_ID)

function injectClarity(projectId) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (!projectId || document.getElementById('microsoft-clarity-script')) return

  window.clarity = window.clarity || function clarityQueue() {
    window.clarity.q = window.clarity.q || []
    window.clarity.q.push(arguments)
  }

  const script = document.createElement('script')
  script.id = 'microsoft-clarity-script'
  script.async = true
  script.src = `https://www.clarity.ms/tag/${projectId}`

  const firstScript = document.getElementsByTagName('script')[0]
  firstScript.parentNode.insertBefore(script, firstScript)
}

function injectGoogleAnalytics(measurementId) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (!measurementId) return

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }

  if (document.getElementById('google-analytics-script')) return

  const script = document.createElement('script')
  script.id = 'google-analytics-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`

  const firstScript = document.getElementsByTagName('script')[0]
  firstScript.parentNode.insertBefore(script, firstScript)

  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false })
}

function trackGooglePageView(measurementId) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (!measurementId || typeof window.gtag !== 'function') return

  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    page_title: document.title,
  })
}

export default function ClarityConsent() {
  const location = useLocation()
  const [choice, setChoice] = useState(() => {
    if (typeof window === 'undefined') return 'pending'
    return window.localStorage.getItem(STORAGE_KEY) || 'pending'
  })

  useEffect(() => {
    if (choice !== 'accepted') return

    injectClarity(CLARITY_PROJECT_ID)
    injectGoogleAnalytics(GA_MEASUREMENT_ID)
  }, [choice])

  useEffect(() => {
    if (choice !== 'accepted') return

    injectGoogleAnalytics(GA_MEASUREMENT_ID)
    trackGooglePageView(GA_MEASUREMENT_ID)
  }, [choice, location.pathname, location.search, location.hash])

  if (!HAS_ANALYTICS_TOOL || choice !== 'pending') return null

  const saveChoice = (value) => {
    window.localStorage.setItem(STORAGE_KEY, value)
    setChoice(value)
  }

  return (
    <div
      className="fixed inset-x-4 bottom-4 z-[1000] mx-auto max-w-3xl border border-gold-dim/40 bg-ink/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-md md:flex md:items-center md:justify-between md:gap-6"
      role="dialog"
      aria-live="polite"
      aria-label="Préférences statistiques"
    >
      <div>
        <p className="font-display text-lg text-cream">Mesure d’audience</p>
        <p className="mt-1 font-body text-sm leading-relaxed text-muted">
          J’utilise Microsoft Clarity et Google Analytics pour comprendre les visites, les clics et améliorer le site.
          Les champs de contact restent masqués.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 md:mt-0 md:shrink-0">
        <button
          type="button"
          onClick={() => saveChoice('refused')}
          className="rounded-[15px] border border-gold/35 px-4 py-2 font-body text-sm text-parchment transition-colors duration-200 hover:border-gold hover:text-cream"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => saveChoice('accepted')}
          className="rounded-[15px] border border-gold bg-gold px-4 py-2 font-body text-sm text-ink transition-colors duration-200 hover:bg-cream"
        >
          Accepter
        </button>
      </div>
    </div>
  )
}
