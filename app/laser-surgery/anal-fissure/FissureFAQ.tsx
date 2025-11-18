'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is an anal fissure?',
    answer: 'An anal fissure is a small tear or cut in the thin, moist tissue (mucosa) that lines the anus. It typically causes pain and bleeding during bowel movements. Anal fissures are common and can affect people of all ages.',
  },
  {
    question: 'What causes anal fissure?',
    answer: 'Common causes include passing hard or large stools during bowel movements, chronic constipation or diarrhea, straining during bowel movements, childbirth, inflammatory bowel disease (IBD), decreased blood flow to the anorectal area, and anal intercourse.',
  },
  {
    question: 'What are the symptoms of anal fissure?',
    answer: 'Symptoms include sharp, severe pain during and after bowel movements that can last for several hours, bright red blood on the stool or toilet paper after a bowel movement, a visible crack or tear in the skin around the anus, a small lump or skin tag near the anal fissure, and burning or itching sensation in the anal area.',
  },
  {
    question: 'Can anal fissure be treated without surgery?',
    answer: 'Yes, many anal fissures can be treated with non-surgical methods including high-fiber diet, increased fluid intake, stool softeners, topical medications (nitroglycerin, calcium channel blockers), warm sitz baths, and lifestyle modifications. However, chronic fissures may require surgical intervention.',
  },
  {
    question: 'What is Botox treatment for anal fissure?',
    answer: 'Botox (botulinum toxin) injections can help relax the anal sphincter muscle, reducing spasms and allowing the fissure to heal. This is a non-surgical treatment option that can be effective for chronic anal fissures that haven&apos;t responded to conservative treatments.',
  },
  {
    question: 'What is laser surgery for anal fissure?',
    answer: 'Laser surgery for anal fissure uses focused laser energy to precisely treat the fissure and relax the anal sphincter. This minimally invasive procedure causes minimal tissue damage, reduces pain, and promotes faster healing compared to traditional surgery.',
  },
  {
    question: 'Is anal fissure surgery painful?',
    answer: 'With modern laser techniques, anal fissure surgery is much less painful than traditional methods. Most patients experience minimal discomfort and can manage pain with prescribed medications. Recovery is generally faster with laser procedures.',
  },
  {
    question: 'What is the recovery time after anal fissure surgery?',
    answer: 'Recovery time varies depending on the procedure. With laser treatment, most patients can resume normal activities within a few days. Complete healing typically takes 2-4 weeks. Traditional surgery may require a longer recovery period.',
  },
  {
    question: 'Can anal fissure recur after treatment?',
    answer: 'Recurrence is possible but less common with proper treatment and preventive measures. Following a high-fiber diet, staying hydrated, avoiding constipation, and maintaining good anal hygiene can help prevent recurrence.',
  },
  {
    question: 'What are the risks of anal fissure surgery?',
    answer: 'Potential risks include temporary or permanent incontinence (rare with modern techniques), infection, bleeding, scarring, and recurrence. However, with experienced surgeons using advanced techniques like laser, these risks are significantly minimized.',
  },
  {
    question: 'How long does anal fissure surgery take?',
    answer: 'The duration depends on the procedure. Laser anal fissure surgery typically takes 15-30 minutes. The procedure is usually performed under local or general anesthesia.',
  },
  {
    question: 'What should I expect after anal fissure surgery?',
    answer: 'After surgery, you may experience some discomfort and mild bleeding for a few days. You&apos;ll need to keep the area clean, take prescribed medications, follow dietary recommendations, and avoid straining during bowel movements. Most patients can return to work within a few days.',
  },
  {
    question: 'What is the cost of anal fissure surgery in Delhi?',
    answer: 'The cost of anal fissure surgery in Delhi ranges from ₹25,000 to ₹80,000, depending on the procedure chosen (non-surgical, Botox, laser, or traditional surgery) and the hospital facilities. Insurance coverage and EMI options are available at Habilite Clinics.',
  },
  {
    question: 'Can I prevent anal fissure?',
    answer: 'Yes, you can reduce the risk by maintaining a high-fiber diet, drinking plenty of fluids, avoiding straining during bowel movements, treating constipation promptly, and maintaining good anal hygiene. Regular exercise can also help prevent constipation.',
  },
  {
    question: 'What is the difference between acute and chronic anal fissure?',
    answer: 'An acute anal fissure is a recent tear that typically heals within 4-6 weeks with conservative treatment. A chronic anal fissure persists for more than 6-8 weeks and may require surgical intervention. Chronic fissures often have exposed muscle fibers and may develop a sentinel pile (skin tag).',
  },
]

export default function FissureFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about anal fissure treatment and laser surgery</p>
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

