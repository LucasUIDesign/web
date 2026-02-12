'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Logo({ size = 'normal' }: { size?: 'small' | 'normal' | 'large' }) {
  const sizes = {
    small: { container: 36, text: 'text-lg', sub: 'text-[8px]' },
    normal: { container: 52, text: 'text-2xl', sub: 'text-[10px]' },
    large: { container: 72, text: 'text-4xl', sub: 'text-sm' }
  }

  const s = sizes[size]

  return (
    <Link href="/" className="cursor-pointer">
      <motion.div
        className="flex items-center gap-2 sm:gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.03 }}
      >
        {/* Logo Icon - Diamond/Shield shape */}
        <motion.div
          className="relative flex-shrink-0"
          style={{ width: s.container, height: s.container }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Outer glow pulse */}
          <motion.div
            className="absolute inset-[-4px] opacity-40 blur-md"
            style={{
              background: 'linear-gradient(135deg, #FF4655, #C850C0)',
              clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)'
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <svg
            viewBox="0 0 100 100"
            className="w-full h-full relative z-10"
            fill="none"
            role="img"
            aria-label="Phantom Protocol logo"
            style={{ shapeRendering: 'geometricPrecision' }}
          >
            <defs>
              <linearGradient id="logoEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF4655" />
                <stop offset="100%" stopColor="#C850C0" />
              </linearGradient>
              <linearGradient id="logoFill" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#141420" />
                <stop offset="100%" stopColor="#0A0A0F" />
              </linearGradient>
              <radialGradient id="logoEyeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF4655" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF4655" stopOpacity="0" />
              </radialGradient>
              <filter id="logoGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Hexagonal shield background */}
            <motion.polygon
              points="50,2 93,26 93,74 50,98 7,74 7,26"
              fill="url(#logoFill)"
              stroke="url(#logoEdge)"
              strokeWidth="2.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            />

            {/* Inner hex line */}
            <polygon
              points="50,10 85,30 85,70 50,90 15,70 15,30"
              fill="none"
              stroke="#FF4655"
              strokeWidth="0.5"
              opacity="0.15"
            />

            {/* Phantom hooded figure silhouette */}
            <path
              d="
                M50,18
                C38,18 28,28 28,42
                L27,48
                L25,52
                L24,62
                L22,78
                C23,82 26,83 30,81
                C34,79 37,82 40,84
                C43,86 47,84 50,81
                C53,84 57,86 60,84
                C63,82 66,79 70,81
                C74,83 77,82 78,78
                L76,62
                L75,52
                L73,48
                L72,42
                C72,28 62,18 50,18
                Z
              "
              fill="rgba(255,70,85,0.06)"
              stroke="url(#logoEdge)"
              strokeWidth="1.2"
            />

            {/* Hood inner shadow/void */}
            <path
              d="
                M36,38
                C36,28 42,22 50,22
                C58,22 64,28 64,38
                L62,48
                L38,48
                Z
              "
              fill="#050508"
              opacity="0.8"
            />

            {/* Left Eye */}
            <motion.circle
              cx="43" cy="38" r="4"
              fill="url(#logoEyeGlow)"
              filter="url(#logoGlow)"
              animate={{
                opacity: [0.6, 1, 0.6],
                r: [3.5, 4.5, 3.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="43" cy="38" r="2" fill="#FF4655" />

            {/* Right Eye */}
            <motion.circle
              cx="57" cy="38" r="4"
              fill="url(#logoEyeGlow)"
              filter="url(#logoGlow)"
              animate={{
                opacity: [0.6, 1, 0.6],
                r: [3.5, 4.5, 3.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <circle cx="57" cy="38" r="2" fill="#FF4655" />

            {/* Eye connection line (menacing) */}
            <motion.line
              x1="43" y1="38" x2="57" y2="38"
              stroke="#FF4655" strokeWidth="0.5" opacity="0.3"
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Vertical accent line through center */}
            <line
              x1="50" y1="50" x2="50" y2="70"
              stroke="#FF4655" strokeWidth="0.5" opacity="0.2"
            />

            {/* Small crosshair below eyes */}
            <g opacity="0.25">
              <line x1="47" y1="55" x2="53" y2="55" stroke="#FFD700" strokeWidth="0.5" />
              <line x1="50" y1="52" x2="50" y2="58" stroke="#FFD700" strokeWidth="0.5" />
            </g>

            {/* Corner accents on shield */}
            <line x1="50" y1="5" x2="50" y2="12" stroke="#FF4655" strokeWidth="1" opacity="0.4" />
            <line x1="50" y1="88" x2="50" y2="95" stroke="#FF4655" strokeWidth="1" opacity="0.4" />
          </svg>
        </motion.div>

        {/* Logo Text */}
        <div className="flex flex-col min-w-0">
          <motion.div
            className={`${s.text} font-display font-black leading-none tracking-tight`}
            animate={{
              textShadow: [
                '0 0 8px rgba(255,70,85,0.3)',
                '0 0 16px rgba(255,70,85,0.5), 0 0 30px rgba(255,70,85,0.2)',
                '0 0 8px rgba(255,70,85,0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-electric">
              PHANTOM
            </span>
          </motion.div>
          <div
            className={`${s.sub} font-display font-bold text-light/40 tracking-[0.25em] mt-0.5`}
          >
            PROTOCOL
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
