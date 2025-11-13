'use client'

import Image from 'next/image'
import { Award } from 'lucide-react'
import { useState } from 'react'

interface AwardData {
  title: string
  organization: string
  year: string
  description: string
  logo?: string
}

export default function AwardCard({ award }: { award: AwardData }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="flex flex-col sm:flex-row items-start gap-4">
      {/* Award Logo/Icon */}
      <div className="flex-shrink-0 w-full sm:w-24 h-24 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
        {award.logo && !imageError ? (
          <div className="relative w-20 h-20">
            <Image
              src={award.logo}
              alt={`${award.organization || award.title} Award Logo`}
              fill
              className="object-contain"
              sizes="96px"
              loading="lazy"
              quality={90}
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] text-white p-3 rounded-full">
            <Award size={24} className="fill-current" />
          </div>
        )}
      </div>
      
      {/* Award Details */}
      <div className="flex-1 min-w-0">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{award.title}</h3>
          {award.organization && (
            <p className="text-[#0891b2] font-semibold mb-1 text-base">{award.organization}</p>
          )}
          <p className="text-gray-600 text-sm font-medium">{award.year}</p>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{award.description}</p>
      </div>
    </div>
  )
}

