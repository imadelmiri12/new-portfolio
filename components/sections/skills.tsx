'use client'
import { SectionBackground } from './SectionBackground'
import { motion } from 'framer-motion'
import {
  SiPython, SiReact, SiNextdotjs, SiAngular, SiFlask, SiSpringboot,
  SiPhp, SiTensorflow, SiKeras, SiScikitlearn, SiPandas, SiNumpy,
  SiApachekafka, SiApachespark, SiApachehadoop, SiMysql, SiMongodb,
  SiDocker, SiGit, SiArduino, SiNodedotjs, SiTypescript, SiTailwindcss,
  SiCplusplus,
} from 'react-icons/si'
import { FaNetworkWired, FaJava, FaChartBar } from 'react-icons/fa'

const techs = [
  { icon: <SiPython size={40} />, name: 'Python', color: '#3776AB' },
  { icon: <SiReact size={40} />, name: 'React', color: '#61DAFB' },
  { icon: <SiNextdotjs size={40} />, name: 'Next.js', color: '#ffffff' },
  { icon: <SiAngular size={40} />, name: 'Angular', color: '#DD0031' },
  { icon: <SiTypescript size={40} />, name: 'TypeScript', color: '#3178C6' },
  { icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: <SiFlask size={40} />, name: 'Flask', color: '#ffffff' },
  { icon: <SiSpringboot size={40} />, name: 'Spring Boot', color: '#6DB33F' },
  { icon: <SiPhp size={40} />, name: 'PHP', color: '#777BB4' },
  { icon: <FaJava size={40} />, name: 'Java', color: '#ED8B00' },
  { icon: <SiCplusplus size={40} />, name: 'C++', color: '#00599C' },
  { icon: <SiTensorflow size={40} />, name: 'TensorFlow', color: '#FF6F00' },
  { icon: <SiKeras size={40} />, name: 'Keras', color: '#D00000' },
  { icon: <SiScikitlearn size={40} />, name: 'Scikit-learn', color: '#F7931E' },
  { icon: <SiPandas size={40} />, name: 'Pandas', color: '#6B5B95' },
  { icon: <SiNumpy size={40} />, name: 'NumPy', color: '#4DABCF' },
  { icon: <FaChartBar size={40} />, name: 'Power BI', color: '#F2C811' },
  { icon: <SiApachekafka size={40} />, name: 'Kafka', color: '#ffffff' },
  { icon: <SiApachespark size={40} />, name: 'Spark', color: '#E25A1C' },
  { icon: <SiApachehadoop size={40} />, name: 'Hadoop', color: '#66CCFF' },
  { icon: <SiMysql size={40} />, name: 'MySQL', color: '#4479A1' },
  { icon: <SiMongodb size={40} />, name: 'MongoDB', color: '#47A248' },
  { icon: <SiDocker size={40} />, name: 'Docker', color: '#2496ED' },
  { icon: <SiGit size={40} />, name: 'Git', color: '#F05032' },
  { icon: <SiArduino size={40} />, name: 'Arduino', color: '#00979D' },
  { icon: <SiNodedotjs size={40} />, name: 'Node.js', color: '#339933' },
  { icon: <FaNetworkWired size={40} />, name: 'Cisco PT', color: '#1BA0D7' },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d1526 0%, #0a0e1a 100%)', fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: '#c9a84c' }} />
            <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: '#c9a84c' }}>Expertise</span>
          </div>
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Technologies
          </h2>
          <p className="text-base max-w-xl" style={{ color: '#6b7fa3', lineHeight: 1.8 }}>
            {"I've worked with a wide range of technologies across different domains."}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-12">
          {techs.map(({ icon, name, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.04 }}
              className="flex flex-col items-center justify-center gap-3 p-5 transition-all duration-300 group cursor-default"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', aspectRatio: '1' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${color}60`
                e.currentTarget.style.background = `${color}10`
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 8px 24px ${color}20`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ color }} className="transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
              <span className="text-xs font-medium text-center leading-tight" style={{ color: '#8a9bb5' }}>
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
    </section>
  )
}