import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import ScheduleCallModal from './components/modals/ScheduleCallModal'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded bg-slate-900 px-3 py-2 text-white">Skip to content</a>
      <Navbar onOpenSchedule={() => setOpen(true)} />
      <main id="main-content">
        <HeroSection onOpenSchedule={() => setOpen(true)} />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection onOpenSchedule={() => setOpen(true)} pausedParticles={open} />
        <footer className="border-t border-slate-200 py-6 text-sm text-slate-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Evermark Marketing & Promotion. All rights reserved.</p>
            <nav className="flex items-center gap-4" aria-label="Footer">
              <a className="hover:text-slate-900" href="#services">Services</a>
              <a className="hover:text-slate-900" href="#work">Work</a>
              <a className="hover:text-slate-900" href="#contact">Contact</a>
            </nav>
          </div>
        </footer>
      </main>
      <ScheduleCallModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default App
