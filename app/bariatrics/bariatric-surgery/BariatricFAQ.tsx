'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is the duration of stay in hospital?',
    answer: 'The type of procedure and condition of the patient typically determines the standard length of stay in the hospital. However, most patients are sent home by 24-48 hours after surgery.',
  },
  {
    question: 'Can bariatric surgery cure my diabetes?',
    answer: 'Upto 95% of patients who undergo bariatric surgery see improvement or even resolution in their type 2 diabetes. How long you have had diabetes, the type of bariatric procedure used, and how accomplished your surgeon is are significant variables that can influence the results.',
  },
  {
    question: 'What is the effect of bariatric surgery on pregnancy?',
    answer: 'Bariatric Surgery has significant positive effects on the pregnancy. Bariatric surgery by resolving PCOS and hormonal imbalances increases the chances of conception. It also prevents obesity-related complications like gestational diabetes during pregnancy. Bariatric surgery makes pregnancy a pleasant experience by avoiding unnecessary complications.',
  },
  {
    question: 'Can bariatric surgery cure my PCOD?',
    answer: 'PCOD (Polycystic Ovary Syndrome) is cured in almost every patient after bariatric surgery. If you are severely obese and suffering from PCOS, you must seriously look into the option of bariatric surgery by the best bariatric surgeon.',
  },
  {
    question: 'Which is better- Liposuction or Bariatric surgery?',
    answer: 'In short, liposuction is not a weight loss tool. It is a surgical technique that will remove fat beneath the skin of troubled areas, especially the abdomen or belly area. What liposuction will never do is make you lose weight, as it is a body contouring surgery that produces minimal weight loss. The only thing that makes a lasting difference in body weight is bariatric surgery.',
  },
  {
    question: 'What are the chances of weight regain following bariatric surgery?',
    answer: 'If you are adherent to post-surgery lifestyle changes, eat well (even after the recommended diet stages), and exercise reasonably regularly, the chances of weight regain are almost negligible. Regular follow-up with healthcare providers, keeping yourself motivated, and following the recommendations are ways to prevent weight restoration.',
  },
  {
    question: 'Do I need to stop alcohol after bariatric surgery?',
    answer: 'You must be very careful with alcohol consumption following bariatric surgery. Once you are a few months post bariatric surgery, then you can consume alcohol, but in restricted quantities. Excessive consumption can lead to nutritional deficiencies and weight gain. You must consult your surgeon, who is the best person to guide you regarding the intake of alcohol.',
  },
  {
    question: 'How does bariatric surgery affect my sexual life?',
    answer: 'Bariatric surgery can dramatically have a positive impact on your sexual life. Reduced obesity levels and hormonal changes can improve libido or sexual desire. Bariatric surgery improves sexual performance by reducing weight and increasing confidence levels.',
  },
  {
    question: 'Will I feel fragile and lethargic after weight loss surgery?',
    answer: 'Contrary to the popular belief of reduced stamina levels after bariatric surgery, bariatric surgery can significantly increase your staminal levels. Reduction in weight increases your stamina and energy levels dramatically, and you can easily carry out routine activities.',
  },
  {
    question: 'What is Dr Kapil Agrawal\'s experience?',
    answer: 'Dr. Kapil Agrawal has 23+ years of experience performing weight loss surgeries and is known for providing personalized care to his patients. Every patient has reported positive experiences under his care, praising his expertise, professionalism, and compassionate approach to patient care.',
  },
  {
    question: 'Will my scars be visible after weight loss surgery?',
    answer: 'Weight loss surgery is performed either laparoscopically or with robotic technology. As a result, it is almost scarless, with very tiny 3-4 incisions. We also offer single-port bariatric surgeries in selected individuals, which don\'t produce any visible scars.',
  },
]

export default function BariatricFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Common questions about bariatric surgery answered by Dr. Kapil Agrawal
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8 flex-1">
                    {faq.question}
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
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

