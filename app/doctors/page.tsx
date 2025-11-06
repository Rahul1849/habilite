import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Award, GraduationCap, Briefcase, Clock, Phone, Mail, MapPin, CheckCircle2, Globe, Users, Stethoscope } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi | 23 Years Experience',
  description: 'Dr. Kapil Agrawal - Senior Consultant Laparoscopic and Robotic Surgeon at Apollo Hospitals, Delhi. 23 years experience, 7000+ successful surgeries. MBBS, MS, MRCS (London), MMED (Singapore), FMAS.',
}

const qualifications = [
  {
    degree: 'MBBS',
    institution: 'Institute of Medical Sciences, BHU, Varanasi',
    year: '2002',
  },
  {
    degree: 'MS (Surgery)',
    institution: 'Institute of Medical Sciences, BHU, Varanasi',
    year: '2005',
  },
  {
    degree: 'MRCS (London, U.K)',
    institution: 'Royal College of Surgeons, London',
    year: '2007',
  },
  {
    degree: 'MMED (Singapore)',
    institution: 'National University of Singapore',
    year: '2009',
  },
  {
    degree: 'FMAS',
    institution: 'Fellowship in Minimal Access Surgery',
    year: '2010',
  },
]

const specializations = [
  'Laparoscopic Surgery',
  'Robotic Surgery',
  'Gallbladder Surgery',
  'Hernia Surgery',
  'Gastrointestinal Surgery',
  'Bariatric Surgery',
  'Laser Surgery',
  'Rectal Prolapse Surgery',
]

const achievements = [
  'Performed 7000+ successful laparoscopic and robotic surgeries',
  'Senior Consultant at Apollo Group of Hospitals, Delhi NCR',
  'International training from London, U.K. and Singapore',
  'Expert in single-port laparoscopic surgery',
  'Leading surgeon for complex bariatric procedures',
  'Recognized for excellence in minimally invasive techniques',
]

const hospitalAffiliations = [
  'Apollo Spectra Hospital, Karol Bagh',
  'Apollo Spectra Hospital, Greater Kailash',
  'Apollo Hospital, Noida',
  'Aarogya Hospital, Chitra Vihar',
  'Dharamshila Narayana Superspeciality Hospital, Vasundhara Enclave',
]

export default function DoctorsPage() {
  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-primary py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Doctor Image */}
              <div className="lg:col-span-1">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/dr-kapil-agrawal.png"
                    alt="Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                    quality={90}
                  />
                </div>
              </div>

              {/* Doctor Info */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <Award className="text-[#f56336] mr-2" size={18} />
                  <span className="text-sm font-semibold text-gray-700">23 Years Experience</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
                  Dr. <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Kapil Agrawal</span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                  Senior Consultant - Laparoscopic & Robotic Surgeon
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  MBBS, MS (Surgery), MRCS (London, U.K), MMED (Singapore), FMAS
                </p>
                <p className="text-base text-gray-600 mb-6">
                  Apollo Group of Hospitals, Delhi NCR
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">
                      7000+
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Surgeries</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">
                      98%
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Success Rate</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/appointment"
                    className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    <Phone className="mr-2" size={18} />
                    Book Appointment
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-[#f56336] text-[#f56336] hover:bg-[#f56336] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    Contact Doctor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          {/* About Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Dr. Kapil Agrawal</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Kapil Agrawal is a leading and one of the best Robotic and Laparoscopic Surgeon in Delhi, India. 
                He has an overall experience of <strong className="text-gray-900">23 years</strong> and has been working 
                as a Senior Consultant Surgeon at Apollo Group of Hospitals, New Delhi, India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                He is performing advanced laparoscopic and robotic surgeries for various conditions, which include 
                Gallbladder stones, Hernia, Appendicitis, Rectal prolapse, and pseudo-pancreatic cyst. He is also 
                offering a complete range of bariatric or weight loss surgeries, which are performed both by 
                laparoscopic and robotic approaches.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dr. Kapil Agrawal completed his graduation and post-graduation from the Institute of Medical Sciences, 
                BHU, Varanasi. He has also been trained at some of the best hospitals in London, U.K., and he received 
                his MRCS degree from London, U.K., in 2007. In the span of 23 years, he has been associated with some 
                of the best hospitals in New Delhi, India, and has performed some of the most complex cases with 
                excellent outcomes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Qualifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education & Qualifications</h3>
              </div>
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-[#f56336] pl-4 py-2"
                  >
                    <h4 className="font-bold text-gray-900 mb-1">{qual.degree}</h4>
                    <p className="text-gray-700 text-sm mb-1">{qual.institution}</p>
                    <p className="text-gray-500 text-xs">{qual.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
                  <Stethoscope className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Specializations</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {specializations.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-orange-50 rounded-lg p-3"
                  >
                    <CheckCircle2 className="text-[#f56336] flex-shrink-0" size={18} />
                    <span className="text-sm font-medium text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements & Hospital Affiliations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Key Achievements</h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hospital Affiliations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
                  <Briefcase className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Hospital Affiliations</h3>
              </div>
              <ul className="space-y-3">
                {hospitalAffiliations.map((hospital, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <MapPin className="text-[#f56336] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{hospital}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/hospital-affiliations"
                className="mt-6 inline-flex items-center text-[#f56336] font-semibold hover:text-[#ff8c5a] transition-colors"
              >
                View All Hospital Affiliations
                <Briefcase className="ml-2" size={18} />
              </Link>
            </div>
          </div>

          {/* Contact & Consultation Info */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center md:text-left">
                <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto md:mx-0 mb-4 shadow-md">
                  <Clock className="text-[#f56336]" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Consultation Hours</h4>
                <p className="text-gray-700 text-sm">Mon-Sat: 10 AM - 6 PM</p>
                <p className="text-gray-700 text-sm">Sunday: Closed</p>
              </div>
              <div className="text-center md:text-left">
                <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto md:mx-0 mb-4 shadow-md">
                  <Phone className="text-[#f56336]" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Contact</h4>
                <a href="tel:+919910024564" className="text-gray-700 text-sm hover:text-[#f56336] block">
                  +91 99100 24564
                </a>
                <a href="tel:+919999456455" className="text-gray-700 text-sm hover:text-[#f56336] block">
                  +91 99994 56455
                </a>
              </div>
              <div className="text-center md:text-left">
                <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto md:mx-0 mb-4 shadow-md">
                  <Award className="text-[#f56336]" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Consultation Fee</h4>
                <p className="text-gray-700 text-sm">₹1,500</p>
                <p className="text-gray-600 text-xs mt-1">30% discount on online payment</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/appointment"
                className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 inline-flex items-center shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2" size={20} />
                Book Your Consultation Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
