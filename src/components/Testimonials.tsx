import { SectionContainer } from './SectionContainer'
import { EyebrowLabel } from './EyebrowLabel'
import { TESTIMONIALS } from '@/lib/constants'
import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <SectionContainer>
        <div className="mx-auto max-w-2xl text-center">
          <EyebrowLabel accent>Testimonials</EyebrowLabel>
          <h2 className="section-headline mt-4">Loved by product teams</h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 sm:gap-5 sm:mt-14 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="card-panel flex flex-col p-6 transition-colors hover:border-[var(--color-accent)]/30"
            >
              <Quote className="mb-3 h-5 w-5 text-[var(--color-accent)] opacity-40" />
              <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface-raised)] text-[0.625rem] font-semibold text-[var(--color-text-muted)]">
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-text-primary)]">
                    {t.name}
                  </div>
                  <div className="text-[0.625rem] text-[var(--color-text-muted)]">
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
