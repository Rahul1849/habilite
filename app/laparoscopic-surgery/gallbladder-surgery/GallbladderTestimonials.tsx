'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Play, Quote } from 'lucide-react'
import { testimonials, getTestimonialsByTreatment } from '@/data/testimonials'

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
  return match && match[1] ? match[1] : null
}

// Helper function to get YouTube thumbnail URL
function getYouTubeThumbnail(videoId: string, quality: 'maxresdefault' | 'hqdefault' = 'maxresdefault'): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
}

export default function GallbladderTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  
  // Get all testimonials related to gallbladder surgery
  const gallbladderTestimonials = getTestimonialsByTreatment('Laparoscopic Gallbladder Surgery')
  // Also include any testimonials that mention gallbladder or are general laparoscopic/robotic surgery
  const additionalTestimonials = testimonials.filter(
    t => !gallbladderTestimonials.find(gt => gt.id === t.id) && 
    (t.treatment.toLowerCase().includes('gallbladder') || 
     (t.videoUrl && (t.treatment.toLowerCase().includes('robotic') || t.treatment.toLowerCase().includes('laparoscopic'))))
  )
  
  const allGallbladderTestimonials = [...gallbladderTestimonials, ...additionalTestimonials]
  
  // Remove text testimonials: Rajesh Kumar (id: '1') and Sunita Devi (id: '4')
  const filteredTestimonials = allGallbladderTestimonials.filter(t => t.id !== '1' && t.id !== '4')
  
  // Add the two new YouTube video testimonials
  const newVideoTestimonials = [
    {
      id: 'gallbladder-video-1',
      patientName: 'Gallbladder Stone Patient',
      patientAge: 0,
      treatment: 'Laparoscopic Gallbladder Surgery',
      rating: 5,
      text: 'Patient testimonial about gallbladder stone surgery experience with Dr. Kapil Agrawal.',
      videoUrl: 'https://youtu.be/sBfXG1Miajs?si=pWGYzMlWajjL-GLR',
      date: '2024-12-01',
      verified: true
    },
    {
      id: 'gallbladder-video-2',
      patientName: 'Gallbladder Stone Patient',
      patientAge: 0,
      treatment: 'Laparoscopic Gallbladder Surgery',
      rating: 5,
      text: 'Patient testimonial about gallbladder stone surgery experience with Dr. Kapil Agrawal.',
      videoUrl: 'https://youtu.be/-Lq2NxW1d1s?si=UrPfQt8e4mqptjha',
      date: '2024-12-01',
      verified: true
    }
  ]
  
  const videoTestimonials = [...filteredTestimonials.filter(t => t.videoUrl), ...newVideoTestimonials]
  const textTestimonials = filteredTestimonials.filter(t => !t.videoUrl)

  // Combine all testimonials, prioritizing video ones, limit to 6 for display
  const allTestimonials = [...videoTestimonials, ...textTestimonials].slice(0, 6)

  if (allTestimonials.length === 0) {
    return null
  }

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Patient Testimonials
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real stories from patients who underwent gallbladder surgery with Dr. Kapil Agrawal
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTestimonials.map((testimonial) => {
          const videoId = testimonial.videoUrl ? getYouTubeVideoId(testimonial.videoUrl) : null
          
          // Normalize text and patient name for consistency (override for Ms. Tuba testimonial id '3')
          const displayText = testimonial.id === '3' 
            ? 'Patient testimonial about gallbladder stone surgery experience with Dr. Kapil Agrawal.'
            : testimonial.text
          const displayPatientName = testimonial.id === '3'
            ? 'Gallbladder Stone Patient'
            : testimonial.patientName
          const displayTreatment = testimonial.id === '3'
            ? 'Laparoscopic Gallbladder Surgery'
            : testimonial.treatment

          return (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {testimonial.videoUrl && videoId ? (
                // Video Testimonial Card
                <>
                  <div
                    className="relative aspect-video w-full cursor-pointer group"
                    onClick={() => setSelectedVideo(testimonial.videoUrl || null)}
                  >
                    <Image
                      src={getYouTubeThumbnail(videoId)}
                      alt={`${displayPatientName} - Video Testimonial`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault fails
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
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3 flex-1">
                      {displayText}
                    </p>
                    <div className="border-t pt-3">
                      <p className="font-semibold text-gray-900 text-sm">{displayPatientName}</p>
                      <p className="text-gray-600 text-xs">{displayTreatment}</p>
                    </div>
                  </div>
                </>
              ) : (
                // Text Testimonial Card
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-4">
                    <Quote className="text-[#0891b2] w-8 h-8 mb-2" />
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed flex-1">
                      {testimonial.text}
                    </p>
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

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
            >
              ×
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo)}?autoplay=1`}
              title="Video Testimonial"
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

