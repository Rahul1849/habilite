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
    question: 'What causes hernia?',
    answer:
      'Hernias occur when an organ or fatty tissue squeezes through a weak spot in surrounding muscle or connective tissue. Common causes include congenital weakness, heavy lifting, chronic coughing, obesity, pregnancy, and previous surgeries.'
  },
  {
    question: 'Is hernia surgery the only treatment?',
    answer:
      'Surgery is the only definitive treatment for hernias. Small, asymptomatic hernias may be monitored, but symptomatic or enlarging hernias require surgical repair to prevent complications like strangulation or obstruction.'
  },
  {
    question: 'Can a hernia heal on its own?',
    answer:
      'No, hernias cannot heal on their own. The muscle wall defect will not repair itself. Surgery is necessary to fix the weakened area and prevent the hernia from enlarging or causing complications.'
  },
  {
    question: 'Is it safe to leave a hernia untreated?',
    answer:
      'While small, asymptomatic hernias can sometimes be monitored, leaving a symptomatic or enlarging hernia untreated can be dangerous. It may lead to strangulation (cutting off blood supply) or obstruction, which are medical emergencies.'
  },
  {
    question: 'What activities should be avoided if you have a hernia?',
    answer:
      'Avoid heavy lifting, straining during bowel movements, chronic coughing, and activities that increase abdominal pressure. Maintain a healthy weight, eat high-fiber foods to prevent constipation, and avoid smoking.'
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
          <p className="text-base uppercase tracking-[0.4em] font-bold text-[#0891b2]">People also ask</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">FAQs about Hernia Health</h2>
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

