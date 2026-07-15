import { SectionContainer } from './SectionContainer'
import { EyebrowLabel } from './EyebrowLabel'
import type { NarrativeSectionProps } from '@/types'

export function NarrativeSection({
  step,
  eyebrow,
  headline,
  description,
  mockUI,
  reverse = false,
}: NarrativeSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <SectionContainer>
        <div
          className={`flex flex-col items-center gap-12 lg:flex-row ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <EyebrowLabel>{eyebrow}</EyebrowLabel>
            <h2 className="section-headline mt-4">{headline}</h2>
            <p className="muted-body mx-auto mt-4 max-w-md lg:mx-0">
              {description}
            </p>
          </div>

          {/* Mock UI */}
          <div className="w-full flex-1">{mockUI}</div>
        </div>
      </SectionContainer>
    </section>
  )
}
