'use client'

import { Phone } from 'lucide-react'

export default function CallUsButton() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-8">
      <a
        href="tel:+919999456455"
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
      >
        <Phone size={20} />
        <span>Call Us: +91 99994 56455</span>
      </a>
      <a
        href="tel:+919910024564"
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
      >
        <Phone size={20} />
        <span>Call Us: +91 99100 24564</span>
      </a>
    </div>
  )
}

