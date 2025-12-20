'use client'

import { useState } from 'react'
import { toast } from '@/lib/utils/toast'
import { redirectToWhatsApp } from '@/lib/utils/whatsapp'

export default function BestTreatmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const formObject: Record<string, string> = {}
    formData.forEach((value, key) => {
      formObject[key] = value.toString()
    })

    // Build message from form data
    const message = `Best Treatment Form Submission:
- Name: ${formObject.name}
- Age: ${formObject.age} years
- Current Weight: ${formObject.currentWeight} kg
- Height: ${formObject.height}
- Weight Goal: ${formObject.weightGoal} kg
- Conditions: ${formObject.conditions}
- Program History: ${formObject.programHistory || 'Not specified'}`

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'consultation',
          name: formObject.name.trim(),
          email: undefined, // No email field in this form
          phone: undefined, // No phone field in this form
          serviceName: 'Weight Loss Treatment Consultation',
          message: message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        toast.success(result.message || 'Your details have been submitted successfully!')
        
        // Redirect to WhatsApp with form details
        setTimeout(() => {
          redirectToWhatsApp({
            formType: 'best-treatment',
            name: formObject.name.trim(),
            age: formObject.age,
            currentWeight: formObject.currentWeight,
            height: formObject.height,
            weightGoal: formObject.weightGoal,
            conditions: formObject.conditions,
            programHistory: formObject.programHistory || undefined,
            serviceName: 'Weight Loss Treatment Consultation',
          })
        }, 1000) // Small delay to show success message
      } else {
        toast.error(result.error || 'Failed to submit details. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting best treatment form:', error)
      toast.error('An unexpected error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-2 text-center">Thank you!</h3>
        <p className="text-sm text-white/80 text-center mb-6">
          Our bariatric coordination team has received your details and will reach out to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="w-full rounded-2xl bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] px-4 py-3 text-base font-semibold text-slate-900 shadow-lg hover:opacity-95 transition"
        >
          Submit Details Again
        </button>
      </div>
    )
  }

  return (
    <form className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 space-y-5" onSubmit={handleSubmit}>
      <h3 className="text-xl font-semibold">Which Weight Loss Treatment is Best for Me?</h3>
      <p className="text-sm text-white/80">
        Share the basics and our care coordinator will guide you to the correct consultation — medical, injectable, or bariatric.
      </p>
      <div>
        <label htmlFor="best-treatment-name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="best-treatment-name"
          name="name"
          type="text"
          required
          className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
          placeholder="Full name"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="best-treatment-age" className="block text-sm font-medium mb-1">
            Age
          </label>
          <input
            id="best-treatment-age"
            name="age"
            type="number"
            min="1"
            required
            className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
            placeholder="Years"
          />
        </div>
        <div>
          <label htmlFor="best-treatment-weight" className="block text-sm font-medium mb-1">
            Current Weight
          </label>
          <input
            id="best-treatment-weight"
            name="currentWeight"
            type="number"
            min="0"
            required
            className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
            placeholder="kg"
          />
        </div>
      </div>
      <div>
        <label htmlFor="best-treatment-height" className="block text-sm font-medium mb-1">
          Height
        </label>
        <input
          id="best-treatment-height"
          name="height"
          type="text"
          required
          className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
          placeholder="cm or ft/in"
        />
      </div>
      <div>
        <label htmlFor="best-treatment-goal" className="block text-sm font-medium mb-1">
          How much weight do you want to lose?
        </label>
        <input
          id="best-treatment-goal"
          name="weightGoal"
          type="number"
          min="0"
          required
          className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
          placeholder="kg"
        />
      </div>
      <div>
        <label htmlFor="best-treatment-conditions" className="block text-sm font-medium mb-1">
          Are you suffering from diabetes, joint pain, or hypertension?
        </label>
        <textarea
          id="best-treatment-conditions"
          name="conditions"
          required
          rows={3}
          className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
          placeholder="Mention relevant diagnoses"
        />
      </div>
      <div>
        <p className="block text-sm font-medium mb-2">Have you tried a medical weight loss program before?</p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm font-medium">
            <input type="radio" name="programHistory" value="yes" required className="text-[#22d3ee]" />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input type="radio" name="programHistory" value="no" className="text-[#22d3ee]" />
            No
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] px-4 py-3 text-base font-semibold text-slate-900 shadow-lg hover:opacity-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-900 mr-2 inline-block"></div>
            Submitting...
          </>
        ) : (
          'Submit Details'
        )}
      </button>
    </form>
  )
}

