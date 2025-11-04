import { Award, Clock, Users, Shield, Stethoscope, Heart } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Expert Surgeons',
    description: 'Board-certified surgeons with 15+ years of experience',
  },
  {
    icon: Clock,
    title: 'Fast Recovery',
    description: 'Minimally invasive techniques for quicker healing',
  },
  {
    icon: Users,
    title: '5000+ Happy Patients',
    description: 'Trusted by thousands of patients across India',
  },
  {
    icon: Shield,
    title: 'Advanced Technology',
    description: 'State-of-the-art robotic and laparoscopic equipment',
  },
  {
    icon: Stethoscope,
    title: 'Comprehensive Care',
    description: 'End-to-end treatment from consultation to recovery',
  },
  {
    icon: Heart,
    title: 'Patient-Centered',
    description: 'Personalized care tailored to your needs',
  },
]

export default function WhyChoose() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">Habilite Clinics?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expertise, technology, and compassionate care to deliver exceptional surgical outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-primary-600" size={32} />
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
