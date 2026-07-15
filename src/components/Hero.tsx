import { SectionContainer } from './SectionContainer'
import { Button } from './Button'
import { ProductPanel } from './ProductPanel'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 md:pt-40 md:pb-16 lg:pb-24">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.07] blur-[120px]" />
      </div>

      <SectionContainer className="relative flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-text-muted)]">
          <Sparkles className="h-3.5 w-3.5 text-[var(--color-accent)]" />
          Now with AI agents
        </div>

        {/* Headline */}
        <h1 className="hero-headline max-w-4xl">
          The issue tracker{' '}
          <span className="text-[var(--color-text-muted)]">built for</span>
          <br />
          modern product teams
        </h1>

        {/* Subheadline */}
        <p className="muted-body mx-auto mt-6 max-w-xl">
          Plan, build, and ship software with a tool that moves at the speed of
          your team. AI-powered issue tracking, project management, and
          roadmaps — all in one place.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button className="gap-2">
            Get started
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="secondary">Book a demo</Button>
        </div>

        {/* Product Panel */}
        <div className="mt-16 w-full max-w-5xl">
          <ProductPanel />
        </div>
      </SectionContainer>
    </section>
  )
}
