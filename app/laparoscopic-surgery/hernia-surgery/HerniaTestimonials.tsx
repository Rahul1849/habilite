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

export default function HerniaTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  // Get all hernia testimonials
  const herniaTestimonials = testimonials
    .filter((t) => t.treatment.toLowerCase().includes('hernia'))
  
  // Remove text testimonial: Meera Singh (id: '2')
  const filteredTestimonials = herniaTestimonials.filter(t => t.id !== '2')
  
  // Add the three new YouTube video testimonials
  const newVideoTestimonials = [
    {
      id: 'hernia-video-1',
      patientName: 'Hernia Surgery Patient',
      patientAge: 0,
      treatment: 'Hernia Surgery',
      rating: 5,
      text: 'Patient testimonial about hernia surgery experience with Dr. Kapil Agrawal.',
      videoUrl: 'https://youtu.be/mx-JNlf8qOE?si=WQnYnbYw9Olak9U0',
      date: '2024-12-01',
      verified: true
    },
    {
      id: 'hernia-video-2',
      patientName: 'Hernia Surgery Patient',
      patientAge: 0,
      treatment: 'Hernia Surgery',
      rating: 5,
      text: 'Patient testimonial about hernia surgery experience with Dr. Kapil Agrawal.',
      videoUrl: 'https://youtu.be/J9jeT5h3p_4?si=NVG-f4rLanZ7eRRQ',
      date: '2024-12-01',
      verified: true
    },
    {
      id: 'hernia-video-3',
      patientName: 'Hernia Surgery Patient',
      patientAge: 0,
      treatment: 'Hernia Surgery',
      rating: 5,
      text: 'Patient testimonial about hernia surgery experience with Dr. Kapil Agrawal.',
      videoUrl: 'https://youtu.be/LTGyPysXqH4?si=qp5uFV2EahZS4-Pq',
      date: '2024-12-01',
      verified: true
    }
  ]
  
  const videoTestimonials = [...filteredTestimonials.filter(t => t.videoUrl), ...newVideoTestimonials]
  const textTestimonials = filteredTestimonials.filter(t => !t.videoUrl)

  // Combine all testimonials, prioritizing video ones, limit to 6 for display
  const allTestimonials = [...videoTestimonials, ...textTestimonials].slice(0, 6)

  if (allTestimonials.length === 0) return null

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Hernia Patient Testimonials</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real stories from patients who underwent laparoscopic and robotic hernia repair with Dr. Kapil Agrawal
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTestimonials.map((testimonial) => {
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
                      alt={`${testimonial.patientName} - Hernia Testimonial`}
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
                      {[...Array(5)].map((_, i) => (
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
                  <div className="mb-4">
                    <Quote className="text-[#0891b2] w-8 h-8 mb-2" />
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed flex-1">{testimonial.text}</p>
                  </div>
                  <div className="border-t pt-3 mt-auto">
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
              title="Hernia Video Testimonial"
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

