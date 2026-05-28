import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: "Do I need prior trading experience to join?",
    answer: "Not at all. We have built our curriculum to take you from the very basics to advanced execution. Whether you are completely new or just looking to refine your edge, you'll find exactly what you need."
  },
  {
    question: "Is this just another signal group?",
    answer: "Absolutely not. We focus on teaching you the underlying mechanics of the market. Our goal is to make you an independent, self-sufficient trader, not someone who relies on blindly copying trades."
  },
  {
    question: "What exactly is included in the mentorship?",
    answer: "You get full access to our complete A-Z course, daily live trading sessions, our private community discord, and weekly Q&A calls where we review your specific trades and setups."
  },
  {
    question: "How much starting capital do I need?",
    answer: "We recommend starting on a demo account or with a prop firm challenge. You do not need to risk your own personal capital while you are still learning the strategy."
  },
  {
    question: "Are the live sessions recorded?",
    answer: "Yes, every single live session and weekly review is recorded and uploaded to the community vault so you can watch them on your own schedule."
  },
  {
    question: "Can I cancel my membership at any time?",
    answer: "Yes, there are no long-term contracts or lock-ins. You manage your own subscription and can cancel anytime straight from your dashboard."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-32 px-6 lg:px-16">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          FAQs
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Everything you need to know.
        </h2>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto w-full">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i

          return (
            <div key={i} className="border-b border-white/10 last:border-b-0">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
              >
                {/* Updated size here: text-xl md:text-2xl */}
                <span className="text-white font-['Barlow'] text-xl md:text-2xl font-medium pr-8">
                  {faq.question}
                </span>
                
                {/* Animated Plus Icon */}
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-6 h-6 text-white/70" />
                </motion.div>
              </button>

              {/* Animated Answer Reveal */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {/* Updated size here: text-sm */}
                    <p className="pb-6 text-white/70 font-['Barlow'] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
