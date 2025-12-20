'use client'

import { useState } from 'react'
import { Calendar, CheckCircle2, Phone, MessageCircle, CreditCard, Wallet, X } from 'lucide-react'
import { toast } from '@/lib/utils/toast'
import { initiatePayUPayment, formatProductInfo } from '@/lib/payu/payment'
import { redirectToWhatsApp } from '@/lib/utils/whatsapp'

interface AppointmentData {
  name: string
  phone: string
  email: string
  query: string
  category: string
  date: string
}

type Step = 'details' | 'payment' | 'confirmation'

export default function AppointmentForm() {
  const [step, setStep] = useState<Step>('details')
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    phone: '',
    email: '',
    query: '',
    category: '',
    date: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed' | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'reception' | null>(null)
  const [paymentAmount, setPaymentAmount] = useState<string>('')

  const consultationFee = 1000 // Standard consultation fee (for display only)

  const handleInputChange = (field: keyof AppointmentData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step === 'details') {
      if (!formData.name.trim() || !formData.phone.trim()) {
        alert('Please fill in your name and phone number')
        return
      }
      setStep('payment')
    }
  }

  const handlePayment = async () => {
    try {
      // Validate required fields for payment
      if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
        toast.error('Please fill in name, phone, and email for online payment')
        return
      }

      // Validate payment amount
      const amount = parseFloat(paymentAmount)
      if (!paymentAmount.trim() || isNaN(amount) || amount <= 0) {
        toast.error('Please enter a valid payment amount')
        return
      }

      // Confirm amount with user
      const confirmed = window.confirm(
        `You are about to pay ₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}.\n\n` +
        `This amount will be charged on PayU payment gateway.\n\n` +
        `Click OK to proceed to payment.`
      )

      if (!confirmed) {
        return
      }

      setPaymentMethod('online')
      setPaymentStatus('pending')

      // Prepare product info
      const productInfo = formatProductInfo('appointment', formData.date, formData.category)

      // Initiate PayU payment
      await initiatePayUPayment({
        amount: amount,
        firstname: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        productinfo: productInfo,
        paymentType: 'appointment',
        appointmentDate: formData.date,
        category: formData.category || undefined,
        query: formData.query || undefined,
      })

      // Payment form will redirect to PayU, so we don't need to handle success here
      // The success/failure will be handled by the callback pages
    } catch (error) {
      console.error('Payment initiation error:', error)
      setPaymentStatus('failed')
      toast.error(error instanceof Error ? error.message : 'Failed to initiate payment. Please try again.')
    }
  }

  const handleSkipPayment = async () => {
    setPaymentMethod('reception')
    // Send email notification
    await sendAppointmentEmail()
    setStep('confirmation')
    
    // Redirect to WhatsApp with form details
    setTimeout(() => {
      redirectToWhatsApp({
        formType: 'appointment',
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || undefined,
        preferredDate: formData.date || undefined,
        consultationType: formData.category || undefined,
        query: formData.query.trim() || undefined,
      })
    }, 1000) // Small delay to show confirmation
  }

  const sendAppointmentEmail = async () => {
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
        console.error('Failed to send appointment email:', result.error)
        toast.error(result.error || 'Failed to send confirmation email')
      }
    } catch (error) {
      console.error('Error sending appointment email:', error)
      toast.error('Failed to send confirmation email. Your appointment is still booked.')
    }
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
    setPaymentMethod(null)
    setPaymentAmount('')
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
    'Laparoscopic Surgery',
    'Laser Surgery',
    'Bariatric Surgery',
    'General Consultation',
    'Follow-up',
    'Other',
  ]

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]
  // Get maximum date (3 months from now)
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step 1: Patient Details & Date */}
      {step === 'details' && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Calendar className="text-[#f56336]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Appointment Details</h2>
            </div>
            <p className="text-gray-600 text-center">
              Fill in your details and select your preferred date
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-6">
            {/* Name - Required */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name <span className="text-[#f56336]">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Phone - Required */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number <span className="text-[#f56336]">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent"
                placeholder="+91 98765 43210"
                required
              />
            </div>

            {/* Email - Optional */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address <span className="text-gray-400 text-sm">(Optional)</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Date Selection - Required */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Preferred Date <span className="text-[#f56336]">*</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                min={today}
                max={maxDateStr}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Select a date within the next 3 months</p>
            </div>

            {/* Category - Optional */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Consultation Type <span className="text-gray-400 text-sm">(Optional)</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-transparent"
                placeholder="Tell us about your concern or any specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-black via-[#0891b2] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#22d3ee] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 flex items-center justify-center"
            >
              <Calendar className="mr-2" size={22} />
              Continue to Booking
            </button>
          </form>
        </div>
      )}

      {/* Step 2: Payment Options */}
      {step === 'payment' && (
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">Payment Options</h2>
          
          {/* Appointment Summary */}
          <div className="bg-gray-50 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-gray-900 mb-3">Appointment Summary</h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <div><strong>Name:</strong> {formData.name}</div>
              <div><strong>Phone:</strong> {formData.phone}</div>
              {formData.email && <div><strong>Email:</strong> {formData.email}</div>}
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
              {/* Payment Amount Input */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full p-2">
                    <CreditCard size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-green-800 mb-1">Enter Payment Amount</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Please enter the exact amount you want to pay. This amount will be charged on PayU.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Amount to Pay (₹) <span className="text-[#f56336]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">₹</span>
                        <input
                          type="number"
                          value={paymentAmount}
                          onChange={(e) => {
                            const value = e.target.value
                            // Allow only positive numbers
                            if (value === '' || (!isNaN(parseFloat(value)) && parseFloat(value) >= 0)) {
                              setPaymentAmount(value)
                            }
                          }}
                          min="1"
                          step="0.01"
                          placeholder="0.00"
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f56336] focus:border-[#f56336] text-xl font-bold"
                          required
                        />
                      </div>
                      {paymentAmount && parseFloat(paymentAmount) > 0 && (
                        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">You will be charged:</p>
                          <p className="text-2xl font-bold text-green-600">
                            ₹{parseFloat(paymentAmount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                        </div>
                      )}
                      <p className="text-xs text-gray-500 mt-2">
                        Minimum amount: ₹1.00 | Enter the exact amount you want to pay
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Select Payment Method</h3>
                
                {/* Online Payment Option */}
                <button
                  onClick={handlePayment}
                  disabled={!paymentAmount || parseFloat(paymentAmount) <= 0}
                  className="w-full border-2 border-[#f56336] bg-[#f56336]/5 rounded-lg p-6 hover:bg-[#f56336]/10 transition-all text-left relative group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="font-semibold mb-2 text-[#f56336]">Pay Online</div>
                  <div className="text-sm text-gray-600 mb-2">UPI, Cards, Net Banking</div>
                  {paymentAmount && parseFloat(paymentAmount) > 0 ? (
                    <div className="text-lg font-bold text-green-600">₹{parseFloat(paymentAmount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                  ) : (
                    <div className="text-sm text-gray-500">Enter amount above</div>
                  )}
                </button>

                {/* Pay at Reception Option */}
                <button
                  onClick={handleSkipPayment}
                  className="w-full border-2 border-gray-300 rounded-lg p-6 hover:border-gray-400 hover:bg-gray-50 transition-all text-left flex items-center space-x-4"
                >
                  <div className="bg-gray-100 rounded-full p-3">
                    <Wallet size={24} className="text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1 text-gray-900">Pay at Reception</div>
                    <div className="text-sm text-gray-600">
                      Pay the full consultation fee (₹{consultationFee.toLocaleString('en-IN')}) when you visit the clinic
                    </div>
                  </div>
                </button>
              </div>

              {/* Back Button */}
              <button
                onClick={() => setStep('details')}
                className="btn-outline w-full"
              >
                Back to Details
              </button>
            </>
          )}

          {/* Payment Processing */}
          {paymentStatus === 'pending' && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f56336] mx-auto mb-4"></div>
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
              <p className="text-gray-600 mb-2">Payment of ₹{paymentAmount ? parseFloat(paymentAmount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'} received!</p>
              <p className="text-gray-600 mb-6">Your appointment has been confirmed.</p>
            </div>
          )}
          
          {/* Payment Failed */}
          {paymentStatus === 'failed' && (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="text-[#0891b2]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h3>
              <p className="text-gray-600 mb-6">Please try again or choose to pay at reception.</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setPaymentStatus(null)}
                  className="btn-primary"
                >
                  Try Again
                </button>
                <button
                  onClick={handleSkipPayment}
                  className="btn-outline"
                >
                  Pay at Reception
                </button>
              </div>
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
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Confirmed!</h2>
          
          {paymentMethod === 'online' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <p className="text-green-800 font-semibold mb-2">✓ Payment Successful</p>
              <p className="text-sm text-green-700">
                Payment of ₹{paymentAmount ? parseFloat(paymentAmount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'} received successfully!
              </p>
            </div>
          )}

          {paymentMethod === 'reception' && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <p className="text-blue-800 font-semibold mb-2">Payment at Reception</p>
              <p className="text-sm text-blue-700">
                Please pay ₹{consultationFee.toLocaleString('en-IN')} when you visit the clinic.
              </p>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left max-w-md mx-auto space-y-3">
            <div className="pb-3 border-b">
              <div className="text-sm text-gray-600 mb-1">Name</div>
              <div className="font-semibold text-gray-900">{formData.name}</div>
            </div>
            <div className="pb-3 border-b">
              <div className="text-sm text-gray-600 mb-1">Phone</div>
              <div className="font-semibold text-gray-900">{formData.phone}</div>
            </div>
            {formData.email && (
              <div className="pb-3 border-b">
                <div className="text-sm text-gray-600 mb-1">Email</div>
                <div className="font-semibold text-gray-900">{formData.email}</div>
              </div>
            )}
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

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
            <div className="flex items-start space-x-3">
              <Phone className="text-yellow-600 mt-0.5" size={20} />
              <div className="text-sm text-yellow-800 text-left">
                <p className="font-semibold mb-1">Important:</p>
                <ul className="list-disc list-inside space-y-1 text-yellow-700">
                  <li>
                    You will receive a confirmation message{formData.email ? ' and email' : ''} shortly
                  </li>
                  <li>Please arrive 15 minutes before your appointment time</li>
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
            Book Another Appointment
          </button>
        </div>
      )}
    </div>
  )
}

