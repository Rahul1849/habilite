import Link from 'next/link'
import { Video, Clock, Shield, CheckCircle2, ArrowRight } from 'lucide-react'

export default function VideoConsultation() {
  return (
    <section className="section-padding bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] text-white rounded-full text-sm font-semibold">
                <Video className="w-4 h-4" />
                <span>Video Consultation Available</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Consult Dr. Kapil Agrawal from{' '}
                <span className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] bg-clip-text text-transparent">
                  Anywhere
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Can&apos;t visit the clinic? Book a secure video consultation with Dr. Kapil Agrawal from the comfort of your home. Get expert medical advice without leaving your house.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {[
                  { icon: Clock, text: 'Flexible timing - Book at your convenience' },
                  { icon: Shield, text: 'Secure & private video consultation' },
                  { icon: CheckCircle2, text: 'Expert medical advice from anywhere' },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base sm:text-lg">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/video-consultation"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50"
              >
                <Video className="w-5 h-5" />
                Book Video Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="mt-4 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Note:</span> Payment is required before booking to confirm your video consultation slot.
              </p>
            </div>

            {/* Right: Visual Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-cyan-100">
                <div className="aspect-video bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-[#0891b2]/10 to-[#06b6d4]/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] flex items-center justify-center shadow-lg">
                      <Video className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-gray-700 font-semibold">Secure Video Call</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">HD Quality Video & Audio</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">End-to-End Encrypted</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Prescription & Reports via Email</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

