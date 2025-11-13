import { Metadata } from 'next'
import { CheckCircle2, Clock, User } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'

export const metadata: Metadata = {
  title: 'Lipoma Removal in Delhi | Expert Lipoma Surgeon Dr. Kapil Agrawal',
  description: 'Expert lipoma removal in Delhi, India by Dr. Kapil Agrawal. Advanced laser and surgical techniques for safe and effective lipoma removal. 23 years experience, 7000+ successful surgeries. Book consultation for lipoma treatment in Delhi.',
  keywords: [
    'lipoma removal delhi',
    'lipoma surgery delhi',
    'laser lipoma removal delhi',
    'best lipoma surgeon delhi',
    'lipoma treatment delhi',
    'lipoma removal india',
    'Dr. Kapil Agrawal lipoma',
  ],
  openGraph: {
    title: 'Lipoma Removal in Delhi | Expert Lipoma Surgeon Dr. Kapil Agrawal',
    description: 'Expert lipoma removal by Dr. Kapil Agrawal in Delhi. Advanced laser and surgical techniques for safe removal.',
    url: 'https://www.habiliteclinics.com/laser-surgery/lipoma',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laser-surgery/lipoma',
  },
}

export default function LipomaPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Lipoma Removal in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Dr. Kapil Agrawal offers expert lipoma removal using advanced laser and surgical techniques. Lipomas are benign fatty tumors that can be safely removed with minimal scarring and quick recovery.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Lipoma</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A lipoma is a benign (non-cancerous) tumor made up of fat tissue. It usually appears as a soft, movable lump under the skin. While lipomas are generally harmless, they can cause discomfort or cosmetic concerns, especially if they grow large.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With 23 years of experience and 7000+ successful surgeries, Dr. Kapil Agrawal specializes in safe and effective lipoma removal using advanced techniques, ensuring minimal scarring and quick recovery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Treatment Options</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Laser Lipoma Removal',
                    description: 'Advanced laser technology for precise and minimally invasive lipoma removal with minimal scarring and faster healing.',
                  },
                  {
                    title: 'Surgical Excision',
                    description: 'Traditional surgical removal for larger or deeper lipomas, ensuring complete removal with excellent cosmetic results.',
                  },
                  {
                    title: 'Minimally Invasive Removal',
                    description: 'Small incision techniques for smaller lipomas, offering quick recovery and minimal scarring.',
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Lipoma Removal</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Safe and effective',
                  'Minimal scarring',
                  'Quick recovery',
                  'Complete removal',
                  'Improved appearance',
                  'Relief from discomfort',
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
                    <p className="text-gray-700 text-sm">Most patients can resume normal activities within 1-2 days after lipoma removal, with complete healing in 1-2 weeks.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments ensure proper healing and address any concerns, ensuring optimal cosmetic results.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Lipoma Removal"
                serviceSlug="lipoma"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


