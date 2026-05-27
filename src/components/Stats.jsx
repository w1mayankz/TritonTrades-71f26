import { useEffect, useRef } from 'react'
import { motion, animate, useInView } from 'motion/react'

const stats = [
  { num: 500, suffix: '+', label: 'Traders served' },
  { prefix: '$', num: 25, suffix: 'k+', label: 'Student payouts' },
  { num: 98, suffix: '%', label: 'Satisfaction rate' },
  { num: 400, suffix: '+', label: '5-star reviews' },
]

function Counter({ num, prefix = '', suffix = '' }) {
  const nodeRef = useRef(null)
  const inView = useInView(nodeRef, { once: true })

  useEffect(() => {
    if (inView) {
      animate(0, num, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`
          }
        }
      })
    }
  }, [num, inView, prefix, suffix])

  return <span ref={nodeRef}>{prefix}0{suffix}</span>
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-[5]"
        style={{ height: 200, background: 'linear-gradient(to top, transparent, #000)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5]"
        style={{ height: 200, background: 'linear-gradient(to bottom, transparent, #000)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-none">
                <Counter num={s.num} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-white/60 font-body font-light text-sm mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
