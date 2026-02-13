'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { translations, t, type Lang } from '../translations'

interface SocialProofProps {
  lang?: Lang
}

export default function SocialProof({ lang = 'es' }: SocialProofProps) {
  const [activeUsers, setActiveUsers] = useState(1247)
  const [currentActivity, setCurrentActivity] = useState(0)

  const testimonials = translations.social.testimonials[lang]
  const liveActivity = translations.social.liveActivities[lang]

  useEffect(() => {
    const userTimer = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2)
    }, 5000)

    const activityTimer = setInterval(() => {
      setCurrentActivity(prev => (prev + 1) % liveActivity.length)
    }, 3000)

    return () => {
      clearInterval(userTimer)
      clearInterval(activityTimer)
    }
  }, [liveActivity.length])

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-electric/5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 glow-text text-light">
            {t(translations.social.title, lang)}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-light/60 max-w-3xl mx-auto">
            {t(translations.social.subtitle, lang)}
          </p>
        </motion.div>

        {/* Estadísticas en tiempo real */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bento-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-10 sm:mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <motion.div
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2"
                key={activeUsers}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {activeUsers.toLocaleString()}
              </motion.div>
              <div className="text-light/50 text-xs sm:text-sm">{t(translations.social.activePlayers, lang)}</div>
              <div className="flex items-center justify-center mt-1 sm:mt-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse mr-1.5 sm:mr-2" />
                <span className="text-[10px] sm:text-xs text-accent">{t(translations.social.onlineNow, lang)}</span>
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight mb-1 sm:mb-2">10,247</div>
              <div className="text-light/50 text-xs sm:text-sm">{t(translations.social.matchesWon, lang)}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-electric mb-1 sm:mb-2">99.2%</div>
              <div className="text-light/50 text-xs sm:text-sm">{t(translations.social.satisfaction, lang)}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-success mb-1 sm:mb-2">0</div>
              <div className="text-light/50 text-xs sm:text-sm">{t(translations.social.bansReported, lang)}</div>
            </div>
          </div>
        </motion.div>

        {/* Actividad en vivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-accent/10 to-electric/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-10 sm:mb-16 border border-accent/20 backdrop-blur-sm"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center flex-shrink-0">
              <motion.div
                className="w-3 h-3 sm:w-4 sm:h-4 bg-success rounded-full mr-2 sm:mr-3"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm sm:text-base font-bold text-light">{t(translations.social.liveActivity, lang)}</span>
            </div>
            <motion.div
              key={currentActivity}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="text-sm sm:text-base text-success font-medium truncate max-w-full"
            >
              {liveActivity[currentActivity]}
            </motion.div>
          </div>
          <div className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-highlight/50">
            {t(translations.social.updatesEvery, lang)} • {activeUsers.toLocaleString()} {t(translations.social.usersConnected, lang)}
          </div>
        </motion.div>

        {/* Testimonios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bento-card rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden group"
              whileHover={{
                y: -5,
                boxShadow: '0 10px 30px rgba(255, 70, 85, 0.15)'
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-electric/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-accent rounded-full"
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
                <div className="flex items-center mb-3 sm:mb-4">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent/30 to-electric/30 rounded-full flex items-center justify-center text-lg sm:text-xl mr-3 sm:mr-4 relative border border-accent/20"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full border border-accent/30"
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
                  <div className="min-w-0">
                    <div className="flex items-center">
                      <span className="font-bold text-light text-sm sm:text-base truncate">
                        {testimonial.name}
                      </span>
                      <motion.span
                        className="ml-1.5 sm:ml-2 text-accent text-xs sm:text-sm"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✓
                      </motion.span>
                    </div>
                    <div className="text-xs sm:text-sm text-highlight/60">
                      {testimonial.rank}
                    </div>
                  </div>
                </div>

                <p className="text-light/70 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-warning text-xs sm:text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs text-light/30">
                    {testimonial.timeAgo}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-light mb-6 sm:mb-8">{t(translations.social.certifiedByExperts, lang)}</h3>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6">
            {[
              { text: "Anti-Cheat Bypass", color: "text-accent" },
              { text: "Vanguard Compatible", color: "text-highlight" },
              { text: "Tournament Tested", color: "text-electric" },
              { text: "Pro Player Approved", color: "text-warning" }
            ].map((cert, i) => (
              <div key={i} className="bento-card px-3 sm:px-5 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl">
                <span className={`${cert.color} font-semibold text-xs sm:text-sm`}>✓ {cert.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 sm:mt-16 text-center bg-gradient-to-r from-accent/10 to-electric/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-accent/20"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-light mb-3 sm:mb-4">
            {t(translations.social.readyToJoin, lang)}
          </h3>
          <p className="text-sm sm:text-base lg:text-xl text-light/60 mb-4 sm:mb-6">
            {t(translations.social.over10kPlayers, lang)}
          </p>
          <motion.a
            href="#pricing"
            className="inline-block font-display font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-sm sm:text-base lg:text-xl cursor-pointer text-primary"
            style={{
              background: 'linear-gradient(135deg, #FF4655, #FFD700)',
              boxShadow: '0 0 30px rgba(255,70,85,0.3)'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,70,85,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            {t(translations.social.ctaButton, lang)}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
