'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface StatusModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function StatusModal({ isOpen, onClose }: StatusModalProps) {
  const services = [
    { name: 'Phantom Protocol', status: 'online', uptime: '99.98%', ping: '12ms' },
    { name: 'VGC Bypass System', status: 'online', uptime: '99.95%', ping: '8ms' },
    { name: 'Offset Auto-Update', status: 'online', uptime: '100%', ping: '5ms' },
    { name: 'License Server', status: 'online', uptime: '99.99%', ping: '15ms' }
  ]

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-start justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-2xl bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl border-2 border-accent/40 shadow-2xl mb-20"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - FUERA del padding para que sea más visible */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-[10000] w-12 h-12 bg-gradient-to-br from-danger to-red-600 hover:from-red-600 hover:to-danger rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-2xl hover:scale-110 border-4 border-primary"
            aria-label="Cerrar modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                className="inline-flex items-center gap-3 bg-success text-white px-6 py-3 rounded-full text-sm font-bold mb-6"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(16, 185, 129, 0.3)',
                    '0 0 40px rgba(16, 185, 129, 0.6)',
                    '0 0 20px rgba(16, 185, 129, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                TODOS LOS SISTEMAS OPERATIVOS
              </motion.div>
              
              <h2 className="text-3xl font-display font-black text-light mb-4">
                Estado del Sistema
              </h2>
              <p className="text-base text-highlight">
                Phantom Protocol está 100% operativo e indetectable
              </p>
            </div>

            {/* Maintenance Notice */}
            <motion.div
              className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-4 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">ℹ️</div>
                <div>
                  <h3 className="text-base font-bold text-blue-300 mb-1">
                    Política de Mantenimiento
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Cualquier mantenimiento será notificado con <span className="font-bold text-white">30 minutos de anticipación</span> en Discord.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="bento-card p-4 rounded-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-light">{service.name}</h3>
                    <div className="flex items-center gap-2 bg-success/20 border border-success/50 rounded-full px-2 py-1">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      <span className="text-success text-xs font-bold">ONLINE</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-primary/30 rounded-lg p-2">
                      <p className="text-xs text-highlight mb-1">Uptime</p>
                      <p className="text-sm font-bold text-success">{service.uptime}</p>
                    </div>
                    <div className="bg-primary/30 rounded-lg p-2">
                      <p className="text-xs text-highlight mb-1">Latencia</p>
                      <p className="text-sm font-bold text-light">{service.ping}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Summary */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-success/20 to-success/10 border border-success/30 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">✅</div>
                <div className="text-xl font-black text-success mb-1">99.97%</div>
                <div className="text-xs text-highlight">Uptime Global</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 border border-blue-500/30 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-xl font-black text-blue-400 mb-1">11ms</div>
                <div className="text-xs text-highlight">Latencia</div>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">🛡️</div>
                <div className="text-xl font-black text-accent mb-1">0</div>
                <div className="text-xs text-highlight">Bans</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}