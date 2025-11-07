'use client'

import { Phone, Calendar, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function MobileStickyFooter() {
  const whatsappNumber = '919910024564'
  const whatsappMessage = encodeURIComponent('Hello, I would like to book an appointment with Dr. Kapil Agrawal.')

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9997] lg:hidden bg-gray-900 border-t-2 border-gray-700 shadow-2xl">
      <div className="grid grid-cols-3 divide-x divide-gray-700">
        {/* Call Button */}
        <a
          href="tel:+919910024564"
          className="flex flex-col items-center justify-center py-3.5 px-2 bg-gray-800 hover:bg-gray-700 text-white transition-all duration-200 active:bg-gray-600 active:scale-95"
          aria-label="Call us"
        >
          <Phone size={24} className="mb-1.5" />
          <span className="text-xs font-bold">Call</span>
        </a>

        {/* Appointment Button */}
        <Link
          href="/appointment"
          className="flex flex-col items-center justify-center py-5 px-2 bg-gray-800 hover:bg-gray-700 text-white transition-all duration-200 active:bg-gray-600 active:scale-95"
          aria-label="Book appointment"
        >
          <Calendar size={26} className="mb-1.5" />
          <span className="text-xs font-bold">Appointment</span>
        </Link>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3.5 px-2 bg-gray-800 hover:bg-gray-700 text-white transition-all duration-200 active:bg-gray-600 active:scale-95"
          aria-label="WhatsApp us"
        >
          <MessageCircle size={24} className="mb-1.5" />
          <span className="text-xs font-bold">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

