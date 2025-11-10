import { Metadata } from 'next'
import { CheckCircle2, Building2, Users, MessageCircle, Phone, Mail, MapPin, Globe, Award, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'International Patient - Habilite Clinics',
  description: 'Habilite Clinics offers world-class bariatric and advanced laparoscopic surgeries for international patients in India. Affordable, comprehensive healthcare with JCI accredited hospitals.',
  keywords: 'international patient, medical tourism India, bariatric surgery India, laparoscopic surgery India, affordable healthcare India',
}

const services = [
  {
    title: 'Bariatric Surgery',
    description: 'Successful, Significant, Sustained Weight Loss',
    icon: Heart,
  },
  {
    title: 'Gall Stone Removal Surgery',
    description: 'Get Relief in A Fast and Easy Way',
    icon: Award,
  },
  {
    title: 'Laparoscopic Hernia Repair',
    description: 'Permanent Cure, Faster Recovery',
    icon: CheckCircle2,
  },
  {
    title: 'Advanced laparoscopic surgeries',
    description: 'Best solutions, latest techniques',
    icon: Globe,
  },
  {
    title: 'Single Port Laparoscopic Surgeries',
    description: 'Less Pain More Gain',
    icon: Award,
  },
  {
    title: 'Surgery for Diabetes',
    description: 'Live at ease without diabetes',
    icon: Heart,
  },
]

export default function InternationalPatientPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Header Section */}
      <div className="bg-gradient-primary py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">International Patient</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            World-class bariatric and advanced laparoscopic surgeries in India with affordable, comprehensive healthcare services
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              International patient care in India has taken a giant stride in the past few years because of high standards yet affordable health care services. Habilite Bariatrics introduces itself as one stop portal to serve patients for bariatrics and advanced laparoscopic surgeries.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Our expertise and experience in dealing with complex cases, providing complete spectrum of bariatric surgeries as well as advanced laparoscopic surgeries makes us a leader in our area of specialty. Our team is associated with some of the top most, JCI accredited hospitals in New Delhi, India which itself speaks about our commitment and quality of service we intend to provide to our patients.
            </p>
          </div>
        </div>

        {/* Why Choose Habilite Clinics */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Choosing <span className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] bg-clip-text text-transparent">Habilite Clinics</span> for Treatment
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Affordable Comprehensive Healthcare */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Affordable Comprehensive Health Care</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our well experienced team can provide you with a wide spectrum of bariatric and advanced laparoscopic surgeries. We always believe in safe, cost effective and high-quality services. We are dedicated to provide you the latest, most advanced treatment in accordance with the international guidelines in the set up that meets the same rigorous standards laid down by international hospital governance bodies.
              </p>
            </div>

            {/* Providing Accommodation */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                  <Building2 className="text-white" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Providing Accommodation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our center network ensures patients to have a safe, comfortable experience to recuperate well and have a memorable stay in India. We help you provide with hotels as well as apartments depending upon your preference. All the accommodations are checked by our team to ensure enjoyable and pleasant stay.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-2 mr-3">
                    <service.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Inclusive Service */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-cyan-50 via-cyan-100/50 to-cyan-50 rounded-xl p-8 border-2 border-[#0891b2]/30">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                <CheckCircle2 className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">All Inclusive Service</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our practice guarantees no hidden fees or additional out-of-pocket expenses. We provide an all-inclusive package which covers up all your expenses during your stay in India. We ensure all your needs are met with eagerness and respect and someone is there to assist you, escort you from the time you land at airport.
            </p>
          </div>
        </div>

        {/* What to Expect */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">What to Expect</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              On the day of your treatment, you will undergo several routine tests. After the reports are available, you will meet your surgeon, to discuss your concerns, clarify your doubts, completely understand the benefits and risks associated with the procedure and undergo a final examination before your surgery.
            </p>
          </div>
        </div>

        {/* Communication */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Communication</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              We strictly believe that quick, hassle free communication is one of the most essential part which determines the satisfaction of the patient and quality of our services. Our team is in constantly touch with you to ensure a smooth post-operative journey. We are easily approachable and in case you feel any problem after you return back to your country, our team can guide you or your treating doctor with our set protocols.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our nutritionists and doctors will be in constant touch with you be it your weight loss journey or post laparoscopy recovery.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Begin Your Journey?</h3>
            <p className="text-lg mb-6 text-cyan-50">
              Contact us today to learn more about our international patient services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+919910024564"
                className="flex items-center bg-white text-[#0891b2] px-6 py-3 rounded-lg font-bold hover:bg-cyan-50 transition-colors"
              >
                <Phone size={20} className="mr-2" />
                +91 99100 24564
              </a>
              <a
                href="tel:+919999456455"
                className="flex items-center bg-white text-[#0891b2] px-6 py-3 rounded-lg font-bold hover:bg-cyan-50 transition-colors"
              >
                <Phone size={20} className="mr-2" />
                +91 99994 56455
              </a>
              <a
                href="mailto:contact@habiliteclinics.com"
                className="flex items-center bg-white text-[#0891b2] px-6 py-3 rounded-lg font-bold hover:bg-cyan-50 transition-colors"
              >
                <Mail size={20} className="mr-2" />
                contact@habiliteclinics.com
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/appointment"
                className="inline-block bg-white text-[#0891b2] px-8 py-3 rounded-lg font-bold hover:bg-cyan-50 transition-colors"
              >
                Make an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

