'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(10,14,26,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="flex h-9 w-9 items-center justify-center font-bold text-sm transition-all duration-300"
              style={{
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#c9a84c',
                letterSpacing: '0.05em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#c9a84c'
                e.currentTarget.style.color = '#0a0e1a'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.1)'
                e.currentTarget.style.color = '#c9a84c'
              }}
            >
              IE
            </div>
            <span
              className="hidden sm:inline font-semibold text-sm tracking-widest uppercase transition-colors duration-300"
              style={{ color: '#8a9bb5', letterSpacing: '0.15em' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8a9bb5')}
            >
              Imad Elmiri
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
                style={{ color: '#6b7fa3', letterSpacing: '0.18em' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b7fa3')}
              >
                {link.label}
                {/* Underline on hover */}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300"
                  style={{ background: '#c9a84c' }}
                  onMouseEnter={e => (e.currentTarget.style.width = '100%')}
                />
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              className="text-xs font-semibold uppercase tracking-widest px-5 py-2 transition-all duration-300"
              style={{
                color: '#0a0e1a',
                background: '#c9a84c',
                letterSpacing: '0.15em',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e0bc6a')}
              onMouseLeave={e => (e.currentTarget.style.background = '#c9a84c')}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 transition-colors duration-300"
            style={{ color: '#6b7fa3' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6b7fa3')}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden py-4"
            style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-2 py-3 text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
                style={{ color: '#6b7fa3', letterSpacing: '0.18em', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b7fa3')}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-center transition-all duration-300"
              style={{ color: '#0a0e1a', background: '#c9a84c', letterSpacing: '0.15em' }}
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}