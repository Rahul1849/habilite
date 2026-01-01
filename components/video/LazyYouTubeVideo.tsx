'use client'

import { useState, useEffect, useRef } from 'react'

interface LazyYouTubeVideoProps {
  videoId: string
  title: string
  autoplay?: boolean
}

export default function LazyYouTubeVideo({
  videoId,
  title,
  autoplay = false,
}: LazyYouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Only set up observer after mount to prevent hydration issues
    if (!mounted || !containerRef.current) return

    // Use Intersection Observer to load video when user scrolls near it
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Just mark as ready, but don't load iframe until click
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '300px', // Start observing 300px before it comes into view
        threshold: 0.1,
      }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [mounted])

  const handleClick = () => {
    setIsLoaded(true)
  }

  // Build YouTube embed URL with performance optimizations
  const embedUrl = `https://www.youtube.com/embed/${videoId}?si=VVlGY3EaXALUcMQH&modestbranding=1&rel=0&showinfo=0&autoplay=${autoplay ? 1 : 0}`

  // Show placeholder during SSR and until user clicks
  if (!mounted || !isLoaded) {
    return (
      <section className="my-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div ref={containerRef} className="relative w-full aspect-video bg-gray-900">
              <button
                onClick={handleClick}
                className="absolute inset-0 w-full h-full flex items-center justify-center group cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#0891b2]/50"
                aria-label={`Play ${title}`}
                type="button"
              >
                <div className="text-center z-10">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">
                    <svg
                      className="w-20 h-20 mx-auto text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">Click to load video</p>
                </div>
                {/* YouTube thumbnail as background - only load after mount */}
                {mounted && (
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Load iframe only after user clicks
  return (
    <section className="my-12">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="relative w-full aspect-video bg-gray-900">
            <iframe
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

