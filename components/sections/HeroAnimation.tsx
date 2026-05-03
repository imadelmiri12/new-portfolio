'use client';
import { useEffect, useRef } from 'react';

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const explosionsRef = useRef<Array<{
    x: number; y: number;
    vx: number; vy: number;
    life: number; r: number;
  }>>([]);
  const starsRef = useRef<Array<{
    x: number; y: number;
    vx: number; vy: number;
    r: number; alpha: number; speed: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, t = 0, animId = 0;

    function resize() {
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W;
      canvas!.height = H;
      starsRef.current = Array.from({ length: 110 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: 0, vy: 0,
        r: Math.random() * 1.3 + 0.3,
        alpha: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.009 + 0.003,
      }));
    }

    function drawMouseGlow(mouse: { x: number; y: number }) {
      if (mouse.x < 0) return;
      const grd = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 130);
      grd.addColorStop(0, 'rgba(201,168,76,0.07)');
      grd.addColorStop(1, 'rgba(201,168,76,0)');
      ctx!.beginPath();
      ctx!.arc(mouse.x, mouse.y, 130, 0, Math.PI * 2);
      ctx!.fillStyle = grd;
      ctx!.fill();
    }

    function drawCurves(mouse: { x: number; y: number }) {
      const parallaxX = mouse.x > 0 ? (mouse.x - W / 2) * -0.04 : 0;
      const parallaxY = mouse.y > 0 ? (mouse.y - H / 2) * -0.04 : 0;
      const cx = W * 0.72 + parallaxX;
      const cy = H * 0.32 + parallaxY;
      const count = 13;
      for (let i = 0; i < count; i++) {
        const prog = i / count;
        const offset = t * (0.22 + prog * 0.28);
        const r = W * 0.21 + i * W * 0.034;
        const startAngle = Math.PI * (0.5 + Math.sin(offset) * 0.05);
        const endAngle = Math.PI * (1.88 + Math.cos(offset * 0.65) * 0.05);
        const alpha = 0.07 + prog * 0.13;
        let color: string;
        if (i < count * 0.4) color = `rgba(201,168,76,${alpha})`;
        else if (i < count * 0.7) color = `rgba(180,120,210,${alpha * 0.85})`;
        else color = `rgba(70,165,220,${alpha * 0.65})`;
        ctx!.beginPath();
        ctx!.arc(cx, cy, r, startAngle, endAngle);
        ctx!.strokeStyle = color;
        ctx!.lineWidth = 0.85;
        ctx!.stroke();
      }
    }

    function drawStars(mouse: { x: number; y: number }) {
      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.alpha += s.speed;
        const dx = s.x - mouse.x, dy = s.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90 && mouse.x > 0) {
          const force = (90 - dist) / 90;
          s.vx += (dx / dist) * force * 0.5;
          s.vy += (dy / dist) * force * 0.5;
        }
        s.vx *= 0.91; s.vy *= 0.91;
        s.x += s.vx; s.y += s.vy;
        if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;

        const a = (Math.sin(s.alpha) + 1) / 2 * 0.75 + 0.1;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(201,168,76,${a})`;
        ctx!.fill();

        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const ddx = s.x - s2.x, ddy = s.y - s2.y;
          const dd = Math.sqrt(ddx * ddx + ddy * ddy);
          if (dd < 80) {
            ctx!.beginPath();
            ctx!.moveTo(s.x, s.y);
            ctx!.lineTo(s2.x, s2.y);
            ctx!.strokeStyle = `rgba(201,168,76,${0.12 * (1 - dd / 80)})`;
            ctx!.lineWidth = 0.4;
            ctx!.stroke();
          }
        }

        if (mouse.x > 0) {
          const ddx = s.x - mouse.x, ddy = s.y - mouse.y;
          const dd = Math.sqrt(ddx * ddx + ddy * ddy);
          if (dd < 110) {
            ctx!.beginPath();
            ctx!.moveTo(s.x, s.y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.strokeStyle = `rgba(201,168,76,${0.18 * (1 - dd / 110)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }
    }

    function drawExplosions() {
      explosionsRef.current = explosionsRef.current.filter(p => p.life > 0);
      explosionsRef.current.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.93; p.vy *= 0.93;
        p.life -= 0.025;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(201,168,76,${p.life * 0.9})`;
        ctx!.fill();
      });
    }

    function loop() {
      t += 0.007;
      const mouse = mouseRef.current;
      ctx!.clearRect(0, 0, W, H);
      drawMouseGlow(mouse);
      drawCurves(mouse);
      drawStars(mouse);
      drawExplosions();
      animId = requestAnimationFrame(loop);
    }

    resize();
    loop();
    window.addEventListener('resize', resize);

    // Events sur la section hero
    const section = document.getElementById('hero');
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onLeave = () => {
      mouseRef.current = { x: -999, y: -999 };
    };

    const onClick = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      for (let i = 0; i < 24; i++) {
        const angle = (Math.PI * 2 / 24) * i + Math.random() * 0.3;
        const speed = Math.random() * 4 + 1.5;
        explosionsRef.current.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          r: Math.random() * 2 + 1,
        });
      }
    };

    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseleave', onLeave);
    section.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
      section.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}