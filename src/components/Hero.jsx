import { motion } from 'motion/react'
import { ArrowUpRight, Play } from 'lucide-react'
import BlurText from './BlurText'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-visible"
      style={{ height: 550 }}
    >
      <div className="absolute inset-0 bg-black/5 z-0" />

      <div
        className="absolute bottom-0 left-0 right-0 z-[5] pointer-events-none"
        style={{
          height: 300,
          background: 'linear-gradient(to bottom, transparent, #000)',
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ paddingTop: 150 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            500+
          </span>
          <span className="text-white/90 text-xs font-body font-medium pr-3">
            Traders Served
          </span>
        </motion.div>

        <BlurText
          text="Master The Market With Clarity"
          delay={100}
          animateBy="words"
          direction="bottom"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px] justify-center"
        />

        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm md:text-base text-white font-body font-light leading-tight mt-8 max-w-md"
        >
          We cut through the noise with a simple strategy, together with personal guidance to help you become an independent trader
        </motion.p>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-4 mt-8"
        >
          <a
            href="#cta"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-white text-sm font-body font-medium flex items-center gap-2"
          >
            Get Started <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="text-white text-sm font-body font-medium flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" /> See Pricing
          </a>
        </motion.div>
      </div>
    </section>
  )
}
