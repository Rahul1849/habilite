'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Play, Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

function getYouTubeVideoId(url: string): string | null {
  if (!url) return null
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
  return match && match[1] ? match[1] : null
}

function getYouTubeThumbnail(videoId: string, quality: 'maxresdefault' | 'hqdefault' = 'maxresdefault') {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
}

export default function PilesTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const pilesTestimonials = testimonials
    .filter(
      (t) =>
        t.treatment.toLowerCase().includes('piles') ||
        t.treatment.toLowerCase().includes('hemorrhoid') ||
        t.tags?.some((tag) => tag.toLowerCase().includes('piles') || tag.toLowerCase().includes('hemorrhoid'))
    )
    .slice(0, 6)

  // If no specific testimonials, show general laser surgery testimonials
  const displayTestimonials = pilesTestimonials.length > 0 
    ? pilesTestimonials 
    : testimonials.filter((t) => t.treatment.toLowerCase().includes('laser')).slice(0, 6)

  if (displayTestimonials.length === 0) return null

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Piles Patient Testimonials</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real stories from patients who underwent laser piles treatment with Dr. Kapil Agrawal
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayTestimonials.map((testimonial) => {
          const videoId = testimonial.videoUrl ? getYouTubeVideoId(testimonial.videoUrl) : null

          return (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {testimonial.videoUrl && videoId ? (
                <>
                  <div className="relative aspect-video w-full cursor-pointer group" onClick={() => setSelectedVideo(testimonial.videoUrl || null)}>
                    <Image
                      src={getYouTubeThumbnail(videoId)}
                      alt={`${testimonial.patientName} - Piles Testimonial`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        if (target.src.includes('maxresdefault')) {
                          target.src = getYouTubeThumbnail(videoId, 'hqdefault')
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors">
                        <Play className="text-white" size={32} fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3 flex-1">{testimonial.text}</p>
                    <div className="border-t pt-3">
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.patientName}</p>
                      <p className="text-gray-600 text-xs">{testimonial.treatment}</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-5 flex-1 flex flex-col">
                  <Quote className="text-[#0891b2] w-8 h-8 mb-3" />
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">{testimonial.text}</p>
                  <div className="border-t pt-3 mt-4">
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.patientName}</p>
                    <p className="text-gray-600 text-xs">{testimonial.treatment}</p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedVideo(null)} className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold">
              ×
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo)}?autoplay=1`}
              title="Piles Video Testimonial"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}

