import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { CSSProperties } from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Typed helper for setting CSS custom properties (e.g. animation-delay
 * variables consumed by the `.reveal` / `.hero-up` utility classes) from
 * inline styles without fighting TypeScript's CSSProperties typing.
 */
export function cssVar(vars: Record<string, string | number>): CSSProperties {
  return vars as CSSProperties
}
