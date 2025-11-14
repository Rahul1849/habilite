import { Metadata } from 'next'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Medical Weight Loss Program in Delhi | Non-Surgical Weight Loss Dr. Kapil Agrawal',
  description: 'Expert medical weight loss program in Delhi, India by Dr. Kapil Agrawal. Non-surgical weight loss program with best nutritionists for patients looking for non-surgical methods. 23 years experience. Book consultation for medical weight loss in Delhi.',
  keywords: [
    'medical weight loss delhi',
    'non-surgical weight loss delhi',
    'weight loss program delhi',
    'medical weight management delhi',
    'nutritionist delhi',
    'weight loss clinic delhi',
    'Dr. Kapil Agrawal weight loss',
  ],
  openGraph: {
    title: 'Medical Weight Loss Program in Delhi | Non-Surgical Weight Loss Dr. Kapil Agrawal',
    description: 'Expert medical weight loss program by Dr. Kapil Agrawal in Delhi. Non-surgical weight loss with best nutritionists.',
    url: 'https://www.habiliteclinics.com/bariatrics/non-surgical-weight-loss',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics/non-surgical-weight-loss',
  },
}

export default function NonSurgicalWeightLossPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Medical Weight Loss Program in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Dr. Kapil Agrawal houses some of the best nutritionists who offer medical weight loss programs for patients looking for non-surgical methods for weight loss.
            </p>
            <CallUsButton />
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Medical Weight Loss Program</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal houses some of the best nutritionists who offer medical weight loss programs for patients looking for non-surgical methods for weight loss.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With 23 years of experience in weight management, Dr. Kapil Agrawal ensures that every patient receives expert care and support throughout their weight loss journey, helping them achieve sustainable results without surgery.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Medical Weight Loss Program" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Program Components</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Personalized Nutrition Plans',
                    description: 'Customized diet plans designed by expert nutritionists based on your health condition, lifestyle, and weight loss goals.',
                  },
                  {
                    title: 'Medical Supervision',
                    description: 'Regular monitoring and medical supervision by Dr. Kapil Agrawal to ensure safe and effective weight loss.',
                  },
                  {
                    title: 'Lifestyle Counseling',
                    description: 'Comprehensive guidance on healthy lifestyle changes, including exercise, stress management, and sleep optimization.',
                  },
                  {
                    title: 'Behavioral Support',
                    description: 'Support and counseling to help develop healthy eating habits and maintain long-term weight loss success.',
                  },
                ].map((component, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-2">{component.title}</h3>
                    <p className="text-gray-700 text-sm">{component.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Medical Weight Loss</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Non-surgical approach',
                  'Personalized treatment',
                  'Expert nutrition guidance',
                  'Safe and supervised',
                  'Sustainable results',
                  'Improved overall health',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Program Duration & Support</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Program Duration</p>
                    <p className="text-gray-700 text-sm">The medical weight loss program is typically 3-6 months, with ongoing support and follow-up appointments to ensure long-term success.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Regular Follow-ups</p>
                    <p className="text-gray-700 text-sm">Regular consultations with nutritionists and Dr. Kapil Agrawal help monitor progress, adjust plans, and provide continuous support throughout the program.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Medical Weight Loss Program"
                serviceSlug="non-surgical-weight-loss"
              />
            </div>
          </div>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Medical Weight Loss Program" />
      </div>
    </div>
  )
}

