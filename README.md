Linear Landing Page Clone

A pixel-accurate reproduction of the Linear.app landing page, built with Next.js 16, TypeScript 5, and Tailwind CSS 4. This project demonstrates advanced Tailwind customization, reusable component patterns, and responsive design across all standard viewport widths.

The reference design was captured directly from https://linear.app and matched section by section, including the hero, feature highlights, five narrative product sections, changelog, testimonials, call-to-action band, and footer.

Technology Stack

The project uses the following technologies:

1. Next.js 16 with App Router for server-rendered React components and static site generation.
2. TypeScript 5 with strict mode enabled for full type safety across all source files.
3. Tailwind CSS 4 with CSS-first configuration using the @theme directive in globals.css.
4. Lucide React for all icon assets, including navigation toggles, status indicators, and UI chrome.
5. clsx and tailwind-merge via a centralized cn() utility for conditional class composition.

Getting Started

Prerequisites: Node.js 18 or later and npm (or yarn or pnpm) installed on your system.

Installation and local development:

1. Clone the repository to your local machine.
2. Navigate into the project directory.
3. Run npm install to install all dependencies.
4. Run npm run dev to start the development server.
5. Open http://localhost:3000 in your browser to view the page.

Available scripts:

- npm run dev starts the development server with Turbopack.
- npm run build creates an optimized production build.
- npm run start serves the production build locally.
- npm run lint runs ESLint across all source files.

Project Structure

The source code is organized as follows:

src/
  app/
    layout.tsx        Root layout with Inter font, metadata, and global styles
    page.tsx          Home page composing all landing page sections
    globals.css       Tailwind theme tokens, base resets, and @apply component classes
    favicon.ico       Site favicon
  components/
    Navbar.tsx        Fixed navigation bar with scroll blur and mobile menu
    Hero.tsx          Hero section with headline, subheadline, CTAs, and product panel
    FeatureTriad.tsx  Three-column feature highlight section with figure labels
    NarrativeSection.tsx  Reusable template for the five product narrative sections
    Changelog.tsx     Changelog grid with real Linear update entries
    Testimonials.tsx  Testimonial cards with real quotes and team count stat
    CTABand.tsx       Final call-to-action band with four action buttons
    Footer.tsx        Six-column responsive footer matching the real Linear site
    Button.tsx        Button component with primary and secondary variants
    SectionContainer.tsx  Max-width container with responsive padding
    EyebrowLabel.tsx  Section label component with accent variant
    ProductPanel.tsx  Hero product mockup with sidebar and issue list
    StatusPill.tsx    Status indicator pill with color-coded variants
    IssueRow.tsx      Issue list row component for the product mockup
    mocks/
      KanbanMock.tsx      Kanban board mockup for the Intake section
      TimelineMock.tsx    Gantt timeline mockup for the Plan section
      AgentLogMock.tsx    AI agent activity log mockup for the Build section
      DiffMock.tsx        Code diff view mockup for the Diffs section
      ChartMock.tsx       Project health chart mockup for the Monitor section
  lib/
    utils.ts          cn() utility combining clsx and tailwind-merge
    constants.ts      All content data: navigation, footer, features, changelog, testimonials, narratives
  types/
    index.ts          TypeScript interfaces for all shared data structures

Design System

The design system is defined entirely in globals.css using Tailwind CSS 4's @theme directive. All color tokens, typography scales, spacing variables, and custom easing functions are declared as CSS custom properties at the theme level and referenced throughout the component library.

Color tokens:

- Background: #08090A (near-black base)
- Surface: #0D0E10 (card and panel background)
- Surface raised: #141516 (elevated elements and hover states)
- Border: #23252A (subtle dividers and card edges)
- Text primary: #F7F8F8 (headings and body text)
- Text muted: #8A8F98 (secondary text, labels, placeholders)
- Accent: #5E6AD2 (primary brand color for CTAs and highlights)
- Accent hover: #6E79D6 (accent color on hover)
- Status colors: Done #4CB782, In Progress #F2C94C, Todo #8A8F98, Urgent #EB5757

Typography:

- Font family: Inter (variable weight, loaded via next/font/google)
- Hero headline: 700 weight, 3rem to 7rem responsive, tightest letter spacing
- Section headline: 600 weight, 1.875rem to 3rem responsive, tight letter spacing
- Body text: 400 weight, 1rem to 1.125rem responsive, relaxed line height
- Eyebrow labels: 500 weight, 0.875rem, uppercase with widest letter spacing

Reusable component classes are defined using @apply in the @layer components block. These include section-container, eyebrow-label, section-headline, hero-headline, muted-body, btn-primary, btn-secondary, nav-link, card-panel, footer-link, and footer-heading.

Responsive Breakpoints

The page is tested and polished at four viewport widths:

1. 375px (mobile): Single column layouts, stacked CTAs, hidden sidebar, horizontal scroll on mock UIs.
2. 768px (tablet): Two column grids appear, navigation shows full desktop links, typography scales up.
3. 1280px (desktop): Three column feature grids, side-by-side narrative layouts, full footer grid.
4. 1440px (large desktop): Maximum container width reached, generous whitespace, all elements at full scale.

Hover, focus-visible, and active states are implemented on all interactive elements including buttons, navigation links, footer links, changelog cards, and testimonial cards. Keyboard navigation is fully supported with visible focus outlines using the accent color.

Section Breakdown

The landing page is composed of the following sections in order:

1. Navbar: Fixed position with scroll-triggered backdrop blur and bottom border. Responsive mobile menu with hamburger toggle. Contains logo, navigation links, and authentication CTAs.

2. Hero: Large headline reading "The product development system for teams and agents" with the muted text treatment on "and". Subheadline below. Two CTA buttons. Full-width product panel mockup with sidebar, issue list, and gradient fade at the bottom.

3. Feature Triad: Section heading "A new species of product tool" with a descriptive subtitle. Three columns each showing a figure label (FIG 0.2, 0.3, 0.4), a title, and a description paragraph.

4. Five Narrative Sections: Each section uses the NarrativeSection template with alternating left-right layout. Each contains an eyebrow label with step number and arrow, a headline, a description, optional sub-feature pills with numbered labels, and a mock UI component on the opposite side.

   - 1.0 Intake: Kanban mockup with three columns (New, Triaged, Assigned) showing auto-triaged issues.
   - 2.0 Plan: Gantt timeline mockup with five project bars across seven months.
   - 3.0 Build: AI agent activity log with four entries showing spec drafting, code writing, PR creation, and status updates.
   - 4.0 Diffs: Code diff view showing a PR with added and removed lines in a monospace table.
   - 5.0 Monitor: Project health dashboard with four metric cards and a bar chart.

5. Changelog: Grid of four cards showing real Linear changelog entries with titles, descriptions, and dates. Each card links to the corresponding changelog page.

6. Testimonials: Three blockquote cards with real quotes from Gabriel Peal (OpenAI), Nik Koblov (Ramp), and Kaz Nejatian (Opendoor). Below the cards, a stat line reading "Linear powers over 33,000 product teams" with a customer stories link.

7. CTA Band: Rounded container with accent glow, headline "Built for the future. Available today." in accent color, and four action buttons (Get started, Contact sales, Open app, Download).

8. Footer: Six-column responsive grid (Product, Features, Company, Resources, Connect, Legal) with a brand column on the left. Bottom bar with tagline and legal links (Privacy, Terms, DPA, AUP).

Screenshot Comparison

The following side by side screenshots compare the clone against the original Linear.app landing page, both captured at 1440px viewport width.

| Original Linear.app | Clone |
|---------------------|-------|
| ![Original Linear Page](public/screenshots/original.png) | ![Clone](public/screenshots/clone.png) |

Deployment

The project is configured for zero-configuration deployment on Vercel. To deploy:

1. Push the repository to GitHub.
2. Connect the repository to Vercel via the Vercel dashboard.
3. Vercel automatically detects Next.js and configures the build settings.
4. The production build completes with zero TypeScript errors and zero lint warnings.

To verify the build locally before deploying, run npm run build. The output should show a successful compilation with all pages generated as static content.
