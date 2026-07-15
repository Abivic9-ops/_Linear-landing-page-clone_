import type {
  NavItem,
  FooterSection,
  ChangelogEntry,
  Testimonial,
  FeatureItem,
} from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Product', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Customers', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Now', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Docs', href: '#' },
]

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Intake', href: '#' },
      { label: 'Plan', href: '#' },
      { label: 'Build', href: '#' },
      { label: 'Diffs', href: '#' },
      { label: 'Monitor', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
  {
    heading: 'Features',
    links: [
      { label: 'Asks', href: '#' },
      { label: 'Agents', href: '#' },
      { label: 'Coding Sessions', href: '#' },
      { label: 'Customer Requests', href: '#' },
      { label: 'Insights', href: '#' },
      { label: 'Mobile', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Customers', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Method', href: '#' },
      { label: 'Quality', href: '#' },
      { label: 'Brand', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Switch', href: '#' },
      { label: 'Download', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Developers', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Enterprise', href: '#' },
      { label: 'Startups', href: '#' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Contact us', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'X (Twitter)', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'DPA', href: '#' },
      { label: 'AUP', href: '#' },
    ],
  },
]

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    figure: '0.2',
    title: 'Built for purpose',
    description:
      'Linear is shaped by the practices and principles of world-class product teams.',
  },
  {
    figure: '0.3',
    title: 'Powered by AI agents',
    description:
      'Designed for workflows shared by humans and agents. From drafting PRDs to pushing PRs.',
  },
  {
    figure: '0.4',
    title: 'Designed for speed',
    description:
      'Reduces noise and restores momentum to help teams ship with high velocity and focus.',
  },
]

export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  {
    date: 'Jun 30, 2026',
    title: 'Initiative properties',
    description:
      'Initiatives define your company\'s high-level goals and organize the projects that contribute to them. To help you manage initiatives as your roadmap grows, we\'ve added a new set of focused initiative properties.',
    href: '#',
  },
  {
    date: 'Jun 17, 2026',
    title: 'Agent assisted project updates',
    description:
      'Project and initiative updates keep teams aligned, but writing them means pulling out recent changes from issues, documents, and discussions.',
    href: '#',
  },
  {
    date: 'Jun 10, 2026',
    title: 'Coding sessions in Linear',
    description:
      'Earlier this year, we launched Linear Agent, giving teams a new way to plan and coordinate their issues and projects. Since then, we\'ve added Code Intelligence to extend that understanding to the codebase, and MCP support to bring all of your context together.',
    href: '#',
  },
  {
    date: 'Jun 3, 2026',
    title: 'Team documents',
    description:
      'Important team context doesn\'t always belong in a specific issue, project, or initiative. Teams also need a dedicated place for the notes, docs, and shared references that support their work over time.',
    href: '#',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "You'll probably build a better product, just because of the craft that using Linear infuses on your brain.",
    name: 'Gabriel Peal',
    title: 'Staff Software Engineer',
    company: 'OpenAI',
  },
  {
    quote:
      'Our speed is intense and Linear helps us be action biased.',
    name: 'Nik Koblov',
    title: 'Head of Engineering',
    company: 'Ramp',
  },
  {
    quote:
      'Linear is excellent, just excellent. It has the right opinions for fast moving teams.',
    name: 'Kaz Nejatian',
    title: '',
    company: 'Opendoor',
  },
]

export const NARRATIVE_SECTIONS = [
  {
    step: '1.0',
    eyebrow: 'Intake\u2192',
    headline: 'Make product operations self-driving',
    description:
      'Turn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the right team.',
    subFeatures: ['Linear Agent', 'Triage', 'Customer Requests', 'Linear Asks'],
    reverse: false,
  },
  {
    step: '2.0',
    eyebrow: 'Plan\u2192',
    headline: 'Define the product direction',
    description:
      'Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs.',
    subFeatures: ['Projects', 'Documents', 'Initiatives', 'Visual planning'],
    reverse: true,
  },
  {
    step: '3.0',
    eyebrow: 'Build\u2192',
    headline: 'Move work forward across teams and agents',
    description:
      'Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire issues end-to-end.',
    subFeatures: ['Issues', 'Agents', 'Linear MCP', 'Git automations', 'Cycles'],
    reverse: false,
  },
  {
    step: '4.0',
    eyebrow: 'Diffs\u2192',
    headline: 'Review PRs and agent output',
    description:
      'Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge all within Linear.',
    subFeatures: [],
    reverse: true,
  },
  {
    step: '5.0',
    eyebrow: 'Monitor\u2192',
    headline: 'Understand progress at scale',
    description:
      'Take the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your attention.',
    subFeatures: ['Pulse', 'Insights', 'Dashboards'],
    reverse: false,
  },
]
