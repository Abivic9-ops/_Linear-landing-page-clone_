import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { FeatureTriad } from '@/components/FeatureTriad'
import { NarrativeSection } from '@/components/NarrativeSection'
import { KanbanMock } from '@/components/mocks/KanbanMock'
import { TimelineMock } from '@/components/mocks/TimelineMock'
import { AgentLogMock } from '@/components/mocks/AgentLogMock'
import { DiffMock } from '@/components/mocks/DiffMock'
import { ChartMock } from '@/components/mocks/ChartMock'
import { Changelog } from '@/components/Changelog'
import { Testimonials } from '@/components/Testimonials'
import { CTABand } from '@/components/CTABand'
import { Footer } from '@/components/Footer'
import { NARRATIVE_SECTIONS } from '@/lib/constants'

const MOCKUIS = [KanbanMock, TimelineMock, AgentLogMock, DiffMock, ChartMock]

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureTriad />
        {NARRATIVE_SECTIONS.map((section, i) => {
          const MockComponent = MOCKUIS[i]
          return (
            <NarrativeSection
              key={section.step}
              {...section}
              mockUI={<MockComponent />}
            />
          )
        })}
        <Changelog />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
