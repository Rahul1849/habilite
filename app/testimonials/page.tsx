'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Play, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials, getVideoTestimonials } from '@/data/testimonials'

// Helper function to extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/.*[?&]v=([^&\n?#]+)/,
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }
  
  return null
}

// Helper function to get YouTube thumbnail URL
function getYouTubeThumbnail(videoId: string, quality: 'maxresdefault' | 'hqdefault' = 'maxresdefault'): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
}

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Video' | 'Text'>('All')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const videoTestimonials = getVideoTestimonials()
  const textTestimonials = testimonials.filter(t => !t.videoUrl)

  const filteredTestimonials = selectedCategory === 'All'
    ? testimonials
    : selectedCategory === 'Video'
    ? videoTestimonials
    : textTestimonials

  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Testimonials</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Real stories from patients who trusted us with their care
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {['All', 'Video', 'Text'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as 'All' | 'Video' | 'Text')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {testimonial.videoUrl ? (
                // Video Testimonial Card
                <>
                  <div
                    className="relative aspect-video w-full cursor-pointer group"
                    onClick={() => setSelectedVideo(testimonial.videoUrl || null)}
                  >
                    {(() => {
                      const videoId = getYouTubeVideoId(testimonial.videoUrl || '')
                      if (!videoId) {
                        // Fallback to gradient if video ID can't be extracted
                        return (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors">
                                <Play className="text-white" size={32} fill="white" />
                              </div>
                            </div>
                          </>
                        )
                      }
                      
                      return (
                        <>
                          <Image
                            src={getYouTubeThumbnail(videoId)}
                            alt={`${testimonial.patientName} - ${testimonial.treatment} testimonial video`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="lazy"
                            quality={85}
                            onError={(e) => {
                              // Fallback to lower quality thumbnail if maxresdefault fails
                              const target = e.target as HTMLImageElement
                              if (target.src.includes('maxresdefault')) {
                                target.src = getYouTubeThumbnail(videoId, 'hqdefault')
                              }
                            }}
                          />
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
                              <Play className="text-[#0891b2] ml-1" size={32} fill="#0891b2" />
                            </div>
                          </div>
                          {/* Treatment Badge */}
                          <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            {testimonial.treatment}
                          </div>
                        </>
                      )
                    })()}
                  </div>
                  
                  {/* Video Testimonial Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Stars */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-yellow-400"
                          size={18}
                        />
                      ))}
                    </div>
                    
                    {/* Review Text */}
                    {testimonial.text && (
                      <p className="text-gray-700 mb-4 italic line-clamp-3 text-sm leading-relaxed">
                        &quot;{testimonial.text}&quot;
                      </p>
                    )}
                    
                    {/* Patient Info */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        {testimonial.image && (
                          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.patientName}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 text-base truncate">
                            {testimonial.patientName}
                          </div>
                          <div className="text-sm text-gray-600 truncate">
                            {testimonial.treatment}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Text Testimonial Card
                <div className="p-6 flex-1 flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="text-[#0891b2] opacity-20" size={40} />
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-gray-700 mb-6 italic text-base leading-relaxed flex-1">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  {/* Patient Info */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center mb-3">
                      {testimonial.image && (
                        <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.patientName}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-lg mb-1">
                          {testimonial.patientName}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.treatment}
                        </div>
                      </div>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-yellow-400"
                          size={18}
                        />
                      ))}
                      {testimonial.verified && (
                        <span className="ml-2 text-xs text-green-600 font-medium">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-semibold"
                aria-label="Close video"
              >
                ✕ Close
              </button>
              {(() => {
                const videoId = getYouTubeVideoId(selectedVideo)
                const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : selectedVideo
                return (
                  <iframe
                    src={embedUrl}
                    title="Patient Testimonial Video"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
