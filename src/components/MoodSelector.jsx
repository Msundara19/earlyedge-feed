const MOODS = [
  { emoji: '🔥', label: 'Hot' },
  { emoji: '🧊', label: 'Blocked' },
  { emoji: '✅', label: 'Done' },
  { emoji: '🤔', label: 'Thinking' },
  { emoji: '🚀', label: 'Launched' },
]

export default function MoodSelector({ selected, onChange }) {
  return (
    <div>
      <label>Mood</label>
      <div className="mood-selector">
        {MOODS.map(({ emoji, label }) => (
          <button
            key={emoji}
            type="button"
            className={`mood-btn ${selected === emoji ? 'selected' : ''}`}
            onClick={() => onChange(emoji)}
            title={label}
          >
            {emoji} {label}
          </button>
        ))}
      </div>
    </div>
  )
}