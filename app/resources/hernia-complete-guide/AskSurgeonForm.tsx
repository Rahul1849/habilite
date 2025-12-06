'use client'

import { useState } from 'react'
import { toast } from '@/lib/utils/toast'

export default function AskSurgeonForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    question: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'ask-surgeon',
          name: formData.name.trim(),
          contact: formData.contact.trim(),
          question: formData.question.trim(),
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        toast.success(result.message || 'Your question has been submitted successfully!')
        setFormData({
          name: '',
          contact: '',
          question: ''
        })
      } else {
        toast.error(result.error || 'Failed to submit question. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting question:', error)
      toast.error('An unexpected error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="mt-8 rounded-3xl border border-white/20 bg-white/10 px-6 py-8 text-center text-white shadow-lg backdrop-blur">
        <p className="text-sm uppercase tracking-[0.5em] text-white/80 mb-3">Message sent</p>
        <h3 className="text-2xl font-semibold mb-4">Thank you! Your question has been received.</h3>
        <p className="text-white/85 text-sm mb-6">
          Our surgical coordinator will review your note and connect you with Dr. Kapil Agrawal&apos;s team shortly.
        </p>
      
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="inline-flex items-center justify-center rounded-2xl bg-white text-[#0e7490] font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition"
        >
          Ask Another Question
        </button>
      </div>
    )
  }

  return (
    <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
      <div className="md:col-span-1">
        <label className="block text-sm font-semibold mb-2 text-white/90" htmlFor="ask-name">
          Full Name
        </label>
        <input
          id="ask-name"
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
        />
      </div>
      <div className="md:col-span-1">
        <label className="block text-sm font-semibold mb-2 text-white/90" htmlFor="ask-contact">
          Phone / Email
        </label>
        <input
          id="ask-contact"
          name="contact"
          type="text"
          placeholder="Best way to reach you"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold mb-2 text-white/90" htmlFor="ask-question">
          Your Question
        </label>
        <textarea
          id="ask-question"
          name="question"
          placeholder="Describe your symptoms or question..."
          rows={4}
          value={formData.question}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
        />
      </div>
      <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4 justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-2xl bg-white text-[#0e7490] font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0e7490] mr-2"></div>
              Submitting...
            </>
          ) : (
            'Submit Question'
          )}
        </button>
      </div>
    </form>
  )
}

