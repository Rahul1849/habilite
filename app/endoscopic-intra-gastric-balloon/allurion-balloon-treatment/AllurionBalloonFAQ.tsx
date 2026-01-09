'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Is Allurion a surgical procedure?',
    answer: 'No. The Allurion Balloon is completely non-surgical. No endoscopy or anaesthesia is required. It is a swallowable gastric balloon that is placed by swallowing a capsule containing the deflated balloon.',
  },
  {
    question: 'How much weight can I lose?',
    answer: 'Patients lose an average of 10–15 kg in 16 weeks, depending on compliance. The amount of weight loss depends on following the dietary guidelines, using the Allurion app for tracking, and maintaining a healthy lifestyle during the treatment period.',
  },
  {
    question: 'How long does the balloon stay inside?',
    answer: 'The Allurion balloon remains for approximately 4 months (16 weeks) and exits naturally. After this period, the balloon automatically deflates and passes out through your digestive system without any removal procedure needed.',
  },
  {
    question: 'Does the balloon require a hospital stay?',
    answer: 'No. It is a daycare procedure. You can go home within a couple of hours after the balloon placement. The entire procedure takes less than 30 minutes and is completed in a single outpatient visit.',
  },
  {
    question: 'What happens after 4 months?',
    answer: 'No removal is needed for the balloon as it shrinks on its own and passes out naturally. You will not be able to even notice when it leaves your body. The balloon deflates automatically and exits through your digestive system.',
  },
  {
    question: 'What if I feel discomfort?',
    answer: 'Some nausea or cramps may happen in the first few days. It settles down with meds. Follow-ups are done to make sure you\'re okay and healing fine. These mild side effects are temporary and can be effectively managed with medication and rest.',
  },
  {
    question: 'Is the treatment covered under insurance?',
    answer: 'Depends on the plan. Many insurers offer cashless or reimbursement options. You can check with your provider before starting. Habilite Clinics also offers cashless insurance facility for eligible patients.',
  },
  {
    question: 'Who is a good candidate for Allurion Balloon?',
    answer: 'Ideal candidates include individuals with BMI between 27 and 40+, people who have struggled with long-term weight loss, those who want to avoid surgery, patients preparing for future bariatric surgery, and people at risk of diabetes, high BP, joint pain, PCOS, or sleep apnea. Patients should not have active ulcers, strictures, or gastrointestinal bleeding disorders.',
  },
  {
    question: 'What support is available after the balloon is placed?',
    answer: 'Dr. Kapil Agrawal\'s team offers comprehensive support including tailored meal planning by in-house dietitians, lifestyle tracking through Allurion\'s mobile app and Bluetooth-connected devices, routine medical check-ins with behavioural and medical specialists, 24/7 helpline access, and consistent support from Habilite Clinics for proper follow-up appointments and wellness tracking.',
  },
  {
    question: 'How does the Allurion Balloon work?',
    answer: 'The Allurion Balloon is swallowed as a capsule containing a deflated balloon. Once it reaches the stomach, the balloon is filled with gas and takes up space, making you feel full quickly. This reduces hunger and helps with portion control. The balloon stays in the stomach for about 16 weeks, then automatically deflates and passes out naturally through your digestive system.',
  },
  {
    question: 'What makes Allurion different from other gastric balloons?',
    answer: 'The Allurion Balloon is unique because it doesn\'t require endoscopy, anaesthesia, or surgical procedures. It is swallowable, making it the most convenient and comfortable gastric balloon experience. It also exits naturally without any removal procedure, and is supported by Allurion\'s AI-powered app and smart monitoring tools.',
  },
  {
    question: 'What is Dr. Kapil Agrawal\'s experience with Allurion Balloon?',
    answer: 'Dr. Kapil Agrawal is well known across Delhi for handling the Allurion Balloon with experience and care. He has more than 23 years of experience doing both surgery and non-surgery weight loss. His advanced training and results in swallowable, no-endoscopy balloon therapy have made him a leading name in the field of obesity treatment in India. He is affiliated with premier hospitals all over Delhi NCR, with centres in South Delhi, Noida and Gurugram.',
  },
]

export default function AllurionBalloonFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about Allurion Balloon treatment</p>
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



