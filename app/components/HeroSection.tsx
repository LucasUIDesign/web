'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { translations, t, type Lang } from '../translations'

interface HeroSectionProps {
  lang?: Lang
}

export default function HeroSection({ lang = 'es' }: HeroSectionProps) {
  const [activeUsers] = useState(1847)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-dark" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 70, 85, 0.6) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Radial phantom glow */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(255,70,85,0.06) 0%, transparent 60%)'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
          >
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-light/80 font-medium text-xs sm:text-sm">{t(translations.hero.systemOperative, lang)}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black mb-4 sm:mb-6 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-light to-highlight">
              {t(translations.hero.headline1, lang)}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-light">
              {t(translations.hero.headline2, lang)}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-light/90 font-medium mb-3 sm:mb-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t(translations.hero.subtitle, lang)}
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-highlight/70 mb-8 sm:mb-12 max-w-3xl mx-auto font-body px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="hidden sm:inline">{t(translations.hero.featureListFull, lang)}</span>
            <span className="sm:hidden">{t(translations.hero.featureListShort, lang)}</span>
          </motion.p>

          {/* CTA Section */}
          <motion.div
            className="flex flex-col items-center gap-4 sm:gap-6 mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* Urgency Badge */}
            <div className="bg-gradient-to-r from-danger/20 to-warning/20 border border-danger/40 rounded-xl sm:rounded-2xl px-5 sm:px-8 py-3 sm:py-4 backdrop-blur-sm">
              <p className="text-light font-bold text-sm sm:text-base lg:text-lg">
                {t(translations.hero.licensesAvailable, lang)}
              </p>
            </div>

            {/* Main CTA */}
            <motion.a
              href="#pricing"
              className="group relative bg-gradient-to-r from-accent to-highlight hover:from-highlight hover:to-accent text-primary font-display font-black py-4 sm:py-5 lg:py-6 px-8 sm:px-10 lg:px-12 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2 sm:gap-3">
                {t(translations.hero.ctaButton, lang)}
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-success to-success mb-1 sm:mb-2">
                99.9%
              </div>
              <div className="text-light/60 font-medium text-[10px] sm:text-xs md:text-sm">{t(translations.hero.aimbotAccuracy, lang)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight mb-1 sm:mb-2">
                10K+
              </div>
              <div className="text-light/60 font-medium text-[10px] sm:text-xs md:text-sm">{t(translations.hero.activeUsers, lang)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-highlight to-light mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-light/60 font-medium text-[10px] sm:text-xs md:text-sm">{t(translations.hero.techSupport, lang)}</div>
            </div>
          </motion.div>

          {/* Active Users */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-3 text-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-success rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-medium text-sm sm:text-base">
              {activeUsers.toLocaleString()} {t(translations.hero.playersActive, lang)}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
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
