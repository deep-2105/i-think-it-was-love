import '../styles/cinematicBackground.css'

const stars = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: `${(index * 19 + 7) % 100}%`,
  top: `${(index * 29 + 11) % 100}%`,
  size: `${(index % 3) + 1.5}px`,
  duration: `${11 + (index % 6) * 2.2}s`,
  delay: `${(index % 8) * 0.9}s`,
  opacity: 0.18 + (index % 4) * 0.12,
}))

function CinematicBackground() {
  return (
    <main className="cinematic-scene" aria-label="Cinematic opening scene">
      <div className="cinematic-noise" aria-hidden="true" />

      <div className="cinematic-stars" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDuration: star.duration,
              animationDelay: star.delay,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div className="cinematic-glow cinematic-glow-one" aria-hidden="true" />
      <div className="cinematic-glow cinematic-glow-two" aria-hidden="true" />

      <section className="cinematic-entrance" aria-label="Story opening title">
        <h1>I THINK IT WAS LOVE</h1>
        <p>some stories are easier to feel than explain.</p>
      </section>
    </main>
  )
}

export default CinematicBackground
