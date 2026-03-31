'use client'

import { ExternalLink } from 'lucide-react'

const sectionStyle = {
  background: 'linear-gradient(180deg, #0a0e1a 0%, #0d1526 100%)',
  fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-36 relative overflow-hidden" style={sectionStyle}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: '#c9a84c' }} />
            <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: '#c9a84c', fontFamily: "'DM Sans', sans-serif" }}>
              About
            </span>
          </div>
          <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed" style={{ color: '#8a9bb5', fontFamily: "'DM Sans', sans-serif", fontWeight: 300, lineHeight: 1.9 }}>
              I'm a{' '}
              <span className="font-semibold" style={{ color: '#e2e8f0' }}>Full-Stack Developer</span> and{' '}
              <span className="font-semibold" style={{ color: '#e2e8f0' }}>AI/Data Science</span> student at FSTT Tanger.
              With a strong foundation in modern web development and growing expertise in machine learning,
              I create innovative solutions that bridge technology and real-world impact.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#8a9bb5', fontFamily: "'DM Sans', sans-serif", fontWeight: 300, lineHeight: 1.9 }}>
              My journey spans from building scalable web applications with{' '}
              <span className="font-semibold" style={{ color: '#c9a84c' }}>React & Next.js</span>{' '}
              to developing end-to-end ML pipelines. Currently, I focus on creating impactful applications
              that combine elegant design, robust architecture, and intelligent data-driven systems.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/imad-elmiri-495900335/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all duration-300"
                style={{
                  background: '#c9a84c',
                  color: '#0a0e1a',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.1em',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#e0bc6a')}
                onMouseLeave={e => (e.currentTarget.style.background = '#c9a84c')}
              >
                LinkedIn Profile
              </a>
              <a
                href="/api/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 border"
                style={{
                  color: '#c9a84c',
                  borderColor: 'rgba(201,168,76,0.4)',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.1em',
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
                <ExternalLink size={16} /> View CV
              </a>
            </div>
          </div>

          {/* Right - Cards */}
          <div className="space-y-6">
            {/* Education */}
            <div className="p-8" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.15)' }}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">📚</span>
                <h3 className="text-xl font-bold text-white" style={{ letterSpacing: '-0.01em' }}>Education</h3>
              </div>
              <div className="space-y-6">
                {[
                  { degree: 'Master AISD', school: 'FSTT Tanger', period: '2025 - Present', color: '#c9a84c' },
                  { degree: 'Licence SIR', school: 'FSTG Marrakech', period: '2024 - 2025', color: '#7ba7bc' },
                  { degree: 'DEUST MIPC', school: 'FSTG Marrakech', period: '2021 - 2024', color: '#6b7fa3' },
                ].map(({ degree, school, period, color }, i, arr) => (
                  <div
                    key={degree}
                    className="pb-6 last:pb-0"
                    style={i < arr.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.05)' } : {}}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-base" style={{ color, fontFamily: "'DM Sans', sans-serif" }}>{degree}</p>
                        <p className="text-sm mt-1" style={{ color: '#5a6880', fontFamily: "'DM Sans', sans-serif" }}>{school}</p>
                      </div>
                      <span className="text-xs px-3 py-1" style={{ color: '#5a6880', border: '1px solid rgba(255,255,255,0.07)', fontFamily: "'DM Sans', sans-serif" }}>
                        {period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages - corrected order and levels */}
            <div className="p-8" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.15)' }}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">🌐</span>
                <h3 className="text-xl font-bold text-white" style={{ letterSpacing: '-0.01em' }}>Languages</h3>
              </div>
              <div className="space-y-5">
                {[
                  { lang: 'Arabic',  level: 'Native',       pct: 100 },
                  { lang: 'French',  level: 'Fluent',        pct: 90  },
                  { lang: 'English', level: 'Intermediate',  pct: 60  },
                ].map(({ lang, level, pct }) => (
                  <div key={lang}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>{lang}</span>
                      <span className="text-xs uppercase tracking-widest" style={{ color: '#c9a84c', fontFamily: "'DM Sans', sans-serif" }}>{level}</span>
                    </div>
                    <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #c9a84c, #e0bc6a)', height: '1px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
    </section>
  )
}