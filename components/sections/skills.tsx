'use client'

export function Skills() {
  const skillCategories = [
    {
      title: 'Front-End',
      skills: ['HTML', 'CSS', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Angular'],
      icon: '🎨',
    },
    {
      title: 'Back-End',
      skills: ['PHP', 'Java', 'Spring Boot', 'Python', 'Flask', 'MySQL', 'SQL Server'],
      icon: '⚙️',
    },
    {
      title: 'AI & Data Science',
      skills: ['Machine Learning', 'Deep Learning', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Joblib'],
      icon: '🤖',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'SQL Server', 'UML', 'Database Design'],
      icon: '🗄️',
    },
  ]

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden bg-gradient-dark">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <p className="text-primary text-lg font-semibold uppercase tracking-wider mb-4">My Arsenal</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-vibrant mx-auto rounded-full"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-card/40 backdrop-blur border border-primary/30 rounded-2xl p-8 hover:border-primary/60 hover:bg-card/70 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-5 text-5xl group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-5 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground text-xs font-bold rounded-full hover:from-primary/40 hover:to-secondary/40 transition-all duration-200 border border-primary/30 hover:border-primary/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="animate-slide-up bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 border border-primary/30">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-vibrant flex items-center justify-center text-foreground font-bold">⚡</div>
            <h3 className="text-3xl font-bold text-foreground">Additional Competencies</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {['Web Development', 'API Development', 'RESTful APIs', 'Data Analysis', 'Problem Solving', 'Agile Methodology', 'Team Collaboration', 'Technical Writing'].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-4 p-4 rounded-lg bg-card/50 hover:bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-3 h-3 rounded-full bg-gradient-vibrant group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-foreground font-semibold group-hover:text-primary transition-colors duration-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
