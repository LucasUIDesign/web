'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: "@ValoPro_ES",
    text: "Gané mi primer torneo con Phantom Protocol. Nadie sospechó nada. El aimbot es increíblemente natural.",
    rating: 5,
    avatar: "🎯",
    verified: true,
    rank: "Radiant"
  },
  {
    id: 2,
    name: "@JettMain2025",
    text: "El soporte es increíble. Me ayudaron a configurar el Aimbot en menos de 5 minutos. 100% recomendado.",
    rating: 5,
    avatar: "⚡",
    verified: true,
    rank: "Immortal 3"
  },
  {
    id: 3,
    name: "@SageCarry",
    text: "Llevo 6 meses usando Phantom Protocol y nunca he tenido problemas. El wallhack es una ventaja brutal.",
    rating: 5,
    avatar: "🔮",
    verified: true,
    rank: "Immortal 1"
  },
  {
    id: 4,
    name: "@DuelistKing",
    text: "Pasé de Plata a Diamante en 2 semanas. El ESP me da información que otros jugadores ni sueñan tener.",
    rating: 5,
    avatar: "👑",
    verified: true,
    rank: "Diamond 2"
  },
  {
    id: 5,
    name: "@PhoenixFire",
    text: "La IA adaptativa es genial. Se ajusta a mi estilo de juego y parece completamente legítimo.",
    rating: 5,
    avatar: "🔥",
    verified: true,
    rank: "Ascendant 3"
  },
  {
    id: 6,
    name: "@CypherHack",
    text: "Mejor inversión que he hecho. El ROI en mis partidas ranked es increíble. Vale cada centavo.",
    rating: 5,
    avatar: "🕵️",
    verified: true,
    rank: "Immortal 2"
  }
]

const liveActivity = [
  "🇪🇸 Carlos acaba de comprar Gold Plan",
  "🇲🇽 Miguel está usando Aimbot ahora",
  "🇦🇷 Sofia ganó una partida ranked",
  "🇨🇱 Diego activó Wallhack",
  "🇵🇪 Ana subió a Immortal",
  "🇨🇴 Luis compró Platinum Plan",
  "🇺🇾 Maria está dominando en Bind",
  "🇪🇨 Pedro activó ESP avanzado"
]

export default function SocialProof() {
  const [activeUsers, setActiveUsers] = useState(1247)
  const [currentActivity, setCurrentActivity] = useState(0)

  useEffect(() => {
    // Simular usuarios activos cambiando
    const userTimer = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2)
    }, 5000)

    // Rotar actividad en vivo
    const activityTimer = setInterval(() => {
      setCurrentActivity(prev => (prev + 1) % liveActivity.length)
    }, 3000)

    return () => {
      clearInterval(userTimer)
      clearInterval(activityTimer)
    }
  }, [])

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-futuristic font-bold mb-6 glow-text">
            LO QUE DICEN NUESTROS USUARIOS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Miles de jugadores ya están dominando VALORANT con Phantom Protocol
          </p>
        </motion.div>

        {/* Estadísticas en tiempo real */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-dark-card rounded-xl p-8 mb-16 border border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div 
                className="text-4xl font-bold text-green-400 mb-2"
                key={activeUsers}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {activeUsers.toLocaleString()}
              </motion.div>
              <div className="text-gray-400">Jugadores Activos</div>
              <div className="flex items-center justify-center mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
                <span className="text-xs text-green-400">En línea ahora</span>
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">10,247</div>
              <div className="text-gray-400">Partidas Ganadas Hoy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.2%</div>
              <div className="text-gray-400">Tasa de Satisfacción</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">0</div>
              <div className="text-gray-400">Bans Reportados</div>
            </div>
          </div>
        </motion.div>

        {/* Actividad en vivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/50 rounded-lg p-4 mb-16 border border-gray-600"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3" />
              <span className="text-sm font-semibold text-gray-300">Actividad en Vivo:</span>
            </div>
            <motion.div
              key={currentActivity}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-sm text-green-400"
            >
              {liveActivity[currentActivity]}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-card rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 30px rgba(176, 38, 255, 0.3)'
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: `${10 + i * 20}%`
                  }}
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-xl mr-4 relative"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-purple-400"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div className="flex items-center">
                      <motion.span 
                        className="font-bold text-white"
                        whileHover={{ x: 3 }}
                      >
                        {testimonial.name}
                      </motion.span>
                      {testimonial.verified && (
                        <motion.span 
                          className="ml-2 text-blue-400"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ✓
                        </motion.span>
                      )}
                    </div>
                    <motion.div 
                      className="text-sm text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {testimonial.rank}
                    </motion.div>
                  </div>
                </div>

                <motion.p 
                  className="text-gray-300 mb-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonial.text}"
                </motion.p>

                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span 
                        key={i} 
                        className="text-yellow-400"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ 
                          scale: 1.3,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.3 }
                        }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                  <motion.span 
                    className="text-xs text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Hace 2 días
                  </motion.span>
                </div>
              </div>

              {/* Corner shine effect */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Certificaciones y badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Certificado por Expertos</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-800 px-6 py-3 rounded-lg border border-gray-600">
              <span className="text-green-400 font-semibold">✓ Anti-Cheat Bypass</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg border border-gray-600">
              <span className="text-blue-400 font-semibold">✓ Vanguard Compatible</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg border border-gray-600">
              <span className="text-purple-400 font-semibold">✓ Tournament Tested</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg border border-gray-600">
              <span className="text-yellow-400 font-semibold">✓ Pro Player Approved</span>
            </div>
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-red-900/30 to-purple-900/30 rounded-xl p-8 border border-red-500/50"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listo para Unirte a los Mejores?
          </h3>
          <p className="text-xl text-gray-300 mb-6">
            Más de 10,000 jugadores ya están dominando con Phantom Protocol
          </p>
          <motion.button
            className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-lg text-xl neon-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            OBTENER PHANTOM PROTOCOL AHORA
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}