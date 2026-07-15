import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Linear — The Issue Tracker Built for Modern Product Teams',
  description:
    'Linear is a purpose-built tool for planning and building products. Meet your new command center for managing software projects, sprints, and tasks.',
  openGraph: {
    title: 'Linear — The Issue Tracker Built for Modern Product Teams',
    description:
      'Linear is a purpose-built tool for planning and building products.',
    url: 'https://linear.app',
    siteName: 'Linear',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[var(--color-background)] font-[family-name:var(--font-sans)] text-[var(--color-text-primary)] antialiased">
        {children}
      </body>
    </html>
  )
}
