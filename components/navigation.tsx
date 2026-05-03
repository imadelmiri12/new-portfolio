'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  type Variants,
} from 'framer-motion'
import { ChevronRight, Menu, Orbit, Sparkles, X, Zap } from 'lucide-react'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -24,
    scale: 0.94,
    filter: 'blur(14px)',
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.065,
      delayChildren: 0.08,
    },
  },
}

const mobileItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: -22,
    rotateX: -18,
  },
  open: {
    opacity: 1,
    x: 0,
    rotateX: 0,
    transition: {
      duration: 0.38,
      ease: 'easeOut',
    },
  },
}

const orbitVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 180, damping: 24 })
  const springY = useSpring(mouseY, { stiffness: 180, damping: 24 })

  const navStars = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${4 + Math.random() * 92}%`,
        top: `${18 + Math.random() * 66}%`,
        delay: Math.random() * 3,
        duration: 2.8 + Math.random() * 3,
        size: 1.5 + Math.random() * 2.8,
        color:
          i % 3 === 0
            ? 'rgba(201,168,76,0.75)'
            : i % 3 === 1
              ? 'rgba(123,167,188,0.65)'
              : 'rgba(226,232,240,0.55)',
      })),
    []
  )

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

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
  }

  const closeMenu = () => setIsOpen(false)

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0, filter: 'blur(12px)' }}
      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className="sticky top-0 z-50 overflow-hidden"
      style={{
        background: isScrolled
          ? 'radial-gradient(circle at 12% 10%, rgba(201,168,76,0.12), transparent 32%), radial-gradient(circle at 82% 20%, rgba(123,167,188,0.11), transparent 38%), linear-gradient(135deg, rgba(7,11,21,0.9), rgba(10,14,26,0.82))'
          : 'radial-gradient(circle at 12% 10%, rgba(201,168,76,0.11), transparent 32%), radial-gradient(circle at 82% 20%, rgba(123,167,188,0.1), transparent 38%), linear-gradient(135deg, rgba(7,11,21,0.7), rgba(13,21,38,0.58))',
        backdropFilter: 'blur(28px) saturate(145%)',
        WebkitBackdropFilter: 'blur(28px) saturate(145%)',
        borderBottom: isScrolled
          ? '1px solid rgba(201,168,76,0.26)'
          : '1px solid rgba(201,168,76,0.1)',
        boxShadow: isScrolled
          ? '0 18px 70px rgba(0,0,0,0.34)'
          : '0 0 0 rgba(0,0,0,0)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* cursor-following nebula glow */}
      <motion.div
        className="pointer-events-none absolute h-52 w-52 rounded-full blur-3xl"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(201,168,76,0.18), rgba(123,167,188,0.08), transparent 70%)',
        }}
      />

      {/* small moving stars */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {navStars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              background: star.color,
              boxShadow: '0 0 12px rgba(201,168,76,0.45)',
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.15, 0.9, 0.15],
              scale: [0.75, 1.35, 0.75],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* orbit arcs */}
      <motion.div
        className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full"
        style={{
          border: '1px solid rgba(201,168,76,0.09)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="pointer-events-none absolute -left-16 -bottom-32 h-64 w-64 rounded-full"
        style={{
          border: '1px solid rgba(123,167,188,0.09)',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
      />

      {/* shooting star line */}
      <motion.div
        className="pointer-events-none absolute top-2 h-px w-32 rotate-[18deg]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(226,232,240,0.9), rgba(201,168,76,0.55), transparent)',
          boxShadow: '0 0 18px rgba(201,168,76,0.45)',
        }}
        animate={{ x: ['-25vw', '125vw'], opacity: [0, 1, 0] }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          repeatDelay: 4,
          ease: 'easeInOut',
        }}
      />

      {/* animated shine line */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-px w-1/3"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(201,168,76,1), rgba(123,167,188,0.9), transparent)',
        }}
        animate={{ x: ['-125%', '330%'] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* scroll progress */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #c9a84c, #7ba7bc, #9b8ec4)',
          boxShadow: '0 0 18px rgba(201,168,76,0.5)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex min-h-16 items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="group relative flex items-center gap-3" onClick={closeMenu}>
            <motion.div
              className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full text-sm font-black"
              style={{
                background:
                  'radial-gradient(circle at 35% 25%, rgba(255,255,255,0.18), transparent 22%), linear-gradient(135deg, rgba(201,168,76,0.23), rgba(123,167,188,0.15))',
                border: '1px solid rgba(201,168,76,0.5)',
                color: '#c9a84c',
                letterSpacing: '0.05em',
                boxShadow: '0 0 28px rgba(201,168,76,0.16)',
              }}
              whileHover={{
                scale: 1.1,
                rotate: -5,
                boxShadow: '0 0 42px rgba(201,168,76,0.38)',
              }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.25 }}
            >
              <motion.span
                variants={orbitVariants}
                animate="animate"
                className="absolute h-[180%] w-[180%]"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent, rgba(201,168,76,0.7), transparent, rgba(123,167,188,0.5), transparent)',
                }}
              />
              <span className="absolute inset-[2px] rounded-full" style={{ background: '#070b15' }} />

              <motion.span
                className="absolute h-[72%] w-[130%] rounded-full"
                style={{
                  border: '1px solid rgba(201,168,76,0.36)',
                  rotate: '-22deg',
                }}
                animate={{ rotate: ['-22deg', '338deg'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              <motion.span
                className="relative z-10"
                animate={{
                  textShadow: [
                    '0 0 0 rgba(201,168,76,0)',
                    '0 0 16px rgba(201,168,76,0.65)',
                    '0 0 0 rgba(201,168,76,0)',
                  ],
                }}
                transition={{ duration: 2.6, repeat: Infinity }}
              >
                IE
              </motion.span>
            </motion.div>

            <div className="hidden sm:block">
              <motion.span
                className="block text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: '#e2e8f0' }}
                whileHover={{ color: '#c9a84c', x: 3 }}
                transition={{ duration: 0.2 }}
              >
                Imad Elmiri
              </motion.span>
              <motion.span
                className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.32em]"
                style={{ color: '#52647d' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Orbit size={10} />
                Space portfolio
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden items-center gap-2 rounded-full px-2 py-2 md:flex"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025))',
              border: '1px solid rgba(255,255,255,0.075)',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.05), 0 18px 45px rgba(0,0,0,0.18)',
            }}
          >
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href

              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative overflow-hidden rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: isActive ? '#070b15' : '#7f91ad' }}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.055, duration: 0.35 }}
                  whileHover={{
                    color: isActive ? '#070b15' : '#c9a84c',
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          'linear-gradient(135deg, #c9a84c 0%, #e0bc6a 52%, #7ba7bc 130%)',
                        boxShadow: '0 9px 32px rgba(201,168,76,0.32)',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}

                  {!isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-full opacity-0"
                      style={{
                        background:
                          'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.14), transparent 70%)',
                      }}
                      whileHover={{ opacity: 1 }}
                    />
                  )}

                  <motion.span
                    className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2"
                    style={{ background: '#c9a84c' }}
                    whileHover={{ width: '55%' }}
                    transition={{ duration: 0.25 }}
                  />

                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <motion.a
              href="#contact"
              className="group relative overflow-hidden rounded-full px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.18em]"
              style={{
                color: '#070b15',
                background: '#c9a84c',
                boxShadow: '0 10px 38px rgba(201,168,76,0.26)',
              }}
              whileHover={{
                y: -4,
                scale: 1.045,
                boxShadow: '0 18px 55px rgba(201,168,76,0.44)',
              }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.span
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.42) 45%, transparent 65%)',
                }}
                animate={{ x: ['-135%', '135%'] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                  ease: 'easeInOut',
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={14} />
                Hire Me
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ChevronRight size={14} />
                </motion.span>
              </span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full md:hidden"
            style={{
              color: '#c9a84c',
              background:
                'radial-gradient(circle at 35% 25%, rgba(255,255,255,0.14), transparent 24%), rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.32)',
              boxShadow: isOpen ? '0 0 35px rgba(201,168,76,0.24)' : 'none',
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            aria-label="Toggle navigation menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="x"
                  className="relative z-10"
                  initial={{ rotate: -120, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 120, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.22 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  className="relative z-10"
                  initial={{ rotate: 120, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -120, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.22 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden"
            >
              <div
                className="mb-5 overflow-hidden rounded-[2rem] p-3"
                style={{
                  background:
                    'radial-gradient(circle at 10% 0%, rgba(201,168,76,0.13), transparent 38%), linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025))',
                  border: '1px solid rgba(201,168,76,0.16)',
                  boxShadow: '0 24px 70px rgba(0,0,0,0.34)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className="mb-3 rounded-3xl px-4 py-4"
                  style={{
                    background: 'rgba(10,14,26,0.48)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Zap size={14} style={{ color: '#c9a84c' }} />
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.22em]"
                      style={{ color: '#c9a84c' }}
                    >
                      Space navigation
                    </span>
                  </div>
                </div>

                {navLinks.map((link) => {
                  const isActive = activeSection === link.href

                  return (
                    <motion.a
                      key={link.href}
                      variants={mobileItemVariants}
                      href={link.href}
                      className="relative mb-1 flex items-center justify-between overflow-hidden rounded-2xl px-4 py-4 text-xs font-bold uppercase tracking-[0.2em]"
                      style={{
                        color: isActive ? '#070b15' : '#8a9bb5',
                        background: isActive
                          ? 'linear-gradient(135deg, #c9a84c, #e0bc6a)'
                          : 'transparent',
                      }}
                      onClick={closeMenu}
                      whileHover={{
                        x: 8,
                        color: isActive ? '#070b15' : '#c9a84c',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {!isActive && (
                        <motion.span
                          className="absolute inset-0 opacity-0"
                          style={{
                            background:
                              'linear-gradient(90deg, rgba(201,168,76,0.09), transparent)',
                          }}
                          whileHover={{ opacity: 1 }}
                        />
                      )}

                      <span className="relative z-10">{link.label}</span>

                      <motion.span
                        className="relative z-10 h-1.5 w-1.5 rounded-full"
                        style={{
                          background: isActive ? '#070b15' : '#c9a84c',
                          opacity: isActive ? 1 : 0.45,
                        }}
                        animate={{
                          scale: isActive ? [1, 1.7, 1] : 1,
                          boxShadow: isActive
                            ? [
                                '0 0 0 rgba(10,14,26,0)',
                                '0 0 14px rgba(10,14,26,0.45)',
                                '0 0 0 rgba(10,14,26,0)',
                              ]
                            : '0 0 0 rgba(0,0,0,0)',
                        }}
                        transition={{ duration: 1.7, repeat: Infinity }}
                      />
                    </motion.a>
                  )
                })}

                <motion.a
                  variants={mobileItemVariants}
                  href="#contact"
                  className="mt-3 flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-[0.18em]"
                  style={{
                    color: '#070b15',
                    background: 'linear-gradient(135deg, #c9a84c, #e0bc6a)',
                    boxShadow: '0 16px 42px rgba(201,168,76,0.26)',
                  }}
                  onClick={closeMenu}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ y: -2 }}
                >
                  <Sparkles size={14} />
                  Hire Me
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ChevronRight size={14} />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
