'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Quote, ArrowRight, Play } from 'lucide-react'
import { testimonials as fallbackTestimonials } from '@/data/testimonials'
import type { Testimonial } from '@/lib/sanity/types'
import { getImageUrl } from '@/lib/sanity/utils'

interface TestimonialsSliderProps {
  testimonials?: Testimonial[]
}

// Helper function to extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string | undefined): string | null {
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

// Transform Sanity testimonial to legacy format
function transformTestimonial(t: Testimonial | any) {
  if (!t._id) return t // Already in legacy format
  return {
    id: t._id,
    patientName: t.name,
    patientAge: t.patientAge || 0,
    treatment: t.treatment || '',
    rating: t.rating,
    text: t.message,
    image: getImageUrl(t.image) || undefined,
    videoUrl: undefined, // Add if needed
    date: t.date,
    verified: t.verified || false,
  }
}

export default function TestimonialsSlider({ testimonials: sanityTestimonials }: TestimonialsSliderProps) {
  const testimonials = (sanityTestimonials && sanityTestimonials.length > 0 
    ? sanityTestimonials.map(transformTestimonial)
    : fallbackTestimonials) as typeof fallbackTestimonials
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (testimonials.length === 0) return
    // Use setInterval for efficient auto-rotation
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  if (testimonials.length === 0) return null
  
  const currentTestimonial = testimonials[currentIndex]

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <section id="testimonials" className="section-padding bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Patient <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from patients who trusted us with their care
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="animate-pulse">
                <div className="aspect-video bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Patient <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from patients who trusted us with their care
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            key={currentIndex}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-fade-in"
          >
            {currentTestimonial.videoUrl ? (
              // Video Testimonial with Thumbnail
              <div>
                <a
                  href={currentTestimonial.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative aspect-video rounded-xl overflow-hidden mb-6 cursor-pointer"
                  aria-label={`Watch ${currentTestimonial.patientName}'s testimonial video`}
                >
                  {(() => {
                    const videoId = getYouTubeVideoId(currentTestimonial.videoUrl)
                    if (!videoId) return null
                    
                    // Priority loading for first testimonial, lazy for others
                    const isFirstTestimonial = currentIndex === 0
                    
                    return (
                      <>
                        <Image
                          src={getYouTubeThumbnail(videoId)}
                          alt={`${currentTestimonial.patientName} - ${currentTestimonial.treatment} testimonial video`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 896px"
                          loading={isFirstTestimonial ? "eager" : "lazy"}
                          priority={isFirstTestimonial}
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
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 md:p-5 group-hover:scale-110 transition-transform shadow-lg">
                            <Play className="text-[#0891b2] ml-1" size={32} fill="#0891b2" />
                          </div>
                        </div>
                        {/* Video Duration/Info Badge */}
                        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                          Watch Video
                        </div>
                      </>
                    )
                  })()}
                </a>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={18}
                    />
                  ))}
                </div>
                
                <div className="mb-4">
                  <div className="font-semibold text-gray-900 text-lg mb-1">
                    {currentTestimonial.patientName}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {currentTestimonial.treatment}
                  </div>
                  {currentTestimonial.text && (
                    <p className="text-base text-gray-700 italic line-clamp-2">
                      &quot;{currentTestimonial.text}&quot;
                    </p>
                  )}
                </div>
              </div>
            ) : (
              // Text Testimonial (Fallback)
              <div>
                <Quote className="text-[#0891b2] opacity-30 mb-4" size={40} />
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">
                  &quot;{currentTestimonial.text}&quot;
                </p>
                <div className="flex items-center">
                  {currentTestimonial.image && (
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.patientName}
                        fill
                        className="object-cover"
                        sizes="64px"
                        loading="lazy"
                        quality={85}
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-gray-900">
                      {currentTestimonial.patientName}
                    </div>
                    <div className="text-sm text-gray-600">
                      {currentTestimonial.treatment}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#0891b2] w-8'
                    : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* View All Link */}
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-[#0891b2] hover:text-[#06b6d4] font-semibold transition-colors"
            >
              View All Testimonials
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
