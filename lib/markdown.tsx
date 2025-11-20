import Link from 'next/link'
import React from 'react'

export function parseMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  let currentIndex = 0
  let lastIndex = 0
  
  // Handle links [text](url) first
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  let linkMatch
  
  while ((linkMatch = linkRegex.exec(text)) !== null) {
    if (linkMatch.index > lastIndex) {
      const beforeLink = text.substring(lastIndex, linkMatch.index)
      parts.push(...parseBold(beforeLink, currentIndex))
      currentIndex += beforeLink.length
    }
    parts.push(
      <Link key={`link-${currentIndex++}`} href={linkMatch[2]} className="text-primary-600 hover:text-primary-700 underline">
        {linkMatch[1]}
      </Link>
    )
    lastIndex = linkMatch.index + linkMatch[0].length
  }
  
  if (lastIndex < text.length) {
    const remaining = text.substring(lastIndex)
    parts.push(...parseBold(remaining, currentIndex))
  }
  
  return parts.length > 0 ? parts : [text]
}

function parseBold(text: string, startIndex: number): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  let currentIndex = startIndex
  let lastIndex = 0
  
  const boldRegex = /\*\*(.*?)\*\*/g
  let match
  
  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    parts.push(
      <strong key={`bold-${currentIndex++}`} className="font-semibold text-gray-900">
        {match[1]}
      </strong>
    )
    lastIndex = match.index + match[0].length
  }
  
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }
  
  return parts.length > 0 ? parts : [text]
}

