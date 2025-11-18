'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Can newborns undergo stapler circumcision?',
    answer: 'Yes. ZSR staplers come in multiple sizes and are completely safe for neonates and children. The procedure is performed under short general anesthesia and the child is discharged the same day.',
  },
  {
    question: 'Can I get ZSR circumcision if the foreskin is infected?',
    answer: 'ZSR circumcision can be performed even in infected foreskin with excellent results. Your surgeon may prescribe a longer course of antibiotics to clear infection before and after the procedure.',
  },
  {
    question: 'Do I need to visit the clinic to remove the silicone ring?',
    answer: 'In 99% cases the silicone ring falls off on its own within 4–5 days after healing. Only 1% patients require the surgeon to remove the ring manually.',
  },
  {
    question: 'Does circumcision affect sexual drive or performance?',
    answer: 'Circumcision has a very modest effect on sexual performance. Libido and performance are influenced by many physiological and psychological factors.',
  },
  {
    question: 'Is circumcision covered under insurance?',
    answer: 'Yes. Almost all insurance companies cover circumcision. Habilite Clinics partners with leading hospitals in Delhi-NCR to provide seamless cashless options.',
  },
  {
    question: 'Is stapler circumcision painful?',
    answer: 'The ZSR stapler technique is almost painless. Patients are comfortable after the procedure and can resume normal activities from the next day.',
  },
  {
    question: 'Does circumcision change penis size or sensitivity?',
    answer: 'Circumcision does not change penis size. Sensitivity differences are minimal and vary from person to person. Studies show no significant effect on fertility or sperm production.',
  },
  {
    question: 'Which circumcision technique is best?',
    answer: 'Laser and stapler (ZSR) circumcision are the most advanced options. They are bloodless, stitchless, painless, and allow same-day discharge with faster healing than conventional surgery.',
  },
  {
    question: 'What are the main benefits of male circumcision?',
    answer: 'Improved penile hygiene and a protective effect against infections such as HIV, genital herpes, and human papilloma virus (HPV). HPV reduction lowers the risk of penile and cervical cancers.',
  },
  {
    question: 'How much does stapler circumcision cost in Delhi?',
    answer: 'The average cost ranges between ₹30,000 and ₹40,000 depending on the hospital, anesthesia, and device quality. Habilite Clinics can complete the procedure for approximately ₹20,000 with package pricing and EMI support.',
  },
]

export default function CircumcisionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about laser and ZSR circumcision</p>
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

