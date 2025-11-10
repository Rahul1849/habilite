'use client'

import { Phone, Calendar, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function MobileStickyFooter() {
  const whatsappNumber = '919910024564'
  const whatsappMessage = encodeURIComponent('Hello, I would like to book an appointment with Dr. Kapil Agrawal.')

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9997] lg:hidden bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] border-t border-[#0891b2]/30 shadow-lg">
      <div className="grid grid-cols-3 relative">
        {/* Call Button */}
        <a
          href="tel:+919910024564"
          className="flex flex-col items-center justify-center py-3 px-2 bg-transparent hover:bg-[#0891b2]/20 text-white transition-all duration-200 active:bg-[#0891b2]/30 active:scale-95"
          aria-label="Call us"
        >
          <Phone size={22} className="mb-1" />
          <span className="text-[10px] font-semibold leading-tight">Call</span>
        </a>

        {/* Appointment Button - 3D Elevated with Animation */}
        <div className="relative flex items-center justify-center">
          <Link
            href="/appointment"
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center py-4 px-4 rounded-full shadow-2xl hover:shadow-3xl text-white transition-all duration-300 active:scale-95 hover:scale-105 z-10 border-4 border-white/30 overflow-hidden group"
            aria-label="Book appointment"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-black via-[#0e7490] via-[#0891b2] via-[#06b6d4] via-[#22d3ee] via-[#06b6d4] via-[#0891b2] via-[#0e7490] to-black bg-[length:300%_100%] animate-gradient-smooth"></span>
            <Calendar size={28} className="mb-1 relative z-10" />
            <span className="text-[10px] font-bold leading-tight text-center relative z-10">Appointment</span>
          </Link>
        </div>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 px-2 bg-transparent hover:bg-[#0891b2]/20 text-white transition-all duration-200 active:bg-[#0891b2]/30 active:scale-95"
          aria-label="WhatsApp us"
        >
          <MessageCircle size={22} className="mb-1" />
          <span className="text-[10px] font-semibold leading-tight">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

