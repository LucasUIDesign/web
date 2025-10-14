'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const plans = [
  {
    name: "Bronze",
    price: 49.99,
    originalPrice: 79.99,
    features: [
      "Aimbot básico",
      "ESP estándar", 
      "7 días de garantía",
      "Soporte por email",
      "Actualizaciones básicas"
    ],
    color: "from-orange-600 to-orange-800",
    popular: false
  },
  {
    name: "Gold",
    price: 99.99,
    originalPrice: 149.99,
    features: [
      "Todo en Bronze +",
      "Wallhack avanzado",
      "Soporte 24/7",
      "Actualizaciones vitalicias",
      "Configuración personalizada",
      "Anti-detección mejorada"
    ],
    color: "from-yellow-500 to-yellow-700",
    popular: true
  },
  {
    name: "Platinum",
    price: 149.99,
    originalPrice: 299.99,
    features: [
      "Todo en Gold +",
      "Cheats de torneo",
      "IA personalizada",
      "Prioridad en soporte",
      "Acceso beta",
      "Configuración remota",
      "Garantía de por vida"
    ],
    color: "from-purple-600 to-purple-800",
    popular: false
  }
]

export default function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 42
  })
  
  const [licensesSold, setLicensesSold] = useState(83)

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
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const licenseTimer = setInterval(() => {
      if (Math.random() < 0.3 && licensesSold < 95) {
        setLicensesSold(prev => prev + 1)
      }
    }, 15000)

    return () => clearInterval(licenseTimer)
  }, [licensesSold])

  return (
    <section id="pricing" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header con urgencia */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-futuristic font-bold mb-6 glow-text">
            ELIGE TU PODER
          </h2>
          
          {/* Countdown Timer */}
          <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 mb-8 inline-block">
            <p className="text-red-300 font-bold text-lg mb-4">
              ⏰ OFERTA LIMITADA TERMINA EN:
            </p>
            <div className="flex justify-center space-x-4 text-3xl font-bold">
              <div className="text-center">
                <div className="countdown-digit">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">HORAS</div>
              </div>
              <div className="text-red-500">:</div>
              <div className="text-center">
                <div className="countdown-digit">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">MIN</div>
              </div>
              <div className="text-red-500">:</div>
              <div className="text-center">
                <div className="countdown-digit">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">SEG</div>
              </div>
            </div>
          </div>

          {/* Barra de progreso de licencias */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Licencias vendidas</span>
              <span>{licensesSold}% completado</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div 
                className="progress-bar h-3 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${licensesSold}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <p className="text-red-400 font-semibold mt-2">
              ¡Solo quedan {100 - licensesSold} licencias!
            </p>
          </div>
        </motion.div>

        {/* Planes de precios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative ${plan.popular ? 'md:scale-105 z-10' : ''}`}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold z-20"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 0px rgba(255, 46, 46, 0)',
                      '0 0 20px rgba(255, 46, 46, 0.5)',
                      '0 0 0px rgba(255, 46, 46, 0)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  MÁS POPULAR
                </motion.div>
              )}
              
              <motion.div 
                className={`bg-gradient-to-br ${plan.color} p-1 rounded-xl relative overflow-hidden`}
                whileHover={{
                  boxShadow: plan.popular 
                    ? '0 0 40px rgba(255, 46, 46, 0.6)' 
                    : '0 0 30px rgba(176, 38, 255, 0.4)'
                }}
              >
                {/* Animated border effect */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${plan.popular ? '#FF2E2E' : '#B026FF'}, transparent)`
                  }}
                  whileHover={{ opacity: 0.3, rotate: 360 }}
                  transition={{ duration: 2, ease: "linear" }}
                />

                <div className="bg-dark-card p-8 rounded-lg h-full relative z-10">
                  {/* Floating particles inside card */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-50"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${10 + i * 20}%`
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        x: [-5, 5, -5],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }}
                    />
                  ))}

                  <div className="text-center mb-8">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {plan.name}
                    </motion.h3>
                    <div className="mb-4">
                      <motion.span 
                        className="text-4xl font-bold text-white"
                        animate={{
                          textShadow: [
                            '0 0 5px rgba(255, 255, 255, 0.5)',
                            '0 0 10px rgba(255, 255, 255, 0.8)',
                            '0 0 5px rgba(255, 255, 255, 0.5)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ${plan.price}
                      </motion.span>
                      <span className="text-lg text-gray-400 line-through ml-2">${plan.originalPrice}</span>
                    </div>
                    <motion.div 
                      className="text-green-400 font-semibold"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Ahorras ${(plan.originalPrice - plan.price).toFixed(2)}
                    </motion.div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        whileHover={{ x: 5, color: '#ffffff' }}
                      >
                        <motion.svg 
                          className="w-5 h-5 text-green-400 mr-3" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </motion.svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <motion.button
                      className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 neon-border flex items-center justify-center relative overflow-hidden group`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.svg 
                        className="w-5 h-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </motion.svg>
                      <span className="relative z-10">Buy Now</span>
                    </motion.button>
                    
                    <motion.button
                      className="w-full bg-dark-bg hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg border border-gray-600 hover:border-yellow-500 transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
                      whileHover={{ 
                        scale: 1.02,
                        borderColor: '#EAB308'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.svg 
                        className="w-5 h-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/>
                      </motion.svg>
                      <span className="relative z-10">Bitcoin Payment</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Pop-up de urgencia */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="fixed bottom-4 right-4 bg-red-900 border border-red-500 rounded-lg p-4 max-w-sm z-50"
        >
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3" />
            <div>
              <p className="text-white font-semibold text-sm">¡ÚLTIMA OPORTUNIDAD!</p>
              <p className="text-red-300 text-xs">3 personas están viendo este plan ahora</p>
            </div>
          </div>
        </motion.div>

        {/* Garantías */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="font-bold text-white mb-2">100% Indetectable</h4>
            <p className="text-gray-400 text-sm">Garantía anti-ban o reembolso completo</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-bold text-white mb-2">Activación Instantánea</h4>
            <p className="text-gray-400 text-sm">Recibe tu licencia en menos de 10 minutos</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h4 className="font-bold text-white mb-2">Actualizaciones Gratis</h4>
            <p className="text-gray-400 text-sm">Siempre compatible con la última versión</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}