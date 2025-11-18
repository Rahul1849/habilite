'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is an anal fistula?',
    answer: 'An anal fistula is an abnormal tunnel-like connection between the anal canal and the skin around the anus. It usually develops after an anal abscess that has not healed properly. The fistula allows pus and other fluids to drain from the infected area.',
  },
  {
    question: 'What causes anal fistula?',
    answer: 'Anal fistulas most commonly develop from an anal abscess that has not healed completely. Other causes include Crohn&apos;s disease, trauma, radiation therapy, tuberculosis, or sexually transmitted infections. In some cases, they can occur without a clear cause.',
  },
  {
    question: 'What are the symptoms of anal fistula?',
    answer: 'Common symptoms include persistent drainage of pus or blood from an opening near the anus, pain and swelling around the anus, irritation of the skin around the anus, pain during bowel movements, fever and chills (if there is an active infection), and a visible opening or bump near the anus.',
  },
  {
    question: 'How is anal fistula diagnosed?',
    answer: 'Diagnosis typically involves a physical examination, where the doctor looks for an external opening and may gently probe the area. Additional tests may include an MRI or CT scan to visualize the fistula tract, an ultrasound to assess the extent of the fistula, or an examination under anesthesia to better evaluate the fistula.',
  },
  {
    question: 'What is laser anal fistula treatment?',
    answer: 'Laser anal fistula treatment uses focused laser energy to seal and close the fistula tract. This minimally invasive procedure causes minimal damage to surrounding tissues, reduces pain, and promotes faster healing compared to traditional surgery.',
  },
  {
    question: 'What is VAAFT technology for anal fistula?',
    answer: 'VAAFT (Video-Assisted Anal Fistula Treatment) is an advanced endoscopic procedure that allows the surgeon to visualize the entire fistula tract using a small camera. The fistula is then cleaned and treated from the inside, preserving sphincter function and reducing the risk of incontinence.',
  },
  {
    question: 'Is anal fistula surgery painful?',
    answer: 'With modern techniques like laser and VAAFT, anal fistula surgery is much less painful than traditional methods. Most patients experience minimal discomfort and can manage pain with prescribed medications. Recovery is generally faster with these advanced techniques.',
  },
  {
    question: 'What is the recovery time after anal fistula surgery?',
    answer: 'Recovery time varies depending on the procedure. With laser and VAAFT treatments, most patients can resume normal activities within 1-2 weeks. Complete healing typically takes 4-6 weeks. Traditional surgery may require a longer recovery period.',
  },
  {
    question: 'Can anal fistula recur after treatment?',
    answer: 'Recurrence rates depend on the type of treatment and the complexity of the fistula. Laser and VAAFT procedures have lower recurrence rates (typically 5-10%) compared to traditional surgery. Following post-operative care instructions and maintaining good hygiene can help prevent recurrence.',
  },
  {
    question: 'What are the risks of anal fistula surgery?',
    answer: 'Potential risks include recurrence of the fistula, temporary or permanent incontinence (rare with modern techniques), infection, bleeding, and scarring. However, with experienced surgeons using advanced techniques like laser and VAAFT, these risks are significantly minimized.',
  },
  {
    question: 'Can anal fistula be treated without surgery?',
    answer: 'In very rare cases, simple fistulas may heal with antibiotics and proper wound care, but most anal fistulas require surgical treatment. Non-surgical treatments are generally not effective for complete healing and may lead to complications.',
  },
  {
    question: 'What is the cost of anal fistula surgery in Delhi?',
    answer: 'The cost of anal fistula surgery in Delhi ranges from ₹40,000 to ₹1,20,000, depending on the complexity of the fistula, the procedure chosen (laser, VAAFT, or traditional), and the hospital facilities. Insurance coverage and EMI options are available at Habilite Clinics.',
  },
  {
    question: 'How long does anal fistula surgery take?',
    answer: 'The duration depends on the complexity of the fistula. Simple fistulas treated with laser may take 30-45 minutes, while complex fistulas requiring VAAFT may take 1-2 hours. The procedure is typically performed under general or spinal anesthesia.',
  },
  {
    question: 'What should I expect after anal fistula surgery?',
    answer: 'After surgery, you may experience some discomfort and drainage for a few days. You&apos;ll need to keep the area clean, take prescribed medications, and follow dietary recommendations. Most patients can return to work within 1-2 weeks, depending on their job requirements.',
  },
  {
    question: 'Can I prevent anal fistula?',
    answer: 'While not all fistulas can be prevented, maintaining good anal hygiene, treating anal abscesses promptly, managing underlying conditions like Crohn&apos;s disease, and avoiding constipation can help reduce the risk of developing anal fistulas.',
  },
]

export default function FistulaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about anal fistula treatment and laser surgery</p>
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

