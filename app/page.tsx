import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Contact } from '@/components/sections/contact'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SectionBackground } from '../components/sections/SectionBackground'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <SectionBackground />

      <div className="relative z-10">
        <Navigation />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

      </div>
    </div>
  )
}