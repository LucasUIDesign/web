'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HeroSection() {
  const [activeUsers] = useState(1847)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-dark" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(123, 44, 191, 0.8) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-light/80 font-medium">Sistema 100% Operativo</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-7xl md:text-8xl lg:text-9xl font-display font-black mb-6 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-light to-highlight">
              DOMINA
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-light">
              VALORANT
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl text-light/90 font-medium mb-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Software de Entrenamiento de Nivel Profesional
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-highlight/70 mb-12 max-w-3xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Asistencia de Puntería • Overlay Táctico • Análisis Avanzado • Sistema Indetectable
          </motion.p>

          {/* CTA Section */}
          <motion.div
            className="flex flex-col items-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* Urgency Badge */}
            <div className="bg-gradient-to-r from-danger/20 to-warning/20 border border-danger/40 rounded-2xl px-8 py-4 backdrop-blur-sm">
              <p className="text-light font-bold text-lg">
                ⚠️ Solo 23 licencias disponibles hoy
              </p>
            </div>

            {/* Main CTA */}
            <motion.a
              href="#pricing"
              className="group relative bg-gradient-to-r from-accent to-highlight hover:from-highlight hover:to-accent text-white font-display font-black py-6 px-12 rounded-2xl text-xl transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-3">
                OBTENER ACCESO AHORA
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-success to-success mb-2">
                99.9%
              </div>
              <div className="text-light/60 font-medium">Precisión de Entrenamiento</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight mb-2">
                10K+
              </div>
              <div className="text-light/60 font-medium">Usuarios Activos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-highlight to-light mb-2">
                24/7
              </div>
              <div className="text-light/60 font-medium">Soporte Técnico</div>
            </div>
          </motion.div>

          {/* Active Users */}
          <motion.div 
            className="flex items-center justify-center gap-3 text-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div 
              className="w-3 h-3 bg-success rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-medium">
              {activeUsers.toLocaleString()} jugadores activos ahora
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-3 bg-accent rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}