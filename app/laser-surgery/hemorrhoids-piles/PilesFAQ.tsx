'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What are the potential complications associated with untreated Piles?',
    answer: 'Some of the potential complications include: Sometimes, blood clots form within a haemorrhoid, causing severe pain and swelling. This is known as thrombosed piles. Chronic blood loss from piles can lead to anaemia, characterized by fatigue and weakness. Strangulated haemorrhoids is an extremely painful condition which can occur due to loss of blood supply to piles mass. This condition requires urgent surgical intervention.',
  },
  {
    question: 'What is the best treatment for piles?',
    answer: 'The best treatment of piles depends upon the grade and stage of piles. While very early stages can be managed with the help of medicines and certain precautions, grades II and III are best managed with the help of laser surgeries. Grade IV haemorrhoids are usually treated by stapler surgery for piles. Open surgeries best manage complicated piles or excessively prolapsed piles.',
  },
  {
    question: 'What are the chances of recurrence after laser surgery of piles?',
    answer: 'The chances of recurrence after laser surgery for piles are usually 4-5%. However, recurrences can be prevented by using high-quality laser machines, properly indicating the procedure, and avoiding constipation after surgery.',
  },
  {
    question: 'Can piles be treated with medicines?',
    answer: 'Piles can never be cured with medicines. However, medicines can delay the progression of disease or can help in providing symptomatic relief to the patients for some time. You must always seek the opinion of a specialist surgeon who can advise you on the best course of treatment.',
  },
  {
    question: 'What early surgical intervention for piles is better?',
    answer: 'Piles is a slowly progressive disease, and it is always better to treat piles when they are grade II or grade III. This is because these types of piles can be treated with laser, which is almost a painless procedure. If the piles progress to grade IV or develop complications, they may require open surgeries, which are quite painless during the initial days post-surgery.',
  },
  {
    question: 'How is the course of recovery after laser piles surgery?',
    answer: 'Laser surgery for piles is known for its quick recovery and minimal discomfort. Patients are typically discharged within 24 hours of the procedure and can resume normal activities within four to five days. Laser surgery doesn&apos;t require bed rest or post-operative dressings.',
  },
  {
    question: 'Is laser treatment safe for piles?',
    answer: 'Laser surgery is a highly safe procedure for the management of piles. The excellent quality laser machines are USFDA-approved and do not produce any side effects. However, it would be best if you considered the following facts before opting for the treatment: Experience and Expertise of surgeon, Grade and stage of piles, Quality of laser machines and fibres.',
  },
  {
    question: 'Does the quality of laser machines affect surgical outcomes?',
    answer: 'The quality of laser machines significantly affects surgical outcomes. Low-quality laser machines can lead to complications such as thermal burns. Even the likelihood of recurrence or piles returning is much higher than procedures performed with high-quality machines.',
  },
  {
    question: 'Which type of doctor is best for piles?',
    answer: 'A colorectal surgeon or a general surgeon with experience in anorectal conditions is best for treating piles.',
  },
  {
    question: 'Which is the best surgery for piles?',
    answer: 'Laser surgery is one of the best and most advanced options. It is painless, minimally invasive, and offers faster recovery.',
  },
  {
    question: 'What is the cost of piles surgery?',
    answer: 'The cost of piles surgery in India ranges from ₹30,000 to ₹90,000, depending on the procedure and hospital.',
  },
  {
    question: 'Is piles surgery risky?',
    answer: 'Modern piles surgeries like laser and stapler methods are safe and have minimal risks when done by experienced surgeons.',
  },
  {
    question: 'What are stage 4 hemorrhoids?',
    answer: 'Stage 4 hemorrhoids are severely prolapsed and remain outside the anus. They often require surgical treatment.',
  },
  {
    question: 'What size of piles need surgery?',
    answer: 'Large or prolapsed piles (Grade 3 or 4) that cause bleeding, pain, or discomfort usually require surgery.',
  },
  {
    question: 'Is piles surgery very painful?',
    answer: 'Not anymore. With advanced methods like laser and stapler surgery, pain is minimal and recovery is quick.',
  },
  {
    question: 'How to remove piles without surgery?',
    answer: 'Early-stage piles can be managed with diet changes, medicines, lifestyle modifications, and topical treatments.',
  },
  {
    question: 'Can piles be 100% cured?',
    answer: 'Yes, piles can be effectively cured with proper treatment. Surgery offers the best chance for permanent relief.',
  },
  {
    question: 'Can piles come again after surgery?',
    answer: 'Recurrence is rare with proper surgical technique and post-op care, but it can happen if lifestyle isn&apos;t improved.',
  },
  {
    question: 'What are grade 3 piles?',
    answer: 'Grade 3 piles prolapse during bowel movements and need to be pushed back manually. Surgery is usually recommended.',
  },
  {
    question: 'Can I sit after piles surgery?',
    answer: 'Yes, you can sit after piles surgery, though initially, you may need a soft cushion for comfort.',
  },
  {
    question: 'Which stage of piles need surgery?',
    answer: 'Grade 3 and Grade 4 piles often require surgery due to prolapse, bleeding, and discomfort.',
  },
]

export default function PilesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about piles treatment and laser surgery</p>
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

