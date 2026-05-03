'use client'
import { SectionBackground } from './SectionBackground'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Projects() {
  const projects = [
    {
      index: '01',
      title: 'Heritage AI - Artisanat Marocain',
      description: 'AI platform for automatic classification of Moroccan craft products for cultural heritage valorization. CNN model with 98% accuracy deployed in production.',
      technologies: ['Python', 'CNN', 'Transfer Learning', 'Flask', 'React.js'],
      tags: ['#DeepLearning', '#CNN', '#Flask', '#React'],
      image: '/projects/heritage-ai.png',
      link: 'https://heritageartisanatai.vercel.app/home',
      live: true,
    },
    {
      index: '02',
      title: 'ML Analytics Platform',
      description: 'End-to-End ML web app with automated preprocessing, automatic problem-type detection and 10+ algorithm comparison with visualizations.',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'React', 'Next.js'],
      tags: ['#MachineLearning', '#Flask', '#React', '#DataScience'],
      image: '/projects/ml-analytics.png',
      link: null,
      live: false,
    },
    {
      index: '03',
      title: 'Incident Management System',
      description: 'Full-stack web app for managing incidents at TangerMED port with role-based access, incident workflows and dynamic dashboards. Built during PFE internship.',
      technologies: ['Angular', 'Java Spring Boot', 'MySQL'],
      tags: ['#Angular', '#SpringBoot', '#MySQL', '#PFE'],
      image: '/projects/incident-mgmt.png',
      link: null,
      live: false,
    },
    {
      index: '04',
      title: 'FinTech PME Solution',
      description: 'Financial management platform for Moroccan SMEs built in 48h at WeCreate Hackathon. Expense tracking, financial reporting and budget management.',
      technologies: ['React', 'Java Spring Boot', 'Financial APIs'],
      tags: ['#FinTech', '#Hackathon', '#2ndPlace', '#React'],
      image: null,
      link: null,
      live: false,
    },
    {
      index: '05',
      title: 'Enterprise Campus Network',
      description: 'Design and simulation of a complete enterprise campus network with multiple VLANs, routers, switches and security configurations using Cisco Packet Tracer.',
      technologies: ['Cisco Packet Tracer'],
      tags: ['#Networking', '#Cisco', '#VLAN', '#IoT'],
      image: '/projects/campus-network.png',
      link: null,
      live: false,
    },
    {
      index: '06',
      title: 'Appointment Management System',
      description: 'Web application for managing medical appointments in a traumatology department with doctor portal, patient dashboard and notifications.',
      technologies: ['PHP', 'PDO', 'MySQL', 'HTML/CSS'],
      tags: ['#PHP', '#MySQL', '#WebApp'],
      image: null,
      link: null,
      live: false,
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
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: '#c9a84c' }} />
            <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: '#c9a84c' }}>Portfolio</span>
          </div>
          <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ index, title, description, technologies, tags, image, link, live }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden" style={{ height: '200px', background: '#0d1526' }}>
                {image ? (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl font-bold" style={{ color: 'rgba(201,168,76,0.1)', fontFamily: "'Cormorant Garamond', serif" }}>
                      {index}
                    </div>
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,14,26,0.8) 0%, transparent 60%)' }} />

                {/* Live badge */}
                {live && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(74,222,128,0.5)', color: '#4ade80', backdropFilter: 'blur(8px)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                    Live
                  </div>
                )}

                {/* Index */}
                <div className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(201,168,76,0.6)' }}>
                  {index}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Title */}
                <h3 className="font-bold text-white mb-3 group-hover:text-amber-200 transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', letterSpacing: '-0.01em' }}>
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#6b7fa3', lineHeight: 1.75 }}>
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map(tag => (
                    <span key={tag} className="text-xs font-medium" style={{ color: '#c9a84c' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  {technologies.map(tech => (
                    <span key={tech} className="text-xs px-2.5 py-1"
                      style={{ color: '#8a9bb5', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', borderRadius: '4px' }}>
                      {tech}
                    </span>
                  ))}
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-xs px-3 py-1 font-semibold transition-all duration-200"
                      style={{ color: '#c9a84c', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '4px' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                    >
                      View →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
    </section>
  )
}