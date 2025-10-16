'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import CheckoutModal from './CheckoutModal'

const plans = [
  {
    name: "STARTER",
    price: 15,
    originalPrice: 25,
    duration: "7 días",
    features: [
      "Aimbot Básico",
      "Wallhack Estándar",
      "ESP Básico",
      "Soporte Discord",
      "Actualizaciones",
      "Guía de instalación"
    ],
    color: "from-accent to-highlight",
    borderColor: "border-accent",
    popular: false,
    note: "Perfecto para empezar",
    savings: null
  },
  {
    name: "PRO",
    price: 30,
    originalPrice: 50,
    duration: "1 mes",
    features: [
      "Aimbot Avanzado",
      "Wallhack Inteligente",
      "ESP Completo",
      "Soporte Prioritario",
      "Configuración Personalizada",
      "Auto-Update",
      "Anti-Detección Básico"
    ],
    color: "from-highlight to-accent",
    borderColor: "border-highlight",
    popular: true,
    note: "Más elegido",
    savings: "42%"
  },
  {
    name: "ELITE",
    price: 90,
    originalPrice: 150,
    duration: "1 año",
    features: [
      "Todas las funciones PRO",
      "IA Predictiva",
      "Anti-Detección Avanzado",
      "Configuración Remota",
      "Soporte VIP 24/7",
      "Beta Access",
      "Spoofer Incluido",
      "Garantía Extendida"
    ],
    color: "from-secondary to-accent",
    borderColor: "border-secondary",
    popular: false,
    note: "Mejor valor anual",
    savings: "40%"
  },
  {
    name: "LIFETIME",
    price: 200,
    originalPrice: 400,
    duration: "De por vida",
    features: [
      "Acceso de por vida",
      "Todas las funciones ELITE",
      "Actualizaciones perpetuas",
      "Soporte premium ilimitado",
      "Acceso a nuevos productos",
      "Configuración dedicada",
      "Garantía total",
      "Prioridad máxima"
    ],
    color: "from-accent to-success",
    borderColor: "border-accent",
    popular: false,
    note: "Inversión única",
    badge: "MEJOR OFERTA",
    savings: "40%"
  }
]

export default function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  })
  
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null)

  const handleBuyNow = (plan: typeof plans[0]) => {
    setSelectedPlan(plan)
    setIsCheckoutOpen(true)
  }

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
        return { hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="pricing" className="py-32 px-8 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-3 mb-8"
          >
            <span className="text-accent font-medium">Planes de Acceso</span>
          </motion.div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-black mb-8 leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-light to-highlight">
              ELIGE TU
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-light">
              VENTAJA
            </span>
          </h2>

          {/* Urgency Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-r from-danger/20 to-warning/20 border-2 border-danger/40 rounded-2xl p-8 mb-12 inline-block backdrop-blur-sm"
          >
            <p className="text-light font-bold text-xl mb-4">
              ⏰ Oferta especial termina en:
            </p>
            <div className="flex justify-center items-center gap-6 text-4xl md:text-5xl font-black">
              <div className="text-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-danger to-warning">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-xs text-light/60 font-medium mt-1">HORAS</div>
              </div>
              <div className="text-danger">:</div>
              <div className="text-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-danger to-warning">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs text-light/60 font-medium mt-1">MIN</div>
              </div>
              <div className="text-danger">:</div>
              <div className="text-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-danger to-warning">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-light/60 font-medium mt-1">SEG</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:scale-105 z-10' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent to-highlight text-white px-6 py-2 rounded-full text-sm font-bold z-20 shadow-lg"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  MÁS POPULAR
                </motion.div>
              )}

              {/* Limited Badge */}
              {plan.badge && (
                <motion.div 
                  className="absolute -top-4 right-4 bg-gradient-to-r from-success to-success text-white px-4 py-2 rounded-full text-xs font-bold z-20 shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {plan.badge}
                </motion.div>
              )}
              
              <motion.div 
                className={`bento-card border-2 ${plan.borderColor} rounded-3xl relative overflow-hidden h-full`}
                whileHover={{ 
                  y: -8,
                  boxShadow: plan.popular 
                    ? '0 25px 50px rgba(123, 44, 191, 0.4)' 
                    : '0 20px 40px rgba(123, 44, 191, 0.2)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-display font-black text-light mb-4">
                      {plan.name}
                    </h3>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-light to-highlight">
                          ${plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-lg text-light/40 line-through">
                            ${plan.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      {plan.savings && (
                        <div className="inline-flex items-center gap-1 bg-success/20 border border-success/40 rounded-full px-3 py-1 mb-2">
                          <span className="text-success text-sm font-bold">
                            Ahorra {plan.savings}
                          </span>
                        </div>
                      )}
                      
                      <p className="text-highlight/80 font-medium">
                        {plan.duration}
                      </p>
                      
                      <p className="text-success text-sm font-medium mt-1">
                        {plan.note}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start gap-3 text-light/80"
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
                          <span className="font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handleBuyNow(plan)}
                    className={`w-full bg-gradient-to-r ${plan.color} text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Obtener Acceso
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "🛡️",
              title: "100% Indetectable",
              description: "Garantía anti-ban o reembolso completo"
            },
            {
              icon: "⚡",
              title: "Activación Instantánea",
              description: "Acceso inmediato tras el pago"
            },
            {
              icon: "🔄",
              title: "Actualizaciones Gratis",
              description: "Siempre compatible con la última versión"
            }
          ].map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                {guarantee.icon}
              </div>
              <h4 className="font-display font-bold text-light text-xl mb-2">
                {guarantee.title}
              </h4>
              <p className="text-light/60 font-medium">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
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