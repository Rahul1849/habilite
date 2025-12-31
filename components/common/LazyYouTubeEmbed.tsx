'use client'

import { useState, useEffect } from 'react'

interface LazyYouTubeEmbedProps {
  videoId: string
  title: string
}

export default function LazyYouTubeEmbed({ videoId, title }: LazyYouTubeEmbedProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    // Use Intersection Observer to load video when it's about to be visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true)
            // Small delay to ensure it's actually needed
            setTimeout(() => setShouldLoad(true), 100)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '200px', // Start loading 200px before it's visible
        threshold: 0.1,
      }
    )

    const element = document.getElementById(`youtube-embed-${videoId}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
      observer.disconnect()
    }
  }, [videoId])

  if (!shouldLoad) {
    return (
      <div
        id={`youtube-embed-${videoId}`}
        className="absolute inset-0 w-full h-full bg-gray-900 flex items-center justify-center cursor-pointer"
        onClick={() => setShouldLoad(true)}
        aria-label={`Load ${title}`}
      >
        <div className="text-white text-center">
          <svg
            className="w-16 h-16 mx-auto mb-4 opacity-75"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <p className="text-sm">Click to load video</p>
        </div>
      </div>
    )
  }

  return (
    <iframe
      id={`youtube-embed-${videoId}`}
      src={`https://www.youtube.com/embed/${videoId}?si=VVlGY3EaXALUcMQH&modestbranding=1&rel=0&showinfo=0&loading=lazy`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
      loading="lazy"
      style={{ border: 0 }}
    />
  )
}

