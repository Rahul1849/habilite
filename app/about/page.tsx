import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Clinic',
  description: 'Learn about Habilite Clinics - a leading laparoscopic and robotic surgery center in Delhi.',
}

export default function AboutPage() {
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
              Habilite Clinics is dedicated to providing world-class laparoscopic and robotic surgical care 
              to patients in Delhi and across India. We combine cutting-edge technology with compassionate 
              patient care to deliver exceptional surgical outcomes.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Us</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#f56336] font-bold mr-3">✓</span>
                <span>State-of-the-art surgical facilities with advanced robotic systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f56336] font-bold mr-3">✓</span>
                <span>Experienced surgeons with 23+ years of expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f56336] font-bold mr-3">✓</span>
                <span>Minimally invasive procedures for faster recovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f56336] font-bold mr-3">✓</span>
                <span>Comprehensive patient care from consultation to recovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f56336] font-bold mr-3">✓</span>
                <span>Patient-centered approach with personalized treatment plans</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">Our Facilities</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our clinic is equipped with the latest medical technology including da Vinci robotic 
              surgical systems, advanced laparoscopic equipment, and state-of-the-art operating rooms. 
              We maintain the highest standards of hygiene and safety protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

