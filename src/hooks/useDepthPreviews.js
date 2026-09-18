import { useEffect } from 'react'

export default function useDepthPreviews(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    const allowed = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    let active
    let frame = 0
    const reset = () => {
      if (!active) return
      active.style.removeProperty('--tilt-x')
      active.style.removeProperty('--tilt-y')
      active = null
    }
    const onMove = (event) => {
      if (!allowed.matches) return
      const media = event.target.closest('.media-frame')
      if (media !== active) reset()
      if (!media || !media.querySelector('img')) return
      active = media
      active.classList.add('depth-media')
      const { clientX, clientY } = event
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (active !== media) return
        const bounds = media.getBoundingClientRect()
        media.style.setProperty('--tilt-x', `${-((clientY - bounds.top) / bounds.height - 0.5) * 5}deg`)
        media.style.setProperty('--tilt-y', `${((clientX - bounds.left) / bounds.width - 0.5) * 7}deg`)
      })
    }
    root.addEventListener('pointermove', onMove, { passive: true })
    root.addEventListener('pointerleave', reset)
    allowed.addEventListener('change', reset)
    return () => {
      cancelAnimationFrame(frame)
      reset()
      root.removeEventListener('pointermove', onMove)
      root.removeEventListener('pointerleave', reset)
      allowed.removeEventListener('change', reset)
    }
  }, [rootRef])
}
