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
    question: 'How do I know if I am clinically obese?',
    answer:
      'A BMI of 30 or higher indicates obesity, but waist circumference, body composition, and metabolic markers give a more complete picture. A doctor can interpret these numbers for your body type.',
  },
  {
    question: 'Can lifestyle changes alone reverse obesity?',
    answer:
      'Early stages respond well to nutrition, activity, sleep, and stress interventions. Chronic obesity with metabolic disorders may need medical therapies, injectables, or bariatric surgery.',
  },
  {
    question: 'When is bariatric surgery recommended?',
    answer:
      'Surgery is considered for BMI ≥40, or ≥35 with conditions like diabetes, sleep apnea, or fatty liver. Candidates typically have attempted supervised programs for 6+ months.',
  },
  {
    question: 'Are GLP-1 weight loss injections safe?',
    answer:
      'GLP-1 analogues are approved for chronic weight management under medical supervision. Physicians monitor dosage, nutrition, and labs to minimise side effects.',
  },
  {
    question: 'How quickly can I expect results?',
    answer:
      'Initial programs aim for 5–10% body-weight reduction over 3–6 months. Sustainable results rely on continuous coaching, meal planning, resistance training, and relapse-prevention strategies.',
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Obesity & Weight Loss FAQs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expand common questions about BMI, medical therapy, injections, and bariatric surgery answered by Dr. Kapil Agrawal.
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


