import { SectionContainer } from './SectionContainer'
import { TESTIMONIALS } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <SectionContainer>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/30"
            >
              <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {t.name}
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">
                  {t.title}{t.title && t.company ? ', ' : ''}{t.company}
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            Linear powers over <span className="font-semibold text-[var(--color-text-primary)]">33,000</span> product teams.
          </p>
          <a
            href="#"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Customer stories
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </SectionContainer>
    </section>
  )
}
