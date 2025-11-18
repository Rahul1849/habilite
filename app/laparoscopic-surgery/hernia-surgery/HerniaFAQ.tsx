'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How long do I stay in the hospital after laparoscopic hernia repair?',
    answer: 'Most patients are discharged on the same day or within 24 hours and can walk normally immediately after surgery.',
  },
  {
    question: 'Can a hernia heal on its own?',
    answer: 'No. A hernia is a progressive gap in the muscle wall and never heals spontaneously. Surgery is the only permanent treatment.',
  },
  {
    question: 'Which technique is better – open, laparoscopic, or robotic?',
    answer:
      'Laparoscopic and robotic repairs are preferred for most hernias because they are painless, cause minimal scarring, and allow faster return to work. Open surgery is reserved for very large or complex cases.',
  },
  {
    question: 'Is hernia surgery covered by insurance in India?',
    answer: 'Yes. Most health insurance policies cover hernia surgery. Habilite Clinics provides complete cashless coordination and EMI support.',
  },
  {
    question: 'What is the recovery time for hernia surgery?',
    answer: 'Desk work usually resumes in 7-10 days after laparoscopic repair, while heavy physical work may require 3-4 weeks of rest.',
  },
  {
    question: 'How much does hernia surgery cost in Delhi?',
    answer: 'Depending on the site, technique, and hospital, the cost ranges between ₹50,000 and ₹1.5 lakh. Robotic abdominal wall reconstruction may cost more.',
  },
  {
    question: 'Which diagnostic tests are used to confirm a hernia?',
    answer: 'Physical examination is usually sufficient. Ultrasound, CT scan, or MRI are advised for complex or recurrent hernias.',
  },
  {
    question: 'Can I shrink a hernia naturally?',
    answer: 'No. Diet or exercise cannot reduce a hernia. They may relieve symptoms temporarily but surgery is the only curative option.',
  },
]

export default function HerniaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to know about hernia symptoms, treatment, recovery, and insurance</p>
      </div>
      <div className="space-y-3 max-w-4xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={faq.question} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8 flex-1">{faq.question}</h3>
                <div className="flex-shrink-0">{isOpen ? <ChevronUp className="text-gray-600 w-5 h-5" /> : <ChevronDown className="text-gray-400 w-5 h-5" />}</div>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

