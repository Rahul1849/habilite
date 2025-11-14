import { Metadata } from 'next'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Hernia Surgery in Delhi | Expert Hernia Surgeon Dr. Kapil Agrawal',
  description: 'Expert hernia surgery in Delhi, India by Dr. Kapil Agrawal. Well-known hernia specialist surgeon offering laparoscopic and robotic hernia repair with excellent outcomes. 23 years experience, 7000+ successful surgeries. Book consultation for hernia surgery in Delhi.',
  keywords: [
    'hernia surgery delhi',
    'best hernia surgeon delhi',
    'laparoscopic hernia repair delhi',
    'robotic hernia surgery delhi',
    'hernia specialist delhi',
    'hernia surgery india',
    'Dr. Kapil Agrawal hernia',
  ],
  openGraph: {
    title: 'Hernia Surgery in Delhi | Expert Hernia Surgeon Dr. Kapil Agrawal',
    description: 'Expert hernia surgery by Dr. Kapil Agrawal in Delhi. Well-known hernia specialist with 23 years experience.',
    url: 'https://www.habiliteclinics.com/laparoscopic-surgery/hernia-surgery',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laparoscopic-surgery/hernia-surgery',
  },
}

export default function HerniaSurgeryPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Expert Hernia Surgeon in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Dr. Kapil Agrawal is a well-known hernia specialist surgeon in Delhi and India who offers a complete range of hernia surgeries. He performs laparoscopic and robotic hernia repair with excellent outcomes.
            </p>
            <CallUsButton />
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Hernia Surgery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A hernia occurs when an organ or fatty tissue squeezes through a weak spot in a surrounding muscle or connective tissue. Dr. Kapil Agrawal specializes in advanced laparoscopic and robotic techniques for hernia repair, ensuring minimal discomfort and faster recovery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With 23 years of experience and 7000+ successful surgeries, Dr. Kapil Agrawal is recognized as one of the best hernia surgeons in Delhi and India, offering comprehensive treatment for all types of hernias.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Hernia Surgery" />
              </div>
            </section>

            {/* Types of Hernia */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Types of Hernia We Treat</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Inguinal Hernia',
                    description: 'Most common type, occurring in the groin area. Can be treated with laparoscopic or robotic techniques.',
                  },
                  {
                    title: 'Umbilical Hernia',
                    description: 'Occurs near the belly button. Often treated with minimally invasive procedures.',
                  },
                  {
                    title: 'Hiatal Hernia',
                    description: 'Occurs when part of the stomach pushes up through the diaphragm. Requires specialized surgical approach.',
                  },
                  {
                    title: 'Incisional Hernia',
                    description: 'Occurs at the site of a previous surgical incision. Can be complex and requires expert care.',
                  },
                ].map((type, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-700 text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Laparoscopic Hernia Repair</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Minimal scarring',
                  'Faster recovery',
                  'Reduced post-operative pain',
                  'Lower recurrence rate',
                  'Shorter hospital stay',
                  'Quick return to work',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Recovery */}
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Recovery & Aftercare</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Recovery Time</p>
                    <p className="text-gray-700 text-sm">Most patients can resume normal activities within 1-2 weeks after laparoscopic hernia repair.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments ensure optimal healing and prevent recurrence.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Hernia Surgery"
                serviceSlug="hernia-surgery"
              />
            </div>
          </div>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Hernia Surgery" />
      </div>
    </div>
  )
}

