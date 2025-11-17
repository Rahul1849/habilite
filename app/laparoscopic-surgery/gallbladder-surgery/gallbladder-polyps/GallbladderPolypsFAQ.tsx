'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What are gallbladder polyps?',
    answer:
      'Gallbladder polyps are abnormal tissue growths on the inner wall of the gallbladder. They are quite common, and most of these polyps are harmless (non-cancerous). However, larger polyps may require monitoring or surgical removal.',
  },
  {
    question: 'Do all gallbladder polyps need surgery?',
    answer:
      'No, not all gallbladder polyps require surgical intervention. Small polyps (less than 10mm) are usually monitored regularly. Polyps larger than 10mm or those showing signs of growth may require gallbladder removal due to cancer risk.',
  },
  {
    question: 'What size of gallbladder polyp is dangerous?',
    answer:
      'Polyps larger than 10mm are considered higher risk and may require surgical removal. Polyps between 6-10mm are monitored closely, while those smaller than 6mm are usually benign and monitored periodically.',
  },
  {
    question: 'Can gallbladder polyps become cancerous?',
    answer:
      'Most gallbladder polyps are benign. However, larger polyps (especially those over 10mm) have a higher risk of being cancerous or becoming cancerous over time, which is why they may require surgical removal.',
  },
  {
    question: 'How are gallbladder polyps diagnosed?',
    answer:
      'Gallbladder polyps are usually discovered during ultrasound examinations. Additional imaging tests like CT scan or MRI may be recommended for better evaluation, especially for larger polyps.',
  },
  {
    question: 'What are the symptoms of gallbladder polyps?',
    answer:
      'Most gallbladder polyps are asymptomatic and are discovered incidentally. When symptoms occur, they may include upper right abdominal pain, nausea, vomiting, bloating, or indigestion.',
  },
  {
    question: 'How often should gallbladder polyps be monitored?',
    answer:
      'Small polyps (less than 6mm) may be monitored every 6-12 months. Polyps between 6-10mm are usually monitored every 3-6 months. Your doctor will recommend the appropriate monitoring schedule based on your specific case.',
  },
  {
    question: 'What is the treatment for gallbladder polyps?',
    answer:
      'Treatment depends on the size and characteristics of the polyp. Small polyps are monitored, while larger polyps (over 10mm) or those showing rapid growth may require laparoscopic cholecystectomy (gallbladder removal).',
  },
  {
    question: 'Is gallbladder removal safe?',
    answer:
      'Yes, laparoscopic gallbladder removal is a safe and commonly performed procedure. Most people can live a normal life without a gallbladder, and the surgery has minimal complications when performed by an experienced surgeon like Dr. Kapil Agrawal.',
  },
  {
    question: 'What happens after gallbladder removal?',
    answer:
      'After gallbladder removal, bile flows directly from the liver to the small intestine. Most people adapt well and can resume normal activities within 1-2 weeks. Some dietary adjustments may be recommended initially.',
  },
]

export default function GallbladderPolypsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Common questions about gallbladder polyps treatment answered by Dr. Kapil Agrawal</p>
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

