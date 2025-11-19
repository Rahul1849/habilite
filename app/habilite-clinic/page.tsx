import { Metadata } from 'next'
import HospitalAffiliations from '@/components/home/HospitalAffiliations'

export const metadata: Metadata = {
  title: 'About Habilite Clinics - Advanced Laparoscopic & Robotic Surgery Center in Delhi',
  description:
    'Learn about Habilite Clinics, Delhi’s trusted center for laparoscopic, robotic, bariatric, and laser surgeries led by Dr. Kapil Agrawal with 23+ years of experience.',
  alternates: {
    canonical: 'https://www.habiliteclinics.com/habilite-clinic',
  },
}

export default function HabiliteClinicPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Habilite Clinics</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Excellence in surgical care with advanced technology and compassionate service
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Habilite Clinics is dedicated to providing world-class laparoscopic and robotic surgical care to patients in Delhi and across India. We
              combine cutting-edge technology with compassionate patient care to deliver exceptional surgical outcomes.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Us</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0891b2] font-bold mr-3">✓</span>
                <span>State-of-the-art surgical facilities with advanced robotic systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0891b2] font-bold mr-3">✓</span>
                <span>Experienced surgeons with 23 years of expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0891b2] font-bold mr-3">✓</span>
                <span>Comprehensive care from diagnosis to recovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0891b2] font-bold mr-3">✓</span>
                <span>Patient-centric approach with personalized treatment plans</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Technology & Infrastructure</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our clinic is equipped with cutting-edge laparoscopic and robotic platforms, advanced imaging systems, and NABH-compliant protocols to
              ensure the highest standards of safety and precision.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-inner">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Clinical Excellence',
                  desc: 'Led by Dr. Kapil Agrawal with 23+ years of surgical expertise and global training.',
                },
                {
                  title: 'Patient-Centric Care',
                  desc: 'Customized treatment plans, transparent counselling, and holistic recovery support.',
                },
                {
                  title: 'Innovation & Technology',
                  desc: 'Constant adoption of the latest minimally invasive techniques and medical devices.',
                },
                {
                  title: 'Safety & Quality',
                  desc: 'NABH-compliant protocols, infection control, and evidence-based practices.',
                },
              ].map((value) => (
                <div key={value.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <HospitalAffiliations />
      </div>
    </div>
  )
}

