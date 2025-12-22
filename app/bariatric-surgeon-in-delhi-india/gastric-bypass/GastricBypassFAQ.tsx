'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is gastric bypass surgery?',
    answer: 'Gastric bypass is one of the most effective and successful bariatric procedures, often referred to as the gold standard of bariatric surgery. The procedure is performed laparoscopically with 4-5 tiny incisions. The stomach is divided into two pouches using staplers, and the small bowel is rerouted to create a smaller stomach pouch and bypass part of the intestine, leading to both restriction and malabsorption.',
  },
  {
    question: 'How does gastric bypass work?',
    answer: 'Gastric bypass works in two ways: 1) Restriction - By creating a smaller stomach pouch that can only hold a cup of food, you are restricted in how much you can eat. 2) Malabsorption - Food enters directly into the lower part of the small bowel, bypassing the part of the intestine where fat is absorbed, which further augments weight loss and helps maintain it permanently.',
  },
  {
    question: 'How much weight can I lose with gastric bypass?',
    answer: 'Patients typically lose 80-85% of their excess weight with gastric bypass surgery. The combination of restriction and malabsorption makes it one of the most effective weight loss procedures available.',
  },
  {
    question: 'Can gastric bypass cure diabetes?',
    answer: 'Yes, gastric bypass can cure Type 2 diabetes in about 70% of patients. Patients often experience remission in their diabetes within a few days of surgery, even before significant weight loss occurs. This is due to hormonal changes that increase insulin secretion and decrease insulin resistance.',
  },
  {
    question: 'What are the advantages of gastric bypass?',
    answer: 'The advantages include: 80-85% excess weight loss, correction of hyperlipidemia and high blood pressure in over 70% of patients, cure of obstructive sleep apnea and snoring, Type 2 diabetes cure in about 70% of patients, and relief from GERD, swelling in legs, low back pain, and joint pain in almost all patients.',
  },
  {
    question: 'How long is the hospital stay after gastric bypass?',
    answer: 'Most patients are discharged within 24 hours after gastric bypass surgery. The procedure is performed laparoscopically with minimal incisions, allowing for a quick recovery and early discharge.',
  },
  {
    question: 'What is the recovery time after gastric bypass?',
    answer: 'Full recovery typically takes 2-4 weeks with gradual return to normal activities. Most patients can return to work within 1-2 weeks, depending on their job requirements. Regular follow-up appointments are essential for optimal results.',
  },
  {
    question: 'Who is a good candidate for gastric bypass?',
    answer: 'Good candidates are individuals who are obese and have tried other methods of weight loss without success. It is particularly beneficial for patients with Type 2 diabetes, as it can help cure the condition. A thorough evaluation by Dr. Kapil Agrawal will determine if gastric bypass is the right option for you.',
  },
  {
    question: 'Are there any risks associated with gastric bypass?',
    answer: 'As with any surgical procedure, there are risks, but gastric bypass is considered safe when performed by an experienced surgeon like Dr. Kapil Agrawal. The procedure is performed laparoscopically, which reduces risks compared to open surgery. Your surgeon will discuss all potential risks and benefits during your consultation.',
  },
  {
    question: 'Will I need to take vitamins after gastric bypass?',
    answer: 'Yes, lifelong vitamin and mineral supplementation is essential after gastric bypass surgery due to reduced absorption. Your healthcare team will provide specific recommendations for supplements including B12, iron, calcium, and multivitamins to prevent deficiencies.',
  },
  {
    question: 'Can I get pregnant after gastric bypass?',
    answer: 'Yes, gastric bypass can actually improve fertility and pregnancy outcomes. It helps resolve PCOS and hormonal imbalances, increasing chances of conception. It also prevents obesity-related complications like gestational diabetes. However, it is recommended to wait 12-18 months after surgery before becoming pregnant to ensure stable weight loss.',
  },
  {
    question: 'What is Dr. Kapil Agrawal\'s experience with gastric bypass?',
    answer: 'Dr. Kapil Agrawal is an internationally trained expert with over 23 years of experience performing bariatric surgeries. He has successfully performed more than 7000 advanced bariatric surgeries, including gastric bypass procedures. His expertise and personalized approach have helped thousands of patients achieve successful weight loss and improved health.',
  },
]

export default function GastricBypassFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about gastric bypass surgery</p>
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

