import { useState } from 'react'
import { Calendar, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200" role="banner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between" aria-label="Primary">
          <a href="#home" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-light rounded" aria-label="Evermark Marketing & Promotion home">
            <span className="inline-block h-8 w-8 rounded bg-gradient-to-tr from-[#1a4d2e] to-[#2e8b57]"></span>
            <span className="font-semibold text-slate-800">Evermark Marketing & Promotion</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-light rounded px-1 py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#2e8b57] px-4 py-2 text-white shadow hover:bg-[#256f46] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e8b57]"
              aria-label="Schedule your discovery call"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Schedule</span>
            </a>
          </nav>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-light"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4" role="dialog" aria-modal="true">
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-3 py-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-light"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#2e8b57] px-4 py-2 text-white shadow hover:bg-[#256f46] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e8b57]"
              >
                <Calendar className="h-4 w-4" />
                <span>Schedule</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
