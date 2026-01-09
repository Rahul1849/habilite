'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Does the balloon need surgery?',
    answer: 'No surgery, but an endoscopy is done to insert and remove the balloon.',
  },
  {
    question: 'How long does it stay?',
    answer: 'Up to 8 months—longer than other balloon types.',
  },
  {
    question: 'Can balloon size be changed?',
    answer: 'Yes, Spatz is adjustable, and it can be filled more or reduced after placement.',
  },
  {
    question: 'How much weight will I lose with Spatz Balloon?',
    answer: 'Most people drop around 15 to 25 kilos. But it depends a lot on your food, follow-up, and how you stick to the plan.',
  },
  {
    question: 'What if I feel uneasy or too full?',
    answer: 'Balloon size can be lowered to ease the pressure. Plus, some meds are given if needed for relief.',
  },
  {
    question: 'Is it painful?',
    answer: 'Not painful, but some discomfort may happen in the first few days.',
  },
  {
    question: 'Is this balloon safe?',
    answer: 'Yes, it\'s used worldwide and approved in many countries.',
  },
  {
    question: 'Who is a good candidate for Spatz Balloon?',
    answer: 'The Spatz Balloon is ideal for those with a BMI of 27 to 40+, individuals seeking longer assistance (up to 8 months), failed previous weight reduction programs, individuals getting ready for bariatric surgery, and those who are comfortable with endoscopy and desire increased control of outcomes. Individuals suffering from stomach ulcers, bleeding disorders, or previous stomach surgery are not good candidates.',
  },
  {
    question: 'What makes Spatz different from other gastric balloons?',
    answer: 'Spatz is the only adjustable gastric balloon. Its unique feature allows the size to be increased or decreased during the treatment period based on patient needs. This flexibility helps improve results and reduce early side effects. It also stays longer (up to 8 months) compared to other balloon types.',
  },
  {
    question: 'What support is available after the balloon is placed?',
    answer: 'Dr. Kapil Agrawal\'s team supports with meal planning by experienced nutritionists, lifestyle coaching by experts, medical follow-ups with regular checks and blood work, balloon adjustments for filling or deflating, emergency care with on-call help available, and clinic-based monitoring with all tools under one roof.',
  },
  {
    question: 'What is Dr. Kapil Agrawal\'s experience with Spatz Balloon?',
    answer: 'Dr. Kapil Agrawal is famous throughout the Delhi NCR region for offering the Spatz Adjustable Gastric Balloon procedure. With experience of 23+ years in both surgical and non-surgical obesity care, he offers advanced treatment to patients seeking flexible, long-lasting weight loss solutions. He is one of the few in Delhi trained in adjustable balloon therapy like Spatz.',
  },
]

export default function SpatzBalloonFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about Spatz Balloon treatment</p>
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


