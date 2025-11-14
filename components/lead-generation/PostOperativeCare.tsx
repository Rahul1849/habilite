'use client'

import { CheckCircle2, Heart, Shield, Users, Clock } from 'lucide-react'

export default function PostOperativeCare() {
  const features = [
    {
      icon: Heart,
      title: 'Comprehensive Care',
      description: 'Complete post-operative support and monitoring',
    },
    {
      icon: Shield,
      title: 'Expert Guidance',
      description: '24/7 access to our medical team',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personalized care coordinator for each patient',
    },
    {
      icon: Clock,
      title: 'Regular Follow-ups',
      description: 'Scheduled check-ups to ensure optimal recovery',
    },
  ]

  return (
    <div className="w-full my-12">
      <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 rounded-xl p-8 md:p-12 border-2 border-[#0891b2] shadow-lg max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Habilite Clinics&apos; Free Post-operative Care
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive free post-operative care to ensure your smooth recovery and optimal results. Our dedicated team is committed to your well-being throughout your healing journey.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#0891b2]/10 rounded-full flex items-center justify-center mb-4">
                <Icon className="text-[#0891b2]" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-lg p-6 border-l-4 border-[#0891b2]">
        <div className="flex items-start">
          <CheckCircle2 className="text-[#0891b2] mr-3 mt-1 flex-shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-gray-900 mb-2">What&apos;s Included in Our Free Post-operative Care:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0891b2] mr-2">✓</span>
                <span>Regular follow-up consultations with Dr. Kapil Agrawal</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0891b2] mr-2">✓</span>
                <span>24/7 emergency support and guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0891b2] mr-2">✓</span>
                <span>Nutritional counseling and diet plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0891b2] mr-2">✓</span>
                <span>Wound care and dressing assistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0891b2] mr-2">✓</span>
                <span>Medication management and adjustments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0891b2] mr-2">✓</span>
                <span>Progress monitoring and recovery assessment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

