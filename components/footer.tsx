'use client'

import { Github, Linkedin, Mail, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github,    href: 'https://github.com/imadelmiri12',                      label: 'GitHub' },
    { icon: Linkedin,  href: 'https://www.linkedin.com/in/imad-elmiri-495900335/',   label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/imad_elmiri',               label: 'Instagram' },
    { icon: Mail,      href: 'mailto:imadmiri12@gmail.com',                          label: 'Email' },
  ]

  const quickLinks = [
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact',    href: '#contact' },
  ]

  return (
    <footer
      style={{
        background: '#080c16',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Main content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="flex h-9 w-9 items-center justify-center text-sm font-bold"
                style={{
                  color: '#c9a84c',
                  border: '1px solid rgba(201,168,76,0.4)',
                  background: 'rgba(201,168,76,0.06)',
                  letterSpacing: '0.05em',
                }}
              >
                IE
              </div>
              <span
                className="font-semibold text-sm uppercase tracking-widest"
                style={{ color: '#e2e8f0', letterSpacing: '0.15em' }}
              >
                Imad Elmiri
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-8" style={{ color: '#4a5568', lineHeight: 1.9 }}>
              Full-Stack Developer & AI/Data Science student building scalable applications and intelligent systems.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-300"
                  style={{ color: '#4a5568', border: '1px solid rgba(255,255,255,0.06)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#c9a84c'
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
                    e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#4a5568'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6" style={{ background: '#c9a84c' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#c9a84c' }}>
                Navigation
              </span>
            </div>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-200 flex items-center gap-3 group"
                    style={{ color: '#4a5568' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#4a5568')}
                  >
                    <span
                      className="w-0 h-px transition-all duration-300 group-hover:w-4"
                      style={{ background: '#c9a84c', display: 'inline-block' }}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6" style={{ background: '#c9a84c' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#c9a84c' }}>
                Contact
              </span>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Email',    value: 'imadmiri12@gmail.com',   href: 'mailto:imadmiri12@gmail.com' },
                { label: 'Phone',    value: '+212 658 961 770',        href: 'tel:+212658961770' },
                { label: 'Location', value: 'Tanger, Morocco',         href: null },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#2d3748' }}>{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: '#4a5568' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#4a5568')}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm" style={{ color: '#4a5568' }}>{value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p className="text-xs" style={{ color: '#2d3748' }}>
            &copy; {currentYear} Imad Elmiri. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#2d3748' }}>
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}