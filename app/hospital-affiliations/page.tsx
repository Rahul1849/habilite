import { Metadata } from 'next'
import HospitalAffiliations from '@/components/home/HospitalAffiliations'

export const metadata: Metadata = {
  title: 'Hospital Affiliations - Habilite Clinics',
  description: 'Dr. Kapil Agrawal is associated with leading Apollo Hospitals in Delhi NCR, providing world-class surgical care.',
}

export default function HospitalAffiliationsPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary py-16 border-b border-gray-200">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Hospital Affiliations</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Dr. Kapil Agrawal is associated with leading hospitals across Delhi NCR, providing world-class surgical care
          </p>
        </div>
      </div>
      <HospitalAffiliations />
    </div>
  )
}

