'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface OptimizedYouTubeVideoProps {
  videoId: string
  title: string
  description?: string
  thumbnailQuality?: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault'
}

export default function OptimizedYouTubeVideo({
  videoId,
  title,
  description,
  thumbnailQuality = 'maxresdefault',
}: OptimizedYouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&si=VVlGY3EaXALUcMQH`

  const handleClick = () => {
    setIsLoaded(true)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="relative w-full aspect-video bg-gray-900">
        {!isLoaded ? (
          <button
            onClick={handleClick}
            className="absolute inset-0 w-full h-full group cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#0891b2]/50 transition-all"
            aria-label={`Play video: ${title}`}
          >
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="rounded-full bg-[#0891b2] p-4 sm:p-5 shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="text-white w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <p className="text-white text-sm sm:text-base font-semibold drop-shadow-lg">
                {title}
              </p>
            </div>
          </button>
        ) : (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            style={{ border: 0 }}
          />
        )}
      </div>
      {description && (
        <div className="p-6 bg-gradient-to-br from-[#0891b2]/5 to-[#06b6d4]/5">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  )
}

