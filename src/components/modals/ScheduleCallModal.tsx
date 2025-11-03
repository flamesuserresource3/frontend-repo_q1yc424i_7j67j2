import { useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { CheckCircle2, X } from 'lucide-react'

interface ScheduleCallModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleCallModal({ isOpen, onClose }: ScheduleCallModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const firstFieldRef = useRef<HTMLInputElement | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    goals: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const tl = useMemo(() => gsap.timeline({ paused: true }), [])

  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return

    tl.clear()
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.18, ease: 'power2.out' },
      0
    )
      .fromTo(
        panelRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.24, ease: 'power3.out' },
        0
      )
  }, [tl])

  useEffect(() => {
    if (isOpen) {
      tl.play(0)
      const t = setTimeout(() => firstFieldRef.current?.focus(), 120)
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose()
        }
        if (e.key === 'Tab') {
          trapFocus(e)
        }
      }
      document.addEventListener('keydown', onKey)
      return () => {
        clearTimeout(t)
        document.removeEventListener('keydown', onKey)
      }
    }
  }, [isOpen])

  const handleClose = () => {
    if (!overlayRef.current || !panelRef.current) return onClose()
    tl.reverse()
    const onComplete = () => onClose()
    tl.eventCallback('onReverseComplete', onComplete)
  }

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      handleClose()
    }
  }

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address.'
    }
    if (!form.goals.trim()) errs.goals = 'Please describe your goals.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    // Simulate submission
    console.log('Discovery call request:', form)
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setSuccess(true)
  }

  const trapFocus = (e: KeyboardEvent) => {
    if (!panelRef.current) return
    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) {
        ;(last as HTMLElement).focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === last) {
        ;(first as HTMLElement).focus()
        e.preventDefault()
      }
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      onMouseDown={onOverlayClick}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-title"
      aria-describedby="schedule-subtitle"
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-md"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={handleClose}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e8b57] focus:ring-offset-slate-900"
        >
          <X className="h-5 w-5" />
        </button>

        {!success ? (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="text-center">
              <h3 id="schedule-title" className="text-xl font-semibold text-white">Let’s Schedule Your Discovery Call</h3>
              <p id="schedule-subtitle" className="mt-1 text-sm text-slate-200/80">Tell us about your brand and goals. We’ll get back to you within 24 hours.</p>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-100">Full Name</label>
              <input
                ref={firstFieldRef}
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`mt-1 w-full rounded-md border bg-white/10 px-3 py-2 text-white placeholder:text-slate-300/60 outline-none transition focus:ring-2 focus:ring-[#2e8b57] ${errors.name ? 'border-red-400' : 'border-slate-300/30 hover:border-[#c0c0c0]'}`}
                placeholder="Jane Doe"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <p id="name-error" className="mt-1 text-xs text-red-300">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-100">Company / Brand Name</label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="mt-1 w-full rounded-md border border-slate-300/30 bg-white/10 px-3 py-2 text-white placeholder:text-slate-300/60 outline-none transition hover:border-[#c0c0c0] focus:ring-2 focus:ring-[#2e8b57]"
                placeholder="Acme Co."
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-100">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`mt-1 w-full rounded-md border bg-white/10 px-3 py-2 text-white placeholder:text-slate-300/60 outline-none transition focus:ring-2 focus:ring-[#2e8b57] ${errors.email ? 'border-red-400' : 'border-slate-300/30 hover:border-[#c0c0c0]'}`}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p id="email-error" className="mt-1 text-xs text-red-300">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-100">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-md border border-slate-300/30 bg-white/10 px-3 py-2 text-white placeholder:text-slate-300/60 outline-none transition hover:border-[#c0c0c0] focus:ring-2 focus:ring-[#2e8b57]"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-slate-100">Project Goals</label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={4}
                value={form.goals}
                onChange={(e) => setForm({ ...form, goals: e.target.value })}
                className={`mt-1 w-full rounded-md border bg-white/10 px-3 py-2 text-white placeholder:text-slate-300/60 outline-none transition focus:ring-2 focus:ring-[#2e8b57] ${errors.goals ? 'border-red-400' : 'border-slate-300/30 hover:border-[#c0c0c0]'}`}
                placeholder="Share your objectives, target audience, timelines, and any key challenges."
                aria-invalid={!!errors.goals}
                aria-describedby={errors.goals ? 'goals-error' : undefined}
              />
              {errors.goals && <p id="goals-error" className="mt-1 text-xs text-red-300">{errors.goals}</p>}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-4 py-2 text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e8b57] focus:ring-offset-slate-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#1a4d2e] to-[#2e8b57] px-5 py-2.5 font-medium text-white shadow disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e8b57] focus:ring-offset-slate-900"
              >
                {submitting ? 'Submitting…' : 'Submit Request'}
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle2 className="h-12 w-12 text-[#2e8b57]" aria-hidden="true" />
            <h4 className="mt-3 text-lg font-semibold text-white">Thank you!</h4>
            <p className="mt-1 max-w-sm text-sm text-slate-200/80">We’ll reach out shortly to schedule your discovery call.</p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 inline-flex items-center justify-center rounded-md border border-white/30 px-4 py-2 text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e8b57] focus:ring-offset-slate-900"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
