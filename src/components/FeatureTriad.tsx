import { SectionContainer } from './SectionContainer'
import { EyebrowLabel } from './EyebrowLabel'
import { FEATURE_ITEMS } from '@/lib/constants'

export function FeatureTriad() {
  return (
    <section className="py-20 md:py-28">
      <SectionContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-headline">
            A new species of product tool.
          </h2>
          <p className="muted-body mx-auto mt-5 max-w-2xl">
            Purpose-built for modern teams with AI workflows at its core, Linear sets a new standard for planning and building products.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_ITEMS.map((item) => (
            <div key={item.figure} className="text-left">
              <span className="mb-3 inline-block text-xs font-medium tracking-wider text-[var(--color-accent)]">
                FIG {item.figure}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-[var(--color-text-primary)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
