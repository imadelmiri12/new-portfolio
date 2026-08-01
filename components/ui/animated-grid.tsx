type AnimatedGridProps = {
  opacity?: number
  maskPosition?: string
}

/**
 * Drifting grid-line background — pure CSS (see `.animated-grid` /
 * `gridDrift` in globals.css). An oversized tiled layer is translated via
 * `transform`, which the compositor handles without ever repainting, and a
 * static mask on the wrapper fades the edges. No framer-motion, no JS.
 */
export function AnimatedGrid({ opacity = 0.055, maskPosition = '50% 45%' }: AnimatedGridProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        opacity,
        maskImage: `radial-gradient(circle at ${maskPosition}, black 0%, transparent 74%)`,
        WebkitMaskImage: `radial-gradient(circle at ${maskPosition}, black 0%, transparent 74%)`,
      }}
    >
      <div className="animated-grid" />
    </div>
  )
}
