import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import SplineErrorBoundary from './SplineErrorBoundary'

const splineSceneUrl = 'https://prod.spline.design/X9hQfmzehhZgmBlS/scene.splinecode'

function SplineShowcase() {
  const [attempt, setAttempt] = useState(0)

  return (
    <section className="relative flex flex-1 items-center justify-center">
      <div className="absolute -top-10 -right-5 h-64 w-64 rounded-full bg-white/20 blur-[160px]" aria-hidden />
      <div className="relative aspect-[4/5] w-full max-w-[420px] rounded-[36px] border border-white/15 bg-gradient-to-br from-white/10/40 to-transparent shadow-neon-soft backdrop-blur">
        <div className="absolute inset-2 rounded-[28px] bg-black/80 p-4">
          <SplineErrorBoundary
            key={attempt}
            fallback={
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-[24px] border border-white/10 bg-black/60 text-center text-sm text-white/70">
                <span>Interactive preview offline.</span>
                <button
                  className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-white/60 hover:text-white"
                  onClick={() => setAttempt((count) => count + 1)}
                >
                  Retry
                </button>
              </div>
            }
          >
            <Spline
              aria-label="Interactive 3D scene preview"
              className="h-full w-full"
              scene={splineSceneUrl}
            >
              <div className="flex h-full w-full items-center justify-center rounded-[24px] border border-dashed border-white/15 bg-black/40 text-xs uppercase tracking-[0.35em] text-white/50">
                Loading 3D preview…
              </div>
            </Spline>
          </SplineErrorBoundary>
        </div>

        <div className="pointer-events-none absolute inset-x-6 -bottom-12 grid gap-3 rounded-3xl border border-white/15 bg-black/80/95 p-5 text-xs uppercase tracking-[0.25em] text-white/60 shadow-neon">
          <span className="text-white/80">Signature Front-End &amp; 3D Web</span>
          <span className="flex items-center justify-between text-white/50">
            <span>Craft · Integrate · Iterate</span>
            <span className="text-white/70">2025</span>
          </span>
        </div>
      </div>
    </section>
  )
}

export default SplineShowcase
