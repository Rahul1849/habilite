'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is laser surgery?",
    answer:
      "Laser surgery is a minimally invasive procedure that uses focused laser energy to treat various conditions. It offers precision, minimal tissue damage, reduced pain, faster recovery, and minimal scarring compared to traditional surgery.",
  },
  {
    question: "Is laser surgery painful?",
    answer:
      "Laser surgery is near-painless and minimally invasive. Most patients experience little to no discomfort and do not require strong painkillers. The procedure is performed under anesthesia for maximum comfort.",
  },
  {
    question: "What conditions can be treated with laser surgery?",
    answer:
      "Dr. Kapil Agrawal performs laser surgery for piles (hemorrhoids), anal fissure, anal fistula, pilonidal sinus, lipoma, and circumcision. Each procedure uses advanced USFDA-approved laser technology for optimal results.",
  },
  {
    question: "How long does recovery take after laser surgery?",
    answer:
      "Recovery is rapid and hassle-free. Most patients can return to normal activities within 3-5 days after laser surgery. Same-day discharge is common for most laser procedures, allowing patients to recover in the comfort of their home.",
  },
  {
    question: "What are the advantages of laser surgery over traditional surgery?",
    answer:
      "Laser surgery offers smaller incisions, minimal bleeding, reduced pain, faster recovery, minimal scarring, lower risk of infection, same-day discharge, and quicker return to normal activities compared to traditional open surgery.",
  },
  {
    question: "Is laser surgery safe?",
    answer:
      "Yes, laser surgery is very safe when performed by an experienced surgeon using USFDA-approved laser devices. Dr. Kapil Agrawal uses world-class, highly advanced 1470 nm Laser Machines for the best and safest results.",
  },
  {
    question: "Does insurance cover laser surgery?",
    answer:
      "Most major health insurance providers cover laser surgery procedures. Dr. Kapil Agrawal's team helps patients avail cashless treatment facilities and coordinates with insurers for smooth pre-authorization and claim processing.",
  },
  {
    question: "What is the cost of laser surgery in Delhi?",
    answer:
      "The cost of laser surgery varies depending on the type of procedure, complexity, and hospital facilities. Dr. Kapil Agrawal offers transparent pricing with fixed packages. Cashless insurance and EMI options are available at Habilite Clinics.",
  },
]

export default function LaserSurgeryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about laser surgery and advanced laser procedures</p>
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

