'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('INITIALIZING PHANTOM PROTOCOL')
  const [phase, setPhase] = useState(0) // 0=shield, 1=phantom, 2=eyes, 3=title

  const particles = useMemo(() =>
    [...Array(30)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
      color: Math.random() > 0.5 ? '#FF4655' : Math.random() > 0.3 ? '#C850C0' : '#FFD700'
    })), []
  )

  // Orbiting particles around shield
  const orbitParticles = useMemo(() =>
    [...Array(8)].map((_, i) => ({
      angle: (i / 8) * 360,
      size: 2 + Math.random() * 3,
      speed: 8 + Math.random() * 4,
      radiusFactor: 0.6 + Math.random() * 0.15, // relative to container
      color: i % 3 === 0 ? '#FF4655' : i % 3 === 1 ? '#C850C0' : '#FFD700'
    })), []
  )

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600)
    const t2 = setTimeout(() => setPhase(2), 1400)
    const t3 = setTimeout(() => setPhase(3), 2200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  useEffect(() => {
    const statusMessages = [
      'INITIALIZING PHANTOM PROTOCOL',
      'LOADING NEURAL ENGINE',
      'CALIBRATING AIMBOT ENGINE',
      'BYPASSING VANGUARD',
      'ESTABLISHING SECURE CONNECTION',
      'DEPLOYING WALLHACK MODULE',
      'ACTIVATING GOD MODE',
      'SYSTEM READY'
    ]

    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 3.5 + 1
        if (next >= 100) {
          clearInterval(interval)
          setStatusText('SYSTEM READY')
          setTimeout(() => setIsLoading(false), 1000)
          return 100
        }
        const msgIndex = Math.min(Math.floor(next / 13), statusMessages.length - 1)
        setStatusText(statusMessages[msgIndex])
        return next
      })
    }, 280)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#030308] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* === BACKGROUND === */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#080510] to-[#030308]" />

          {/* Noise grain */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px'
          }} />

          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(rgba(255,70,85,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,70,85,0.5) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />

          {/* === MASSIVE AURA BEHIND LOGO === */}
          <motion.div
            className="absolute rounded-full w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,70,85,0.15) 0%, rgba(255,70,85,0.06) 25%, rgba(200,80,192,0.03) 45%, transparent 65%)',
              filter: 'blur(50px)',
            }}
            animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Gold secondary aura */}
          <motion.div
            className="absolute rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.06) 0%, rgba(255,70,85,0.03) 40%, transparent 65%)',
              filter: 'blur(35px)',
            }}
            animate={{ scale: [1.1, 0.85, 1.1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Volumetric light rays */}
          <motion.div
            className="absolute"
            style={{
              width: '150vw', height: '150vh',
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,70,85,0.02) 10deg, transparent 20deg, rgba(200,80,192,0.015) 35deg, transparent 50deg, rgba(255,70,85,0.025) 65deg, transparent 80deg, rgba(255,215,0,0.015) 100deg, transparent 120deg, rgba(255,70,85,0.02) 140deg, transparent 160deg, rgba(200,80,192,0.02) 180deg, transparent 200deg, rgba(255,70,85,0.025) 220deg, transparent 240deg, rgba(255,215,0,0.015) 260deg, transparent 280deg, rgba(255,70,85,0.02) 300deg, transparent 320deg, rgba(200,80,192,0.02) 340deg, transparent 360deg)',
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          />

          {/* === MAIN LOGO - GIANT ANIMATED === */}
          <div className="relative z-10 flex flex-col items-center mt-[8vh] sm:mt-[5vh] md:mt-0">

            {/* Logo container with float */}
            <motion.div
              className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Outer hexagonal glow ring */}
              <motion.div
                className="absolute inset-[-15px] sm:inset-[-20px] md:inset-[-30px]"
                style={{
                  clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
                  background: 'linear-gradient(135deg, rgba(255,70,85,0.2), rgba(200,80,192,0.15), rgba(255,215,0,0.1))',
                  filter: 'blur(20px)',
                }}
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Second glow ring (counter-pulse) */}
              <motion.div
                className="absolute inset-[-8px] sm:inset-[-10px] md:inset-[-15px]"
                style={{
                  clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
                  background: 'linear-gradient(225deg, rgba(255,70,85,0.1), rgba(200,80,192,0.08))',
                  filter: 'blur(12px)',
                }}
                animate={{ opacity: [0.5, 0.2, 0.5], scale: [1.02, 0.98, 1.02] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              />

              {/* Main SVG Logo */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full relative z-10"
                fill="none"
                style={{ shapeRendering: 'geometricPrecision' }}
              >
                <defs>
                  <linearGradient id="loadEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF4655" />
                    <stop offset="50%" stopColor="#C850C0" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                  <linearGradient id="loadFill" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#10101a" />
                    <stop offset="100%" stopColor="#06060c" />
                  </linearGradient>
                  <radialGradient id="loadEyeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF4655" stopOpacity="1" />
                    <stop offset="50%" stopColor="#FF4655" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FF4655" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="loadPhantomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF4655" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#C850C0" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FFD700" stopOpacity="0.2" />
                  </linearGradient>
                  <filter id="loadGlow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="loadHeavyGlow">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* === SHIELD HEXAGON === */}
                {/* Phase 0: Shield draws in */}
                <motion.polygon
                  points="50,2 93,26 93,74 50,98 7,74 7,26"
                  fill="url(#loadFill)"
                  stroke="url(#loadEdge)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />

                {/* Inner hex border */}
                <motion.polygon
                  points="50,10 85,30 85,70 50,90 15,70 15,30"
                  fill="none"
                  stroke="#FF4655"
                  strokeWidth="0.4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.12 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />

                {/* Decorative inner hex */}
                <motion.polygon
                  points="50,18 77,34 77,66 50,82 23,66 23,34"
                  fill="none"
                  stroke="#C850C0"
                  strokeWidth="0.3"
                  strokeDasharray="3 5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.08 }}
                  transition={{ delay: 1, duration: 0.5 }}
                />

                {/* === PHANTOM GHOST - Phase 1 === */}
                <motion.path
                  d="
                    M50,18
                    C38,18 28,28 28,42
                    L27,48 L25,52 L24,62 L22,78
                    C23,82 26,83 30,81
                    C34,79 37,82 40,84
                    C43,86 47,84 50,81
                    C53,84 57,86 60,84
                    C63,82 66,79 70,81
                    C74,83 77,82 78,78
                    L76,62 L75,52 L73,48 L72,42
                    C72,28 62,18 50,18 Z
                  "
                  fill="rgba(255,70,85,0.04)"
                  stroke="url(#loadPhantomGrad)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={phase >= 1 ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />

                {/* Hood void */}
                <motion.path
                  d="M36,38 C36,28 42,22 50,22 C58,22 64,28 64,38 L62,48 L38,48 Z"
                  fill="#040408"
                  initial={{ opacity: 0 }}
                  animate={phase >= 1 ? { opacity: 0.85 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />

                {/* === EYES - Phase 2 === */}
                {/* Left eye outer glow */}
                <motion.circle
                  cx="43" cy="38" r="6"
                  fill="url(#loadEyeGlow)"
                  filter="url(#loadHeavyGlow)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={phase >= 2 ? {
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.1, 0.8],
                    r: [5, 7, 5]
                  } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Left eye core */}
                <motion.circle
                  cx="43" cy="38" r="2.5"
                  fill="#FF4655"
                  initial={{ opacity: 0 }}
                  animate={phase >= 2 ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3 }}
                />
                <motion.circle
                  cx="43.5" cy="37.5" r="0.8"
                  fill="#fff"
                  initial={{ opacity: 0 }}
                  animate={phase >= 2 ? { opacity: 0.8 } : {}}
                  transition={{ delay: 0.2, duration: 0.3 }}
                />

                {/* Right eye outer glow */}
                <motion.circle
                  cx="57" cy="38" r="6"
                  fill="url(#loadEyeGlow)"
                  filter="url(#loadHeavyGlow)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={phase >= 2 ? {
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.1, 0.8],
                    r: [5, 7, 5]
                  } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                />
                {/* Right eye core */}
                <motion.circle
                  cx="57" cy="38" r="2.5"
                  fill="#FF4655"
                  initial={{ opacity: 0 }}
                  animate={phase >= 2 ? { opacity: 1 } : {}}
                  transition={{ delay: 0.1, duration: 0.3 }}
                />
                <motion.circle
                  cx="57.5" cy="37.5" r="0.8"
                  fill="#fff"
                  initial={{ opacity: 0 }}
                  animate={phase >= 2 ? { opacity: 0.8 } : {}}
                  transition={{ delay: 0.3, duration: 0.3 }}
                />

                {/* Eye connection beam */}
                <motion.line
                  x1="43" y1="38" x2="57" y2="38"
                  stroke="#FF4655" strokeWidth="0.6"
                  initial={{ opacity: 0 }}
                  animate={phase >= 2 ? { opacity: [0.1, 0.5, 0.1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Vertical center line */}
                <motion.line
                  x1="50" y1="50" x2="50" y2="72"
                  stroke="#FF4655" strokeWidth="0.4"
                  initial={{ opacity: 0 }}
                  animate={phase >= 1 ? { opacity: 0.15 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />

                {/* Crosshair */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={phase >= 2 ? { opacity: [0.15, 0.35, 0.15] } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <line x1="46" y1="57" x2="54" y2="57" stroke="#FFD700" strokeWidth="0.5" />
                  <line x1="50" y1="53" x2="50" y2="61" stroke="#FFD700" strokeWidth="0.5" />
                  <circle cx="50" cy="57" r="3" stroke="#FFD700" strokeWidth="0.3" fill="none" />
                </motion.g>

                {/* Top/bottom accents */}
                <motion.line
                  x1="50" y1="4" x2="50" y2="12"
                  stroke="#FF4655" strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.line
                  x1="50" y1="88" x2="50" y2="96"
                  stroke="#FF4655" strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />

                {/* Left/right accents */}
                <motion.line
                  x1="5" y1="50" x2="12" y2="50"
                  stroke="#C850C0" strokeWidth="0.8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
                />
                <motion.line
                  x1="88" y1="50" x2="95" y2="50"
                  stroke="#C850C0" strokeWidth="0.8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 2.5 }}
                />

                {/* Glitch lines */}
                <motion.rect
                  x="20" y="55" width="60" height="1.5"
                  fill="#C850C0"
                  animate={{ opacity: [0, 0.5, 0], x: [20, 23, 20] }}
                  transition={{ duration: 0.12, repeat: Infinity, repeatDelay: 5 }}
                />
                <motion.rect
                  x="25" y="65" width="50" height="1"
                  fill="#FFD700"
                  animate={{ opacity: [0, 0.4, 0], x: [25, 22, 25] }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 4, delay: 2.5 }}
                />
              </svg>

              {/* === ORBITING PARTICLES around the shield === */}
              {orbitParticles.map((p, i) => {
                const r = 140 * p.radiusFactor
                return (
                  <motion.div
                    key={`orb-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: p.size,
                      height: p.size,
                      background: p.color,
                      boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      x: [
                        Math.cos((p.angle) * Math.PI / 180) * r,
                        Math.cos((p.angle + 360) * Math.PI / 180) * r
                      ],
                      y: [
                        Math.sin((p.angle) * Math.PI / 180) * r,
                        Math.sin((p.angle + 360) * Math.PI / 180) * r
                      ],
                      opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                      duration: p.speed,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.3
                    }}
                  />
                )
              })}
            </motion.div>

            {/* === TITLE - Phase 3 === */}
            <AnimatePresence>
              {phase >= 3 && (
                <motion.div
                  className="mt-5 sm:mt-8 md:mt-10 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, type: 'spring', stiffness: 60 }}
                >
                  <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-[0.1em] sm:tracking-[0.15em] uppercase"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(255,70,85,0.3), 0 0 40px rgba(255,70,85,0.1)',
                        '0 0 20px rgba(255,70,85,0.6), 0 0 60px rgba(255,70,85,0.3), 0 0 100px rgba(255,70,85,0.1)',
                        '0 0 10px rgba(255,70,85,0.3), 0 0 40px rgba(255,70,85,0.1)',
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] via-[#C850C0] to-[#FF4655]">
                      PHANTOM PROTOCOL
                    </span>
                  </motion.h1>
                  <motion.p
                    className="mt-2 text-sm sm:text-base font-display font-bold tracking-[0.3em] text-white/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    MODO DIOS
                  </motion.p>
                  <motion.div
                    className="mt-3 mx-auto h-[1px]"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #FF4655, #FFD700, #FF4655, transparent)',
                      boxShadow: '0 0 10px rgba(255,70,85,0.3)',
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* === AMBIENT PARTICLES === */}
          {particles.map((p, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute rounded-full"
              style={{
                top: `${p.y}%`, left: `${p.x}%`,
                width: p.size, height: p.size,
                background: p.color,
                boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              }}
              animate={{
                y: [0, -(20 + Math.random() * 40), 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            />
          ))}

          {/* Scan line */}
          <motion.div
            className="absolute left-0 right-0 h-[1px] z-20"
            style={{
              background: 'linear-gradient(90deg, transparent 10%, rgba(255,70,85,0.3) 30%, rgba(255,70,85,0.5) 50%, rgba(255,70,85,0.3) 70%, transparent 90%)',
            }}
            animate={{ top: ['-2%', '102%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />

          {/* === LOADING SECTION === */}
          <div className="absolute bottom-[4%] sm:bottom-[6%] md:bottom-[8%] z-20 flex flex-col items-center px-4 w-full max-w-[280px] sm:max-w-sm">
            <motion.div
              className="font-mono text-[10px] sm:text-xs text-[#FF4655]/60 mb-3 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.span
                className="inline-block w-1.5 h-1.5 bg-[#FF4655] rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <span className="truncate tracking-widest">{statusText}</span>
              <motion.span className="text-[#FF4655]/40" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>_</motion.span>
            </motion.div>

            <div className="w-full mb-3">
              <div className="h-[3px] bg-white/[0.03] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full relative"
                  style={{
                    background: 'linear-gradient(90deg, #FF4655, #C850C0, #FFD700)',
                    boxShadow: '0 0 15px rgba(255,70,85,0.5)',
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </div>
            </div>

            <motion.div
              className="font-mono text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] to-[#C850C0]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {Math.round(Math.min(progress, 100))}%
            </motion.div>
          </div>

          {/* Bottom tag */}
          <motion.div
            className="absolute bottom-2 sm:bottom-4 flex items-center gap-2 text-[8px] sm:text-[10px] text-white/10 font-mono tracking-[0.2em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="w-6 sm:w-10 h-px bg-gradient-to-r from-transparent to-[#FF4655]/20" />
            <span>SECURE • UNDETECTABLE • PHANTOM</span>
            <div className="w-6 sm:w-10 h-px bg-gradient-to-l from-transparent to-[#FF4655]/20" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
