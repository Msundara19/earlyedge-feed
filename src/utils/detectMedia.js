export function detectMedia(url) {
  if (!url || url.trim() === '') return { mediaUrl: null, mediaType: null }

  const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i
  const trimmed = url.trim()

  if (imageExtensions.test(trimmed)) {
    return { mediaUrl: trimmed, mediaType: 'image' }
  }

  // basic URL check
  try {
    new URL(trimmed)
    return { mediaUrl: trimmed, mediaType: 'link' }
  } catch {
    return { mediaUrl: null, mediaType: null }
  }
}

export function extractDomain(url) {
  try {
    const { hostname } = new URL(url)
    return hostname.replace('www.', '')
  } catch {
    return url
  }
}