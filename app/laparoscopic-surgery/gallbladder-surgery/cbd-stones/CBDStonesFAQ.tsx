'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Can common bile duct stones recur?',
    answer:
      'Yes, though rare after proper treatment. We recommend regular monitoring, especially in patients with altered bile duct anatomy or past bile duct surgery.',
  },
  {
    question: 'Is ERCP painful?',
    answer: 'ERCP is done under sedation. Most patients feel no pain and recover within a few hours.',
  },
  {
    question: 'How long is the hospital stay for bile duct stone treatment?',
    answer: 'ERCP usually requires daycare or overnight admission. Laparoscopic surgery may require 1–2 days.',
  },
  {
    question: 'Is the surgery covered by health insurance?',
    answer: 'Yes, most insurance plans cover CBD stone treatment. Our clinic also offers cashless options.',
  },
  {
    question: 'What is the difference between ERCP and laparoscopic CBD exploration?',
    answer:
      'ERCP is an endoscopic procedure done through the mouth without any surgical incisions, ideal for most cases. Laparoscopic CBD exploration involves small surgical incisions and is preferred when ERCP fails or when gallbladder removal is needed simultaneously.',
  },
  {
    question: 'Can CBD stones be removed without surgery?',
    answer:
      'Yes, ERCP is a non-surgical endoscopic procedure that can remove CBD stones without any surgical incisions. It is the preferred first-line treatment for most patients.',
  },
  {
    question: 'What happens if CBD stones are not treated?',
    answer:
      'Untreated CBD stones can lead to serious complications including acute cholangitis (bile duct infection), acute pancreatitis, liver abscess, severe sepsis, persistent jaundice, and malnutrition.',
  },
  {
    question: 'How are CBD stones diagnosed?',
    answer:
      'CBD stones are diagnosed using blood tests (liver function tests), ultrasound, MRCP (Magnetic Resonance Cholangiopancreatography), endoscopic ultrasound (EUS), or ERCP which can both diagnose and treat.',
  },
]

export default function CBDStonesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Common questions about CBD stone treatment answered by Dr. Kapil Agrawal</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8 flex-1">{faq.question}</h3>
                  <div className="flex-shrink-0">{isOpen ? <ChevronUp className="text-gray-600 w-5 h-5" /> : <ChevronDown className="text-gray-400 w-5 h-5" />}</div>
                </button>
                <div
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

