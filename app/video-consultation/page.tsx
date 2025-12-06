'use client'

import { useState } from 'react'
import { Video, Calendar, CheckCircle2, Phone, MessageCircle, CreditCard, X, Clock, Shield } from 'lucide-react'
import Link from 'next/link'
import { toast } from '@/lib/utils/toast'

interface VideoConsultationData {
  name: string
  phone: string
  email: string
  query: string
  category: string
  date: string
}

type Step = 'details' | 'payment' | 'confirmation'

export default function VideoConsultationPage() {
  const [step, setStep] = useState<Step>('details')
  const [formData, setFormData] = useState<VideoConsultationData>({
    name: '',
    phone: '',
    email: '',
    query: '',
    category: '',
    date: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed' | null>(null)

  const consultationFee = 1500 // Video consultation fee
  const discountAmount = Math.round(consultationFee * 0.2) // 20% discount
  const discountedFee = consultationFee - discountAmount

  const handleInputChange = (field: keyof VideoConsultationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step === 'details') {
      if (!formData.name.trim() || !formData.phone.trim() || !formData.date.trim()) {
        alert('Please fill in all required fields (Name, Phone, and Date)')
        return
      }
      setStep('payment')
    }
  }

  const sendVideoConsultationEmail = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'appointment',
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || undefined,
          preferredDate: formData.date,
          consultationType: formData.category || undefined,
          query: formData.query.trim() || undefined,
        }),
      })

      const result = await response.json()
      if (!result.success) {
        console.error('Failed to send video consultation email:', result.error)
        toast.error(result.error || 'Failed to send confirmation email')
      }
    } catch (error) {
      console.error('Error sending video consultation email:', error)
      toast.error('Failed to send confirmation email. Your consultation is still booked.')
    }
  }

  const handlePayment = async (method: 'razorpay' | 'stripe') => {
    setPaymentStatus('pending')
    
    // Simulate payment processing
    setTimeout(async () => {
      const success = Math.random() > 0.3 // 70% success rate
      if (success) {
        setPaymentStatus('success')
        // Send email notification
        await sendVideoConsultationEmail()
        setTimeout(() => {
          setStep('confirmation')
        }, 1000)
      } else {
        setPaymentStatus('failed')
      }
    }, 2000)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
    }, 1000)
  }

  const handleReset = () => {
    setStep('details')
    setPaymentStatus(null)
    setFormData({
      name: '',
      phone: '',
      email: '',
      query: '',
      category: '',
      date: '',
    })
  }

  const categories = [
    'Laparoscopic Surgery Consultation',
    'Laser Surgery Consultation',
    'Bariatric Surgery Consultation',
    'Follow-up Consultation',
    'Second Opinion',
    'General Consultation',
    'Other',
  ]

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]
  // Get maximum date (1 month from now)
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 1)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      <div className="bg-gradient-primary py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] text-white rounded-full text-sm font-semibold">
            <Video className="w-4 h-4" />
            <span>Video Consultation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Book Video Consultation with Dr. Kapil Agrawal
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Consult from anywhere - Secure, private, and convenient video consultation
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        {/* Video Consultation Info Section */}
        {step === 'details' && (
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  Consult Dr. Kapil Agrawal from{' '}
                  <span className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] bg-clip-text text-transparent">
                    Anywhere
                  </span>
                </h2>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Can&apos;t visit the clinic? Book a secure video consultation with Dr. Kapil Agrawal from the comfort of your home. Get expert medical advice without leaving your house.
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {[
                    { icon: Clock, text: 'Flexible timing - Book at your convenience' },
                    { icon: Shield, text: 'Secure & private video consultation' },
                    { icon: CheckCircle2, text: 'Expert medical advice from anywhere' },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-base sm:text-lg">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Note:</span> Payment is required before booking to confirm your video consultation slot.
                </p>
              </div>

              {/* Right: Visual Card */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-cyan-100">
                  <div className="aspect-video bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-[#0891b2]/10 to-[#06b6d4]/10"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] flex items-center justify-center shadow-lg">
                        <Video className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-gray-700 font-semibold">Secure Video Call</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">HD Quality Video & Audio</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">End-to-End Encrypted</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Prescription & Reports via Email</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          {/* Step 1: Patient Details & Date */}
          {step === 'details' && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Video className="text-[#0891b2]" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">Video Consultation Details</h2>
                </div>
                <p className="text-gray-600 text-center">
                  Fill in your details and select your preferred date
                </p>
              </div>

              {/* Important Notice */}
              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 border-2 border-cyan-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="text-cyan-600 mt-0.5 flex-shrink-0" size={20} />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold text-gray-900 mb-1">Payment Required Before Booking</p>
                    <p>Payment is mandatory to confirm your video consultation slot. You will receive a secure video call link via email and SMS after successful payment.</p>
                  </div>
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-6">
                {/* Name - Required */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name <span className="text-[#0891b2]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Phone - Required */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number <span className="text-[#0891b2]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                {/* Email - Required for video link */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address <span className="text-[#0891b2]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Video call link will be sent to this email</p>
                </div>

                {/* Date Selection - Required */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Preferred Date <span className="text-[#0891b2]">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={today}
                    max={maxDateStr}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Select a date within the next month</p>
                </div>

                {/* Category - Optional */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Consultation Type <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
                  >
                    <option value="">Select consultation type (optional)</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Query/Message - Optional */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Brief Message or Query <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <textarea
                    value={formData.query}
                    onChange={(e) => handleInputChange('query', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
                    placeholder="Tell us about your concern or any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 flex items-center justify-center"
                >
                  <Video className="mr-2" size={22} />
                  Continue to Payment
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Payment Options - MANDATORY */}
          {step === 'payment' && (
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Payment Required</h2>
              
              {/* Appointment Summary */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-gray-900 mb-3">Video Consultation Summary</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div><strong>Name:</strong> {formData.name}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Date:</strong> {new Date(formData.date).toLocaleDateString('en-IN', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</div>
                  {formData.category && <div><strong>Type:</strong> {formData.category}</div>}
                </div>
              </div>

              {/* Payment Status */}
              {paymentStatus === null && (
                <>
                  {/* Online Payment Discount Banner */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white rounded-full p-2">
                        <CreditCard size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-green-800 mb-1">Pay Online & Save 20%!</h3>
                        <p className="text-sm text-green-700 mb-3">
                          Get instant 20% discount when you pay online. Limited time offer!
                        </p>
                        <div className="bg-white rounded-lg p-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Video Consultation Fee:</span>
                            <span className="text-gray-500 line-through">₹{consultationFee.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-green-600 font-semibold">Discount (20%):</span>
                            <span className="text-green-600 font-semibold">-₹{discountAmount.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex justify-between items-center pt-2 border-t">
                            <span className="font-bold text-gray-900">Pay Now:</span>
                            <span className="text-2xl font-bold text-green-600">₹{discountedFee.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mandatory Payment Notice */}
                  <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CreditCard className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
                      <div className="text-sm text-amber-800">
                        <p className="font-semibold mb-1">Payment is Mandatory</p>
                        <p>Your video consultation slot will only be confirmed after successful payment. The video call link will be sent to your email and phone number.</p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Select Payment Method</h3>
                    
                    {/* Online Payment Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        onClick={() => handlePayment('razorpay')}
                        className="border-2 border-[#0891b2] bg-[#0891b2]/5 rounded-lg p-6 hover:bg-[#0891b2]/10 transition-all text-left relative group"
                      >
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          20% OFF
                        </div>
                        <div className="font-semibold mb-2 text-[#0891b2]">Pay Online (Razorpay)</div>
                        <div className="text-sm text-gray-600 mb-2">UPI, Cards, Net Banking</div>
                        <div className="text-lg font-bold text-green-600">₹{discountedFee.toLocaleString('en-IN')}</div>
                        <div className="text-xs text-gray-500 line-through mt-1">₹{consultationFee.toLocaleString('en-IN')}</div>
                      </button>
                      <button
                        onClick={() => handlePayment('stripe')}
                        className="border-2 border-[#0891b2] bg-[#0891b2]/5 rounded-lg p-6 hover:bg-[#0891b2]/10 transition-all text-left relative group"
                      >
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          20% OFF
                        </div>
                        <div className="font-semibold mb-2 text-[#0891b2]">Pay Online (Stripe)</div>
                        <div className="text-sm text-gray-600 mb-2">Credit/Debit Cards</div>
                        <div className="text-lg font-bold text-green-600">₹{discountedFee.toLocaleString('en-IN')}</div>
                        <div className="text-xs text-gray-500 line-through mt-1">₹{consultationFee.toLocaleString('en-IN')}</div>
                      </button>
                    </div>
                  </div>

                  {/* Back Button */}
                  <button
                    onClick={() => setStep('details')}
                    className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                  >
                    Back to Details
                  </button>
                </>
              )}

              {/* Payment Processing */}
              {paymentStatus === 'pending' && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0891b2] mx-auto mb-4"></div>
                  <p className="text-gray-600">Processing payment...</p>
                </div>
              )}
              
              {/* Payment Success */}
              {paymentStatus === 'success' && (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                  <p className="text-gray-600 mb-2">You saved ₹{discountAmount.toLocaleString('en-IN')} with online payment!</p>
                  <p className="text-gray-600 mb-6">Your video consultation has been confirmed.</p>
                </div>
              )}
              
              {/* Payment Failed */}
              {paymentStatus === 'failed' && (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X className="text-[#0891b2]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h3>
                  <p className="text-gray-600 mb-6">Please try again. Payment is required to confirm your video consultation.</p>
                  <button
                    onClick={() => setPaymentStatus(null)}
                    className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 'confirmation' && (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-green-600" size={40} />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Consultation Confirmed!</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
                <p className="text-green-800 font-semibold mb-2">✓ Payment Successful</p>
                <p className="text-sm text-green-700">
                  You saved ₹{discountAmount.toLocaleString('en-IN')} with online payment!
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left max-w-md mx-auto space-y-3">
                <div className="pb-3 border-b">
                  <div className="text-sm text-gray-600 mb-1">Name</div>
                  <div className="font-semibold text-gray-900">{formData.name}</div>
                </div>
                <div className="pb-3 border-b">
                  <div className="text-sm text-gray-600 mb-1">Phone</div>
                  <div className="font-semibold text-gray-900">{formData.phone}</div>
                </div>
                <div className="pb-3 border-b">
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <div className="font-semibold text-gray-900">{formData.email}</div>
                </div>
                <div className="pb-3 border-b">
                  <div className="text-sm text-gray-600 mb-1">Date</div>
                  <div className="font-semibold text-gray-900">
                    {new Date(formData.date).toLocaleDateString('en-IN', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                {formData.category && (
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Consultation Type</div>
                    <div className="font-semibold text-gray-900">{formData.category}</div>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
                <div className="flex items-start space-x-3">
                  <Video className="text-blue-600 mt-0.5" size={20} />
                  <div className="text-sm text-blue-800 text-left">
                    <p className="font-semibold mb-1">Video Call Link</p>
                    <p className="text-blue-700">
                      You will receive a secure video call link via email and SMS 30 minutes before your scheduled consultation time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
                <div className="flex items-start space-x-3">
                  <Clock className="text-yellow-600 mt-0.5" size={20} />
                  <div className="text-sm text-yellow-800 text-left">
                    <p className="font-semibold mb-1">Important:</p>
                    <ul className="list-disc list-inside space-y-1 text-yellow-700">
                      <li>Please join the video call 5 minutes before your scheduled time</li>
                      <li>Ensure you have a stable internet connection</li>
                      <li>Check your email and SMS for the video call link</li>
                      <li>Prescription and reports will be sent via email after consultation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="text-blue-600 mt-0.5" size={20} />
                  <div className="text-sm text-blue-800 text-left">
                    <p className="font-semibold mb-1">Need to reschedule?</p>
                    <p className="text-blue-700">
                      Call us at <a href="tel:+919999456455" className="font-bold underline">+91 99994 56455</a> or{' '}
                      <a href="tel:+919910024564" className="font-bold underline">+91 99100 24564</a>
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Book Another Video Consultation
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
