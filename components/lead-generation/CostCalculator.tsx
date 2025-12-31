'use client'

import { useState } from 'react'
import { Calculator, CheckCircle2, Loader2 } from 'lucide-react'
import { toast } from '@/lib/utils/toast'
import { redirectToWhatsApp } from '@/lib/utils/whatsapp'

interface CostCalculatorProps {
  serviceName: string
}

export default function CostCalculator({ serviceName }: CostCalculatorProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'India',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error('Please fill in all required fields')
      return
    }
    
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'consultation',
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          serviceName: `${serviceName} Cost Estimate - ${formData.country}`,
          message: `Cost estimate request for ${serviceName} from ${formData.country}.`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        toast.success(result.message || 'Your cost estimate request has been submitted successfully!')
        
        // Redirect to WhatsApp with form details
        setTimeout(() => {
          redirectToWhatsApp({
            formType: 'consultation',
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            serviceName: `${serviceName} Cost Estimate - ${formData.country}`,
            message: `Cost estimate request for ${serviceName} from ${formData.country}.`,
          })
        }, 1000) // Small delay to show success message
      } else {
        toast.error(result.error || 'Failed to submit cost estimate request. Please try again.')
      }
    } catch (error) {
      console.error('Cost calculator submission error:', error)
      toast.error('An unexpected error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      phone: '',
      country: 'India',
    })
  }

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 md:p-8 border-2 border-[#0891b2] shadow-lg">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="text-green-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted Successfully!</h3>
          <p className="text-gray-600 mb-4">Thank you for your interest. Our team will contact you shortly with cost details for {serviceName}.</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 mb-6 text-left max-w-md mx-auto space-y-2 text-sm">
          <div>
            <span className="text-gray-600">Name:</span> <span className="font-semibold text-gray-900">{formData.name}</span>
          </div>
          <div>
            <span className="text-gray-600">Phone:</span> <span className="font-semibold text-gray-900">{formData.phone}</span>
          </div>
          <div>
            <span className="text-gray-600">Country:</span> <span className="font-semibold text-gray-900">{formData.country}</span>
          </div>
          <div>
            <span className="text-gray-600">Service:</span> <span className="font-semibold text-gray-900">{serviceName}</span>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="w-full bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white py-3 px-6 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 md:p-8 border-2 border-[#0891b2] shadow-lg">
      <div className="text-center mb-6">
        <Calculator className="text-[#0891b2] mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{serviceName} Cost in Delhi</h3>
        <p className="text-gray-600">Get accurate cost estimate for your treatment</p>
      </div>
      
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="cost-name" className="block text-gray-700 font-medium mb-2">
            Patient Name <span className="text-[#0891b2]">*</span>
          </label>
          <input
            id="cost-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-[#0891b2]"
            placeholder="Enter your name"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <label htmlFor="cost-country" className="block text-gray-700 font-medium mb-2">
            Select Country <span className="text-[#0891b2]">*</span>
          </label>
          <select
            id="cost-country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-[#0891b2]"
            required
            aria-required="true"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="cost-phone" className="block text-gray-700 font-medium mb-2">
            Mobile Number <span className="text-[#0891b2]">*</span>
          </label>
          <input
            id="cost-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-[#0891b2]"
            placeholder="Enter 10-digit mobile number"
            maxLength={10}
            required
            aria-required="true"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white py-3 px-6 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Calculator size={20} />
              <span>Get Cost Estimate</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}

