import { useState } from 'react'
import MoodSelector from './MoodSelector'

const TAGS = ['Product', 'Research', 'Marketing', 'Team']

export default function PostComposer({ authorName, onAddPost }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tag, setTag] = useState('Product')
  const [mood, setMood] = useState('🔥')
  const [mediaUrl, setMediaUrl] = useState('')

  function handleSubmit() {
    if (!title.trim() || !description.trim()) return
    onAddPost({ title, description, tag, mood, mediaUrl, authorName })
    setTitle('')
    setDescription('')
    setMediaUrl('')
    setMood('🔥')
    setTag('Product')
  }

  return (
    <div className="composer">
      <h2>✍️ New Update</h2>
      <div className="composer-fields">

        <input
          id="composer-title"
          type="text"
          placeholder="Title — what's happening?"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Give more context... what should your cofounders know?"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="🔗 Drop an image URL or link (optional)"
          value={mediaUrl}
          onChange={e => setMediaUrl(e.target.value)}
        />

        <div>
          <label style={{
            fontSize: '0.78rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: 6,
            display: 'block'
          }}>
            Category
          </label>
          <div className="tag-selector">
            {TAGS.map(t => (
              <button
                key={t}
                type="button"
                data-tag={t}
                className={`tag-btn ${tag === t ? 'selected' : ''}`}
                onClick={() => setTag(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <MoodSelector selected={mood} onChange={setMood} />

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!title.trim() || !description.trim()}
        >
          Post Update 🚀
        </button>

      </div>
    </div>
  )
}