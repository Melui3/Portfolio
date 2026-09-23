import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowUpRight, Check, ChevronDown, Mail, Send } from 'lucide-react'
import { SITE_EMAIL } from '../seo'
import { services } from '../data/services'
import { submitContact } from '../contactSubmission'
import { trackContactEvent } from '../analyticsEvents'
import '../styles/clientJourney.css'

const budgets = ['Moins de 500 €', '500 à 1 000 €', '1 000 à 2 000 €', '2 000 à 3 000 €', 'Plus de 3 000 €']

export default function Contact() {
  const [params] = useSearchParams()
  const requestedService = services.find((service) => service.id === params.get('service'))?.id || ''
  const [serviceId, setServiceId] = useState(requestedService)
  const [status, setStatus] = useState('idle')
  const [detailsOpen, setDetailsOpen] = useState(false)
  const formRef = useRef(null)
  const statusRef = useRef(null)
  const requestRef = useRef(null)
  const selectedService = services.find((service) => service.id === serviceId)
  const locked = status === 'pending' || status === 'success'

  useEffect(() => { setServiceId(requestedService) }, [requestedService])
  useEffect(() => () => {
    requestRef.current?.abort()
    requestRef.current = null
  }, [])
  useEffect(() => {
    if (status === 'success' || status === 'error') statusRef.current?.focus()
  }, [status])

  async function onSubmit(event) {
    event.preventDefault()
    if (requestRef.current || locked) return
    const form = event.currentTarget
    for (const field of form.querySelectorAll('[required]')) {
      field.setCustomValidity(field.value.trim() ? '' : 'Merci de renseigner ce champ.')
    }
    if (!form.reportValidity()) return
    const data = Object.fromEntries(new FormData(form))
    if (data._honey) return
    const controller = new AbortController()
    requestRef.current = controller
    setStatus('pending')
    const timeout = window.setTimeout(() => controller.abort(), 20000)
    try {
      await submitContact({
        ...data,
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
        project_type: selectedService?.title || 'À définir ensemble',
        _subject: 'Nouvelle demande depuis Nate Os',
        _template: 'table',
        _captcha: 'false',
      }, { signal: controller.signal })
      if (requestRef.current !== controller) return
      setStatus('success')
      trackContactEvent('generate_lead')
    } catch {
      if (requestRef.current === controller) setStatus('error')
    } finally {
      window.clearTimeout(timeout)
      if (requestRef.current === controller) requestRef.current = null
    }
  }

  function resetForm() {
    formRef.current.reset()
    setServiceId(requestedService)
    setStatus('idle')
    setDetailsOpen(false)
    requestAnimationFrame(() => formRef.current?.elements.name.focus())
  }

  return (
    <div className="contact-page">
      <header className="contact-heading">
        <p className="journey-eyebrow">Parlons de votre projet</p>
        <h1>Et si on en discutait ?</h1>
        <p>Quelques mots sur votre activité et votre idée suffisent. Je vous réponds sous 48 h, sans engagement.</p>
        <a className="contact-direct" href={`mailto:${SITE_EMAIL}`}><Mail size={18} aria-hidden="true" />{SITE_EMAIL}<ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>

      <div className="contact-layout">
        <div>
          <form ref={formRef} onSubmit={onSubmit} action={`https://formsubmit.co/${SITE_EMAIL}`} method="POST" data-clarity-mask="true" aria-label="Votre demande" aria-busy={status === 'pending'} onInput={(event) => event.target.setCustomValidity?.('')}>
            <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
            <fieldset disabled={locked} className="contact-fields">
              <legend className="sr-only">Votre message</legend>
              <div className="contact-pair">
                <label htmlFor="name">Votre nom <span aria-hidden="true">*</span><input id="name" name="name" required maxLength={120} autoComplete="name" placeholder="Votre nom" /></label>
                <label htmlFor="email">Votre email <span aria-hidden="true">*</span><input id="email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="vous@exemple.fr" /></label>
              </div>
              <label htmlFor="message">Votre idée, votre besoin <span aria-hidden="true">*</span><textarea id="message" name="message" required maxLength={10000} rows={4} placeholder="Je lance mon activité et j’aimerais un site pour…" /></label>
              {selectedService && <p className="contact-selection"><Check size={16} aria-hidden="true" />Votre demande : {selectedService.title}</p>}
              <details className="contact-optional" open={detailsOpen} onToggle={(event) => setDetailsOpen(event.currentTarget.open)}>
                <summary>Quelques précisions <span>facultatif</span><ChevronDown size={18} aria-hidden="true" /></summary>
                <div className="contact-optional-fields">
                  <div className="contact-pair">
                    <label htmlFor="projectType">Type de projet<select id="projectType" name="service" value={serviceId} onChange={(event) => setServiceId(event.target.value)}><option value="">À définir ensemble</option>{services.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}</select></label>
                    <label htmlFor="budget">Budget envisagé<select id="budget" name="budget" defaultValue=""><option value="">À définir ensemble</option>{budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}</select></label>
                  </div>
                  <label htmlFor="currentWebsite">Site actuel ou inspiration<input id="currentWebsite" name="current_website_or_reference" maxLength={1000} placeholder="Un site, votre compte Instagram…" /></label>
                </div>
              </details>
            </fieldset>
            {status === 'success' && <div ref={statusRef} role="status" tabIndex={-1} className="contact-status"><h2>Merci pour votre message.</h2><p>Votre demande a été acceptée par le service d’envoi. Je vous réponds sous 48 h.</p><button type="button" onClick={resetForm} className="journey-link">Écrire un nouveau message <ArrowUpRight size={16} aria-hidden="true" /></button></div>}
            {status === 'error' && <div ref={statusRef} role="alert" tabIndex={-1} className="contact-status contact-error"><h2>L’envoi n’a pas pu être confirmé.</h2><p>Votre texte est conservé. Vous pouvez réessayer ou m’écrire à <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.</p></div>}
            {status !== 'success' && <button type="submit" disabled={status === 'pending'} className="journey-button contact-submit"><Send size={17} aria-hidden="true" />{status === 'pending' ? 'Envoi en cours…' : status === 'error' ? 'Réessayer l’envoi' : 'Envoyer mon message'}</button>}
            <p className="contact-privacy">* Champs obligatoires. Vos informations servent à répondre à votre demande. <Link to="/politique-confidentialite">Confidentialité</Link></p>
          </form>
        </div>

        <aside className="contact-aside" aria-label="Votre interlocuteur">
          <p className="journey-eyebrow">Un échange direct</p>
          <h2>Moi, c’est Nathaniel.</h2>
          <p>Vous me parlez de votre métier, de vos clients et de vos idées. Je vous aide à définir ce qui sera vraiment utile pour votre site.</p>
          <ol><li><strong>Je vous réponds sous 48 h.</strong><span>On précise ensemble le besoin et les prochaines étapes.</span></li><li><strong>Vous recevez un devis clair.</strong><span>Pages, fonctionnalités, budget et délai, avant de vous engager.</span></li></ol>
          <Link className="journey-link" to="/apropos">Faire connaissance <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </aside>
      </div>
    </div>
  )
}
