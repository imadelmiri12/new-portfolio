'use client'
import { AnimatedGrid } from '../ui/animated-grid'
import { Reveal } from '../ui/reveal'
import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
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
    { icon: <Mail size={18} />, label: 'Email', value: 'imadmiri12@gmail.com', href: 'mailto:imadmiri12@gmail.com', color: '#2dd4bf' },
    { icon: <Phone size={18} />, label: 'Phone', value: '+212 658 961 770', href: 'tel:+212658961770', color: '#818cf8' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Tanger, Morocco', href: null, color: '#f472b6' },
  ]

  const inputClass = 'w-full rounded-2xl border px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-[#3f4d63]'
  const fieldStyle = { background: 'rgba(255,255,255,0.035)', borderColor: 'rgba(255,255,255,0.08)', color: '#e2e8f0' }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-36"
      style={{
        background:
          'radial-gradient(circle at 15% 20%, rgba(45,212,191,0.11), transparent 30%), radial-gradient(circle at 85% 35%, rgba(129,140,248,0.11), transparent 34%), linear-gradient(180deg, #05070c 0%, #0a0e16 45%, #060910 100%)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <AnimatedGrid opacity={0.045} maskPosition="50% 45%" />

      <div
        className="glow-beam glow-beam-drift-left -left-40 top-20 h-[620px] w-[340px]"
        style={{ background: 'linear-gradient(180deg, rgba(45,212,191,0.18), rgba(129,140,248,0.07), transparent)' }}
      />
      <div
        className="glow-beam glow-beam-drift-right -right-48 bottom-10 h-[580px] w-[360px]"
        style={{ background: 'linear-gradient(180deg, rgba(129,140,248,0.16), rgba(45,212,191,0.07), transparent)' }}
      />

      <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(45,212,191,0.35), transparent)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div
                className="mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2"
                style={{ background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.22)', color: '#2dd4bf' }}
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-black uppercase tracking-[0.32em]">Contact</span>
              </div>

              <h2
                className="font-black uppercase leading-[0.9] text-white"
                style={{ fontSize: 'clamp(3.7rem, 9vw, 7rem)', letterSpacing: '-0.07em', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Let&apos;s
                <br />
                <span style={{ color: '#2dd4bf' }}>build.</span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 sm:text-lg lg:ml-auto" style={{ color: '#8a9bb5' }}>
              Got an idea, internship opportunity, or project? Send the message here.
              I&apos;ll reply as soon as possible.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact cards */}
          <div className="space-y-5">
            {contactItems.map(({ icon, label, value, href, color }, i) => (
              <Reveal key={label} delay={i * 90}>
                <div
                  className="shine-on-hover lift-hover group relative rounded-[1.7rem] p-6 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.065), rgba(255,255,255,0.018))',
                    border: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 24px 70px rgba(0,0,0,0.22)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${color}75`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                >
                  <div className="relative z-10 flex items-center gap-5">
                    <div
                      className="pulse-soft flex items-center justify-center rounded-2xl"
                      style={{ width: 52, height: 52, background: `${color}14`, color, border: `1px solid ${color}26`, boxShadow: `0 0 24px ${color}18`, animationDelay: `${i * 0.25}s` }}
                    >
                      {icon}
                    </div>

                    <div>
                      <p className="mb-1 text-[11px] font-black uppercase tracking-[0.26em]" style={{ color: '#4a5568' }}>{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-bold transition-colors duration-300" style={{ color: '#8a9bb5' }}>{value}</a>
                      ) : (
                        <p className="text-sm font-bold" style={{ color: '#8a9bb5' }}>{value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={contactItems.length * 90}>
              <div
                className="lift-hover relative rounded-[1.7rem] p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.015]"
                style={{ background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.22)' }}
              >
                <p className="text-xs font-black uppercase tracking-[0.28em]" style={{ color: '#2dd4bf' }}>Status</p>
                <p className="mt-2 text-sm leading-7" style={{ color: '#8a9bb5' }}>
                  Available for PFA internship, freelance work, and collaboration.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal variant="scale" delay={150}>
            <div className="relative">
              <div
                className="pulse-ghost absolute -inset-4 rounded-[2.3rem] blur-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(45,212,191,0.18), rgba(129,140,248,0.1), transparent)' }}
              />

              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-[2rem] p-7 sm:p-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.022))',
                  border: '1px solid rgba(45,212,191,0.13)',
                  boxShadow: '0 35px 110px rgba(0,0,0,0.32)',
                }}
              >
                <div
                  className="pulse-soft absolute inset-0 opacity-50"
                  style={{ background: 'radial-gradient(circle at 20% 0%, rgba(45,212,191,0.11), transparent 36%)' }}
                />

                <div className="relative z-10">
                  <div className="mb-7 flex items-center gap-3">
                    <div
                      className="pulse-soft flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ background: 'rgba(45,212,191,0.1)', color: '#2dd4bf', border: '1px solid rgba(45,212,191,0.2)' }}
                    >
                      <Send size={18} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">Send a message</h3>
                      <p className="text-sm" style={{ color: '#5a6880' }}>Simple. Direct. Fast.</p>
                    </div>
                  </div>

                  <div className="mb-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-3 block text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: '#4a5568' }}>Full Name</label>
                      <input
                        name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required
                        className={inputClass} style={fieldStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(45,212,191,0.62)'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(45,212,191,0.08)' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: '#4a5568' }}>Email</label>
                      <input
                        name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required
                        className={inputClass} style={fieldStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(45,212,191,0.62)'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(45,212,191,0.08)' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="mb-3 block text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: '#4a5568' }}>Subject</label>
                    <input
                      name="subject" value={formData.subject} onChange={handleChange} placeholder="Project discussion" required
                      className={inputClass} style={fieldStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(45,212,191,0.62)'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(45,212,191,0.08)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </div>

                  <div className="mb-7">
                    <label className="mb-3 block text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: '#4a5568' }}>Message</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={6}
                      className={inputClass} style={{ ...fieldStyle, resize: 'none' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(45,212,191,0.62)'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(45,212,191,0.08)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="animate-fade-in mb-6 rounded-2xl p-4 text-sm" style={{ background: 'rgba(80,160,100,0.1)', border: '1px solid rgba(80,160,100,0.3)', color: '#6db88a' }}>
                      ✓ Message sent successfully. I&apos;ll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="animate-fade-in mb-6 rounded-2xl p-4 text-sm" style={{ background: 'rgba(180,70,70,0.1)', border: '1px solid rgba(180,70,70,0.3)', color: '#c47878' }}>
                      ✗ Failed to send. Please try again or email directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="shine-on-hover relative flex w-full items-center justify-center gap-3 rounded-full py-4 text-sm font-black uppercase tracking-[0.18em] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.015] active:scale-95 disabled:hover:translate-y-0 disabled:hover:scale-100"
                    style={{
                      background: isSubmitting ? 'rgba(45,212,191,0.5)' : '#2dd4bf',
                      color: '#05070c',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      boxShadow: isSubmitting ? 'none' : '0 18px 55px rgba(45,212,191,0.25)',
                    }}
                  >
                    <Send size={16} className="relative z-10" />
                    <span className="relative z-10">{isSubmitting ? 'Sending…' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(45,212,191,0.15), transparent)' }} />
    </section>
  )
}
