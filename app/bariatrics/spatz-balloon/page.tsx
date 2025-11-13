import { Metadata } from 'next'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'

export const metadata: Metadata = {
  title: 'Spatz Balloon in Delhi | Adjustable Gastric Balloon Expert Dr. Kapil Agrawal',
  description: 'Expert Spatz Balloon treatment in Delhi, India by Dr. Kapil Agrawal. Adjustable gastric balloon that can be filled or deflated as needed. Can remain in place for up to 12 months for longer-term weight loss support. 23 years experience, 7000+ successful procedures. Book consultation for Spatz Balloon in Delhi.',
  keywords: [
    'spatz balloon delhi',
    'adjustable gastric balloon delhi',
    'spatz balloon treatment delhi',
    'long-term gastric balloon delhi',
    'adjustable weight loss balloon delhi',
    'spatz balloon india',
    'Dr. Kapil Agrawal spatz balloon',
  ],
  openGraph: {
    title: 'Spatz Balloon in Delhi | Adjustable Gastric Balloon Expert Dr. Kapil Agrawal',
    description: 'Expert Spatz Balloon treatment by Dr. Kapil Agrawal in Delhi. Adjustable gastric balloon for extended treatment duration.',
    url: 'https://www.habiliteclinics.com/bariatrics/spatz-balloon',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/bariatrics/spatz-balloon',
  },
}

export default function SpatzBalloonPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Spatz Balloon in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Dr. Kapil Agrawal specializes in Spatz Balloon treatment - an adjustable gastric balloon system that can be filled or deflated as needed. It can remain in place for up to 12 months, allowing for longer-term weight loss support and better results.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Spatz Balloon</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Spatz Balloon is an advanced adjustable gastric balloon system that offers flexibility and extended treatment duration for effective weight loss. Unlike fixed-volume balloons, the Spatz Balloon can be adjusted in size during the treatment period, allowing for personalized weight loss management.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr. Kapil Agrawal specializes in Spatz Balloon treatment, providing patients with a flexible and effective non-surgical weight loss solution. With 23 years of experience and 7000+ successful procedures, Dr. Kapil Agrawal ensures optimal results and patient satisfaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">How Spatz Balloon Works</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Placement Procedure',
                    description: 'The Spatz Balloon is placed in the stomach through a simple endoscopic procedure under mild sedation. The procedure is quick, safe, and minimally invasive.',
                  },
                  {
                    title: 'Adjustable Volume',
                    description: 'The unique feature of Spatz Balloon is its adjustability. The balloon can be filled or deflated as needed during the treatment period to optimize weight loss results.',
                  },
                  {
                    title: 'Extended Treatment Duration',
                    description: 'The Spatz Balloon can remain in place for up to 12 months, providing longer-term weight loss support compared to other gastric balloons.',
                  },
                  {
                    title: 'Removal Procedure',
                    description: 'After the treatment period, the balloon is removed through a simple endoscopic procedure. The removal is quick and safe.',
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Spatz Balloon</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Adjustable volume',
                  'Extended treatment duration',
                  'Better weight loss results',
                  'Personalized treatment',
                  'Non-surgical procedure',
                  'Flexible management',
                  'Long-term support',
                  'Proven effectiveness',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Spatz Balloon?</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Adjustability Advantage',
                    description: 'The ability to adjust the balloon volume allows for personalized treatment. If you experience discomfort, the balloon can be deflated. If you need more restriction, it can be filled further.',
                  },
                  {
                    title: 'Extended Duration',
                    description: 'With up to 12 months of treatment, the Spatz Balloon provides longer-term support for weight loss, helping you develop healthy eating habits and maintain results.',
                  },
                  {
                    title: 'Better Results',
                    description: 'Studies show that adjustable balloons like Spatz can lead to better weight loss outcomes compared to fixed-volume balloons due to the flexibility and extended treatment period.',
                  },
                ].map((advantage, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-700 text-sm">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Who is a Good Candidate?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Spatz Balloon is suitable for individuals who:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Have a BMI of 27 or higher',
                  'Want non-surgical weight loss',
                  'Need longer-term support',
                  'Prefer adjustable treatment',
                  'Are committed to lifestyle changes',
                  'Want better weight loss results',
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
                    <p className="text-gray-700 text-sm">The Spatz Balloon placement takes approximately 20-30 minutes. Most patients can return to normal activities within 1-2 days with minimal discomfort.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments with Dr. Kapil Agrawal and nutrition counseling help ensure optimal weight loss results throughout the 12-month treatment period. Adjustments to the balloon can be made as needed.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Spatz Balloon"
                serviceSlug="spatz-balloon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


