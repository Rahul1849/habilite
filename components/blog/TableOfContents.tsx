'use client'

import { useEffect, useState } from 'react'

interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TableOfContentsItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const observedElements: Element[] = []
    let timer: NodeJS.Timeout

    // Wait for DOM to be ready
    timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id)
            }
          })
        },
        { rootMargin: '-20% 0% -80% 0%' }
      )

      items.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element && observer) {
          observer.observe(element)
          observedElements.push(element)
        }
      })

      // Note: We don't handle initial hash navigation to keep URL clean
      // Users can still use browser back/forward, but TOC clicks won't change URL
    }, 100)

    return () => {
      clearTimeout(timer)
      if (observer) {
        observedElements.forEach((el) => {
          observer?.unobserve(el)
        })
        observer.disconnect()
      }
    }
  }, [items])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, itemId: string) => {
    e.preventDefault()
    const element = document.getElementById(itemId)
    if (element) {
      // Smooth scroll to the element without changing URL
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:sticky lg:top-24">
      <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Table of Contents</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={(e) => handleClick(e, item.id)}
              className={`block w-full text-left py-2 px-3 rounded transition-colors cursor-pointer hover:bg-primary-50 hover:text-primary-600 ${
                activeId === item.id
                  ? 'bg-primary-100 text-primary-700 font-semibold'
                  : 'text-gray-600'
              }`}
              style={{ paddingLeft: `${(item.level - 2) * 16 + 12}px` }}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
