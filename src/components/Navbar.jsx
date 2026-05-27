import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import logo from '../exzlogo.jpg'

export default function Navbar() {
  const links = ['Home', 'Features', 'Stats', 'Testimonials']
  
  // Hook into Framer Motion's scroll tracking
  const { scrollY } = useScroll()
  const [isHidden, setIsHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0

    // Safely check window width (Tailwind's 'md' breakpoint is 768px)
    // If it's a big screen, ensure the navbar is visible and skip animation logic
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      if (isHidden) setIsHidden(false)
      return
    }

    // Scroll Down -> Hide (with a 50px buffer to ignore top bounce)
    if (latest > previous && latest > 50) {
      setIsHidden(true)
    } 
    // Scroll Up -> Show
    else if (latest < previous) {
      setIsHidden(false)
    }
  })

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 } // Glides up and fades out
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between"
    >
      <a href="#home" className="flex items-center">
        <div className="rounded-full flex items-center justify-center w-12 h-12">
          <img
            src={logo}
            alt="Executionz"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </a>
      
      {/* Big Screen: Full Navbar (Unaffected by scroll due to the window check) */}
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

      {/* Small Screen: Join Button */}
      <a
        href="#cta"
        className="md:hidden bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-body font-medium flex items-center gap-1"
      >
        Join <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </motion.nav>
  )
}
