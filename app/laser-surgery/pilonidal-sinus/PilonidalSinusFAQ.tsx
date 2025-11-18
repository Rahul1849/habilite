'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How long is the procedure?',
    answer: 'The time taken for surgery depends upon the complexity of the pilonidal sinus. The approximate duration of surgery is between 45 minutes to two hours.',
  },
  {
    question: 'What is the duration of stay in the hospital?',
    answer: 'We usually discharge the patients on the same day or the next day of surgery.',
  },
  {
    question: 'Can pilonidal sinus be cured by medicine or conservative methods?',
    answer: 'The pilonidal sinus can be cured by medicines and certain lifestyle modifications in the very initial stages. However, as the disease progresses, it becomes challenging to treat the condition with drugs.',
  },
  {
    question: 'What are the chances of recurrence?',
    answer: 'Simple Pilonidal disease can be cured with almost zero recurrences, but in complex cases associated with multiple and extensive branching, there are chances of recurrence. The best ways to minimize recurrence are: Early intervention, Experience and expertise of the surgeon, and Choosing the right option for treatment.',
  },
  {
    question: 'When can I join my duties?',
    answer: 'The majority of our patients can join back their work in five to seven days post-surgery. It all depends on the pilonidal sinus disease complexity and the type of procedure chosen to deal with it.',
  },
  {
    question: 'Do I need to come for a follow-up?',
    answer: 'The majority of the patients don&apos;t require any follow-ups. But some of the patients might require irrigation of wounds 2-3 times. We have specialized dressers who can visit your house. They will clean and rinse the wound or tell you how you can rinse the track at home.',
  },
  {
    question: 'What can I expect from your team?',
    answer: 'Extreme confidentiality, strict adherence to international guidelines, highly experienced and internationally trained team, complete range of all the best treatment modalities, world best quality, highly advanced, USFDA approved 1470 nm Laser Machines, honest opinion and detailed discussion about the best modality for you, customized treatment plans, and personalized care and direct doctor-patient relationship without the involvement of third-party or companies.',
  },
  {
    question: 'What is the best treatment for pilonidal sinus?',
    answer: 'The best treatment for pilonidal sinus depends upon several factors: Whether the fistula is a simple type or complex type, whether it is a recurrence or a fresh fistula, and whether there are significant branching or ramifications. Our team has all the best and latest available options for the treatment of all types of fistula.',
  },
  {
    question: 'What is SiLaC procedure for pilonidal sinus?',
    answer: 'SiLaC (Pilonidal Sinus Laser Assisted Closure) is done for simple, single-track pilonidal disease. After cleaning and thorough irrigation of the tract, laser emitting laser fiber is inserted into the track, and a defined amount of energy is delivered. This energy causes thermal ablation and collapse of the tract.',
  },
  {
    question: 'What is LA-EPSIT procedure?',
    answer: 'Laser Assisted EPSIT Procedure uses a highly sophisticated, skinny endoscopic camera introduced into the sinus to remove all debris and small tuft of hairs under direct vision. The tract is then ablated with the help of laser emitting radial fiber through a photocoagulation mechanism.',
  },
  {
    question: 'What are flap-based repairs for pilonidal sinus?',
    answer: 'In highly complex or recurrent pilonidal disease, flap-based repairs are advised. Cleft Lift Repair is usually indicated for patients having deep natal cleft anatomy. Limberg Flap Repair is indicated for patients having extensive disease involving both buttocks.',
  },
  {
    question: 'What are the advantages of laser treatment for pilonidal sinus?',
    answer: 'Laser treatment for pilonidal sinus offers minimal invasiveness, speedy recovery, same-day discharge, minimal post-operative follow-ups or dressings, and almost negligible recurrence rates. The wound healing is swift because of its minimally invasive nature.',
  },
  {
    question: 'What causes pilonidal sinus?',
    answer: 'Common causes include positive family history of the disease, obesity, poor hygiene, deep natal cleft anatomy, hirsutism or excessive hair in the natal cleft, occupation requiring prolonged sitting like drivers (also known as Jeep disease), and excessive sweating.',
  },
  {
    question: 'What is the cost of pilonidal sinus surgery in Delhi?',
    answer: 'The cost of pilonidal sinus surgery in Delhi ranges from ₹50,000 to ₹1,50,000, depending on the complexity of the disease, the procedure chosen (laser, SiLaC, LA-EPSIT, or flap-based repair), and the hospital facilities. Insurance coverage and EMI options are available at Habilite Clinics.',
  },
  {
    question: 'Is pilonidal sinus surgery painful?',
    answer: 'With modern laser techniques, pilonidal sinus surgery is much less painful than traditional methods. Most patients experience minimal discomfort and can manage pain with prescribed medications. Recovery is generally faster with laser procedures.',
  },
]

export default function PilonidalSinusFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about pilonidal sinus treatment and laser surgery</p>
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

