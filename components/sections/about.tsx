'use client'
import { SectionBackground } from './SectionBackground'
import { ExternalLink, Github, Linkedin, Sparkles } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

const sectionStyle = {
  background:
    'radial-gradient(circle at 15% 18%, rgba(201,168,76,0.12), transparent 28%), radial-gradient(circle at 88% 28%, rgba(123,167,188,0.12), transparent 32%), linear-gradient(180deg, #070b15 0%, #0a0e1a 45%, #0d1526 100%)',
  fontFamily: "'DM Sans', sans-serif",
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

export function About() {
  const education = [
    {
      degree: "Master's in AI & Data Science",
      school: 'FST Tangier',
      period: '2025 - Present',
      logo: '/education/aids.jpeg',
      color: '#c9a84c',
      points: ['AI, deep learning, data analytics', 'End-to-end ML pipelines'],
    },
    {
      degree: "Bachelor's in Distributed Systems (SIR)",
      school: 'FSTG Marrakech',
      period: '2024 - 2025',
      logo: '/education/sir.jpg',
      color: '#7ba7bc',
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
        <SectionBackground />
      {/* animated background grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.7) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(circle at 50% 35%, black, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 35%, black, transparent 72%)',
        }}
        animate={{ backgroundPosition: ['0px 0px', '72px 72px'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />

      {/* cinematic glow beams */}
      <motion.div
        className="absolute -left-32 top-20 h-[520px] w-[280px] rotate-12 blur-3xl"
        style={{ background: 'linear-gradient(180deg, rgba(201,168,76,0.16), transparent)' }}
        animate={{ x: [0, 70, 0], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-40 top-72 h-[560px] w-[340px] -rotate-12 blur-3xl"
        style={{ background: 'linear-gradient(180deg, rgba(123,167,188,0.16), transparent)' }}
        animate={{ x: [0, -60, 0], opacity: [0.3, 0.75, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top: new compact about layout */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left title */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2"
              style={{
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.22)',
                color: '#c9a84c',
              }}
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">About</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-black uppercase leading-[0.9] text-white"
              style={{
                fontSize: 'clamp(3.8rem, 9vw, 7rem)',
                letterSpacing: '-0.07em',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              More than
              <br />
              <span style={{ color: '#c9a84c' }}>code.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-base leading-8 sm:text-lg"
              style={{ color: '#8a9bb5' }}
            >
              Full-stack developer and AI/Data Science student building clean apps, smart systems,
              and useful digital experiences.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="https://www.linkedin.com/in/imad-elmiri-495900335/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.18em]"
                style={{
                  background: '#c9a84c',
                  color: '#070b15',
                  boxShadow: '0 18px 45px rgba(201,168,76,0.24)',
                }}
                whileHover={{ y: -5, scale: 1.04, boxShadow: '0 26px 65px rgba(201,168,76,0.36)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.42) 45%, transparent 65%)',
                  }}
                  animate={{ x: ['-140%', '140%'] }}
                  transition={{ duration: 2.3, repeat: Infinity, repeatDelay: 0.9, ease: 'easeInOut' }}
                />
                <Linkedin className="relative z-10 h-4 w-4" />
                <span className="relative z-10">LinkedIn</span>
              </motion.a>

              <motion.a
                href="/api/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border px-6 py-3 text-xs font-black uppercase tracking-[0.18em]"
                style={{
                  color: '#c9a84c',
                  borderColor: 'rgba(201,168,76,0.4)',
                  background: 'rgba(255,255,255,0.025)',
                }}
                whileHover={{ y: -5, scale: 1.035, backgroundColor: 'rgba(201,168,76,0.08)', borderColor: '#c9a84c' }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-4 w-4" />
                View CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right feature cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.value}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[1.7rem] p-6"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
                  border: '1px solid rgba(201,168,76,0.13)',
                  boxShadow: '0 24px 70px rgba(0,0,0,0.22)',
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: 'rgba(201,168,76,0.44)',
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(115deg, transparent 0%, rgba(201,168,76,0.1) 45%, transparent 70%)',
                  }}
                  animate={{ x: ['-140%', '140%'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="relative z-10 flex items-center justify-between gap-6">
                  <div>
                    <p
                      className="text-2xl font-black"
                      style={{
                        color: index === 1 ? '#7ba7bc' : '#c9a84c',
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm" style={{ color: '#8a9bb5' }}>
                      {item.label}
                    </p>
                  </div>
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{
                      background: 'rgba(201,168,76,0.08)',
                      border: '1px solid rgba(201,168,76,0.18)',
                      color: '#c9a84c',
                    }}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.25 }}
                  >
                    {index === 0 ? <Github className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Languages: compact stylish pills */}
        <motion.div
          className="mt-20 grid gap-4 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {languages.map(({ lang, level, pct }, index) => (
            <motion.div
              key={lang}
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl p-5"
              style={{
                background: 'rgba(255,255,255,0.035)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              whileHover={{ y: -6, borderColor: 'rgba(201,168,76,0.42)' }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-black text-white">{lang}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: '#c9a84c' }}>
                  {level}
                </span>
              </div>
              <div className="h-1 overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #c9a84c, #7ba7bc)' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.15, delay: index * 0.12, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="mb-6 mt-28 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-16" style={{ background: 'rgba(201,168,76,0.3)' }} />
            <span
              className="text-xs font-black uppercase tracking-[0.35em]"
              style={{ color: '#c9a84c' }}
            >
              Education Path
            </span>
            <div className="h-px w-16" style={{ background: 'rgba(201,168,76,0.3)' }} />
          </div>
          <h3
            className="font-black uppercase text-white"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              letterSpacing: '-0.05em',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Learning timeline
          </h3>
        </motion.div>

        {/* Alternating Timeline */}
        <div className="relative mt-16">
          <motion.div
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 lg:block"
            style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.55), rgba(123,167,188,0.25), rgba(201,168,76,0.04))' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />

          <div className="space-y-12">
            {education.map(({ degree, school, period, logo, color, points }, i) => {
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={degree}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                  className="relative grid items-center gap-8 lg:grid-cols-2"
                >
                  <div className={isLeft ? 'lg:text-right' : 'lg:order-2'}>
                    <motion.div
                      className="group relative inline-block w-full overflow-hidden rounded-[1.6rem] p-7"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018))',
                        border: `1px solid ${color}26`,
                        boxShadow: '0 24px 70px rgba(0,0,0,0.22)',
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.015,
                        borderColor: `${color}75`,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: `linear-gradient(115deg, transparent 0%, ${color}18 45%, transparent 70%)`,
                        }}
                        animate={{ x: ['-140%', '140%'] }}
                        transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
                      />

                      <div className="relative z-10">
                        <p className="mb-2 text-xs font-black uppercase tracking-widest" style={{ color }}>
                          {period}
                        </p>
                        <h4
                          className="mb-1 text-xl font-black text-white"
                          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                        >
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
                              style={{
                                color,
                                background: `${color}10`,
                                border: `1px solid ${color}26`,
                              }}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center logo badge */}
                  <motion.div
                    className="absolute left-1/2 z-10 hidden -translate-x-1/2 items-center justify-center lg:flex"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <motion.div
                      className="absolute h-24 w-24 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${color}22, transparent 68%)`,
                      }}
                      animate={{ scale: [0.85, 1.25, 0.85], opacity: [0.45, 1, 0.45] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    />
                    <div
                      className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full"
                      style={{
                        background: '#0a0e1a',
                        border: `2px solid ${color}`,
                        boxShadow: `0 0 28px ${color}50`,
                      }}
                    >
                      <img
                        src={logo}
                        alt={`${degree} logo`}
                        className="h-12 w-12 rounded-full object-contain"
                      />
                    </div>
                  </motion.div>

                  <div className={isLeft ? 'hidden lg:block' : 'hidden lg:block lg:order-1'} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)',
        }}
      />
    </section>
  )
}
