import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle, Building2, ExternalLink } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Habilite Clinics',
  description: 'Get in touch with Habilite Clinics. Visit us, call us, or send us a message. We\'re here to help with your surgical care needs.',
}

export default function ContactPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary py-12 sm:py-16 overflow-hidden">
        <div className="container-custom text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 break-words">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto break-words">
            Get in touch with our team. We&apos;re here to help with your healthcare needs.
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 break-words">Get in Touch</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 break-words">
                We&apos;re here to answer your questions and help you schedule your appointment. 
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3">Our Locations</h3>
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">Lajpat Nagar</h4>
                      <p className="text-gray-600">
                        Habilite Clinics<br />
                        M-11, Block M, Lajpat Nagar Road<br />
                        Lajpat Nagar II, New Delhi – 110024<br />
                        Delhi, India
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Hauz Khas</h4>
                      <p className="text-gray-600">
                        Habilite Clinics<br />
                        M C-7/186, SDA<br />
                        Hauz Khas, New Delhi – 110016<br />
                        Delhi, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+919999456455" className="text-primary-600 hover:text-primary-700">
                    +91 99994 56455
                  </a>
                  <br />
                  <a href="tel:+919910024564" className="text-primary-600 hover:text-primary-700">
                    +91 99100 24564
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:info@habiliteclinics.com" className="text-primary-600 hover:text-primary-700">
                    contact@habiliteclinics.com
                  </a>
                  <br />
                  {/* <a href="mailto:appointments@habiliteclinics.com" className="text-primary-600 hover:text-primary-700">
                    appointments@habiliteclinics.com
                  </a> */}
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Clock className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Operating Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 4:00 PM - 7:30 PM<br />
                    Sunday: Closed<br />
                    Emergency: 24/7 Available
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <MessageCircle className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                  <a
                    href={`https://wa.me/919999456455?text=${encodeURIComponent('Hello, I would like to get in touch.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Google Maps - Two Locations */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Lajpat Nagar Location */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Lajpat Nagar Clinic</h3>
              <div className="rounded-xl overflow-hidden shadow-lg mb-4">
                <iframe
                  src="https://www.google.com/maps?q=Habilite+Clinics,+M+11,+Block+M,+Lajpat+Nagar+Road,+Lajpat+Nagar+2,+Lajpat+Nagar,+New+Delhi,+Delhi+110024&hl=en&z=15&output=embed"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Habilite Clinics - Lajpat Nagar Location"
                  aria-label="Google Maps showing Habilite Clinics Lajpat Nagar location"
                />
              </div>
              <div className="text-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Habilite+Clinics,+M+11,+Block+M,+Lajpat+Nagar+Road,+Lajpat+Nagar+2,+Lajpat+Nagar,+New+Delhi,+Delhi+110024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#0891b2] hover:text-[#06b6d4] font-semibold transition-colors text-sm"
                >
                  <MapPin className="mr-2" size={18} />
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Hauz Khas Location */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Hauz Khas Clinic</h3>
              <div className="rounded-xl overflow-hidden shadow-lg mb-4">
                <iframe
                  src="https://www.google.com/maps?q=m+c-7%2F186%2C+sda%2C+hauz+khas%2C+new+delhi%2C+delhi+110016&hl=en&z=15&output=embed"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Habilite Clinics - Hauz Khas Location"
                  aria-label="Google Maps showing Habilite Clinics Hauz Khas location"
                />
              </div>
              <div className="text-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=m+c-7%2F186%2C+sda%2C+hauz+khas%2C+new+delhi%2C+delhi+110016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#0891b2] hover:text-[#06b6d4] font-semibold transition-colors text-sm"
                >
                  <MapPin className="mr-2" size={18} />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Service Locations */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Other Service <span className="bg-gradient-to-r from-[#0891b2] to-[#06b6d4] bg-clip-text text-transparent">Locations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We also provide services at these additional locations across Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Location 1: Kailash Colony */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#0891b2]/30">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] w-16 h-16 rounded-xl flex items-center justify-center shadow-md">
                  <Building2 className="text-white" size={32} />
                </div>
                <span className="text-xs font-semibold text-[#0891b2] bg-[#0891b2]/10 px-3 py-1 rounded-full">
                  Service Location
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Kailash Colony
              </h3>
              
              <div className="mb-4">
                <div className="flex items-start mb-2">
                  <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-[#0891b2]" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Kailash Colony</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Kailash Colony Metro Station, A-19/A, Near, Bodofa Upendra Nath Brahma Rd, New Delhi, Delhi 110048
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 ml-6 mt-1">Pin Code: 110048</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kailash+Colony+Metro+Station,+A-19/A,+Near,+Bodofa+Upendra+Nath+Brahma+Rd,+New+Delhi,+Delhi+110048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[#0891b2] hover:text-[#06b6d4] transition-colors"
                >
                  <MapPin size={14} className="mr-1" />
                  View on Map
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Location 2: Lajpat Nagar 4 - Sri Institute */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#0891b2]/30">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] w-16 h-16 rounded-xl flex items-center justify-center shadow-md">
                  <Building2 className="text-white" size={32} />
                </div>
                <span className="text-xs font-semibold text-[#0891b2] bg-[#0891b2]/10 px-3 py-1 rounded-full">
                  Service Location
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Lajpat Nagar 4
              </h3>
              
              <div className="mb-4">
                <div className="flex items-start mb-2">
                  <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-[#0891b2]" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Sri Institute</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Sri Institute of Dental and Medical Sciences, 5A, Ring Rd, opposite Moolchand Metro station location, Vikram Vihar, Lajpat Nagar 4, Lajpat Nagar, New Delhi, Delhi 110024
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 ml-6 mt-1">Pin Code: 110024</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sri+Institute+of+Dental+and+Medical+Sciences,+5A,+Ring+Rd,+opposite+Moolchand+Metro+station+location,+Vikram+Vihar,+Lajpat+Nagar+4,+Lajpat+Nagar,+New+Delhi,+Delhi+110024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[#0891b2] hover:text-[#06b6d4] transition-colors"
                >
                  <MapPin size={14} className="mr-1" />
                  View on Map
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Location 3: Chitra Vihar */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#0891b2]/30">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] w-16 h-16 rounded-xl flex items-center justify-center shadow-md">
                  <Building2 className="text-white" size={32} />
                </div>
                <span className="text-xs font-semibold text-[#0891b2] bg-[#0891b2]/10 px-3 py-1 rounded-full">
                  Service Location
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Chitra Vihar
              </h3>
              
              <div className="mb-4">
                <div className="flex items-start mb-2">
                  <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-[#0891b2]" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Chitra Vihar</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      32, Vikas Marg, Chitra Vihar, Swasthya Vihar, Delhi, 110092
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 ml-6 mt-1">Pin Code: 110092</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=32,+Vikas+Marg,+Chitra+Vihar,+Swasthya+Vihar,+Delhi,+110092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[#0891b2] hover:text-[#06b6d4] transition-colors"
                >
                  <MapPin size={14} className="mr-1" />
                  View on Map
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Location 4: Green Park */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#0891b2]/30 md:col-span-2 lg:col-span-1">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] w-16 h-16 rounded-xl flex items-center justify-center shadow-md">
                  <Building2 className="text-white" size={32} />
                </div>
                <span className="text-xs font-semibold text-[#0891b2] bg-[#0891b2]/10 px-3 py-1 rounded-full">
                  Service Location
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Green Park
              </h3>
              
              <div className="mb-4">
                <div className="flex items-start mb-2">
                  <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-[#0891b2]" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Green Park</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Gulmohar Commercial Complex, Metro station, B-5, near Green Park, Yusuf Sarai, New Delhi, Delhi 110049
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 ml-6 mt-1">Pin Code: 110049</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Gulmohar+Commercial+Complex,+Metro+station,+B-5,+near+Green+Park,+Yusuf+Sarai,+New+Delhi,+Delhi+110049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[#0891b2] hover:text-[#06b6d4] transition-colors"
                >
                  <MapPin size={14} className="mr-1" />
                  View on Map
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
