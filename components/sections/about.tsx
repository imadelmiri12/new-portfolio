'use client'

import Link from 'next/link'
import { Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden bg-gradient-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary text-lg font-semibold uppercase tracking-wider mb-4">Know Me Better</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-vibrant mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-left space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> and <span className="text-secondary font-semibold">AI/Data Science</span> student at FSTT Tanger. With a strong foundation in modern web development and growing expertise in machine learning, I create innovative solutions that bridge technology and real-world impact.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              My journey has taken me from building scalable web applications with <span className="text-accent font-semibold">React & Next.js</span> to developing end-to-end ML pipelines. I'm curious, detail-oriented, and passionate about solving complex technical challenges.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
Currently, I focus on creating impactful applications that combine elegant design, robust architecture, and intelligent data-driven systems.            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://www.linkedin.com/in/imad-elmiri-495900335/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Visit LinkedIn
                </Button>
              </a>
              <a href="/Imad_Elmiri.pdf" download>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 w-full sm:w-auto">
                  <Download size={20} />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-6 animate-slide-right">
            {/* Education Card */}
            <div className="group bg-card/50 backdrop-blur border border-primary/30 rounded-2xl p-8 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-vibrant flex items-center justify-center text-foreground font-bold">📚</div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>
              <div className="space-y-5">
                <div className="pb-5 border-b border-border/50 last:border-0 last:pb-0">
                  <p className="font-bold text-lg text-primary">Master AISD</p>
                  <p className="text-sm text-muted-foreground mt-1">FSTT Tanger • 2025 - Present</p>
                </div>
                <div className="pb-5 border-b border-border/50 last:border-0 last:pb-0">
                  <p className="font-bold text-lg text-secondary">Licence SIR</p>
                  <p className="text-sm text-muted-foreground mt-1">FSTG Marrakech • 2024 - 2025</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-accent">DEUST MIPC</p>
                  <p className="text-sm text-muted-foreground mt-1">FSTG Marrakech • 2021 - 2024</p>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="group bg-card/50 backdrop-blur border border-secondary/30 rounded-2xl p-8 hover:border-secondary/60 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-vibrant flex items-center justify-center text-foreground font-bold">🌐</div>
                <h3 className="text-2xl font-bold text-foreground">Languages</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-base font-bold text-foreground">Arabic</p>
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">Native</span>
                  </div>
                  <div className="h-2 bg-border/50 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-vibrant rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-base font-bold text-foreground">French</p>
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold">Fluent</span>
                  </div>
                  <div className="h-2 bg-border/50 rounded-full overflow-hidden">
                    <div className="h-full w-5/6 bg-gradient-vibrant rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-base font-bold text-foreground">English</p>
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">Intermediate</span>
                  </div>
                  <div className="h-2 bg-border/50 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-vibrant rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
