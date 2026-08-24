import { useState } from 'react'
import CinematicBackground from './components/CinematicBackground'
import SecretTerminal from './components/SecretTerminal'
import CupidField from './components/CupidField'
import MemoryIntro from './components/MemoryIntro'
import StoryArchive from './components/StoryArchive'

function App() {
  const [scene, setScene] = useState('terminal')
  const [showOpeningTitle, setShowOpeningTitle] = useState(true)

  const handleAccessGranted = () => {
    setShowOpeningTitle(false)
    setScene('memory')
  }

  return (
    <>
      {showOpeningTitle && <CinematicBackground />}
      <CupidField />

      {scene === 'terminal' && (
        <SecretTerminal onAccessGranted={handleAccessGranted} />
      )}

      {scene === 'memory' && (
        <MemoryIntro onComplete={() => setScene('story')} />
      )}

      {scene === 'story' && (
        <StoryArchive onBackToDashboard={() => setScene('memory')} />
      )}
    </>
  )
}

export default App
