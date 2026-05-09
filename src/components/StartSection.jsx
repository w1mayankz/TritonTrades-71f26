import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import BlurText from './BlurText'

export default function StartSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-[5]"
        style={{ height: 200, background: 'linear-gradient(to top, transparent, #000)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5]"
        style={{ height: 200, background: 'linear-gradient(to bottom, transparent, #000)' }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto"
        style={{ minHeight: 500, justifyContent: 'center' }}
      >
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          How It Works
        </span>

        <BlurText
          text="Your Ambition. Our Expertise."
          delay={80}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] justify-center"
        />

        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/60 font-body font-light text-sm md:text-base mt-8 max-w-xl"
        >
          Join securely through Whop, Instantly get access to all Premium Educational Resources, Go through them to understand the core concepts used, Chat with Active Community and attend Daily Live Streams.
        </motion.p>

        <motion.a
          href="#cta"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium flex items-center gap-2 mt-10"
        >
          Get Started <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  )
}
