'use client'
import { AnimatedGrid } from '../ui/animated-grid'
import { Reveal } from '../ui/reveal'
import { ExternalLink, Github, Linkedin, Sparkles } from 'lucide-react'
import Image from 'next/image'

const sectionStyle = {
  background:
    'radial-gradient(circle at 15% 18%, rgba(45,212,191,0.11), transparent 28%), radial-gradient(circle at 88% 28%, rgba(129,140,248,0.11), transparent 32%), linear-gradient(180deg, #05070c 0%, #080b13 45%, #0a0e16 100%)',
  fontFamily: "'DM Sans', sans-serif",
}

export function About() {
  const education = [
    {
      degree: "Master's in AI & Data Science",
      school: 'FST Tangier',
      period: '2025 - Present',
      logo: '/education/aids.jpeg',
      color: '#2dd4bf',
      points: ['AI, deep learning, data analytics', 'End-to-end ML pipelines'],
    },
    {
      degree: "Bachelor's in Distributed Systems (SIR)",
      school: 'FSTG Marrakech',
      period: '2024 - 2025',
      logo: '/education/sir.jpg',
      color: '#818cf8',
      points: ['Software engineering', 'Full-stack architecture'],
    },
    {
      degree: 'DEUST MIPC',
      school: 'FSTG Marrakech',
      period: '2021 - 2024',
      logo: '/education/mipc.jpg',
      color: '#6b7fa3',
      points: ['Math, programming, computation', 'Python, Java, C++'],
    },
    {
      degree: 'Baccalauréat — Physical Sciences',
      school: 'Lycée Elkindi',
      period: '2020 - 2021',
      logo: '/education/elkindi.png',
      color: '#4a5568',
      points: ['Physics, chemistry, mathematics'],
    },
  ]

  const languages = [
    { lang: 'Arabic', level: 'Native', pct: 100 },
    { lang: 'French', level: 'Fluent', pct: 85 },
    { lang: 'English', level: 'Intermediate', pct: 60 },
  ]

  const highlights = [
    { value: 'Full-stack', label: 'React · Next · Spring' },
    { value: 'AI / Data', label: 'ML · DL · Analytics' },
  ]

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-36" style={sectionStyle}>
      <AnimatedGrid opacity={0.045} maskPosition="50% 35%" />

      <div
        className="glow-beam glow-beam-drift-left -left-32 top-20 h-[520px] w-[280px]"
        style={{ background: 'linear-gradient(180deg, rgba(45,212,191,0.16), transparent)' }}
      />
      <div
        className="glow-beam glow-beam-drift-right -right-40 top-72 h-[560px] w-[340px]"
        style={{ background: 'linear-gradient(180deg, rgba(129,140,248,0.16), transparent)' }}
      />

      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(45,212,191,0.35), transparent)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top: compact about layout */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Reveal>
              <div
                className="mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2"
                style={{ background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.22)', color: '#2dd4bf' }}
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-black uppercase tracking-[0.3em]">About</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                className="font-black uppercase leading-[0.9] text-white"
                style={{ fontSize: 'clamp(3.8rem, 9vw, 7rem)', letterSpacing: '-0.07em', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                More than
                <br />
                <span style={{ color: '#2dd4bf' }}>code.</span>
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-base leading-8 sm:text-lg" style={{ color: '#8a9bb5' }}>
                Full-stack developer and AI/Data Science student building clean apps, smart systems,
                and useful digital experiences.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/imad-elmiri-495900335/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine-on-hover lift-hover flex items-center gap-2 rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.18em] transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.04] active:scale-95"
                  style={{ background: '#2dd4bf', color: '#05070c', boxShadow: '0 18px 45px rgba(45,212,191,0.24)' }}
                >
                  <Linkedin className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">LinkedIn</span>
                </a>

                <a
                  href="/api/cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift-hover flex items-center gap-2 rounded-full border px-6 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.035] active:scale-95"
                  style={{ color: '#2dd4bf', borderColor: 'rgba(45,212,191,0.4)', background: 'rgba(255,255,255,0.025)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(45,212,191,0.08)'; e.currentTarget.style.borderColor = '#2dd4bf' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.025)'; e.currentTarget.style.borderColor = 'rgba(45,212,191,0.4)' }}
                >
                  <ExternalLink className="h-4 w-4" />
                  View CV
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right feature cards */}
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <Reveal key={item.value} delay={index * 100}>
                <div
                  className="shine-on-hover lift-hover group relative rounded-[1.7rem] p-6 transition-colors duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(45,212,191,0.13)',
                    boxShadow: '0 24px 70px rgba(0,0,0,0.22)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(45,212,191,0.44)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(45,212,191,0.13)')}
                >
                  <div className="relative z-10 flex items-center justify-between gap-6">
                    <div>
                      <p
                        className="text-2xl font-black"
                        style={{ color: index === 1 ? '#818cf8' : '#2dd4bf', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                      >
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm" style={{ color: '#8a9bb5' }}>
                        {item.label}
                      </p>
                    </div>
                    <div
                      className="pulse-soft flex h-12 w-12 items-center justify-center rounded-full"
                      style={{ background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.18)', color: '#2dd4bf' }}
                    >
                      {index === 0 ? <Github className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {languages.map(({ lang, level, pct }, index) => (
            <Reveal key={lang} delay={index * 100}>
              <div
                className="lift-hover relative rounded-3xl p-5 transition-colors duration-300"
                style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(45,212,191,0.42)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-black text-white">{lang}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: '#2dd4bf' }}>
                    {level}
                  </span>
                </div>
                <div className="h-1 overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <Reveal
                    variant="bar"
                    delay={150 + index * 100}
                    className="bar-fill h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #2dd4bf, #818cf8)', ['--pct' as string]: `${pct}%` }}
                  >
                    <span />
                  </Reveal>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education Timeline */}
        <Reveal>
          <div className="mb-6 mt-28 text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <div className="h-px w-16" style={{ background: 'rgba(45,212,191,0.3)' }} />
              <span className="text-xs font-black uppercase tracking-[0.35em]" style={{ color: '#2dd4bf' }}>
                Education Path
              </span>
              <div className="h-px w-16" style={{ background: 'rgba(45,212,191,0.3)' }} />
            </div>
            <h3
              className="font-black uppercase text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.05em', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Learning timeline
            </h3>
          </div>
        </Reveal>

        {/* Alternating Timeline */}
        <div className="relative mt-16">
          <div
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 origin-top scale-y-100 transition-transform duration-[1400ms] ease-out lg:block"
            style={{ background: 'linear-gradient(to bottom, rgba(45,212,191,0.55), rgba(129,140,248,0.25), rgba(45,212,191,0.04))' }}
          />

          <div className="space-y-12">
            {education.map(({ degree, school, period, logo, color, points }, i) => {
              const isLeft = i % 2 === 0

              return (
                <Reveal key={degree} variant={isLeft ? 'left' : 'right'} delay={i * 80}>
                  <div className="relative grid items-center gap-8 lg:grid-cols-2">
                    <div className={isLeft ? 'lg:text-right' : 'lg:order-2'}>
                      <div
                        className="shine-on-hover lift-hover group relative inline-block w-full rounded-[1.6rem] p-7 transition-transform duration-300 hover:scale-[1.015]"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018))',
                          border: `1px solid ${color}26`,
                          boxShadow: '0 24px 70px rgba(0,0,0,0.22)',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${color}75`)}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${color}26`)}
                      >
                        <div className="relative z-10">
                          <p className="mb-2 text-xs font-black uppercase tracking-widest" style={{ color }}>
                            {period}
                          </p>
                          <h4 className="mb-1 text-xl font-black text-white" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            {degree}
                          </h4>
                          <p className="mb-4 text-sm" style={{ color: '#5a6880' }}>
                            {school}
                          </p>

                          <div className={`flex flex-wrap gap-2 ${isLeft ? 'lg:justify-end' : ''}`}>
                            {points.map((p) => (
                              <span
                                key={p}
                                className="rounded-full px-3 py-1 text-[11px] font-bold"
                                style={{ color, background: `${color}10`, border: `1px solid ${color}26` }}
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center logo badge */}
                    <div className="lift-hover absolute left-1/2 z-10 hidden -translate-x-1/2 items-center justify-center hover:scale-[1.15] hover:rotate-6 lg:flex">
                      <div
                        className="pulse-soft absolute h-24 w-24 rounded-full"
                        style={{ background: `radial-gradient(circle, ${color}22, transparent 68%)`, animationDelay: `${i * 0.2}s` }}
                      />
                      <div
                        className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full"
                        style={{ background: '#05070c', border: `2px solid ${color}`, boxShadow: `0 0 28px ${color}50` }}
                      >
                        <Image src={logo} alt={`${degree} logo`} width={48} height={48} className="h-12 w-12 rounded-full object-contain" />
                      </div>
                    </div>

                    <div className={isLeft ? 'hidden lg:block' : 'hidden lg:block lg:order-1'} />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(45,212,191,0.15), transparent)' }} />
    </section>
  )
}
