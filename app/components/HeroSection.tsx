'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ParticleEffect from './ParticleEffect'

export default function HeroSection() {
  const [glitchText, setGlitchText] = useState('PHANTOM PROTOCOL')

  useEffect(() => {
    const interval = setInterval(() => {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
      const originalText = 'PHANTOM PROTOCOL'
      let glitched = ''
      
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          glitched += originalText[i]
        }
      }
      
      setGlitchText(glitched)
      
      setTimeout(() => setGlitchText(originalText), 100)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleEffect />
      
      {/* Fondo con efecto de niebla */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-red-900/20" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Headline Principal */}
          <motion.h1 
            className="text-5xl md:text-7xl font-futuristic font-bold mb-6 leading-tight"
            animate={{ 
              textShadow: [
                '0 0 10px rgba(139, 92, 246, 0.3)',
                '0 0 20px rgba(139, 92, 246, 0.5)',
                '0 0 10px rgba(139, 92, 246, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              DOMINA VALORANT
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
              CON {glitchText}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-4 font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Cheats Undetectables para Jugadores que Exigen Victoria
          </motion.p>

          <motion.p 
            className="text-base md:text-lg text-purple-300 mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Aimbot, Wallhack y ESP con IA adaptativa. Usado por +10,000 pros en torneos.
          </motion.p>

          {/* Escasez */}
          <motion.div 
            className="bg-red-900/30 border border-red-500 rounded-lg p-4 mb-8 inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            <p className="text-red-300 font-bold text-lg">
              ⚠️ Solo 47 licencias disponibles esta semana
            </p>
          </motion.div>

          {/* CTA Principal */}
          <motion.button
            className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-6 px-12 rounded-lg text-xl transition-all duration-300 transform neon-border overflow-hidden"
            whileHover={{ 
              boxShadow: '0 0 40px #FF2E2E, 0 0 60px rgba(255, 46, 46, 0.5)',
              scale: 1.05 
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {/* Animated background pulse */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-lg blur"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />

            {/* Particles around button */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: '50%',
                  left: '50%'
                }}
                animate={{
                  x: [0, Math.cos(i * 90 * Math.PI / 180) * 60, 0],
                  y: [0, Math.sin(i * 90 * Math.PI / 180) * 60, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
            
            <span className="relative z-10">QUIERO AHORA – Solo 3 cupos</span>
          </motion.button>

          {/* Contador de usuarios activos */}
          <motion.div 
            className="mt-8 flex items-center justify-center space-x-2 text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="font-semibold">1,247 jugadores activos ahora mismo</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-red rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}