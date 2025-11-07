'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, Calendar, Send, Phone } from 'lucide-react'

const careerHighlights = [
  {
    text: 'Senior Consultant in General and Laparoscopic Surgery at Apollo Group of Hospitals, Delhi NCR. 23+ years of clinical experience in General and Laparoscopic Surgery',
  },
  {
    text: 'Conducted more than 7,000+ successful surgeries, and has served as Senior Consultant at Apollo Group of Hospitals - Sarita Vihar, Greater Kailash, and Noida',
  },
  {
    text: 'Worked in international arenas with training from London, U.K. (MRCS) and Singapore (MMED) - globally recognized qualifications',
  },
  {
    text: 'Dr. Kapil Agrawal has done MBBS, MS (Surgery) from Institute of Medical Sciences, BHU, Varanasi, MRCS (London, U.K), MMED (Singapore), and FMAS',
  },
  {
    text: 'Dr. Kapil Agrawal is among India\'s most accomplished General and Laparoscopic surgeons. He has a proven track record of successfully managing complex cases, including gallbladder stone removal, hernia repair, and advanced laparoscopic procedures',
  },
]

const treatments = [
  'Laparoscopic Gallbladder Surgery',
  'Laparoscopic Hernia Surgery',
  'Laparoscopic Appendix Surgery',
  'Laparoscopic Rectal Prolapse Surgery',
  'Robotic Surgery',
  'Bariatric Surgery',
  'Non-Surgical Weight Loss Program',
  'Surgery for Diabetes',
  'IntraGastric Balloon',
  'Allurion Balloon',
  'Spatz Balloon',
  'Laser Hemorrhoids / Piles Surgery',
  'Laser Anal Fistula Surgery',
  'Laser Pilonidal Sinus Surgery',
  'Laser Anal Fissure Surgery',
  'Laser Lipoma Surgery',
  'Laser Circumcision',
]

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reservationDate: '',
    subject: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          reservationDate: '',
          subject: '',
          phone: '',
          message: '',
        })
      }, 3000)
    }, 1000)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
          <Calendar className="text-white" size={24} />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Book Your Appointment</h3>
      </div>

      {isSubmitted ? (
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
          <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-xl font-bold text-green-800 mb-2">Appointment Request Sent!</h4>
          <p className="text-green-700 text-sm">We&apos;ll contact you shortly to confirm your appointment.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Name <span className="text-[#f56336]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent text-sm"
              placeholder="Enter Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email <span className="text-[#f56336]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent text-sm"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label htmlFor="reservationDate" className="block text-sm font-semibold text-gray-700 mb-2">
              Reservation Date <span className="text-[#f56336]">*</span>
            </label>
            <input
              type="date"
              id="reservationDate"
              name="reservationDate"
              value={formData.reservationDate}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
              Subject <span className="text-[#f56336]">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent text-sm"
              placeholder="Enter Subject"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent text-sm"
              placeholder="Enter Phone"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent text-sm resize-none"
              placeholder="Enter Message"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#f56336] hover:bg-[#ff8c5a] text-white px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2" size={18} />
                  Send your message
                </>
              )}
            </button>
            <button
              type="reset"
              onClick={() => {
                setFormData({
                  name: '',
                  email: '',
                  reservationDate: '',
                  subject: '',
                  phone: '',
                  message: '',
                })
              }}
              className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors duration-200"
            >
              Reset
            </button>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600 mb-2 font-semibold">Or call us today!</p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+919910024564"
                className="flex items-center text-sm font-bold text-[#f56336] hover:text-[#ff8c5a] transition-colors"
              >
                <Phone size={16} className="mr-2" />
                +91 99100 24564
              </a>
              <a
                href="tel:+919999456455"
                className="flex items-center text-sm font-bold text-[#f56336] hover:text-[#ff8c5a] transition-colors"
              >
                <Phone size={16} className="mr-2" />
                +91 99994 56455
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default function CareerHighlightsAndServices() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-orange-50/20 to-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 break-words">
            Dr. Kapil Agrawal&apos;s <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Career Highlights & Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Column 1: Career Highlights */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
                <CheckCircle2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Career Highlights</h3>
            </div>
            <ul className="space-y-4">
              {careerHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-full p-1.5 mr-3 mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                    {highlight.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: General and Laparoscopic Surgeries & Treatments */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl shadow-lg p-6 sm:p-8 border border-[#f56336]/20">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
                <CheckCircle2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">General and Laparoscopic Surgeries & Treatments</h3>
            </div>
            <ul className="space-y-3">
              {treatments.map((treatment, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-full p-1.5 mr-3 mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 break-words">{treatment}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Book Your Appointment Form */}
          <AppointmentForm />
        </div>
      </div>
    </section>
  )
}

