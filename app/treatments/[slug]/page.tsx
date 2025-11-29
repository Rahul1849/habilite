import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getServiceBySlug, services } from '@/data/services'
import { Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import { getTestimonialsByTreatment } from '@/data/testimonials'
import TestimonialsSection from '@/components/treatments/TestimonialsSection'
import FAQSection from '@/components/treatments/FAQSection'
import StructuredData from '@/components/seo/StructuredData'
import { getFAQSchema, getBreadcrumbSchema, getMedicalProcedureSchema } from '@/lib/seo/schemaBuilders'

type Props = {
  params: Promise<{ slug: string }>
}

export const revalidate = 3600 // Revalidate every hour (ISR)

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Treatment Not Found' }

  return {
    title: service.seoTitle || `${service.name} | Habilite Clinics`,
    description: service.seoDescription || service.shortDescription,
    keywords: service.keywords || [
      service.name,
      'laparoscopic surgery',
      'delhi',
      'dr kapil agrawal',
    ],
    openGraph: {
      title: service.seoTitle || `${service.name} | Habilite Clinics`,
      description: service.seoDescription || service.shortDescription,
      url: `https://www.habiliteclinics.com/treatments/${slug}`,
      type: 'website',
      images: service.image ? [
        {
          url: service.image.startsWith('http') ? service.image : `https://www.habiliteclinics.com${service.image}`,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle || `${service.name} | Habilite Clinics`,
      description: service.seoDescription || service.shortDescription,
      images: service.image ? [service.image.startsWith('http') ? service.image : `https://www.habiliteclinics.com${service.image}`] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://www.habiliteclinics.com/treatments/${slug}`,
    },
  }
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const testimonials = getTestimonialsByTreatment(service.name)

  // Generate structured data
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Treatments', url: '/treatments' },
    { name: service.name, url: `/treatments/${slug}` },
  ])

  const medicalProcedureSchema = getMedicalProcedureSchema({
    name: service.name,
    description: service.shortDescription,
    url: `/treatments/${slug}`,
    procedureType: service.category,
    image: service.image,
    areaServed: ['Delhi', 'NCR', 'India'],
  })

  const faqSchema = service.faqs.length > 0 ? getFAQSchema({
    title: `${service.name} - Frequently Asked Questions`,
    description: `Common questions about ${service.name} at Habilite Clinics`,
    faqs: service.faqs,
  }) : null

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={medicalProcedureSchema} />
      {faqSchema && <StructuredData data={faqSchema} />}
      <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-96">
        <Image
          src={service.image}
          alt={`${service.name} - Expert treatment by Dr. Kapil Agrawal at Habilite Clinics`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/70" />
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="text-white">
            <div className="text-primary-300 mb-2">{service.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name}</h1>
            <p className="text-xl text-gray-100 max-w-2xl">{service.shortDescription}</p>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{service.overview}</p>
            </section>

            {/* Procedure Details */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Procedure Details</h2>
              <div className="space-y-3">
                {service.procedureDetails.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={24} />
                    <p className="text-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="bg-primary-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle2 className="text-primary-600 mr-2" size={20} />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recovery Time */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-2 flex items-center">
                <Clock className="mr-2 text-primary-500" size={24} />
                Recovery Time
              </h2>
              <p className="text-gray-700">{service.recoveryTime}</p>
            </section>

            {/* Testimonials */}
            {testimonials.length > 0 && (
              <TestimonialsSection testimonials={testimonials} />
            )}

            {/* FAQs */}
            {service.faqs.length > 0 && (
              <FAQSection faqs={service.faqs} />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-primary-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Book Consultation</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Estimated Cost</div>
                  <div className="text-2xl font-bold text-primary-600">{service.cost}</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Recovery Time</div>
                  <div className="text-lg font-semibold text-gray-900">{service.recoveryTime}</div>
                </div>
              </div>
              <Link href="/appointment" className="btn-primary w-full text-center block">
                <Calendar className="inline mr-2" size={20} />
                Book Appointment
              </Link>
            </div>

            {/* Related Services */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Related Treatments</h3>
              <ul className="space-y-3">
                {services
                  .filter(s => s.id !== service.id && s.category === service.category)
                  .slice(0, 3)
                  .map((relatedService) => (
                    <li key={relatedService.id}>
                      <Link
                        href={`/treatments/${relatedService.slug}`}
                        className="flex items-center text-primary-600 hover:text-primary-700 hover:underline"
                      >
                        <ArrowRight className="mr-2" size={16} />
                        {relatedService.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
