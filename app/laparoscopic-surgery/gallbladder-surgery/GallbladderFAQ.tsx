'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'When is the right time to get gallbladder surgery?',
    answer:
      'It is recommended to consult the best gallstone surgeon in Delhi as soon as you see any symptoms or complications. Any delay in surgery can create serious complications, as surgery is the only solution for gallstones. However, specific conditions like gallstone-induced pancreatitis or stones in the common bile duct can delay the surgery. For more information, read our article, "The Best Time for Gallbladder Surgery.',
  },
  {
    question: 'Are there any medicines that can treat gallstones?',
    answer:
      'There is no proven medication that effectively treats gallstones. Laparoscopic or Robotic Gallbladder surgery is the only solution to get rid of gallstones.',
  },
  {
    question: 'How long does laparoscopic gallbladder removal surgery take?',
    answer:
      'Laparoscopic gallbladder surgery usually takes 40 minutes. However, in complex situations, the duration of surgery can extend to several hours.',
  },
  {
    question: 'What is the recovery time after gallstone surgery?',
    answer:
      'We discharge our patients within 24 hours of surgery. We don’t advise any bed rest, and our patients can join their work within 5-7days of surgery.',
  },
  {
    question: 'Will I have to change my diet after surgery?',
    answer:
      'Some patients may experience temporary digestive changes after surgery, such as difficulty digesting fats. A light, low-fat diet is often recommended initially. For more information about diet, please read our article on diet after gallbladder surgery.',
  },
  
]

export default function GallbladderFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Common questions about gallbladder surgery answered by Dr. Kapil Agrawal
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8 flex-1">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="text-gray-600 w-5 h-5" />
                    ) : (
                      <ChevronDown className="text-gray-400 w-5 h-5" />
                    )}
                  </div>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
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

