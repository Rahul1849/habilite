'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Is laser fistula surgery safe? What are the real risks and success rates?',
    answer: 'Laser surgery is completely safe when performed by an expert. The best fistula expert surgeon knows exactly how much laser energy to use, can navigate complex fistula tracts, and can identify and treat all branches of the fistula. Success rates are high when performed by experienced surgeons using quality equipment.',
  },
  {
    question: 'What is the cost of advanced fistula treatment in Delhi? Are EMI/payment options available?',
    answer: 'At Habilite Clinics, we offer Zero Interest EMI options. Our team will guide you through the entire process and ensure you get the best treatment at top-notch hospitals without financial distress. The cost varies depending on the complexity of the fistula and the procedure chosen.',
  },
  {
    question: 'Will health insurance cover laser or minimally invasive fistula procedures?',
    answer: 'Dr. Kapil Agrawal is a Senior Consultant Surgeon at Apollo Group of Hospitals, New Delhi. He usually prefers to operate patients with health insurance at Apollo Hospital, New Delhi. At Apollo Hospital, you get world-class facilities and a complete network of cashless insurance facilities.',
  },
  {
    question: 'Can anal fistulas be treated with medicines alone?',
    answer: 'No, medications like antibiotics may help with symptoms or infection, but they don\'t cure the fistula. Surgery is usually needed for complete treatment. Early surgical intervention prevents complications and ensures better outcomes.',
  },
  {
    question: 'Is laser treatment suitable for everyone with a fistula?',
    answer: 'Not always. Laser treatment works well for simple fistulas. It may not be ideal for complex fistulas with multiple branches or active infection. Dr. Kapil Agrawal will evaluate your specific condition and recommend the most appropriate treatment option during consultation.',
  },
  {
    question: 'Will I need dressings after laser surgery?',
    answer: 'Usually not. Laser treatment causes minimal wounds, but you\'ll receive detailed instructions for hygiene and aftercare. Most patients find the recovery process much simpler compared to traditional surgery.',
  },
  {
    question: 'How long is recovery after LIFT or laser fistula surgery in Delhi?',
    answer: 'Recovery is quick. Most patients return to normal activities in 3–4 days. You can bathe the next day and drive within a couple of days. Complete healing typically occurs within 4-6 weeks, with minimal discomfort throughout the recovery period.',
  },
  {
    question: 'What is a fistula plug or fibrin glue treatment?',
    answer: 'These are non-invasive treatments where materials are used to fill or seal the fistula tract. They are painless but often have higher chances of recurrence compared to surgical procedures like laser or LIFT. Dr. Agrawal will discuss all treatment options with you to determine the best approach.',
  },
]

export default function FistulaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about anal fistula treatment and laser surgery</p>
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

