import { Metadata } from 'next'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'

export const metadata: Metadata = {
  title: 'Intragastric Balloon in Delhi | Gastric Balloon Expert Dr. Kapil Agrawal',
  description: 'Expert intragastric balloon treatment in Delhi, India by Dr. Kapil Agrawal. Specializes in gastric balloon treatment for moderate weight loss, including Allurion and Spatz balloon. 23 years experience, 7000+ successful surgeries. Book consultation for gastric balloon in Delhi.',
  keywords: [
    'intragastric balloon delhi',
    'gastric balloon delhi',
    'allurion balloon delhi',
    'spatz balloon delhi',
    'non-surgical weight loss delhi',
    'gastric balloon treatment delhi',
    'Dr. Kapil Agrawal gastric balloon',
  ],
  openGraph: {
    title: 'Intragastric Balloon in Delhi | Gastric Balloon Expert Dr. Kapil Agrawal',
    description: 'Expert intragastric balloon treatment by Dr. Kapil Agrawal in Delhi. Specializes in Allurion and Spatz balloon for weight loss.',
    url: 'https://www.habiliteclinics.com/bariatrics/intragastric-balloon',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics/intragastric-balloon',
  },
}

export default function IntragastricBalloonPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Intra Gastric Balloon Expert in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Dr. Kapil Agrawal specializes in the gastric balloon treatment for patients looking for a moderate amount of weight loss. He specializes in both Allurion and Spatz balloon treatment.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Intragastric Balloon</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Kapil Agrawal specializes in the gastric balloon treatment for patients looking for a moderate amount of weight loss. He specializes in both Allurion and Spatz balloon treatment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With 23 years of experience and 7000+ successful procedures, Dr. Kapil Agrawal provides personalized treatment plans for patients seeking non-surgical weight loss solutions, ensuring optimal results and patient satisfaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Types of Gastric Balloons</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Allurion Balloon',
                    description: 'A swallowable gastric balloon that doesn&apos;t require endoscopy. It automatically deflates and passes naturally after 16 weeks, making it a convenient option for weight loss.',
                  },
                  {
                    title: 'Spatz Balloon',
                    description: 'An adjustable gastric balloon that can be filled or deflated as needed. It can remain in place for up to 12 months, allowing for longer-term weight loss support.',
                  },
                ].map((balloon, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-2">{balloon.title}</h3>
                    <p className="text-gray-700 text-sm">{balloon.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Gastric Balloon</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Non-surgical procedure',
                  'No incisions or scars',
                  'Moderate weight loss',
                  'Quick recovery time',
                  'Reversible treatment',
                  'Lower risk than surgery',
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
                    <p className="text-gray-700 text-sm">Most patients can return to normal activities within 1-2 days after gastric balloon placement, with minimal discomfort.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments with nutrition counseling help ensure optimal weight loss results and long-term success.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Intragastric Balloon"
                serviceSlug="intragastric-balloon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

