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
    question: 'How do I know if I have piles or fissure?',
    answer:
      'Piles are swollen veins causing painless bleeding or lumps, while fissures cause sharp pain and a linear tear. A colorectal surgeon confirms the diagnosis with a quick examination.',
  },
  {
    question: 'Can piles heal without surgery?',
    answer:
      'Early-stage piles often respond to diet, medicines, and office procedures. Advanced cases with prolapse or recurring bleeding usually need laser or stapler surgery.',
  },
  {
    question: 'Is laser piles surgery painful?',
    answer:
      'Laser hemorrhoidoplasty is minimally invasive and typically painless. Patients resume daily activity within 24 hours with minimal dressings.',
  },
  {
    question: 'Do piles return after treatment?',
    answer:
      'Recurrence risk is extremely low when the right procedure is chosen and lifestyle advice (high fiber, hydration, no straining) is followed.',
  },
  {
    question: 'What tests are needed before piles surgery?',
    answer:
      'Routine blood tests, proctoscopy, and sometimes colonoscopy or ultrasound are advised to understand grade, rule out fissures/fistulas, and customise therapy.',
  },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">FAQs about Piles & Anal Health</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expand these doctor-approved answers to understand symptoms, treatment choices, and recovery timelines.
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


