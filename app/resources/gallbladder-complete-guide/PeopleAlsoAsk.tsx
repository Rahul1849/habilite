'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FAQ = {
  question: string
  answer: string
}

type PeopleAlsoAskProps = {
  faqs?: FAQ[]
}

const defaultFaqs: FAQ[] = [
  {
    question: 'What causes gallbladder stones?',
    answer:
      'Gallbladder stones (gallstones) form when bile contains too much cholesterol, bilirubin, or not enough bile salts to keep these substances dissolved. Factors include high-fat diets, rapid weight loss, obesity, genetics, and certain medical conditions.'
  },
  {
    question: 'Is gallbladder surgery the only treatment?',
    answer:
      'Surgery (cholecystectomy) is the only definitive cure for symptomatic gallstones. Medicines may temporarily manage pain or acidity but do not remove stones. Non-surgical options are limited to select cases and often have high recurrence rates.'
  },
  {
    question: 'Can I dissolve gallstones naturally?',
    answer:
      'There are no proven natural remedies that reliably dissolve gallstones. Some medications can dissolve small cholesterol stones, but they work slowly and stones frequently recur. Medical evaluation is essential before trying any therapy.'
  },
  {
    question: 'Is it safe to leave gallstones untreated?',
    answer:
      'Silent stones can sometimes be monitored, but once they cause pain, infection, or pancreatitis, leaving them untreated can be dangerous. Untreated symptomatic stones may lead to recurrent attacks or emergencies.'
  },
  {
    question: 'What foods should be avoided if you have gallstones?',
    answer:
      'Limit fried foods, high-fat dairy, red meat, processed snacks, and sugary desserts. Choose smaller meals, lean proteins, fibre-rich foods, and stay hydrated to reduce gallbladder stress.'
  }
]

export default function PeopleAlsoAsk({ faqs = defaultFaqs }: PeopleAlsoAskProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="pb-12 sm:pb-16">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0891b2]">People also ask</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">FAQs about Gallbladder Health</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expand each question to learn the answers Dr. Kapil Agrawal shares with his patients.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-[#0891b2]/40"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <h3 className="text-gray-900 font-semibold text-base">{item.question}</h3>
                  <ChevronDown
                    className={`text-[#0891b2] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
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

