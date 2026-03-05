import AuthorAvatar from './AuthorAvatar'
import { extractDomain } from '../utils/detectMedia'

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

export default function UpdateCard({ post, onTogglePin }) {
  const {
    id,
    title,
    description,
    tag,
    mood,
    mediaUrl,
    mediaType,
    author,
    authorInitials,
    authorColor,
    createdAt,
    pinned,
  } = post

  return (
    <div className={`update-card${pinned ? ' pinned' : ''}`} data-tag={tag}>

      {pinned && (
        <div className="pinned-banner">
          <span>📌</span> Pinned
        </div>
      )}

      <div className="card-header">
        <div className="card-title">{title}</div>
        <div className="card-badges">
          {mood && <span className="mood-badge">{mood}</span>}
          <span className="tag-badge" data-tag={tag}>{tag}</span>
          <button
            className={`pin-btn${pinned ? ' pinned' : ''}`}
            onClick={() => onTogglePin(id)}
            title={pinned ? 'Unpin post' : 'Pin post'}
          >
            {pinned ? '📌' : '📍'}
          </button>
        </div>
      </div>

      <p className="card-description">{description}</p>

      {mediaUrl && mediaType === 'image' && (
        <div className="media-preview">
          <img src={mediaUrl} alt="preview" />
        </div>
      )}

      {mediaUrl && mediaType === 'link' && (
        <div className="media-preview">
          <a href={mediaUrl} target="_blank" rel="noreferrer" className="link-preview">
            <span className="link-icon">🔗</span>
            <div>
              <div className="link-domain">{extractDomain(mediaUrl)}</div>
              <div className="link-url">{mediaUrl}</div>
            </div>
          </a>
        </div>
      )}

      <div className="card-meta">
        <AuthorAvatar initials={authorInitials} color={authorColor} />
        <span className="card-author">{author}</span>
        <span className="card-time">{timeAgo(createdAt)}</span>
      </div>

    </div>
  )
}
