'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import CheckoutModal from './CheckoutModal'

const plans = [
  {
    name: "STARTER",
    price: 15,
    originalPrice: 49,
    duration: "7 días",
    features: [
      "Aimbot Básico",
      "Wallhack Estándar",
      "ESP Básico",
      "Soporte Discord",
      "Actualizaciones",
      "Guía de instalación"
    ],
    color: "from-accent/80 to-highlight/80",
    borderColor: "border-accent/50",
    popular: false,
    stock: 12,
    note: "Prueba el poder",
    savings: "69",
    perDay: "2.14"
  },
  {
    name: "PRO",
    price: 30,
    originalPrice: 89,
    duration: "30 días",
    features: [
      "Aimbot Avanzado + Prediction",
      "Wallhack Inteligente 360°",
      "ESP Completo + Radar",
      "Soporte Prioritario VIP",
      "Configs Pro Pre-instaladas",
      "Auto-Update + HWID Spoofer",
      "Anti-Screenshot Protection"
    ],
    color: "from-highlight to-accent",
    borderColor: "border-highlight",
    popular: true,
    stock: 3,
    note: "Más vendido HOY",
    savings: "66",
    perDay: "1.00",
    bonus: "🎁 Config pack valorado en $25"
  },
  {
    name: "ELITE",
    price: 85,
    originalPrice: 299,
    duration: "365 días",
    features: [
      "🔥 TODO lo de PRO",
      "IA Predictiva Anti-Recoil",
      "Triggerbot + RCS Avanzado",
      "Stream-Proof Mode",
      "Config Remota (cambios en vivo)",
      "Soporte dedicado 24/7",
      "Beta Features + Early Access",
      "HWID Spoofer Premium Lifetime",
      "Garantía Anti-Ban Extendida"
    ],
    color: "from-electric to-accent",
    borderColor: "border-electric",
    popular: false,
    stock: 1,
    note: "ÚLTIMO CUPO - Lista de espera: 47",
    savings: "72",
    perDay: "0.23",
    badge: "OFERTA RELÁMPAGO",
    bonus: "🎁 HWID Spoofer ($149) + 3 configs PRO"
  },
  {
    name: "LIFETIME",
    price: 199,
    originalPrice: 999,
    duration: "De por vida",
    features: [
      "♾️ ACCESO PERPETUO",
      "TODO incluido para siempre",
      "Actualizaciones de por vida",
      "Nuevos productos gratis",
      "Soporte premium ilimitado",
      "Invitaciones beta exclusivas",
      "Sistema de referidos VIP",
      "Licencia transferible 1x",
      "Garantía Anti-Ban total"
    ],
    color: "from-success via-accent to-electric",
    borderColor: "border-success",
    popular: false,
    stock: 0,
    note: "VENDIDO - Próximo restock: 12h",
    badge: "LISTA DE ESPERA",
    savings: "80",
    perDay: "0",
    bonus: "🎁 HWID Spoofer + TODOS los futuros productos",
    waitlist: true
  }
]

// Fake recent purchases para prueba social
const recentPurchases = [
  { user: "Miguel R.", plan: "PRO", time: "hace 2 min", country: "🇲🇽" },
  { user: "Carlos L.", plan: "ELITE", time: "hace 5 min", country: "🇦🇷" },
  { user: "Juan P.", plan: "PRO", time: "hace 8 min", country: "🇨🇴" },
  { user: "Diego M.", plan: "STARTER", time: "hace 12 min", country: "🇪🇸" },
  { user: "Alex V.", plan: "ELITE", time: "hace 15 min", country: "🇨🇱" },
  { user: "Pablo S.", plan: "PRO", time: "hace 18 min", country: "🇵🇪" },
]

export default function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 32
  })

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null)
  const [activeViewers, setActiveViewers] = useState(147)
  const [recentPurchase, setRecentPurchase] = useState<typeof recentPurchases[0] | null>(null)
  const [showPurchaseNotif, setShowPurchaseNotif] = useState(false)
  const [moneyLostPerSecond] = useState(0.42)
  const [totalMoneyLost, setTotalMoneyLost] = useState(0)

  const handleBuyNow = (plan: typeof plans[0]) => {
    if (plan.waitlist) {
      // Para LIFETIME en waitlist, mostrar alerta diferente
      alert('🔥 LIFETIME AGOTADO - Únete a la lista de espera en Discord para el próximo restock')
      return
    }
    setSelectedPlan(plan)
    setIsCheckoutOpen(true)
  }

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 2, minutes: 59, seconds: 59 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Active viewers fluctuation (psych: FOMO)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveViewers(prev => {
        const change = Math.floor(Math.random() * 10) - 3
        return Math.max(120, Math.min(180, prev + change))
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Recent purchase notifications (psych: Social Proof)
  useEffect(() => {
    const showRandomPurchase = () => {
      const randomPurchase = recentPurchases[Math.floor(Math.random() * recentPurchases.length)]
      setRecentPurchase(randomPurchase)
      setShowPurchaseNotif(true)

      setTimeout(() => {
        setShowPurchaseNotif(false)
      }, 4000)
    }

    // Primera notificación después de 2 segundos
    const initialTimeout = setTimeout(showRandomPurchase, 2000)

    // Luego cada 8-15 segundos
    const interval = setInterval(() => {
      showRandomPurchase()
    }, Math.random() * 7000 + 8000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  // Money lost counter (psych: Loss Aversion)
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalMoneyLost(prev => prev + moneyLostPerSecond)
    }, 1000)
    return () => clearInterval(interval)
  }, [moneyLostPerSecond])

  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pulse effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-danger/5 via-transparent to-warning/5"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Recent Purchase Notification - Social Proof */}
      <AnimatePresence>
        {showPurchaseNotif && recentPurchase && (
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            className="fixed left-4 bottom-4 sm:left-6 sm:bottom-6 z-50 bg-gradient-to-r from-success/20 to-accent/20 backdrop-blur-xl border border-success/40 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-2xl max-w-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/30 rounded-full flex items-center justify-center text-xl">
                {recentPurchase.country}
              </div>
              <div>
                <p className="text-light font-bold text-sm">
                  {recentPurchase.user} compró {recentPurchase.plan}
                </p>
                <p className="text-success text-xs font-medium">
                  {recentPurchase.time} • Verificado ✓
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          {/* Live viewers badge (psych: FOMO + Social Proof) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-danger/20 border border-danger/40 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4"
          >
            <motion.div
              className="w-2 h-2 bg-danger rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-danger font-bold text-xs sm:text-sm">
              🔥 {activeViewers} personas viendo esta página AHORA
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
          >
            <span className="text-accent font-medium text-sm sm:text-base">⚡ VENTA FLASH - STOCK LIMITADO</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black mb-4 sm:mb-6 leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-light to-highlight">
              DOMINA O
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-danger via-warning to-accent">
              SIGUE PERDIENDO
            </span>
          </h2>

          {/* Loss Aversion - Dinero perdido */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-r from-danger/30 to-warning/30 border-2 border-danger/50 rounded-2xl p-4 sm:p-6 mb-6 inline-block backdrop-blur-sm"
          >
            <p className="text-light/80 text-xs sm:text-sm mb-2">
              💸 Dinero perdido en skins/RPs por perder partidas:
            </p>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-danger to-warning">
              ${totalMoneyLost.toFixed(2)}
            </div>
            <p className="text-danger text-xs sm:text-sm font-bold mt-2">
              Y sigue subiendo cada segundo que esperas...
            </p>
          </motion.div>

          {/* Urgency Timer - Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-r from-danger/20 to-warning/20 border-2 sm:border-4 border-danger/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 inline-block backdrop-blur-sm relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-danger/10 to-warning/10"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10">
              <p className="text-light font-black text-sm sm:text-base lg:text-xl mb-3 sm:mb-4 flex items-center justify-center gap-2">
                <span className="text-2xl">⚠️</span>
                DESCUENTO DEL 72% TERMINA EN:
              </p>
              <div className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                <div className="text-center bg-black/40 rounded-xl px-3 sm:px-4 py-2 sm:py-3 min-w-[70px] sm:min-w-[90px]">
                  <motion.div
                    className="text-transparent bg-clip-text bg-gradient-to-br from-danger to-warning"
                    key={timeLeft.hours}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(timeLeft.hours).padStart(2, '0')}
                  </motion.div>
                  <div className="text-[10px] sm:text-xs text-light/60 font-medium mt-1">HORAS</div>
                </div>
                <div className="text-danger animate-pulse">:</div>
                <div className="text-center bg-black/40 rounded-xl px-3 sm:px-4 py-2 sm:py-3 min-w-[70px] sm:min-w-[90px]">
                  <motion.div
                    className="text-transparent bg-clip-text bg-gradient-to-br from-danger to-warning"
                    key={timeLeft.minutes}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </motion.div>
                  <div className="text-[10px] sm:text-xs text-light/60 font-medium mt-1">MIN</div>
                </div>
                <div className="text-danger animate-pulse">:</div>
                <div className="text-center bg-black/40 rounded-xl px-3 sm:px-4 py-2 sm:py-3 min-w-[70px] sm:min-w-[90px]">
                  <motion.div
                    className="text-transparent bg-clip-text bg-gradient-to-br from-danger to-warning"
                    key={timeLeft.seconds}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </motion.div>
                  <div className="text-[10px] sm:text-xs text-light/60 font-medium mt-1">SEG</div>
                </div>
              </div>
              <p className="text-warning text-xs sm:text-sm font-bold mt-3 sm:mt-4">
                ⏰ Después vuelve al precio normal de $299
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.name === 'ELITE' ? 'lg:scale-110 z-20' : ''} ${plan.popular ? 'lg:scale-105 z-10' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent to-highlight text-primary px-6 py-2 rounded-full text-xs sm:text-sm font-black z-30 shadow-lg"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⭐ MÁS VENDIDO HOY
                </motion.div>
              )}

              {/* Limited Badge */}
              {plan.badge && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-danger to-warning text-white px-4 py-2 rounded-full text-xs font-black z-30 shadow-2xl border-2 border-white/20"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 20px rgba(255, 0, 0, 0.5)',
                      '0 0 40px rgba(255, 0, 0, 0.8)',
                      '0 0 20px rgba(255, 0, 0, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {plan.badge} ⚡
                </motion.div>
              )}

              {/* Stock indicator (psych: Scarcity) */}
              {plan.stock <= 5 && plan.stock > 0 && (
                <motion.div
                  className="absolute -top-3 -right-3 bg-danger text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-black text-sm sm:text-base z-30 border-4 border-primary shadow-2xl"
                  animate={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl">{plan.stock}</div>
                    <div className="text-[8px] leading-none">LEFT</div>
                  </div>
                </motion.div>
              )}

              {/* SOLD OUT badge */}
              {plan.stock === 0 && (
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-br from-light to-highlight text-primary rounded-full px-4 py-2 font-black text-xs z-30 shadow-2xl border-2 border-primary"
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  AGOTADO
                </motion.div>
              )}

              <motion.div
                className={`bento-card border-2 ${plan.borderColor} rounded-3xl relative overflow-hidden h-full ${plan.name === 'ELITE' ? 'border-4 shadow-2xl' : ''}`}
                style={{
                  boxShadow: plan.name === 'ELITE'
                    ? '0 0 60px rgba(123, 97, 255, 0.4), 0 0 120px rgba(0, 255, 209, 0.2)'
                    : undefined
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: plan.name === 'ELITE'
                    ? '0 0 80px rgba(123, 97, 255, 0.6), 0 0 150px rgba(0, 255, 209, 0.3)'
                    : plan.popular
                    ? '0 25px 50px rgba(0, 255, 209, 0.3)'
                    : '0 20px 40px rgba(0, 255, 209, 0.15)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient border for ELITE */}
                {plan.name === 'ELITE' && (
                  <motion.div
                    className="absolute inset-0 opacity-50 rounded-3xl"
                    style={{
                      background: 'linear-gradient(45deg, #7B61FF, #00FFD1, #7B61FF)',
                      backgroundSize: '200% 200%'
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                )}

                <div className="p-5 sm:p-6 lg:p-8 h-full flex flex-col relative z-10 bg-primary/80 backdrop-blur-sm rounded-3xl">
                  {/* Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className={`text-xl sm:text-2xl lg:text-3xl font-display font-black text-light mb-3 sm:mb-4 ${plan.name === 'ELITE' ? 'text-transparent bg-clip-text bg-gradient-to-r from-electric via-accent to-electric' : ''}`}>
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className={`text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${plan.name === 'ELITE' ? 'from-electric via-accent to-electric' : 'from-light to-highlight'}`}>
                          ${plan.price}
                        </span>
                        {plan.originalPrice && (
                          <div className="text-left">
                            <div className="text-xl sm:text-2xl text-danger line-through font-bold relative">
                              ${plan.originalPrice}
                              <motion.div
                                className="absolute -inset-1 bg-danger/20 -z-10 blur-md"
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {plan.savings && (
                        <motion.div
                          className="inline-flex items-center gap-1 bg-success/30 border-2 border-success/60 rounded-full px-3 sm:px-4 py-1 sm:py-2 mb-2"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="text-success text-sm sm:text-base font-black">
                            AHORRAS {plan.savings}% (${plan.originalPrice - plan.price})
                          </span>
                        </motion.div>
                      )}

                      <p className="text-highlight/90 font-bold text-base sm:text-lg mb-1">
                        {plan.duration}
                      </p>

                      {plan.perDay !== "0" && (
                        <p className="text-accent text-xs sm:text-sm font-medium">
                          Solo ${plan.perDay}/día
                        </p>
                      )}

                      <p className={`${plan.stock <= 5 && plan.stock > 0 ? 'text-danger animate-pulse' : plan.stock === 0 ? 'text-warning' : 'text-success'} text-xs sm:text-sm font-bold mt-2`}>
                        {plan.note}
                      </p>

                      {/* Bonus */}
                      {plan.bonus && (
                        <motion.div
                          className="mt-3 bg-gradient-to-r from-success/20 to-accent/20 border border-success/40 rounded-xl px-3 py-2 text-xs sm:text-sm"
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <p className="text-success font-bold">
                            {plan.bonus}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-6 sm:mb-8">
                    <ul className="space-y-2 sm:space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-2 sm:gap-3 text-light/90"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.05 }}
                        >
                          <svg
                            className="w-5 h-5 text-success mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium text-xs sm:text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handleBuyNow(plan)}
                    disabled={plan.stock === 0 && !plan.waitlist}
                    className={`w-full ${
                      plan.waitlist
                        ? 'bg-gradient-to-r from-warning to-danger'
                        : plan.stock === 0
                        ? 'bg-gray-600 cursor-not-allowed opacity-50'
                        : `bg-gradient-to-r ${plan.color}`
                    } text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 shadow-2xl relative overflow-hidden group text-sm sm:text-base`}
                    whileHover={plan.stock > 0 || plan.waitlist ? { scale: 1.03, y: -2 } : {}}
                    whileTap={plan.stock > 0 || plan.waitlist ? { scale: 0.98 } : {}}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="flex items-center justify-center gap-2 relative z-10">
                      {plan.waitlist ? (
                        <>UNIRSE A LISTA DE ESPERA</>
                      ) : plan.stock === 0 ? (
                        <>AGOTADO</>
                      ) : (
                        <>
                          {plan.stock <= 5 ? '🔥 ' : ''}
                          COMPRAR AHORA
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Urgency message debajo del botón */}
                  {plan.stock > 0 && plan.stock <= 5 && (
                    <motion.p
                      className="text-danger text-xs sm:text-sm font-bold text-center mt-3"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ⚠️ Solo quedan {plan.stock} licencias
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-accent/10 to-highlight/10 border border-accent/30 rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-success to-accent mb-2">
                10,847
              </div>
              <p className="text-light/70 font-medium text-xs sm:text-sm">Usuarios activos</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight mb-2">
                99.2%
              </div>
              <p className="text-light/70 font-medium text-xs sm:text-sm">Satisfacción</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-highlight to-electric mb-2">
                0
              </div>
              <p className="text-light/70 font-medium text-xs sm:text-sm">Bans reportados</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-electric to-success mb-2">
                24/7
              </div>
              <p className="text-light/70 font-medium text-xs sm:text-sm">Soporte VIP</p>
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {[
            {
              icon: "🛡️",
              title: "Garantía Anti-Ban",
              description: "0% detección o reembolso 100%"
            },
            {
              icon: "⚡",
              title: "Activación Inmediata",
              description: "Acceso en menos de 60 segundos"
            },
            {
              icon: "🔄",
              title: "Updates Automáticos",
              description: "Siempre compatible con Vanguard"
            }
          ].map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center bg-gradient-to-br from-accent/5 to-highlight/5 border border-accent/20 rounded-2xl p-6 sm:p-8"
              whileHover={{ y: -5, borderColor: 'rgba(0, 255, 209, 0.5)' }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl sm:text-4xl">
                {guarantee.icon}
              </div>
              <h4 className="font-display font-black text-light text-base sm:text-lg lg:text-xl mb-2">
                {guarantee.title}
              </h4>
              <p className="text-light/70 font-medium text-xs sm:text-sm lg:text-base">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA - Last chance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-danger/20 via-warning/20 to-danger/20 border-2 border-danger/40 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-danger/5 to-warning/5"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% 200%' }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-light mb-4">
              ¿Todavía pensándolo?
            </h3>
            <p className="text-light/80 text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              Mientras dudas, otros ya están dominando. El precio sube en{' '}
              <span className="text-danger font-black">{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
            </p>
            <motion.a
              href="#pricing"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-danger to-warning text-white font-black py-5 px-10 rounded-2xl text-lg sm:text-xl shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              VER PLANES AHORA
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Checkout Modal */}
      {selectedPlan && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          plan={selectedPlan}
        />
      )}
    </section>
  )
}
