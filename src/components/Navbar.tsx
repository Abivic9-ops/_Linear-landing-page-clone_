'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './Button'
import { NAV_ITEMS } from '@/lib/constants'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-14 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-[var(--color-text-primary)]">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.35 18.56c.54.54 1.38.54 1.92 0L12 11.84l6.73 6.72c.54.54 1.38.54 1.92 0a1.35 1.35 0 0 0 0-1.92L13.92 9.64a1.35 1.35 0 0 0-1.92 0L3.35 16.64a1.35 1.35 0 0 0 0 1.92zM12 5.64a1.35 1.35 0 0 0 0-1.92 1.35 1.35 0 0 0-1.92 0L3.35 10.44a1.35 1.35 0 0 0 0 1.92 1.35 1.35 0 0 0 1.92 0L12 7.56l6.73 6.72a1.35 1.35 0 0 0 1.92 0 1.35 1.35 0 0 0 0-1.92L13.92 3.72a1.35 1.35 0 0 0-1.92 0z" />
          </svg>
          <span className="text-sm font-semibold tracking-tight">Linear</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="secondary" className="!py-1.5">
            Log in
          </Button>
          <Button className="!py-1.5">Sign up</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-md text-[var(--color-text-muted)] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`border-t border-[var(--color-border)] bg-[var(--color-background)] px-5 pb-5 pt-4 transition-all duration-200 md:hidden ${
          mobileOpen ? 'block' : 'hidden'
        }`}
      >
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="secondary" className="w-full">
              Log in
            </Button>
            <Button className="w-full">Sign up</Button>
          </div>
        </div>
    </header>
  )
}
