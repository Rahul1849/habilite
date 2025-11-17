'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Can gall bladder and hernia surgery be performed together?',
    answer: 'Yes, it is common to perform gallbladder surgery and hernia repair at the same time. This is especially beneficial in cases where both conditions are present, and the patient can undergo both procedures simultaneously. However, the decision depends on the complexity of both surgeries and the experience of the surgeon. Your surgeon is the best person to decide if it is safe to perform both surgeries together.',
  },
  {
    question: 'Can I live a normal life after gallbladder removal surgery?',
    answer: 'Yes, you can live a completely normal life without a gallbladder and resume normal activities within a week. Most people adapt well to life without a gallbladder, and any dietary adjustments are usually temporary.',
  },
  {
    question: 'Are there any medicines that can help in dissolving gallstones?',
    answer: 'There are few medicines that may dissolve cholesterol stones, but they are slow and often ineffective. Surgery remains the ultimate and most effective solution for gallstone removal.',
  },
  {
    question: 'Should I go for gallbladder surgery for asymptomatic gallstones?',
    answer: 'Surgery is generally not recommended for silent (asymptomatic) stones. However, there are risks for further complications, and thus surgery may be advised in certain cases, especially for larger stones or in patients with specific risk factors.',
  },
  {
    question: 'Can gallbladder stones be cancerous?',
    answer: 'Gallstones themselves are not cancerous. However, long-lasting or large gallstones can have risks for gallbladder cancer over time, which is why regular monitoring and timely treatment are important.',
  },
  {
    question: 'What are gallbladder polyps, and should I remove them?',
    answer: 'Gallbladder polyps form on the inner wall of the gallbladder. Polyps larger than 10 mm may require gallbladder removal due to cancer risk. Smaller polyps are usually monitored regularly.',
  },
  {
    question: 'How can I prevent the formation of gallstones?',
    answer: 'Maintain a healthy weight, eat a balanced diet with high-fiber and low-fat foods, stay physically active, and stay hydrated. Avoid rapid weight loss or weight gain.',
  },
  {
    question: 'Can gallbladder and hernia surgery be performed together?',
    answer: 'Yes, laparoscopic gallbladder and hernia surgery can be safely performed together without needing two separate procedures and need a single recovery period.',
  },
  {
    question: 'How do we confirm a stone in the CBD (common bile duct)?',
    answer: 'Stones in the CBD are diagnosed using imaging tests like MRCP (Magnetic Resonance Cholangiopancreatography), ultrasound, or ERCP (Endoscopic Retrograde Cholangiopancreatography).',
  },
  {
    question: 'What if a stone slips into the common bile duct (CBD)?',
    answer: 'Stones in the CBD can cause jaundice, pain, or infection. They are typically removed using ERCP (endoscopic procedure) before or along with gallbladder surgery.',
  },
  {
    question: 'Does a 7mm gallstone need surgery?',
    answer: 'A 7 mm stone may require surgery if it causes symptoms or complications. The decision depends on symptoms, location, and individual patient factors.',
  },
  {
    question: 'What size gallstones are bad?',
    answer: 'Stones larger than 2 cm or multiple small stones that can slip into the bile duct are considered higher risk and may require surgery even if they don\'t have any symptoms.',
  },
  {
    question: 'Can I remove my gallstones without removing gallbladder?',
    answer: 'Non-surgical methods are not very effective and are associated with high recurrence rates. Surgery to remove the gallbladder (cholecystectomy) is the definitive and most effective treatment.',
  },
  {
    question: 'What to avoid after gallbladder removal?',
    answer: 'Avoid eating high-fat, greasy, or fried foods for a few weeks. Gradually introduce fiber and fats as per instructions from your nutritionist. Stay hydrated and eat smaller, more frequent meals.',
  },
  {
    question: 'What are permanent issues after gallbladder removal?',
    answer: 'Most people don\'t have long-term problems. Few symptoms like occasional diarrhea or digestive discomfort are manageable with diet and lifestyle changes.',
  },
  {
    question: 'How to remove gallbladder stone without operation?',
    answer: 'Non-surgical treatments like medicines are rarely effective and not recommended due to high recurrence. Surgery remains the safest and most effective option.',
  },
  {
    question: 'How many days should I rest after gallbladder surgery?',
    answer: 'Most patients are advised to take rest for 3–5 days. You can resume light work in a week and normal activities in about 10–14 days after laparoscopic gallbladder surgery.',
  },
  {
    question: 'How much does gallbladder surgery cost in Delhi?',
    answer: 'Laparoscopic gallbladder surgery in Delhi ranges between Rs.60,000 to Rs.1,20,000 based on hospital, surgical experience, and amenities. Costs may vary based on the type of procedure and hospital chosen.',
  },
  {
    question: 'How do I choose a gallbladder surgeon?',
    answer: 'You should look for a surgeon having extensive experience in advanced laparoscopic surgery, good patient reviews, hospital associations, and personalized care. Check credentials, years of experience, and number of successful surgeries.',
  },
  {
    question: 'Which gallbladder surgery is best?',
    answer: 'Laparoscopic cholecystectomy is the gold standard. It is minimally invasive, safe, and offers quicker recovery with minimal scarring compared to open surgery.',
  },
]

export default function GallbladderFAQ() {
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
          Common questions about gallbladder surgery answered by Dr. Kapil Agrawal
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

