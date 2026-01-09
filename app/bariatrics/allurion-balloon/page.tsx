import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'
import CallUsButton from '@/components/lead-generation/CallUsButton'
import CostCalculator from '@/components/lead-generation/CostCalculator'
import PostOperativeCare from '@/components/lead-generation/PostOperativeCare'
import WhatsAppExpertChat from '@/components/lead-generation/WhatsAppExpertChat'

export const metadata: Metadata = {
  title: 'Allurion Balloon in Delhi | Swallowable Gastric Balloon Expert Dr. Kapil Agrawal',
  description: 'Expert Allurion Balloon treatment in Delhi, India by Dr. Kapil Agrawal. Swallowable gastric balloon that doesn&apos;t require endoscopy or anesthesia. Automatically deflates after 16 weeks. 23 years experience, 7000+ successful procedures. Book consultation for Allurion Balloon in Delhi.',
  keywords: [
    'allurion balloon delhi',
    'swallowable gastric balloon delhi',
    'allurion balloon treatment delhi',
    'gastric balloon without endoscopy delhi',
    'non-surgical weight loss delhi',
    'allurion balloon india',
    'Dr. Kapil Agrawal allurion balloon',
  ],
  openGraph: {
    title: 'Allurion Balloon in Delhi | Swallowable Gastric Balloon Expert Dr. Kapil Agrawal',
    description: 'Expert Allurion Balloon treatment by Dr. Kapil Agrawal in Delhi. Swallowable gastric balloon without endoscopy or anesthesia.',
    url: 'https://www.habiliteclinics.com/bariatrics/allurion-balloon',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics/allurion-balloon',
  },
}



export default function AllurionBalloonPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Allurion Balloon in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Dr. Kapil Agrawal specializes in Allurion Balloon treatment - a revolutionary swallowable gastric balloon that doesn&apos;t require endoscopy or anesthesia. It automatically deflates and passes naturally after 16 weeks, making it a convenient and effective option for weight loss.
            </p>
            <CallUsButton />
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        {/* Service Image */}
        <div className="mb-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src="/images/best-allurion-intragastric-balloon-specialist-in-delhi.webp"
              alt="Dr Kapil Agrawal Allurion Balloon surgeon in Delhi" title='Allurion Balloon surgeon in Delhi Dr Kapil Agrawal'
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Allurion Balloon</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Allurion Balloon is a revolutionary non-surgical weight loss solution that offers a convenient and effective approach to weight management. Unlike traditional gastric balloons, the Allurion Balloon is swallowable and doesn&apos;t require endoscopy, anesthesia, or surgical procedures.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal specializes in Allurion Balloon treatment, providing patients with a safe, convenient, and effective non-surgical weight loss option. With 23 years of experience and 7000+ successful procedures, Dr. Kapil Agrawal ensures optimal results and patient satisfaction.
              </p>
              
              {/* Cost Calculator */}
              <div className="my-8">
                <CostCalculator serviceName="Allurion Balloon" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">How Allurion Balloon Works</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Swallowable Procedure',
                    description: 'The Allurion Balloon is swallowed as a pill with water. No endoscopy, anesthesia, or surgical procedure is required, making it a convenient and comfortable experience.',
                  },
                  {
                    title: 'Automatic Inflation',
                    description: 'Once in the stomach, the balloon is filled with a safe liquid through a thin tube. The procedure takes approximately 20 minutes and is performed under X-ray guidance.',
                  },
                  {
                    title: '16-Week Treatment',
                    description: 'The balloon remains in the stomach for approximately 16 weeks, helping you feel full faster and eat smaller portions, leading to significant weight loss.',
                  },
                  {
                    title: 'Natural Removal',
                    description: 'After 16 weeks, the balloon automatically deflates and passes naturally through your digestive system without any removal procedure needed.',
                  },
                ].map((step, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Allurion Balloon</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'No endoscopy required',
                  'No anesthesia needed',
                  'Non-surgical procedure',
                  'Convenient and comfortable',
                  'Automatic removal',
                  'Effective weight loss',
                  'Quick procedure time',
                  'Minimal side effects',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Who is a Good Candidate?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Allurion Balloon is suitable for individuals who:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Have a BMI of 27 or higher',
                  'Want non-surgical weight loss',
                  'Are committed to lifestyle changes',
                  'Prefer a convenient procedure',
                  'Want to avoid endoscopy',
                  'Seek moderate weight loss',
                ].map((criterion, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{criterion}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Treatment Process & Recovery</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Procedure Duration</p>
                    <p className="text-gray-700 text-sm">The Allurion Balloon placement takes approximately 20 minutes. Most patients can return to normal activities the same day with minimal discomfort.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments with Dr. Kapil Agrawal and nutrition counseling help ensure optimal weight loss results throughout the 16-week treatment period and beyond.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Allurion Balloon"
                serviceSlug="allurion-balloon"
              />
            </div>
          </div>
        </div>

        {/* Post-operative Care Section - Full Width Centered */}
        <PostOperativeCare />

        {/* WhatsApp Expert Chat - Full Width Centered */}
        <WhatsAppExpertChat serviceName="Allurion Balloon" />
      </div>
    </div>
  )
}

