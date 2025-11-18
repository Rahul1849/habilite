'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Can lipomas be dangerous?',
    answer: 'Lipomas are generally not dangerous. However, lipomas that are rapidly growing must be removed immediately and sent for biopsy to assess if they are cancerous. If the lipomas are small and not increasing in size, they are usually harmless.',
  },
  {
    question: 'How do you treat a lipoma without surgery?',
    answer: 'Lipomas usually require some form of surgical intervention for permanent results. However, very small and soft lipomas can be treated with the instillation of steroid injections directly into lipomas. High recurrence rates are associated with this procedure.',
  },
  {
    question: 'Can lipomas be treated with ayurvedic medicines?',
    answer: 'The role of ayurvedic medicines is highly controversial in managing lipomas, especially multiple and large ones. There is no clinical evidence that these medicines can shrink or remove lipomas permanently.',
  },
  {
    question: 'Can lipomas grow back at the same site?',
    answer: 'Properly and completely excised lipomas do not grow back in the same place. Lipomas that are large or hard in consistency when removed by liposuction can result in incomplete removal, leading to recurrence.',
  },
  {
    question: 'At what size should a lipoma be removed?',
    answer: 'The decision to remove lipomas generally depends upon the symptoms and the progression of lipoma. Lipomas that are increasing in size or causing cosmetic concerns should be removed immediately. Lipomas over 3 cm in length are usually removed even if they are painless.',
  },
  {
    question: 'Can exercise cure lipomas?',
    answer: 'Once formed, lipomas cannot be cured by exercise. However, maintaining a healthy weight is beneficial in managing lipomas and may reduce the formation of new lipomas in a few individuals.',
  },
  {
    question: 'Do lipoma creams work?',
    answer: 'Lipoma creams cannot remove or dissolve lipomas. They might provide temporary relief from irritation but are ineffective in curing lipomas.',
  },
  {
    question: 'How can I stop lipomas from spreading?',
    answer: 'There is no definitive way to prevent the spreading of lipomas, especially for patients with a genetic predisposition. Maintaining a healthy weight, following a balanced diet, and reducing junk food intake may slow down the development of new lipomas.',
  },
  {
    question: 'Can lipomas dissolve on their own?',
    answer: 'Lipomas never disappear on their own. Significant weight reduction and a healthy lifestyle might reduce the size of lipomas to some extent, but surgical removal is the only definitive treatment.',
  },
  {
    question: 'What type of diet helps prevent lipomas?',
    answer: 'Fruits like blueberries, raspberries, citrus fruits, apples, and plums help detoxify the body. Green leafy vegetables and omega-3 fatty acids may also decrease inflammation and the growth of lipomas.',
  },
  {
    question: 'What are the best treatment options for lipomas?',
    answer: 'Depending on the size, depth, and location, treatment options include observation, liposuction-assisted removal, pinch technique, surgical excision, and steroid injections for very small lipomas. Dr. Kapil Agrawal customizes the plan based on each patient’s needs.',
  },
  {
    question: 'What is the recovery time after lipoma removal?',
    answer: 'Most minimally invasive procedures such as the pinch technique allow patients to resume daily activities within 1-2 days. Larger or deep lipomas that need traditional excision might require a slightly longer downtime of 5-7 days.',
  },
]

export default function LipomaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about lipoma diagnosis and treatment</p>
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

