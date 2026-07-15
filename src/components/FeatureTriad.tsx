import { SectionContainer } from './SectionContainer'
import { EyebrowLabel } from './EyebrowLabel'
import { Zap, Workflow, BarChart3 } from 'lucide-react'

const FEATURES = [
  {
    icon: Zap,
    title: 'Built for speed',
    description:
      'A keyboard-first interface designed for developers. Navigate, create, and update issues without lifting your hands from the keyboard.',
  },
  {
    icon: Workflow,
    title: 'AI-powered workflow',
    description:
      'Automate triage, spec writing, and pull requests with AI agents that learn your team\'s patterns and conventions.',
  },
  {
    icon: BarChart3,
    title: 'Real-time visibility',
    description:
      'Live dashboards, project health scores, and automated status updates so leadership always knows where things stand.',
  },
]

export function FeatureTriad() {
  return (
    <section className="py-20 md:py-28">
      <SectionContainer>
        <div className="mx-auto max-w-2xl text-center">
          <EyebrowLabel accent>Why Linear</EyebrowLabel>
          <h2 className="section-headline mt-4">
            Everything your team needs,
            <br className="hidden sm:block" />
            nothing it doesn&apos;t
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:mt-14">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="card-panel group p-5 transition-colors hover:border-[var(--color-accent)]/30 sm:p-7"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface-raised)] text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
