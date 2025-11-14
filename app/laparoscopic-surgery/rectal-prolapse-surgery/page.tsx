import { Metadata } from 'next'
import { CheckCircle2, Clock } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Rectal Prolapse Surgery in Delhi | Expert Surgeon Dr. Kapil Agrawal',
  description: 'Expert rectal prolapse surgery in Delhi, India by Dr. Kapil Agrawal. Advanced surgical treatment using minimally invasive techniques. 23 years experience, 7000+ successful surgeries. Book consultation for rectal prolapse treatment in Delhi.',
  keywords: [
    'rectal prolapse surgery delhi',
    'rectal prolapse treatment delhi',
    'best rectal prolapse surgeon delhi',
    'laparoscopic rectal prolapse surgery delhi',
    'rectal prolapse surgery india',
    'Dr. Kapil Agrawal rectal prolapse',
  ],
  openGraph: {
    title: 'Rectal Prolapse Surgery in Delhi | Expert Surgeon Dr. Kapil Agrawal',
    description: 'Expert rectal prolapse surgery by Dr. Kapil Agrawal in Delhi. Advanced minimally invasive treatment with 23 years experience.',
    url: 'https://www.habiliteclinics.com/laparoscopic-surgery/rectal-prolapse-surgery',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laparoscopic-surgery/rectal-prolapse-surgery',
  },
}

export default function RectalProlapseSurgeryPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Rectal Prolapse Surgery in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Dr. Kapil Agrawal performs advanced laparoscopic and robotic surgeries for the management of hiatus hernia and gastro-oesophageal reflux disease, who fails to respond to medical management.
            </p>
            <CallUsButton />
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Rectal Prolapse Surgery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rectal prolapse occurs when the rectum slips out of place and protrudes from the anus. Dr. Kapil Agrawal specializes in expert surgical treatment for rectal prolapse using minimally invasive techniques.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With 23 years of experience, Dr. Kapil Agrawal offers advanced laparoscopic and robotic procedures for rectal prolapse, ensuring optimal outcomes and faster recovery.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Rectal Prolapse Surgery" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Minimally Invasive Rectal Prolapse Surgery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Faster recovery',
                  'Minimal scarring',
                  'Reduced pain',
                  'Lower complication rate',
                  'Shorter hospital stay',
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
                    <p className="text-gray-700 text-sm">Recovery varies based on the procedure, with most patients resuming normal activities within 2-4 weeks.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Rectal Prolapse Surgery"
                serviceSlug="rectal-prolapse-surgery"
              />
            </div>
          </div>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Rectal Prolapse Surgery" />
      </div>
    </div>
  )
}

