import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Clock, User, Calendar } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'

export const metadata: Metadata = {
  title: 'Gallbladder Surgery in Delhi | Best Gallbladder Surgeon Dr. Kapil Agrawal',
  description: 'Expert gallbladder surgery in Delhi, India by Dr. Kapil Agrawal. Leading gallbladder stone removal surgeon with robotic, single-port, and traditional laparoscopic cholecystectomies. 27+ years experience, 7000+ successful surgeries. Book consultation for gallbladder surgery in Delhi.',
  keywords: [
    'gallbladder surgery delhi',
    'best gallbladder surgeon delhi',
    'gallbladder stone removal delhi',
    'laparoscopic cholecystectomy delhi',
    'robotic gallbladder surgery delhi',
    'gallbladder surgery india',
    'Dr. Kapil Agrawal gallbladder',
  ],
  openGraph: {
    title: 'Gallbladder Surgery in Delhi | Best Gallbladder Surgeon Dr. Kapil Agrawal',
    description: 'Expert gallbladder surgery by Dr. Kapil Agrawal in Delhi. Leading gallbladder stone removal surgeon with 27+ years experience.',
    url: 'https://www.habiliteclinics.com/laparoscopic-surgery/gallbladder-surgery',
  },
  alternates: {
    canonical: 'https://www.habiliteclinics.com/laparoscopic-surgery/gallbladder-surgery',
  },
}

export default function GallbladderSurgeryPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Leading Gallbladder Surgeon in <span className="text-[#0891b2]">Delhi, India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Dr. Kapil Agrawal is one of the topmost and leading gallbladder stone removal surgeon in Delhi and India. He offers robotic, single-port, and traditional laparoscopic cholecystectomies for the management of gallbladder stones.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">About Gallbladder Surgery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gallbladder surgery, also known as cholecystectomy, is a procedure to remove the gallbladder. Dr. Kapil Agrawal specializes in minimally invasive laparoscopic techniques that offer faster recovery, minimal scarring, and excellent outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With over 27+ years of experience and 7000+ successful surgeries, Dr. Kapil Agrawal is recognized as one of the best gallbladder surgeons in Delhi and India. He performs robotic, single-port, and traditional laparoscopic cholecystectomies tailored to each patient's needs.
              </p>
            </section>

            {/* Procedure Types */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Types of Gallbladder Surgery</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Laparoscopic Cholecystectomy',
                    description: 'Minimally invasive procedure using small incisions and a camera. Most common and preferred method.',
                  },
                  {
                    title: 'Robotic Gallbladder Surgery',
                    description: 'Advanced robotic-assisted surgery for enhanced precision and better outcomes.',
                  },
                  {
                    title: 'Single-Port Laparoscopic Surgery',
                    description: 'Minimal scarring with a single small incision for gallbladder removal.',
                  },
                  {
                    title: 'Traditional Open Surgery',
                    description: 'Performed when laparoscopic surgery is not suitable, with excellent outcomes.',
                  },
                ].map((procedure, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#0891b2]">
                    <h3 className="font-bold text-gray-900 mb-2">{procedure.title}</h3>
                    <p className="text-gray-700 text-sm">{procedure.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Benefits of Laparoscopic Gallbladder Surgery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Faster recovery time',
                  'Minimal scarring',
                  'Reduced pain',
                  'Shorter hospital stay',
                  'Lower risk of complications',
                  'Quick return to daily activities',
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
                    <p className="text-gray-700 text-sm">Most patients can return to normal activities within 1-2 weeks after laparoscopic gallbladder surgery.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Follow-up Care</p>
                    <p className="text-gray-700 text-sm">Regular follow-up appointments ensure optimal recovery and address any concerns.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ConsultationForm 
                serviceName="Gallbladder Surgery"
                serviceSlug="gallbladder-surgery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

