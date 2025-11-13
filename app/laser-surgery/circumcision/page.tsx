import { Metadata } from 'next'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'

export const metadata: Metadata = {
  title: 'Circumcision in Delhi | Expert Circumcision Surgeon Dr. Kapil Agrawal',
  description: 'Expert circumcision in Delhi, India by Dr. Kapil Agrawal. Advanced laser and surgical techniques for safe and effective circumcision with minimal pain and quick recovery. 23 years experience, 7000+ successful surgeries. Book consultation for circumcision in Delhi.',
  keywords: [
    'circumcision delhi',
    'circumcision surgery delhi',
    'laser circumcision delhi',
    'best circumcision surgeon delhi',
    'circumcision treatment delhi',
    'circumcision india',
    'Dr. Kapil Agrawal circumcision',
  ],
  openGraph: {
    title: 'Circumcision in Delhi | Expert Circumcision Surgeon Dr. Kapil Agrawal',
    description: 'Expert circumcision by Dr. Kapil Agrawal in Delhi. Advanced laser and surgical techniques for safe and effective procedure.',
    url: 'https://www.habiliteclinics.com/laser-surgery/circumcision',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laser-surgery/circumcision',
  },
}

export default function CircumcisionPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Circumcision in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Dr. Kapil Agrawal offers expert circumcision using advanced laser and surgical techniques. The procedure is performed with precision, ensuring minimal pain, quick recovery, and excellent outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Circumcision</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Circumcision is a surgical procedure to remove the foreskin covering the head of the penis. It may be performed for medical, religious, or personal reasons. Dr. Kapil Agrawal specializes in safe and effective circumcision procedures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With 23 years of experience and 7000+ successful surgeries, Dr. Kapil Agrawal uses advanced techniques including laser circumcision to ensure minimal pain, quick recovery, and excellent cosmetic results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Treatment Options</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Laser Circumcision',
                    description: 'Advanced laser technology for precise circumcision with minimal bleeding, reduced pain, and faster healing.',
                  },
                  {
                    title: 'Surgical Circumcision',
                    description: 'Traditional surgical technique performed with precision, ensuring excellent outcomes and quick recovery.',
                  },
                  {
                    title: 'Stapler Circumcision',
                    description: 'Modern technique using a stapler device for quick and precise circumcision with minimal complications.',
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Advanced Circumcision</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Minimal pain',
                  'Quick recovery',
                  'Reduced bleeding',
                  'Better hygiene',
                  'Lower infection risk',
                  'Excellent cosmetic results',
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
                    <p className="text-gray-700 text-sm">Most patients can resume normal activities within 3-5 days after circumcision, with complete healing in 2-3 weeks.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments ensure proper healing, monitor for any complications, and provide guidance for optimal recovery.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Circumcision"
                serviceSlug="circumcision"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


