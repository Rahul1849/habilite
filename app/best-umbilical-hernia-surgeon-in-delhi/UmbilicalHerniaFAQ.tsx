'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What causes an umbilical hernia in adults?',
    answer:
      'Weak abdominal muscles, excessive pressure on the abdomen, or congenital factors can lead to an umbilical hernia. Other contributing factors include obesity, pregnancy, chronic conditions like ascites, and activities that increase abdominal pressure.',
  },
  {
    question: 'Can umbilical hernias heal without surgery?',
    answer:
      'No, hernias do not heal on their own. Surgery is the only permanent solution. While small hernias in infants may close naturally, adult umbilical hernias require surgical repair to prevent complications.',
  },
  {
    question: 'What is the recovery time after laparoscopic or robotic hernia surgery in Delhi?',
    answer:
      'Most patients can return to normal activities within 1-2 weeks, with full recovery in about 4-6 weeks. With minimally invasive techniques, patients typically experience less pain and faster recovery compared to open surgery.',
  },
  {
    question: 'Is the surgery covered by health insurance?',
    answer:
      'Yes, most insurance plans cover hernia surgery. Our clinic also offers cashless options. Dr. Kapil Agrawal operates at premier hospitals in Delhi that support comprehensive insurance networks.',
  },
  {
    question: 'How much does umbilical hernia surgery cost in Delhi?',
    answer:
      'The cost depends on the complexity and surgical method, typically ranging between ₹50,000 and ₹1,50,000. Laparoscopic and robotic procedures may cost more but offer faster recovery and better outcomes. We provide transparent pricing with insurance support and EMI options.',
  },
  {
    question: 'What are the symptoms of umbilical hernia?',
    answer:
      'Common symptoms include swelling near the belly button that becomes more visible when coughing, standing, sneezing, or straining; pain in the abdominal area, especially during activities involving bending, lifting, or stretching; nausea or vomiting (indicating complications); and redness around the swelling area or a tender bulge.',
  },
  {
    question: 'Why should I not ignore an umbilical hernia?',
    answer:
      'Umbilical hernias can lead to serious complications like incarceration (hernia gets trapped) and strangulation (loss of blood supply), which are medical emergencies requiring immediate surgery. Early treatment prevents these complications and ensures better outcomes.',
  },
  {
    question: 'What surgical options are available for umbilical hernia?',
    answer:
      'Dr. Kapil Agrawal offers three main surgical approaches: Laparoscopic surgery (minimally invasive with small incisions), Robotic-assisted surgery (most advanced for complex cases), and Open surgery (traditional approach for larger hernias). The choice depends on your specific condition and hernia characteristics.',
  },
]

export default function UmbilicalHerniaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about umbilical hernia symptoms, treatment options, recovery timelines, and insurance assistance.
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











