export interface NavItem {
  label: string
  href: string
}

export interface FooterSection {
  heading: string
  links: NavItem[]
}

export interface ChangelogEntry {
  date: string
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  initials: string
}

export interface NarrativeSectionProps {
  step: string
  eyebrow: string
  headline: string
  description: string
  mockUI: React.ReactNode
  reverse?: boolean
}

export type ButtonVariant = 'primary' | 'secondary'
export type StatusType = 'done' | 'progress' | 'todo' | 'urgent'
