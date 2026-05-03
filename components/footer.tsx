'use client'

import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Rocket, Sparkles } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import { SectionBackground } from '../components/sections/SectionBackground'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/imadelmiri12', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/imad-elmiri-495900335/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/imad_elmiri', label: 'Instagram' },
    { icon: Mail, href: 'mailto:imadmiri12@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'imadmiri12@gmail.com', href: 'mailto:imadmiri12@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+212 658 961 770', href: 'tel:+212658961770' },
    { icon: MapPin, label: 'Location', value: 'Tanger, Morocco', href: null },
  ]

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 20% 10%, rgba(201,168,76,0.12), transparent 30%), radial-gradient(circle at 82% 35%, rgba(123,167,188,0.11), transparent 34%), linear-gradient(180deg, #080c16 0%, #050812 100%)',
        borderTop: '1px solid rgba(201,168,76,0.16)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >

      {/* Top glowing divider */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(201,168,76,0.9), rgba(123,167,188,0.5), transparent)',
        }}
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Large ghost brand */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-20 hidden -translate-x-1/2 select-none text-[15vw] font-black uppercase leading-none lg:block"
        style={{
          color: 'transparent',
          WebkitTextStroke: '1px rgba(201,168,76,0.045)',
          letterSpacing: '-0.08em',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
        animate={{ opacity: [0.28, 0.72, 0.28], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        ELMIRI
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main card */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 sm:py-20"
        >
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.022))',
              border: '1px solid rgba(201,168,76,0.14)',
              boxShadow: '0 35px 110px rgba(0,0,0,0.34)',
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  'radial-gradient(circle at 12% 0%, rgba(201,168,76,0.14), transparent 35%)',
              }}
              animate={{ opacity: [0.25, 0.65, 0.25] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.75fr_1fr]">
              {/* Brand */}
              <motion.div variants={fadeUp}>
                <div className="mb-7 flex items-center gap-4">
                  <motion.div
                    className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl text-base font-black"
                    style={{
                      color: '#c9a84c',
                      border: '1px solid rgba(201,168,76,0.45)',
                      background: 'rgba(201,168,76,0.08)',
                      letterSpacing: '0.05em',
                      boxShadow: '0 0 32px rgba(201,168,76,0.13)',
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotate: -5,
                      boxShadow: '0 0 44px rgba(201,168,76,0.32)',
                    }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <motion.span
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.25) 45%, transparent 65%)',
                      }}
                      animate={{ x: ['-145%', '145%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.7, ease: 'easeInOut' }}
                    />
                    <span className="relative z-10">IE</span>
                  </motion.div>

                  <div>
                    <p
                      className="text-sm font-black uppercase tracking-[0.24em]"
                      style={{ color: '#e2e8f0' }}
                    >
                      Imad Elmiri
                    </p>
                    <p
                      className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em]"
                      style={{ color: '#52647d' }}
                    >
                      Full-stack · AI/Data
                    </p>
                  </div>
                </div>

                <p className="max-w-md text-sm leading-7" style={{ color: '#7b8da7' }}>
                  Building scalable applications, cinematic interfaces, and intelligent systems with
                  clean engineering and data-driven thinking.
                </p>

                <div className="mt-8 flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border"
                      style={{
                        color: '#65768f',
                        borderColor: 'rgba(255,255,255,0.08)',
                        background: 'rgba(255,255,255,0.02)',
                      }}
                      initial={{ opacity: 0, y: 14, scale: 0.85 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + index * 0.08 }}
                      whileHover={{
                        y: -7,
                        scale: 1.12,
                        rotate: -5,
                        color: '#c9a84c',
                        borderColor: 'rgba(201,168,76,0.58)',
                        boxShadow: '0 18px 38px rgba(201,168,76,0.18)',
                      }}
                      whileTap={{ scale: 0.94 }}
                    >
                      <motion.span
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.22) 45%, transparent 65%)',
                        }}
                        initial={{ x: '-135%' }}
                        whileHover={{ x: '135%' }}
                        transition={{ duration: 0.55 }}
                      />
                      <Icon size={17} className="relative z-10" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick links */}
              <motion.div variants={fadeUp}>
                <div className="mb-6 flex items-center gap-3">
                  <motion.div
                    className="h-px w-8 origin-left"
                    style={{ background: '#c9a84c' }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                  />
                  <span
                    className="text-xs font-black uppercase tracking-[0.26em]"
                    style={{ color: '#c9a84c' }}
                  >
                    Navigation
                  </span>
                </div>

                <ul className="space-y-3">
                  {quickLinks.map(({ label, href }, index) => (
                    <motion.li
                      key={label}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.18 + index * 0.07 }}
                    >
                      <motion.a
                        href={href}
                        className="group flex items-center gap-3 text-sm font-bold"
                        style={{ color: '#65768f' }}
                        whileHover={{ x: 7, color: '#c9a84c' }}
                      >
                        <motion.span
                          className="h-px w-0"
                          style={{ background: '#c9a84c' }}
                          whileHover={{ width: 18 }}
                          transition={{ duration: 0.25 }}
                        />
                        {label}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div variants={fadeUp}>
                <div className="mb-6 flex items-center gap-3">
                  <motion.div
                    className="h-px w-8 origin-left"
                    style={{ background: '#c9a84c' }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                  />
                  <span
                    className="text-xs font-black uppercase tracking-[0.26em]"
                    style={{ color: '#c9a84c' }}
                  >
                    Contact
                  </span>
                </div>

                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                    <motion.div
                      key={label}
                      className="group rounded-2xl p-4"
                      style={{
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.055)',
                      }}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.08 }}
                      whileHover={{
                        y: -4,
                        borderColor: 'rgba(201,168,76,0.34)',
                        backgroundColor: 'rgba(201,168,76,0.045)',
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl"
                          style={{
                            color: '#c9a84c',
                            background: 'rgba(201,168,76,0.08)',
                            border: '1px solid rgba(201,168,76,0.14)',
                          }}
                        >
                          <Icon size={16} />
                        </div>

                        <div>
                          <p
                            className="mb-1 text-[10px] font-black uppercase tracking-[0.22em]"
                            style={{ color: '#3a4a5e' }}
                          >
                            {label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              className="text-sm font-bold transition-colors duration-300"
                              style={{ color: '#7b8da7' }}
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="text-sm font-bold" style={{ color: '#7b8da7' }}>
                              {value}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col items-center justify-between gap-4 py-7 sm:flex-row"
          style={{ borderTop: '1px solid rgba(255,255,255,0.055)' }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className="text-xs" style={{ color: '#3a4a5e' }}>
            &copy; {currentYear} Imad Elmiri. All rights reserved.
          </p>

          <motion.a
            href="#hero"
            className="group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em]"
            style={{
              color: '#c9a84c',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.16)',
            }}
            whileHover={{
              y: -4,
              borderColor: 'rgba(201,168,76,0.45)',
              boxShadow: '0 16px 36px rgba(201,168,76,0.12)',
            }}
          >
            <Rocket size={14} />
            Back to top
          </motion.a>

          <p className="flex items-center gap-2 text-xs" style={{ color: '#3a4a5e' }}>
            Built with Next.js
            <Sparkles size={13} style={{ color: '#c9a84c' }} />
            Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
