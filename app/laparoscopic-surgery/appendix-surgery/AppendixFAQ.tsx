'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is the main cause of Appendix?',
    answer: 'Appendicitis occurs due to blockage in the appendix, due to hardened stool, infection, or swollen lymph tissue. This blockage can cause inflammation and bacterial growth.',
  },
  {
    question: 'How do I know if I need appendix surgery?',
    answer: 'If you&apos;re facing acute lower right abdominal pain, nausea, fever, and vomiting, you may have appendicitis. Surgery is advised soon after diagnosis to prevent rupture.',
  },
  {
    question: 'What is the recovery time for laparoscopic appendix surgery?',
    answer: 'Most patients take 3–5 days to recover after laparoscopic appendectomy. You can get back to your normal activities in a week.',
  },
  {
    question: 'Is appendix surgery a major surgery?',
    answer: 'Laparoscopic appendix surgery is regarded as minimally invasive, not major. It is executed with tiny incisions and involves quick recovery and minimal complications.',
  },
  {
    question: 'Is surgery the best option for the management of appendicitis?',
    answer: 'Yes, surgery (appendectomy) is the most trusted and lasting treatment. It helps to prevent rupture, infection, and other life-threatening complications. Dr. Kapil performs laparoscopic surgery with positive outcomes.',
  },
  {
    question: 'Are there any dietary restrictions post-appendix surgery?',
    answer: 'Yes, for a few days after surgery, a soft or liquid diet is recommended. You can gradually move to normal diet as per your nutritionist advice.',
  },
  {
    question: 'What is the duration of stay in the hospital post laparoscopic appendicectomy?',
    answer: 'Most patients are discharged within 24 hours of laparoscopic appendix surgery at Habilite Clinics.',
  },
  {
    question: 'What is an appendicular lump?',
    answer: 'An appendicular lump is a mass formed when the body tries to wall off an infected appendix. In such conditions, medical surgery is recommended.',
  },
  {
    question: 'What is interval appendicectomy?',
    answer: 'It is a surgery done a few weeks after treating an appendicular lump or abscess with medicines. Dr. Kapil performs it to prevent future appendicitis.',
  },
  {
    question: 'How much does appendix surgery cost in Delhi?',
    answer: 'At Habilite Clinics, laparoscopic appendix surgery typically ranges from ₹55,000 to ₹90,000, depending on the complications and services included. The price is transparent and all-inclusive.',
  },
  {
    question: 'Which doctor is best for appendix?',
    answer: 'Dr. Kapil Agrawal is one of the most trusted and experienced laparoscopic surgeons in Delhi, with 23+ years of experience and thousands of successful appendix surgeries.',
  },
  {
    question: 'Which appendix surgery is best?',
    answer: 'Laparoscopic appendectomy is the preferred method—it&apos;s less painful, leaves minimal scars, and allows for quicker recovery compared to open surgery.',
  },
  {
    question: 'How high risk is appendix surgery?',
    answer: 'Laparoscopic appendix surgery is low-risk in most patients. However, if the appendix has ruptured, there may be a slightly higher risk of infection or complications, which Dr. Kapil handles expertly.',
  },
  {
    question: 'How many hours does an appendix surgery take?',
    answer: 'Laparoscopic appendix surgery usually takes 30 to 45 minutes. Additional time may be needed in complicated or delayed cases.',
  },
  {
    question: 'Is appendix curable without operation?',
    answer: 'In select cases, antibiotics can temporarily treat appendicitis. But there&apos;s a high risk of recurrence, so surgery is recommended for permanent cure.',
  },
  {
    question: 'Which test is good for appendix?',
    answer: 'Ultrasound and CT scan are the most effective imaging tests to confirm appendicitis. Blood tests may also show signs of infection.',
  },
  {
    question: 'Is appendix surgery painful?',
    answer: 'Laparoscopic surgery causes only mild discomfort postoperatively, which is well-managed with pain medications. Most patients feel better within 1–2 days.',
  },
]

export default function AppendixFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about appendicitis and laparoscopic appendectomy</p>
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

