import { NavLink } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-gold-dim/25 bg-leather/60">
      {/* Ligne dorée décorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Colonne 1 — Identité */}
          <div>
            <img
              src={`${import.meta.env.BASE_URL}logo-full.svg`}
              alt="Nathaniel"
              className="w-24 mb-4 opacity-80"
            />
            <p className="font-body text-sm text-muted leading-relaxed">
              Développeur web freelance. Je crée des sites et applications
              sur-mesure pour les indépendants, associations et petites
              entreprises.
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { to: '/',        label: 'Accueil'  },
                { to: '/projets', label: 'Projets'  },
                { to: '/apropos', label: 'À propos' },
                { to: '/contact', label: 'Contact'  },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className="font-body text-sm text-muted hover:text-parchment transition-colors duration-200"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-4">
              Me contacter
            </p>
            <p className="font-body text-sm text-muted mb-3">
              Un projet en tête ? Je réponds sous 48h.
            </p>
            <NavLink
              to="/contact"
              className="inline-block font-body text-sm px-5 py-2 border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300"
            >
              Discutons-en →
            </NavLink>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="pt-6 border-t border-dust flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-muted">
            © {year} Nathaniel — Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            <NavLink
              to="/mentions-legales"
              className="font-body text-xs text-muted hover:text-parchment transition-colors duration-200"
            >
              Mentions légales
            </NavLink>
            <p className="font-body text-xs text-muted italic">
              Fait avec soin, sans template
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
