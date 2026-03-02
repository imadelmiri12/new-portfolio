'use client'

import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Projects() {
  const projects = [
    {
      title: 'ML Analytics Platform',
      description: 'End-to-End ML Application with automated preprocessing, model comparison, and visualization capabilities.',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'React', 'Next.js', 'Tailwind CSS'],
      achievements: ['CSV/Excel Upload', 'Auto Preprocessing', 'Model Comparison', 'Results Export'],
      
    },
    {
      title: 'Incident Management System',
      description: 'Full-stack web application for managing incidents with role-based access control and dynamic dashboards.',
      technologies: ['Angular', 'Java Spring Boot', 'MySQL', 'REST APIs'],
      achievements: ['Role-Based Access', 'Dynamic Workflows', 'Incident Tracking', 'Real-time Updates'],
      
    },
    {
      title: 'FinTech PME Solution',
      description: 'Financial management application for Moroccan SMEs, developed during WeCreate Hackathon.',
      technologies: ['React', 'Java Spring Boot', 'Financial APIs'],
      achievements: ['2nd Place Hackathon', 'Budget Management', 'Analytics Dashboard', 'Expense Tracking'],
      
    },
    {
      title: 'Appointment Management System',
      description: 'Web application for managing medical appointments using PHP and MySQL with modern UI.',
      technologies: ['PHP', 'PDO', 'MySQL', 'HTML/CSS'],
      achievements: ['Appointment Booking', 'Doctor Portal', 'Patient Dashboard', 'Notifications'],
      
    },
  ]

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden bg-gradient-dark">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <p className="text-primary text-lg font-semibold uppercase tracking-wider mb-4">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting innovative solutions that blend elegant design with cutting-edge technology
          </p>
          <div className="h-1 w-24 bg-gradient-vibrant mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card/40 backdrop-blur rounded-2xl overflow-hidden border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-scale-in h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-8">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                    ✨ Key Features
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {project.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-4 py-2 bg-gradient-to-r from-accent/30 to-secondary/30 text-foreground text-xs font-bold rounded-full border border-accent/50 hover:border-accent transition-all"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8 pb-8 border-b border-border/50">
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">
                    🛠️ Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-primary/20 text-primary text-xs font-bold rounded-lg border border-primary/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
