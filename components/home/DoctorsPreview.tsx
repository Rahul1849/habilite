import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award } from 'lucide-react'
import { doctors } from '@/data/doctors'

export default function DoctorsPreview() {
  const featuredDoctors = doctors.slice(0, 2)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Expert Doctors</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced surgeons dedicated to your health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {featuredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="relative w-full md:w-64 h-64 md:h-auto">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center mb-2">
                    <Award className="text-primary-500 mr-2" size={20} />
                    <span className="text-sm text-gray-600">{doctor.experience} Experience</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{doctor.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{doctor.designation}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{doctor.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doctor.specialization.slice(0, 3).map((spec, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="text-primary-500 font-semibold hover:text-primary-600 inline-flex items-center"
                  >
                    View Profile
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/dr-kapil-agrawal" className="btn-outline inline-flex items-center">
            View All Doctors
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
