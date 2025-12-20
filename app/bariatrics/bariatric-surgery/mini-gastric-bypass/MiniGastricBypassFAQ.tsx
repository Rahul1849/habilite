'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is mini gastric bypass surgery?',
    answer: 'Mini gastric bypass is a simplified version of standard gastric bypass with similar results and fewer complications. It is a modified and simplified version of standard gastric bypass that provides safer and more straightforward surgery with similar weight loss results.',
  },
  {
    question: 'How does mini gastric bypass work?',
    answer: 'Mini gastric bypass is a combined procedure with both restrictive and malabsorptive components. A long, thin stomach pouch is created and joined to the lower part of the small intestine, bypassing about 200 cm of intestine. This reduces food intake and calorie absorption while causing hormonal changes that help resolve diabetes.',
  },
  {
    question: 'What is the difference between mini gastric bypass and standard gastric bypass?',
    answer: 'The main differences are: 1) Mini gastric bypass involves a single anastomosis (joint) while standard bypass has two, making it simpler and less prone to complications. 2) The stomach pouch in mini bypass is longer, providing less food restriction and more eating freedom. 3) Mini bypass bypasses more intestine (200 cm vs ~100 cm), leading to better weight loss and diabetes resolution.',
  },
  {
    question: 'How much weight can I lose with mini gastric bypass?',
    answer: 'Patients often report losing up to 80-85% of their excess weight within 12 months after mini gastric bypass surgery. The combination of restriction and increased malabsorption makes it highly effective for weight loss.',
  },
  {
    question: 'Can mini gastric bypass cure diabetes?',
    answer: 'Yes, mini gastric bypass can help resolve Type 2 diabetes. The surgery brings profound hormonal changes that increase insulin secretion and sensitivity, often causing resolution of diabetes. It also provides better resolution of diabetes and hypertension compared to standard gastric bypass.',
  },
  {
    question: 'What are the advantages of mini gastric bypass over standard gastric bypass?',
    answer: 'Advantages include: less food restriction (more eating freedom), simpler procedure with single anastomosis (lower complication risk), technically easier for surgeons to perform, better weight loss results, and better resolution of co-morbidities like diabetes and hypertension.',
  },
  {
    question: 'How long is the hospital stay after mini gastric bypass?',
    answer: 'Most patients are discharged within 24 hours after mini gastric bypass surgery. The procedure is performed laparoscopically with minimal incisions, allowing for quick recovery and early discharge.',
  },
  {
    question: 'What is the recovery time after mini gastric bypass?',
    answer: 'Full recovery typically takes 2-4 weeks with gradual return to normal activities. Most patients can return to work within 1-2 weeks, depending on their job requirements. The laparoscopic approach minimizes post-operative discomfort and speeds recovery.',
  },
  {
    question: 'Is mini gastric bypass safer than standard gastric bypass?',
    answer: 'Yes, mini gastric bypass is generally considered safer because it involves a single anastomosis (joint) compared to two in standard bypass, making it less complex and less prone to complications. It is also technically easier for surgeons to perform.',
  },
  {
    question: 'Will I have more eating freedom with mini gastric bypass?',
    answer: 'Yes, compared to standard gastric bypass, mini gastric bypass provides more eating freedom. The stomach pouch is longer, which means less restriction on food intake while still maintaining effective weight loss. This gives patients more liberty in their food choices.',
  },
  {
    question: 'Who is a good candidate for mini gastric bypass?',
    answer: 'Good candidates are individuals who are obese and have tried other weight loss methods without success. It is particularly beneficial for patients with Type 2 diabetes or hypertension. A thorough evaluation by Dr. Kapil Agrawal will determine if mini gastric bypass is the right option for you.',
  },
  {
    question: 'What is Dr. Kapil Agrawal\'s experience with mini gastric bypass?',
    answer: 'Dr. Kapil Agrawal is an internationally trained expert with over 23 years of experience performing bariatric surgeries. He has successfully performed more than 7000 advanced bariatric surgeries, including mini gastric bypass procedures. His expertise and personalized approach have helped thousands of patients achieve successful weight loss and improved health.',
  },
]

export default function MiniGastricBypassFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about mini gastric bypass surgery</p>
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


