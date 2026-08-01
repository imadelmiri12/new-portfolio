'use client'
import { AnimatedGrid } from '../ui/animated-grid'
import Image from 'next/image'
import {
  ArrowRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react'

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const socials = [
    { href: 'https://www.linkedin.com/in/imad-elmiri-495900335/', icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn' },
    { href: 'https://github.com/imadelmiri12', icon: <Github className="h-4 w-4" />, label: 'GitHub' },
    { href: 'https://www.instagram.com/imad_elmiri', icon: <Instagram className="h-4 w-4" />, label: 'Instagram' },
    { href: 'mailto:imadmiri12@gmail.com', icon: <Mail className="h-4 w-4" />, label: 'Email' },
  ]

  const floatingSkills = ['Next.js', 'Spring', 'TensorFlow', 'AI', 'React', 'SQL']
  const miniStats = [
    { value: '6+', label: 'Projects' },
    { value: '2nd', label: 'Hackathon' },
    { value: 'AI', label: 'Focus' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-20"
      style={{
        background:
          'radial-gradient(circle at 15% 20%, rgba(45,212,191,0.13), transparent 28%), radial-gradient(circle at 85% 25%, rgba(129,140,248,0.13), transparent 32%), linear-gradient(135deg, #05070c 0%, #080b13 45%, #0a0e16 100%)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Animated grid */}
      <AnimatedGrid maskPosition="50% 45%" />

      {/* Big ghost background word */}
      <div
        className="pulse-ghost pointer-events-none absolute left-1/2 top-[52%] hidden -translate-x-1/2 -translate-y-1/2 select-none text-[18vw] font-black uppercase leading-none lg:block"
        style={{
          color: 'transparent',
          WebkitTextStroke: '1px rgba(45,212,191,0.06)',
          letterSpacing: '-0.08em',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        IMAD
      </div>

      {/* Moving gradient beams */}
      <div
        className="glow-beam glow-beam-drift-left -left-40 top-10 h-[760px] w-[420px] rotate-12"
        style={{ background: 'linear-gradient(180deg, rgba(45,212,191,0.16), rgba(129,140,248,0.08), transparent)' }}
      />
      <div
        className="glow-beam glow-beam-drift-right -right-32 bottom-0 h-[680px] w-[420px] -rotate-12"
        style={{ background: 'linear-gradient(180deg, rgba(129,140,248,0.16), rgba(45,212,191,0.08), transparent)' }}
      />

      {/* Elegant scan line */}
      <div
        className="pulse-soft pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{ background: 'linear-gradient(to bottom, rgba(45,212,191,0.08), transparent)' }}
      />

      {/* Floating background labels */}
      {['{ code }', 'machine learning', '<portfolio />', 'data science'].map((item, index) => (
        <span
          key={item}
          className="pulse-soft pointer-events-none absolute hidden text-[11px] font-bold uppercase tracking-[0.35em] md:block"
          style={{
            left: `${8 + index * 24}%`,
            top: `${18 + (index % 2) * 58}%`,
            color: index % 2 === 0 ? 'rgba(45,212,191,0.2)' : 'rgba(129,140,248,0.19)',
            animationDelay: `${index * 0.4}s`,
          }}
        >
          {item}
        </span>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-16 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Text side */}
          <div className="relative z-20">
            <div
              className="hero-up mb-7 inline-flex items-center gap-3 rounded-full px-4 py-2"
              style={{
                background: 'rgba(45,212,191,0.08)',
                border: '1px solid rgba(45,212,191,0.24)',
                color: '#2dd4bf',
                boxShadow: '0 0 28px rgba(45,212,191,0.08)',
                ['--hero-delay' as string]: '0ms',
              }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: 'rgba(45,212,191,0.13)' }}>
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.28em]">Full-Stack Developer · AI Engineer</span>
            </div>

            <div className="hero-up relative" style={{ ['--hero-delay' as string]: '120ms' }}>
              <h1
                className="font-black uppercase leading-[0.84]"
                style={{
                  fontSize: 'clamp(4.8rem, 12vw, 10.5rem)',
                  letterSpacing: '-0.09em',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                <span className="block text-white transition-transform duration-300 hover:translate-x-2">Imad</span>
                <span
                  className="relative block transition-transform duration-300 hover:translate-x-2"
                  style={{ color: '#2dd4bf', textShadow: '0 0 34px rgba(45,212,191,0.2)' }}
                >
                  Elmiri
                  <span
                    className="pulse-soft absolute -bottom-4 left-2 h-[3px] w-[88%]"
                    style={{ background: 'linear-gradient(90deg, transparent, #2dd4bf, #818cf8, transparent)' }}
                  />
                </span>
              </h1>
            </div>

            <p
              className="hero-up mt-10 max-w-2xl text-base leading-8 sm:text-lg"
              style={{ color: '#8a9bb5', fontWeight: 300, ['--hero-delay' as string]: '220ms' }}
            >
              I build cinematic web experiences, scalable full-stack systems, and intelligent AI
              solutions that turn real-world problems into clean, useful products.
            </p>

            <div className="hero-up mt-9 flex flex-wrap gap-4" style={{ ['--hero-delay' as string]: '320ms' }}>
              <button
                onClick={scrollToContact}
                className="shine-on-hover lift-hover group relative flex items-center gap-3 rounded-full px-8 py-4 text-sm font-black uppercase tracking-[0.16em] transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.04] active:scale-95"
                style={{ background: '#2dd4bf', color: '#05070c', boxShadow: '0 18px 55px rgba(45,212,191,0.28)' }}
              >
                <span className="relative z-10">Get in touch</span>
                <span className="relative z-10 inline-flex transition-transform duration-300 group-hover:translate-x-1.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>

              <a
                href="/api/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="lift-hover flex items-center gap-3 rounded-full border px-8 py-4 text-sm font-black uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.035] active:scale-95"
                style={{ color: '#2dd4bf', borderColor: 'rgba(45,212,191,0.4)', background: 'rgba(255,255,255,0.025)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(45,212,191,0.08)'; e.currentTarget.style.borderColor = '#2dd4bf' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.025)'; e.currentTarget.style.borderColor = 'rgba(45,212,191,0.4)' }}
              >
                <Download className="h-4 w-4" />
                View CV
              </a>
            </div>

            <div
              className="hero-up mt-10 flex flex-wrap items-center gap-5 border-t pt-7"
              style={{ borderColor: 'rgba(45,212,191,0.15)', ['--hero-delay' as string]: '420ms' }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.28em]" style={{ color: '#4a5568' }}>
                Connect
              </span>

              {socials.map(({ href, icon, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  title={label}
                  className="hero-scale-in shine-on-hover lift-hover relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:-rotate-6 active:scale-95"
                  style={{
                    color: '#6b7fa3',
                    borderColor: 'rgba(107,127,163,0.32)',
                    background: 'rgba(255,255,255,0.02)',
                    ['--hero-delay' as string]: `${500 + index * 70}ms`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#2dd4bf'; e.currentTarget.style.borderColor = 'rgba(45,212,191,0.68)'; e.currentTarget.style.boxShadow = '0 18px 38px rgba(45,212,191,0.18)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#6b7fa3'; e.currentTarget.style.borderColor = 'rgba(107,127,163,0.32)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <span className="relative z-10">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Image / visual side */}
          <div className="hero-pop relative mx-auto flex min-h-[540px] w-full max-w-[540px] items-center justify-center lg:mx-0 lg:justify-end" style={{ ['--hero-delay' as string]: '160ms' }}>
            {/* skill orbit labels */}
            <div className="spin-slow absolute h-[485px] w-[485px] rounded-full">
              {floatingSkills.map((skill, index) => {
                const angle = (index / floatingSkills.length) * 360
                return (
                  <span
                    key={skill}
                    className="absolute left-1/2 top-1/2 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em]"
                    style={{
                      transform: `rotate(${angle}deg) translateX(228px) rotate(-${angle}deg)`,
                      transformOrigin: '0 0',
                      color: index % 2 === 0 ? '#2dd4bf' : '#818cf8',
                      background: 'rgba(5,7,12,0.72)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.28)',
                    }}
                  >
                    {skill}
                  </span>
                )
              })}
            </div>

            <div
              className="spin-slow-reverse absolute h-[430px] w-[430px] rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, rgba(45,212,191,0.0), rgba(45,212,191,0.35), rgba(129,140,248,0.2), rgba(45,212,191,0.0))',
                filter: 'blur(1px)',
              }}
            />

            <div
              className="pulse-ghost absolute h-[370px] w-[370px] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.22), rgba(129,140,248,0.1), transparent 70%)' }}
            />

            {/* Mini floating stat cards */}
            {miniStats.map((stat, index) => {
              const positions = ['left-0 top-20', 'right-0 top-16', 'left-8 bottom-14']

              return (
                <div
                  key={stat.label}
                  className={`hero-scale-in lift-hover absolute z-30 hidden rounded-2xl px-4 py-3 backdrop-blur-xl hover:scale-105 md:block ${positions[index]}`}
                  style={{
                    background: 'rgba(5,7,12,0.74)',
                    border: '1px solid rgba(45,212,191,0.18)',
                    boxShadow: '0 18px 46px rgba(0,0,0,0.34)',
                    ['--hero-delay' as string]: `${700 + index * 100}ms`,
                  }}
                >
                  <p className="text-xl font-black leading-none" style={{ color: index === 1 ? '#818cf8' : '#2dd4bf' }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: '#6b7fa3' }}>
                    {stat.label}
                  </p>
                </div>
              )
            })}

            {/* Main profile card */}
            <div className="lift-hover relative z-20 hover:scale-[1.025]">
              <div
                className="pulse-ghost absolute -inset-5 rounded-[2.2rem] opacity-80 blur-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(45,212,191,0.26), rgba(129,140,248,0.14), transparent)' }}
              />

              <div
                className="spin-slow absolute -inset-[2px] rounded-[2.1rem]"
                style={{ background: 'conic-gradient(from 0deg, transparent, rgba(45,212,191,0.75), transparent, rgba(129,140,248,0.55), transparent)' }}
              />

              <div
                className="relative h-[520px] w-[340px] overflow-hidden rounded-[2rem] sm:w-[380px]"
                style={{ border: '1px solid rgba(45,212,191,0.32)', boxShadow: '0 35px 110px rgba(0,0,0,0.48)', background: '#0a0e16' }}
              >
                <Image src="/profile.jpg" alt="Imad Elmiri" fill priority sizes="(max-width: 640px) 340px, 380px" className="object-cover" />

                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(5,7,12,0.42) 0%, rgba(5,7,12,0.03) 52%, rgba(45,212,191,0.06) 100%)' }}
                />

                <div className="shine-sweep absolute inset-0" style={{ background: 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.18) 45%, transparent 65%)' }} />

                {/* animated corner lines */}
                <div className="pulse-soft absolute left-5 top-5 h-12 w-12 border-l-2 border-t-2" style={{ borderColor: '#2dd4bf' }} />
                <div className="pulse-soft absolute bottom-5 right-5 h-12 w-12 border-b-2 border-r-2" style={{ borderColor: '#818cf8', animationDelay: '1.4s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-up absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2" style={{ ['--hero-delay' as string]: '900ms' }}>
        <span className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: '#4a5568' }}>
          Scroll
        </span>
        <div className="h-12 w-px overflow-hidden" style={{ background: 'rgba(45,212,191,0.15)' }}>
          <div
            className="h-1/2 w-full animate-[scrollDrip_1.75s_ease-in-out_infinite]"
            style={{ background: 'linear-gradient(to bottom, #2dd4bf, #818cf8)' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDrip {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(210%); }
        }
      `}</style>
    </section>
  )
}
