'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How long does it take to recover after femoral hernia surgery?',
    answer:
      'Recovery times vary from 1-2 weeks after laparoscopic surgery and full recovery for open surgery may take 3-4 weeks.',
  },
  {
    question: 'Is femoral hernia surgery painful?',
    answer:
      'Modern surgical techniques like laparoscopic hernia surgery and robotic-assisted hernia surgery ensure minimal pain during surgery.',
  },
  {
    question: 'What causes a femoral hernia?',
    answer:
      'Femoral hernias often occur due to weakness in the abdominal wall, heavy lifting, obesity, or persistent coughing. It is more common in females.',
  },
  {
    question: 'Will my insurance cover femoral hernia surgery?',
    answer:
      'Yes, most insurance providers cover hernia surgeries. Our team will assist you with the insurance process for a hassle-free experience.',
  },
  {
    question: 'Do you need a Femoral Hernia Surgery?',
    answer:
      'Surgery is the only effective solution to treat femoral hernias and prevent serious complications like strangulation. You should consider femoral hernia operation if you experience persistent pain or discomfort, the hernia is growing larger over time, or you notice signs of strangulation such as sudden severe pain, nausea, or vomiting.',
  },
  {
    question: 'What are the symptoms of femoral hernia?',
    answer:
      'Common symptoms include a noticeable lump or bulge near the groin or upper thigh, nausea or vomiting (in extreme cases), pain and discomfort especially while standing, lifting, or straining, and a feeling of pressure or weakness in the groin area.',
  },
  {
    question: 'What happens if femoral hernia is left untreated?',
    answer:
      'Delaying treatment for a femoral hernia can lead to severe complications including strangulation (loss of blood supply to the herniated tissue), bowel obstruction (blockage in the intestines causing nausea and vomiting), and chronic pain and discomfort.',
  },
  {
    question: 'What are the benefits of laparoscopic femoral hernia surgery?',
    answer:
      'Laparoscopic surgery is minimally invasive with smaller incisions and less scarring, reduced postoperative pain, quick recovery and smooth healing, and allows patients a quick return to normal activities with minimal downtime.',
  },
]

export default function FemoralHerniaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about femoral hernia symptoms, treatment options, recovery timelines, and insurance assistance.
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












