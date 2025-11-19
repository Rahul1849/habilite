'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What are the results of metabolic (diabetes) surgery?',
    answer:
      'Metabolic surgery triggers significant weight-loss and causes remission of type 2 diabetes in nearly 80% of patients, with a further 15% experiencing major improvement. In obese patients, both standard gastric bypass and mini gastric bypass offer excellent diabetes control and long-term metabolic benefits.',
  },
  {
    question: 'What is ileal transposition and how does it help?',
    answer:
      'Ileal transposition is a specialized procedure for non-obese diabetic patients where a segment of the ileum is repositioned to enhance gut hormones. It increases insulin production and sensitivity, aiding rapid diabetes resolution when performed laparoscopically.',
  },
  {
    question: 'Why does early surgery improve remission rates?',
    answer:
      'Long-standing uncontrolled diabetes damages pancreatic beta cells irreversibly. Early metabolic surgery—ideally within five years of diagnosis—prevents extensive beta-cell loss, dramatically increasing the chances of complete diabetes remission.',
  },
  {
    question: 'What is metabolic syndrome and how does surgery help?',
    answer:
      'Metabolic syndrome is a cluster of central obesity, diabetes, hypertension, and dyslipidemia—common among Indians. Bariatric and metabolic surgeries address the root hormonal and metabolic dysfunction, often curing or markedly improving every component of the syndrome.',
  },
]

export default function DiabetesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Answers to common queries about metabolic surgery for diabetes</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`diabetes-faq-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8 flex-1">{faq.question}</h3>
                  <div className="flex-shrink-0">{isOpen ? <ChevronUp className="text-gray-600 w-5 h-5" /> : <ChevronDown className="text-gray-400 w-5 h-5" />}</div>
                </button>
                <div
                  id={`diabetes-faq-${index}`}
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
      </div>
    </section>
  )
}

