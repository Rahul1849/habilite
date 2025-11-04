import Image from 'next/image'
import { Star } from 'lucide-react'
import { Testimonial } from '@/data/testimonials'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Patient Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-50 rounded-xl p-6"
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 fill-yellow-400"
                  size={16}
                />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
            <div className="flex items-center">
              {testimonial.image && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.patientName}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <div className="font-semibold text-gray-900">{testimonial.patientName}</div>
                <div className="text-sm text-gray-600">{testimonial.treatment}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
