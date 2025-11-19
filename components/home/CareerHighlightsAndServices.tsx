import dynamic from 'next/dynamic'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

const AppointmentForm = dynamic(() => import('./AppointmentForm'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 animate-pulse space-y-4">
      <div className="h-6 bg-gray-200 rounded w-1/2" />
      <div className="space-y-3">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="h-12 bg-gray-200 rounded" />
        ))}
      </div>
      <div className="h-10 bg-gray-200 rounded" />
    </div>
  ),
})

const careerHighlights = [
  {
    text: 'Senior Consultant in General and Laparoscopic Surgery at Apollo Group of Hospitals, Delhi NCR. 23 years of clinical experience in General and Laparoscopic Surgery',
  },
  {
    text: 'Conducted more than 7,000+ successful surgeries, and has served as Senior Consultant at Apollo Group of Hospitals - Sarita Vihar, Greater Kailash, and Noida',
  },
  {
    text: 'Worked in international arenas with training from London, U.K. (MRCS) and Singapore (MMED) - globally recognized qualifications',
  },
  {
    text: 'Dr. Kapil Agrawal has done MBBS, MS (Surgery) from Institute of Medical Sciences, BHU, Varanasi, MRCS (London, U.K), MMED (Singapore), and FMAS',
  },
  {
    text: 'Dr. Kapil Agrawal is among India\'s most accomplished General and Laparoscopic surgeons. He has a proven track record of successfully managing complex cases, including gallbladder stone removal, hernia repair, and advanced laparoscopic procedures',
  },
]

const treatments = [
  { label: 'Laparoscopic Gallbladder Surgery', href: '/best-gallbladder-stone-surgeon-delhi' },
  { label: 'Laparoscopic Hernia Surgery', href: '/best-hernia-surgeon-in-delhi' },
  { label: 'Laparoscopic Appendix Surgery', href: '/best-appendix-surgeon-in-delhi' },
  { label: 'Laparoscopic Rectal Prolapse Surgery', href: '/best-rectal-prolapse-surgeon-in-delhi' },
  { label: 'Robotic Surgery', href: '/laparoscopic-surgery' },
  { label: 'Bariatric Surgery', href: '/bariatric-surgeon-in-delhi-india' },
  { label: 'Non-Surgical Weight Loss Program', href: '/medical-weight-loss-program' },
  { label: 'Surgery for Diabetes', href: '/surgery-for-diabetes' },
  { label: 'IntraGastric Balloon', href: '/endoscopic-intra-gastric-balloon' },
  { label: 'Allurion Balloon', href: '/bariatrics/allurion-balloon' },
  { label: 'Spatz Balloon', href: '/bariatrics/spatz-balloon' },
  { label: 'Laser Hemorrhoids / Piles Surgery', href: '/best-laser-piles-surgeon-in-delhi' },
  { label: 'Laser Anal Fistula Surgery', href: '/best-laser-fistula-treatment' },
  { label: 'Laser Pilonidal Sinus Surgery', href: '/best-laser-pilonidal-sinus-treatment' },
  { label: 'Laser Anal Fissure Surgery', href: '/laser-surgery/anal-fissure' },
  { label: 'Laser Lipoma Surgery', href: '/lipoma-treatment' },
  { label: 'Laser Circumcision', href: '/laser-zsr-circumcision' },
]

export default function CareerHighlightsAndServices() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-orange-50/20 to-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 break-words">
            Dr. Kapil Agrawal&apos;s <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Career Highlights & Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Column 1: Career Highlights */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                <CheckCircle2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Career Highlights</h3>
            </div>
            <ul className="space-y-4">
              {careerHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-full p-1.5 mr-3 mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                    {highlight.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: General and Laparoscopic Surgeries & Treatments */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl shadow-lg p-6 sm:p-8 border border-[#f56336]/20">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] rounded-lg p-3 mr-4">
                <CheckCircle2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">General and Laparoscopic Surgeries & Treatments</h3>
            </div>
            <ul className="space-y-3">
              {treatments.map((treatment, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-full p-1.5 mr-3 mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <Link
                    href={treatment.href}
                    className="text-sm sm:text-base text-[#f56336] hover:text-[#ff8c5a] font-semibold transition-colors break-words focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff8c5a]"
                  >
                    {treatment.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Book Your Appointment Form */}
          <AppointmentForm />
        </div>
      </div>
    </section>
  )
}

