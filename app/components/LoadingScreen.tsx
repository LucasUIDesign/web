'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('INITIALIZING PHANTOM PROTOCOL')

  // Pre-generate random values for particles
  const particles = useMemo(() =>
    [...Array(30)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
      size: Math.random() * 3 + 1
    })), []
  )

  const hexLines = useMemo(() =>
    [...Array(8)].map((_, i) => ({
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 80}%`,
      delay: Math.random() * 2,
      width: 40 + Math.random() * 80
    })), []
  )

  useEffect(() => {
    const statusMessages = [
      'INITIALIZING PHANTOM PROTOCOL',
      'LOADING NEURAL ENGINE',
      'CALIBRATING AIMBOT ENGINE',
      'BYPASSING VANGUARD',
      'ESTABLISHING SECURE CONNECTION',
      'DEPLOYING WALLHACK MODULE',
      'SYSTEM READY'
    ]

    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 12 + 3
        if (next >= 100) {
          clearInterval(interval)
          setStatusText('SYSTEM READY')
          setTimeout(() => setIsLoading(false), 800)
          return 100
        }
        const msgIndex = Math.min(Math.floor(next / 16), statusMessages.length - 1)
        setStatusText(statusMessages[msgIndex])
        return next
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#030508] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: 'blur(10px)'
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Deep background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#030508] via-[#050A0E] to-[#0A1628]" />

          {/* Radial phantom glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,255,209,0.08) 0%, rgba(0,255,209,0.02) 40%, transparent 70%)'
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(rgba(0,255,209,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />

          {/* Floating phantom particles */}
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                background: i % 3 === 0 ? '#00FFD1' : i % 3 === 1 ? '#7B61FF' : '#00B4D8',
                boxShadow: `0 0 ${p.size * 4}px ${i % 3 === 0 ? 'rgba(0,255,209,0.6)' : i % 3 === 1 ? 'rgba(123,97,255,0.6)' : 'rgba(0,180,216,0.6)'}`
              }}
              animate={{
                y: [0, -(30 + Math.random() * 60), 0],
                x: [0, (Math.random() - 0.5) * 40, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut'
              }}
            />
          ))}

          {/* Hex code lines floating */}
          {hexLines.map((line, i) => (
            <motion.div
              key={`hex-${i}`}
              className="absolute font-mono text-[10px] sm:text-xs text-accent/20 whitespace-nowrap select-none pointer-events-none"
              style={{ left: line.left, top: line.top }}
              animate={{
                opacity: [0, 0.3, 0],
                x: [0, 30, 60]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: line.delay,
                ease: 'linear'
              }}
            >
              {`0x${Math.random().toString(16).slice(2, 10).toUpperCase()}`}
            </motion.div>
          ))}

          {/* Scan line effect */}
          <motion.div
            className="absolute left-0 right-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0,255,209,0.6), rgba(123,97,255,0.4), transparent)',
              boxShadow: '0 0 20px rgba(0,255,209,0.3)'
            }}
            animate={{ top: ['-5%', '105%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center px-4">

            {/* Phantom Ghost Icon - Epic SVG */}
            <motion.div
              className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-6 sm:mb-8"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.2, type: 'spring', stiffness: 100 }}
            >
              {/* Outer phantom aura rings */}
              <motion.div
                className="absolute inset-[-20px] sm:inset-[-30px] rounded-full"
                style={{
                  border: '1px solid rgba(0,255,209,0.15)',
                  boxShadow: '0 0 40px rgba(0,255,209,0.1), inset 0 0 40px rgba(0,255,209,0.05)'
                }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[-10px] sm:inset-[-15px] rounded-full"
                style={{
                  border: '1px solid rgba(123,97,255,0.2)',
                  boxShadow: '0 0 30px rgba(123,97,255,0.1)'
                }}
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4], rotate: [360, 180, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Central phantom icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" role="img" aria-label="Phantom Protocol loading icon">
                  <defs>
                    <linearGradient id="phantomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00FFD1" />
                      <stop offset="50%" stopColor="#7B61FF" />
                      <stop offset="100%" stopColor="#00B4D8" />
                    </linearGradient>
                    <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00FFD1" stopOpacity="1" />
                      <stop offset="100%" stopColor="#00FFD1" stopOpacity="0" />
                    </radialGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Ghost body outline */}
                  <motion.path
                    d="M60 15 C40 15, 25 28, 25 48 L25 75 C25 78, 27 80, 30 80 L35 75 L42 82 L50 75 L58 82 L65 75 L72 82 L80 75 L85 80 C88 80, 90 78, 90 75 L90 48 C90 28, 75 15, 60 15 Z"
                    stroke="url(#phantomGrad)"
                    strokeWidth="2"
                    fill="rgba(0,255,209,0.05)"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />

                  {/* Left Eye */}
                  <motion.circle
                    cx="45" cy="45" r="7"
                    fill="url(#eyeGlow)"
                    filter="url(#glow)"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      r: [6, 7.5, 6]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <circle cx="45" cy="45" r="3" fill="#00FFD1" />

                  {/* Right Eye */}
                  <motion.circle
                    cx="72" cy="45" r="7"
                    fill="url(#eyeGlow)"
                    filter="url(#glow)"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      r: [6, 7.5, 6]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  />
                  <circle cx="72" cy="45" r="3" fill="#00FFD1" />

                  {/* Glitch scan lines */}
                  <motion.line
                    x1="30" y1="38" x2="52" y2="38"
                    stroke="#7B61FF" strokeWidth="1"
                    animate={{ opacity: [0, 0.8, 0], x1: [30, 33, 30] }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <motion.line
                    x1="65" y1="52" x2="87" y2="52"
                    stroke="#00B4D8" strokeWidth="1"
                    animate={{ opacity: [0, 0.8, 0], x2: [87, 84, 87] }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2.5, delay: 1 }}
                  />
                </svg>
              </div>

              {/* Orbiting particles around icon */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={`orb-${i}`}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    background: i % 2 === 0 ? '#00FFD1' : '#7B61FF',
                    boxShadow: `0 0 8px ${i % 2 === 0 ? '#00FFD1' : '#7B61FF'}`,
                    top: '50%',
                    left: '50%'
                  }}
                  animate={{
                    x: [
                      Math.cos((i * 72) * Math.PI / 180) * 65,
                      Math.cos((i * 72 + 360) * Math.PI / 180) * 65
                    ],
                    y: [
                      Math.sin((i * 72) * Math.PI / 180) * 65,
                      Math.sin((i * 72 + 360) * Math.PI / 180) * 65
                    ],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>

            {/* Title */}
            <motion.div
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(0,255,209,0.5)',
                    '0 0 30px rgba(0,255,209,0.8), 0 0 60px rgba(0,255,209,0.3)',
                    '0 0 10px rgba(0,255,209,0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-electric to-highlight">
                  PHANTOM
                </span>
                <span className="text-light/80 ml-2 sm:ml-3">PROTOCOL</span>
              </motion.h1>
            </motion.div>

            {/* Status text with typing effect */}
            <motion.div
              className="font-mono text-xs sm:text-sm text-accent/70 mb-6 sm:mb-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.span
                className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <span className="truncate max-w-[250px] sm:max-w-none">{statusText}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.div>

            {/* Progress bar */}
            <div className="w-56 sm:w-72 md:w-80 mb-4">
              <div className="h-1 sm:h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                <motion.div
                  className="h-full rounded-full relative"
                  style={{
                    background: 'linear-gradient(90deg, #00FFD1, #7B61FF, #00B4D8)',
                    boxShadow: '0 0 20px rgba(0,255,209,0.5)'
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* Shimmer on progress bar */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                    }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Progress percentage */}
            <motion.div
              className="font-mono text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-electric"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(Math.min(progress, 100))}%
            </motion.div>

            {/* Bottom decorative line */}
            <motion.div
              className="mt-8 sm:mt-12 flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-light/20 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-accent/30" />
              <span>SECURE • UNDETECTABLE • PHANTOM</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-accent/30" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
