import type { NavItem, FooterSection, ChangelogEntry, Testimonial } from '@/types'

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
      { label: 'Issues', href: '#' },
      { label: 'Cycles', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Views', href: '#' },
      { label: 'Roadmaps', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Customers', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Brand', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Method', href: '#' },
      { label: 'Quality', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'DPA', href: '#' },
      { label: 'AUP', href: '#' },
      { label: 'Sub-processors', href: '#' },
    ],
  },
]

export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  {
    date: 'Jul 2026',
    title: 'AI agents in GA',
    description:
      "Linear's AI agents are now available to all teams on Pro and Enterprise plans. Automate issue triage, spec drafting, and pull request creation.",
  },
  {
    date: 'Jun 2026',
    title: 'Linear Asks redesign',
    description:
      'Redesigned intake workflow with smarter triage and routing. Capture requests from Slack, email, and customer conversations automatically.',
  },
  {
    date: 'May 2026',
    title: 'Timeline view',
    description:
      'A new Gantt-style timeline view for Projects and Roadmaps. Drag and drop to reschedule milestones and see team capacity at a glance.',
  },
  {
    date: 'Apr 2026',
    title: 'Diffs in issues',
    description:
      'See the exact code changes your agents made, directly inside any issue. Review, comment, and approve without leaving Linear.',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Linear has fundamentally changed how our engineering team operates. The issue tracker finally feels like it was built by engineers, for engineers. Velocity is up 30% since we switched.",
    name: 'Priya Anand',
    title: 'VP of Engineering',
    company: 'Meridian Finance',
    initials: 'PA',
  },
  {
    quote:
      "We evaluated every tool on the market. Linear was the only one that didn't feel like a project management tool pretending to be a developer tool. It's the real deal.",
    name: 'James Okafor',
    title: 'CTO',
    company: 'Healthbridge',
    initials: 'JO',
  },
  {
    quote:
      "The AI agents are genuinely useful — not in a gimmicky way. They handle the boring parts of shipping so our team can focus on what actually matters.",
    name: 'Sofia Larsen',
    title: 'Head of Product',
    company: 'Stackr',
    initials: 'SL',
  },
  {
    quote:
      "Our entire agency runs on Linear. From client intake to QA handoff, every step lives in one place. The speed of the interface alone makes it worth it.",
    name: 'Marcus Webb',
    title: 'Co-founder',
    company: 'Neon Studio',
    initials: 'MW',
  },
  {
    quote:
      "I used to dread Monday standups because nobody knew the status of anything. With Linear, every stakeholder has the context they need without asking a single question.",
    name: 'Anika Sharma',
    title: 'Engineering Manager',
    company: 'CartPulse',
    initials: 'AS',
  },
  {
    quote:
      "The keyboard shortcuts, the speed, the design — it's everything Jira isn't. Our engineers complained about every tool we've ever used. Nobody complains about Linear.",
    name: 'Daniel Park',
    title: 'Director of Engineering',
    company: 'DevFlow',
    initials: 'DP',
  },
]

export const NARRATIVE_SECTIONS = [
  {
    step: '1.0',
    eyebrow: 'Intake →',
    headline: 'Turn conversations into issues — automatically',
    description:
      'Capture feedback from Slack, Linear Asks, and customer conversations. Let AI triage, label, and route issues to the right team before a human even sees them.',
    reverse: false,
  },
  {
    step: '2.0',
    eyebrow: 'Plan →',
    headline: 'Align the team around a single source of truth',
    description:
      'Create project roadmaps, write specs with AI, and break down initiatives into cycles. Everyone knows what\'s being built and why.',
    reverse: true,
  },
  {
    step: '3.0',
    eyebrow: 'Build →',
    headline: 'AI agents that work alongside your team',
    description:
      "Linear's AI agents draft specs, write code, open pull requests, and update issues — so your engineers can focus on the hard problems.",
    reverse: false,
  },
  {
    step: '4.0',
    eyebrow: 'Diffs →',
    headline: 'Review what your agents built — with full context',
    description:
      'See the exact changes your AI agents made. Review diffs inline, leave comments, and approve or request changes — all without leaving Linear.',
    reverse: true,
  },
  {
    step: '5.0',
    eyebrow: 'Monitor →',
    headline: 'Understand progress without asking for updates',
    description:
      'Automatic updates, real-time analytics, and AI-generated project summaries. Leadership always knows where things stand.',
    reverse: false,
  },
]
