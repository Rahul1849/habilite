'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is duodenal jejunal bypass surgery?',
    answer: 'Duodenal jejunal bypass, also known as single anastomosis gastric bypass, is a bariatric surgery that combines sleeve gastrectomy with intestinal bypass. About 70% of the stomach is removed, and the intestine is divided preserving the pylorus, creating a new connection after bypassing approximately 250 cm of intestine.',
  },
  {
    question: 'How does duodenal jejunal bypass work?',
    answer: 'The procedure is performed laparoscopically with 4-5 tiny incisions. About 70% of the stomach is removed (similar to sleeve gastrectomy but with less restriction), and the intestine is divided below the stomach, preserving the pylorus. A new connection is created after bypassing approximately 250 cm of intestine, creating both restrictive and malabsorptive effects.',
  },
  {
    question: 'What are the advantages of duodenal jejunal bypass?',
    answer: 'Advantages include: more eating freedom compared to sleeve gastrectomy, excellent long-term results similar to gastric bypass, profound hormonal changes that reduce appetite and control diabetes, the excised stomach is removed from the body (reducing risk of ulcers/cancer), and reduced dumping syndrome due to preserved pylorus.',
  },
  {
    question: 'How much weight can I lose with duodenal jejunal bypass?',
    answer: 'Duodenal jejunal bypass has excellent long-term results with success rates as good as gastric bypass in terms of weight loss. The combination of restriction and malabsorption (bypassing 250 cm of intestine) makes it highly effective for significant and sustained weight loss.',
  },
  {
    question: 'Can duodenal jejunal bypass cure diabetes?',
    answer: 'Yes, duodenal jejunal bypass is particularly effective for diabetic patients, even those who are not very obese. The procedure causes marked hormonal changes that increase insulin secretion and decrease hormones that act against insulin, resulting in very good resolution of diabetes within a short span of time.',
  },
  {
    question: 'What is the difference between duodenal jejunal bypass and sleeve gastrectomy?',
    answer: 'While both remove part of the stomach, duodenal jejunal bypass removes less (70% vs 75-80%) and includes intestinal bypass (250 cm), giving patients more eating freedom. It also produces more profound hormonal changes and has better long-term results for diabetes resolution.',
  },
  {
    question: 'What is the difference between duodenal jejunal bypass and gastric bypass?',
    answer: 'Key differences: duodenal jejunal bypass preserves the pylorus (reducing dumping syndrome), removes the excised stomach from the body (reducing cancer risk), bypasses more intestine (250 cm vs ~100 cm), and is particularly good for diabetic patients who are not very obese.',
  },
  {
    question: 'Is duodenal jejunal bypass safe?',
    answer: 'Yes, duodenal jejunal bypass is a very safe and effective operation when performed on suitable candidates by an experienced surgeon like Dr. Kapil Agrawal. It is a modification of the Duodenal Switch operation that eliminates the severe malabsorption and side effects of the original procedure.',
  },
  {
    question: 'How long is the hospital stay after duodenal jejunal bypass?',
    answer: 'Most patients are discharged within 24 hours after duodenal jejunal bypass surgery. The procedure is performed laparoscopically with minimal incisions, allowing for quick recovery and early discharge.',
  },
  {
    question: 'What is the recovery time after duodenal jejunal bypass?',
    answer: 'Full recovery typically takes 2-4 weeks with gradual return to normal activities. Most patients can return to work within 1-2 weeks, depending on their job requirements. The laparoscopic approach minimizes post-operative discomfort and speeds recovery.',
  },
  {
    question: 'Will I need to take vitamins after duodenal jejunal bypass?',
    answer: 'Yes, lifelong vitamin and mineral supplementation is essential after duodenal jejunal bypass surgery due to the malabsorptive component (250 cm of intestine bypassed). Your healthcare team will provide specific recommendations for supplements including B12, iron, calcium, and multivitamins to prevent deficiencies.',
  },
  {
    question: 'Who is a good candidate for duodenal jejunal bypass?',
    answer: 'Good candidates include: patients who are diabetic but not very obese (this procedure is especially beneficial for diabetes resolution), patients with a family history of gastric cancer (since the stomach is removed), patients seeking excellent long-term weight loss results, and those who want more eating freedom than sleeve gastrectomy provides.',
  },
  {
    question: 'What is Dr. Kapil Agrawal\'s experience with duodenal jejunal bypass?',
    answer: 'Dr. Kapil Agrawal is an internationally trained expert with over 23 years of experience performing bariatric surgeries. He has successfully performed more than 7000 advanced bariatric surgeries, including duodenal jejunal bypass procedures. His expertise and personalized approach have helped thousands of patients achieve successful weight loss and improved health.',
  },
]

export default function DuodenalJejunalBypassFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about duodenal jejunal bypass surgery</p>
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


