'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const features = [
  {
    id: 1,
    title: "Aimbot Predictivo",
    subtitle: "Precisión del 99.7%",
    description: "Nuestro algoritmo analiza 1,200 movimientos por segundo. Los enemigos no tendrán chance.",
    icon: "🎯",
    color: "from-red-500 to-red-700",
    demo: "aimbot"
  },
  {
    id: 2,
    title: "Wallhack Inteligente",
    subtitle: "Ve a través de todo",
    description: "Detecta enemigos a través de paredes con precisión milimétrica. Nunca más te pillarán desprevenido.",
    icon: "👁️",
    color: "from-blue-500 to-blue-700",
    demo: "wallhack"
  },
  {
    id: 3,
    title: "ESP Avanzado",
    subtitle: "Información en tiempo real",
    description: "Vida, armadura, armas y posición exacta de todos los jugadores. Domina el campo de batalla.",
    icon: "📡",
    color: "from-purple-500 to-purple-700",
    demo: "esp"
  },
  {
    id: 4,
    title: "IA Adaptativa",
    subtitle: "Aprende tu estilo",
    description: "Se adapta a tu forma de jugar para parecer completamente natural. Anti-detección garantizada.",
    icon: "🧠",
    color: "from-green-500 to-green-700",
    demo: "ai"
  },
  {
    id: 5,
    title: "Actualizaciones Automáticas",
    subtitle: "Siempre actualizado",
    description: "Nuestro sistema se actualiza automáticamente con cada parche de VALORANT. Sin interrupciones.",
    icon: "🔄",
    color: "from-yellow-500 to-yellow-700",
    demo: "updates"
  },
  {
    id: 6,
    title: "Soporte 24/7",
    subtitle: "Ayuda instantánea",
    description: "Equipo de expertos disponible las 24 horas. Configuración y soporte en menos de 5 minutos.",
    icon: "💬",
    color: "from-pink-500 to-pink-700",
    demo: "support"
  }
]

export default function BentoGrid() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const renderDemo = (type: string) => {
    switch (type) {
      case 'aimbot':
        return (
          <div className="relative w-full h-32 bg-black/50 rounded border overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-4 h-4 bg-red-500 rounded-full"
                animate={{
                  x: [0, 50, -30, 20, 0],
                  y: [0, -20, 30, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-8 h-8 border-2 border-red-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
            <div className="absolute top-2 left-2 text-xs text-red-400">AIMBOT ACTIVO</div>
          </div>
        )
      case 'wallhack':
        return (
          <div className="relative w-full h-32 bg-black/50 rounded border overflow-hidden">
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              <motion.div
                className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-3 h-3 bg-blue-500 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
            <div className="absolute top-2 left-2 text-xs text-blue-400">WALLHACK ACTIVO</div>
          </div>
        )
      case 'esp':
        return (
          <div className="relative w-full h-32 bg-black/50 rounded border overflow-hidden">
            <div className="absolute top-4 left-4 text-xs">
              <div className="text-green-400">JETT - 150HP</div>
              <div className="text-yellow-400">PHANTOM</div>
            </div>
            <div className="absolute bottom-4 right-4 text-xs">
              <div className="text-red-400">REYNA - 75HP</div>
              <div className="text-yellow-400">VANDAL</div>
            </div>
            <motion.div
              className="absolute inset-0 border border-purple-500/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        )
      default:
        return (
          <div className="w-full h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded border flex items-center justify-center">
            <motion.div
              className="text-4xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.div>
          </div>
        )
    }
  }

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-futuristic font-bold mb-6 glow-text">
            CARACTERÍSTICAS ÉLITE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnología de vanguardia que te dará la ventaja definitiva en VALORANT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group bg-gradient-to-br ${feature.color} p-1 rounded-xl cursor-pointer`}
              onMouseEnter={() => setActiveDemo(feature.demo)}
              onMouseLeave={() => setActiveDemo(null)}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-xl opacity-0 blur-lg"
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />

              <div className="bg-dark-card p-6 rounded-lg h-full relative z-10 overflow-hidden">
                {/* Background particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}

                <div className="flex items-center mb-4">
                  <motion.span 
                    className="text-3xl mr-3"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {feature.icon}
                  </motion.span>
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-white"
                      whileHover={{ x: 5 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-gray-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {feature.subtitle}
                    </motion.p>
                  </div>
                </div>
                
                <motion.p 
                  className="text-gray-300 mb-4 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {feature.description}
                </motion.p>

                {/* Demo interactiva */}
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeDemo === feature.demo ? 1 : 0,
                    height: activeDemo === feature.demo ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {activeDemo === feature.demo && renderDemo(feature.demo)}
                </motion.div>

                {/* Efecto de brillo en hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '100%', opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas impresionantes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-neon-red">99.7%</div>
            <div className="text-gray-400">Precisión Aimbot</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-neon-blue">0</div>
            <div className="text-gray-400">Detecciones</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-neon-purple">10,000+</div>
            <div className="text-gray-400">Usuarios Activos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">24/7</div>
            <div className="text-gray-400">Soporte</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}