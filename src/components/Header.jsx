import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/',           label: 'Accueil'    },
  { to: '/projets',    label: 'Projets'    },
  { to: '/services',   label: 'Services'   },
  { to: '/creations',  label: 'Créations'  },
  { to: '/apropos',    label: 'À propos'   },
  { to: '/contact',    label: 'Contact'    },
]

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const mobileMenuId = 'site-mobile-menu'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-sm border-b border-gold-dim/30 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="group flex items-center gap-3 opacity-95 hover:opacity-100 transition-opacity duration-300"
          aria-label="Nate Os — Design et développement web"
        >
          <span className="relative grid h-14 w-14 place-items-center md:h-16 md:w-16">
            <img
              src={`${import.meta.env.BASE_URL}logo-nateos-mark.png`}
              alt=""
              className="h-full w-full object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
            />
          </span>
          <span className="hidden leading-none sm:flex sm:flex-col">
            <span className="font-display text-xl tracking-[0.1em] text-cream">Nate Os</span>
            <span className="mt-1 font-body text-xs italic tracking-[0.14em] text-muted">
              Design & développement web
            </span>
          </span>
        </NavLink>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navigation principale">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-body text-base tracking-wide gold-underline transition-colors duration-200 ${
                  isActive ? 'text-gold' : 'text-parchment hover:text-cream'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="font-body text-sm px-5 py-2 border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 tracking-wide rounded-[15px]"
          >
            Parler de mon site
          </NavLink>
        </nav>

        {/* Burger mobile */}
        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-controls={mobileMenuId}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-px bg-parchment transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-parchment transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-parchment transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id={mobileMenuId}
        aria-hidden={!menuOpen}
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'visible max-h-96' : 'invisible max-h-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 bg-leather/95 backdrop-blur-sm border-t border-gold-dim/20" aria-label="Navigation mobile">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-body text-lg py-1 border-b border-dust ${
                  isActive ? 'text-gold' : 'text-parchment'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-body text-sm mt-2 px-5 py-3 border border-gold/50 text-gold text-center rounded-[15px]"
          >
            Demander un devis gratuit
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
