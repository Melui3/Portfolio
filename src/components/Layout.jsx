import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    const root = mainRef.current
    if (!root) return undefined

    const reveal = (node) => {
      if (node.classList.contains('is-visible')) return
      node.classList.add('is-visible')
    }

    if (!('IntersectionObserver' in window)) {
      root.querySelectorAll('.scroll-reveal').forEach(reveal)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )

    const observeRevealNodes = (scope = root) => {
      const nodes = scope.matches?.('.scroll-reveal')
        ? [scope]
        : Array.from(scope.querySelectorAll?.('.scroll-reveal') || [])

      nodes.forEach((node, index) => {
        node.style.setProperty('--reveal-delay', `${Math.min(index * 70, 280)}ms`)
        observer.observe(node)
      })
    }

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) observeRevealNodes(node)
        })
      })
    })

    observeRevealNodes()
    mutationObserver.observe(root, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-ink">
      <Header />
      <main ref={mainRef} className="page-shell flex-1 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}
