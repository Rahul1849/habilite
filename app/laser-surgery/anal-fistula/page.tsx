import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Anal Fistula Treatment in Delhi | Expert Anal Fistula Surgeon Dr. Kapil Agrawal',
  description: 'Expert anal fistula treatment in Delhi, India by Dr. Kapil Agrawal. Performs latest treatment options including Laser surgery & VAAFT technology for faster recovery. 23 years experience, 7000+ successful surgeries. Book consultation for anal fistula treatment in Delhi.',
  keywords: [
    'anal fistula treatment delhi',
    'anal fistula surgery delhi',
    'laser anal fistula delhi',
    'VAAFT anal fistula delhi',
    'best anal fistula surgeon delhi',
    'anal fistula treatment india',
    'Dr. Kapil Agrawal anal fistula',
  ],
  openGraph: {
    title: 'Anal Fistula Treatment in Delhi | Expert Anal Fistula Surgeon Dr. Kapil Agrawal',
    description: 'Expert anal fistula treatment by Dr. Kapil Agrawal in Delhi. Latest Laser surgery & VAAFT technology for faster recovery.',
    url: 'https://www.habiliteclinics.com/laser-surgery/anal-fistula',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laser-surgery/anal-fistula',
  },
}

export default function AnalFistulaPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Image */}
      <div className="container-custom mb-8">
        <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
          <Image
            src="/images/anal-fistula-surgeon-delhi-india.webp"
            alt="Anal Fistula Surgeon in Delhi - Dr. Kapil Agrawal | Laser Fistula Treatment | VAAFT Technology"
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
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]/80 mb-3">anal-fistula-surgeon-delhi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Anal Fistula Surgeon in <span className="text-[#0891b2]">Delhi, India</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Dr. Kapil Agrawal performs all the latest and advanced treatment options for the management of anal fistula. His procedures include Laser surgery & VAAFT technology which ensures faster recovery.
          </p>
          <CallUsButton />
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Anal Fistula Treatment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal performs all the latest and advanced treatment options for the management of anal fistula. His procedures include Laser surgery & VAAFT technology which ensures faster recovery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With 23 years of experience and 7000+ successful surgeries, Dr. Kapil Agrawal uses the latest techniques to ensure faster recovery and excellent outcomes for his patients, with minimal discomfort and lower recurrence rates.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Anal Fistula Treatment" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Advanced Treatment Options</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Laser Anal Fistula Surgery',
                    description: 'State-of-the-art laser technology for precise fistula treatment with minimal tissue damage and faster healing.',
                  },
                  {
                    title: 'VAAFT Technology',
                    description: 'Video-Assisted Anal Fistula Treatment (VAAFT) uses an endoscope to visualize and treat the fistula tract, ensuring complete removal.',
                  },
                  {
                    title: 'Fistulotomy',
                    description: 'Surgical procedure to open and drain the fistula tract, suitable for simple fistulas with excellent outcomes.',
                  },
                  {
                    title: 'Seton Placement',
                    description: 'Placing a seton (thread) through the fistula to help it heal gradually, often used for complex fistulas.',
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Advanced Fistula Treatment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Faster recovery',
                  'Minimal pain',
                  'Precise treatment',
                  'Lower recurrence rate',
                  'Better outcomes',
                  'Preserved sphincter function',
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
                    <p className="text-gray-700 text-sm">Most patients can resume normal activities within 1-2 weeks after anal fistula treatment, with complete healing in 4-6 weeks.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments ensure proper healing, monitor for recurrence, and address any concerns for optimal recovery.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Anal Fistula Treatment"
                serviceSlug="anal-fistula"
              />
            </div>
          </div>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Anal Fistula Treatment" />
      </div>
    </div>
  )
}

