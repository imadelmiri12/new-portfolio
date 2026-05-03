'use client'
import { SectionBackground } from './SectionBackground'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(12px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.86, rotate: 8, x: 50, filter: 'blur(16px)' },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const socials = [
    {
      href: 'https://www.linkedin.com/in/imad-elmiri-495900335/',
      icon: <Linkedin className="h-4 w-4" />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/imadelmiri12',
      icon: <Github className="h-4 w-4" />,
      label: 'GitHub',
    },
    {
      href: 'https://www.instagram.com/imad_elmiri',
      icon: <Instagram className="h-4 w-4" />,
      label: 'Instagram',
    },
    {
      href: 'mailto:imadmiri12@gmail.com',
      icon: <Mail className="h-4 w-4" />,
      label: 'Email',
    },
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
          'radial-gradient(circle at 15% 20%, rgba(201,168,76,0.14), transparent 28%), radial-gradient(circle at 85% 25%, rgba(123,167,188,0.14), transparent 32%), linear-gradient(135deg, #070b15 0%, #0a0e1a 45%, #0d1526 100%)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Animated luxury grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.65) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.65) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(circle at 50% 45%, black 0%, transparent 74%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 45%, black 0%, transparent 74%)',
        }}
        animate={{ backgroundPosition: ['0px 0px', '72px 72px'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />

      {/* Big animated background word */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[52%] hidden -translate-x-1/2 -translate-y-1/2 select-none text-[18vw] font-black uppercase leading-none lg:block"
        style={{
          color: 'transparent',
          WebkitTextStroke: '1px rgba(201,168,76,0.055)',
          letterSpacing: '-0.08em',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
        animate={{
          opacity: [0.35, 0.85, 0.35],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        IMAD
      </motion.div>

      {/* Moving gradient beams */}
      <motion.div
        className="absolute -left-40 top-10 h-[760px] w-[420px] rotate-12 blur-3xl"
        style={{
          background:
            'linear-gradient(180deg, rgba(201,168,76,0.16), rgba(123,167,188,0.08), transparent)',
        }}
        animate={{ x: [0, 80, 0], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -right-32 bottom-0 h-[680px] w-[420px] -rotate-12 blur-3xl"
        style={{
          background:
            'linear-gradient(180deg, rgba(123,167,188,0.16), rgba(201,168,76,0.08), transparent)',
        }}
        animate={{ x: [0, -70, 0], opacity: [0.3, 0.75, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Elegant scan lines */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background:
            'linear-gradient(to bottom, rgba(201,168,76,0.08), transparent)',
        }}
        animate={{ opacity: [0.25, 0.65, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating background labels */}
      {['{ code }', 'machine learning', '<portfolio />', 'data science'].map(
        (item, index) => (
          <motion.span
            key={item}
            className="pointer-events-none absolute hidden text-[11px] font-bold uppercase tracking-[0.35em] md:block"
            style={{
              left: `${8 + index * 24}%`,
              top: `${18 + (index % 2) * 58}%`,
              color:
                index % 2 === 0
                  ? 'rgba(201,168,76,0.19)'
                  : 'rgba(123,167,188,0.18)',
            }}
            animate={{
              y: [0, -22, 0],
              rotate: [0, index % 2 === 0 ? 4 : -4, 0],
              opacity: [0.25, 0.75, 0.25],
            }}
            transition={{
              duration: 4.5 + index,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.45,
            }}
          >
            {item}
          </motion.span>
        )
      )}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-16 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Text side */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative z-20"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-3 rounded-full px-4 py-2"
              style={{
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.22)',
                color: '#c9a84c',
                boxShadow: '0 0 28px rgba(201,168,76,0.08)',
              }}
            >
              <motion.span
                className="flex h-7 w-7 items-center justify-center rounded-full"
                style={{ background: 'rgba(201,168,76,0.12)' }}
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="h-3.5 w-3.5" />
              </motion.span>
              <span className="text-xs font-bold uppercase tracking-[0.28em]">
                Full-Stack Developer · AI Engineer
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <h1
                className="font-black uppercase leading-[0.84]"
                style={{
                  fontSize: 'clamp(4.8rem, 12vw, 10.5rem)',
                  letterSpacing: '-0.09em',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                <motion.span
                  className="block text-white"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  Imad
                </motion.span>

                <motion.span
                  className="relative block"
                  style={{
                    color: '#c9a84c',
                    textShadow: '0 0 34px rgba(201,168,76,0.18)',
                  }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  Elmiri
                  <motion.span
                    className="absolute -bottom-4 left-2 h-[3px] w-[88%]"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, #c9a84c, #7ba7bc, transparent)',
                    }}
                    animate={{
                      scaleX: [0.75, 1, 0.75],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-10 max-w-2xl text-base leading-8 sm:text-lg"
              style={{ color: '#8a9bb5', fontWeight: 300 }}
            >
              I build cinematic web experiences, scalable full-stack systems, and intelligent AI
              solutions that turn real-world problems into clean, useful products.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <motion.button
                onClick={scrollToContact}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-black uppercase tracking-[0.16em]"
                style={{
                  background: '#c9a84c',
                  color: '#070b15',
                  boxShadow: '0 18px 55px rgba(201,168,76,0.28)',
                }}
                whileHover={{
                  y: -6,
                  scale: 1.04,
                  boxShadow: '0 28px 75px rgba(201,168,76,0.42)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.45) 45%, transparent 65%)',
                  }}
                  animate={{ x: ['-140%', '140%'] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 0.8,
                    ease: 'easeInOut',
                  }}
                />
                <span className="relative z-10">Get in touch</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.15, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.button>

              <motion.a
                href="/api/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-3 overflow-hidden rounded-full border px-8 py-4 text-sm font-black uppercase tracking-[0.16em]"
                style={{
                  color: '#c9a84c',
                  borderColor: 'rgba(201,168,76,0.4)',
                  background: 'rgba(255,255,255,0.025)',
                }}
                whileHover={{
                  y: -6,
                  scale: 1.035,
                  backgroundColor: 'rgba(201,168,76,0.08)',
                  borderColor: '#c9a84c',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-4 w-4" />
                View CV
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-5 border-t pt-7"
              style={{ borderColor: 'rgba(201,168,76,0.14)' }}
            >
              <span
                className="text-xs font-bold uppercase tracking-[0.28em]"
                style={{ color: '#4a5568' }}
              >
                Connect
              </span>

              {socials.map(({ href, icon, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  title={label}
                  className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border"
                  style={{
                    color: '#6b7fa3',
                    borderColor: 'rgba(107,127,163,0.32)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                  initial={{ opacity: 0, y: 16, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.08 }}
                  whileHover={{
                    y: -7,
                    scale: 1.12,
                    rotate: -5,
                    color: '#c9a84c',
                    borderColor: 'rgba(201,168,76,0.68)',
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
                  <span className="relative z-10">{icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image / visual side */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="show"
            className="relative mx-auto flex min-h-[540px] w-full max-w-[540px] items-center justify-center lg:mx-0 lg:justify-end"
          >
            {/* skill orbit labels */}
            <motion.div
              className="absolute h-[485px] w-[485px] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
            >
              {floatingSkills.map((skill, index) => {
                const angle = (index / floatingSkills.length) * 360
                return (
                  <motion.span
                    key={skill}
                    className="absolute left-1/2 top-1/2 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em]"
                    style={{
                      transform: `rotate(${angle}deg) translateX(228px) rotate(-${angle}deg)`,
                      transformOrigin: '0 0',
                      color: index % 2 === 0 ? '#c9a84c' : '#7ba7bc',
                      background: 'rgba(10,14,26,0.72)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.28)',
                    }}
                  >
                    {skill}
                  </motion.span>
                )
              })}
            </motion.div>

            <motion.div
              className="absolute h-[430px] w-[430px] rounded-full"
              style={{
                background:
                  'conic-gradient(from 180deg, rgba(201,168,76,0.0), rgba(201,168,76,0.35), rgba(123,167,188,0.2), rgba(201,168,76,0.0))',
                filter: 'blur(1px)',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
              className="absolute h-[370px] w-[370px] rounded-full blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(201,168,76,0.2), rgba(123,167,188,0.1), transparent 70%)',
              }}
              animate={{
                scale: [0.9, 1.12, 0.9],
                opacity: [0.45, 0.9, 0.45],
              }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Mini floating stat cards instead of internship badge */}
            {miniStats.map((stat, index) => {
              const positions = [
                'left-0 top-20',
                'right-0 top-16',
                'left-8 bottom-14',
              ]

              return (
                <motion.div
                  key={stat.label}
                  className={`absolute z-30 hidden rounded-2xl px-4 py-3 backdrop-blur-xl md:block ${positions[index]}`}
                  style={{
                    background: 'rgba(10,14,26,0.74)',
                    border: '1px solid rgba(201,168,76,0.18)',
                    boxShadow: '0 18px 46px rgba(0,0,0,0.34)',
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    y: [0, -10, 0],
                    scale: 1,
                  }}
                  transition={{
                    opacity: { delay: 1.1 + index * 0.16, duration: 0.4 },
                    scale: { delay: 1.1 + index * 0.16, duration: 0.4 },
                    y: {
                      duration: 3 + index * 0.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.35,
                    },
                  }}
                  whileHover={{
                    scale: 1.08,
                    borderColor: 'rgba(201,168,76,0.48)',
                  }}
                >
                  <p
                    className="text-xl font-black leading-none"
                    style={{ color: index === 1 ? '#7ba7bc' : '#c9a84c' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: '#6b7fa3' }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}

            {/* Main profile card */}
            <motion.div
              className="relative z-20"
              whileHover={{ rotate: 0, scale: 1.025 }}
              initial={{ rotate: -3 }}
              animate={{ rotate: [-3, -1.2, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                className="absolute -inset-5 rounded-[2.2rem] opacity-80 blur-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(201,168,76,0.24), rgba(123,167,188,0.14), transparent)',
                }}
                animate={{
                  opacity: [0.45, 0.9, 0.45],
                  scale: [0.96, 1.04, 0.96],
                }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="absolute -inset-[2px] rounded-[2.1rem]"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent, rgba(201,168,76,0.75), transparent, rgba(123,167,188,0.55), transparent)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              <div
                className="relative h-[520px] w-[340px] overflow-hidden rounded-[2rem] sm:w-[380px]"
                style={{
                  border: '1px solid rgba(201,168,76,0.32)',
                  boxShadow: '0 35px 110px rgba(0,0,0,0.48)',
                  background: '#0d1526',
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Imad Elmiri"
                  fill
                  priority
                  className="object-cover"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(7,11,21,0.42) 0%, rgba(7,11,21,0.03) 52%, rgba(201,168,76,0.05) 100%)',
                  }}
                />

                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.18) 45%, transparent 65%)',
                  }}
                  animate={{ x: ['-140%', '140%'] }}
                  transition={{
                    duration: 3.1,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: 'easeInOut',
                  }}
                />

                {/* animated corner lines */}
                <motion.div
                  className="absolute left-5 top-5 h-12 w-12 border-l-2 border-t-2"
                  style={{ borderColor: '#c9a84c' }}
                  animate={{ x: [-2, 3, -2], y: [-2, 3, -2] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute bottom-5 right-5 h-12 w-12 border-b-2 border-r-2"
                  style={{ borderColor: '#7ba7bc' }}
                  animate={{ x: [2, -3, 2], y: [2, -3, 2] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <span
          className="text-[10px] font-bold uppercase tracking-[0.28em]"
          style={{ color: '#4a5568' }}
        >
          Scroll
        </span>
        <div className="h-12 w-px overflow-hidden" style={{ background: 'rgba(201,168,76,0.15)' }}>
          <motion.div
            className="h-1/2 w-full"
            style={{ background: 'linear-gradient(to bottom, #c9a84c, #7ba7bc)' }}
            animate={{ y: ['-100%', '210%'] }}
            transition={{ duration: 1.75, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
