'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full border-2 border-white"
          animate={{
            scale: isHovering ? 1.5 : 1,
            borderColor: isHovering ? '#FF2E2E' : '#FFFFFF'
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-red-500"
          animate={{
            scale: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-[9998] blur-2xl opacity-30"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500" />
      </motion.div>
    </>
  )
}