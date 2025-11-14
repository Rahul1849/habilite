import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Laser Piles Treatment in Delhi | Best Piles Surgeon Dr. Kapil Agrawal',
  description: 'Expert laser piles treatment in Delhi, India by Dr. Kapil Agrawal. Latest Stapler, Laser, and DGHAL procedures for best management of piles with no recurrence. 23 years experience, 7000+ successful surgeries. Book consultation for piles treatment in Delhi.',
  keywords: [
    'laser piles treatment delhi',
    'piles surgery delhi',
    'hemorrhoids treatment delhi',
    'best piles surgeon delhi',
    'laser piles surgery delhi',
    'piles treatment india',
    'Dr. Kapil Agrawal piles',
  ],
  openGraph: {
    title: 'Laser Piles Treatment in Delhi | Best Piles Surgeon Dr. Kapil Agrawal',
    description: 'Expert laser piles treatment by Dr. Kapil Agrawal in Delhi. Latest procedures with no recurrence.',
    url: 'https://www.habiliteclinics.com/laser-surgery/hemorrhoids-piles',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laser-surgery/hemorrhoids-piles',
  },
}

export default function HemorrhoidsPilesPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Image */}
      <div className="container-custom mb-8">
        <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
          <Image
            src="/images/piles-surgeon-delhi-india.webp"
            alt="Laser Piles Surgeon in Delhi - Dr. Kapil Agrawal | Best Piles Treatment | Laser Hemorrhoids Surgery"
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
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">laser-piles-surgeon-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Laser Piles Surgeon in <span className="text-[#0891b2]">Delhi, India</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Dr. Kapil Agrawal offers the latest and most advanced Stapler, Laser, and DGHAL procedures for the best management of piles. Dr. Kapil Agrawal always ensures that his patients get the best results with no recurrence.
          </p>
          <CallUsButton />
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Laser Piles Treatment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hemorrhoids, commonly known as piles, are swollen veins in the lower rectum and anus. Dr. Kapil Agrawal specializes in advanced laser and minimally invasive procedures for effective piles treatment with no recurrence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With 23 years of experience, Dr. Kapil Agrawal is recognized as one of the best piles surgeons in Delhi and India, offering the latest treatment options for optimal patient outcomes.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Laser Piles Treatment" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Advanced Treatment Options</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Laser Piles Treatment',
                    description: 'State-of-the-art laser technology for precise and painless piles removal with minimal recovery time.',
                  },
                  {
                    title: 'Stapler Procedure',
                    description: 'Advanced stapler hemorrhoidopexy for effective treatment of prolapsed hemorrhoids.',
                  },
                  {
                    title: 'DGHAL Procedure',
                    description: 'Doppler-guided hemorrhoidal artery ligation for minimally invasive treatment.',
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Laser Piles Treatment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'No recurrence',
                  'Minimal pain',
                  'Quick recovery',
                  'No hospitalization',
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
                    <p className="text-gray-700 text-sm">Most patients can resume normal activities within 2-3 days after laser piles treatment, with minimal discomfort.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Laser Piles Treatment"
                serviceSlug="hemorrhoids-piles"
              />
            </div>
          </div>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Laser Piles Treatment" />
      </div>
    </div>
  )
}

