'use client'

import { useState } from 'react'
import { Calendar, CheckCircle2, Phone, Send } from 'lucide-react'
import { toast } from '@/lib/utils/toast'

export default function AppointmentForm() {
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
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'appointment',
          name: formData.name.trim(),
          phone: formData.phone.trim() || undefined,
          email: formData.email.trim() || undefined,
          preferredDate: formData.reservationDate || undefined,
          consultationType: formData.subject.trim() || undefined,
          query: formData.message.trim() || undefined,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        toast.success(result.message || 'Appointment request sent successfully!')
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
      } else {
        toast.error(result.error || 'Failed to send appointment request. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting appointment form:', error)
      toast.error('An unexpected error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
          <Calendar className="text-white" size={24} />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Book Your Appointment</h3>
      </div>

      {isSubmitted ? (
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
          <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-xl lead-bold text-green-800 mb-2">Appointment Request Sent!</h4>
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
              className="flex-1 bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
              onClick={() =>
                setFormData({
                  name: '',
                  email: '',
                  reservationDate: '',
                  subject: '',
                  phone: '',
                  message: '',
                })
              }
              className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors duration-200"
            >
              Reset
            </button>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600 mb-2 font-semibold">Or call us today!</p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+919999456455"
                className="flex items-center text-sm font-bold text-[#f56336] hover:text-[#ff8c5a] transition-colors"
              >
                <Phone size={16} className="mr-2" />
                +91 99994 56455
              </a>
              <a
                href="tel:+919910024564"
                className="flex items-center text-sm font-bold text-[#f56336] hover:text-[#ff8c5a] transition-colors"
              >
                <Phone size={16} className="mr-2" />
                +91 99100 24564
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

