import { useState, useEffect } from 'react'
import { usePosts } from './hooks/usePosts'
import { useAuthor } from './hooks/useAuthor'
import WelcomeModal from './components/WelcomeModal'
import PostComposer from './components/PostComposer'
import UpdateFeed from './components/UpdateFeed'
import DailyDigest from './components/DailyDigest'

function App() {
  const { posts, addPost, getDigest } = usePosts()
  const { authorName, authorInitials, authorColor, showWelcome, saveAuthor } = useAuthor()
  const [view, setView] = useState('feed')

  // keyboard shortcut: N to focus composer
  useEffect(() => {
    function handleKey(e) {
      const tag = document.activeElement.tagName
      if ((e.key === 'n' || e.key === 'N') && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault()
        const el = document.getElementById('composer-title')
        if (el) {
          el.focus()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div className="app-wrapper">
      {showWelcome && <WelcomeModal onSave={saveAuthor} />}

      <header className="app-header">
        <h1>Early<span>Edge</span> Feed</h1>
        <div className="header-right">
          <span className="kbd-hint">N to compose</span>
          <div className="view-toggle">
            <button
              className={view === 'feed' ? 'active' : ''}
              onClick={() => setView('feed')}
            >
              Feed
            </button>
            <button
              className={view === 'digest' ? 'active' : ''}
              onClick={() => setView('digest')}
            >
              Daily Digest
            </button>
          </div>
          {authorName && (
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: authorColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 800,
                color: 'white',
                cursor: 'default',
              }}
              title={authorName}
            >
              {authorInitials}
            </div>
          )}
        </div>
      </header>

      {view === 'feed' && (
        <>
          <PostComposer authorName={authorName} onAddPost={addPost} />
          <UpdateFeed posts={posts} />
        </>
      )}

      {view === 'digest' && <DailyDigest getDigest={getDigest} />}
    </div>
  )
}

export default App