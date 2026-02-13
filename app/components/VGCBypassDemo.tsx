'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { translations, t, type Lang } from '../translations'

interface VGCBypassDemoProps {
  lang?: Lang
}

export default function VGCBypassDemo({ lang = 'es' }: VGCBypassDemoProps) {
  const [stage, setStage] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 5)
      setProgress(0)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100))
    }, 80)

    return () => clearInterval(progressTimer)
  }, [stage])

  const stagesData = translations.vgc.stages
  const colors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-yellow-500 to-orange-500',
    'from-green-500 to-emerald-500',
    'from-green-600 to-green-700',
  ]
  const icons = ['🔍', '🛡️', '🔐', '⚡', '✅']

  const currentColor = colors[stage]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-accent to-highlight text-white px-6 py-3 rounded-full text-sm font-bold mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t(translations.vgc.advancedTech, lang)}
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-display font-black text-light mb-6">
            {t(translations.vgc.title, lang)}
          </h2>
          <p className="text-xl text-highlight max-w-3xl mx-auto font-japanese">
            {t(translations.vgc.subtitle, lang)}
          </p>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="bento-card p-8 md:p-12 rounded-3xl">
            {/* Stage Display */}
            <motion.div
              key={stage}
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.div
                className="text-8xl mb-6"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 0.6 }}
              >
                {icons[stage]}
              </motion.div>
              <h3 className={`text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r ${currentColor} bg-clip-text text-transparent`}>
                {t(stagesData[stage].title, lang)}
              </h3>
              <p className="text-lg text-highlight">{t(stagesData[stage].description, lang)}</p>
            </motion.div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="bg-primary/50 rounded-full h-6 overflow-hidden border border-accent/30">
                <motion.div
                  className={`h-full bg-gradient-to-r ${currentColor} relative`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    animate={{ x: ['0%', '100%'] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    style={{ width: '50%' }}
                  />
                </motion.div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-highlight">
                <span>{t(translations.vgc.progress, lang)}</span>
                <span className="font-bold">{progress}%</span>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="bg-black/80 rounded-2xl p-6 font-mono text-sm border border-accent/20">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-gray-400">phantom-protocol.exe</span>
              </div>

              <div className="space-y-2 text-green-400">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stage >= 0 ? 1 : 0.3 }}
                >
                  <span className="text-blue-400">[INFO]</span> {t(translations.vgc.terminal.init, lang)}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stage >= 1 ? 1 : 0.3 }}
                >
                  <span className="text-yellow-400">[SCAN]</span> {t(translations.vgc.terminal.scan, lang)}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stage >= 2 ? 1 : 0.3 }}
                >
                  <span className="text-purple-400">[BYPASS]</span> {t(translations.vgc.terminal.bypass, lang)}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stage >= 3 ? 1 : 0.3 }}
                >
                  <span className="text-orange-400">[CRYPT]</span> {t(translations.vgc.terminal.crypt, lang)}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stage >= 4 ? 1 : 0.3 }}
                >
                  <span className="text-green-400">[SUCCESS]</span> {t(translations.vgc.terminal.success, lang)}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stage >= 4 ? 1 : 0.3 }}
                >
                  <span className="text-green-400">[READY]</span> {t(translations.vgc.terminal.ready, lang)}
                </motion.div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <motion.div
                className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-black text-success mb-1">0</div>
                <div className="text-xs text-highlight">Bans</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-black text-blue-400 mb-1">100%</div>
                <div className="text-xs text-highlight">Bypass</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-black text-accent mb-1">&lt;2s</div>
                <div className="text-xs text-highlight">{t(translations.vgc.injection, lang)}</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-black text-warning mb-1">24/7</div>
                <div className="text-xs text-highlight">Uptime</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bento-card p-6 rounded-2xl text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl mb-4">🔐</div>
            <h4 className="text-xl font-bold text-light mb-2">{t(translations.vgc.militaryEncryption, lang)}</h4>
            <p className="text-sm text-highlight">{t(translations.vgc.militaryEncryptionDesc, lang)}</p>
          </motion.div>
          <motion.div
            className="bento-card p-6 rounded-2xl text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl mb-4">⚡</div>
            <h4 className="text-xl font-bold text-light mb-2">{t(translations.vgc.autoUpdateTitle, lang)}</h4>
            <p className="text-sm text-highlight">{t(translations.vgc.autoUpdateDesc, lang)}</p>
          </motion.div>
          <motion.div
            className="bento-card p-6 rounded-2xl text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl mb-4">🛡️</div>
            <h4 className="text-xl font-bold text-light mb-2">{t(translations.vgc.signedDriver, lang)}</h4>
            <p className="text-sm text-highlight">{t(translations.vgc.signedDriverDesc, lang)}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
