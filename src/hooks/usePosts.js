import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { detectMedia } from '../utils/detectMedia'
import { colorFromName, getInitials } from '../utils/colorFromName'
import confetti from 'canvas-confetti'

const STORAGE_KEY = 'earlyedge_posts'

export function usePosts() {
  const [posts, setPosts] = useState([])

  // load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setPosts(JSON.parse(stored))
    } catch {
      setPosts([])
    }
  }, [])

  // save to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  }, [posts])

  function addPost({ title, description, tag, mood, mediaUrl: rawUrl, authorName }) {
    const { mediaUrl, mediaType } = detectMedia(rawUrl)

    const newPost = {
      id: uuidv4(),
      title: title.trim(),
      description: description.trim(),
      tag,
      mood,
      mediaUrl,
      mediaType,
      author: authorName,
      authorInitials: getInitials(authorName),
      authorColor: colorFromName(authorName),
      createdAt: new Date().toISOString(),
    }

    setPosts(prev => [newPost, ...prev])

    // confetti burst
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.3 },
      colors: ['#6C47FF', '#EC4899', '#F97316', '#0EA5A0', '#ffffff'],
    })
  }

  function getDigest() {
    const tags = ['Product', 'Research', 'Marketing', 'Team']
    const digest = {}
    tags.forEach(tag => {
      digest[tag] = posts.filter(p => p.tag === tag).slice(0, 3)
    })
    return digest
  }

  return { posts, addPost, getDigest }
}