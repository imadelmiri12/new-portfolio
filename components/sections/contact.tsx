'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden bg-gradient-dark">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20 animate-slide-up text-center">
          <p className="text-primary text-lg font-semibold uppercase tracking-wider mb-4">Let's Connect</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. Reach out and let's create something amazing together.
          </p>
          <div className="h-1 w-24 bg-gradient-vibrant mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6 animate-slide-left">
            {/* Email Card */}
            <div className="group bg-card/50 backdrop-blur rounded-2xl p-8 border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <Mail className="text-primary" size={28} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-foreground mb-2">Email</h3>
                  <a href="mailto:imadmiri12@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    imadmiri12@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-card/50 backdrop-blur rounded-2xl p-8 border border-secondary/30 hover:border-secondary/60 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/40 transition-colors">
                  <Phone className="text-secondary" size={28} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-foreground mb-2">Phone</h3>
                  <a href="tel:+212658961770" className="text-muted-foreground hover:text-secondary transition-colors font-medium">
                    +212 658 961 770
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group bg-card/50 backdrop-blur rounded-2xl p-8 border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/40 transition-colors">
                  <MapPin className="text-accent" size={28} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground font-medium">Tanger, Morocco</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-right">
            <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur rounded-2xl p-10 border border-primary/30">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-3">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-card/50 border-primary/30 hover:border-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-3">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-card/50 border-primary/30 hover:border-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-3">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project discussion or inquiry"
                    required
                    className="w-full bg-card/50 border-primary/30 hover:border-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                    required
                    rows={6}
                    className="w-full bg-card/50 border-primary/30 hover:border-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground rounded-lg resize-none"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 font-semibold flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 font-semibold flex items-center gap-2">
                    <span className="text-2xl">✗</span>
                    Failed to send message. Please try again.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full gap-2 bg-gradient-vibrant hover:opacity-90 text-foreground font-bold text-lg py-6 rounded-lg transition-all duration-300"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
