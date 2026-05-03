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

export function SectionBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const mouseRef = useRef({ x: -999, y: -999 })

  useEffect(() => {
    if (window.innerWidth < 768) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let frame = 0
    let animationId = 0
    let lastFrame = 0

    const fps = 24
    const frameInterval = 1000 / fps
    const colors = ['201,168,76', '123,167,188', '155,142,196', '226,232,240']

    const resize = () => {
      const parent = canvas.parentElement
      width = parent?.offsetWidth || window.innerWidth
      height = parent?.offsetHeight || window.innerHeight

      const pixelRatio = 1

      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const starCount = Math.min(55, Math.max(22, Math.floor((width * height) / 42000)))

      starsRef.current = Array.from({ length: starCount }, () => {
        const color = colors[Math.floor(Math.random() * colors.length)]

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.07,
          vy: (Math.random() - 0.5) * 0.07,
          r: Math.random() * 1.1 + 0.25,
          alpha: Math.random() * 0.5 + 0.12,
          twinkle: Math.random() * Math.PI * 2,
          color,
        }
      })
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
        {
          x: width * 0.2,
          y: height * 0.25,
          r: Math.max(width, height) * 0.38,
          color: '201,168,76',
          alpha: 0.045,
        },
        {
          x: width * 0.82,
          y: height * 0.38,
          r: Math.max(width, height) * 0.32,
          color: '123,167,188',
          alpha: 0.04,
        },
      ]

      nebulas.forEach((nebula, index) => {
        const moveX = Math.sin(frame * 0.003 + index) * 18
        const moveY = Math.cos(frame * 0.002 + index) * 14

        const gradient = ctx.createRadialGradient(
          nebula.x + moveX,
          nebula.y + moveY,
          0,
          nebula.x + moveX,
          nebula.y + moveY,
          nebula.r
        )

        gradient.addColorStop(0, `rgba(${nebula.color},${nebula.alpha})`)
        gradient.addColorStop(0.5, `rgba(${nebula.color},${nebula.alpha * 0.28})`)
        gradient.addColorStop(1, `rgba(${nebula.color},0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(nebula.x + moveX, nebula.y + moveY, nebula.r, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawGrid = () => {
      const gap = 110
      const offset = (frame * 0.04) % gap

      ctx.save()
      ctx.globalAlpha = 0.025
      ctx.strokeStyle = 'rgba(201,168,76,0.65)'
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
      ctx.lineWidth = 0.7

      const orbitSets = [
        { x: width * 0.82, y: height * 0.26, base: width * 0.12, color: '201,168,76' },
        { x: width * 0.16, y: height * 0.78, base: width * 0.1, color: '123,167,188' },
      ]

      orbitSets.forEach((orbit, index) => {
        for (let i = 0; i < 3; i++) {
          ctx.beginPath()
          ctx.ellipse(
            orbit.x,
            orbit.y,
            orbit.base + i * 28,
            orbit.base * 0.4 + i * 10,
            Math.PI * (0.12 + index * 0.22),
            0,
            Math.PI * 2
          )
          ctx.strokeStyle = `rgba(${orbit.color},${0.038 - i * 0.006})`
          ctx.stroke()
        }
      })

      ctx.restore()
    }

    const drawPlanetHints = () => {
      const planets = [
        {
          x: width * 0.78 + Math.sin(frame * 0.006) * 18,
          y: height * 0.24 + Math.cos(frame * 0.004) * 10,
          r: 28,
          a: '201,168,76',
          b: '123,167,188',
        },
        {
          x: width * 0.15 + Math.cos(frame * 0.005) * 14,
          y: height * 0.76 + Math.sin(frame * 0.004) * 9,
          r: 20,
          a: '123,167,188',
          b: '155,142,196',
        },
      ]

      planets.forEach((planet, index) => {
        const glow = ctx.createRadialGradient(planet.x, planet.y, 0, planet.x, planet.y, planet.r * 3.4)
        glow.addColorStop(0, `rgba(${planet.a},0.1)`)
        glow.addColorStop(1, `rgba(${planet.a},0)`)

        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(planet.x, planet.y, planet.r * 3.4, 0, Math.PI * 2)
        ctx.fill()

        const body = ctx.createLinearGradient(
          planet.x - planet.r,
          planet.y - planet.r,
          planet.x + planet.r,
          planet.y + planet.r
        )
        body.addColorStop(0, `rgba(${planet.a},0.55)`)
        body.addColorStop(0.55, `rgba(${planet.b},0.28)`)
        body.addColorStop(1, 'rgba(10,14,26,0.85)')

        ctx.save()
        ctx.beginPath()
        ctx.arc(planet.x, planet.y, planet.r, 0, Math.PI * 2)
        ctx.fillStyle = body
        ctx.shadowBlur = 18
        ctx.shadowColor = `rgba(${planet.a},0.28)`
        ctx.fill()

        if (index === 0) {
          ctx.translate(planet.x, planet.y)
          ctx.rotate(-0.42)
          ctx.beginPath()
          ctx.ellipse(0, 0, planet.r * 1.7, planet.r * 0.43, 0, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${planet.a},0.18)`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        ctx.restore()
      })
    }

    const drawStars = () => {
      const mouse = mouseRef.current

      for (const star of starsRef.current) {
        star.twinkle += 0.024
        star.x += star.vx
        star.y += star.vy

        if (star.x < -10) star.x = width + 10
        if (star.x > width + 10) star.x = -10
        if (star.y < -10) star.y = height + 10
        if (star.y > height + 10) star.y = -10

        const opacity = Math.max(0.1, star.alpha + Math.sin(star.twinkle) * 0.25)

        ctx.save()
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${star.color},${opacity})`
        ctx.shadowBlur = 8
        ctx.shadowColor = `rgba(${star.color},0.45)`
        ctx.fill()
        ctx.restore()

        if (mouse.x > 0) {
          const dx = star.x - mouse.x
          const dy = star.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 105) {
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(star.x, star.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(201,168,76,${0.08 * (1 - distance / 105)})`
            ctx.lineWidth = 0.35
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    const drawMouseGlow = () => {
      const mouse = mouseRef.current
      if (mouse.x < 0) return

      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 145)
      gradient.addColorStop(0, 'rgba(201,168,76,0.075)')
      gradient.addColorStop(0.45, 'rgba(123,167,188,0.026)')
      gradient.addColorStop(1, 'rgba(201,168,76,0)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, 145, 0, Math.PI * 2)
      ctx.fill()
    }

    const loop = (time: number) => {
      animationId = requestAnimationFrame(loop)

      if (time - lastFrame < frameInterval) return
      lastFrame = time

      frame += 1
      ctx.clearRect(0, 0, width, height)

      drawDeepSpace()
      drawNebula()
      drawGrid()
      drawOrbits()
      drawMouseGlow()
      drawStars()
      drawPlanetHints()
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

    const parent = canvas.parentElement
    parent?.addEventListener('mousemove', onMouseMove)
    parent?.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)

    animationId = requestAnimationFrame(loop)

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
      className="pointer-events-none absolute inset-0 z-0 hidden md:block"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
