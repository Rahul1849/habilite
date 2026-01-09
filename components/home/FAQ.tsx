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
    question: 'Why is Dr. Kapil Agrawal considered one of the best laparoscopic surgeons in Delhi-NCR?',
    answer: 'Dr. Agrawal is recognized among the best laparoscopic surgeons in Delhi and the NCR due to his exclusive focus on advanced laparoscopic techniques, his high volume of successful complex procedures, continuous adoption of the latest robotic-assisted technology, and consistent positive outcomes documented by patient testimonials from across the region.',
  },
  {
    question: 'What laparoscopic procedures does Dr. Agrawal perform for patients from Delhi and the NCR?',
    answer: 'Dr. Agrawal offers a full spectrum of advanced laparoscopic surgeries, catering to the diverse needs of patients from Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad. This includes bariatric surgery for weight loss, hernia repair, gallbladder removal, anti-reflux surgery for hiatus hernia and appendix surgery.',
  },
  {
    question: 'How does Dr. Agrawal ensure the best results for laparoscopic surgery in Delhi?',
    answer: 'Dr Kapil Agrawal extensive experience of 23 years and expertise to perform complex cases ensures the best results. Dr. Agrawal employs high-definition laparoscopic and robotic systems for superior visualization, follows evidence-based surgical protocols, and provides personalized pre- and post-operative guidance to ensure a smooth and successful recovery for every patient.',
  },
  {
    question: ' As a top laparoscopic surgeon in South Delhi, how accessible is your clinic?',
    answer: 'Our clinic in South Delhi is easily accessible from across the NCR. We are strategically located with ample parking and are well-connected by metro and road. We understand the importance of convenience for our patients and have designed the patient journey to be as seamless as possible.',
  },
  {
    question: 'Do you offer second opinions for complex laparoscopic surgery cases in Delhi?',
    answer: ' Yes, Dr. Agrawal frequently provides expert second opinions for complex laparoscopic surgery cases from patients across Delhi-NCR. If you have been advised surgery and want to explore a minimally invasive option or seek further clarity, a consultation can provide a comprehensive review of your case.',
  },
  {
    question: 'What should I look for when choosing the best laparoscopic surgeon for hernia repair in Delhi?',
    answer: "When searching for the best surgeon for laparoscopic hernia repair in Delhi, key factors include the surgeon's specific experience and volume in hernia surgery, their use of advanced mesh and fixation techniques, their complication and recurrence rates, and their philosophy on patient education and recovery support."
  },
  {
    question: 'For someone in Gurgaon/Noida considering Robotic or Laparoscopic bariatric surgery, why travel to see Dr. Agrawal in Delhi?',
    answer: ' While there are options closer by, patients from Gurgaon, Noida, and beyond choose Dr. Agrawal for his specialized expertise as a bariatric and metabolic surgeon. His focus on long-term patient success & has multidisciplinary support team. He has the mastery of the latest laparoscopic and robotic techniques for weight loss surgery and offers a distinct advantage for a life-changing procedure.',
  },
  {
    question: 'How do consultations work for patients from outside Delhi?',
    answer: 'We welcome patients from all over the NCR and beyond. For preliminary discussions, teleconsultation options are also available to provide guidance and plan your visit efficiently.',
  },
  {
    question: 'What is Single Port Laparoscopic Surgery, and how is it different?',
    answer: 'Single-port laparoscopic surgery is an advanced form of Laparoscopic surgery where, instead of 3-4 tiny incisions, a single incision is made inside the umbilicus or belly button. This makes the scar almost invisible after surgery. Dr Kapil Agrawal performs single-port surgery mainly for gallbladder stones and bariatric surgery.',
  },
  {
    question: 'Are Teleconsultations available with Dr Kapil Agrawal',
    answer: 'Yes, you can book a video consultation with Dr. Kapil Agrawal. You can simply share your medical reports or documents in advance, and then connect with him online for a detailed discussion about your health concerns.',
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
            {fallbackFAQs.map((faq, index) => {
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

