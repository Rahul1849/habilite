'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How effective is your program in causing weight loss?',
    answer:
      'The effectiveness of the program depends upon your motivational levels and the commitment to follow the advice of our physician and nutritionists. Majority of our patients lose 1-2 kgs per week during the initial phase with an average weight loss of 12-15 kgs over a period of 5-6 months. It is important to stay in a monitored weight loss program to maintain the lost weight.',
  },
  {
    question: 'Are any drugs or appetite suppressants used in your program?',
    answer:
      'The use of drugs for weight loss is strictly under the domain of bariatric physician. However, we try to restrict the use of drugs as much as possible. Most of the drugs used are appetite suppressants and are used for a little period of time.',
  },
  {
    question: 'What is the best way to diet?',
    answer:
      'The best way to diet is to make some permanent lifestyle changes that incorporate increased activity, dietary changes and behavior strategies. One should never opt for crash diets causing sudden weight loss and keep a realistic expectation about weight loss through diet and exercise.',
  },
  {
    question: 'How important is portion size?',
    answer:
      'It is very important to understand portion size for a successful weight management plan. If we don’t have any knowledge about portion size or the amount of calories we are consuming, we cannot achieve a good weight loss.',
  },
  {
    question: 'Is exercise a part of the program and how important is it for weight loss?',
    answer:
      'Exercise is a very vital part of our weight loss program. It helps in maintaining your muscle mass and even helps to maintain your weight loss. There is no fitness center located at our clinic but we have trained exercise physiologists to set goals and start an exercise program to meet your needs and goals.',
  },
  {
    question: 'Do you have any special program for children?',
    answer:
      'We do have a special program designed for overweight children between the ages of 7 and 12, and their families. We help these children achieve a healthier lifestyle and weight through behavior modification, changes in diet and physical activity.',
  },
]

export default function MedicalWeightLossFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Answers to common queries about our medical weight loss program
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8 flex-1">{faq.question}</h3>
                  <div className="flex-shrink-0">{isOpen ? <ChevronUp className="text-gray-600 w-5 h-5" /> : <ChevronDown className="text-gray-400 w-5 h-5" />}</div>
                </button>
                <div
                  id={`faq-answer-${index}`}
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

