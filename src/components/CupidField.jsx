import '../styles/cupidField.css'

const cupids = [
  { id: 1, left: '6%', top: '18%', scale: 0.8, duration: '18s', delay: '0s' },
  { id: 2, left: '18%', top: '58%', scale: 1.1, duration: '22s', delay: '1.4s' },
  { id: 3, left: '68%', top: '22%', scale: 0.9, duration: '20s', delay: '0.8s' },
  { id: 4, left: '82%', top: '60%', scale: 1.2, duration: '25s', delay: '2.2s' },
  { id: 5, left: '52%', top: '72%', scale: 0.7, duration: '19s', delay: '1.1s' },
  { id: 6, left: '42%', top: '14%', scale: 0.85, duration: '24s', delay: '2.6s' },
]

function CupidField() {
  return (
    <div className="cupid-field" aria-hidden="true">
      {cupids.map((cupid) => (
        <div
          key={cupid.id}
          className="cupid"
          style={{
            left: cupid.left,
            top: cupid.top,
            transform: `scale(${cupid.scale})`,
            animationDuration: cupid.duration,
            animationDelay: cupid.delay,
          }}
        >
          <span className="wing wing-left" />
          <span className="wing wing-right" />
          <span className="head" />
          <span className="body" />
        </div>
      ))}
    </div>
  )
}

export default CupidField
