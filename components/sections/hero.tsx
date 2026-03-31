'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Instagram } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #0a0e1a 0%, #0d1526 50%, #0a1020 100%)',
        fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Soft radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(ellipse, #c9a84c 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">

          {/* Left Content - takes 3 cols */}
          <div className="lg:col-span-3 space-y-10">
            {/* Eyebrow line */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12" style={{ background: '#c9a84c' }} />
              <span
                className="text-xs font-semibold uppercase tracking-[0.35em]"
                style={{ color: '#c9a84c', fontFamily: "'DM Sans', sans-serif" }}
              >
                Full-Stack Developer · AI Engineer
              </span>
            </div>

            {/* Name */}
            <div>
              <h1
                className="font-bold leading-none text-white"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}
              >
                Imad
                <br />
                <span style={{ color: '#c9a84c' }}>Elmiri</span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: '#8a9bb5', fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              Building scalable web applications and intelligent data-driven solutions.
              Bridging the gap between elegant engineering and real-world impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-3 px-8 py-4 font-semibold text-sm uppercase tracking-widest transition-all duration-300"
                style={{
                  background: '#c9a84c',
                  color: '#0a0e1a',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.12em',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#e0bc6a')}
                onMouseLeave={e => (e.currentTarget.style.background = '#c9a84c')}
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="/api/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 font-semibold text-sm uppercase tracking-widest transition-all duration-300 border"
                style={{
                  color: '#c9a84c',
                  borderColor: 'rgba(201,168,76,0.4)',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.12em',
                  background: 'transparent',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(201,168,76,0.08)';
                  e.currentTarget.style.borderColor = '#c9a84c';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                }}
              >
                <ExternalLink className="w-4 h-4" />
                View CV
              </a>
            </div>

            {/* Divider + Socials */}
            <div className="pt-8" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
              <div className="flex items-center gap-6">
                <span
                  className="text-xs uppercase tracking-[0.25em]"
                  style={{ color: '#4a5568', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Connect
                </span>
                {[
                  { href: 'https://www.linkedin.com/in/imad-elmiri-495900335/', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
                  { href: 'https://github.com/imadelmiri12', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
                  { href: 'https://www.instagram.com/imad_elmiri', icon: <Instagram className="w-4 h-4" />, label: 'Instagram' },
                  { href: 'mailto:imadmiri12@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'Email' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    title={label}
                    className="w-10 h-10 flex items-center justify-center transition-all duration-300 border"
                    style={{ color: '#6b7fa3', borderColor: 'rgba(107,127,163,0.3)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#c9a84c';
                      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)';
                      e.currentTarget.style.background = 'rgba(201,168,76,0.06)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#6b7fa3';
                      e.currentTarget.style.borderColor = 'rgba(107,127,163,0.3)';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Profile Image takes 2 cols */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Corner decorations */}
              <div
                className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2"
                style={{ borderColor: '#c9a84c' }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2"
                style={{ borderColor: '#c9a84c' }}
              />

              <div
                className="relative overflow-hidden"
                style={{
                  width: '320px',
                  height: '420px',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Imad Elmiri"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,14,26,0.5) 0%, transparent 60%)' }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -left-8 px-5 py-3"
                style={{ background: '#0d1526', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                <p className="text-xs uppercase tracking-widest" style={{ color: '#c9a84c', fontFamily: "'DM Sans', sans-serif" }}>
                  Seeking PFA Internship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em]" style={{ color: '#3a4a5e', fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
        <div className="w-px h-12 overflow-hidden" style={{ background: 'rgba(201,168,76,0.15)' }}>
          <div
            className="w-full h-1/2"
            style={{
              background: '#c9a84c',
              animation: 'scrollLine 1.8s ease-in-out infinite',
            }}
          />
        </div>
        <style>{`
          @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
        `}</style>
      </div>
    </section>
  );
}