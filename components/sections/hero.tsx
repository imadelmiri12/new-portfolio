'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { Instagram } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-dark flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-left space-y-8">
            <div className="space-y-4">
              <p className="text-primary text-lg font-semibold uppercase tracking-wider">Welcome</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                <span className="block">Imad</span>
                <span className="text-primary">Elmiri</span>
              </h1>
              <p className="text-2xl md:text-3xl text-secondary font-semibold">Full-Stack Developer & AI/Data Science</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
Full-Stack Developer & AI Student building scalable web applications and data-driven solutions.            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg font-semibold flex items-center justify-center gap-2 animate-glow transition-all"
              >
                Let's Connect <ArrowRight className="w-5 h-5" />
              </Button>

              <a
                href="/imad_elmiri.pdf"
                download
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:scale-105"
              >
                <Download className="w-5 h-5" /> Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
              <span className="text-sm text-muted-foreground font-semibold">Follow me</span>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/imad-elmiri-495900335/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-primary/20 hover:bg-primary/40 flex items-center justify-center text-primary transition-all hover:scale-110 hover:shadow-lg"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                <a
                  href="https://github.com/imadelmiri12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary/20 hover:bg-secondary/40 flex items-center justify-center text-secondary transition-all hover:scale-110 hover:shadow-lg"
                  title="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/imad_elmiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-accent/20 hover:bg-accent/40 flex items-center justify-center text-accent transition-all hover:scale-110 hover:shadow-lg"
                  title="Instagram"
                 >
                  <Instagram className="w-6 h-6" />
                </a>

                <a
                  href="mailto:imadmiri12@gmail.com"
                  className="w-12 h-12 rounded-lg bg-accent/20 hover:bg-accent/40 flex items-center justify-center text-accent transition-all hover:scale-110 hover:shadow-lg"
                  title="Email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="animate-slide-right flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-primary rounded-3xl p-1 opacity-30 blur-xl -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/50 rounded-3xl p-1 opacity-40 blur-lg -z-10"></div>
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/50 shadow-2xl bg-card">
                <Image
                  src="/profile.jpg"
                  alt="Imad Elmiri - Full-Stack Developer"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-primary">
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}