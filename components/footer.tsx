'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/imadelmiri12', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/imad-elmiri-495900335/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:imadmiri12@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative border-t border-primary/20 bg-gradient-dark overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid gap-12 md:grid-cols-3">
          {/* About */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-vibrant text-foreground font-bold">
                IE
              </div>
              <span className="font-bold text-lg text-foreground">Imad Elmiri</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Full-stack developer & AI/Data Science enthusiast, crafting innovative digital solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-primary/20 hover:bg-primary/40 text-primary transition-all duration-300 transform hover:scale-125"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in [animation-delay:100ms]">
            <h3 className="font-bold text-foreground mb-6 text-lg">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-3 group font-medium"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-vibrant opacity-0 group-hover:opacity-100 transition-all"></span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/20 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="font-semibold">© {currentYear} Imad Elmiri. All rights reserved.</p>
          <p className="font-medium">Crafted with passion & modern web technologies.</p>
        </div>
      </div>
    </footer>
  )
}
