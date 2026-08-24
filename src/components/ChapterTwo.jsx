import { useMemo, useState } from 'react'
import '../styles/chapterTwo.css'

const pages = [
  {
    id: 'search',
    shortLabel: 'The Search',
    title: 'THE SEARCH',
    subtitle: 'THE NAME HE FORGOT',
    badge: 'University desk',
    paragraphs: [
      'For a few days, I did not go to class.',
      'And apparently, he had noticed.',
      'There was just one problem.',
      'He had forgotten my name.',
      'So somehow, the same boy who had noticed my notebook and was apparently waiting for me to come back now had to figure out who I actually was.',
      'And somehow, he found my name in our professor\'s Excel sheet.',
      'Then he searched for me on Instagram.',
    ],
    visual: 'search',
  },
  {
    id: 'comment',
    shortLabel: 'The Comment',
    title: 'THE COMMENT',
    subtitle: 'THE NOTEBOOK FOUND ITS WAY BACK',
    badge: 'The reply',
    paragraphs: [
      'He found me on Instagram.',
      'And then he commented on one of my reels.',
      'The caption said:',
      '“this is how obsessed I want my man to be with me”',
      'And his reply was:',
      '“obsessed with your fancy diary”',
      'Of all the things he could have said...',
      'he remembered the notebook.',
      'The same notebook that had started our conversation in class.',
      'Apparently, he really had not forgotten that.',
    ],
    visual: 'comment',
  },
  {
    id: 'reply',
    shortLabel: 'The Reply',
    title: 'THE REPLY',
    subtitle: 'A CONVERSATION BEGINS',
    badge: 'Thread between us',
    paragraphs: [
      'I replied.',
      'He replied back.',
      'And somehow, something that could have been just another random Instagram interaction did not stay random.',
      'We started talking.',
      'It was still small.',
      'Still casual.',
      'But now there was a thread between us.',
      'A reason to talk.',
      'A reason to look for the next message.',
    ],
    visual: 'reply',
  },
  {
    id: 'may-13',
    shortLabel: '13 May 2026',
    title: '13 MAY 2026',
    subtitle: 'THE FIRST REAL MESSAGE',
    badge: 'The first message',
    paragraphs: [
      'Then came 13 May 2026.',
      'I posted something on my story that was kind of sad.',
      'And he messaged me.',
      'It was the first message that felt different.',
      'He said:',
      '“Kya hua bacha? Call kru?”',
      'I still remember those words.',
      'Not because they were complicated.',
      'But because someone had noticed that something was wrong.',
      'And instead of just watching the story disappear...',
      'he asked.',
    ],
    visual: 'may-13',
  },
  {
    id: 'haryanvi',
    shortLabel: 'Haryanvi',
    title: 'THE VOICE NOTES',
    subtitle: 'SOMEHOW, HIS VOICE BECAME FAMILIAR',
    badge: 'Voice notes',
    paragraphs: [
      'He was from Haryana.',
      'And I used to tell him: “Talk to me in Haryanvi.”',
      'So he started sending me voice notes in Haryanvi.',
      'I do not know when it happened.',
      'But somewhere between those random voice notes, silly conversations and late-night talks...',
      'his voice started becoming familiar.',
      'Comforting, even.',
      'It was no longer just a person from my Competitive Coding class.',
      'He was becoming someone I looked forward to hearing from.',
    ],
    visual: 'haryanvi',
  },
  {
    id: 'outside-classroom',
    shortLabel: 'First Meeting',
    title: 'THE FIRST MEETING',
    subtitle: 'ICE CREAM',
    badge: 'Outside college',
    paragraphs: [
      'Then we met outside college.',
      'He had already asked me for ice cream.',
      'So we went out.',
      'We smoked.',
      'We had ice cream.',
      'And we talked.',
      'It was not some grand romantic scene.',
      'It was actually very simple.',
      'But I remember how natural it felt.',
      'There was no effort in trying to make the moment special.',
      'It just was.',
    ],
    visual: 'outside-classroom',
  },
  {
    id: 'care',
    shortLabel: 'Care',
    title: '15 MAY 2026',
    subtitle: 'CARE',
    badge: 'Quiet tenderness',
    paragraphs: [
      'Before we met on 15 May, my bua amma had passed away.',
      'It was a difficult time for me.',
      'And that day, he was there with me.',
      'I noticed the way he cared.',
      'The way he stayed.',
      'The way he handled me without making me feel like I was too much.',
      'And something changed inside me.',
      'That care reached somewhere very deep.',
      'That was the day I realised:',
      'I had started falling in love with him.',
      'Not because of some perfect romantic moment.',
      'But because he made me feel cared for when I needed it.',
      'After feeling alone for so long because of everything I had been through...',
      'that feeling of loneliness started becoming quieter.',
      'And I remember thinking:',
      '“This is the kind of person I was looking for.”',
    ],
    visual: 'care',
  },
  {
    id: 'confession',
    shortLabel: '24 May 2026',
    title: '24 MAY 2026',
    subtitle: 'THE CONFESSION',
    badge: 'Quiet happiness',
    paragraphs: [
      'We had a small argument.',
      'And somehow, that argument brought something out into the open.',
      'He confessed his feelings.',
      'And I confessed mine too.',
      '24 May 2026.',
      'I remember how happy I was.',
      'How much I was blushing.',
      'How genuinely, ridiculously happy I felt.',
      'After that, the nights became ours in their own strange little way.',
      'We started talking almost every night.',
      'Sometimes we would stay on the call until we fell asleep.',
      'The call would still be running.',
      'And I would wake up knowing that somewhere on the other side of the phone...',
      'he was there.',
      'For the first time in a very long time, I felt genuinely happy.',
    ],
    visual: 'confession',
  },
]

function ChapterTwo({ onComplete, onBackToDashboard }) {
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
      case 'search':
        return (
          <div className="chapter-two__visual chapter-two__visual--search" aria-hidden="true">
            <div className="chapter-two__desk" />
            <div className="chapter-two__spreadsheet">
              <span className="chapter-two__spreadsheet-row chapter-two__spreadsheet-row--1" />
              <span className="chapter-two__spreadsheet-row chapter-two__spreadsheet-row--2" />
              <span className="chapter-two__spreadsheet-row chapter-two__spreadsheet-row--3" />
              <span className="chapter-two__spreadsheet-row chapter-two__spreadsheet-row--4" />
            </div>
            <div className="chapter-two__phone chapter-two__phone--search">
              <div className="chapter-two__phone-notch" />
              <div className="chapter-two__phone-screen chapter-two__phone-screen--profile">
                <div className="chapter-two__profile-header" />
                <div className="chapter-two__profile-avatar" />
                <div className="chapter-two__profile-name" />
                <div className="chapter-two__profile-meta" />
              </div>
            </div>
          </div>
        )
      case 'comment':
        return (
          <div className="chapter-two__visual chapter-two__visual--comment" aria-hidden="true">
            <div className="chapter-two__phone chapter-two__phone--comment">
              <div className="chapter-two__phone-notch" />
              <div className="chapter-two__phone-screen chapter-two__phone-screen--reel">
                <div className="chapter-two__reel-video" />
                <div className="chapter-two__caption-box">
                  <span>this is how obsessed I want my man to be with me</span>
                </div>
                <div className="chapter-two__comment-highlight">
                  <span>obsessed with your fancy diary</span>
                </div>
              </div>
            </div>
            <div className="chapter-two__notebook-trace" />
          </div>
        )
      case 'reply':
        return (
          <div className="chapter-two__visual chapter-two__visual--reply" aria-hidden="true">
            <div className="chapter-two__chat-phone chapter-two__chat-phone--left">
              <div className="chapter-two__phone-notch" />
              <div className="chapter-two__chat-screen">
                <div className="chapter-two__chat-bubble chapter-two__chat-bubble--incoming">hey</div>
                <div className="chapter-two__chat-bubble chapter-two__chat-bubble--outgoing">hi</div>
                <div className="chapter-two__chat-bubble chapter-two__chat-bubble--incoming">you still have that notebook?</div>
              </div>
            </div>
            <div className="chapter-two__chat-phone chapter-two__chat-phone--right">
              <div className="chapter-two__phone-notch" />
              <div className="chapter-two__chat-screen">
                <div className="chapter-two__chat-bubble chapter-two__chat-bubble--outgoing">haha yes</div>
                <div className="chapter-two__chat-bubble chapter-two__chat-bubble--incoming">i was looking for you</div>
                <div className="chapter-two__chat-bubble chapter-two__chat-bubble--outgoing">same</div>
              </div>
            </div>
            <div className="chapter-two__typing-glow" />
          </div>
        )
      case 'may-13':
        return (
          <div className="chapter-two__visual chapter-two__visual--story" aria-hidden="true">
            <div className="chapter-two__story-phone">
              <div className="chapter-two__phone-notch" />
              <div className="chapter-two__story-screen">
                <div className="chapter-two__story-frame chapter-two__story-frame--dark" />
                <div className="chapter-two__story-frame chapter-two__story-frame--blurred" />
                <div className="chapter-two__message-bubble">Kya hua bacha? Call kru?</div>
              </div>
            </div>
          </div>
        )
      case 'haryanvi':
        return (
          <div className="chapter-two__visual chapter-two__visual--voice" aria-hidden="true">
            <div className="chapter-two__voice-phone">
              <div className="chapter-two__phone-notch" />
              <div className="chapter-two__voice-screen">
                <div className="chapter-two__voice-card">
                  <span className="chapter-two__voice-label">HARYANVI</span>
                  <div className="chapter-two__waveform">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'outside-classroom':
        return (
          <div className="chapter-two__visual chapter-two__visual--meeting" aria-hidden="true">
            <div className="chapter-two__meeting-lights" />
            <div className="chapter-two__meeting-silhouette chapter-two__meeting-silhouette--left" />
            <div className="chapter-two__meeting-silhouette chapter-two__meeting-silhouette--right" />
            <div className="chapter-two__ice-cream">
              <span className="chapter-two__ice-cream-cone" />
              <span className="chapter-two__ice-cream-scoop" />
            </div>
            <div className="chapter-two__coffee-cups">
              <span />
              <span />
            </div>
          </div>
        )
      case 'care':
        return (
          <div className="chapter-two__visual chapter-two__visual--care" aria-hidden="true">
            <div className="chapter-two__care-window" />
            <div className="chapter-two__care-table">
              <span className="chapter-two__care-cup chapter-two__care-cup--one" />
              <span className="chapter-two__care-cup chapter-two__care-cup--two" />
            </div>
            <div className="chapter-two__care-chair" />
            <div className="chapter-two__care-silhouette chapter-two__care-silhouette--one" />
            <div className="chapter-two__care-silhouette chapter-two__care-silhouette--two" />
            <div className="chapter-two__rain-glow" />
          </div>
        )
      case 'confession':
        return (
          <div className="chapter-two__visual chapter-two__visual--confession" aria-hidden="true">
            <div className="chapter-two__moonlight" />
            <div className="chapter-two__bedside-table">
              <div className="chapter-two__phone chapter-two__phone--call">
                <div className="chapter-two__phone-notch" />
                <div className="chapter-two__call-screen">
                  <span className="chapter-two__call-status">CALL ACTIVE</span>
                  <span className="chapter-two__call-lines" />
                </div>
              </div>
            </div>
            <div className="chapter-two__window-frame chapter-two__window-frame--one" />
            <div className="chapter-two__window-frame chapter-two__window-frame--two" />
            <div className="chapter-two__notebook-echo" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <main className="chapter-two" aria-label="Chapter two story">
      <div className="chapter-two__background-noise" aria-hidden="true" />

      <aside className="chapter-two__sidebar">
        <button
          type="button"
          className="chapter-two__dashboard"
          onClick={onBackToDashboard || onComplete}
        >
          ← BACK TO DASHBOARD
        </button>

        <div className="chapter-two__sidebar-header">
          <p>CHAPTER 02</p>
          <h2>THE MESSAGE</h2>
        </div>

        <div className="chapter-two__sidebar-label">PAGES</div>

        <nav className="chapter-two__page-list" aria-label="Chapter two pages">
          {pages.map((page, index) => (
            <button
              key={page.id}
              type="button"
              className={`chapter-two__page-link ${index === currentPage ? 'is-active' : ''}`}
              onClick={() => navigateTo(index, index > currentPage ? 'next' : 'prev')}
            >
              <span className="chapter-two__page-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="chapter-two__page-name">{page.shortLabel}</span>
            </button>
          ))}
        </nav>

        <p className="chapter-two__sidebar-note">
          “The whole world becomes smaller when someone finally notices you back.”
        </p>
      </aside>

      <section className="chapter-two__story-shell" aria-live="polite">
        <header className="chapter-two__story-header">
          <p className="chapter-two__eyebrow">CHAPTER 02</p>
          <h1 className="chapter-two__story-heading">THE MESSAGE</h1>
          <p className="chapter-two__story-subhead">From recognition to intimacy. From noticing to belonging.</p>
        </header>

        <div
          className={`chapter-two__notebook ${isTurning ? 'is-turning' : ''} chapter-two__notebook--${turnDirection}`}
        >
          <div className="chapter-two__book-spine" aria-hidden="true" />

          <article className="chapter-two__page chapter-two__page--left">
            <div className="chapter-two__page-meta">
              <span>{String(currentPage + 1).padStart(2, '0')} / {String(pages.length).padStart(2, '0')}</span>
            </div>

            <div className="chapter-two__page-body">
              <h3>{current.title}</h3>
              {current.subtitle && <div className="chapter-two__page-divider" aria-hidden="true" />}
              {current.subtitle && <p className="chapter-two__page-subtitle">{current.subtitle}</p>}

              {current.paragraphs.map((paragraph, index) => (
                <p key={`${current.id}-paragraph-${index}`} className="chapter-two__story-text">
                  {paragraph}
                </p>
              ))}

              {current.badge && <div className="chapter-two__page-badge">{current.badge}</div>}
            </div>
          </article>

          <article className="chapter-two__page chapter-two__page--right">
            {renderVisual()}
          </article>
        </div>

        <footer className="chapter-two__footer-nav" aria-label="Page navigation">
          <button
            type="button"
            className="chapter-two__nav-button chapter-two__nav-button--prev"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            ← PREV
          </button>

          <div className="chapter-two__pager" aria-label="Page numbers">
            {pages.map((page, index) => (
              <button
                key={`${page.id}-pager`}
                type="button"
                className={`chapter-two__pager-button ${index === currentPage ? 'is-active' : ''}`}
                onClick={() => navigateTo(index, index > currentPage ? 'next' : 'prev')}
                aria-label={`Go to page ${index + 1}`}
              >
                {String(index + 1).padStart(2, '0')}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="chapter-two__nav-button chapter-two__nav-button--next"
            onClick={handleNext}
          >
            NEXT →
          </button>
        </footer>
      </section>
    </main>
  )
}

export default ChapterTwo
