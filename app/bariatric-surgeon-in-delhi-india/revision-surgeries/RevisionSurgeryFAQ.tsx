'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is revision bariatric surgery?',
    answer: 'Revision bariatric surgery refers to weight loss surgery that is done when patients do not obtain outstanding or desired results following previous weight loss surgeries. Although bariatric surgery is very effective, about 10% of patients may not achieve their weight loss goals due to inadequate weight loss, weight regain, or complications arising from surgery.',
  },
  {
    question: 'When is revision bariatric surgery needed?',
    answer: 'Revision surgery may be needed when patients experience inadequate weight loss, weight regain after initial success, complications from the original surgery (such as infection, stomach ulcers, or band displacement), or when the original procedure was not the best choice for their medical history, dietary habits, and lifestyle.',
  },
  {
    question: 'What causes bariatric surgery to fail?',
    answer: 'Bariatric surgery can fail due to several reasons: inadequate surgical technique or experience leading to a large gastric pouch, patient factors like poor follow-up, no change in eating habits, or continuation of poor lifestyle, complications from the original surgery, or choosing the wrong procedure type for the patient\'s specific needs.',
  },
  {
    question: 'What is lap band revision?',
    answer: 'Lap band surgery has fallen into disrepute because of inadequate weight loss and poor resolution of comorbidities. Sometimes, the band may get displaced or erode into the stomach causing infection. To correct these complications, Dr. Kapil Agrawal can perform other bariatric surgery procedures including gastric sleeve surgery or gastric bypass surgery to mend the hole and help achieve outstanding weight loss.',
  },
  {
    question: 'What is gastric sleeve revision?',
    answer: 'Gastric sleeve revision may be needed when the stomach dilates or becomes stretched out over time due to poor dietary adherence, lack of exercise, or excessive eating. Sometimes, lack of surgical expertise resulting in creation of a large stomach may also cause inadequate weight loss. Patients may benefit from a different type of bariatric surgery like gastric bypass or mini gastric bypass, or in selected cases, the sleeve can be trimmed again.',
  },
  {
    question: 'What is gastric bypass revision?',
    answer: 'Gastric bypass revision is needed when poor eating habits dilate the new stomach pouch, or when lack of expertise resulted in creation of a large stomach pouch. This leads to poor weight loss or weight regain. In such patients, resizing the pouch in revision surgery is the best option - the pouch is trimmed and reconnected to the intestine, allowing the patient to start losing weight again.',
  },
  {
    question: 'How do you evaluate if I need revision surgery?',
    answer: 'We utilize a multi-disciplinary approach to evaluate patients who have failed to achieve desired outcomes. Our team of dedicated bariatric physician, endocrinologist, nutritionists, and psychologists minutely examine each aspect to identify the cause of failure. We always recommend non-surgical routes whenever possible, including diet, exercise, lifestyle modifications, and healthy eating habits.',
  },
  {
    question: 'What are the risks of revision bariatric surgery?',
    answer: 'Revision surgery is generally more complex than primary bariatric surgery due to scar tissue and altered anatomy. Risks may include bleeding, infection, leaks at surgical connections, and longer recovery time. However, when performed by an experienced surgeon like Dr. Kapil Agrawal, these risks are minimized. We thoroughly educate patients on benefits and risks so they can make informed decisions.',
  },
  {
    question: 'How long is recovery after revision surgery?',
    answer: 'Recovery from revision bariatric surgery typically takes 2-4 weeks with gradual return to normal activities. Most patients are discharged within 24-48 hours after surgery. Regular follow-up appointments with our multi-disciplinary team help ensure optimal results and long-term success.',
  },
  {
    question: 'Will revision surgery be as effective as the original?',
    answer: 'Revision surgery can be very effective when the cause of failure is properly identified and addressed. Success depends on factors such as the type of revision procedure chosen, patient commitment to lifestyle changes, and proper follow-up care. Our team works closely with patients to ensure the best possible outcomes.',
  },
  {
    question: 'What support is available after revision surgery?',
    answer: 'Our multi-disciplinary team provides comprehensive support including regular follow-up appointments, nutrition counseling, lifestyle modification guidance, psychological support, and physical activity recommendations. We understand the emotional challenges after a failed procedure and are committed to supporting you throughout your weight loss journey.',
  },
  {
    question: 'What is Dr. Kapil Agrawal\'s experience with revision surgery?',
    answer: 'Dr. Kapil Agrawal is an internationally trained expert with over 23 years of experience performing bariatric surgeries, including complex revision procedures. He has successfully performed more than 7000 advanced bariatric surgeries. His expertise in evaluating failed procedures and performing appropriate revisions has helped many patients achieve successful weight loss outcomes.',
  },
]

export default function RevisionSurgeryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about revision bariatric surgery</p>
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

