import { useEffect, useState } from 'react'
import '../styles/secretTerminal.css'

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

function SecretTerminal() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')

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

  const showInput = reducedMotion || lineIndex >= sequence.length

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="secret-terminal-shell" aria-live="polite">
      <div className="secret-terminal" role="dialog" aria-modal="false" aria-label="Private system prompt">
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

              <form className="terminal-form" onSubmit={handleSubmit}>
                <label htmlFor="secret-access" className="sr-only">
                  Private access input
                </label>
                <span className="terminal-prompt">&gt;</span>
                <input
                  id="secret-access"
                  type="password"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder="enter access code"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Private access input"
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SecretTerminal
