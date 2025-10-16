'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: "@ValoPro_ES",
    text: "Honestamente no esperaba que funcionara tan bien. Llevo 3 semanas usándolo y mi aim ha mejorado muchísimo, parece natural.",
    rating: 5,
    avatar: "🎯",
    verified: true,
    rank: "Radiant",
    timeAgo: "hace 4 días"
  },
  {
    id: 2,
    name: "@JettMain2025",
    text: "Al principio tenía miedo de que me banearan, pero después de 2 meses sin problemas ya confío totalmente. El soporte responde súper rápido.",
    rating: 5,
    avatar: "⚡",
    verified: true,
    rank: "Immortal 3",
    timeAgo: "hace 1 semana"
  },
  {
    id: 3,
    name: "@SageCarry",
    text: "Lo compré hace como 5 meses y cero problemas. El wallhack es sutil, no es obvio como otros que he probado antes.",
    rating: 5,
    avatar: "🔮",
    verified: true,
    rank: "Immortal 1",
    timeAgo: "hace 3 días"
  },
  {
    id: 4,
    name: "@DuelistKing",
    text: "Subí de Plata 2 a Diamante 1 en como un mes. Mis amigos piensan que mejoré jugando mucho jaja, si supieran...",
    rating: 5,
    avatar: "👑",
    verified: true,
    rank: "Diamond 2",
    timeAgo: "hace 6 días"
  },
  {
    id: 5,
    name: "@PhoenixFire",
    text: "Me gusta que se adapta a como juego. No es como esos cheats obvios que te hacen ver sospechoso. Muy recomendado.",
    rating: 5,
    avatar: "🔥",
    verified: true,
    rank: "Ascendant 3",
    timeAgo: "hace 2 días"
  },
  {
    id: 6,
    name: "@CypherHack",
    text: "Mejor compra que he hecho este año. Vale cada dólar, en serio. Mi winrate subió un montón desde que lo uso.",
    rating: 5,
    avatar: "🕵️",
    verified: true,
    rank: "Immortal 2",
    timeAgo: "hace 5 días"
  }
]

const liveActivity = [
  "🇺🇸 Alex acaba de comprar LIFETIME Plan",
  "🇲🇽 Miguel está usando Phantom Protocol ahora",
  "🇦🇷 Sofia ganó 8 partidas seguidas con PRO",
  "🇨🇱 Diego activó Wallhack - subió a Diamond",
  "🇵🇪 Ana subió a Immortal usando ELITE",
  "🇨🇴 Luis compró STARTER Plan",
  "🇺🇾 Maria dominó en Ascent con ESP",
  "🇪🇨 Pedro activó Aimbot - 30 kills",
  "🇧🇷 João compró PRO Plan",
  "🇪🇸 Carlos subió 3 rangos con ELITE",
  "🇨🇦 Emma ganó torneo usando Phantom",
  "🇫🇷 Pierre activó Anti-Detección"
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
          className="bg-gradient-to-r from-accent/10 to-highlight/10 rounded-xl p-6 mb-16 border border-accent/30 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <motion.div 
                className="w-4 h-4 bg-success rounded-full mr-3"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-base font-bold text-light">Actividad en Tiempo Real:</span>
            </div>
            <motion.div
              key={currentActivity}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="text-base text-success font-medium"
            >
              {liveActivity[currentActivity]}
            </motion.div>
          </div>
          <div className="mt-3 text-xs text-highlight/70">
            ⚡ Actualizaciones cada 3 segundos • {activeUsers.toLocaleString()} usuarios conectados
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
                    {testimonial.timeAgo}
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
          <motion.a
            href="#pricing"
            className="inline-block bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-lg text-xl neon-border cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            OBTENER PHANTOM PROTOCOL AHORA
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}