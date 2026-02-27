const COLORS = [
  '#6C47FF', // indigo
  '#0EA5A0', // teal
  '#F97316', // orange
  '#EC4899', // pink
  '#8B5CF6', // purple
  '#10B981', // emerald
  '#F59E0B', // amber
  '#3B82F6', // blue
]

export function colorFromName(name) {
  if (!name) return COLORS[0]
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return COLORS[Math.abs(hash) % COLORS.length]
}

export function getInitials(name) {
  if (!name) return '?'
  return name
    .trim()
    .split(' ')
    .map(word => word[0].toUpperCase())
    .slice(0, 2)
    .join('')
}