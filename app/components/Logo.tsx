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
        className="flex items-center space-x-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
      {/* Logo Icon */}
      <motion.div 
        className="relative"
        style={{ width: currentSize.container, height: currentSize.container }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-50 blur-md"
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-full border-2 border-red-500 flex items-center justify-center">
          {/* Inner design - Phantom skull/ghost */}
          <svg 
            viewBox="0 0 100 100" 
            className="w-3/4 h-3/4"
            fill="none"
          >
            {/* Skull outline */}
            <motion.path
              d="M50 20 C35 20, 25 30, 25 45 C25 55, 28 65, 35 70 L35 80 L42 75 L50 80 L58 75 L65 80 L65 70 C72 65, 75 55, 75 45 C75 30, 65 20, 50 20 Z"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="rgba(255, 46, 46, 0.1)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            
            {/* Eyes */}
            <motion.circle 
              cx="40" 
              cy="45" 
              r="5" 
              fill="#FF2E2E"
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
              fill="#FF2E2E"
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
              stroke="#00D4FF"
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
              stroke="#00D4FF"
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
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF2E2E" />
                <stop offset="50%" stopColor="#B026FF" />
                <stop offset="100%" stopColor="#00D4FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Rotating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              top: '50%',
              left: '50%',
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
      <div className="flex flex-col">
        <motion.div 
          className={`${currentSize.text} font-futuristic font-black leading-none`}
          animate={{
            textShadow: [
              '0 0 10px #FF2E2E',
              '0 0 20px #FF2E2E, 0 0 30px #FF2E2E',
              '0 0 10px #FF2E2E'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
            PHANTOM
          </span>
        </motion.div>
        <motion.div 
          className={`${size === 'small' ? 'text-xs' : size === 'large' ? 'text-lg' : 'text-sm'} font-futuristic font-bold text-gray-400 tracking-widest`}
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