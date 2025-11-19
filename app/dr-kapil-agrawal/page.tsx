import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Award, GraduationCap, Clock, Phone, Calendar, Video } from 'lucide-react'
import { getDoctorBySlug } from '@/data/doctors'
import { services } from '@/data/services'

const DOCTOR_SLUG = 'dr-kapil-agrawal'

const doctor = getDoctorBySlug(DOCTOR_SLUG)

if (!doctor) {
  throw new Error('Doctor data not found for Dr. Kapil Agrawal')
}

export const metadata: Metadata = {
  title: `${doctor.name} - ${doctor.designation} | Habilite Clinics`,
  description: doctor.bio,
  keywords: [
    doctor.name,
    doctor.designation,
    'laparoscopic surgeon',
    'robotic surgeon',
    'Delhi',
    'Apollo Hospitals',
    ...doctor.specialization.map((spec) => spec.toLowerCase()),
  ],
  openGraph: {
    title: `${doctor.name} - ${doctor.designation} | Habilite Clinics`,
    description: doctor.bio,
    type: 'profile',
    images: [
      {
        url: doctor.image.startsWith('http')
          ? doctor.image
          : `https://www.habiliteclinics.com${doctor.image}`,
        width: 800,
        height: 1000,
        alt: `${doctor.name} - ${doctor.designation}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${doctor.name} - ${doctor.designation}`,
    description: doctor.bio,
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/dr-kapil-agrawal',
  },
}

export default function DrKapilAgrawalPage() {
  const doctorData = getDoctorBySlug(DOCTOR_SLUG)

  if (!doctorData) {
    notFound()
  }

  const doctorServices = services.filter((service) => doctorData.treatments.includes(service.name))

  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto md:mx-0">
              <Image
                src={doctorData.image}
                alt={doctorData.name}
                fill
                className="object-cover rounded-full border-4 border-white shadow-2xl"
                sizes="(max-width: 768px) 320px, 384px"
                priority
                quality={90}
              />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">{doctorData.name}</h1>
              <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
                {doctorData.designation}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                  <Award className="mr-2 text-[#0891b2]" size={20} />
                  <span className="text-gray-900 font-semibold">{doctorData.experience} Experience</span>
                </div>
                <div className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                  <Clock className="mr-2 text-[#0891b2]" size={20} />
                  <span className="text-gray-900 font-semibold">{doctorData.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">About Dr. {doctorData.name.split(' ').pop()}</h2>
              <p className="text-gray-700 leading-relaxed">{doctorData.bio}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <GraduationCap className="mr-2 text-primary-500" size={28} />
                Qualifications & Education
              </h2>
              <div className="space-y-4">
                {doctorData.education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold text-gray-900">{edu.degree}</div>
                    <div className="text-gray-600">{edu.institution}</div>
                    <div className="text-sm text-gray-500">{edu.year}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Specializations</h2>
              <div className="grid grid-cols-2 gap-3">
                {doctorData.specialization.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-primary-50 text-primary-700 px-4 py-3 rounded-lg font-semibold text-center"
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </section>

            {doctorData.achievements.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-4">Achievements</h2>
                <ul className="space-y-2">
                  {doctorData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="text-primary-500 mr-2 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {doctorData.videoUrl && (
              <section>
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <Video className="mr-2 text-[#0891b2]" size={28} />
                  Video Introduction
                </h2>
                <div className="bg-gradient-to-br from-cyan-50 via-cyan-100/50 to-cyan-50 rounded-xl p-8 border-2 border-[#0891b2]/30">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Watch Dr. {doctorData.name.split(' ').pop()}&apos;s video introduction to learn more about his
                    expertise, approach to patient care, and surgical techniques.
                  </p>
                  <a
                    href={doctorData.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transform active:scale-95"
                    aria-label={`Watch ${doctorData.name} video introduction on YouTube`}
                  >
                    <Video className="mr-2" size={24} />
                    Watch on YouTube
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </a>
                </div>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Book Appointment</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="mr-2 text-primary-500" size={20} />
                  <span>{doctorData.availability}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="mr-2 text-primary-500" size={20} />
                  <span>+91 99994 56455</span>
                </div>
                <div className="text-2xl font-bold text-primary-600">
                  Consultation Fee: {doctorData.consultationFee}
                </div>
              </div>
              <Link href="/appointment" className="btn-primary w-full text-center block">
                <Calendar className="inline mr-2" size={20} />
                Book Now
              </Link>
            </div>

            {doctorServices.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Treatments Offered</h3>
                <ul className="space-y-2">
                  {doctorServices.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/treatments/${service.slug}`}
                        className="text-primary-600 hover:text-primary-700 hover:underline"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {doctorData.languages.map((lang, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

