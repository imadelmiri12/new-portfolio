'use client'
import { SectionBackground } from './SectionBackground'
import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactItems = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'imadmiri12@gmail.com',
      href: 'mailto:imadmiri12@gmail.com',
      color: '#c9a84c',
    },
    {
      icon: <Phone size={18} />,
      label: 'Phone',
      value: '+212 658 961 770',
      href: 'tel:+212658961770',
      color: '#7ba7bc',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: 'Tanger, Morocco',
      href: null,
      color: '#9b8ec4',
    },
  ]

  const inputClass =
    'w-full rounded-2xl border px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-[#3f4d63]'

  const fieldStyle = {
    background: 'rgba(255,255,255,0.035)',
    borderColor: 'rgba(255,255,255,0.08)',
    color: '#e2e8f0',
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-36"
      style={{
        background:
          'radial-gradient(circle at 15% 20%, rgba(201,168,76,0.12), transparent 30%), radial-gradient(circle at 85% 35%, rgba(123,167,188,0.12), transparent 34%), linear-gradient(180deg, #070b15 0%, #0a0e1a 45%, #080c16 100%)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >

      {/* animated grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.7) 1px, transparent 1px)',
          backgroundSize: '76px 76px',
          maskImage: 'radial-gradient(circle at 50% 45%, black, transparent 74%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 45%, black, transparent 74%)',
        }}
        animate={{ backgroundPosition: ['0px 0px', '76px 76px'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      />

      {/* glow beams */}
      <motion.div
        className="absolute -left-40 top-20 h-[620px] w-[340px] rotate-12 blur-3xl"
        style={{
          background:
            'linear-gradient(180deg, rgba(201,168,76,0.18), rgba(123,167,188,0.07), transparent)',
        }}
        animate={{ x: [0, 75, 0], opacity: [0.3, 0.75, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -right-48 bottom-10 h-[580px] w-[360px] -rotate-12 blur-3xl"
        style={{
          background:
            'linear-gradient(180deg, rgba(123,167,188,0.16), rgba(201,168,76,0.07), transparent)',
        }}
        animate={{ x: [0, -70, 0], opacity: [0.28, 0.72, 0.28] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-16 grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr]"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2"
              style={{
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.22)',
                color: '#c9a84c',
              }}
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-black uppercase tracking-[0.32em]">
                Contact
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-black uppercase leading-[0.9] text-white"
              style={{
                fontSize: 'clamp(3.7rem, 9vw, 7rem)',
                letterSpacing: '-0.07em',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Let&apos;s
              <br />
              <span style={{ color: '#c9a84c' }}>build.</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-8 sm:text-lg lg:ml-auto"
            style={{ color: '#8a9bb5' }}
          >
            Got an idea, internship opportunity, or project? Send the message here.
            I&apos;ll reply as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            {contactItems.map(({ icon, label, value, href, color }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[1.7rem] p-6"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.065), rgba(255,255,255,0.018))',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 24px 70px rgba(0,0,0,0.22)',
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: `${color}75`,
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(115deg, transparent 0%, ${color}18 45%, transparent 70%)`,
                  }}
                  animate={{ x: ['-140%', '140%'] }}
                  transition={{ duration: 2.25, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative z-10 flex items-center gap-5">
                  <motion.div
                    className="flex h-13 w-13 items-center justify-center rounded-2xl"
                    style={{
                      width: 52,
                      height: 52,
                      background: `${color}14`,
                      color,
                      border: `1px solid ${color}26`,
                      boxShadow: `0 0 24px ${color}18`,
                    }}
                    animate={{ rotate: [0, 7, -7, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.25 }}
                  >
                    {icon}
                  </motion.div>

                  <div>
                    <p
                      className="mb-1 text-[11px] font-black uppercase tracking-[0.26em]"
                      style={{ color: '#4a5568' }}
                    >
                      {label}
                    </p>

                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-bold transition-colors duration-300"
                        style={{ color: '#8a9bb5' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-bold" style={{ color: '#8a9bb5' }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-[1.7rem] p-6"
              style={{
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.22)',
              }}
              whileHover={{ y: -6, scale: 1.015 }}
            >
              <p className="text-xs font-black uppercase tracking-[0.28em]" style={{ color: '#c9a84c' }}>
                Status
              </p>
              <p className="mt-2 text-sm leading-7" style={{ color: '#8a9bb5' }}>
                Available for PFA internship, freelance work, and collaboration.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 44, scale: 0.97, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 rounded-[2.3rem] blur-2xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(201,168,76,0.18), rgba(123,167,188,0.1), transparent)',
              }}
              animate={{
                opacity: [0.35, 0.75, 0.35],
                scale: [0.97, 1.03, 0.97],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[2rem] p-7 sm:p-10"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.022))',
                border: '1px solid rgba(201,168,76,0.13)',
                boxShadow: '0 35px 110px rgba(0,0,0,0.32)',
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-50"
                style={{
                  background:
                    'radial-gradient(circle at 20% 0%, rgba(201,168,76,0.11), transparent 36%)',
                }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative z-10">
                <div className="mb-7 flex items-center gap-3">
                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{
                      background: 'rgba(201,168,76,0.1)',
                      color: '#c9a84c',
                      border: '1px solid rgba(201,168,76,0.2)',
                    }}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity }}
                  >
                    <Send size={18} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-black text-white">Send a message</h3>
                    <p className="text-sm" style={{ color: '#5a6880' }}>
                      Simple. Direct. Fast.
                    </p>
                  </div>
                </div>

                <div className="mb-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: '#4a5568' }}>
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={inputClass}
                      style={fieldStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.62)'
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(201,168,76,0.08)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: '#4a5568' }}>
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={inputClass}
                      style={fieldStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.62)'
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(201,168,76,0.08)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="mb-3 block text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: '#4a5568' }}>
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project discussion"
                    required
                    className={inputClass}
                    style={fieldStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.62)'
                      e.currentTarget.style.boxShadow = '0 0 0 4px rgba(201,168,76,0.08)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <div className="mb-7">
                  <label className="mb-3 block text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: '#4a5568' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className={inputClass}
                    style={{ ...fieldStyle, resize: 'none' }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.62)'
                      e.currentTarget.style.boxShadow = '0 0 0 4px rgba(201,168,76,0.08)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 rounded-2xl p-4 text-sm"
                    style={{
                      background: 'rgba(80,160,100,0.1)',
                      border: '1px solid rgba(80,160,100,0.3)',
                      color: '#6db88a',
                    }}
                  >
                    ✓ Message sent successfully. I&apos;ll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 rounded-2xl p-4 text-sm"
                    style={{
                      background: 'rgba(180,70,70,0.1)',
                      border: '1px solid rgba(180,70,70,0.3)',
                      color: '#c47878',
                    }}
                  >
                    ✗ Failed to send. Please try again or email directly.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full py-4 text-sm font-black uppercase tracking-[0.18em]"
                  style={{
                    background: isSubmitting ? 'rgba(201,168,76,0.5)' : '#c9a84c',
                    color: '#070b15',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: isSubmitting
                      ? 'none'
                      : '0 18px 55px rgba(201,168,76,0.25)',
                  }}
                  whileHover={
                    isSubmitting
                      ? {}
                      : {
                          y: -4,
                          scale: 1.015,
                          boxShadow: '0 26px 70px rgba(201,168,76,0.38)',
                        }
                  }
                  whileTap={isSubmitting ? {} : { scale: 0.97 }}
                >
                  {!isSubmitting && (
                    <motion.span
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.42) 45%, transparent 65%)',
                      }}
                      animate={{ x: ['-140%', '140%'] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        repeatDelay: 0.8,
                        ease: 'easeInOut',
                      }}
                    />
                  )}

                  <Send size={16} className="relative z-10" />
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)',
        }}
      />
    </section>
  )
}
