import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getDoctorBySlug, doctors } from '@/data/doctors'
import { Award, GraduationCap, Clock, Phone, Calendar, Video } from 'lucide-react'
import { services } from '@/data/services'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)
  if (!doctor) return { title: 'Doctor Not Found' }

  return {
    title: `${doctor.name} - ${doctor.designation} | Habilite Clinics`,
    description: doctor.bio,
  }
}

export default async function DoctorDetailPage({ params }: Props) {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)
  if (!doctor) notFound()

  const doctorServices = services.filter(service =>
    doctor.treatments.includes(service.name)
  )

  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="relative w-64 h-64 mx-auto md:mx-0">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover rounded-full border-4 border-white"
                sizes="256px"
              />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-xl text-gray-100 mb-4">{doctor.designation}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center">
                  <Award className="mr-2" size={20} />
                  <span>{doctor.experience} Experience</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2" size={20} />
                  <span>{doctor.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <section>
              <h2 className="text-3xl font-bold mb-4">About Dr. {doctor.name.split(' ').pop()}</h2>
              <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
            </section>

            {/* Qualifications */}
            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <GraduationCap className="mr-2 text-primary-500" size={28} />
                Qualifications & Education
              </h2>
              <div className="space-y-4">
                {doctor.education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold text-gray-900">{edu.degree}</div>
                    <div className="text-gray-600">{edu.institution}</div>
                    <div className="text-sm text-gray-500">{edu.year}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Specializations */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Specializations</h2>
              <div className="grid grid-cols-2 gap-3">
                {doctor.specialization.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-primary-50 text-primary-700 px-4 py-3 rounded-lg font-semibold text-center"
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            {doctor.achievements.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-4">Achievements</h2>
                <ul className="space-y-2">
                  {doctor.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="text-primary-500 mr-2 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Video Introduction */}
            {doctor.videoUrl && (
              <section>
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <Video className="mr-2 text-primary-500" size={28} />
                  Video Introduction
                </h2>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={doctor.videoUrl}
                    title={`${doctor.name} - Video Introduction`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Book Appointment</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="mr-2 text-primary-500" size={20} />
                  <span>{doctor.availability}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="mr-2 text-primary-500" size={20} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="text-2xl font-bold text-primary-600">
                  Consultation Fee: {doctor.consultationFee}
                </div>
              </div>
              <Link href="/appointment" className="btn-primary w-full text-center block">
                <Calendar className="inline mr-2" size={20} />
                Book Now
              </Link>
            </div>

            {/* Treatments */}
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

            {/* Languages */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {doctor.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
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
