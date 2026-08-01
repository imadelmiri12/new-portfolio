'use client'
import { Reveal } from '../ui/reveal'
import Image from 'next/image'

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
      highlights: ['Angular Frontend', 'Spring Boot Backend', 'MySQL Database', 'Role-Based Access', 'Dynamic Dashboards', 'TANGERMED'],
      image: '/experience/2025_06_16_10_13_IMG_4150.jpg',
      color: '#818cf8',
    },
    {
      type: 'Award',
      title: '2nd Place - Hackathon WeCreate',
      organization: 'EMSI Casablanca x AIESEC Maroc',
      date: 'Jan 18-19, 2025',
      location: 'Casablanca, Morocco',
      description:
        'Built a FinTech application for financial management of Moroccan SMEs within 48 hours. Designed and developed a full-stack solution from scratch under competition pressure. Secured 2nd place out of 10 competing teams.',
      highlights: ['2nd / 10 Teams', 'FinTech App', '48h Build', 'React + Spring Boot', 'Budget Management'],
      image: '/experience/2025_01_19_20_23_IMG_1882.jpg',
      color: '#2dd4bf',
    },
  ]

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-36"
      style={{ background: 'linear-gradient(180deg, #05070c 0%, #0a0e16 100%)', fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(45,212,191,0.3), transparent)' }} />

      <div
        className="pulse-ghost absolute left-1/2 top-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'rgba(129,140,248,0.08)', transform: 'translateX(-50%)' }}
      />
      <div className="glow-beam glow-beam-drift-up bottom-20 right-10 h-80 w-80 rounded-full" style={{ background: 'rgba(45,212,191,0.06)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="mb-20">
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px w-10" style={{ background: '#2dd4bf' }} />
              <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: '#2dd4bf' }}>Journey</span>
            </div>
            <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Experience
            </h2>
          </div>
        </Reveal>

        <div className="space-y-16">
          {experiences.map(({ type, title, organization, date, location, description, highlights, image, color }, i) => (
            <Reveal key={title} variant="scale" delay={i * 100}>
              <div
                className="lift-hover group relative grid overflow-hidden lg:grid-cols-2 hover:-translate-y-2"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '22px',
                  minHeight: '520px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
                }}
              >
                {/* Image side */}
                <div className={`relative min-h-[520px] overflow-hidden bg-[#05070c] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div
                    className="pulse-soft absolute inset-0"
                    style={{ background: `radial-gradient(circle at 50% 45%, ${color}20 0%, rgba(5,7,12,0) 55%)` }}
                  />

                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="z-10 object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="shine-sweep absolute inset-0 z-20" style={{ background: 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.13) 45%, transparent 65%)' }} />

                  <div
                    className="absolute inset-0 z-30"
                    style={{
                      background:
                        i % 2 === 1
                          ? 'linear-gradient(270deg, rgba(5,7,12,0.42) 0%, rgba(5,7,12,0.05) 55%, transparent 100%)'
                          : 'linear-gradient(90deg, rgba(5,7,12,0.42) 0%, rgba(5,7,12,0.05) 55%, transparent 100%)',
                    }}
                  />

                  <div
                    className="pulse-soft absolute left-6 top-6 z-40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                    style={{ background: `${color}20`, border: `1px solid ${color}60`, color, backdropFilter: 'blur(8px)', boxShadow: `0 0 25px ${color}35` }}
                  >
                    {type}
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={`relative z-10 flex flex-col justify-center p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span
                      className="px-3 py-1 text-xs font-semibold transition-colors duration-300"
                      style={{ color, border: `1px solid ${color}40`, background: `${color}08` }}
                    >
                      {date}
                    </span>
                    <span className="text-xs" style={{ color: '#3a4a5e' }}>{location}</span>
                  </div>

                  <h3
                    className="mb-2 font-bold text-white transition-transform duration-300 hover:translate-x-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}
                  >
                    {title}
                  </h3>

                  <p className="mb-5 text-sm font-semibold" style={{ color }}>{organization}</p>

                  <p className="mb-8 text-sm leading-relaxed" style={{ color: '#6b7fa3', lineHeight: 1.85 }}>
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {highlights.map((h, index) => (
                      <Reveal key={h} variant="scale" delay={200 + index * 50}>
                        <span
                          className="lift-hover inline-block px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:-translate-y-1 hover:scale-[1.06]"
                          style={{ color, border: `1px solid ${color}30`, background: `${color}08`, borderRadius: '6px' }}
                        >
                          {h}
                        </span>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <Reveal>
          <div
            className="mt-20 grid grid-cols-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            {[
              { value: '6+', label: 'Major Projects' },
              { value: '2+', label: 'Years Experience' },
              { value: '🏆', label: 'Award Winning' },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                className="lift-hover py-10 text-center hover:-translate-y-1.5"
                style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <div className="mb-2 text-4xl font-bold" style={{ color: '#2dd4bf', fontFamily: "'Cormorant Garamond', serif" }}>
                  {value}
                </div>
                <p className="text-xs uppercase tracking-widest" style={{ color: '#3a4a5e' }}>{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(45,212,191,0.15), transparent)' }} />
    </section>
  )
}
