'use client'

import { useState } from 'react'
import { Calendar, User, CreditCard, CheckCircle2, X } from 'lucide-react'
import { services } from '@/data/services'
import { doctors } from '@/data/doctors'
import { motion, AnimatePresence } from 'framer-motion'

type AppointmentStep = 'patient' | 'treatment' | 'payment'

interface AppointmentData {
  name: string
  email: string
  phone: string
  age: string
  gender: string
  serviceId: string
  doctorId: string
  date: string
  time: string
  message: string
}

export default function AppointmentPage() {
  const [step, setStep] = useState<AppointmentStep>('patient')
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    serviceId: '',
    doctorId: '',
    date: '',
    time: '',
    message: '',
  })
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed' | null>(null)

  const selectedService = services.find(s => s.id === formData.serviceId)
  const selectedDoctor = doctors.find(d => d.id === formData.doctorId)

  const handleInputChange = (field: keyof AppointmentData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step === 'patient') {
      if (formData.name && formData.email && formData.phone && formData.age && formData.gender) {
        setStep('treatment')
      }
    } else if (step === 'treatment') {
      if (formData.serviceId && formData.doctorId && formData.date && formData.time) {
        setStep('payment')
      }
    }
  }

  const handlePayment = async (method: 'razorpay' | 'stripe') => {
    // Simulate payment processing
    setPaymentStatus('pending')
    setTimeout(() => {
      // Simulate success/failure
      const success = Math.random() > 0.3 // 70% success rate
      setPaymentStatus(success ? 'success' : 'failed')
    }, 2000)
  }

  const steps = [
    { id: 'patient', label: 'Patient Details', icon: User },
    { id: 'treatment', label: 'Treatment Selection', icon: Calendar },
    { id: 'payment', label: 'Payment', icon: CreditCard },
  ]

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Appointment</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Fill in your details to schedule a consultation
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((stepItem, index) => {
              const Icon = stepItem.icon
              const isActive = step === stepItem.id
              const isCompleted = steps.findIndex(s => s.id === step) > index
              
              return (
                <div key={stepItem.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isActive || isCompleted
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <div className={`mt-2 text-sm font-medium ${isActive ? 'text-primary-600' : 'text-gray-600'}`}>
                      {stepItem.label}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-4 ${isCompleted ? 'bg-primary-500' : 'bg-gray-300'}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Patient Details */}
              {step === 'patient' && (
                <motion.div
                  key="patient"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6">Patient Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Age *</label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">Gender *</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <button onClick={handleNext} className="btn-primary w-full">
                    Next: Treatment Selection
                  </button>
                </motion.div>
              )}

              {/* Step 2: Treatment Selection */}
              {step === 'treatment' && (
                <motion.div
                  key="treatment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6">Treatment & Appointment Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Select Treatment *</label>
                      <select
                        value={formData.serviceId}
                        onChange={(e) => handleInputChange('serviceId', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a treatment</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Select Doctor *</label>
                      <select
                        value={formData.doctorId}
                        onChange={(e) => handleInputChange('doctorId', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a doctor</option>
                        {doctors.map((doctor) => (
                          <option key={doctor.id} value={doctor.id}>
                            {doctor.name} - {doctor.designation}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Preferred Time *</label>
                        <select
                          value={formData.time}
                          onChange={(e) => handleInputChange('time', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select time</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Additional Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Any additional information or concerns..."
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep('patient')} className="btn-outline flex-1">
                      Back
                    </button>
                    <button onClick={handleNext} className="btn-primary flex-1">
                      Next: Payment
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {step === 'payment' && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6">Confirm & Pay</h2>
                  
                  {/* Summary */}
                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold text-gray-900">Appointment Summary</h3>
                    <div className="space-y-2 text-gray-700">
                      <div><strong>Patient:</strong> {formData.name}</div>
                      <div><strong>Treatment:</strong> {selectedService?.name}</div>
                      <div><strong>Doctor:</strong> {selectedDoctor?.name}</div>
                      <div><strong>Date:</strong> {new Date(formData.date).toLocaleDateString()}</div>
                      <div><strong>Time:</strong> {formData.time}</div>
                      <div className="pt-2 border-t">
                        <strong>Consultation Fee:</strong> {selectedDoctor?.consultationFee}
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  {paymentStatus === null && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Select Payment Method</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          onClick={() => handlePayment('razorpay')}
                          className="border-2 border-gray-300 rounded-lg p-6 hover:border-primary-500 hover:bg-primary-50 transition-all text-left"
                        >
                          <div className="font-semibold mb-2">Razorpay</div>
                          <div className="text-sm text-gray-600">Pay using UPI, Cards, Net Banking</div>
                        </button>
                        <button
                          onClick={() => handlePayment('stripe')}
                          className="border-2 border-gray-300 rounded-lg p-6 hover:border-primary-500 hover:bg-primary-50 transition-all text-left"
                        >
                          <div className="font-semibold mb-2">Stripe</div>
                          <div className="text-sm text-gray-600">Pay using Credit/Debit Cards</div>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Payment Status */}
                  <AnimatePresence>
                    {paymentStatus === 'pending' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-8"
                      >
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
                        <p className="text-gray-600">Processing payment...</p>
                      </motion.div>
                    )}
                    
                    {paymentStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="text-green-600" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                        <p className="text-gray-600 mb-6">Your appointment has been confirmed.</p>
                        <button
                          onClick={() => {
                            setPaymentStatus(null)
                            setStep('patient')
                            // Reset form
                            setFormData({
                              name: '',
                              email: '',
                              phone: '',
                              age: '',
                              gender: '',
                              serviceId: '',
                              doctorId: '',
                              date: '',
                              time: '',
                              message: '',
                            })
                          }}
                          className="btn-primary"
                        >
                          Book Another Appointment
                        </button>
                      </motion.div>
                    )}
                    
                    {paymentStatus === 'failed' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <X className="text-red-600" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h3>
                        <p className="text-gray-600 mb-6">Please try again or use a different payment method.</p>
                        <button
                          onClick={() => setPaymentStatus(null)}
                          className="btn-primary"
                        >
                          Try Again
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {paymentStatus === null && (
                    <button onClick={() => setStep('treatment')} className="btn-outline w-full">
                      Back
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
