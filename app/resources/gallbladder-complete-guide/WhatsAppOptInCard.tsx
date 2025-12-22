'use client'

import { useState } from 'react'
import { CheckCircle2, MessageCircle, RefreshCcw, Loader2 } from 'lucide-react'
import { toast } from '@/lib/utils/toast'
import { redirectToWhatsApp } from '@/lib/utils/whatsapp'

type Step = 'initial' | 'submitted'

export default function WhatsAppOptInCard() {
  const [phone, setPhone] = useState('')
  const [step, setStep] = useState<Step>('initial')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!phone.trim()) {
      toast.error('Please enter your phone number')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          name: 'WhatsApp Opt-In',
          phone: phone.trim(),
          subject: 'WhatsApp Care Reminders - Gallbladder Treatment',
          message: `Request to subscribe to WhatsApp care reminders for gallbladder treatment. Phone: ${phone.trim()}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStep('submitted')
        toast.success(result.message || 'Your subscription request has been submitted successfully!')
        
        // Redirect to WhatsApp with form details
        setTimeout(() => {
          redirectToWhatsApp({
            formType: 'contact',
            name: 'WhatsApp Opt-In',
            phone: phone.trim(),
            subject: 'WhatsApp Care Reminders - Gallbladder Treatment',
            message: `I would like to subscribe to WhatsApp care reminders for gallbladder treatment.`,
          })
        }, 1000) // Small delay to show success message
      } else {
        toast.error(result.error || 'Failed to submit subscription request. Please try again.')
      }
    } catch (error) {
      console.error('WhatsApp opt-in submission error:', error)
      toast.error('An unexpected error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setPhone('')
    setStep('initial')
  }

  return (
    <div className="rounded-3xl bg-white border border-gray-100 shadow-xl p-6 sm:p-8 flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-[#ecfeff] flex items-center justify-center text-[#0891b2]">
          <MessageCircle size={26} />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.4em] font-bold text-[#0891b2]">For Personalised Diet Plan, Contact Us</p>
          <h3 className="text-2xl font-semibold text-gray-900 mt-2">📩 Enter Your WhatsApp Number</h3>
          <p className="text-gray-600 mt-2">
            Receive the complete diet chart and weekly reminders from our clinical nutrition team.
          </p>
        </div>
      </div>

      {step === 'initial' && (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
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
            disabled={isSubmitting}
            className="rounded-2xl bg-[#0891b2] text-white font-semibold px-6 py-3 hover:bg-[#06b6d4] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                <span>Submitting...</span>
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
      )}

      {step === 'submitted' && (
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

