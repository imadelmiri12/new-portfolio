'use client'

import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  alpha: number
  twinkle: number
  color: string
}

type Planet = {
  x: number
  y: number
  radius: number
  orbitRadius: number
  angle: number
  speed: number
  colorA: string
  colorB: string
  ring: boolean
}

type Comet = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
}

export function SectionBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const planetsRef = useRef<Planet[]>([])
  const cometsRef = useRef<Comet[]>([])
  const mouseRef = useRef({ x: -999, y: -999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let frame = 0
    let animationId = 0

    const colors = [
      '201,168,76',
      '123,167,188',
      '155,142,196',
      '226,232,240',
    ]

    const resize = () => {
      const parent = canvas.parentElement
      width = parent?.offsetWidth || window.innerWidth
      height = parent?.offsetHeight || window.innerHeight

      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)

      const starCount = Math.min(180, Math.max(70, Math.floor((width * height) / 12000)))

      starsRef.current = Array.from({ length: starCount }, () => {
        const color = colors[Math.floor(Math.random() * colors.length)]

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.13,
          vy: (Math.random() - 0.5) * 0.13,
          r: Math.random() * 1.5 + 0.35,
          alpha: Math.random() * 0.65 + 0.12,
          twinkle: Math.random() * Math.PI * 2,
          color,
        }
      })

      planetsRef.current = [
        {
          x: width * 0.78,
          y: height * 0.24,
          radius: Math.max(26, Math.min(46, width * 0.035)),
          orbitRadius: Math.max(28, width * 0.035),
          angle: 0,
          speed: 0.0022,
          colorA: '201,168,76',
          colorB: '123,167,188',
          ring: true,
        },
        {
          x: width * 0.15,
          y: height * 0.76,
          radius: Math.max(18, Math.min(34, width * 0.026)),
          orbitRadius: Math.max(20, width * 0.028),
          angle: 1.8,
          speed: -0.0017,
          colorA: '123,167,188',
          colorB: '155,142,196',
          ring: false,
        },
        {
          x: width * 0.92,
          y: height * 0.82,
          radius: Math.max(14, Math.min(28, width * 0.02)),
          orbitRadius: Math.max(18, width * 0.022),
          angle: 3.1,
          speed: 0.0025,
          colorA: '155,142,196',
          colorB: '201,168,76',
          ring: true,
        },
      ]
    }

    const drawDeepSpace = () => {
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, 'rgba(7,11,21,0.35)')
      gradient.addColorStop(0.5, 'rgba(10,14,26,0.2)')
      gradient.addColorStop(1, 'rgba(13,21,38,0.28)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }

    const drawNebula = () => {
      const nebulas = [
        { x: width * 0.18, y: height * 0.22, r: Math.max(width, height) * 0.42, color: '201,168,76', alpha: 0.055 },
        { x: width * 0.82, y: height * 0.36, r: Math.max(width, height) * 0.36, color: '123,167,188', alpha: 0.052 },
        { x: width * 0.48, y: height * 0.92, r: Math.max(width, height) * 0.46, color: '155,142,196', alpha: 0.035 },
      ]

      nebulas.forEach((nebula, index) => {
        const moveX = Math.sin(frame * 0.006 + index) * 36
        const moveY = Math.cos(frame * 0.004 + index) * 28
        const gradient = ctx.createRadialGradient(
          nebula.x + moveX,
          nebula.y + moveY,
          0,
          nebula.x + moveX,
          nebula.y + moveY,
          nebula.r
        )

        gradient.addColorStop(0, `rgba(${nebula.color},${nebula.alpha})`)
        gradient.addColorStop(0.42, `rgba(${nebula.color},${nebula.alpha * 0.35})`)
        gradient.addColorStop(1, `rgba(${nebula.color},0)`)

        ctx.save()
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(nebula.x + moveX, nebula.y + moveY, nebula.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
    }

    const drawGrid = () => {
      const gap = 96
      const offset = (frame * 0.12) % gap

      ctx.save()
      ctx.globalAlpha = 0.042
      ctx.strokeStyle = 'rgba(201,168,76,0.68)'
      ctx.lineWidth = 1

      for (let x = -gap + offset; x < width + gap; x += gap) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      for (let y = -gap + offset; y < height + gap; y += gap) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      ctx.restore()
    }

    const drawOrbits = () => {
      ctx.save()
      ctx.lineWidth = 0.8

      const orbitSets = [
        { x: width * 0.82, y: height * 0.25, base: width * 0.13, color: '201,168,76' },
        { x: width * 0.16, y: height * 0.78, base: width * 0.11, color: '123,167,188' },
      ]

      orbitSets.forEach((orbit, index) => {
        for (let i = 0; i < 5; i++) {
          ctx.beginPath()
          ctx.ellipse(
            orbit.x,
            orbit.y,
            orbit.base + i * 26,
            orbit.base * 0.42 + i * 10,
            Math.PI * (0.12 + index * 0.2),
            0,
            Math.PI * 2
          )
          ctx.strokeStyle = `rgba(${orbit.color},${0.05 - i * 0.006})`
          ctx.stroke()
        }
      })

      ctx.restore()
    }

    const drawStars = () => {
      const mouse = mouseRef.current
      const stars = starsRef.current

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        star.twinkle += 0.025
        star.x += star.vx
        star.y += star.vy

        if (star.x < -10) star.x = width + 10
        if (star.x > width + 10) star.x = -10
        if (star.y < -10) star.y = height + 10
        if (star.y > height + 10) star.y = -10

        if (mouse.x > 0) {
          const dx = star.x - mouse.x
          const dy = star.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 135 && distance > 0.01) {
            const force = (135 - distance) / 135
            star.x += (dx / distance) * force * 0.42
            star.y += (dy / distance) * force * 0.42
          }
        }

        const opacity = Math.max(0.12, star.alpha + Math.sin(star.twinkle) * 0.3)

        ctx.save()
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${star.color},${opacity})`
        ctx.shadowBlur = 12
        ctx.shadowColor = `rgba(${star.color},0.65)`
        ctx.fill()
        ctx.restore()

        for (let j = i + 1; j < stars.length; j++) {
          const other = stars[j]
          const dx = star.x - other.x
          const dy = star.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 88) {
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(star.x, star.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(201,168,76,${0.075 * (1 - distance / 88)})`
            ctx.lineWidth = 0.42
            ctx.stroke()
            ctx.restore()
          }
        }

        if (mouse.x > 0) {
          const dx = star.x - mouse.x
          const dy = star.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 140) {
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(star.x, star.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(201,168,76,${0.14 * (1 - distance / 140)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    const drawPlanets = () => {
      planetsRef.current.forEach((planet, index) => {
        planet.angle += planet.speed

        const floatX = Math.cos(planet.angle) * planet.orbitRadius
        const floatY = Math.sin(planet.angle * 0.8) * planet.orbitRadius * 0.38
        const x = planet.x + floatX
        const y = planet.y + floatY

        const glow = ctx.createRadialGradient(x, y, 0, x, y, planet.radius * 4.2)
        glow.addColorStop(0, `rgba(${planet.colorA},0.12)`)
        glow.addColorStop(1, `rgba(${planet.colorA},0)`)

        ctx.save()
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(x, y, planet.radius * 4.2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        if (planet.ring) {
          ctx.save()
          ctx.translate(x, y)
          ctx.rotate(-0.42 + Math.sin(frame * 0.003 + index) * 0.08)
          ctx.beginPath()
          ctx.ellipse(0, 0, planet.radius * 1.75, planet.radius * 0.46, 0, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${planet.colorA},0.22)`
          ctx.lineWidth = 1.2
          ctx.stroke()
          ctx.restore()
        }

        const bodyGradient = ctx.createLinearGradient(
          x - planet.radius,
          y - planet.radius,
          x + planet.radius,
          y + planet.radius
        )
        bodyGradient.addColorStop(0, `rgba(${planet.colorA},0.8)`)
        bodyGradient.addColorStop(0.55, `rgba(${planet.colorB},0.38)`)
        bodyGradient.addColorStop(1, 'rgba(10,14,26,0.9)')

        ctx.save()
        ctx.beginPath()
        ctx.arc(x, y, planet.radius, 0, Math.PI * 2)
        ctx.fillStyle = bodyGradient
        ctx.shadowBlur = 24
        ctx.shadowColor = `rgba(${planet.colorA},0.38)`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x - planet.radius * 0.28, y - planet.radius * 0.32, planet.radius * 0.18, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.15)'
        ctx.fill()
        ctx.restore()
      })
    }

    const spawnComet = () => {
      if (Math.random() > 0.012) return

      cometsRef.current.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.35,
        vx: Math.random() * 4 + 4,
        vy: Math.random() * 1.7 + 1.1,
        life: 1,
        maxLife: Math.random() * 55 + 45,
      })
    }

    const drawComets = () => {
      spawnComet()

      cometsRef.current = cometsRef.current.filter((comet) => comet.life > 0)

      cometsRef.current.forEach((comet) => {
        comet.x += comet.vx
        comet.y += comet.vy
        comet.life -= 1 / comet.maxLife

        const tailLength = 120
        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x - tailLength,
          comet.y - tailLength * 0.35
        )

        gradient.addColorStop(0, `rgba(226,232,240,${comet.life * 0.9})`)
        gradient.addColorStop(0.2, `rgba(201,168,76,${comet.life * 0.5})`)
        gradient.addColorStop(1, 'rgba(201,168,76,0)')

        ctx.save()
        ctx.beginPath()
        ctx.moveTo(comet.x, comet.y)
        ctx.lineTo(comet.x - tailLength, comet.y - tailLength * 0.35)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2.1
        ctx.shadowBlur = 18
        ctx.shadowColor = 'rgba(201,168,76,0.65)'
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(comet.x, comet.y, 2.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(226,232,240,${comet.life})`
        ctx.fill()
        ctx.restore()
      })
    }

    const drawMouseGlow = () => {
      const mouse = mouseRef.current
      if (mouse.x < 0) return

      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 190)
      gradient.addColorStop(0, 'rgba(201,168,76,0.1)')
      gradient.addColorStop(0.45, 'rgba(123,167,188,0.04)')
      gradient.addColorStop(1, 'rgba(201,168,76,0)')

      ctx.save()
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, 190, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const drawLightSweep = () => {
      const x = ((frame * 1.2) % (width + 520)) - 520

      const gradient = ctx.createLinearGradient(x, 0, x + 520, height)
      gradient.addColorStop(0, 'rgba(255,255,255,0)')
      gradient.addColorStop(0.45, 'rgba(201,168,76,0.026)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')

      ctx.save()
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
      ctx.restore()
    }

    const loop = () => {
      frame += 1
      ctx.clearRect(0, 0, width, height)

      drawDeepSpace()
      drawNebula()
      drawGrid()
      drawOrbits()
      drawMouseGlow()
      drawStars()
      drawPlanets()
      drawComets()
      drawLightSweep()

      animationId = requestAnimationFrame(loop)
    }

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    }

    const onMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 }
    }

    resize()
    loop()

    const parent = canvas.parentElement
    parent?.addEventListener('mousemove', onMouseMove)
    parent?.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      parent?.removeEventListener('mousemove', onMouseMove)
      parent?.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  )
}
