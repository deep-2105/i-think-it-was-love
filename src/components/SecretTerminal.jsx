import { useEffect, useMemo, useState } from 'react'
import '../styles/secretTerminal.css'
import { supabase } from '../utils/supabase'

const sequence = [
  'SYSTEM // UNKNOWN',
  'initializing...',
  'memory fragment detected',
  'connection established.',
  'ACCESS REQUIRED',
  'some dates are never really forgotten.',
  'the key is the day the world got you.',
  'your birth date — day & month only.',
  'DD / MM',
  'example: 21 / 10',
]

function SecretTerminal({ onAccessGranted }) {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [status, setStatus] = useState(null)
  const [accessGranted, setAccessGranted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
    if (reducedMotion || lineIndex >= sequence.length) {
      return undefined
    }

    const currentLine = sequence[lineIndex]

    if (charIndex < currentLine.length) {
      const timeoutId = window.setTimeout(() => {
        setCharIndex((value) => value + 1)
      }, currentLine.length > 10 ? 42 : 60)

      return () => window.clearTimeout(timeoutId)
    }

    const pauseId = window.setTimeout(() => {
      setLineIndex((value) => value + 1)
      setCharIndex(0)
    }, 180)

    return () => window.clearTimeout(pauseId)
  }, [charIndex, lineIndex, reducedMotion])

  useEffect(() => {
    if (!accessGranted) return undefined

    const transitionTimeout = window.setTimeout(() => {
      setIsTransitioning(true)
    }, 500)

    const completionTimeout = window.setTimeout(() => {
      onAccessGranted?.()
    }, 1200)

    return () => {
      window.clearTimeout(transitionTimeout)
      window.clearTimeout(completionTimeout)
    }
  }, [accessGranted, onAccessGranted])

  const petals = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${(index * 17 + 9) % 100}%`,
        size: `${8 + (index % 5) * 9}px`,
        duration: `${7 + (index % 6) * 2.4}s`,
        delay: `${(index % 6) * 0.7}s`,
        drift: `${-60 + (index % 11) * 11}px`,
        driftEnd: `${-40 + (index % 9) * 12}px`,
        rotation: `${(-40 + (index % 9) * 10).toString()}deg`,
        opacity: 0.18 + (index % 4) * 0.18,
      })),
    [],
  )

  const showInput = reducedMotion || lineIndex >= 4

  const handleSubmit = async (event) => {
    event.preventDefault()

    const enteredCode = inputValue.trim()

    if (!enteredCode || isChecking) {
      return
    }

    setIsChecking(true)
    setStatus(null)

    try {
      const { data, error } = await supabase.rpc('check_secret_access', {
        input_code: enteredCode,
      })

      if (error) {
        setStatus({ type: 'error', messages: ['connection error.'] })
        setInputValue('')
        return
      }

      if (data === true) {
        setStatus({ type: 'success', messages: ['ACCESS GRANTED.', 'memory unlocked.'] })
        setAccessGranted(true)
      } else {
        setStatus({ type: 'denied', messages: ['ACCESS DENIED.', "that wasn't the date."] })
      }
    } catch {
      setStatus({ type: 'error', messages: ['connection error.'] })
    } finally {
      setIsChecking(false)
      setInputValue('')
    }
  }

  return (
    <div className="secret-terminal-shell" aria-live="polite">
      {accessGranted && !reducedMotion && (
        <div className="rose-petals" aria-hidden="true">
          {petals.map((petal) => (
            <span
              key={petal.id}
              className="petal"
              style={{
                left: petal.left,
                width: petal.size,
                height: `calc(${petal.size} * 1.45)`,
                animationDuration: petal.duration,
                animationDelay: petal.delay,
                opacity: petal.opacity,
                '--petal-drift': petal.drift,
                '--petal-drift-end': petal.driftEnd,
                '--petal-rotation': petal.rotation,
              }}
            />
          ))}
        </div>
      )}

      <div
        className={`secret-terminal ${accessGranted ? 'terminal-success' : ''} ${isTransitioning ? 'terminal-fading' : ''}`}
        role="dialog"
        aria-modal="false"
        aria-label="Private system prompt"
      >
        <div className="terminal-header" aria-hidden="true">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
        </div>

        <div className="terminal-body">
          {sequence.map((line, index) => {
            const isVisible = reducedMotion || index < lineIndex || (index === lineIndex && !reducedMotion)
            const content = reducedMotion
              ? line
              : index < lineIndex
                ? line
                : index === lineIndex
                  ? line.slice(0, charIndex + 1)
                  : ''

            return (
              <p
                key={`${line}-${index}`}
                className={`terminal-line ${isVisible ? 'is-visible' : ''}`}
              >
                {content}
              </p>
            )
          })}

          {showInput && (
            <div className="terminal-access-block">
              <p className="access-label">ACCESS REQUIRED</p>
              <p className="access-subtitle">some dates are never really forgotten.</p>
              <p className="access-subtitle access-subtitle-secondary access-instruction">for me to remember — the day &amp; month he was born 🙈</p>
              <p className="access-format">DD / MM</p>
              <p className="access-example">example: 21 / 10</p>

              <form className="terminal-form" onSubmit={handleSubmit} aria-busy={isChecking}>
                <label htmlFor="secret-access" className="sr-only">
                  Private access input
                </label>
                <span className="terminal-prompt">&gt;</span>
                <input
                  id="secret-access"
                  type={showPassword ? 'text' : 'password'}
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder="enter access code"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Private access input"
                  disabled={isChecking || accessGranted}
                />
                {!isChecking && !accessGranted && (
                  <button
                    type="button"
                    className="password-toggle"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword((value) => !value)}
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M1.7 12S5.3 5.5 12 5.5 22.3 12 22.3 12 18.7 18.5 12 18.5 1.7 12 1.7 12Zm10.3 4.1c2.5 0 4.5-2 4.5-4.1s-2-4.1-4.5-4.1-4.5 2-4.5 4.1 2 4.1 4.5 4.1Zm0-1.7c-1.4 0-2.5-1.1-2.5-2.4s1.1-2.4 2.5-2.4 2.5 1.1 2.5 2.4-1.1 2.4-2.5 2.4Z" />
                    </svg>
                  </button>
                )}
              </form>

              {status && (
                <div
                  className="terminal-status"
                  style={{
                    marginTop: '0.8rem',
                    display: 'grid',
                    gap: '0.2rem',
                    fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, monospace',
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    color: status.type === 'error' ? 'rgba(230, 198, 198, 0.9)' : status.type === 'success' ? 'rgba(198, 222, 214, 0.95)' : 'rgba(217, 214, 191, 0.8)',
                    lineHeight: 1.7,
                    textTransform: 'uppercase',
                  }}
                >
                  {status.messages.map((message) => (
                    <span key={message}>{message}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SecretTerminal
