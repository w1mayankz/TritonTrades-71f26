import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import img1 from '../1.png'
import img2 from '../2.png'
import img3 from '../3.png'

const rows = [
  {
    title: 'Live Trading Sessions',
    body: '4x per week, Tuesday to Friday. Watch Triton execute trades in the live markets. Learn from the live analysis and breakdowns, ask questions and get answers in real time.',
    image: img3,
    reverse: false,
  },
  {
    title: 'Private Community.',
    body: 'Join like-minded traders inside. Share ideas, wins and executions. Get support and feedback from other traders and learn from them.',
    image: img2,
    reverse: true,
  },
  {
    title: 'The CISD Model',
    body: 'Learn the trading model which Triton personally use daily, The CISD Model. This is a simple and repeatable model.',
    image: img1,
    reverse: false,
  },
]

export default function FeaturesChess() {
  return (
    <section id="features" className="py-32 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-20">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          Features
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          What You Will Get
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col ${row.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="flex-1 flex flex-col items-start text-left"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.95] mb-6">
                {row.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm md:text-base mb-8 max-w-md">
                {row.body}
              </p>
              <a
                href="#cta"
                className="liquid-glass-strong rounded-full px-5 py-2.5 text-white text-sm font-body font-medium flex items-center gap-2"
              >
                Get Started <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="flex-1 w-full"
            >
              <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] w-full">
                <img
                  src={row.image}
                  alt={row.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
