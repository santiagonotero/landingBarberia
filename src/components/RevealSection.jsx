'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function RevealSection({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0 
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: -50 },
    right: { x: 50 }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      animate={inView ? { 
        opacity: 1,
        x: 0,
        y: 0
      } : {}}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}