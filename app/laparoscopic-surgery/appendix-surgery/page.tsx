import { Metadata } from 'next'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Appendix Surgery in Delhi | Best Appendicitis Surgeon Dr. Kapil Agrawal',
  description: 'Expert appendix surgery in Delhi, India by Dr. Kapil Agrawal. Best laparoscopic surgeon for appendicitis with excellent outcomes. 23 years experience, 7000+ successful surgeries. Book consultation for appendicitis surgery in Delhi.',
  keywords: [
    'appendix surgery delhi',
    'appendicitis surgery delhi',
    'laparoscopic appendectomy delhi',
    'best appendicitis surgeon delhi',
    'appendix removal delhi',
    'appendicitis treatment delhi',
    'Dr. Kapil Agrawal appendicitis',
  ],
  openGraph: {
    title: 'Appendix Surgery in Delhi | Best Appendicitis Surgeon Dr. Kapil Agrawal',
    description: 'Expert appendix surgery by Dr. Kapil Agrawal in Delhi. Best laparoscopic surgeon for appendicitis with 23 years experience.',
    url: 'https://www.habiliteclinics.com/laparoscopic-surgery/appendix-surgery',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laparoscopic-surgery/appendix-surgery',
  },
}

export default function AppendixSurgeryPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Appendicitis Surgeon in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Dr. Kapil Agrawal is one of the best laparoscopic surgeons for appendicitis. He has performed some of the most difficult appendicectomies laparoscopically with excellent outcomes.
            </p>
            <CallUsButton />
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Appendicitis Surgery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Appendicitis is the inflammation of the appendix, requiring prompt surgical removal. Dr. Kapil Agrawal specializes in laparoscopic appendectomy, a minimally invasive procedure that offers faster recovery and minimal scarring.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With 23 years of experience, Dr. Kapil Agrawal has successfully performed complex appendicectomies laparoscopically, making him one of the best appendicitis surgeons in Delhi and India.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Appendix Surgery" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Laparoscopic Appendectomy</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Faster recovery time',
                  'Minimal scarring',
                  'Reduced pain',
                  'Shorter hospital stay',
                  'Lower risk of infection',
                  'Quick return to activities',
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
                    <p className="text-gray-700 text-sm">Most patients can return to normal activities within 1-2 weeks after laparoscopic appendectomy.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Appendix Surgery"
                serviceSlug="appendix-surgery"
              />
            </div>
          </div>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Appendix Surgery" />
      </div>
    </div>
  )
}

