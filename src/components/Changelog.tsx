import { SectionContainer } from './SectionContainer'
import { CHANGELOG_ENTRIES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export function Changelog() {
  return (
    <section className="py-20 md:py-28">
      <SectionContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-headline">Changelog</h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
          {CHANGELOG_ENTRIES.map((entry) => (
            <a
              key={entry.title}
              href={entry.href}
              className="group flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/30"
            >
              <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                {entry.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {entry.description}
              </p>
              <span className="mt-4 text-xs font-medium text-[var(--color-text-muted)]">
                {entry.date}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </SectionContainer>
    </section>
  )
}
