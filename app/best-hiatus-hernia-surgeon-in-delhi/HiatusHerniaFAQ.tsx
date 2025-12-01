'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is a hiatus hernia and how is it treated?',
    answer:
      'A hiatus hernia occurs when part of the stomach slides into the chest through the diaphragm. Medicines and lifestyle changes help small hernias, but symptomatic or paraesophageal ones need laparoscopic repair plus fundoplication.',
  },
  {
    question: 'How effective is laparoscopic Nissen fundoplication?',
    answer:
      'Over 90% of patients report long-term reflux relief. The hiatal defect is repaired, the stomach is wrapped around the oesophagus, and recovery takes about a week with minimal restrictions.',
  },
  {
    question: 'How long is the hospital stay after GERD surgery?',
    answer:
      'Patients walk within hours, start liquids the same day, and are discharged within 24–36 hours. Desk work resumes in about a week with guided diet advancement.',
  },
  {
    question: 'Can medicines cure a hiatus hernia?',
    answer: 'Medicines suppress acid and reduce irritation but cannot repair the anatomical defect. Symptomatic or large hernias eventually need surgery.',
  },
  {
    question: 'When should I consider surgery for GERD?',
    answer: 'Surgery is recommended if symptoms persist on medicines, complications such as aspiration or Barrett\'s develop, or imaging shows a large paraesophageal hernia.',
  },
  {
    question: 'What dietary precautions are advised after surgery?',
    answer: 'Follow a liquid diet for 7–10 days, transition to semi-solids for another 10 days, chew thoroughly, and avoid fatty or acidic meals initially.',
  },
]

export default function HiatusHerniaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about GERD and hiatus hernia symptoms, treatment choices, recovery timelines, and insurance assistance.
        </p>
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

