import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { doctors } from '@/data/doctors'
import { Award, GraduationCap, Clock, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Expert Doctors',
  description: 'Meet our team of experienced surgeons specializing in laparoscopic and robotic surgery at Habilite Clinics.',
}

export default function DoctorsPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Doctors</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Meet our team of experienced surgeons dedicated to providing exceptional surgical care
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="relative w-full md:w-80 h-80 md:h-auto">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 flex-1">
                  <div className="flex items-center mb-3">
                    <Award className="text-primary-500 mr-2" size={20} />
                    <span className="text-sm text-gray-600">{doctor.experience} Experience</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-gray-900">{doctor.name}</h2>
                  <p className="text-primary-600 font-semibold mb-4">{doctor.designation}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <GraduationCap className="mr-2 text-primary-500" size={20} />
                      Qualifications
                    </h3>
                    <ul className="space-y-1">
                      {doctor.qualifications.map((qual, index) => (
                        <li key={index} className="text-gray-600 text-sm">• {qual}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Specializations</h3>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialization.map((spec, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Treatments</h3>
                    <p className="text-gray-600 text-sm">{doctor.treatments.join(', ')}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Clock size={16} className="mr-2" />
                        <span className="text-sm">{doctor.availability}</span>
                      </div>
                      <div className="text-primary-600 font-semibold">Consultation: {doctor.consultationFee}</div>
                    </div>
                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="btn-primary"
                    >
                      View Full Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
