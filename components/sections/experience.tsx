'use client'

import { Award } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: '2nd Place - Hackathon WeCreate',
      organization: 'EMSI Casablanca × AIESEC Maroc',
      date: 'January 18-19, 2025',
      description: 'Developed a FinTech application for financial management of Moroccan SMEs. Showcased full-stack development skills and problem-solving abilities.',
      highlights: ['FinTech Application', 'SME Focus', 'Team Collaboration'],
    },
    {
      title: 'Full-Stack Developer Internship',
      organization: 'LANAI SARL – Tanger Med',
      date: 'End of Studies Project',
      description: 'Developed a comprehensive incident management web application with Angular, Java Spring Boot, and MySQL. Implemented user roles, incident workflows, and dynamic dashboards.',
      highlights: ['Angular Frontend', 'Spring Boot Backend', 'Database Design', 'Role-Based Access'],
    },
  ]

  return (
    <section id="experience" className="py-20 sm:py-32 relative overflow-hidden bg-gradient-dark">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-1/3 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <p className="text-primary text-lg font-semibold uppercase tracking-wider mb-4">Journey</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-vibrant mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="relative pl-8 sm:pl-16 pb-8 border-l-2 border-gradient-vibrant last:pb-0 last:border-l-transparent animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot with glow */}
              <div className="absolute left-[-15px] top-0 flex items-center justify-center">
                <div className="absolute w-10 h-10 rounded-full bg-gradient-vibrant opacity-30 animate-pulse"></div>
                <div className="relative w-7 h-7 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-lg">
                  <Award size={14} className="text-background" />
                </div>
              </div>

              {/* Content Card */}
              <div className="group bg-card/50 backdrop-blur rounded-2xl border border-primary/30 hover:border-primary/60 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl"></div>

                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-secondary font-bold text-lg mt-1">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-accent bg-accent/20 px-4 py-2 rounded-lg whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground text-xs font-bold rounded-full border border-primary/30 hover:border-primary/60 transition-all"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="grid gap-6 sm:grid-cols-3 animate-slide-up">
          <div className="group text-center p-8 bg-card/50 backdrop-blur rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
            <div className="text-5xl font-bold text-secondary mb-3 group-hover:scale-110 transition-transform">
              4+
            </div>
            <p className="text-muted-foreground font-semibold">Major Projects</p>
          </div>
          <div className="group text-center p-8 bg-card/50 backdrop-blur rounded-2xl border border-secondary/30 hover:border-secondary/60 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20">
            <div className="text-5xl font-bold text-secondary mb-3 group-hover:scale-110 transition-transform">
              2+
            </div>
            <p className="text-muted-foreground font-semibold">Years Experience</p>
          </div>
          <div className="group text-center p-8 bg-card/50 backdrop-blur rounded-2xl border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20">
            <div className="text-5xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
              🏆
            </div>
            <p className="text-muted-foreground font-semibold">Award Winning</p>
          </div>
        </div>
      </div>
    </section>
  )
}
