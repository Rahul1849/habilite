'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is the recovery time for laparoscopic epigastric hernia surgery?',
    answer: 'Most patients recover within 1-2 weeks and can resume light activities shortly after the procedure.',
  },
  {
    question: 'Is epigastric hernia surgery painful?',
    answer: 'With laparoscopic surgery, post-operative pain is minimal and manageable with medication.',
  },
  {
    question: 'What happens if an epigastric hernia is left untreated?',
    answer: 'Untreated hernias can grow larger and may lead to complications like strangulation, which requires emergency surgery.',
  },
  {
    question: 'Is laparoscopic surgery safe?',
    answer: 'Yes, laparoscopic hernia repair is a safe and effective method with a high success rate and low risk of complications.',
  },
  {
    question: 'Who needs epigastric hernia treatment?',
    answer:
      'Treatment is advised if you have pain between the chest and navel, increasing bulge size, discomfort on coughing or breathing, or recurrent digestive issues. Early treatment prevents strangulation and other complications.',
  },
]

export default function EpigastricHerniaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about epigastric hernia symptoms, treatment options, recovery timelines, and insurance assistance.
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








