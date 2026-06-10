import { useState } from 'react'
import { SITE_EMAIL } from '../seo'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]     = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // mailto: — pas de backend, simple et efficace
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return

    const mailto = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(
      form.subject || `Contact portfolio — ${form.name}`
    )}&body=${encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`
    )}`

    window.location.href = mailto
    setSent(true)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-14">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Contact</p>
        <h1 className="font-display text-5xl text-cream mb-4">Parlons de votre projet</h1>
        <p className="font-body text-muted max-w-lg">
          Décrivez-moi votre besoin en quelques lignes. Je vous réponds sous 48h,
          sans engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Formulaire */}
        <div className="md:col-span-2">
          {sent ? (
            <div className="border border-gold/40 bg-gold/5 p-8 text-center">
              <p className="font-display text-2xl text-cream mb-2">Merci !</p>
              <p className="font-body text-muted">
                Votre client mail s'est ouvert avec votre message pré-rempli.
                Envoyez-le et je vous réponds rapidement.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-xs text-muted tracking-widest uppercase block mb-2">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="w-full bg-leather/50 border border-dust focus:border-gold/60 outline-none px-4 py-3 font-body text-parchment placeholder-muted/50 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-muted tracking-widest uppercase block mb-2">
                    Votre email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jean@exemple.fr"
                    className="w-full bg-leather/50 border border-dust focus:border-gold/60 outline-none px-4 py-3 font-body text-parchment placeholder-muted/50 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs text-muted tracking-widest uppercase block mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Site vitrine pour mon restaurant"
                  className="w-full bg-leather/50 border border-dust focus:border-gold/60 outline-none px-4 py-3 font-body text-parchment placeholder-muted/50 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="font-body text-xs text-muted tracking-widest uppercase block mb-2">
                  Votre message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Décrivez votre projet, vos besoins, votre budget approximatif..."
                  className="w-full bg-leather/50 border border-dust focus:border-gold/60 outline-none px-4 py-3 font-body text-parchment placeholder-muted/50 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.email || !form.message}
                className="font-body px-8 py-3 bg-gold text-ink hover:bg-gold/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 tracking-wide"
              >
                Envoyer le message
              </button>

              <p className="font-body text-xs text-muted">
                * Champs obligatoires. Votre client mail s'ouvrira avec le message pré-rempli.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div>
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Réponse</p>
            <p className="font-body text-sm text-muted">Sous 48h, toujours.</p>
          </div>
          <div>
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Localisation</p>
            <p className="font-body text-sm text-muted">France — travail en remote.</p>
          </div>
          <div>
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Disponibilité</p>
            <p className="font-body text-sm text-muted">Ouvert aux nouveaux projets.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
