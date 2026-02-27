import { useState } from 'react'
import UpdateCard from './UpdateCard'

const TAGS = ['All', 'Product', 'Research', 'Marketing', 'Team']

export default function UpdateFeed({ posts }) {
  const [activeTag, setActiveTag] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = posts.filter(post => {
    const matchesTag = activeTag === 'All' || post.tag === activeTag
    const matchesSearch =
      search.trim() === '' ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="🔍 Search updates..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 14px',
            border: '1.5px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font)',
            fontSize: '0.9rem',
            background: 'var(--surface)',
            outline: 'none',
            marginBottom: 12,
          }}
        />
        <div className="filter-bar">
          {TAGS.map(tag => (
            <button
              key={tag}
              data-tag={tag}
              className={`filter-pill ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <p>
            No updates yet.{' '}
            <strong>Press N</strong> to write your first one!
          </p>
        </div>
      ) : (
        filtered.map(post => <UpdateCard key={post.id} post={post} />)
      )}
    </div>
  )
}