'use client'

import { useState } from 'react'

export default function AskSurgeonForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    question: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormData({
      name: '',
      contact: '',
      question: '',
    })
  }

  if (isSubmitted) {
    return (
      <div className="mt-8 rounded-3xl border border-white/20 bg-white/10 px-6 py-8 text-center text-white shadow-lg backdrop-blur">
        <p className="text-sm uppercase tracking-[0.5em] text-white/80 mb-3">Message sent</p>
        <h3 className="text-2xl font-semibold mb-4">Thank you! Your question is with our colorectal team.</h3>
        <p className="text-white/85 text-sm mb-6">
          Our coordinator will review it and connect you with Dr. Kapil Agrawal for personalised piles treatment advice.
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
          placeholder="Describe your symptoms, bleeding pattern, or previous treatments..."
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
          className="inline-flex items-center justify-center rounded-2xl bg-white text-[#0e7490] font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition"
        >
          Submit Question
        </button>
      </div>
    </form>
  )
}


