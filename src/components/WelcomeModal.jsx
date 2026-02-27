import { useState } from 'react'

export default function WelcomeModal({ onSave }) {
  const [name, setName] = useState('')

  function handleSubmit() {
    if (name.trim()) onSave(name.trim())
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-emoji">👋</div>
        <h2>Welcome to EarlyEdge!</h2>
        <p>Before we start, what should we call you on your updates?</p>
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          autoFocus
        />
        <button
          className="modal-btn"
          onClick={handleSubmit}
          disabled={!name.trim()}
        >
          Let's go! 🚀
        </button>
      </div>
    </div>
  )
}