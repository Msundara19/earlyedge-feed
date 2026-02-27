export default function AuthorAvatar({ initials, color, size = 26 }) {
  return (
    <div
      className="author-avatar"
      style={{
        background: color,
        width: size,
        height: size,
        fontSize: size * 0.35,
      }}
    >
      {initials}
    </div>
  )
}