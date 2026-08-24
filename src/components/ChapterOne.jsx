import { useMemo, useState } from 'react'
import '../styles/chapterOne.css'

const pages = [
  {
    id: 'university',
    shortLabel: 'University',
    title: 'UNIVERSITY',
    subtitle: '',
    badge: 'Competitive Coding',
    paragraphs: [
      'We met at university.',
      'He is a BTech student and I am a BCA student. Different courses, different routines — but somehow, there was one class we shared.',
      'Competitive Coding.',
      'It was one ordinary class.',
      'Neither of us knew it would become the place where our story quietly began.',
    ],
    visual: 'university',
  },
  {
    id: 'test',
    shortLabel: 'The Test',
    title: 'THE TEST',
    subtitle: '',
    badge: 'Little Moments',
    paragraphs: [
      'One day, there was a test.',
      'He was sitting on the bench in front of me.',
      'Because of the test, we had to communicate. We helped each other with the questions, exchanged little bits of information, and for the first time, there was an actual reason for us to talk.',
      'Nothing dramatic. Nothing that looked important at the time. Just two people sitting in the same classroom, helping each other through a test.',
      'But sometimes the smallest moments become the ones you remember.',
    ],
    visual: 'test',
  },
  {
    id: 'notebook',
    shortLabel: 'The Notebook',
    title: 'THE NOTEBOOK',
    subtitle: '',
    badge: 'First Thread',
    paragraphs: [
      'I had a very fancy vintage, Harry-Potter-type notebook.',
      'It looked different to him.',
      'He noticed it.',
      'And he asked me about it.',
      'That notebook was basically the reason our conversation started.',
      'It is funny when you think about it now. Out of everything in that classroom, it was a notebook that caught his attention.',
      'And somehow, that little notebook became the first thread between us.',
    ],
    visual: 'notebook',
  },
  {
    id: 'vibe',
    shortLabel: 'His Vibe',
    title: 'FIRST IMPRESSION',
    subtitle: 'THE VIBE',
    badge: 'Quiet Recognition',
    paragraphs: [
      'I do not know how to explain it properly.',
      'I just liked his vibe.',
      'There was something about the way he carried himself that felt different to me.',
      'It was not something I could logically explain.',
      'I simply remember thinking that I liked being around that energy.',
      'Sometimes you do not know why someone catches your attention. They just do.',
    ],
    visual: 'vibe',
  },
  {
    id: 'after-class',
    shortLabel: 'After Class',
    title: 'AFTER CLASS',
    subtitle: 'THE MISUNDERSTANDING',
    badge: 'The same moment',
    paragraphs: [
      'After the class, I saw him passing by.',
      'He looked at me.',
      'And then he did not smile.',
      'That was enough for my brain to immediately decide: “Kitna rude ladka hai ye.”',
      'And I moved on thinking that was simply the kind of person he was.',
      'Except apparently, that was not what happened at all. From his side, he thought I had ignored him.',
      'Two people. The same moment. Two completely different memories.',
    ],
    visual: 'hallway',
  },
  {
    id: 'same-moment',
    shortLabel: 'The Same Moment',
    title: 'THE SAME MOMENT',
    subtitle: 'TWO DIFFERENT MEMORIES',
    badge: 'Split memory',
    paragraphs: [
      'The strange thing about memories is that two people can stand inside the exact same second and remember completely different stories.',
    ],
    visual: 'same-moment',
  },
  {
    id: 'return',
    shortLabel: 'The Return',
    title: 'THE RETURN',
    subtitle: 'THE WAIT',
    badge: 'Absence',
    paragraphs: [
      'Then, for a few days, I did not attend the class.',
      'And according to him, he was waiting for me to come back.',
      'Which still makes me smile a little.',
      'Because apparently, somewhere between that test, that notebook and that tiny misunderstanding, he had already started noticing my absence.',
      'There was just one problem. According to him, he had forgotten my name.',
      'Somehow, the girl was memorable enough to wait for… but the name was not.',
    ],
    visual: 'return',
  },
  {
    id: 'remembered',
    shortLabel: 'The Notebook Remembers',
    title: 'THE NOTEBOOK REMEMBERS',
    subtitle: '',
    badge: 'Closing Shot',
    paragraphs: [
      'He forgot my name.',
      'But apparently, he did not forget the notebook.',
      'And maybe that is what makes the beginning of this story so strangely beautiful.',
      'Because before there were messages, before there were calls, before either of us knew what this would become… there was just a classroom, a test, a notebook, and two people who did not even realise they had already noticed each other.',
      'Some stories begin quietly.',
    ],
    visual: 'remembered',
  },
]

function ChapterOne({ onComplete, onBackToDashboard }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTurning, setIsTurning] = useState(false)
  const [turnDirection, setTurnDirection] = useState('next')

  const current = useMemo(() => pages[currentPage], [currentPage])

  const navigateTo = (nextIndex, direction) => {
    if (nextIndex < 0 || nextIndex >= pages.length || nextIndex === currentPage) {
      return
    }

    setTurnDirection(direction)
    setIsTurning(true)

    window.setTimeout(() => {
      setCurrentPage(nextIndex)
      setIsTurning(false)
      setTurnDirection('next')
    }, 360)
  }

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      navigateTo(currentPage + 1, 'next')
      return
    }

    onComplete?.()
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      navigateTo(currentPage - 1, 'prev')
    }
  }

  const renderVisual = () => {
    switch (current.visual) {
      case 'university':
        return (
          <div className="chapter-one__visual chapter-one__visual--university" aria-hidden="true">
            <div className="chapter-one__dust chapter-one__dust--one" />
            <div className="chapter-one__dust chapter-one__dust--two" />
            <div className="chapter-one__dust chapter-one__dust--three" />
            <div className="chapter-one__classroom-wall" />
            <div className="chapter-one__classroom-window" />
            <div className="chapter-one__classroom-board">COMPETITIVE CODING</div>
            <div className="chapter-one__classroom-desk chapter-one__classroom-desk--one" />
            <div className="chapter-one__classroom-desk chapter-one__classroom-desk--two" />
            <div className="chapter-one__classroom-desk chapter-one__classroom-desk--three" />
            <div className="chapter-one__classroom-chair chapter-one__classroom-chair--one" />
            <div className="chapter-one__classroom-chair chapter-one__classroom-chair--two" />
            <div className="chapter-one__classroom-chair chapter-one__classroom-chair--three" />
            <div className="chapter-one__notebook-object">
              <div className="chapter-one__notebook-object-cover">MEMORY</div>
            </div>
          </div>
        )
      case 'test':
        return (
          <div className="chapter-one__visual chapter-one__visual--test" aria-hidden="true">
            <div className="chapter-one__test-paper-wrap">
              <div className="chapter-one__test-paper" />
              <div className="chapter-one__test-pen" />
            </div>
            <div className="chapter-one__desk-pair chapter-one__desk-pair--left" />
            <div className="chapter-one__desk-pair chapter-one__desk-pair--right" />
            <div className="chapter-one__student-silhouette chapter-one__student-silhouette--front" />
            <div className="chapter-one__student-silhouette chapter-one__student-silhouette--rear" />
          </div>
        )
      case 'notebook':
        return (
          <div className="chapter-one__visual chapter-one__visual--notebook" aria-hidden="true">
            <div className="chapter-one__notebook-stage">
              <div className="chapter-one__vintage-notebook">
                <div className="chapter-one__vintage-notebook-cover">
                  <span>MEMORY</span>
                </div>
                <div className="chapter-one__vintage-notebook-pages" />
              </div>
            </div>
          </div>
        )
      case 'vibe':
        return (
          <div className="chapter-one__visual chapter-one__visual--vibe" aria-hidden="true">
            <div className="chapter-one__hallway-glow" />
            <div className="chapter-one__hallway-silhouette chapter-one__hallway-silhouette--far" />
            <div className="chapter-one__hallway-silhouette chapter-one__hallway-silhouette--near" />
            <div className="chapter-one__hallway-lights" />
            <div className="chapter-one__open-book-overlay" />
          </div>
        )
      case 'hallway':
        return (
          <div className="chapter-one__visual chapter-one__visual--hallway" aria-hidden="true">
            <div className="chapter-one__hallway-split">
              <div className="chapter-one__split-memory chapter-one__split-memory--left">
                <span>MY MEMORY</span>
              </div>
              <div className="chapter-one__split-memory chapter-one__split-memory--right">
                <span>HIS MEMORY</span>
              </div>
            </div>
            <div className="chapter-one__hallway-figure chapter-one__hallway-figure--one" />
            <div className="chapter-one__hallway-figure chapter-one__hallway-figure--two" />
          </div>
        )
      case 'same-moment':
        return (
          <div className="chapter-one__visual chapter-one__visual--split" aria-hidden="true">
            <div className="chapter-one__memory-panel chapter-one__memory-panel--left">
              <span className="chapter-one__memory-label">MY MEMORY</span>
              <div className="chapter-one__memory-quote">He looked at me. He did not smile.</div>
              <div className="chapter-one__memory-thought">‘Kitna rude ladka hai ye.’</div>
            </div>
            <div className="chapter-one__memory-panel chapter-one__memory-panel--right">
              <span className="chapter-one__memory-label">HIS MEMORY</span>
              <div className="chapter-one__memory-quote">He looked at me. Apparently, I ignored him.</div>
              <div className="chapter-one__memory-thought">‘She ignored me.’</div>
            </div>
            <div className="chapter-one__two-memories-separator" />
          </div>
        )
      case 'return':
        return (
          <div className="chapter-one__visual chapter-one__visual--return" aria-hidden="true">
            <div className="chapter-one__empty-classroom" />
            <div className="chapter-one__empty-desk" />
            <div className="chapter-one__empty-chair" />
            <div className="chapter-one__empty-notebook" />
            <div className="chapter-one__waiting-light" />
          </div>
        )
      case 'remembered':
        return (
          <div className="chapter-one__visual chapter-one__visual--memory-end" aria-hidden="true">
            <div className="chapter-one__final-glow" />
            <div className="chapter-one__final-notebook-wrap">
              <div className="chapter-one__final-notebook">
                <div className="chapter-one__final-notebook-cover">
                  <span>MEMORY</span>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <main className="chapter-one" aria-label="Chapter one story">
      <div className="chapter-one__background-noise" aria-hidden="true" />
      <aside className="chapter-one__sidebar">
        <button
          type="button"
          className="chapter-one__dashboard"
          onClick={onBackToDashboard || onComplete}
        >
          ← BACK TO DASHBOARD
        </button>

        <div className="chapter-one__sidebar-header">
          <p>CHAPTER 01</p>
          <h2>THE BEGINNING</h2>
        </div>

        <div className="chapter-one__sidebar-label">PAGES</div>

        <nav className="chapter-one__page-list" aria-label="Chapter pages">
          {pages.map((page, index) => (
            <button
              key={page.id}
              type="button"
              className={`chapter-one__page-link ${index === currentPage ? 'is-active' : ''}`}
              onClick={() => navigateTo(index, index > currentPage ? 'next' : 'prev')}
            >
              <span className="chapter-one__page-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="chapter-one__page-name">{page.shortLabel}</span>
            </button>
          ))}
        </nav>

        <p className="chapter-one__sidebar-note">
          “The same moment can live in two completely different memories.”
        </p>
      </aside>

      <section className="chapter-one__story-shell" aria-live="polite">
        <header className="chapter-one__story-header">
          <p className="chapter-one__eyebrow">CHAPTER 01</p>
          <h1 className="chapter-one__story-heading">THE BEGINNING</h1>
          <p className="chapter-one__story-subhead">
            The notebook. The class. The first misunderstanding.
          </p>
        </header>

        <div
          className={`chapter-one__notebook ${isTurning ? 'is-turning' : ''} chapter-one__notebook--${turnDirection}`}
          aria-live="polite"
        >
          <div className="chapter-one__book-spine" aria-hidden="true" />

          <article className="chapter-one__page chapter-one__page--left">
            <div className="chapter-one__page-meta">
              <span>{String(currentPage + 1).padStart(2, '0')} / {String(pages.length).padStart(2, '0')}</span>
            </div>

            <div className="chapter-one__page-body">
              <h3>{current.title}</h3>
              {current.subtitle && <div className="chapter-one__page-divider" aria-hidden="true" />}
              {current.subtitle && <p className="chapter-one__page-subtitle">{current.subtitle}</p>}

              {current.paragraphs.map((paragraph, index) => (
                <p key={`${current.id}-paragraph-${index}`} className="chapter-one__story-text">
                  {paragraph}
                </p>
              ))}

              {current.badge && (
                <div className="chapter-one__page-badge">{current.badge}</div>
              )}
            </div>
          </article>

          <article className="chapter-one__page chapter-one__page--right">
            {renderVisual()}
          </article>
        </div>

        <footer className="chapter-one__footer-nav" aria-label="Page navigation">
          <button
            type="button"
            className="chapter-one__nav-button chapter-one__nav-button--prev"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            ← PREV
          </button>

          <div className="chapter-one__pager" aria-label="Page numbers">
            {pages.map((page, index) => (
              <button
                key={`${page.id}-pager`}
                type="button"
                className={`chapter-one__pager-button ${index === currentPage ? 'is-active' : ''}`}
                onClick={() => navigateTo(index, index > currentPage ? 'next' : 'prev')}
                aria-label={`Go to page ${index + 1}`}
              >
                {String(index + 1).padStart(2, '0')}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="chapter-one__nav-button chapter-one__nav-button--next"
            onClick={handleNext}
          >
            NEXT →
          </button>
        </footer>
      </section>
    </main>
  )
}

export default ChapterOne
