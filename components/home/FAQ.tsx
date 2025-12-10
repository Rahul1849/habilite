'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { FAQ as FAQType } from '@/lib/sanity/types'
import { renderPortableText } from '@/lib/sanity/portableTextComponents'

interface FAQProps {
  faqs?: FAQType[]
}

// Fallback FAQs if Sanity data is not available
const fallbackFAQs = [
  {
    question: 'Who is Dr Kapil Agrawal?',
    answer: 'Dr Kapil Agrawal is a highly qualified laparoscopic, laser & bariatric surgeon based in Delhi with over 23 years of experience, holding credentials including MBBS, MS (Surgery), MRCS (London, U.K.), MMED (Singapore), and FMAS.',
  },
  {
    question: 'What kind of treatments does Dr Kapil Agrawal specialise in?',
    answer: 'He specialises in minimally invasive (laparoscopic and robotic) surgeries and laser treatments including gallbladder and hernia surgery, advanced bariatric and metabolic surgery, anorectal laser surgeries (for piles, fistula, fissure, pilonidal sinus), single-port and robot-assisted techniques.',
  },
  {
    question: 'Where does he practise / where can I consult him?',
    answer: 'Dr Agrawal is senior consultant in the Department of Laparoscopic & Bariatric Surgery at the Apollo Group of Hospitals, New Delhi, and founder of Habilite Clinics (South Delhi, Green Park & Lajpat Nagar) where he offers consultations.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book a consultation with Dr Agrawal via Habilite Clinics\' contact number, email, or enquiry form on the website, with tele-consultations (video/online) also available in many cases.',
  },
  {
    question: 'Do you accept insurance and financing (EMI) options?',
    answer: 'Yes — major health insurance cash-less facilities are supported at his affiliated hospitals, and easy EMI / payment-plans are offered for selected surgical procedures.',
  },
  {
    question: 'What are the benefits of minimally invasive / laser surgery under Dr Agrawal?',
    answer: 'Minimally invasive and laser techniques offer smaller incisions, less pain, quicker recovery, minimal scarring, faster return to work and normal life — all of which Dr Agrawal emphasises in his practice.',
  },
  {
    question: 'Is single-port laparoscopic surgery or robotic surgery available?',
    answer: 'Yes. Dr Agrawal offers single-port laparoscopic and robot-assisted techniques for suitable cases (for example gallbladder surgery, hernia, bariatric surgery) to maximise cosmetic and recovery advantages.',
  },
  {
    question: 'What kinds of weight loss / bariatric treatments are offered?',
    answer: 'He offers a full range: sleeve gastrectomy, mini gastric bypass, Roux-en-Y bypass, revisional bariatric surgery, as well as non-surgical treatments like intragastric balloons (Allurion, Spatz) plus medically supervised weight-management programmes.',
  },
  {
    question: 'What should I bring / how should I prepare for the first consultation?',
    answer: 'Bring previous imaging/reports (if any), list of current medications, any existing comorbidities (e.g., diabetes, hypertension). The consultation will include clinical evaluation, discussion of treatment options, expected outcomes and costs. Prepare questions in advance about risks, recovery time, and expected results.',
  },
  {
    question: 'Post-surgery care: what is the typical recovery & follow-up like?',
    answer: 'Recovery and follow-up depend on the specific procedure. Minimally invasive surgeries typically lead to shorter hospital stays, faster mobilisation and fewer complications. A follow-up plan will be provided including wound check-ups, diet and lifestyle advice, and long-term surveillance if needed.',
  },
  {
    question: 'Are international patients / tele-consultations catered to?',
    answer: 'Yes — Habilite Clinics supports international patients and online consultations. Dr Agrawal and his team coordinate care, treatment planning, and post-operative follow-up for patients coming from abroad.',
  },
  {
    question: 'How do I know if I need surgery or a less invasive option?',
    answer: 'During the consultation, Dr Agrawal will assess your condition (symptoms, investigations, overall health) and advise whether surgery is the best option or if a conservative, non-surgical treatment may suffice. The decision will be personalised based on your health, lifestyle, and goals.',
  },
]

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, treatments, and consultation process
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-3">
            {(faqs && faqs.length > 0 ? faqs : fallbackFAQs).map((faq, index) => {
              const isOpen = openIndex === index
              const question = faq.question || (faq as any).question
              const answer = faq.answer || (faq as any).answer
              const answerContent = Array.isArray(answer) ? renderPortableText(answer) : answer
              
              return (
                <div
                  key={(faq as any)._id ?? index}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-8 flex-1">
                      {question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="text-gray-600 w-5 h-5" />
                      ) : (
                        <ChevronDown className="text-gray-400 w-5 h-5" />
                      )}
                    </div>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2">
                      {Array.isArray(answer) ? (
                        <div className="text-gray-700 leading-relaxed">
                          {answerContent}
                        </div>
                      ) : (
                        <p className="text-gray-700 leading-relaxed">
                          {answerContent}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

