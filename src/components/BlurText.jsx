import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

export default function BlurText({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'bottom',
  threshold = 0.1,
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('')
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  const fromY = direction === 'bottom' ? 50 : -50

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
          initial={{ filter: 'blur(10px)', opacity: 0, y: fromY }}
          animate={
            inView
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [fromY, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: 'easeOut',
            delay: (i * delay) / 1000,
          }}
        >
          {el === ' ' ? '\u00A0' : el}
          {animateBy === 'words' && i !== elements.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </p>
  )
}
