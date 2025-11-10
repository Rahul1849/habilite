import { Award, Users, Shield, Heart, Briefcase, GraduationCap } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: '23 Years of Expertise',
    description: 'Renowned laparoscopic and robotic surgeon with extensive experience in complex cases',
  },
  {
    icon: Briefcase,
    title: 'Senior Consultant at Apollo',
    description: 'Associated with Apollo Group of Hospitals - India\'s leading healthcare network',
  },
  {
    icon: Users,
    title: '7000+ Successful Surgeries',
    description: 'Trusted by thousands of patients across Delhi NCR and India',
  },
  {
    icon: GraduationCap,
    title: 'International Training',
    description: 'MRCS from London, U.K., and MMED from Singapore - globally recognized qualifications',
  },
  {
    icon: Shield,
    title: 'Advanced Techniques',
    description: 'Expert in robotic, single-port, and traditional laparoscopic procedures',
  },
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Compassionate approach with personalized treatment plans for each patient',
  },
]

export default function WhyChoose() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 break-words">
            Why Choose <span className="bg-gradient-to-r from-[#f56336] to-[#ff8c5a] bg-clip-text text-transparent">Dr. Kapil Agrawal?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto break-words">
            Dr. Kapil Agrawal combines 23 years of expertise, advanced technology, and compassionate care to deliver exceptional surgical outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-black via-[#0891b2] to-[#06b6d4] w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
