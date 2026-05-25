import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import BlurText from './BlurText'

export default function CtaFooter() {
  return (
    <section id="cta" className="relative pt-32 pb-12 lg:px-16 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-[5]"
        style={{ height: 200, background: 'linear-gradient(to top, transparent, #000)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5]"
        style={{ height: 50, background: 'linear-gradient(to bottom, transparent, #000)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <BlurText
          text="Your Journey Starts Here."
          delay={80}
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] tracking-tight justify-center"
        />

        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/60 font-body font-light text-sm md:text-base mt-8 max-w-xl"
        >
          You can continue struggling with complicated strategies that don't work, or you can join Triton Trades and learn to trade using a simple strategy. The choice is yours.
        </motion.p>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a
            href="#"
            className="liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium flex items-center gap-2"
          >
            I'm ready! <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium"
          >
            Not Sure
          </a>
        </motion.div>

        <div className="w-full mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            Copyright 2026 Simple Traders. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 text-xs font-body hover:text-white transition">Telegram</a>
            <a href="#" className="text-white/40 text-xs font-body hover:text-white transition">Twitter/X</a>
            <a href="#" className="text-white/40 text-xs font-body hover:text-white transition">YouTube</a>
          </div>
        </div>
      </div>
    </section>
  )
}
