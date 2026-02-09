'use client'

import { motion } from 'framer-motion'

const features = [
  {
    id: 1,
    title: "Aimbot Predictivo",
    subtitle: "Precisión del 99.7%",
    description: "Algoritmo avanzado que analiza 1,200 movimientos por segundo con predicción de trayectoria en tiempo real.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
    gradient: "from-[#00FFD1] to-[#00B4D8]",
    glowColor: "rgba(0,255,209,0.15)",
    stat: "99.7%",
    statLabel: "Precisión"
  },
  {
    id: 2,
    title: "Wallhack Inteligente",
    subtitle: "Visión sin límites",
    description: "Detección avanzada de posiciones a través de superficies con filtrado inteligente y mínimo impacto visual.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5v-2M12 21v-2M5 12H3M21 12h-2" strokeDasharray="2 2" />
      </svg>
    ),
    gradient: "from-[#7B61FF] to-[#00B4D8]",
    glowColor: "rgba(123,97,255,0.15)",
    stat: "360°",
    statLabel: "Cobertura"
  },
  {
    id: 3,
    title: "ESP Avanzado",
    subtitle: "Intel en tiempo real",
    description: "Overlay completo con vida, armadura, armas, distancia y predicción de movimiento de todos los jugadores.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="8" cy="10" r="1.5" fill="currentColor" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" />
        <path d="M5 7h3M16 7h3" strokeDasharray="1 1" />
      </svg>
    ),
    gradient: "from-[#00B4D8] to-[#00FFD1]",
    glowColor: "rgba(0,180,216,0.15)",
    stat: "12+",
    statLabel: "Data Points"
  },
  {
    id: 4,
    title: "IA Adaptativa",
    subtitle: "Comportamiento natural",
    description: "Motor de IA que aprende tu estilo de juego y adapta las asistencias para un rendimiento orgánico e indetectable.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M6 10v1a6 6 0 0012 0v-1" />
        <path d="M12 17v4M8 21h8" />
        <circle cx="10" cy="7" r="0.5" fill="currentColor" />
        <circle cx="14" cy="7" r="0.5" fill="currentColor" />
      </svg>
    ),
    gradient: "from-[#00FFD1] to-[#7B61FF]",
    glowColor: "rgba(0,255,209,0.12)",
    stat: "ML",
    statLabel: "Powered"
  },
  {
    id: 5,
    title: "Auto-Update Engine",
    subtitle: "Siempre actualizado",
    description: "Sistema de actualización silenciosa que se sincroniza automáticamente con cada parche sin interrupciones.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c-1.66 0-3-4.03-3-9s1.34-9 3-9m0 18c1.66 0 3-4.03 3-9s-1.34-9-3-9" />
        <path d="M3 12a9 9 0 019-9" />
      </svg>
    ),
    gradient: "from-[#7B61FF] to-[#00FFD1]",
    glowColor: "rgba(123,97,255,0.12)",
    stat: "0s",
    statLabel: "Downtime"
  },
  {
    id: 6,
    title: "Soporte Premium",
    subtitle: "Respuesta inmediata",
    description: "Equipo de expertos disponible 24/7. Setup guiado, configuración personalizada y resolución en minutos.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-[#00B4D8] to-[#7B61FF]",
    glowColor: "rgba(0,180,216,0.12)",
    stat: "24/7",
    statLabel: "Disponible"
  }
]

const stats = [
  { value: "99.9%", label: "Precisión Aimbot", gradient: "from-accent to-highlight" },
  { value: "0", label: "Bans Reportados", gradient: "from-success to-accent" },
  { value: "10K+", label: "Usuarios Activos", gradient: "from-highlight to-light" },
  { value: "24/7", label: "Soporte Técnico", gradient: "from-accent to-electric" }
]

export default function BentoGrid() {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="Características del producto">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-electric/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full" aria-hidden="true" />
            <span className="text-accent font-mono text-xs sm:text-sm tracking-wider uppercase">Tecnología Phantom</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-4 sm:mb-6 leading-[0.95]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-light via-light to-light/80">
              CARACTERÍSTICAS
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-electric">
              ÉLITE
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-light/50 max-w-2xl mx-auto font-body leading-relaxed">
            Herramientas de última generación diseñadas para darte la ventaja competitiva definitiva
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-16 sm:mb-20 lg:mb-24">
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <motion.div
                className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(11,26,43,0.8) 0%, rgba(5,10,14,0.9) 100%)',
                  border: '1px solid rgba(0,255,209,0.1)',
                }}
                whileHover={{
                  borderColor: 'rgba(0,255,209,0.35)',
                  boxShadow: `0 20px 50px ${feature.glowColor}, 0 0 30px ${feature.glowColor}`,
                  y: -4,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Top accent gradient line */}
                <div className={`h-[2px] w-full bg-gradient-to-r ${feature.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} aria-hidden="true" />

                <div className="p-5 sm:p-6 lg:p-7">
                  {/* Icon + Stat row */}
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] flex-shrink-0`}
                    >
                      <div className="w-full h-full rounded-xl bg-primary/80 flex items-center justify-center text-accent">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Stat badge */}
                    <div className="text-right">
                      <div className={`text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                        {feature.stat}
                      </div>
                      <div className="text-[10px] sm:text-xs text-light/40 font-mono uppercase tracking-wider">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title + Subtitle */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold text-light mb-1 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-accent/70 font-mono mb-3 sm:mb-4">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-light/50 leading-relaxed group-hover:text-light/65 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Bottom hover indicator */}
                  <div className="mt-4 sm:mt-5 flex items-center gap-2 text-accent/0 group-hover:text-accent/70 transition-all duration-300">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 group-hover:via-accent/40 transition-all duration-300" aria-hidden="true" />
                    <span className="text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(11,26,43,0.6) 0%, rgba(5,10,14,0.8) 100%)',
                  border: '1px solid rgba(0,255,209,0.08)',
                }}
              >
                <div className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-1 sm:mb-2`}>
                  {stat.value}
                </div>
                <div className="text-light/45 text-xs sm:text-sm font-mono tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
