'use client'

export function Skills() {
  const skillCategories = [
    {
      title: 'Front-End',
      skills: ['HTML', 'CSS', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Angular'],
      icon: '01',
      accent: '#c9a84c',
    },
    {
      title: 'Back-End',
      skills: ['PHP', 'Java', 'Spring Boot', 'Python', 'Flask', 'MySQL', 'SQL Server'],
      icon: '02',
      accent: '#7ba7bc',
    },
    {
      title: 'AI & Data Science',
      skills: ['Machine Learning', 'Deep Learning', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Joblib'],
      icon: '03',
      accent: '#9b8ec4',
    },
    {
      title: 'Databases & Big Data',
      skills: ['MySQL', 'SQL Server', 'UML', 'Hadoop/HDFS', 'Apache Kafka', 'Apache Spark', 'Docker'],
      icon: '04',
      accent: '#5a8f7b',
    },
    {
      title: 'IoT',
      skills: ['Node-RED', 'Cisco Packet Tracer', 'MQTT', 'IoT Sensors', 'Smart Home'],
      icon: '05',
      accent: '#e07b54',
    },
  ]

  const additional = ['Web Development', 'API Development', 'RESTful APIs', 'Data Analysis', 'Problem Solving', 'Agile Methodology', 'Team Collaboration', 'Technical Writing', 'Streaming', 'Distributed Systems']

  return (
    <section
      id="skills"
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
              Expertise
            </span>
          </div>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Technical Skills
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px mb-16" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {skillCategories.map(({ title, skills, icon, accent }) => (
            <div
              key={title}
              className="p-8 transition-all duration-300 group"
              style={{ background: '#0a0e1a' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0d1120')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0a0e1a')}
            >
              {/* Number */}
              <div className="mb-6">
                <span
                  className="text-5xl font-bold leading-none"
                  style={{ color: 'rgba(255,255,255,0.04)', fontFamily: "'Cormorant Garamond', serif", letterSpacing: '-0.05em' }}
                >
                  {icon}
                </span>
              </div>

              <h3
                className="text-lg font-semibold text-white mb-6 pb-4"
                style={{ borderBottom: `1px solid ${accent}30`, letterSpacing: '0.02em' }}
              >
                {title}
                <div className="mt-2 h-px w-8" style={{ background: accent }} />
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 transition-all duration-200"
                    style={{
                      color: '#8a9bb5',
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = accent;
                      e.currentTarget.style.borderColor = `${accent}60`;
                      e.currentTarget.style.background = `${accent}08`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#8a9bb5';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div
          className="p-10"
          style={{ border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.02)' }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8" style={{ background: '#c9a84c' }} />
            <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-white">Additional Competencies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {additional.map(skill => (
              <span
                key={skill}
                className="px-5 py-2.5 text-sm font-medium transition-all duration-200"
                style={{
                  color: '#6b7fa3',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#c9a84c';
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                  e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#6b7fa3';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
    </section>
  )
}