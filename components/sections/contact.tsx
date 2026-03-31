'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
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

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#e2e8f0',
    padding: '14px 16px',
    fontSize: '0.875rem',
    outline: 'none',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'border-color 0.2s',
  }

  const focusStyle = { borderColor: 'rgba(201,168,76,0.5)' }
  const blurStyle = { borderColor: 'rgba(255,255,255,0.08)' }

  return (
    <section
      id="contact"
      className="py-24 sm:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #080c16 100%)', fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: '#c9a84c' }} />
            <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: '#c9a84c' }}>
              Contact
            </span>
          </div>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Get in Touch
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: '#6b7fa3', lineHeight: 1.8 }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            {[
              { icon: <Mail size={18} />, label: 'Email', value: 'imadmiri12@gmail.com', href: 'mailto:imadmiri12@gmail.com', color: '#c9a84c' },
              { icon: <Phone size={18} />, label: 'Phone', value: '+212 658 961 770', href: 'tel:+212658961770', color: '#7ba7bc' },
              { icon: <MapPin size={18} />, label: 'Location', value: 'Tanger, Morocco', href: null, color: '#9b8ec4' },
            ].map(({ icon, label, value, href, color }) => (
              <div
                key={label}
                className="p-6 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${color}30`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${color}15`, color }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: '#3a4a5e' }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium transition-colors duration-200"
                        style={{ color: '#8a9bb5' }}
                        onMouseEnter={e => (e.currentTarget.style.color = color)}
                        onMouseLeave={e => (e.currentTarget.style.color = '#8a9bb5')}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: '#8a9bb5' }}>{value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="p-10"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#4a5568' }}>
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    style={inputStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#4a5568' }}>
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    style={inputStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#4a5568' }}>
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion or inquiry"
                  required
                  style={inputStyle}
                  onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                  onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
                />
              </div>

              <div className="mb-8">
                <label className="block text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#4a5568' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                  onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 text-sm" style={{ background: 'rgba(80,160,100,0.1)', border: '1px solid rgba(80,160,100,0.3)', color: '#6db88a' }}>
                  ✓ Message sent successfully. I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 text-sm" style={{ background: 'rgba(180,70,70,0.1)', border: '1px solid rgba(180,70,70,0.3)', color: '#c47878' }}>
                  ✗ Failed to send. Please try again or email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-3 w-full py-4 font-semibold text-sm uppercase tracking-widest transition-all duration-300"
                style={{
                  background: isSubmitting ? 'rgba(201,168,76,0.5)' : '#c9a84c',
                  color: '#0a0e1a',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  letterSpacing: '0.12em',
                }}
                onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.background = '#e0bc6a' }}
                onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.background = '#c9a84c' }}
              >
                <Send size={16} />
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}