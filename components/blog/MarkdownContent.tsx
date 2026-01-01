'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  if (!content || !content.trim()) {
    return <p className="text-gray-500 italic">No content available</p>
  }

  // Remove escape characters from markdown (e.g., \# becomes #)
  const cleanedContent = content.replace(/\\([#*_`\[\]()])/g, '$1')
  
  const lines = cleanedContent.split('\n')
  let skipNext = false
  let inList = false
  let listItems: string[] = []
  
  const parseMarkdown = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = []
    let currentIndex = 0
    
    // Handle links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    let linkMatch
    let lastIndex = 0
    
    while ((linkMatch = linkRegex.exec(text)) !== null) {
      if (linkMatch.index > lastIndex) {
        const beforeLink = text.substring(lastIndex, linkMatch.index)
        // Handle bold in text before link
        const boldRegex = /\*\*(.*?)\*\*/g
        let boldMatch
        let boldLastIndex = 0
        const boldParts: React.ReactNode[] = []
        
        while ((boldMatch = boldRegex.exec(beforeLink)) !== null) {
          if (boldMatch.index > boldLastIndex) {
            boldParts.push(beforeLink.substring(boldLastIndex, boldMatch.index))
          }
          boldParts.push(<strong key={`bold-${currentIndex++}`} className="font-semibold text-gray-900">{boldMatch[1]}</strong>)
          boldLastIndex = boldMatch.index + boldMatch[0].length
        }
        if (boldLastIndex < beforeLink.length) {
          boldParts.push(beforeLink.substring(boldLastIndex))
        }
        parts.push(...(boldParts.length > 0 ? boldParts : [beforeLink]))
      }
      parts.push(
        <Link key={`link-${currentIndex++}`} href={linkMatch[2]} className="text-[#0891b2] hover:text-[#06b6d4] underline">
          {linkMatch[1]}
        </Link>
      )
      lastIndex = linkMatch.index + linkMatch[0].length
    }
    if (lastIndex < text.length) {
      const afterLink = text.substring(lastIndex)
      // Handle bold in remaining text
      const boldRegex = /\*\*(.*?)\*\*/g
      let boldMatch
      let boldLastIndex = 0
      const boldParts: React.ReactNode[] = []
      
      while ((boldMatch = boldRegex.exec(afterLink)) !== null) {
        if (boldMatch.index > boldLastIndex) {
          boldParts.push(afterLink.substring(boldLastIndex, boldMatch.index))
        }
        boldParts.push(<strong key={`bold-${currentIndex++}`} className="font-semibold text-gray-900">{boldMatch[1]}</strong>)
        boldLastIndex = boldMatch.index + boldMatch[0].length
      }
      if (boldLastIndex < afterLink.length) {
        boldParts.push(afterLink.substring(boldLastIndex))
      }
      parts.push(...(boldParts.length > 0 ? boldParts : [afterLink]))
    }
    
    return parts.length > 0 ? parts : [text]
  }

  const parseTable = (tableLines: string[]): React.ReactNode => {
    if (tableLines.length < 2) return null
    
    const rows = tableLines.map(line => {
      // Remove leading/trailing pipes and split by pipe
      const cells = line.trim().split('|').map(cell => cell.trim()).filter(cell => cell)
      return cells
    }).filter(row => row.length > 0)
    
    if (rows.length < 2) return null
    
    const headerRow = rows[0]
    const dataRows = rows.slice(2) // Skip separator row
    
    return (
      <div key={`table-${Math.random()}`} className="my-8 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#0891b2]/10">
              {headerRow.map((cell, idx) => (
                <th key={idx} className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, rowIdx) => (
              <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="border border-gray-300 px-4 py-3 text-gray-700">
                    {parseMarkdown(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const elements: React.ReactNode[] = []
  let tableLines: string[] = []
  let inTable = false

  lines.forEach((line, index) => {
    if (skipNext) {
      skipNext = false
      return
    }

    // Handle empty lines
    if (!line.trim()) {
      if (inList) {
        // Close list
        if (listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside mb-6 ml-4 space-y-3">
              {listItems.map((item, itemIdx) => (
                <li key={itemIdx} className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {parseMarkdown(item)}
                </li>
              ))}
            </ul>
          )
          listItems = []
        }
        inList = false
      }
      if (inTable) {
        // Close table
        if (tableLines.length > 0) {
          elements.push(parseTable(tableLines))
          tableLines = []
        }
        inTable = false
      }
      elements.push(<div key={`spacer-${index}`} className="h-4" />)
      return
    }

    // Check for table
    if (line.trim().includes('|') && line.trim().split('|').length > 2) {
      inTable = true
      tableLines.push(line)
      return
    } else if (inTable) {
      // Close table if we were in one
      if (tableLines.length > 0) {
        elements.push(parseTable(tableLines))
        tableLines = []
      }
      inTable = false
    }

    // Check for "Why Choose Us" section
    const lowerLine = line.toLowerCase().trim()
    if (lowerLine.includes('## why choose us') || lowerLine.includes('## why choose')) {
      return
    }

    // Check for appointment booking section
    const hasAppointmentText = lowerLine.includes('## book an appointment') || lowerLine.includes('## book appointment')
    if (hasAppointmentText) {
      const nextLine = lines[index + 1] || ''
      if (nextLine.includes('+91') || nextLine.includes('99100') || nextLine.includes('99994') || 
          nextLine.toLowerCase().includes('contact us at')) {
        skipNext = true
      }
      return
    }

    // Skip phone number lines after appointment
    if (index > 0) {
      const prevLine = lines[index - 1] || ''
      const prevLower = prevLine.toLowerCase()
      if ((prevLower.includes('book an appointment') || prevLower.includes('to book an appointment')) && 
          (line.includes('+91') || line.includes('99100') || line.includes('99994')) &&
          !line.toLowerCase().includes('book')) {
        return
      }
    }

    // Headers
    const trimmedLine = line.trim()
    if (trimmedLine.startsWith('###')) {
      const title = trimmedLine.replace(/^###+\s*/, '').trim()
      if (title) {
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        elements.push(
          <h3 key={index} id={id} className="text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900 scroll-mt-24 leading-tight">
            {title}
          </h3>
        )
      }
    } else if (trimmedLine.startsWith('##') && !trimmedLine.startsWith('###')) {
      const title = trimmedLine.replace(/^##+\s*/, '').trim()
      if (title) {
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        elements.push(
          <h2 key={index} id={id} className="text-2xl md:text-3xl font-bold mt-10 mb-5 text-gray-900 scroll-mt-24 leading-tight">
            {title}
          </h2>
        )
      }
    } else if (trimmedLine.startsWith('#') && !trimmedLine.startsWith('##') && !trimmedLine.startsWith('###')) {
      const title = trimmedLine.replace(/^#+\s*/, '').trim()
      if (title) {
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        elements.push(
          <h2 key={index} id={id} className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-gray-900 scroll-mt-24 leading-tight">
            {title}
          </h2>
        )
      }
    }
    // Images
    else if (line.trim().match(/^!\[.*?\]\(.*?\)$/)) {
      const imageMatch = line.trim().match(/^!\[(.*?)\]\((.*?)\)$/)
      if (imageMatch) {
        const alt = imageMatch[1] || ''
        const src = imageMatch[2] || ''
        const imageSrc = src.startsWith('/') ? src : `/images/${src}`
        elements.push(
          <div key={index} className="my-8 md:my-12 w-full flex justify-center">
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src={imageSrc}
                  alt={alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )
      }
    }
    // Lists
    else if (line.trim().startsWith('- ') || line.trim().startsWith('* ') || line.trim().startsWith('✅')) {
      let content = line.trim()
      // Remove list marker
      if (content.startsWith('✅')) {
        content = '✅ ' + content.substring(1).trim()
      } else {
        content = content.replace(/^[-*]\s+/, '').trim()
      }
      if (!inList) {
        inList = true
        listItems = []
      }
      listItems.push(content)
    }
    // Regular paragraphs
    else {
      if (inList) {
        // Close list
        if (listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside mb-6 ml-4 space-y-3">
              {listItems.map((item, itemIdx) => (
                <li key={itemIdx} className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {parseMarkdown(item)}
                </li>
              ))}
            </ul>
          )
          listItems = []
        }
        inList = false
      }
      elements.push(
        <p key={index} className="mb-6 text-gray-700 leading-relaxed text-base md:text-lg">
          {parseMarkdown(line)}
        </p>
      )
    }
  })

  // Close any remaining list or table
  if (inList && listItems.length > 0) {
    elements.push(
      <ul key="list-final" className="list-disc list-inside mb-6 ml-4 space-y-3">
        {listItems.map((item, itemIdx) => (
          <li key={itemIdx} className="text-gray-700 leading-relaxed text-base md:text-lg">
            {parseMarkdown(item)}
          </li>
        ))}
      </ul>
    )
  }
  if (inTable && tableLines.length > 0) {
    elements.push(parseTable(tableLines))
  }

  return <div>{elements}</div>
}

