import { Instagram, Linkedin, CircleDollarSign } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
        <div>
          <div className="font-semibold text-slate-900">Evermark</div>
          <p className="mt-2 text-sm text-slate-600">Marketing that compounds. Brand x Performance x Content.</p>
        </div>
        <nav className="flex justify-center gap-6 text-sm" aria-label="Footer">
          <a className="hover:text-slate-900 text-slate-700" href="#home">Home</a>
          <a className="hover:text-slate-900 text-slate-700" href="#about">About</a>
          <a className="hover:text-slate-900 text-slate-700" href="#services">Services</a>
          <a className="hover:text-slate-900 text-slate-700" href="#portfolio">Portfolio</a>
          <a className="hover:text-slate-900 text-slate-700" href="#contact">Contact</a>
        </nav>
        <div className="flex justify-end gap-4 text-slate-700">
          <a href="#" aria-label="Instagram" className="hover:text-slate-900"><Instagram className="h-5 w-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-slate-900"><Linkedin className="h-5 w-5" /></a>
          <a href="#" aria-label="TikTok" className="hover:text-slate-900"><CircleDollarSign className="h-5 w-5" /></a>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Evermark. All rights reserved.</div>
    </footer>
  )
}
