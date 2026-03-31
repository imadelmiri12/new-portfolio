'use client'

export function Experience() {
  const experiences = [
    {
      title: '2nd Place - Hackathon WeCreate',
      organization: 'EMSI Casablanca x AIESEC Maroc',
      date: 'Jan 18-19, 2025',
      description: 'Developed a FinTech application for financial management of Moroccan SMEs. Showcased full-stack development skills and problem-solving under time constraints.',
      highlights: ['FinTech Application', 'SME Focus', 'Team Collaboration'],
      type: 'Award',
    },
    {
      title: 'Full-Stack Developer Internship',
      organization: 'LANAI SARL - Tanger Med',
      date: 'End of Studies',
      description: 'Developed a comprehensive incident management web application with Angular, Java Spring Boot, and MySQL. Implemented user roles, incident workflows, and dynamic dashboards.',
      highlights: ['Angular Frontend', 'Spring Boot Backend', 'Database Design', 'Role-Based Access'],
      type: 'Internship',
    },
  ]

  return (
    <section
      id="experience"
      className="py-24 sm:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0d1526 100%)', fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: '#c9a84c' }} />
            <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: '#c9a84c' }}>
              Journey
            </span>
          </div>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px ml-5"
            style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), rgba(201,168,76,0.05))' }}
          />

          <div className="space-y-12 pl-16">
            {experiences.map(({ title, organization, date, description, highlights, type }, index) => (
              <div key={title} className="relative group">
                {/* Timeline dot */}
                <div
                  className="absolute -left-16 top-1 w-3 h-3 mt-1"
                  style={{
                    background: '#c9a84c',
                    left: '-2.8rem',
                    boxShadow: '0 0 12px rgba(201,168,76,0.4)',
                  }}
                />

                <div
                  className="p-8 transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)';
                    e.currentTarget.style.background = 'rgba(201,168,76,0.02)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div>
                      {/* Type badge */}
                      <span
                        className="text-xs uppercase tracking-widest font-semibold mb-3 inline-block"
                        style={{ color: '#c9a84c' }}
                      >
                        {type}
                      </span>
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', letterSpacing: '-0.01em' }}
                      >
                        {title}
                      </h3>
                      <p className="text-sm font-medium mt-1" style={{ color: '#7ba7bc' }}>
                        {organization}
                      </p>
                    </div>
                    <span
                      className="text-xs px-4 py-2 whitespace-nowrap self-start"
                      style={{
                        color: '#6b7fa3',
                        border: '1px solid rgba(255,255,255,0.07)',
                        background: 'rgba(255,255,255,0.02)',
                      }}
                    >
                      {date}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b7fa3', lineHeight: 1.8 }}>
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {highlights.map(h => (
                      <span
                        key={h}
                        className="text-xs px-3 py-1.5"
                        style={{
                          color: '#c9a84c',
                          border: '1px solid rgba(201,168,76,0.25)',
                          background: 'rgba(201,168,76,0.05)',
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid sm:grid-cols-3 divide-x"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', divideColor: 'rgba(255,255,255,0.06)' }}
        >
          {[
            { value: '4+', label: 'Major Projects' },
            { value: '2+', label: 'Years Experience' },
            { value: '🏆', label: 'Award Winning' },
          ].map(({ value, label }) => (
            <div key={label} className="py-10 text-center" style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}>
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: '#c9a84c', fontFamily: "'Cormorant Garamond', serif", letterSpacing: '-0.02em' }}
              >
                {value}
              </div>
              <p className="text-sm uppercase tracking-widest" style={{ color: '#4a5568', fontFamily: "'DM Sans', sans-serif" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
    </section>
  )
}