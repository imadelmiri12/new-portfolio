'use client'
import { SectionBackground } from './SectionBackground'
import { motion, type Variants } from 'framer-motion'

export function Experience() {
  const experiences = [
    {
      type: 'Internship',
      title: 'Full-Stack Developer Internship',
      organization: 'LANAI SARL - Tanger Med',
      date: 'Apr 2025 - Jun 2025',
      location: 'Marrakech, Morocco',
      description:
        'Developed a comprehensive incident management web application for TangerMED port with Angular, Java Spring Boot, and MySQL. Implemented role-based access control, incident workflows, and dynamic dashboards.',
      highlights: [
        'Angular Frontend',
        'Spring Boot Backend',
        'MySQL Database',
        'Role-Based Access',
        'Dynamic Dashboards',
        'TANGERMED',
      ],
      image: '/experience/2025_06_16_10_13_IMG_4150.jpg',
      color: '#7ba7bc',
    },
    {
      type: 'Award',
      title: '2nd Place - Hackathon WeCreate',
      organization: 'EMSI Casablanca x AIESEC Maroc',
      date: 'Jan 18-19, 2025',
      location: 'Casablanca, Morocco',
      description:
        'Built a FinTech application for financial management of Moroccan SMEs within 48 hours. Designed and developed a full-stack solution from scratch under competition pressure. Secured 2nd place out of 10 competing teams.',
      highlights: [
        '2nd / 10 Teams',
        'FinTech App',
        '48h Build',
        'React + Spring Boot',
        'Budget Management',
      ],
      image: '/experience/2025_01_19_20_23_IMG_1882.jpg',
      color: '#c9a84c',
    },
  ]

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const imageVariants: Variants = {
    hidden: { scale: 1.12, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.25,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-36"
      style={{
        background: 'linear-gradient(180deg, #0a0e1a 0%, #0d1526 100%)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <SectionBackground />
      {/* Background top line */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
        }}
      />

      {/* Animated background glow */}
      <motion.div
        className="absolute left-1/2 top-24 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: 'rgba(123,167,188,0.08)',
          transform: 'translateX(-50%)',
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'rgba(201,168,76,0.06)' }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="mb-5 flex items-center gap-4">
            <motion.div
              className="h-px w-10 origin-left"
              style={{ background: '#c9a84c' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.35em]"
              style={{ color: '#c9a84c' }}
            >
              Journey
            </span>
          </div>

          <h2
            className="font-bold text-white"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              letterSpacing: '-0.02em',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Experience
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map(
            (
              {
                type,
                title,
                organization,
                date,
                location,
                description,
                highlights,
                image,
                color,
              },
              i
            ) => (
              <motion.div
                key={title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{
                  y: -10,
                  scale: 1.01,
                  transition: { duration: 0.35 },
                }}
                viewport={{ once: true, amount: 0.25 }}
                className="group relative grid overflow-hidden lg:grid-cols-2"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '22px',
                  minHeight: '520px',
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
                }}
              >
                {/* Animated glow border */}
                <motion.div
                  className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100"
                  style={{
                    borderRadius: '24px',
                    background: `linear-gradient(120deg, transparent, ${color}55, transparent)`,
                    filter: 'blur(18px)',
                  }}
                  animate={{
                    x: ['-60%', '60%', '-60%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Image side */}
                <div
                  className={`relative min-h-[520px] overflow-hidden bg-[#0a0e1a] ${
                    i % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  {/* Decorative background behind contained photo */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 50% 45%, ${color}20 0%, rgba(10,14,26,0) 55%)`,
                    }}
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  <motion.img
                    src={image}
                    alt={title}
                    variants={imageVariants}
                    className="absolute inset-0 z-10 h-full w-full"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center center',
                    }}
                    whileHover={{
                      scale: 1.04,
                      transition: { duration: 0.6 },
                    }}
                  />

                  {/* Cinematic light sweep */}
                  <motion.div
                    className="absolute inset-0 z-20"
                    style={{
                      background:
                        'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.13) 45%, transparent 65%)',
                    }}
                    initial={{ x: '-120%' }}
                    whileInView={{ x: '120%' }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.4,
                      delay: 0.45,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Soft overlay */}
                  <div
                    className="absolute inset-0 z-30"
                    style={{
                      background:
                        i % 2 === 1
                          ? 'linear-gradient(270deg, rgba(10,14,26,0.42) 0%, rgba(10,14,26,0.05) 55%, transparent 100%)'
                          : 'linear-gradient(90deg, rgba(10,14,26,0.42) 0%, rgba(10,14,26,0.05) 55%, transparent 100%)',
                    }}
                  />

                  {/* Floating badge */}
                  <motion.div
                    className="absolute left-6 top-6 z-40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                    style={{
                      background: `${color}20`,
                      border: `1px solid ${color}60`,
                      color,
                      backdropFilter: 'blur(8px)',
                      boxShadow: `0 0 25px ${color}35`,
                    }}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {type}
                  </motion.div>
                </div>

                {/* Content side */}
                <motion.div
                  variants={contentVariants}
                  className={`relative z-10 flex flex-col justify-center p-10 ${
                    i % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <motion.span
                      className="px-3 py-1 text-xs font-semibold"
                      style={{
                        color,
                        border: `1px solid ${color}40`,
                        background: `${color}08`,
                      }}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: `${color}18`,
                      }}
                    >
                      {date}
                    </motion.span>

                    <span className="text-xs" style={{ color: '#3a4a5e' }}>
                      {location}
                    </span>
                  </div>

                  <motion.h3
                    className="mb-2 font-bold text-white"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.75rem',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                    }}
                    whileHover={{
                      x: 6,
                      transition: { duration: 0.25 },
                    }}
                  >
                    {title}
                  </motion.h3>

                  <p className="mb-5 text-sm font-semibold" style={{ color }}>
                    {organization}
                  </p>

                  <p
                    className="mb-8 text-sm leading-relaxed"
                    style={{ color: '#6b7fa3', lineHeight: 1.85 }}
                  >
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {highlights.map((h, index) => (
                      <motion.span
                        key={h}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.35 + index * 0.06,
                          duration: 0.35,
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.06,
                          backgroundColor: `${color}16`,
                        }}
                        className="px-3 py-1.5 text-xs font-medium"
                        style={{
                          color,
                          border: `1px solid ${color}30`,
                          background: `${color}08`,
                          borderRadius: '6px',
                        }}
                      >
                        {h}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          )}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {[
            { value: '6+', label: 'Major Projects' },
            { value: '2+', label: 'Years Experience' },
            { value: '🏆', label: 'Award Winning' },
          ].map(({ value, label }, i) => (
            <motion.div
              key={label}
              className="py-10 text-center"
              style={{
                borderRight:
                  i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
            >
              <motion.div
                className="mb-2 text-4xl font-bold"
                style={{
                  color: '#c9a84c',
                  fontFamily: "'Cormorant Garamond', serif",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.08,
                }}
              >
                {value}
              </motion.div>
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: '#3a4a5e' }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
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
