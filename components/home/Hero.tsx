import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ffd4b3] via-[#ffc49e] to-[#ffa07a] z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f56336]/10 via-transparent to-[#f56336]/5" />

      {/* Doctor Image - Background */}
      <div className="absolute inset-0 opacity-20 md:opacity-30">
        <div className="relative w-full h-full">
          <Image
            src="/images/dr-kapil-agrawal.png"
            alt="Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            quality={85}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Doctor Image - Desktop */}
          <div className="hidden lg:block order-2">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dr-kapil-agrawal.png"
                  alt="Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi with 23 years experience, 7000+ successful surgeries"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 0px, 400px"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left order-1">
            {/* Doctor Image - Mobile/Tablet */}
            <div className="mb-8 lg:hidden flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white/50">
                <Image
                  src="/images/dr-kapil-agrawal.png"
                  alt="Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 192px, 0px"
                  priority
                  quality={90}
                />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900 break-words">
              Dr. <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Kapil Agrawal</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-gray-800 break-words">
              Best Laparoscopic Surgeon in Delhi
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-2 text-gray-700 break-words px-2 sm:px-0">
              MBBS, MS (Surgery), MRCS (London, U.K), MMED (Singapore), FMAS
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-8 text-gray-600 max-w-2xl lg:max-w-none mx-auto lg:mx-0 break-words px-2 sm:px-0">
              Senior Consultant at Apollo Group of Hospitals, Delhi NCR<br />
              <span className="text-gray-700 font-medium">23 Years Experience | 7000+ Successful Surgeries</span>
            </p>
          
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <Link 
                href="/appointment" 
                className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-bold text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center w-full sm:w-auto"
              >
                <Calendar className="mr-2" size={20} />
                Book Appointment
              </Link>
              <Link
                href="#video"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold text-base sm:text-lg transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto"
              >
                <Play className="mr-2" size={20} />
                Watch Video
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {[
            { number: '7000+', label: 'Successful Surgeries' },
            { number: '23 Years', label: 'Experience' },
            { number: '98%', label: 'Success Rate' },
            { number: 'Apollo', label: 'Senior Consultant' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 break-words drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                {stat.number}
              </div>
              <div className="text-gray-900 text-sm sm:text-base md:text-lg font-semibold break-words px-1" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
