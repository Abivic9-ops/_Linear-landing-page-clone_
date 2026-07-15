import { SectionContainer } from './SectionContainer'
import { FOOTER_SECTIONS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-14">
      <SectionContainer>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-[var(--color-text-primary)]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.35 18.56c.54.54 1.38.54 1.92 0L12 11.84l6.73 6.72c.54.54 1.38.54 1.92 0a1.35 1.35 0 0 0 0-1.92L13.92 9.64a1.35 1.35 0 0 0-1.92 0L3.35 16.64a1.35 1.35 0 0 0 0 1.92zM12 5.64a1.35 1.35 0 0 0 0-1.92 1.35 1.35 0 0 0-1.92 0L3.35 10.44a1.35 1.35 0 0 0 0 1.92 1.35 1.35 0 0 0 1.92 0L12 7.56l6.73 6.72a1.35 1.35 0 0 0 1.92 0 1.35 1.35 0 0 0 0-1.92L13.92 3.72a1.35 1.35 0 0 0-1.92 0z" />
              </svg>
              <span className="text-sm font-semibold tracking-tight">Linear</span>
            </a>
            <p className="mt-4 text-xs leading-relaxed text-[var(--color-text-muted)]">
              The issue tracker built for modern product teams.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.heading}>
              <h4 className="footer-heading">{section.heading}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-[0.75rem] text-[var(--color-text-muted)] sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Linear, Inc.</span>
          <div className="flex gap-5">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Status</a>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}
