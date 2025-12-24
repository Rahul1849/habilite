import { Phone } from 'lucide-react'
import ConsultationForm from '@/components/forms/ConsultationForm'

type BlogPostFooterProps = {
  category?: string
}

export default function BlogPostFooter({ category }: BlogPostFooterProps) {
  return (
    <div className="mt-16 space-y-12">
      {/* Why Choose Us Section */}
      <section>
        <div className="bg-gradient-to-r from-[#0891b2]/10 to-[#06b6d4]/10 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Why Choose Us</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#0891b2] mr-3 mt-1 font-bold">•</span>
              <span>Best Outcomes with discharge within 24 hours.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0891b2] mr-3 mt-1 font-bold">•</span>
              <span>High-quality standards with an almost zero percent rate of infection.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0891b2] mr-3 mt-1 font-bold">•</span>
              <span>Best Post Operative Care with round-the-clock availability of team.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0891b2] mr-3 mt-1 font-bold">•</span>
              <span>A team of dedicated nutritionists to make your recovery faster.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0891b2] mr-3 mt-1 font-bold">•</span>
              <span>No hidden charges and fixed and transparent packages.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0891b2] mr-3 mt-1 font-bold">•</span>
              <span>Complete network of cashless insurance available.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0891b2] mr-3 mt-1 font-bold">•</span>
              <span>All paperwork is handled by an expert team to give you a hassle-free experience.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0891b2] mr-3 mt-1 font-bold">•</span>
              <span>Tie up with various agencies to provide you with EMI options at zero rate of interest.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0891b2] mr-3 mt-1 font-bold">•</span>
              <span>Dr Kapil Agrawal, senior consultant laparoscopic surgeon, affiliated with some of the best and finest hospitals in New Delhi.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Book an Appointment Section */}
      <section>
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Book an Appointment</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="tel:+919910024564"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0891b2] text-white rounded-lg font-semibold hover:bg-[#06b6d4] transition-colors"
              >
                <Phone size={18} />
                +91-99100-24564
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="tel:+919999456455"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0891b2] text-white rounded-lg font-semibold hover:bg-[#06b6d4] transition-colors"
              >
                <Phone size={18} />
                +91-99994-56455
              </a>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <ConsultationForm
              serviceName={category || 'General Consultation'}
              serviceSlug={category?.toLowerCase().replace(/\s+/g, '-') || 'consultation'}
            />
          </div>
        </div>
      </section>

      {/* Doctor Info Card */}
      <section>
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Dr. Kapil Agrawal</h3>
              <p className="text-gray-700 mb-4">
                Consult with Dr. Kapil Agrawal - Senior Consultant - Laparoscopic & Robotic Surgeon at Apollo Hospitals, Delhi NCR. 23+ years experience and 7000+ advanced procedures with enhanced recovery care.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                {[
                  'Gallbladder Surgery',
                  'CBD Stones Removal',
                  'Gallbladder Polyps',
                  'Hernia Surgery',
                  'Appendix Surgery',
                  'GERD & Hiatus Hernia',
                  'Rectal Prolapse Surgery',
                ].map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 rounded-full bg-[#0891b2]/10 text-[#0891b2] text-xs font-semibold"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start text-sm text-gray-600">
                <a href="tel:+919910024564" className="inline-flex items-center gap-1 hover:text-[#0891b2] transition-colors">
                  <Phone size={14} />
                  +91-99100-24564
                </a>
                <span className="text-gray-300">|</span>
                <a href="tel:+919999456455" className="inline-flex items-center gap-1 hover:text-[#0891b2] transition-colors">
                  <Phone size={14} />
                  +91-99994-56455
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

