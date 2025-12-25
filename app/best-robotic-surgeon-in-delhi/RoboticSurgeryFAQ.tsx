'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Does Medical Insurance Cover Robotic Surgery?",
    answer:
      "It depends upon the insurance company and the type of surgery that needs to be performed by robotic assistance. Some major health insurance providers cover robotic surgery. Dr. Kapil Agrawal's team helps patients avail cashless treatment facilities and coordinates with their insurer to get smooth pre-authorisation and the claim process.",
  },
  {
    question: "Does Robotic Surgery Provide Better Cosmesis Than Laparoscopic Surgery?",
    answer:
      "The robotic system doesn't offer better cosmesis than laparoscopic surgery, as the size and number of incisions remain the same for both laparoscopic and robotic surgeries. In both robotic and laparoscopic surgeries, the recovery period and post-operative discomfort remain the same.",
  },
  {
    question: "Does Robotic Surgery Have Faster Recovery Rates Than Laparoscopic Surgery?",
    answer:
      "As the size and number of incisions are the same for laparoscopic and robotic surgeries, the recovery period and return to normal activities are similar for both approaches.",
  },
  {
    question: "What are the advantages of robotic surgery?",
    answer:
      "Robotic surgery offers better precision with 3D HD visualization, smaller incisions leading to faster recovery, reduced blood loss, less post-operative pain, lower risk of infection, shorter hospital stay, minimal scar marks, greater surgical control in complex procedures, improved access to hard-to-reach areas, and better outcomes in high-risk or obese patients.",
  },
  {
    question: "What types of surgeries can be performed robotically?",
    answer:
      "Dr. Kapil Agrawal performs robotic hernia repair (inguinal, umbilical, incisional), robotic gallbladder surgery, robotic bariatric surgery (sleeve, bypass), robotic anti-reflux (GERD) and hiatus hernia surgery, and robotic appendectomy for complex cases.",
  },
]

export default function RoboticSurgeryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about robotic surgery and robot-assisted procedures</p>
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

