import { useEffect, useRef } from 'react'

// Canvas starfield with slow parallax drift
export default function Starfield() {
  const canvasRef = useRef(null)
  const starsRef = useRef([])
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let w, h
    const resize = () => {
      w = canvas.width = Math.floor(window.innerWidth * dpr)
      h = canvas.height = Math.floor(window.innerHeight * dpr)
    }
    resize()

    const makeStars = (count) =>
      Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.8 + 0.2, // depth
        r: Math.random() * 1.5 * dpr,
        v: Math.random() * 0.2 + 0.05,
      }))

    starsRef.current = makeStars(400)

    let raf
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, w, h)

      for (const s of starsRef.current) {
        s.x += s.v * s.z
        s.y += Math.sin((s.x + s.y) * 0.0005) * 0.2
        if (s.x > w + 50) s.x = -50

        const alpha = 0.5 + s.z * 0.5
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()

        // neon green occasional glint
        if (Math.random() > 0.995) {
          ctx.beginPath()
          ctx.fillStyle = 'rgba(16,185,129,0.9)'
          ctx.arc(s.x, s.y, s.r * 2.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('resize', resize)
    tick()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block"
      style={{ pointerEvents: 'none' }}
    />
  )
}
