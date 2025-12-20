'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Is laser surgery for piles painful?',
    answer: 'No, laser surgery is near-painless and minimally invasive. Little or no discomfort is experienced by the majority of patients, and they do not require strong painkillers for the same.',
  },
  {
    question: 'How long does recovery take after laser surgery?',
    answer: 'Recovery is rapid and hassle-free. The majority of individuals are back to normal activities or at work within 3 to 5 days post-procedure.',
  },
  {
    question: 'Will piles recur after laser treatment?',
    answer: 'Recurrence is minimal after laser surgery in expert hands. High-quality laser machines, right candidate and healthy life style significantly reduces recurrence rates.',
  },
  {
    question: 'Can piles be treated by medicines alone?',
    answer: 'No, medicines control symptoms temporarily. They may delay the ailment, but surgery is needed for long-term or permanent relief.',
  },
  {
    question: 'What is the ideal treatment for piles?',
    answer: 'Treatment varies with the stage of piles. Mild stages can be controlled with medicines, but Grades II & III are best treated with laser surgery. Grade IV or complicated cases would require a stapler or open surgery.',
  },
  {
    question: 'What are the effects of not having piles treated?',
    answer: 'If left untreated, piles may lead to bleeding, anaemia or conditions like thrombosed or strangulated piles (blood clot), which can be very painful and may necessitate emergency surgery.',
  },
  {
    question: 'Is laser treatment of piles safe?',
    answer: 'Yes, laser treatment is very safe if done by an expert with USFDA-approved devices. It has lower side effects and quicker recovery compared to normal surgery.',
  },
  {
    question: 'What is the advantage of early surgical treatment for piles?',
    answer: 'Early surgery, particularly in Grade II or III cases, can be treated with painless laser techniques. Deferred treatment could involve open surgery with prolonged recovery.',
  },
]

export default function PilesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions About Piles Treatment</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:ring-inset"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-[#0891b2] flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 pt-2">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

