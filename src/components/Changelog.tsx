import { SectionContainer } from './SectionContainer'
import { EyebrowLabel } from './EyebrowLabel'
import { CHANGELOG_ENTRIES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export function Changelog() {
  return (
    <section className="py-20 md:py-28">
      <SectionContainer>
        <div className="mx-auto max-w-2xl text-center">
          <EyebrowLabel accent>Changelog</EyebrowLabel>
          <h2 className="section-headline mt-4">What we&apos;ve been building</h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          {CHANGELOG_ENTRIES.map((entry, i) => (
            <div
              key={entry.title}
              className={`flex gap-6 ${
                i < CHANGELOG_ENTRIES.length - 1 ? 'pb-8' : ''
              }`}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-background)]" />
                {i < CHANGELOG_ENTRIES.length - 1 && (
                  <div className="mt-1 flex-1 w-px bg-[var(--color-border)]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-2">
                <span className="text-xs font-medium text-[var(--color-text-muted)]">
                  {entry.date}
                </span>
                <h3 className="mt-1 text-base font-semibold text-[var(--color-text-primary)]">
                  {entry.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            View all updates
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </SectionContainer>
    </section>
  )
}
