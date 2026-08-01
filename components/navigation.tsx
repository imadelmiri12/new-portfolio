'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Menu, Orbit, Sparkles, X, Zap } from 'lucide-react'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0)
      setIsScrolled(window.scrollY > 20)

      const sections = navLinks
        .map((link) => {
          const element = document.querySelector(link.href)
          if (!element) return null

          const rect = element.getBoundingClientRect()

          return {
            href: link.href,
            top: Math.abs(rect.top - 120),
            visible: rect.top <= 170 && rect.bottom >= 170,
          }
        })
        .filter(Boolean) as { href: string; top: number; visible: boolean }[]

      const current =
        sections.find((section) => section.visible) ??
        sections.sort((a, b) => a.top - b.top)[0]

      if (current) setActiveSection(current.href)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      className="sticky top-0 z-50 overflow-hidden animate-fade-in"
      style={{
        background: isScrolled
          ? 'radial-gradient(circle at 12% 10%, rgba(45,212,191,0.12), transparent 32%), radial-gradient(circle at 82% 20%, rgba(129,140,248,0.11), transparent 38%), linear-gradient(135deg, rgba(5,7,12,0.9), rgba(8,11,19,0.82))'
          : 'radial-gradient(circle at 12% 10%, rgba(45,212,191,0.1), transparent 32%), radial-gradient(circle at 82% 20%, rgba(129,140,248,0.1), transparent 38%), linear-gradient(135deg, rgba(5,7,12,0.7), rgba(10,14,22,0.58))',
        backdropFilter: 'blur(14px) saturate(130%)',
        WebkitBackdropFilter: 'blur(14px) saturate(130%)',
        borderBottom: isScrolled ? '1px solid rgba(45,212,191,0.24)' : '1px solid rgba(45,212,191,0.09)',
        boxShadow: isScrolled ? '0 18px 70px rgba(0,0,0,0.34)' : '0 0 0 rgba(0,0,0,0)',
        fontFamily: "'DM Sans', sans-serif",
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      {/* decorative layers — all pure CSS, no per-frame JS */}
      <div className="nav-stars pointer-events-none absolute inset-0 overflow-hidden opacity-70" />
      <div className="spin-slow pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full" style={{ border: '1px solid rgba(45,212,191,0.09)' }} />
      <div className="spin-slow-reverse pointer-events-none absolute -left-16 -bottom-32 h-64 w-64 rounded-full" style={{ border: '1px solid rgba(129,140,248,0.09)' }} />
      <div
        className="shooting-star pointer-events-none absolute top-2 h-px w-32 rotate-[18deg]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(226,232,240,0.9), rgba(45,212,191,0.55), transparent)',
          boxShadow: '0 0 18px rgba(45,212,191,0.45)',
        }}
      />
      <div
        className="shine-sweep pointer-events-none absolute bottom-0 left-0 h-px w-1/3"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(45,212,191,1), rgba(129,140,248,0.9), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-[width] duration-300 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #2dd4bf, #818cf8, #f472b6)',
          boxShadow: '0 0 18px rgba(45,212,191,0.5)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex min-h-16 items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="group relative flex items-center gap-3" onClick={closeMenu}>
            <div
              className="lift-hover relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full text-sm font-black hover:scale-110 hover:-rotate-6"
              style={{
                background: 'radial-gradient(circle at 35% 25%, rgba(255,255,255,0.18), transparent 22%), linear-gradient(135deg, rgba(45,212,191,0.23), rgba(129,140,248,0.15))',
                border: '1px solid rgba(45,212,191,0.5)',
                color: '#2dd4bf',
                letterSpacing: '0.05em',
                boxShadow: '0 0 28px rgba(45,212,191,0.16)',
              }}
            >
              <span
                className="spin-slow absolute h-[180%] w-[180%]"
                style={{ background: 'conic-gradient(from 0deg, transparent, rgba(45,212,191,0.7), transparent, rgba(129,140,248,0.5), transparent)' }}
              />
              <span className="absolute inset-[2px] rounded-full" style={{ background: '#05070c' }} />
              <span
                className="spin-slow absolute h-[72%] w-[130%] rounded-full"
                style={{ border: '1px solid rgba(45,212,191,0.36)', rotate: '-22deg' }}
              />
              <span className="relative z-10">IE</span>
            </div>

            <div className="hidden sm:block">
              <span
                className="block text-sm font-bold uppercase tracking-[0.22em] transition-colors duration-200 group-hover:text-[#2dd4bf]"
                style={{ color: '#e2e8f0' }}
              >
                Imad Elmiri
              </span>
              <span className="pulse-soft flex items-center gap-1.5 text-[10px] uppercase tracking-[0.32em]" style={{ color: '#52647d' }}>
                <Orbit size={10} />
                Dev portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden items-center gap-2 rounded-full px-2 py-2 md:flex"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025))',
              border: '1px solid rgba(255,255,255,0.075)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 18px 45px rgba(0,0,0,0.18)',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative overflow-hidden rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300"
                  style={{
                    color: isActive ? '#05070c' : '#7f91ad',
                    background: isActive ? 'linear-gradient(135deg, #2dd4bf 0%, #5eead4 52%, #818cf8 130%)' : 'transparent',
                    boxShadow: isActive ? '0 9px 32px rgba(45,212,191,0.32)' : 'none',
                  }}
                >
                  {!isActive && (
                    <span
                      className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: 'radial-gradient(circle at 50% 50%, rgba(45,212,191,0.14), transparent 70%)' }}
                    />
                  )}
                  <span
                    className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-[55%]"
                    style={{ background: '#2dd4bf' }}
                  />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2dd4bf]" style={{ color: isActive ? '#05070c' : undefined }}>
                    {link.label}
                  </span>
                </a>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="shine-on-hover lift-hover group flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] hover:scale-[1.045]"
              style={{
                color: '#05070c',
                background: '#2dd4bf',
                boxShadow: '0 10px 38px rgba(45,212,191,0.26)',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={14} />
                Hire Me
                <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lift-hover relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full md:hidden hover:scale-105 active:scale-90"
            style={{
              color: '#2dd4bf',
              background: 'radial-gradient(circle at 35% 25%, rgba(255,255,255,0.14), transparent 24%), rgba(45,212,191,0.08)',
              border: '1px solid rgba(45,212,191,0.32)',
              boxShadow: isOpen ? '0 0 35px rgba(45,212,191,0.24)' : 'none',
            }}
            aria-label="Toggle navigation menu"
          >
            <span className="relative z-10 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className="overflow-hidden transition-[grid-template-rows] duration-[400ms] ease-out md:hidden"
          style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              className="mb-5 overflow-hidden rounded-[2rem] p-3"
              style={{
                background: 'radial-gradient(circle at 10% 0%, rgba(45,212,191,0.13), transparent 38%), linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025))',
                border: '1px solid rgba(45,212,191,0.16)',
                boxShadow: '0 24px 70px rgba(0,0,0,0.34)',
              }}
            >
              <div className="mb-3 rounded-3xl px-4 py-4" style={{ background: 'rgba(5,7,12,0.48)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-2">
                  <Zap size={14} style={{ color: '#2dd4bf' }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2dd4bf' }}>
                    Navigation
                  </span>
                </div>
              </div>

              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative mb-1 flex items-center justify-between overflow-hidden rounded-2xl px-4 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:translate-x-2"
                    style={{
                      color: isActive ? '#05070c' : '#8a9bb5',
                      background: isActive ? 'linear-gradient(135deg, #2dd4bf, #5eead4)' : 'transparent',
                      transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
                    }}
                    onClick={closeMenu}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={isActive ? 'pulse-soft relative z-10 h-1.5 w-1.5 rounded-full' : 'relative z-10 h-1.5 w-1.5 rounded-full opacity-45'}
                      style={{ background: isActive ? '#05070c' : '#2dd4bf' }}
                    />
                  </a>
                )
              })}

              <a
                href="#contact"
                className="shine-on-hover mt-3 flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-[0.18em] transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  color: '#05070c',
                  background: 'linear-gradient(135deg, #2dd4bf, #5eead4)',
                  boxShadow: '0 16px 42px rgba(45,212,191,0.26)',
                }}
                onClick={closeMenu}
              >
                <Sparkles size={14} />
                Hire Me
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
