import Link from 'next/link'
import { Calendar, Phone, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#1a4d7a] to-[#2c5f8a] text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Begin Your Journey to Better Health?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Book your consultation today and take the first step towards expert surgical care
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/appointment"
            className="bg-gradient-to-r from-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white font-bold px-8 py-4 rounded transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 inline-flex items-center text-lg"
          >
            <Calendar className="mr-2" size={22} />
            Book Appointment
          </Link>
          <Link
            href="tel:+919910024564"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-8 py-4 rounded transition-all duration-200 inline-flex items-center text-lg"
          >
            <Phone className="mr-2" size={22} />
            Call Us Now
          </Link>
          <Link
            href={`https://wa.me/919910024564?text=${encodeURIComponent('Hello, I would like to book an appointment.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-4 rounded transition-colors duration-200 inline-flex items-center text-lg"
          >
            <MessageCircle className="mr-2" size={22} />
            WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  )
}
