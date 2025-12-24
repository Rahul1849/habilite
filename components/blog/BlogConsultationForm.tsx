'use client'

import { Phone } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'

type BlogConsultationFormProps = {
  category?: string
}

export default function BlogConsultationForm({ category }: BlogConsultationFormProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Book Consultation</h3>
        <div className="flex flex-col gap-3 mb-6">
          <a
            href="tel:+919910024564"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0891b2] text-white rounded-lg font-semibold hover:bg-[#06b6d4] transition-colors text-sm"
          >
            <Phone size={16} />
            +91-99100-24564
          </a>
          <a
            href="tel:+919999456455"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0891b2] text-white rounded-lg font-semibold hover:bg-[#06b6d4] transition-colors text-sm"
          >
            <Phone size={16} />
            +91-99994-56455
          </a>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-6">
        <ConsultationForm
          serviceName={category || 'General Consultation'}
          serviceSlug={category?.toLowerCase().replace(/\s+/g, '-') || 'consultation'}
        />
      </div>
    </div>
  )
}

