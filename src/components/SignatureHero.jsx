import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Layers3, Pause, Play, RotateCcw } from 'lucide-react'
import '../styles/signature.css'

const prefersStill = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function SceneButton({ label, children, ...props }) {
  return (
    <button type="button" className="scene-control" aria-label={label} {...props}>
      {children}
      <span className="scene-tooltip" role="tooltip">{label}</span>
    </button>
  )
}

export default function SignatureHero() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const gestureRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [paused, setPaused] = useState(prefersStill)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    let disposed = false
    let scene
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPaused(preference.matches)
    preference.addEventListener('change', updatePreference)

    if (!navigator.connection?.saveData) {
      import('../three/signatureScene').then(({ createSignatureScene }) => {
        if (disposed) return
        try {
          scene = createSignatureScene(canvasRef.current, sectionRef.current, {
            paused: preference.matches,
            onUnavailable: () => !disposed && setReady(false),
          })
          sceneRef.current = scene
          setReady(true)
        } catch {
          // The brand image remains visible when WebGL is unavailable.
          setReady(false)
        }
      }).catch(() => !disposed && setReady(false))
    }

    return () => {
      disposed = true
      preference.removeEventListener('change', updatePreference)
      scene?.dispose()
      sceneRef.current = null
    }
  }, [])

  useEffect(() => {
    sceneRef.current?.setState({ paused, expanded })
  }, [paused, expanded, ready])

  const toggleExpanded = () => setExpanded((value) => !value)

  return (
    <section ref={sectionRef} className="signature-hero" aria-labelledby="signature-title" data-scene-ready={ready}>
      <div className="signature-scene" aria-hidden="true">
        <img className="signature-fallback" src={`${import.meta.env.BASE_URL}logo-nateos-mark.png`} alt="" width="512" height="512" />
        <canvas ref={canvasRef} className="signature-canvas" />
      </div>

      <div className="signature-inner">
        <div className="signature-topline hero-enter">
          <span>Design & développement indépendant</span>
          <span className="signature-edition" aria-hidden="true">La signature Nate Os / 01</span>
        </div>

        <div className="signature-copy">
          <p className="signature-eyebrow hero-enter" style={{ '--entry': '100ms' }}>Votre ambition mérite du caractère.</p>
          <h1 id="signature-title" className="signature-title hero-enter" style={{ '--entry': '180ms' }}>Nate <em>Os</em><span className="signature-period">.</span></h1>
          <p className="signature-subtitle hero-enter" style={{ '--entry': '260ms' }}>Du premier regard<br />au premier <em>contact.</em></p>
          <p className="signature-description hero-enter" style={{ '--entry': '340ms' }}>
            Des sites web sur mesure pour indépendants et entreprises.
            Une identité forte, un parcours évident.
          </p>
          <div className="signature-actions hero-enter" style={{ '--entry': '420ms' }}>
            <Link className="signature-primary" to="/contact">Parlons de votre site <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <a className="signature-secondary" href="#realisations"><span className="signature-work-label-full">Voir les réalisations</span><span className="signature-work-label-short">Les projets</span> <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <p className="signature-note hero-enter" style={{ '--entry': '480ms' }}>Devis gratuit · Échange direct · Accompagnement de A à Z</p>
        </div>

        {ready && (
          <>
            <button
              type="button"
              className="signature-hitarea"
              aria-label={expanded ? 'Rassembler la sculpture' : 'Déployer la sculpture'}
              aria-pressed={expanded}
              onPointerDown={(event) => { gestureRef.current = { x: event.clientX, y: event.clientY, moved: false } }}
              onPointerMove={(event) => {
                const gesture = gestureRef.current
                if (gesture && Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) > 8) gesture.moved = true
              }}
              onPointerCancel={() => { gestureRef.current = null }}
              onClick={(event) => {
                if (event.detail === 0 || !gestureRef.current?.moved) toggleExpanded()
                gestureRef.current = null
              }}
            />
            <div className="signature-controls" role="group" aria-label="Sculpture 3D">
              <span className="signature-state" aria-hidden="true">{expanded ? '02 / Déploiement' : '01 / Signature'}</span>
              <SceneButton label={expanded ? 'Rassembler la sculpture' : 'Déployer la sculpture'} aria-pressed={expanded} onClick={toggleExpanded}><Layers3 size={17} aria-hidden="true" /></SceneButton>
              <SceneButton label={paused ? 'Activer les animations' : 'Mettre les animations en pause'} aria-pressed={paused} onClick={() => setPaused((value) => !value)}>{paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}</SceneButton>
              <SceneButton label="Recentrer la sculpture" onClick={() => { setExpanded(false); sceneRef.current?.reset() }}><RotateCcw size={16} aria-hidden="true" /></SceneButton>
            </div>
          </>
        )}

        <div className="signature-bottom">
          <span>Une présence qui vous ressemble.</span>
          <a href="#realisations" className="signature-scroll" aria-label="Découvrir les réalisations"><ArrowDown size={18} aria-hidden="true" /></a>
          <span className="signature-bottom-right">Pensé avec soin. Conçu pour durer.</span>
        </div>
      </div>
    </section>
  )
}
