'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Logo({ size = 'normal' }: { size?: 'small' | 'normal' | 'large' }) {
  const sizes = {
    small: { container: 40, text: 'text-xl' },
    normal: { container: 60, text: 'text-3xl' },
    large: { container: 80, text: 'text-4xl' }
  }

  const currentSize = sizes[size]

  return (
    <Link href="/" className="cursor-pointer">
      <motion.div
        className="flex items-center space-x-2 sm:space-x-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
      {/* Logo Icon */}
      <motion.div
        className="relative flex-shrink-0"
        style={{ width: currentSize.container, height: currentSize.container }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-50 blur-md"
          style={{ background: 'linear-gradient(135deg, #00FFD1, #7B61FF, #00B4D8)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Main circle */}
        <div className="absolute inset-0 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0A1628, #050A0E)',
            border: '2px solid rgba(0,255,209,0.5)',
            boxShadow: '0 0 15px rgba(0,255,209,0.2), inset 0 0 15px rgba(0,255,209,0.05)'
          }}
        >
          {/* Inner design - Phantom ghost */}
          <svg
            viewBox="0 0 100 100"
            className="w-3/4 h-3/4"
            fill="none"
            role="img"
            aria-label="Phantom Protocol logo"
          >
            {/* Ghost outline */}
            <motion.path
              d="M50 20 C35 20, 25 30, 25 45 C25 55, 28 65, 35 70 L35 80 L42 75 L50 80 L58 75 L65 80 L65 70 C72 65, 75 55, 75 45 C75 30, 65 20, 50 20 Z"
              stroke="url(#phantomLogoGrad)"
              strokeWidth="2"
              fill="rgba(0, 255, 209, 0.08)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Eyes */}
            <motion.circle
              cx="40"
              cy="45"
              r="5"
              fill="#00FFD1"
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.circle
              cx="60"
              cy="45"
              r="5"
              fill="#00FFD1"
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Glitch lines */}
            <motion.line
              x1="30" y1="35" x2="45" y2="35"
              stroke="#7B61FF"
              strokeWidth="1"
              animate={{
                opacity: [0, 1, 0],
                x1: [30, 32, 30],
                x2: [45, 43, 45]
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
            <motion.line
              x1="55" y1="35" x2="70" y2="35"
              stroke="#00B4D8"
              strokeWidth="1"
              animate={{
                opacity: [0, 1, 0],
                x1: [55, 57, 55],
                x2: [70, 68, 70]
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 0.15
              }}
            />

            <defs>
              <linearGradient id="phantomLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFD1" />
                <stop offset="50%" stopColor="#7B61FF" />
                <stop offset="100%" stopColor="#00B4D8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Rotating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              background: i === 0 ? '#00FFD1' : i === 1 ? '#7B61FF' : '#00B4D8',
              boxShadow: `0 0 4px ${i === 0 ? '#00FFD1' : i === 1 ? '#7B61FF' : '#00B4D8'}`
            }}
            animate={{
              x: [0, Math.cos(i * 120 * Math.PI / 180) * 35, 0],
              y: [0, Math.sin(i * 120 * Math.PI / 180) * 35, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Logo Text */}
      <div className="flex flex-col min-w-0">
        <motion.div
          className={`${currentSize.text} font-display font-black leading-none`}
          animate={{
            textShadow: [
              '0 0 10px rgba(0,255,209,0.4)',
              '0 0 20px rgba(0,255,209,0.6), 0 0 30px rgba(0,255,209,0.3)',
              '0 0 10px rgba(0,255,209,0.4)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-electric">
            PHANTOM
          </span>
        </motion.div>
        <motion.div
          className={`${size === 'small' ? 'text-[10px]' : size === 'large' ? 'text-lg' : 'text-sm'} font-display font-bold text-light/50 tracking-[0.2em]`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          PROTOCOL
        </motion.div>
      </div>
    </motion.div>
    </Link>
  )
}
