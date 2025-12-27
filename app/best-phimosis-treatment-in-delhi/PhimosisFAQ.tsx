'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Does phimosis treatment cause pain?',
    answer: 'With advanced techniques like ZSR circumcision, the procedure is nearly painless. Most patients feel only mild discomfort for a short time.',
  },
  {
    question: 'How much time does it take for recovery?',
    answer: 'Most patients start normal routine in about a week. Full healing usually takes 2–3 weeks.',
  },
  {
    question: 'Is it possible to treat phimosis without surgery?',
    answer: 'Yes, mild cases can be treated using creams and exercises. Severe ones require surgical intervention.',
  },
  {
    question: 'Will the treatment be covered by insurance?',
    answer: 'Yes, most insurance policies cover the surgery for phimosis. Habilite Clinics also provides cashless and EMI options.',
  },
  {
    question: 'Will the issue recur after the surgery?',
    answer: 'No, after being treated by circumcision, phimosis does not normally come back.',
  },
]

export default function PhimosisFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about phimosis treatment and surgical options</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:ring-inset"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-[#0891b2] flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 pt-2">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

