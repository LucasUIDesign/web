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
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-highlight/10" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Headline Principal */}
          <motion.h1 
            className="text-6xl md:text-9xl font-display font-black mb-8 leading-none tracking-tighter"
            animate={{ 
              textShadow: [
                '0 0 40px rgba(123, 44, 191, 0.5)',
                '0 0 80px rgba(199, 125, 255, 0.7)',
                '0 0 40px rgba(123, 44, 191, 0.5)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-light via-highlight to-accent">
              DOMINA
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-light">
              VALORANT
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-2xl md:text-3xl text-light/90 mb-6 font-japanese font-bold tracking-wide max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Cheats Indetectables de Nivel Élite
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl text-highlight/80 mb-12 font-body font-normal max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Aimbot Predictivo • Wallhack Inteligente • ESP Avanzado • 0 Bans Reportados
          </motion.p>

          {/* Escasez */}
          <motion.div 
            className="bg-gradient-to-r from-danger/20 to-warning/20 border-2 border-danger/50 rounded-2xl p-6 mb-8 inline-block backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-light font-black text-xl">
              ⚠️ Solo 23 licencias disponibles hoy
            </p>
          </motion.div>

          {/* CTA Principal */}
          <motion.a
            href="#pricing"
            className="group relative inline-block bg-gradient-to-r from-accent to-highlight hover:from-highlight hover:to-accent text-white font-display font-black py-7 px-20 rounded-2xl text-2xl transition-all duration-300 transform border-2 border-accent hover:border-light overflow-hidden shadow-2xl"
            whileHover={{ 
              boxShadow: '0 0 60px rgba(123, 44, 191, 0.8), 0 0 100px rgba(199, 125, 255, 0.5)',
              scale: 1.05 
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {/* Animated background pulse */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-highlight rounded-2xl blur-xl"
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            
            <span className="relative z-10 flex items-center gap-3">
              COMPRAR AHORA
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.a>

          {/* Contador de usuarios activos */}
          <motion.div 
            className="mt-10 flex items-center justify-center space-x-3 text-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div 
              className="w-4 h-4 bg-success rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-japanese font-bold text-lg">1,847 jugadores activos ahora</span>
          </motion.div>

          {/* Stats rápidos */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-4xl font-black text-light mb-2">99.9%</div>
              <div className="text-sm text-highlight font-japanese">Precisión</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-light mb-2">0</div>
              <div className="text-sm text-highlight font-japanese">Bans</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-light mb-2">24/7</div>
              <div className="text-sm text-highlight font-japanese">Soporte</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-accent rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}