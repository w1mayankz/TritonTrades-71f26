import { motion } from 'motion/react'
import { Star } from 'lucide-react'

const items = [
  {
    quote: "I used to be lost in trading, just guessing… ever since I tapped into Jenz’s discord everything started clicking. He really shows you a real strategy, not that tjr shit. I’ve been catching way more wins and actually feel like I got something that can change my life if I stay locked in.",
    name: 'Steezy',
    role: 'Student',
  },
  {
    quote: "Let me just start off by saying how humble Jenz is. He never looks down on others or trolls his students, which is something I have experienced in other groups.. He’s very interactive with his students and takes the time to answer questions in detail, making sure that concepts are clearly understood. And after just one month of applying his concepts, Now I execute trades with much more precise entries.",
    name: 'Jamie',
    role: 'Student',
  },
  {
    quote: "Learned a lot from this group Jenz is a mastermind with knowing how to work the markets. Before I joined, I was taking shots in the dark, but after joining executionz for a couple months, I can see Light at the tunnel. I’m not shooting in the dark. This group shows you all the variables you have to deal with to be able to trade even though you have a good strategy. It’s not a handout. This group is like family and I’m glad I found it. ",
    name: 'Christian',
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
