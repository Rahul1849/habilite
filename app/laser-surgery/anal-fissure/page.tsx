import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Anal Fissure Treatment in Delhi | Expert Anal Fissure Surgeon Dr. Kapil Agrawal',
  description: 'Expert anal fissure treatment in Delhi, India by Dr. Kapil Agrawal. Offers non-surgical treatment, Botox injections, and Laser surgery for acute and chronic anal fissures with permanent outcomes. 23 years experience, 7000+ successful surgeries. Book consultation for anal fissure treatment in Delhi.',
  keywords: [
    'anal fissure treatment delhi',
    'anal fissure surgery delhi',
    'chronic anal fissure delhi',
    'laser anal fissure treatment delhi',
    'best anal fissure surgeon delhi',
    'anal fissure treatment india',
    'Dr. Kapil Agrawal anal fissure',
  ],
  openGraph: {
    title: 'Anal Fissure Treatment in Delhi | Expert Anal Fissure Surgeon Dr. Kapil Agrawal',
    description: 'Expert anal fissure treatment by Dr. Kapil Agrawal in Delhi. Non-surgical, Botox, and Laser surgery options with permanent outcomes.',
    url: 'https://www.habiliteclinics.com/laser-surgery/anal-fissure',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laser-surgery/anal-fissure',
  },
}

export default function AnalFissurePage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Image */}
      <div className="container-custom mb-8">
        <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
          <Image
            src="/images/anal-fissure-surgeon-delhi-india.webp"
            alt="Anal Fissure Treatment in Delhi - Dr. Kapil Agrawal | Laser Fissure Surgery | Botox Treatment"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
            priority
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container-custom mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">anal-fissure-treatment-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Anal Fissure Treatment in <span className="text-[#0891b2]">Delhi, India</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Dr. Kapil Agrawal offers non-surgical treatment, Botox injections, and Laser surgery for the management of both acute and chronic anal fissures with the best and permanent outcomes.
          </p>
          <CallUsButton />
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Anal Fissure Treatment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal offers non-surgical treatment, Botox injections, and Laser surgery for the management of both acute and chronic anal fissures with the best and permanent outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With 23 years of experience and 7000+ successful surgeries, Dr. Kapil Agrawal provides comprehensive treatment options tailored to each patient&apos;s condition, ensuring optimal results and permanent relief.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Anal Fissure Treatment" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Treatment Options</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Non-Surgical Treatment',
                    description: 'Conservative management with dietary changes, medications, and topical treatments for acute anal fissures.',
                  },
                  {
                    title: 'Botox Injections',
                    description: 'Botulinum toxin injections help relax the anal sphincter muscles, promoting healing of chronic anal fissures.',
                  },
                  {
                    title: 'Laser Anal Fissure Surgery',
                    description: 'Advanced laser surgery for chronic anal fissures that don&apos;t respond to conservative treatment, ensuring permanent relief.',
                  },
                ].map((treatment, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-2">{treatment.title}</h3>
                    <p className="text-gray-700 text-sm">{treatment.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Laser Anal Fissure Treatment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Permanent relief',
                  'Minimal pain',
                  'Quick recovery',
                  'No recurrence',
                  'Precise treatment',
                  'Better outcomes',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                    <p className="text-gray-700 text-sm">Most patients can resume normal activities within 3-5 days after laser anal fissure treatment, with complete healing in 2-4 weeks.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments ensure proper healing and address any concerns, ensuring permanent relief from anal fissure symptoms.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Anal Fissure Treatment"
                serviceSlug="anal-fissure"
              />
            </div>
          </div>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Anal Fissure Treatment" />
      </div>
    </div>
  )
}

