'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is sleeve gastrectomy (gastric sleeve) surgery?',
    answer: 'Sleeve gastrectomy, also known as vertical sleeve gastrectomy, is a purely restrictive bariatric surgery where about 85% of the stomach is removed laparoscopically, reducing stomach capacity from 1.5 liters to 150 ml. It has become one of the most commonly performed bariatric surgeries due to substantial weight loss, no requirement of supplements, and minimal follow-up.',
  },
  {
    question: 'How does sleeve gastrectomy work?',
    answer: 'The surgery is performed laparoscopically with 4-5 small incisions. About 85% of the stomach is removed using staplers, creating a tube-like "sleeve". The removed portion includes the fundus, which produces ghrelin (the hunger hormone). This significantly reduces hunger levels, allowing patients to feel fuller faster and longer.',
  },
  {
    question: 'What are the advantages of sleeve gastrectomy?',
    answer: 'Advantages include: rapid and excellent weight loss, significantly reduced appetite and cravings (due to reduced ghrelin), fewer complications compared to other bariatric procedures (no intestinal rerouting), minimal follow-up required, and no nutritional supplements needed since there is no malabsorption.',
  },
  {
    question: 'How much weight can I lose with sleeve gastrectomy?',
    answer: 'Patients typically lose about 60-70% of their excess body weight following sleeve gastrectomy surgery. You can achieve more weight loss by following a strict diet plan and regular exercise. The procedure is known for producing excellent weight loss results.',
  },
  {
    question: 'Can sleeve gastrectomy cure diabetes?',
    answer: 'Yes, gastric sleeve surgery can cure diabetes in 80% of patients. In the remaining 20%, the requirement of medicines is greatly reduced. The duration of diabetes is an important factor - if diabetes duration is less than 5 years, the chances of cure are very high.',
  },
  {
    question: 'What is single port gastric sleeve surgery?',
    answer: 'Single port bariatric surgery is an advanced technique where the entire surgery is performed through a single, small incision in the umbilicus (belly button), making the scar virtually invisible. This results in faster recovery, reduced complications and infections, and amazing aesthetic results. It is offered to selected patients based on their condition.',
  },
  {
    question: 'Do I need to take supplements after sleeve gastrectomy?',
    answer: 'No, one of the major advantages of sleeve gastrectomy is that patients do not require nutritional supplements. Since there is no re-routing of the intestines or any malabsorption, it is a low-maintenance procedure compared to other bariatric surgeries.',
  },
  {
    question: 'How long is the hospital stay after sleeve gastrectomy?',
    answer: 'Most patients are discharged within 24 hours after sleeve gastrectomy surgery. The procedure is performed laparoscopically with minimal incisions, allowing for quick recovery and early discharge.',
  },
  {
    question: 'What is the recovery time after sleeve gastrectomy?',
    answer: 'Full recovery typically takes 2-4 weeks with gradual return to normal activities. Most patients can return to work within 1-2 weeks, depending on their job requirements. The laparoscopic approach minimizes post-operative discomfort and speeds recovery.',
  },
  {
    question: 'What other health benefits can I expect after sleeve gastrectomy?',
    answer: 'Due to significant weight loss, patients experience relief from back pain, hip pain, knee pain, and foot pain, allowing them to walk and exercise more. Patients also benefit from improved menstrual regularity, resolution of sleep apnea and snoring, and reduced depression.',
  },
  {
    question: 'Is sleeve gastrectomy reversible?',
    answer: 'No, sleeve gastrectomy is an irreversible procedure. The removed portion of the stomach cannot be restored. However, this is generally not a concern as the procedure is highly effective and has excellent long-term results when patients maintain healthy eating habits and an active lifestyle.',
  },
  {
    question: 'Who is a good candidate for sleeve gastrectomy?',
    answer: 'Good candidates are individuals with BMI 37.5 or above, or BMI 32.5 or above with obesity-related health conditions. It is ideal for those seeking a straightforward, low-maintenance bariatric procedure with excellent weight loss results. A thorough evaluation by Dr. Kapil Agrawal will determine if sleeve gastrectomy is right for you.',
  },
  {
    question: 'What is Dr. Kapil Agrawal\'s experience with sleeve gastrectomy?',
    answer: 'Dr. Kapil Agrawal is an internationally trained expert with over 23 years of experience performing bariatric surgeries. He has successfully performed more than 7000 advanced bariatric surgeries, including sleeve gastrectomy procedures. His expertise includes both conventional and single port techniques, providing personalized care to achieve optimal results.',
  },
]

export default function GastricSleeveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about sleeve gastrectomy (gastric sleeve) surgery</p>
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

