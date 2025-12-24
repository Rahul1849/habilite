import { Lightbulb } from 'lucide-react'

type KeyTakeawaysProps = {
  excerpt?: string
  points?: string[]
}

export default function KeyTakeaways({ excerpt, points }: KeyTakeawaysProps) {
  // If no excerpt and no points, don't render
  if (!excerpt && (!points || points.length === 0)) {
    return null
  }

  return (
    <section className="mb-8">
      <div className="bg-gradient-to-br from-[#0891b2]/10 via-[#06b6d4]/5 to-[#0891b2]/10 rounded-xl p-6 md:p-8 border border-[#0891b2]/20">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#0891b2] flex items-center justify-center">
              <Lightbulb className="text-white" size={24} />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              Key Takeaways
            </h3>
            {excerpt && (
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                {excerpt}
              </p>
            )}
            {points && points.length > 0 && (
              <ul className="space-y-2">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-[#0891b2] font-bold mt-1">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

