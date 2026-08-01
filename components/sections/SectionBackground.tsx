'use client'

import { useEffect, useRef } from 'react'

/**
 * Site-wide "aurora" background.
 *
 * This replaces the old canvas starfield entirely. The previous version
 * redrew a full-page canvas ~24 times a second no matter what — that
 * constant JS + canvas fill-rate cost was the main source of jank on the
 * site. This version does the same visual job (drifting cosmic glow, a
 * star layer, a cursor-reactive spotlight) with plain CSS animations, so
 * there is no per-frame JavaScript at all. The only JS is a throttled
 * mousemove listener that just updates two CSS custom properties for the
 * spotlight — everything else is handled by the compositor.
 */
export function SectionBackground() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.innerWidth < 768) return

    let frame = 0
    let latest = { x: 50, y: 35 }

    const apply = () => {
      frame = 0
      root.style.setProperty('--spot-x', `${latest.x}%`)
      root.style.setProperty('--spot-y', `${latest.y}%`)
    }

    const onMouseMove = (event: MouseEvent) => {
      latest = {
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      }
      if (!frame) frame = requestAnimationFrame(apply)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="bg-aurora pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-stars" />
      <div className="aurora-spotlight" />
      <div className="aurora-vignette" />
    </div>
  )
}
