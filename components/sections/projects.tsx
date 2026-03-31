'use client'

export function Projects() {
  const projects = [
    {
      index: '01',
      title: 'Heritage AI - Artisanat Marocain',
      description: "Plateforme IA de classification et reconnaissance des produits artisanaux marocains (Babouche, Zellige, Poterie, Tapis, Bijoux Berberes) pour valorisation patrimoniale. Modele CNN avec 98% de precision, deploye en production.",
      technologies: ['Python', 'CNN', 'Transfer Learning', 'Flask', 'React.js', 'Vercel'],
      achievements: ['98% Precision', '5 Categories', 'Flask API REST', 'Live on Vercel'],
      link: 'https://heritageartisanatai.vercel.app/home',
    },
    {
      index: '02',
      title: 'ML Analytics Platform',
      description: 'End-to-End ML Application with automated preprocessing, model comparison, and visualization capabilities.',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'React', 'Next.js', 'Tailwind CSS'],
      achievements: ['CSV/Excel Upload', 'Auto Preprocessing', 'Model Comparison', 'Results Export'],
      link: null,
    },
    {
      index: '03',
      title: 'Incident Management System',
      description: 'Full-stack web application for managing incidents with role-based access control and dynamic dashboards.',
      technologies: ['Angular', 'Java Spring Boot', 'MySQL', 'REST APIs'],
      achievements: ['Role-Based Access', 'Dynamic Workflows', 'Incident Tracking', 'Real-time Updates'],
      link: null,
    },
    {
      index: '04',
      title: 'FinTech PME Solution',
      description: 'Financial management application for Moroccan SMEs, developed during WeCreate Hackathon - 2nd place award.',
      technologies: ['React', 'Java Spring Boot', 'Financial APIs'],
      achievements: ['2nd Place Hackathon', 'Budget Management', 'Analytics Dashboard', 'Expense Tracking'],
      link: null,
    },
    {
      index: '05',
      title: 'Appointment Management System',
      description: 'Web application for managing medical appointments using PHP and MySQL with modern UI.',
      technologies: ['PHP', 'PDO', 'MySQL', 'HTML/CSS'],
      achievements: ['Appointment Booking', 'Doctor Portal', 'Patient Dashboard', 'Notifications'],
      link: null,
    },
  ]

  return (
    <section
      id="projects"
      className="py-24 sm:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d1526 0%, #0a0e1a 100%)', fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: '#c9a84c' }} />
            <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: '#c9a84c' }}>
              Portfolio
            </span>
          </div>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
          {projects.map(({ index, title, description, technologies, achievements, link }) => (
            <div
              key={title}
              className="p-10 transition-all duration-300 group relative overflow-hidden"
              style={{ background: '#0a0e1a' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0c1220')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0a0e1a')}
            >
              {/* Large index number */}
              <div
                className="absolute top-6 right-8 text-7xl font-bold leading-none select-none transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  color: 'rgba(255,255,255,0.03)',
                  fontFamily: "'Cormorant Garamond', serif",
                  opacity: 0.5,
                }}
              >
                {index}
              </div>

              <div className="relative z-10">
                {/* Title + Live badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3
                    className="font-bold text-white group-hover:text-amber-200 transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', letterSpacing: '-0.01em' }}
                  >
                    {title}
                  </h3>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-widest transition-all duration-200"
                      style={{
                        color: '#c9a84c',
                        border: '1px solid rgba(201,168,76,0.4)',
                        background: 'rgba(201,168,76,0.06)',
                        marginTop: '4px',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(201,168,76,0.15)';
                        e.currentTarget.style.borderColor = '#c9a84c';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(201,168,76,0.06)';
                        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                      Live
                    </a>
                  )}
                </div>

                <p className="text-sm leading-relaxed mb-8" style={{ color: '#6b7fa3', lineHeight: 1.8 }}>
                  {description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: '#4a5568' }}>
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map(tech => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5"
                        style={{
                          color: '#c9a84c',
                          border: '1px solid rgba(201,168,76,0.2)',
                          background: 'rgba(201,168,76,0.04)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: '#4a5568' }}>
                    Key Features
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {achievements.map(a => (
                      <span
                        key={a}
                        className="text-xs px-3 py-1.5"
                        style={{
                          color: '#7ba7bc',
                          border: '1px solid rgba(123,167,188,0.2)',
                          background: 'rgba(123,167,188,0.03)',
                        }}
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
    </section>
  )
}