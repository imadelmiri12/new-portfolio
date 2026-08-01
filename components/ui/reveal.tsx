'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../../hooks/use-reveal'

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'bar'

type RevealProps = {
  children: ReactNode
  delay?: number
  variant?: RevealVariant
  className?: string
  style?: CSSProperties
  as?: 'div' | 'li'
}

const variantClass: Record<RevealVariant, string> = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
  bar: 'reveal-bar',
}

/**
 * Scroll-triggered reveal wrapper — the JSX equivalent of framer-motion's
 * `whileInView`, but backed by a single IntersectionObserver per instance
 * and a plain CSS transition (see `useReveal` / the `.reveal*` classes in
 * globals.css). Used instead of `motion.div initial/whileInView` throughout
 * the site.
 */
export function Reveal({ children, delay = 0, variant = 'up', className = '', style, as = 'div' }: RevealProps) {
  const ref = useReveal<HTMLElement>(delay)
  const cls = `${variantClass[variant]}${className ? ` ${className}` : ''}`
  const Tag = as as any

  return (
    <Tag ref={ref} className={cls} style={style}>
      {children}
    </Tag>
  )
}
