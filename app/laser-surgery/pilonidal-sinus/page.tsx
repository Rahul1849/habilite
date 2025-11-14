import { Metadata } from 'next'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Pilonidal Sinus Treatment in Delhi | Expert Pilonidal Sinus Surgeon Dr. Kapil Agrawal',
  description: 'Expert pilonidal sinus treatment in Delhi, India by Dr. Kapil Agrawal. Offers advanced treatment including laser technology, open conventional techniques and FLAP surgeries. 23 years experience, 7000+ successful surgeries. Book consultation for pilonidal sinus treatment in Delhi.',
  keywords: [
    'pilonidal sinus treatment delhi',
    'pilonidal sinus surgery delhi',
    'laser pilonidal sinus delhi',
    'FLAP surgery pilonidal sinus delhi',
    'best pilonidal sinus surgeon delhi',
    'pilonidal sinus treatment india',
    'Dr. Kapil Agrawal pilonidal sinus',
  ],
  openGraph: {
    title: 'Pilonidal Sinus Treatment in Delhi | Expert Pilonidal Sinus Surgeon Dr. Kapil Agrawal',
    description: 'Expert pilonidal sinus treatment by Dr. Kapil Agrawal in Delhi. Advanced laser technology and FLAP surgeries for optimal outcomes.',
    url: 'https://www.habiliteclinics.com/laser-surgery/pilonidal-sinus',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laser-surgery/pilonidal-sinus',
  },
}

export default function PilonidalSinusPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Pilonidal Sinus Treatment in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Dr. Kapil Agrawal offers advanced pilonidal sinus treatment depending upon the complexity of the disease. The treatment includes laser technology, open conventional techniques and FLAP surgeries.
            </p>
            <CallUsButton />
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Pilonidal Sinus Treatment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal offers advanced pilonidal sinus treatment depending upon the complexity of the disease. The treatment includes laser technology, open conventional techniques and FLAP surgeries.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With 23 years of experience and 7000+ successful surgeries, Dr. Kapil Agrawal provides personalized treatment plans based on the complexity of the disease, ensuring optimal outcomes for each patient with lower recurrence rates.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Pilonidal Sinus Treatment" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Treatment Options</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Laser Pilonidal Sinus Treatment',
                    description: 'Advanced laser technology for precise removal of pilonidal sinus with minimal tissue damage and faster healing.',
                  },
                  {
                    title: 'FLAP Surgery',
                    description: 'Advanced surgical technique using tissue flaps to close the sinus, reducing recurrence rates and promoting better healing.',
                  },
                  {
                    title: 'Open Conventional Surgery',
                    description: 'Traditional surgical approach for complex or recurrent pilonidal sinus cases, ensuring complete removal.',
                  },
                  {
                    title: 'Minimally Invasive Techniques',
                    description: 'Less invasive procedures for early-stage pilonidal sinus, offering faster recovery and minimal scarring.',
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Advanced Treatment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Lower recurrence rate',
                  'Faster healing',
                  'Minimal scarring',
                  'Precise treatment',
                  'Better outcomes',
                  'Reduced complications',
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
                    <p className="text-gray-700 text-sm">Recovery time varies based on the treatment method, typically ranging from 1-3 weeks for laser treatment to 4-6 weeks for FLAP surgery.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments ensure proper wound healing, monitor for recurrence, and provide guidance for optimal recovery.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Post-operative Care Section */}
            <PostOperativeCare />

            {/* WhatsApp Expert Chat */}
            <WhatsAppExpertChat serviceName="Pilonidal Sinus Treatment" />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Pilonidal Sinus Treatment"
                serviceSlug="pilonidal-sinus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

