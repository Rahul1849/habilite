import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import { ArrowRight, Search } from 'lucide-react'
import TreatmentsFilter from '@/components/treatments/TreatmentsFilter'

export const metadata: Metadata = {
  title: 'Our Treatments & Services',
  description: 'Comprehensive list of surgical treatments and services offered at Habilite Clinics. Laparoscopic, robotic, and minimally invasive procedures.',
}

export default function TreatmentsPage() {
  const categories = Array.from(new Set(services.map(s => s.category)))

  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Treatments & Services</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Comprehensive surgical care using advanced minimally invasive techniques
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <TreatmentsFilter categories={categories} services={services} />
      </div>
    </div>
  )
}
