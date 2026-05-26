import { ArrowUpRight } from 'lucide-react'
import logo from '../exzlogo.jpg'

export default function Navbar() {
  const links = ['Home', 'Features', 'Stats', 'Testimonials']
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      <a href="#home" className="flex items-center">
        <div className="liquid-glass rounded-full p-[2px] flex items-center justify-center w-12 h-12">
  <img
    src={logo}
    alt="Triton Trades"
    className="w-full h-full object-cover rounded-full"
  />
</div>
      </a>

      <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1 items-center gap-1">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition"
          >
            {link}
          </a>
        ))}
        <a
          href="#cta"
          className="bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-body font-medium flex items-center gap-1 hover:bg-white/90 transition"
        >
          Join Now <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <a
        href="#cta"
        className="md:hidden bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-body font-medium flex items-center gap-1"
      >
        Join <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </nav>
  )
}
