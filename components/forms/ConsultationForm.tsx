'use client'

import { useState } from 'react'
import { Calendar, CheckCircle2, Phone } from 'lucide-react'
import { submitConsultation } from '@/lib/api/consultation'
import { toast } from '@/lib/utils/toast'

interface ConsultationFormProps {
  serviceName?: string
  serviceSlug?: string
}

export default function ConsultationForm({ serviceName, serviceSlug }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error('Please fill in your name and phone number')
      return
    }

    // Create message from form data
    let message = formData.message.trim()
    if (!message) {
      // Build message from available fields if message is empty
      const parts: string[] = []
      if (serviceName) {
        parts.push(`Service: ${serviceName}`)
      }
      if (formData.email) {
        parts.push(`Email: ${formData.email}`)
      }
      if (formData.date) {
        const dateStr = new Date(formData.date).toLocaleDateString('en-IN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
        parts.push(`Preferred Date: ${dateStr}`)
      }
      message = parts.length > 0 
        ? `Consultation request for ${serviceName || 'general consultation'}. ${parts.join('. ')}.`
        : `Consultation request for ${serviceName || 'general consultation'}.`
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await submitConsultation({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        message: message,
      })

      if (response.success) {
        setIsSubmitted(true)
        toast.success(response.message || 'Your consultation request has been submitted successfully!')
      } else {
        toast.error(response.error || 'Failed to submit consultation request. Please try again.')
      }
    } catch (error) {
      console.error('Consultation submission error:', error)
      toast.error('An unexpected error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
    })
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]
  // Get maximum date (3 months from now)
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-green-600" size={32} />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultation Request Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest. Our team will contact you shortly to confirm your appointment.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left max-w-md mx-auto space-y-2 text-sm">
          <div>
            <span className="text-gray-600">Name:</span> <span className="font-semibold text-gray-900">{formData.name}</span>
          </div>
          <div>
            <span className="text-gray-600">Phone:</span> <span className="font-semibold text-gray-900">{formData.phone}</span>
          </div>
          {formData.email && (
            <div>
              <span className="text-gray-600">Email:</span> <span className="font-semibold text-gray-900">{formData.email}</span>
            </div>
          )}
          {formData.date && (
            <div>
              <span className="text-gray-600">Preferred Date:</span> <span className="font-semibold text-gray-900">
                {new Date(formData.date).toLocaleDateString('en-IN', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          )}
          {serviceName && (
            <div>
              <span className="text-gray-600">Service:</span> <span className="font-semibold text-gray-900">{serviceName}</span>
            </div>
          )}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
          <div className="flex items-start space-x-3">
            <Phone className="text-blue-600 mt-0.5" size={20} />
            <div className="text-sm text-blue-800 text-left">
              <p className="font-semibold mb-1">Need immediate assistance?</p>
              <p className="text-blue-700">
                Call us at <a href="tel:+919999456455" className="font-bold underline">+91 99994 56455</a> or{' '}
                <a href="tel:+919910024564" className="font-bold underline">+91 99100 24564</a>
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Calendar className="text-[#0891b2]" size={24} />
          <h3 className="text-2xl font-bold text-gray-900">Book Consultation</h3>
        </div>
        <p className="text-gray-600 text-sm sm:text-base">
          {serviceName 
            ? `Schedule a consultation for ${serviceName} with Dr. Kapil Agrawal`
            : 'Schedule a consultation with Dr. Kapil Agrawal'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name - Required */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-[#0891b2]">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Phone - Required */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number <span className="text-[#0891b2]">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all"
            placeholder="+91 98765 43210"
            required
          />
        </div>

        {/* Email - Optional */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Date Selection - Optional */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Date <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            min={today}
            max={maxDateStr}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all"
          />
          <p className="text-xs text-gray-500 mt-1">Select a date within the next 3 months</p>
        </div>

        {/* Message - Optional but recommended */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-sm transition-all resize-none"
            placeholder="Please share any additional details about your consultation needs..."
            maxLength={2000}
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.message.length}/2000 characters
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Submitting...
            </>
          ) : (
            <>
              <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Request Consultation
            </>
          )}
        </button>
      </form>
    </div>
  )
}

