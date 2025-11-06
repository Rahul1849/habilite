import { GraduationCap, Award, Briefcase, Users, Globe, CheckCircle2 } from 'lucide-react'

const education = [
  {
    title: 'MBBS',
    institution: 'Institute of Medical Sciences, BHU, Varanasi',
    year: '2002',
    icon: GraduationCap,
  },
  {
    title: 'MS (Surgery)',
    institution: 'Institute of Medical Sciences, BHU, Varanasi',
    year: '2005',
    icon: GraduationCap,
  },
  {
    title: 'MRCS (London, U.K)',
    institution: 'Royal College of Surgeons, London',
    year: '2007',
    icon: Award,
  },
  {
    title: 'MMED (Singapore)',
    institution: 'National University of Singapore',
    year: '2009',
    icon: Award,
  },
  {
    title: 'FMAS',
    institution: 'Fellowship in Minimal Access Surgery',
    year: '2010',
    icon: Award,
  },
]

const affiliations = [
  {
    title: 'Senior Consultant',
    organization: 'Apollo Group of Hospitals, Delhi NCR',
    description: 'Sarita Vihar, Greater Kailash, and Noida',
    icon: Briefcase,
  },
  {
    title: 'Member',
    organization: 'Association of Surgeons of India',
    description: 'Active member since 2005',
    icon: Users,
  },
  {
    title: 'Member',
    organization: 'Association of Minimal Access Surgeons of India',
    description: 'Expert in laparoscopic and robotic surgery',
    icon: Award,
  },
  {
    title: 'International Training',
    organization: 'Trained in London, U.K. and Singapore',
    description: 'Global expertise in advanced surgical techniques',
    icon: Globe,
  },
]

const careerHighlights = [
  {
    title: '23+ Years of Clinical Experience',
    description: 'Senior Consultant in General and Laparoscopic Surgery',
  },
  {
    title: '7000+ Successful Surgeries',
    description: 'Performed complex cases with excellent outcomes',
  },
  {
    title: 'International Recognition',
    description: 'MRCS from London, U.K. and MMED from Singapore',
  },
  {
    title: 'Apollo Hospitals',
    description: 'Senior Consultant at multiple Apollo Hospital locations',
  },
]

export default function EducationAffiliations() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 break-words">
            Dr. Kapil Agrawal's <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Education and Affiliations</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto break-words">
            Dr. Kapil Agrawal is an Eminent Senior Consultant and Laparoscopic Surgeon with extensive qualifications and international training
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => {
                const Icon = edu.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#f56336] hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-full p-2 flex-shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{edu.title}</h4>
                        <p className="text-gray-700 text-sm mb-1">{edu.institution}</p>
                        <p className="text-gray-500 text-xs">{edu.year}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Affiliations Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-lg p-3 mr-4">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Affiliations & Memberships</h3>
            </div>
            
            <div className="space-y-4">
              {affiliations.map((aff, index) => {
                const Icon = aff.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#f56336] hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-full p-2 flex-shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{aff.title}</h4>
                        <p className="text-gray-700 text-sm mb-1">{aff.organization}</p>
                        <p className="text-gray-500 text-xs">{aff.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

          {/* Career Highlights */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 overflow-hidden">
          <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 break-words">
              Dr. Kapil Agrawal's Career Highlights
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {careerHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-br from-[#f56336] to-[#ff8c5a] rounded-full p-2 flex-shrink-0">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{highlight.title}</h4>
                    <p className="text-gray-600 text-sm">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* Enhanced Surgical Excellence */}
        <div className="bg-white border-2 border-[#f56336]/20 rounded-xl p-6 sm:p-8 overflow-hidden">
          <div className="text-center mb-6 px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 break-words">
              Enhanced Surgical Excellence
            </h3>
            <p className="text-sm sm:text-base text-gray-600 break-words">
              By introducing international best practices and advanced surgical techniques
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent mb-2">
                7000+
              </div>
              <div className="text-sm font-semibold text-gray-700">Successful Surgeries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent mb-2">
                23+
              </div>
              <div className="text-sm font-semibold text-gray-700">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-sm font-semibold text-gray-700">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-sm font-semibold text-gray-700">Continents Trained</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

