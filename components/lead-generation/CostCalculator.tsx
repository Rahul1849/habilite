'use client'

import { useState } from 'react'
import { Calculator, Phone, CheckCircle2, Loader2 } from 'lucide-react'

interface CostCalculatorProps {
  serviceName: string
}

export default function CostCalculator({ serviceName }: CostCalculatorProps) {
  const [step, setStep] = useState<'form' | 'otp' | 'verified'>('form')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'India',
  })
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill in all required fields')
      return
    }
    
    setIsLoading(true)
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false)
      setOtpSent(true)
      setStep('otp')
    }, 1500)
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP')
      return
    }
    
    setIsLoading(true)
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false)
      setStep('verified')
    }, 1500)
  }

  const handleGetActualCost = () => {
    // Call Habilite number
    window.location.href = 'tel:+919999456455'
  }

  const handleResendOtp = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert('OTP resent successfully!')
    }, 1000)
  }

  const handleChangeNumber = () => {
    setStep('form')
    setOtp('')
    setOtpSent(false)
  }

  if (step === 'verified') {
    return (
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 md:p-8 border-2 border-[#0891b2] shadow-lg">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="text-green-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">OTP Verified Successfully!</h3>
          <p className="text-gray-600">Click below to get the actual cost for {serviceName}</p>
        </div>
        <button
          onClick={handleGetActualCost}
          className="w-full bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Phone size={24} />
          <span>Get Actual Cost</span>
        </button>
      </div>
    )
  }

  if (step === 'otp') {
    return (
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 md:p-8 border-2 border-[#0891b2] shadow-lg">
        <div className="text-center mb-6">
          <Calculator className="text-[#0891b2] mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{serviceName} Cost Calculator</h3>
          <p className="text-gray-600">Enter OTP sent to {formData.phone}</p>
        </div>
        
        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Enter OTP <span className="text-[#0891b2]">*</span>
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-[#0891b2] text-center text-2xl font-bold tracking-widest"
              placeholder="000000"
              maxLength={6}
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading || otp.length !== 6}
            className="w-full bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white py-3 px-6 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Verifying...</span>
              </>
            ) : (
              'Verify OTP'
            )}
          </button>
          
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={isLoading}
              className="flex-1 text-[#0891b2] py-2 font-medium hover:underline disabled:opacity-50"
            >
              Resend OTP
            </button>
            <button
              type="button"
              onClick={handleChangeNumber}
              disabled={isLoading}
              className="flex-1 text-gray-600 py-2 font-medium hover:underline disabled:opacity-50"
            >
              Change Number
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 md:p-8 border-2 border-[#0891b2] shadow-lg">
      <div className="text-center mb-6">
        <Calculator className="text-[#0891b2] mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{serviceName} Cost Calculator</h3>
        <p className="text-gray-600">Get accurate cost estimate for your treatment</p>
      </div>
      
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Patient Name <span className="text-[#0891b2]">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-[#0891b2]"
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Select Country <span className="text-[#0891b2]">*</span>
          </label>
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-[#0891b2]"
            required
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
          <label className="block text-gray-700 font-medium mb-2">
            Mobile Number <span className="text-[#0891b2]">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-[#0891b2]"
            placeholder="Enter 10-digit mobile number"
            maxLength={10}
            required
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
              <span>Sending OTP...</span>
            </>
          ) : (
            'Get Cost Estimate'
          )}
        </button>
      </form>
    </div>
  )
}

