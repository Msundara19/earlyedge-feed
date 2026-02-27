import { useState, useEffect } from 'react'
import { colorFromName, getInitials } from '../utils/colorFromName'

export function useAuthor() {
  const [authorName, setAuthorName] = useState('')
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('earlyedge_author')
    if (stored) {
      setAuthorName(stored)
    } else {
      setShowWelcome(true)
    }
  }, [])

  function saveAuthor(name) {
    const trimmed = name.trim()
    if (!trimmed) return
    localStorage.setItem('earlyedge_author', trimmed)
    setAuthorName(trimmed)
    setShowWelcome(false)
  }

  return {
    authorName,
    authorColor: colorFromName(authorName),
    authorInitials: getInitials(authorName),
    showWelcome,
    saveAuthor,
  }
}