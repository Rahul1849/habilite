import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { getImageUrl } from '@/lib/sanity/utils'
import type { HomePage } from '@/lib/sanity/types'

interface HeroProps {
  bannerTitle?: string
  bannerSubtitle?: string
  bannerImage?: HomePage['bannerImage']
}

export default function Hero({ bannerTitle, bannerSubtitle, bannerImage }: HeroProps) {
  // Fallback values
  const title = bannerTitle || "Dr. Kapil Agrawal"
  const subtitle = bannerSubtitle || "Best Laparoscopic Surgeon in Delhi, India"
  const imageUrl = getImageUrl(bannerImage) || "/images/dr.png"
  const imageAlt = bannerImage?.alt || "Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi, India with 23 years experience, 7000+ successful surgeries. Expert in gallbladder surgery, hernia surgery, bariatric surgery, and laser surgery in Delhi."
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ffd4b3] via-[#ffc49e] to-[#ffa07a] z-0">
      
      {/* Round Gradient Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-r from-[#f56336]/10 via-transparent to-[#f56336]/5"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Doctor Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/70 ring-4 ring-white/20">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 384px"
                priority
                fetchPriority="high"
                quality={85}
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-tight text-gray-900 break-words px-2 sm:px-0">
                {title.includes("Dr.") ? title : `Dr. ${title}`}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-gray-900 break-words px-2 sm:px-0">
                {subtitle}
              </h2>
            </div>

            <div className="space-y-2 sm:space-y-3 px-2 sm:px-0">
              <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed break-words" style={{ color: '#0d4a5a' }}>
                Leading Laparoscopic and Robotic Surgeon
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words" style={{ color: '#0d4a5a' }}>
                MBBS, MS (Surgery), MRCS (London, U.K), MMED (Singapore), FMAS
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3 px-2 sm:px-0 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words" style={{ color: '#0d4a5a' }}>
                Senior Consultant at Apollo Group of Hospitals, Delhi NCR
              </p>
              <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed break-words" style={{ color: '#0d4a5a' }}>
                23 Years Experience | 7000+ Successful Surgeries
              </p>
            </div>
          
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              <Link 
                href="/appointment" 
                className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Book Appointment
              </Link>
              <Link 
                href="/video-consultation" 
                className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 inline-flex items-center justify-center"
              >
                <svg className="mr-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Video Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {[
            { number: '10000+', label: 'Happy Patients' },
            { number: '7000+', label: 'Successful Surgeries' },
            { number: '3000+', label: 'International Patients' },
            { number: '23+ Years', label: 'Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center px-2 sm:px-0">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 break-words drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                {stat.number}
              </div>
              <div className="text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg font-semibold break-words" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
