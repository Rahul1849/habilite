'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Can I live a normal life after gallbladder removal surgery?',
    answer:
      'Yes. Most patients return to normal life within a week after gallbladder removal. Your body adapts quickly, and any dietary adjustments are temporary.',
  },
  {
    question: 'Are there medicines that can dissolve gallstones?',
    answer:
      'Medicines can dissolve cholesterol gallstones in very selective cases, but the process is slow and stones often return. Laparoscopic cholecystectomy is the most reliable and permanent treatment.',
  },
  {
    question: 'Should I undergo surgery if I have asymptomatic (silent) gallstones?',
    answer:
      'Silent gallstones can be monitored, but surgery may be advised for large stones, high-risk patients, or to prevent sudden attacks and complications in the future.',
  },
  {
    question: 'Can gallbladder stones increase the risk of cancer?',
    answer:
      'Gallstones themselves are not cancerous. However, long-standing or large stones can cause chronic irritation, which slightly increases gallbladder cancer risk. Early treatment reduces this risk.',
  },
  {
    question: 'What are gallbladder polyps, and do they need removal?',
    answer:
      'Gallbladder polyps are growths on the inner wall of the gallbladder. Polyps larger than 10 mm or those causing symptoms usually require surgery due to cancer risk. Smaller polyps are monitored regularly.',
  },
  {
    question: 'How can I prevent gallstones from forming?',
    answer:
      'Maintain a healthy weight, follow a balanced low-fat and high-fibre diet, exercise regularly, stay hydrated, and avoid rapid weight loss to reduce gallstone risk.',
  },
  {
    question: 'What happens if a gallstone enters the common bile duct (CBD)?',
    answer:
      'A stone in the CBD can cause severe pain, jaundice, and infection. It is usually removed through ERCP before or during gallbladder surgery to restore normal bile flow.',
  },
  {
    question: 'Can gallstones be removed without removing the gallbladder?',
    answer:
      'Non-surgical methods rarely work and have a high recurrence rate. Removing the gallbladder (cholecystectomy) is the only permanent solution to prevent stones from forming again.',
  },
  {
    question: 'What should I avoid eating after gallbladder removal?',
    answer:
      'Avoid oily, fried, and high-fat foods for a few weeks. Introduce fats slowly, choose smaller meals, and stay well-hydrated to support smooth digestion.',
  },
  {
    question: 'How many days of rest are needed after gallbladder surgery?',
    answer:
      'Most patients resume desk work within 5-7 days and normal daily activities within 10-14 days after laparoscopic surgery. Heavy lifting should be avoided for about 3-4 weeks.',
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

