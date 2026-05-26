import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/',           label: 'Accueil'    },
  { to: '/projets',    label: 'Projets'    },
  { to: '/creations',  label: 'Créations'  },
  { to: '/apropos',    label: 'À propos'   },
  { to: '/contact',    label: 'Contact'    },
]

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        <NavLink to="/" className="group opacity-90 hover:opacity-100 transition-opacity duration-300">
          <img
            src="/logo-horizontal.svg"
            alt="Nathaniel — Développeur Web Freelance"
            className="h-10 w-auto"
          />
        </NavLink>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
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
            className="font-body text-sm px-5 py-2 border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 tracking-wide"
          >
            Obtenir un devis
          </NavLink>
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-parchment transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-parchment transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-parchment transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 py-4 gap-4 bg-leather/95 backdrop-blur-sm border-t border-gold-dim/20">
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
            className="font-body text-sm mt-2 px-5 py-3 border border-gold/50 text-gold text-center"
          >
            Obtenir un devis
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
