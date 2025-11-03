export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute -inset-x-10 -top-10 h-56 bg-gradient-to-r from-[#1a4d2e] via-[#2e8b57] to-[#1a4d2e] opacity-10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 p-8 sm:p-12 shadow-xl ring-1 ring-white/10">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Let’s Work Together
            </h3>
            <p className="mt-3 text-slate-300">
              Book a discovery call to explore opportunities, align on goals, and design your growth plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#2e8b57] px-6 py-3 text-white shadow transition hover:bg-[#256f46] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e8b57]"
                aria-label="Open Calendly to schedule a discovery call"
              >
                Schedule Your Discovery Call
              </a>
              <a
                href="mailto:hello@evermarkmp.com"
                className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 px-6 py-3 text-slate-100 transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e8b57]"
                aria-label="Email Evermark Marketing & Promotion"
              >
                Contact Us
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              Follow us: <a className="underline decoration-[#2e8b57]/40 hover:text-white" href="https://www.instagram.com/evermark_mp/" target="_blank" rel="noreferrer">Instagram</a> · <a className="underline decoration-[#2e8b57]/40 hover:text-white" href="https://www.tiktok.com/@evermark_mp" target="_blank" rel="noreferrer">TikTok</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
