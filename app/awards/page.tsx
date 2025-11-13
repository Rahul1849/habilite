import Image from 'next/image'
import { Award } from 'lucide-react'
import AwardCard from './AwardCard'

const awards = [
  {
    title: 'One of the Top-3 Laparoscopic Surgeons in Delhi',
    organization: '',
    year: '2018',
    description: 'Recognized as one of the top 3 laparoscopic surgeons in Delhi',
    logo: '/images/top3-best-laparoscopic-award.webp',
  },
  {
    title: 'Best in Laparoscopic Surgery in India',
    organization: 'HT Healthcare Awards',
    year: '2016',
    description: 'Awarded for excellence in laparoscopic surgery across India',
    logo: '/images/hthelthcare-best-laaproscopic-award.webp',
  },
  {
    title: 'Laparoscopic Surgeon of the Year',
    organization: 'Page3 Awards',
    year: '2015',
    description: 'Recognized as the laparoscopic surgeon of the year',
    logo: '/images/page3-best-laparoscopic-award.webp',
  },
  {
    title: 'Excellence in Laparoscopic Surgery',
    organization: 'IndiaToday Excellence Healthcare Awards',
    year: '2017',
    description: 'Awarded for excellence in laparoscopic surgical procedures',
    logo: '/images/Indiatoday-best-laparosocpic-surgeon.webp',
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
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <AwardCard award={award} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

