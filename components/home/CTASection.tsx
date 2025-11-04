import Link from 'next/link'
import { Calendar, Phone, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Begin Your Journey to Better Health?
        </h2>
        <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
          Book your consultation today and take the first step towards expert surgical care
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/appointment"
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            <Calendar className="mr-2" size={24} />
            Book Appointment
          </Link>
          <Link
            href="tel:+919876543210"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center"
          >
            <Phone className="mr-2" size={24} />
            Call Us Now
          </Link>
          <Link
            href={`https://wa.me/919876543210?text=${encodeURIComponent('Hello, I would like to book an appointment.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center"
          >
            <MessageCircle className="mr-2" size={24} />
            WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  )
}
