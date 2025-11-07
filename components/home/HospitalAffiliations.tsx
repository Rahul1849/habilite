import { Building2, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const hospitals = [
  {
    name: 'Apollo Spectra Hospital',
    location: 'Karol Bagh',
    address: 'Plot No. 3, Block No. 34, Metro Pillar No. 77, Pusa Road, West Extension Area (WEA), Karol Bagh, New Delhi - 110005',
    type: 'Apollo Group of Hospitals',
    pinCode: '110005',
  },
  {
    name: 'Apollo Spectra Hospital',
    location: 'Greater Kailash',
    address: 'Plot no. A, 2, Outer Ring Rd, near Nehru Place Flyover, Greater Kailash-1, Chirag Enclave, Greater Kailash, Delhi, 110048',
    type: 'Apollo Group of Hospitals',
    pinCode: '110048',
  },
  {
    name: 'Apollo Hospital, Noida',
    location: 'Sector 26, Noida',
    address: 'E 2, Apollo Hospitals Rd, Block E, Sector 26, Noida, Uttar Pradesh 201301',
    type: 'Apollo Group of Hospitals',
    pinCode: '201301',
  },
  {
    name: 'Aarogya Hospital',
    location: 'Chitra Vihar',
    address: '27-28, Vikas Marg, Chitra Vihar, Swasthya Vihar, New Delhi, Delhi, 110092',
    type: 'Multi-Specialty Hospital',
    pinCode: '110092',
  },
  {
    name: 'Dharamshila Narayana Superspeciality Hospital',
    location: 'Vasundhara Enclave',
    address: 'Metro Station, Dharamshila Rd, near Ashok Nagar, Vasundhara Enclave, New Delhi, Delhi, 110096',
    type: 'Super Specialty Hospital',
    pinCode: '110096',
  },
]

export default function HospitalAffiliations() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-orange-50/20 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Hospital <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Affiliations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dr. Kapil Agrawal is associated with leading hospitals in Delhi NCR, providing world-class surgical care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitals.map((hospital, index) => (
            <div
              key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#f56336]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] w-16 h-16 rounded-xl flex items-center justify-center shadow-md">
                  <Building2 className="text-white" size={32} />
                </div>
                <span className="text-xs font-semibold text-[#f56336] bg-[#f56336]/10 px-3 py-1 rounded-full">
                  {hospital.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {hospital.name}
              </h3>
              
              <div className="mb-4">
                <div className="flex items-start mb-2">
                  <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-[#f56336]" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-700 mb-1">{hospital.location}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{hospital.address}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 ml-6 mt-1">Pin Code: {hospital.pinCode}</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[#f56336] hover:text-[#ff8c5a] transition-colors"
                >
                  <MapPin size={14} className="mr-1" />
                  View on Map
                  <ExternalLink size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
              About Dr. Kapil Agrawal's Hospital Affiliations
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-center">
              Dr. Kapil Agrawal is associated with leading hospitals across Delhi NCR, providing world-class surgical care 
              with state-of-the-art facilities and advanced technology. With over <strong>23 years of experience</strong> and 
              <strong> 7000+ successful surgeries</strong>, Dr. Kapil Agrawal ensures the highest quality of care for all patients 
              at these premier healthcare institutions.
            </p>
            <p className="text-gray-700 leading-relaxed text-center">
              As a Senior Consultant at Apollo Group of Hospitals and associated with other renowned healthcare facilities, 
              Dr. Kapil Agrawal offers comprehensive surgical care including laparoscopic, robotic, bariatric, and laser surgeries 
              with excellent outcomes and patient satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

