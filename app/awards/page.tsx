import { Metadata } from 'next'
import { Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Awards & Recognition',
  description: 'Awards and recognition received by Habilite Clinics and Dr. Kapil Agrawal.',
}

const awards = [
  {
    title: 'Best Laparoscopic Surgeon 2023',
    organization: 'Delhi Medical Association',
    year: '2023',
    description: 'Recognized for excellence in laparoscopic surgical procedures',
  },
  {
    title: 'Excellence in Robotic Surgery',
    organization: 'Indian Association of Surgeons',
    year: '2022',
    description: 'Awarded for outstanding contribution to robotic surgery in India',
  },
  {
    title: 'Patient Care Excellence',
    organization: 'Healthcare Excellence Awards',
    year: '2021',
    description: 'Recognized for exceptional patient care and satisfaction',
  },
  {
    title: 'Innovation in Minimally Invasive Surgery',
    organization: 'Surgical Innovation Forum',
    year: '2020',
    description: 'Awarded for innovative techniques in minimally invasive procedures',
  },
]

export default function AwardsPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-primary py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Awards & Recognition</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Honoring excellence in surgical care and patient outcomes
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] text-white p-3 rounded-full mr-4">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-[#f56336] font-semibold mb-1">{award.organization}</p>
                  <p className="text-gray-600 text-sm mb-2">{award.year}</p>
                  <p className="text-gray-700">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

