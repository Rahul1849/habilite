import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
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
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Habilite Clinics<br />
                    M 11, Block M, Lajpat Nagar Road<br />
                    Lajpat Nagar 2, Lajpat Nagar<br />
                    New Delhi, Delhi 110024
                  </p>
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
                  <a href="mailto:appointments@habiliteclinics.com" className="text-primary-600 hover:text-primary-700">
                    appointments@habiliteclinics.com
                  </a>
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

        {/* Google Map */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Habilite+Clinics,+M+11,+Block+M,+Lajpat+Nagar+Road,+Lajpat+Nagar+2,+Lajpat+Nagar,+New+Delhi,+Delhi+110024&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Habilite Clinics Location - M 11, Block M, Lajpat Nagar Road, Lajpat Nagar 2, Lajpat Nagar, New Delhi, Delhi 110024"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Habilite+Clinics,+M+11,+Block+M,+Lajpat+Nagar+Road,+Lajpat+Nagar+2,+Lajpat+Nagar,+New+Delhi,+Delhi+110024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#0891b2] hover:text-[#06b6d4] font-semibold transition-colors"
            >
              <MapPin className="mr-2" size={20} />
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
