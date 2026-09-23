import { useEffect } from 'react'
import { trackContactEvent } from '../analyticsEvents'

export default function ContactEvents() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.('a[href]')
      if (!link) return
      const url = new URL(link.href, window.location.href)
      if (url.protocol === 'mailto:') trackContactEvent('email_click')
      else if (url.origin === window.location.origin && url.pathname.replace(/\/$/, '') === '/contact') {
        trackContactEvent('contact_click')
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
