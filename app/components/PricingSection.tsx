'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import CheckoutModal from './CheckoutModal'
import { translations, t, type Lang } from '../translations'

interface PricingSectionProps {
  lang?: Lang
}

export default function PricingSection({ lang = 'es' }: PricingSectionProps) {
  const pT = translations.pricing

  const plans = [
    {
      name: "STARTER",
      price: 15,
      originalPrice: 25,
      duration: t(pT.plans.starter.duration, lang),
      features: pT.plans.starter.features[lang],
      color: "from-accent to-highlight",
      borderColor: "border-accent/30",
      popular: false,
      note: t(pT.plans.starter.note, lang),
      savings: "40",
      perDay: "2.14"
    },
    {
      name: "PRO",
      price: 30,
      originalPrice: 50,
      duration: t(pT.plans.pro.duration, lang),
      features: pT.plans.pro.features[lang],
      color: "from-highlight to-accent",
      borderColor: "border-highlight/40",
      popular: true,
      note: t(pT.plans.pro.note, lang),
      savings: "40",
      perDay: "1.00",
      bonus: t(pT.plans.pro.bonus, lang)
    },
    {
      name: "ELITE",
      price: 85,
      originalPrice: 150,
      duration: t(pT.plans.elite.duration, lang),
      features: pT.plans.elite.features[lang],
      color: "from-electric to-accent",
      borderColor: "border-electric/40",
      popular: false,
      note: t(pT.plans.elite.note, lang),
      savings: "43",
      perDay: "0.23",
      badge: t(pT.plans.elite.badge, lang),
      bonus: t(pT.plans.elite.bonus, lang)
    },
    {
      name: "LIFETIME",
      price: 200,
      originalPrice: 400,
      duration: t(pT.plans.lifetime.duration, lang),
      features: pT.plans.lifetime.features[lang],
      color: "from-highlight via-accent to-electric",
      borderColor: "border-highlight/40",
      popular: false,
      note: t(pT.plans.lifetime.note, lang),
      badge: t(pT.plans.lifetime.badge, lang),
      savings: "50",
      perDay: "0"
    }
  ]

  const recentPurchases = pT.recentPurchases[lang] as readonly { user: string; plan: string; time: string; country: string }[]

  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  })

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null)
  const [recentPurchase, setRecentPurchase] = useState<{ user: string; plan: string; time: string; country: string } | null>(null)
  const [showPurchaseNotif, setShowPurchaseNotif] = useState(false)

  const handleBuyNow = (plan: typeof plans[0]) => {
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
        return { hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Recent purchase notifications
  useEffect(() => {
    const showRandomPurchase = () => {
      const randomPurchase = recentPurchases[Math.floor(Math.random() * recentPurchases.length)]
      setRecentPurchase(randomPurchase)
      setShowPurchaseNotif(true)
      setTimeout(() => setShowPurchaseNotif(false), 4000)
    }

    const initialTimeout = setTimeout(showRandomPurchase, 5000)
    const interval = setInterval(showRandomPurchase, Math.random() * 10000 + 12000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [recentPurchases])

  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Recent Purchase Notification */}
      <AnimatePresence>
        {showPurchaseNotif && recentPurchase && (
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            className="fixed left-4 bottom-4 sm:left-6 sm:bottom-6 z-50 bg-primary/90 backdrop-blur-xl border border-success/30 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-2xl max-w-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center text-xl">
                {recentPurchase.country}
              </div>
              <div>
                <p className="text-light font-bold text-sm">
                  {recentPurchase.user} {t(pT.purchased, lang)} {recentPurchase.plan}
                </p>
                <p className="text-success text-xs font-medium">
                  {recentPurchase.time}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
          >
            <span className="text-accent font-medium text-sm sm:text-base">{t(pT.accessPlans, lang)}</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black mb-4 sm:mb-6 leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-light to-highlight">
              {t(pT.chooseYour, lang)}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
              {t(pT.advantage, lang)}
            </span>
          </h2>

          <p className="text-light/60 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            {t(pT.subtitle, lang)}
          </p>

          {/* Timer - subtle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-accent/5 border border-accent/20 rounded-2xl p-4 sm:p-6 inline-block backdrop-blur-sm"
          >
            <p className="text-light/70 font-medium text-sm sm:text-base mb-3">
              {t(pT.promoEnds, lang)}
            </p>
            <div className="flex justify-center items-center gap-2 sm:gap-4 text-2xl sm:text-3xl md:text-4xl font-black">
              <div className="text-center bg-primary/60 rounded-xl px-3 sm:px-4 py-2 min-w-[60px] sm:min-w-[75px]">
                <div className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-highlight">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs text-light/50 font-medium mt-1">HRS</div>
              </div>
              <div className="text-accent/50">:</div>
              <div className="text-center bg-primary/60 rounded-xl px-3 sm:px-4 py-2 min-w-[60px] sm:min-w-[75px]">
                <div className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-highlight">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs text-light/50 font-medium mt-1">MIN</div>
              </div>
              <div className="text-accent/50">:</div>
              <div className="text-center bg-primary/60 rounded-xl px-3 sm:px-4 py-2 min-w-[60px] sm:min-w-[75px]">
                <div className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-highlight">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs text-light/50 font-medium mt-1">SEG</div>
              </div>
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
              className={`relative ${plan.popular ? 'lg:scale-105 z-10' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent to-highlight text-primary px-6 py-2 rounded-full text-xs sm:text-sm font-black z-20 shadow-lg"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {t(pT.mostChosen, lang)}
                </motion.div>
              )}

              {/* Badge */}
              {plan.badge && !plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-highlight to-electric text-white px-5 py-2 rounded-full text-xs font-black z-20 shadow-lg"
                >
                  {plan.badge}
                </motion.div>
              )}

              <motion.div
                className={`bento-card border ${plan.borderColor} rounded-3xl relative overflow-hidden h-full`}
                whileHover={{
                  y: -6,
                  boxShadow: plan.popular
                    ? '0 25px 50px rgba(255, 70, 85, 0.2)'
                    : '0 20px 40px rgba(255, 70, 85, 0.1)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-5 sm:p-6 lg:p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-display font-black text-light mb-3 sm:mb-4">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-light to-highlight">
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
                            {t(pT.save, lang)} {plan.savings}%
                          </span>
                        </div>
                      )}

                      <p className="text-highlight/80 font-medium">
                        {plan.duration}
                      </p>

                      {plan.perDay !== "0" && (
                        <p className="text-light/50 text-xs sm:text-sm mt-1">
                          ${plan.perDay}{t(pT.perDay, lang)}
                        </p>
                      )}

                      <p className="text-accent text-xs sm:text-sm font-medium mt-2">
                        {plan.note}
                      </p>

                      {plan.bonus && (
                        <div className="mt-3 bg-success/10 border border-success/30 rounded-xl px-3 py-2 text-xs sm:text-sm">
                          <p className="text-success font-medium">{plan.bonus}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-6 sm:mb-8">
                    <ul className="space-y-2 sm:space-y-3">
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
                          <span className="font-medium text-sm sm:text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handleBuyNow(plan)}
                    className={`w-full bg-gradient-to-r ${plan.color} text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg text-sm sm:text-base`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {t(pT.getAccessBtn, lang)}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {[
            {
              icon: "🛡️",
              title: t(pT.guarantees.undetectable.title, lang),
              description: t(pT.guarantees.undetectable.desc, lang)
            },
            {
              icon: "⚡",
              title: t(pT.guarantees.instant.title, lang),
              description: t(pT.guarantees.instant.desc, lang)
            },
            {
              icon: "🔄",
              title: t(pT.guarantees.freeUpdates.title, lang),
              description: t(pT.guarantees.freeUpdates.desc, lang)
            }
          ].map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center bg-gradient-to-br from-accent/5 to-highlight/5 border border-accent/15 rounded-2xl p-6 sm:p-8"
              whileHover={{ y: -4, borderColor: 'rgba(255, 70, 85, 0.4)' }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/15 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl sm:text-3xl">
                {guarantee.icon}
              </div>
              <h4 className="font-display font-bold text-light text-base sm:text-lg mb-2">
                {guarantee.title}
              </h4>
              <p className="text-light/60 font-medium text-xs sm:text-sm">
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
