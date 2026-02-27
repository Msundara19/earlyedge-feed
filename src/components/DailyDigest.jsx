const TAGS = ['Product', 'Research', 'Marketing', 'Team']

function timeAgo(isoString) {
  const diff = Date.now() - new Date(isoString).getTime()
  const mins = Math.floor(diff / 60000)
  const hours = Math.floor(mins / 60)
  const days = Math.floor(hours / 24)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

export default function DailyDigest({ getDigest }) {
  const digest = getDigest()

  return (
    <div className="digest-wrapper">
      <h2>📋 Daily Digest</h2>
      <div className="digest-grid">
        {TAGS.map(tag => (
          <div key={tag} className="digest-section">
            <div className="digest-section-header">
              <div className="digest-dot" data-tag={tag} />
              <span className="digest-section-title" data-tag={tag}>
                {tag}
              </span>
            </div>
            {digest[tag].length === 0 ? (
              <p className="digest-empty">No updates yet</p>
            ) : (
              digest[tag].map(post => (
                <div key={post.id} className="digest-item">
                  <div className="digest-item-title">
                    {post.mood} {post.title}
                  </div>
                  <div className="digest-item-meta">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{timeAgo(post.createdAt)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  )
}