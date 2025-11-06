import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Follow-up Care',
  description: 'Comprehensive post-operative care and monitoring at Habilite Clinics.',
}

export default function FollowUpPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-[#1a4d7a] to-[#2c5f8a] text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Follow-up Care</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive post-operative monitoring and care
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Post-Operative Care</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Habilite Clinics, we believe that excellent surgical care extends beyond the 
              operating room. Our comprehensive follow-up care ensures optimal recovery and 
              long-term success.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our follow-up care includes regular check-ups, wound monitoring, medication 
              management, and personalized recovery guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

