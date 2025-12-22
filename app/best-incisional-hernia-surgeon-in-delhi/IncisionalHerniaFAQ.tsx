'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is the cost of incisional hernia surgery in Delhi?',
    answer:
      'The cost varies depending on the complexity of the hernia and the chosen surgical method. At Habilite Clinics, surgery typically ranges between ₹50,000 and ₹1,50,000, with cashless options available for insured patients.',
  },
  {
    question: 'Can incisional hernias heal without surgery?',
    answer:
      'No, surgery is the only permanent solution. Delaying treatment can lead to complications.',
  },
  {
    question: 'How long is the recovery period?',
    answer:
      'Recovery times vary by procedure: Laparoscopic and robotic-assisted hernia repair in Delhi: 1-2 weeks for normal activities. Open repair: 4-6 weeks for full recovery.',
  },
  {
    question: 'Are these procedures safe?',
    answer:
      'Yes, with experienced surgeons and advanced techniques, the procedures are highly safe and effective.',
  },
  {
    question: 'What happens if an incisional hernia is left untreated?',
    answer:
      'Untreated hernias can grow larger and lead to complications like bowel obstruction or strangulation, which are life-threatening.',
  },
  {
    question: 'What causes incisional hernia?',
    answer:
      'Incisional hernias occur due to incomplete healing of the abdominal wall post-surgery, increased abdominal pressure from activities like chronic coughing or heavy lifting, obesity, aging, smoking, and poor nutrition which impair healing and muscle strength.',
  },
  {
    question: 'What are the symptoms of incisional hernia?',
    answer:
      'Common symptoms include a visible bulge near the surgical scar, an increasing skin bump near or around the surgical scar which is growing in size, swelling and tenderness in the affected area, and constipation, nausea, vomiting or any other bowel obstruction.',
  },
  {
    question: 'Why is robotic-assisted hernia surgery recommended?',
    answer:
      'Robotic-assisted hernia repair is preferred because of its minimally invasive nature, leading to smaller incisions, reduced pain, and faster recovery. The robotic system offers enhanced precision, allowing surgeons to repair hernias more effectively, lowering the risk of recurrence. Patients benefit from shorter hospital stays and quicker return to normal activities.',
  },
]

export default function IncisionalHerniaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about incisional hernia symptoms, treatment options, recovery timelines, and insurance assistance.
        </p>
      </div>
      <div className="space-y-3 max-w-4xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={faq.question} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
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
    </section>
  )
}

