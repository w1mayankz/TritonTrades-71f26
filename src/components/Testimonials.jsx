import { motion } from 'motion/react'
import { Star } from 'lucide-react'

const items = [
  {
    quote: "Triton, what you have been doing in this group is phenominal, and I'm glad have found this group. Today got my 5th payout of the month. After five years of hard work, the value I've gotten here is worth every penny.",
    name: 'Veronica',
    role: 'Student',
  },
  {
    quote: "I'm being moved to live. 3 months of consistency following the game plan. Triton has literally taught me what I needed to be successful on my own. My life is 1000% better because of what you have done to me and my family, Forever grateful.",
    name: 'Rahman',
    role: 'Student',
  },
  {
    quote: "Been profitable since January and have been making consistent payouts, $20k+ in total payouts, YES $20k+ in like 3 months. 1 year ago I couldn't even imagine I can make these numbers in 3 months, Triton made it possible. Thank you man, the freedom it gave is unlike any other.",
    name: 'Kevin',
    role: 'Student',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          What They Say
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Don't take our word for it.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="liquid-glass rounded-2xl p-8 flex flex-col gap-6"
          >
            <div className="flex gap-1 mb-2">
  {[...Array(5)].map((_, index) => (
    <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
  ))}
</div>
            <p className="text-white/80 font-body font-light text-sm italic leading-relaxed">
              "{t.quote}"
            </p>
            <div className="flex flex-col mt-auto">
              <span className="text-white font-body font-medium text-sm">{t.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
