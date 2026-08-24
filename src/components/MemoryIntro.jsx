import { useEffect, useMemo, useState } from 'react'
import '../styles/memoryIntro.css'

const phases = [
  {
    key: 'unlock',
    text: 'MEMORY UNLOCKED',
    holdMs: 1800,
    fadeMs: 1800,
  },
  {
    key: 'quote-one',
    text: 'some stories don\'t begin when two people meet.',
    holdMs: 2200,
    fadeMs: 1800,
  },
  {
    key: 'quote-two',
    text: 'they begin when one person starts noticing the other.',
    holdMs: 2600,
    fadeMs: 1800,
  },
  {
    key: 'quiet',
    text: '',
    holdMs: 1200,
    fadeMs: 2000,
  },
]

function MemoryIntro({ onComplete }) {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setReducedMotion(mediaQuery.matches)

    mediaQuery.addEventListener?.('change', handleChange)

    return () => {
      mediaQuery.removeEventListener?.('change', handleChange)
    }
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      onComplete?.()
      return undefined
    }

    const currentPhase = phases[phaseIndex]

    if (!currentPhase) {
      const closeTimer = window.setTimeout(() => onComplete?.(), 900)
      return () => window.clearTimeout(closeTimer)
    }

    const holdTimer = window.setTimeout(() => {
      setIsFading(true)
    }, currentPhase.holdMs)

    const nextTimer = window.setTimeout(() => {
      setIsFading(false)

      if (phaseIndex === phases.length - 1) {
        const closeTimer = window.setTimeout(() => onComplete?.(), 900)
        return () => window.clearTimeout(closeTimer)
      }

      setPhaseIndex((index) => index + 1)
    }, currentPhase.holdMs + currentPhase.fadeMs)

    return () => {
      window.clearTimeout(holdTimer)
      window.clearTimeout(nextTimer)
    }
  }, [onComplete, phaseIndex, reducedMotion])

  const petals = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        left: `${(index * 17 + 11) % 100}%`,
        size: `${10 + (index % 6) * 9}px`,
        duration: `${7 + (index % 6) * 2.6}s`,
        delay: `${(index % 7) * 0.55}s`,
        drift: `${-90 + (index % 14) * 14}px`,
        driftEnd: `${-50 + (index % 12) * 10}px`,
        rotation: `${(-90 + (index % 12) * 16).toString()}deg`,
        opacity: 0.25 + (index % 5) * 0.17,
        blur: index % 4 === 0 ? '0.5px' : '0px',
        scale: 0.78 + (index % 5) * 0.18,
        fallBias: `${-20 + (index % 8) * 8}px`,
      })),
    [],
  )

  const currentPhase = phases[phaseIndex] || phases[phases.length - 1]
  const isClosing = phaseIndex === phases.length - 1 && isFading

  return (
    <div className={`memory-intro ${isClosing ? 'is-closing' : ''}`} aria-live="polite">
      {!reducedMotion && (
        <div className={`rose-petals ${isClosing ? 'rose-petals--closing' : ''}`} aria-hidden="true">
          {petals.map((petal) => (
            <div
              key={petal.id}
              className="petal-shell"
              style={{
                left: petal.left,
                width: petal.size,
                height: `calc(${petal.size} * 1.55)`,
                animationDuration: petal.duration,
                animationDelay: petal.delay,
                opacity: petal.opacity,
                filter: `blur(${petal.blur})`,
                '--petal-scale': petal.scale,
                '--petal-drift': petal.drift,
                '--petal-drift-end': petal.driftEnd,
                '--petal-rotation': petal.rotation,
                '--petal-fall-bias': petal.fallBias,
              }}
            >
              <svg viewBox="0 0 120 180" className="petal-svg" aria-hidden="true" focusable="false">
                <defs>
                  <linearGradient id={`petalGradient-${petal.id}`} x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 212, 219, 0.95)" />
                    <stop offset="28%" stopColor="rgba(217, 126, 145, 0.92)" />
                    <stop offset="58%" stopColor="rgba(139, 29, 51, 0.96)" />
                    <stop offset="100%" stopColor="rgba(74, 16, 30, 0.96)" />
                  </linearGradient>
                </defs>
                <path
                  d="M60 8 C 88 20, 102 42, 100 76 C 97 118, 76 153, 60 170 C 44 153, 24 119, 20 76 C 17 42, 32 20, 60 8 Z"
                  fill={`url(#petalGradient-${petal.id})`}
                  stroke="rgba(89, 18, 36, 0.48)"
                  strokeWidth="1.2"
                />
                <path
                  d="M60 24 C 72 42, 75 64, 69 88 C 63 109, 52 130, 42 146"
                  fill="none"
                  stroke="rgba(255, 228, 233, 0.35)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          ))}
        </div>
      )}

      <div className={`memory-intro__stage ${isFading ? 'is-fading' : ''} ${currentPhase.key === 'quiet' ? 'is-quiet' : ''}`}>
        {currentPhase.text ? (
          <p className={`memory-intro__text ${currentPhase.key === 'unlock' ? 'memory-intro__text--title' : ''}`}>
            {currentPhase.text}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default MemoryIntro
