'use client'

interface TimelineStep {
  id: number
  title: string
  description: string
}

const recoverySteps: TimelineStep[] = [
  {
    id: 1,
    title: '24 Hours',
    description: '24 Hours Hospital Stay if done through medical insurance. For non-insurance patients, discharged within 2 Hours',
  },
  {
    id: 2,
    title: '24–36 Hours',
    description: 'Return to work and normal activities with full recovery.',
  },
  {
    id: 3,
    title: '48 Hours',
    description:
      'Resume regular diet as per customised plan.',
  },
  
]

interface RecoveryTimelineProps {
  title?: string
}

function StepCard({ step }: { step: TimelineStep }) {
  return (
    <div className="inline-block rounded-2xl border border-white/50 bg-white/70 p-5 shadow-lg shadow-cyan-100 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">{step.title}</p>
      <p className="mt-2 text-sm text-slate-600">{step.description}</p>
    </div>
  )
}

export function RecoveryTimeline({ title = 'Recovery & Aftercare Timeline' }: RecoveryTimelineProps) {
  return (
    <section className="mt-16 rounded-3xl bg-gradient-to-br from-cyan-50 via-sky-50 to-rose-50 px-4 py-12 shadow-lg shadow-cyan-900/5">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
          Aftercare Milestones
        </p>
        <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
        <p className="mt-3 text-base text-slate-600 sm:text-lg">
          A clear, physician-approved recovery roadmap guiding every bariatric patient through the
          first week after surgery.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-4xl">
        <span className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-200" />

        <div className="space-y-12">
          {recoverySteps.map((step, index) => {
            const isLeftAligned = index % 2 === 0

            return (
              <div
                key={step.id}
                className="relative md:flex md:items-center md:justify-between md:gap-6"
              >
                {/* Desktop left column */}
                <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-10">
                  {isLeftAligned ? (
                    <div className="relative">
                      <StepCard step={step} />
                      <span className="pointer-events-none absolute right-[-3.25rem] top-1/2 hidden h-0.5 w-14 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-200 to-cyan-400 md:block" />
                    </div>
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>

                {/* Timeline marker */}
                <div className="order-1 flex flex-col items-center md:order-none">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-cyan-200">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700 shadow-inner shadow-white">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Desktop right column */}
                <div className="hidden md:flex md:w-1/2 md:pl-10">
                  {!isLeftAligned ? (
                    <div className="relative">
                      <span className="pointer-events-none absolute left-[-3.25rem] top-1/2 hidden h-0.5 w-14 -translate-y-1/2 rounded-full bg-gradient-to-l from-cyan-200 to-cyan-400 md:block" />
                      <StepCard step={step} />
                    </div>
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>

                {/* Mobile content */}
                <div className="mt-6 md:hidden">
                  <StepCard step={step} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RecoveryTimeline

