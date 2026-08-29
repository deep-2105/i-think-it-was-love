import { useEffect, useMemo, useState } from 'react'
import '../styles/secretTerminal.css'
import { supabase } from '../utils/supabase'

function SecretTerminal({ onAccessGranted }) {
  const [reducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [inputValue, setInputValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [status, setStatus] = useState(null)
  const [accessGranted, setAccessGranted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

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

  const handleSubmit = async (event) => {
    event.preventDefault()

    const enteredCode = inputValue.trim()

    if (!enteredCode || isChecking) {
      return
    }

    if (!supabase) {
      setStatus({ type: 'error', messages: ['Connection error.', 'Please check network configuration.'] })
      setInputValue('')
      return
    }

    setIsChecking(true)
    setStatus(null)

    try {
      const { data, error } = await supabase.rpc('check_secret_access', {
        input_code: enteredCode,
      })

      if (error) {
        setStatus({ type: 'error', messages: ['Connection error. Please try again.'] })
        setInputValue('')
        return
      }

      if (data === true) {
        setStatus({ type: 'success', messages: ['ACCESS GRANTED', 'Opening memory archive...'] })
        setAccessGranted(true)
      } else {
        setStatus({ type: 'denied', messages: ['ACCESS DENIED', 'Invalid access code.'] })
      }
    } catch {
      setStatus({ type: 'error', messages: ['Connection error. Please try again.'] })
    } finally {
      setIsChecking(false)
      setInputValue('')
    }
  }

  return (
    <div className="secret-terminal-shell" aria-live="polite">
      {/* Background Typography & Glow */}
      <div className="secret-terminal-bg-branding" aria-hidden="true">
        <span>I THINK IT WAS LOVE</span>
      </div>

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
        aria-label="Secret memory access"
      >
        <div className="terminal-header" aria-hidden="true">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
        </div>

        <div className="terminal-body">
          <div className="terminal-access-block">
            <h2 className="access-label">ACCESS REQUIRED</h2>
            <p className="access-quote">&ldquo;Some memories are not meant to be opened by everyone.&rdquo;</p>
            <p className="access-clue">
              The access code is the day he was born &mdash;<br />
              a date I could never forget.
            </p>
            <p className="access-format">DD / MM</p>

            <form className="terminal-form" onSubmit={handleSubmit} aria-busy={isChecking}>
              <div className="terminal-input-group">
                <label htmlFor="secret-access" className="input-field-label sr-only">
                  ENTER ACCESS CODE
                </label>
                <div className="terminal-input-wrapper">
                  <input
                    id="secret-access"
                    type={showPassword ? 'text' : 'password'}
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    placeholder="enter access code"
                    autoComplete="off"
                    spellCheck={false}
                    aria-label="Enter access code"
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
                </div>
              </div>
            </form>

            {status && (
              <div
                className={`terminal-status status--${status.type}`}
                role="alert"
              >
                {status.messages.map((message) => (
                  <span key={message}>{message}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecretTerminal
