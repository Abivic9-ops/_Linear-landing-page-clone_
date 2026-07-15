import { SectionContainer } from './SectionContainer'
import { EyebrowLabel } from './EyebrowLabel'
import type { NarrativeSectionProps } from '@/types'

export function NarrativeSection({
  step,
  eyebrow,
  headline,
  description,
  subFeatures = [],
  mockUI,
  reverse = false,
}: NarrativeSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <SectionContainer>
        <div
          className={`flex flex-col items-center gap-10 sm:gap-12 lg:flex-row ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className="w-full flex-1 text-center lg:text-left">
            <EyebrowLabel>{eyebrow}</EyebrowLabel>
            <h2 className="section-headline mt-3 sm:mt-4">{headline}</h2>
            <p className="muted-body mx-auto mt-3 max-w-md sm:mt-4 lg:mx-0">
              {description}
            </p>

            {subFeatures.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                {subFeatures.map((feature, i) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)]"
                  >
                    <span className="text-[var(--color-accent)]">
                      {step.replace('.0', '')}.{i + 1}
                    </span>
                    {feature}
                    <span className="text-[var(--color-text-muted)] opacity-50">+</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="w-full flex-1 overflow-hidden">{mockUI}</div>
        </div>
      </SectionContainer>
    </section>
  )
}
