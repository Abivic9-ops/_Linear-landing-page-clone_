import { SectionContainer } from './SectionContainer'
import { Button } from './Button'

export function CTABand() {
  return (
    <section className="py-20 md:py-28">
      <SectionContainer>
        <div className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-12 text-center sm:px-8 sm:py-16 md:rounded-2xl md:px-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.06] blur-[100px]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl mx-auto">
              Built for the future.{' '}
              <span className="text-[var(--color-accent)]">Available today.</span>
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button className="gap-2">Get started</Button>
              <Button variant="secondary">Contact sales</Button>
              <Button variant="secondary">Open app</Button>
              <Button variant="secondary">Download</Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
