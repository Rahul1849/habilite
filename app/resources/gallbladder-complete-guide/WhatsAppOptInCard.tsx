'use client'

import { useState } from 'react'
import { CheckCircle2, MessageCircle, RefreshCcw } from 'lucide-react'

type Step = 'initial' | 'otpSent' | 'verified'

export default function WhatsAppOptInCard() {
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<Step>('initial')

  const handleSendOtp = (event: React.FormEvent) => {
    event.preventDefault()
    if (!phone.trim()) return
    setStep('otpSent')
  }

  const handleVerifyOtp = (event: React.FormEvent) => {
    event.preventDefault()
    if (!otp.trim()) return
    setStep('verified')
  }

  const resetForm = () => {
    setPhone('')
    setOtp('')
    setStep('initial')
  }

  return (
    <div className="rounded-3xl bg-white border border-gray-100 shadow-xl p-6 sm:p-8 flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-[#ecfeff] flex items-center justify-center text-[#0891b2]">
          <MessageCircle size={26} />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-[#0891b2]">For Personalised Diet Plan, Contact Us</p>
          <h3 className="text-2xl font-semibold text-gray-900 mt-2">📩 Enter Your WhatsApp Number</h3>
          <p className="text-gray-600 mt-2">
            Receive the complete diet chart and weekly reminders from our clinical nutrition team.
          </p>
        </div>
      </div>

      {step === 'initial' && (
        <form onSubmit={handleSendOtp} className="flex flex-col sm:flex-row gap-3">
          <input
            type="tel"
            required
            placeholder="+91 9XXXXXXXXX"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="flex-1 rounded-2xl border border-gray-200 px-4 py-3 focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/30 transition"
          />
          <button
            type="submit"
            className="rounded-2xl bg-[#0891b2] text-white font-semibold px-6 py-3 hover:bg-[#06b6d4] transition"
          >
            Send OTP
          </button>
        </form>
      )}

      {step === 'otpSent' && (
        <form onSubmit={handleVerifyOtp} className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 size={16} className="text-emerald-500" />
            OTP sent to {phone}. Enter it below to confirm.
          </div>
          <input
            type="text"
            required
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(event) => setOtp(event.target.value)}
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-center tracking-[0.5em] text-lg font-semibold focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/30 transition"
          />
          <button
            type='submit'
            className="w-full rounded-2xl bg-[#0891b2] text-white font-semibold py-3 hover:bg-[#06b6d4] transition"
          >
            Verify & Receive Plan
          </button>
        </form>
      )}

      {step === 'verified' && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 text-emerald-800 px-4 py-3 text-sm font-semibold">
            <CheckCircle2 size={18} />
            Thank you! Our care coordinator will connect with you on WhatsApp shortly to share the plan.
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0891b2] hover:text-[#06b6d4] transition"
          >
            <RefreshCcw size={16} />
            Submit another number
          </button>
        </div>
      )}
    </div>
  )
}

