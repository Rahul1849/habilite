'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is an intragastric balloon?',
    answer: 'An intragastric balloon is a non-surgical weight loss device that is placed in your stomach to help you feel full faster and eat smaller portions. It is a temporary solution that helps with moderate weight loss.',
  },
  {
    question: 'How long does the gastric balloon stay in the stomach?',
    answer: 'The duration depends on the type of balloon. Allurion balloons stay for approximately 16 weeks, Spatz balloons can remain for up to 12 months, and traditional balloons typically stay for 6 months.',
  },
  {
    question: 'Is the gastric balloon procedure painful?',
    answer: 'Most patients experience minimal discomfort. The Allurion balloon doesn\'t require endoscopy or anesthesia, making it the most comfortable option. Spatz and traditional balloons are placed under mild sedation, so you won\'t feel pain during the procedure.',
  },
  {
    question: 'How much weight can I lose with a gastric balloon?',
    answer: 'Patients typically lose 10-15% of their total body weight or 15-20 kg over the treatment period, depending on adherence to the diet and lifestyle program.',
  },
  {
    question: 'What happens after the balloon is removed?',
    answer: 'After removal, you\'ll continue with nutritional counseling and lifestyle support to maintain your weight loss. The goal is to establish healthy habits that help you maintain your results long-term.',
  },
  {
    question: 'Who is a good candidate for gastric balloon?',
    answer: 'Ideal candidates have a BMI between 27-40, have tried diet and exercise without success, are committed to lifestyle changes, and are not suitable for or prefer to avoid bariatric surgery.',
  },
  {
    question: 'Are there any side effects?',
    answer: 'Some patients may experience nausea, vomiting, or abdominal discomfort in the first few days after placement. These symptoms are usually mild and resolve quickly with medication and proper hydration.',
  },
  {
    question: 'Can I exercise with a gastric balloon?',
    answer: 'Yes, you can resume normal activities within 1-2 days. Regular exercise is encouraged as part of the weight loss program and helps maximize results.',
  },
]

export default function IntragastricBalloonFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about intragastric balloon treatment</p>
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

