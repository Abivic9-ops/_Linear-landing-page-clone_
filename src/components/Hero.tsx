import { SectionContainer } from './SectionContainer'
import { Button } from './Button'
import { ProductPanel } from './ProductPanel'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 md:pt-40 md:pb-16 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.07] blur-[120px]" />
      </div>

      <SectionContainer className="relative flex flex-col items-center text-center">
        <h1 className="hero-headline max-w-4xl">
          The product development{' '}
          <br className="hidden sm:block" />
          system for teams{' '}
          <span className="text-[var(--color-text-muted)]">and</span>{' '}
          agents
        </h1>

        <p className="muted-body mx-auto mt-6 max-w-xl">
          Purpose-built for planning and building products. Designed for the AI era.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button className="gap-2">
            Get started
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="secondary">Book a demo</Button>
        </div>

        <div className="mt-16 w-full max-w-5xl">
          <ProductPanel />
        </div>
      </SectionContainer>
    </section>
  )
}
