'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is the main cause of Inguinal Hernia?',
    answer: 'A weak abdominal muscle is the leading cause of the Inguinal Hernia.',
  },
  {
    question: 'Is Surgery the only option for Inguinal Hernia Treatment in Delhi?',
    answer:
      'Yes. Surgery will provide you with a full recovery and a permanent solution. In contrast, a non-surgical method may give you temporary relief but won\'t cure it for the long term.',
  },
  {
    question: 'How much will it cost for Inguinal Hernia Surgery in Delhi?',
    answer:
      'The cost usually varies depending on the complexity of the Inguinal Hernia and the technique required for adequate recovery. An estimated range from ₹50,000 to ₹1,20,000 is generally opted for permanent results and fast recovery. Robotic surgery costs even more and depending upon the hospital and implants, it is more costly when compared to laparoscopic surgery.',
  },
  {
    question: 'How will I know if my hernia is getting complicated?',
    answer:
      'If you feel constant or severe pain when moving, standing, bending, changing sides, coughing, or lifting, then it can be a sign of emergency. It can be due to complications like strangulation or incarceration. In this case, you must immediately consult a hernia specialist surgeon.',
  },
  {
    question: 'Can my inguinal hernia go away on its own?',
    answer:
      'There is no natural way or method to cure hernia on its own. There are certain medicines which can provide symptomatic relief, but they can never cure hernia. Hernia is a medical condition which occurs due to a tear in the muscles either because of excessive strain on the muscles or weakness of the muscles. Therefore, if these muscles are not repaired correctly, the hernia will never be cured.',
  },
  {
    question: 'What is the difference between inguinal and femoral hernia?',
    answer:
      'Both are types of groin hernia. The location of both hernias is almost the same, and only a hernia specialist surgeon can differentiate between the femoral and inguinal hernia. Femoral hernia is more common in females and are more prone to complications.',
  },
  {
    question: 'How is inguinal hernia diagnosed?',
    answer:
      'Inguinal hernia is usually a clinical diagnosis, and a hernia specialist surgeon can easily diagnose the condition without any radiological tests. However, when the hernia is tiny, your surgeon can recommend radiological investigations to rule out the possibility of hernia. Various investigations to diagnose inguinal hernia include Clinical Examination, USG Scrotum, and CT scan of the pelvis.',
  },
  {
    question: 'What are the complications of inguinal hernia?',
    answer:
      'The main complications include Incarceration of the Bowel (the bowel becomes permanently trapped in the defect and cannot be pushed back) and Strangulation of the Bowel (a surgical emergency in which the trapped intestine loses the blood supply, resulting in the death of the portion of the trapped intestine).',
  },
  {
    question: 'Why is early treatment of inguinal hernia better?',
    answer:
      'Hernia is a slowly progressive disease, and the size of the hernia increases with time. As the size increases, the contents can get trapped, which can complicate the hernia repair. Over time, the surrounding muscles at the site of hernia can further weaken, which raises the risk of hernia recurrence. Larger hernia defects require larger meshes for repair, which not only increases the cost of surgery but also increases the likelihood of recurrence.',
  },
  {
    question: 'What is 3-D Mesh for Inguinal Hernia Repair?',
    answer:
      '3D Mesh for inguinal hernia repair is a specially anatomically designed surgical mesh which easily fits into the contour of the groin area. These meshes require less fixation and provide better comfort post-surgery. However, 3D Mesh for inguinal hernia repair doesn\'t decrease the chances of recurrence, and there are no long-term benefits to using this mesh.',
  },
]

export default function InguinalHerniaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about inguinal hernia symptoms, treatment options, recovery timelines, and insurance assistance.
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

