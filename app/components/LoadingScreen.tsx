'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('INITIALIZING PHANTOM PROTOCOL')
  const [showTitle, setShowTitle] = useState(false)

  const particles = useMemo(() =>
    [...Array(35)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
      size: Math.random() * 3 + 1
    })), []
  )

  const smokeParticles = useMemo(() =>
    [...Array(8)].map(() => ({
      x: 540 + Math.random() * 40,
      y: 75 + Math.random() * 20,
      size: 3 + Math.random() * 6,
      delay: Math.random() * 2,
      duration: 1.5 + Math.random() * 2
    })), []
  )

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 800)
    return () => clearTimeout(timer)
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
          className="fixed inset-0 z-[10000] bg-[#050508] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: 'blur(10px)'
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Deep background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0A0A0F] to-[#141420]" />

          {/* Radial crimson glow behind phantom */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 55%, rgba(255,70,85,0.12) 0%, rgba(255,70,85,0.03) 35%, transparent 65%)'
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,70,85,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,70,85,0.4) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />

          {/* Floating particles */}
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                background: i % 3 === 0 ? '#FF4655' : i % 3 === 1 ? '#C850C0' : '#FFD700',
                boxShadow: `0 0 ${p.size * 4}px ${i % 3 === 0 ? 'rgba(255,70,85,0.6)' : i % 3 === 1 ? 'rgba(200,80,192,0.6)' : 'rgba(255,215,0,0.6)'}`
              }}
              animate={{
                y: [0, -(30 + Math.random() * 60), 0],
                x: [0, (Math.random() - 0.5) * 40, 0],
                opacity: [0, 0.7, 0],
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

          {/* Scan line */}
          <motion.div
            className="absolute left-0 right-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,70,85,0.5), rgba(200,80,192,0.3), transparent)',
              boxShadow: '0 0 20px rgba(255,70,85,0.2)'
            }}
            animate={{ top: ['-5%', '105%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          {/* === TITLE: MODO PHANTOM = MODO DIOS === */}
          <AnimatePresence>
            {showTitle && (
              <motion.div
                className="absolute top-[8%] sm:top-[10%] z-20 text-center px-4"
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, type: 'spring', stiffness: 80 }}
              >
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-[0.15em] uppercase"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(255,70,85,0.4), 0 0 30px rgba(255,70,85,0.2)',
                      '0 0 20px rgba(255,70,85,0.8), 0 0 60px rgba(255,70,85,0.4), 0 0 100px rgba(255,70,85,0.2)',
                      '0 0 10px rgba(255,70,85,0.4), 0 0 30px rgba(255,70,85,0.2)'
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-electric to-accent">
                    PHANTOM PROTOCOL
                  </span>
                  <span className="text-light/30 mx-2 sm:mx-3">=</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight via-accent to-highlight">
                    MODO DIOS
                  </span>
                </motion.h1>
                {/* Decorative line under title */}
                <motion.div
                  className="mt-2 sm:mt-3 mx-auto h-[1px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #FF4655, #FFD700, #FF4655, transparent)'
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* === PHANTOM WITH VANDAL - MAIN SVG SCENE === */}
          <motion.div
            className="relative z-10 w-[90vw] max-w-[700px] sm:max-w-[800px]"
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, type: 'spring', stiffness: 60, damping: 15 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg
                viewBox="0 0 700 500"
                className="w-full h-auto"
                fill="none"
                role="img"
                aria-label="Phantom Protocol - Ghost with Vandal rifle"
                style={{ shapeRendering: 'geometricPrecision' }}
              >
                <defs>
                  {/* Phantom body gradient */}
                  <linearGradient id="loadPhantomBody" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a0a10" />
                    <stop offset="40%" stopColor="#12081a" />
                    <stop offset="100%" stopColor="#0a0510" />
                  </linearGradient>
                  {/* Phantom cloak edge glow */}
                  <linearGradient id="loadCloakEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF4655" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#C850C0" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
                  </linearGradient>
                  {/* Eye glow */}
                  <radialGradient id="loadEyeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF4655" stopOpacity="1" />
                    <stop offset="60%" stopColor="#FF4655" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FF4655" stopOpacity="0" />
                  </radialGradient>
                  {/* Muzzle glow */}
                  <radialGradient id="loadMuzzleGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
                    <stop offset="40%" stopColor="#FF4655" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FF4655" stopOpacity="0" />
                  </radialGradient>
                  {/* Ground glow */}
                  <radialGradient id="loadGroundGlow" cx="50%" cy="0%" r="80%" fx="50%" fy="0%">
                    <stop offset="0%" stopColor="#FF4655" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FF4655" stopOpacity="0" />
                  </radialGradient>
                  {/* Rifle metal gradient */}
                  <linearGradient id="loadRifleMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a2e" />
                    <stop offset="50%" stopColor="#16162a" />
                    <stop offset="100%" stopColor="#0f0f20" />
                  </linearGradient>
                  {/* Glow filter */}
                  <filter id="loadGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {/* Heavy glow filter */}
                  <filter id="loadHeavyGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {/* Shadow filter */}
                  <filter id="loadShadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#FF4655" floodOpacity="0.3" />
                  </filter>
                </defs>

                {/* === GROUND EFFECT === */}
                <ellipse cx="330" cy="440" rx="280" ry="25" fill="url(#loadGroundGlow)" />
                <motion.line
                  x1="80" y1="435" x2="580" y2="435"
                  stroke="#FF4655" strokeWidth="1" opacity="0.2"
                  animate={{ opacity: [0.15, 0.35, 0.15] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Ground reflection dots */}
                {[120, 200, 280, 360, 440, 520].map((x, i) => (
                  <motion.circle
                    key={`ground-${i}`}
                    cx={x} cy={435} r="1.5"
                    fill="#FF4655"
                    animate={{ opacity: [0.1, 0.5, 0.1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}

                {/* === PHANTOM CLOAK / BODY === */}
                {/* Main body silhouette - hooded figure, side profile facing right */}
                <motion.path
                  d="
                    M310,65
                    C275,65 252,90 252,120
                    L248,135
                    L240,142
                    L232,185
                    L225,260
                    L215,370
                    C220,388 235,395 252,385
                    C265,378 278,388 290,395
                    C302,400 315,395 325,385
                    C338,378 350,388 362,395
                    C375,400 390,393 400,375
                    L388,260
                    L380,185
                    L372,142
                    L365,135
                    L360,120
                    C360,90 338,65 310,65
                    Z
                  "
                  fill="url(#loadPhantomBody)"
                  stroke="url(#loadCloakEdge)"
                  strokeWidth="1.5"
                  filter="url(#loadShadow)"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />

                {/* Inner cloak detail lines */}
                <motion.path
                  d="M270,160 L260,280 L248,370"
                  stroke="#FF4655" strokeWidth="0.5" opacity="0.15"
                  fill="none"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.path
                  d="M350,160 L358,280 L370,370"
                  stroke="#C850C0" strokeWidth="0.5" opacity="0.15"
                  fill="none"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />

                {/* === HOOD SHADOW / FACE VOID === */}
                <path
                  d="
                    M268,108
                    C268,85 288,72 310,72
                    C332,72 352,85 350,108
                    L345,125
                    L275,125
                    Z
                  "
                  fill="#050508"
                  opacity="0.9"
                />

                {/* === GLOWING EYES === */}
                {/* Right eye (visible, forward-facing side) */}
                <motion.circle
                  cx="325" cy="100" r="8"
                  fill="url(#loadEyeGlow)"
                  filter="url(#loadGlow)"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    r: [7, 9, 7]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <circle cx="325" cy="100" r="3.5" fill="#FF4655" />
                <circle cx="326" cy="99" r="1.2" fill="#fff" opacity="0.7" />

                {/* Left eye (slightly behind, dimmer) */}
                <motion.circle
                  cx="298" cy="100" r="7"
                  fill="url(#loadEyeGlow)"
                  filter="url(#loadGlow)"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    r: [6, 8, 6]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                />
                <circle cx="298" cy="100" r="3" fill="#FF4655" opacity="0.8" />
                <circle cx="299" cy="99" r="1" fill="#fff" opacity="0.5" />

                {/* Eye trail / scan line from eyes */}
                <motion.line
                  x1="335" y1="98" x2="420" y2="90"
                  stroke="#FF4655" strokeWidth="1" opacity="0.3"
                  strokeDasharray="4 6"
                  animate={{ opacity: [0, 0.4, 0], x2: [420, 450, 420] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />

                {/* === RIGHT ARM (forward, holding barrel/foregrip) === */}
                <path
                  d="
                    M360,135
                    L395,125
                    L438,115
                    L440,125
                    L395,133
                    L362,145
                    Z
                  "
                  fill="url(#loadPhantomBody)"
                  stroke="url(#loadCloakEdge)"
                  strokeWidth="0.8"
                />

                {/* === LEFT ARM (back, holding stock/grip area) === */}
                <path
                  d="
                    M248,135
                    L220,142
                    L198,150
                    L196,160
                    L218,152
                    L250,145
                    Z
                  "
                  fill="url(#loadPhantomBody)"
                  stroke="url(#loadCloakEdge)"
                  strokeWidth="0.8"
                />

                {/* === VANDAL RIFLE === */}
                {/* Stock (rear, wooden part) */}
                <path
                  d="M168,148 L198,142 L200,135 L202,158 L198,156 L168,158 Z"
                  fill="#1a1020"
                  stroke="#FF4655"
                  strokeWidth="0.5"
                  opacity="0.85"
                />

                {/* Receiver body (main part) */}
                <path
                  d="M198,132 L438,108 L440,120 L198,148 Z"
                  fill="url(#loadRifleMetal)"
                  stroke="#FF4655"
                  strokeWidth="0.6"
                  opacity="0.9"
                />

                {/* Trigger guard */}
                <path
                  d="M280,148 L282,162 C285,168 292,168 294,162 L296,148"
                  fill="none"
                  stroke="#FF4655"
                  strokeWidth="0.5"
                  opacity="0.5"
                />

                {/* Magazine (curved) */}
                <motion.path
                  d="M310,120 L314,158 C315,162 320,162 321,158 L318,120"
                  fill="#12081a"
                  stroke="#FF4655"
                  strokeWidth="0.5"
                  opacity="0.8"
                  animate={{ opacity: [0.7, 0.9, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Barrel (long) */}
                <path
                  d="M438,106 L548,86 L548,94 L438,118 Z"
                  fill="url(#loadRifleMetal)"
                  stroke="#FF4655"
                  strokeWidth="0.5"
                  opacity="0.85"
                />

                {/* Muzzle brake */}
                <path
                  d="M546,84 L572,78 L575,72 L578,78 L578,92 L575,98 L572,92 L546,96 Z"
                  fill="#0f0f20"
                  stroke="#FF4655"
                  strokeWidth="0.6"
                  opacity="0.9"
                />

                {/* Scope / Iron sight */}
                <path
                  d="M360,105 L400,98 L402,92 L405,92 L405,100 L400,106 L360,112 Z"
                  fill="#16162a"
                  stroke="#C850C0"
                  strokeWidth="0.4"
                  opacity="0.7"
                />
                {/* Scope lens glow */}
                <motion.circle
                  cx="403" cy="96" r="3"
                  fill="#C850C0"
                  opacity="0.3"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* === MUZZLE GLOW / FLASH === */}
                <motion.circle
                  cx="578" cy="85" r="15"
                  fill="url(#loadMuzzleGlow)"
                  filter="url(#loadHeavyGlow)"
                  animate={{
                    opacity: [0.2, 0.6, 0.2],
                    r: [12, 18, 12]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Muzzle smoke particles */}
                {smokeParticles.map((sp, i) => (
                  <motion.circle
                    key={`smoke-${i}`}
                    cx={sp.x} cy={sp.y} r={sp.size}
                    fill="#FF4655"
                    opacity="0.1"
                    animate={{
                      cx: [sp.x, sp.x + 40 + Math.random() * 30],
                      cy: [sp.y, sp.y - 20 - Math.random() * 20],
                      opacity: [0, 0.15, 0],
                      r: [sp.size, sp.size * 2, sp.size * 3]
                    }}
                    transition={{
                      duration: sp.duration,
                      repeat: Infinity,
                      delay: sp.delay,
                      ease: 'easeOut'
                    }}
                  />
                ))}

                {/* === GHOST TRAIL / AURA EFFECT === */}
                {/* Flowing energy from cape bottom */}
                <motion.path
                  d="M225,360 C220,380 210,400 200,420 C210,415 220,425 230,420"
                  stroke="#FF4655" strokeWidth="1" fill="none" opacity="0.2"
                  animate={{ opacity: [0.1, 0.3, 0.1], d: [
                    "M225,360 C220,380 210,400 200,420 C210,415 220,425 230,420",
                    "M225,360 C218,385 205,405 195,425 C208,418 222,428 232,422",
                    "M225,360 C220,380 210,400 200,420 C210,415 220,425 230,420"
                  ]}}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.path
                  d="M390,365 C395,385 405,405 415,425 C405,418 395,428 385,422"
                  stroke="#C850C0" strokeWidth="1" fill="none" opacity="0.2"
                  animate={{ opacity: [0.1, 0.25, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />

                {/* Phantom aura particles floating up from body */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.circle
                    key={`aura-${i}`}
                    cx={280 + i * 20}
                    cy={200}
                    r={2}
                    fill={i % 2 === 0 ? '#FF4655' : '#C850C0'}
                    animate={{
                      cy: [250 + Math.random() * 100, 100, 50],
                      opacity: [0, 0.5, 0],
                      cx: [280 + i * 20 + (Math.random() - 0.5) * 30, 280 + i * 20 + (Math.random() - 0.5) * 50, 280 + i * 20 + (Math.random() - 0.5) * 60]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: 'easeOut'
                    }}
                  />
                ))}

                {/* === GLITCH LINES on phantom === */}
                <motion.rect
                  x="260" y="180" width="90" height="2"
                  fill="#C850C0" opacity="0"
                  animate={{
                    opacity: [0, 0.6, 0],
                    x: [260, 265, 260],
                    width: [90, 80, 90]
                  }}
                  transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 4 }}
                />
                <motion.rect
                  x="255" y="250" width="100" height="1.5"
                  fill="#FFD700" opacity="0"
                  animate={{
                    opacity: [0, 0.5, 0],
                    x: [255, 250, 255]
                  }}
                  transition={{ duration: 0.12, repeat: Infinity, repeatDelay: 3.5, delay: 1.5 }}
                />

                {/* === CROSSHAIR at aim point (far right) === */}
                <motion.g
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <line x1="625" y1="75" x2="645" y2="75" stroke="#FF4655" strokeWidth="1" />
                  <line x1="635" y1="65" x2="635" y2="85" stroke="#FF4655" strokeWidth="1" />
                  <circle cx="635" cy="75" r="8" stroke="#FF4655" strokeWidth="0.8" fill="none" />
                  <circle cx="635" cy="75" r="2" fill="#FF4655" />
                </motion.g>

              </svg>
            </motion.div>
          </motion.div>

          {/* === LOADING INFO SECTION === */}
          <div className="relative z-10 flex flex-col items-center px-4 mt-2 sm:mt-4">
            {/* Status text */}
            <motion.div
              className="font-mono text-xs sm:text-sm text-accent/70 mb-4 sm:mb-5 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.span
                className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <span className="truncate max-w-[280px] sm:max-w-none tracking-wider">{statusText}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.div>

            {/* Progress bar */}
            <div className="w-60 sm:w-72 md:w-80 mb-3">
              <div className="h-1 sm:h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                <motion.div
                  className="h-full rounded-full relative"
                  style={{
                    background: 'linear-gradient(90deg, #FF4655, #C850C0, #FFD700)',
                    boxShadow: '0 0 20px rgba(255,70,85,0.5)'
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
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
              className="font-mono text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-electric"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(Math.min(progress, 100))}%
            </motion.div>
          </div>

          {/* === BOTTOM TAGLINE === */}
          <motion.div
            className="absolute bottom-4 sm:bottom-8 flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-light/20 font-mono tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-accent/30" />
            <span>SECURE • UNDETECTABLE • PHANTOM</span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-accent/30" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
