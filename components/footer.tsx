'use client'

import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Rocket, Sparkles } from 'lucide-react'
import { Reveal } from './ui/reveal'

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
          'radial-gradient(circle at 20% 10%, rgba(45,212,191,0.11), transparent 30%), radial-gradient(circle at 82% 35%, rgba(129,140,248,0.1), transparent 34%), linear-gradient(180deg, #060910 0%, #04060b 100%)',
        borderTop: '1px solid rgba(45,212,191,0.14)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        className="pulse-soft absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(45,212,191,0.9), rgba(129,140,248,0.5), transparent)' }}
      />

      <div
        className="pulse-ghost pointer-events-none absolute left-1/2 top-20 hidden -translate-x-1/2 select-none text-[15vw] font-black uppercase leading-none lg:block"
        style={{ color: 'transparent', WebkitTextStroke: '1px rgba(45,212,191,0.045)', letterSpacing: '-0.08em', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        ELMIRI
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="py-16 sm:py-20">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.022))',
                border: '1px solid rgba(45,212,191,0.14)',
                boxShadow: '0 35px 110px rgba(0,0,0,0.34)',
              }}
            >
              <div
                className="pulse-soft absolute inset-0 opacity-50"
                style={{ background: 'radial-gradient(circle at 12% 0%, rgba(45,212,191,0.13), transparent 35%)' }}
              />

              <div className="relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.75fr_1fr]">
                {/* Brand */}
                <div>
                  <div className="mb-7 flex items-center gap-4">
                    <div
                      className="shine-on-hover lift-hover relative flex h-14 w-14 items-center justify-center rounded-2xl text-base font-black transition-transform duration-300 hover:scale-110 hover:-rotate-6"
                      style={{ color: '#2dd4bf', border: '1px solid rgba(45,212,191,0.45)', background: 'rgba(45,212,191,0.08)', letterSpacing: '0.05em', boxShadow: '0 0 32px rgba(45,212,191,0.13)' }}
                    >
                      <span className="relative z-10">IE</span>
                    </div>

                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.24em]" style={{ color: '#e2e8f0' }}>Imad Elmiri</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: '#52647d' }}>Full-stack · AI/Data</p>
                    </div>
                  </div>

                  <p className="max-w-md text-sm leading-7" style={{ color: '#7b8da7' }}>
                    Building scalable applications, cinematic interfaces, and intelligent systems with
                    clean engineering and data-driven thinking.
                  </p>

                  <div className="mt-8 flex gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }, index) => (
                      <Reveal key={label} variant="scale" delay={index * 60}>
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="shine-on-hover lift-hover flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:-rotate-6 active:scale-95"
                          style={{ color: '#65768f', borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = '#2dd4bf'; e.currentTarget.style.borderColor = 'rgba(45,212,191,0.58)' }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = '#65768f'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                        >
                          <Icon size={17} className="relative z-10" />
                        </a>
                      </Reveal>
                    ))}
                  </div>
                </div>

                {/* Quick links */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-px w-8" style={{ background: '#2dd4bf' }} />
                    <span className="text-xs font-black uppercase tracking-[0.26em]" style={{ color: '#2dd4bf' }}>Navigation</span>
                  </div>

                  <ul className="space-y-3">
                    {quickLinks.map(({ label, href }, index) => (
                      <Reveal key={label} as="li" variant="left" delay={index * 60}>
                        <a href={href} className="group flex items-center gap-3 text-sm font-bold transition-colors duration-300 hover:text-[#2dd4bf] hover:translate-x-1.5" style={{ color: '#65768f' }}>
                          <span className="h-px w-0 transition-all duration-300 group-hover:w-[18px]" style={{ background: '#2dd4bf' }} />
                          {label}
                        </a>
                      </Reveal>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-px w-8" style={{ background: '#2dd4bf' }} />
                    <span className="text-xs font-black uppercase tracking-[0.26em]" style={{ color: '#2dd4bf' }}>Contact</span>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                      <Reveal key={label} delay={index * 70}>
                        <div
                          className="lift-hover group rounded-2xl p-4 transition-colors duration-300 hover:-translate-y-1"
                          style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.055)' }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(45,212,191,0.34)'; e.currentTarget.style.backgroundColor = 'rgba(45,212,191,0.045)' }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.055)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.025)' }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ color: '#2dd4bf', background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.14)' }}>
                              <Icon size={16} />
                            </div>
                            <div>
                              <p className="mb-1 text-[10px] font-black uppercase tracking-[0.22em]" style={{ color: '#3a4a5e' }}>{label}</p>
                              {href ? (
                                <a href={href} className="text-sm font-bold transition-colors duration-300" style={{ color: '#7b8da7' }}>{value}</a>
                              ) : (
                                <p className="text-sm font-bold" style={{ color: '#7b8da7' }}>{value}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-4 py-7 sm:flex-row" style={{ borderTop: '1px solid rgba(255,255,255,0.055)' }}>
            <p className="text-xs" style={{ color: '#3a4a5e' }}>&copy; {currentYear} Imad Elmiri. All rights reserved.</p>

            <a
              href="#hero"
              className="lift-hover group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] transition-transform duration-300 hover:-translate-y-1"
              style={{ color: '#2dd4bf', background: 'rgba(45,212,191,0.06)', border: '1px solid rgba(45,212,191,0.16)' }}
            >
              <Rocket size={14} />
              Back to top
            </a>

            <p className="flex items-center gap-2 text-xs" style={{ color: '#3a4a5e' }}>
              Built with Next.js
              <Sparkles size={13} style={{ color: '#2dd4bf' }} />
              Tailwind CSS
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
