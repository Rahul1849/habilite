'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || 'dQw4w9WgXcQ' // Placeholder

  return (
    <section id="video" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Watch Our <span className="text-[#ffd700]">Story</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Learn about our approach to patient care and advanced surgical techniques
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d7a] to-[#2c5f8a]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-200">
                <Play className="text-white" size={64} fill="white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-semibold mb-2">Habilite Clinics - Excellence in Surgical Care</h3>
              <p className="text-gray-200">Click to watch our introduction video</p>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="relative max-w-4xl w-full aspect-video bg-black rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close video"
              >
                <X size={32} />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Habilite Clinics Video"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
