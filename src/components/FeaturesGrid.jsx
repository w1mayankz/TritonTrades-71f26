import { motion } from 'motion/react'
import { MessageCircleMore, Compass, Zap, Folder } from 'lucide-react'

const cards = [
  {
    Icon: MessageCircleMore,
    title: 'Personalized Guidance',
    body: 'Get direct answers to all your questions and feedback on the trades you take. Learn what went right and what to improve.',
  },
  {
    Icon: Compass,
    title: 'Prop Firm Guidance',
    body: 'Learn how to pass challenges quickly and get payouts consistency with multiple firms.',
  },
  {
    Icon: Zap,
    title: 'Master Execution',
    body: 'Learn how to trade using our simple strategy. Works on any market, any asset, & any trading session.',
  },
  {
    Icon: Folder,
    title: 'Market Structure & Liquidity',
    body: 'Master the core concepts of Market Structure & Liquidity with our step-by-step lessons. Detailed examples included.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-32 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          Why Us
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          The difference is everything.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ Icon, title, body }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="liquid-glass rounded-2xl p-6 flex flex-col items-start gap-4"
          >
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-heading italic text-white leading-tight">
              {title}
            </h3>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">
              {body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
