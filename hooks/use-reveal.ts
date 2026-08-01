'use client'

import { useEffect, useRef } from 'react'

/**
 * Lightweight replacement for framer-motion's `whileInView`.
 *
 * Returns a ref to attach to any element. When the element scrolls into
 * view, an `is-visible` class is added (see the `.reveal*` CSS classes in
 * globals.css), which triggers a plain CSS transition. There's no JS
 * animation loop involved — IntersectionObserver fires once, the class
 * flips, and the browser's compositor does the rest.
 *
 * @param delay optional stagger delay in ms, applied via a CSS custom
 * property so multiple items in a list can cascade without each one
 * needing its own timer.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.setProperty('--reveal-delay', `${delay}ms`)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
