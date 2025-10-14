'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface StatusModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function StatusModal({ isOpen, onClose }: StatusModalProps) {
  const [activeTab, setActiveTab] = useState<'status' | 'security'>('status')

  const services = [
    { name: 'Phantom Protocol Cheat', status: 'online', uptime: '99.98%', ping: '12ms' },
    { name: 'VGC Bypass System', status: 'online', uptime: '99.95%', ping: '8ms' },
    { name: 'Offset Auto-Update', status: 'online', uptime: '100%', ping: '5ms' },
    { name: 'License Server', status: 'online', uptime: '99.99%', ping: '15ms' },
    { name: 'Payment Gateway', status: 'online', uptime: '99.97%', ping: '20ms' },
    { name: 'Discord Bot', status: 'online', uptime: '99.92%', ping: '18ms' }
  ]

  const securityFeatures = [
    {
      icon: '🛡️',
      title: 'VGC Bypass Avanzado',
      description: 'Sistema multicapa que neutraliza Vanguard completamente',
      status: 'ACTIVO'
    },
    {
      icon: '🔐',
      title: 'Ofuscación de Memoria',
      description: 'Encriptación AES-256 + XOR dinámico en tiempo real',
      status: 'ACTIVO'
    },
    {
      icon: '⚡',
      title: 'Offsets Auto-Update',
      description: 'Actualización automática cada 30 minutos post-patch',
      status: 'ACTIVO'
    },
    {
      icon: '🎯',
      title: 'Kernel Driver Firmado',
      description: 'Driver certificado con firma digital válida',
      status: 'ACTIVO'
    },
    {
      icon: '🌐',
      title: 'Spoofer Integrado',
      description: 'HWID, MAC, Serial, Volume ID spoofing',
      status: 'ACTIVO'
    },
    {
      icon: '🔬',
      title: 'Anti-Screenshot',
      description: 'Bloquea capturas de pantalla del cheat',
      status: 'ACTIVO'
    }
  ]

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1a1625] via-[#2d1b3d] to-[#1a1625] rounded-3xl border-2 border-accent/30 shadow-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-red-600/20 hover:bg-red-600/40 rounded-full border border-red-500/50 transition-all hover:scale-110"
          >
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6"
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
                ALL SYSTEMS OPERATIONAL
              </motion.div>
              
              <h2 className="text-5xl font-display font-black text-light mb-4">
                System Status
              </h2>
              <p className="text-xl text-highlight font-japanese">
                Todos nuestros servicios están 100% operativos e indetectables
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-8 justify-center">
              <motion.button
                onClick={() => setActiveTab('status')}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  activeTab === 'status'
                    ? 'bg-gradient-to-r from-accent to-highlight text-white'
                    : 'bg-primary/50 text-light/60 hover:text-light'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📊 Estado de Servicios
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('security')}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  activeTab === 'security'
                    ? 'bg-gradient-to-r from-accent to-highlight text-white'
                    : 'bg-primary/50 text-light/60 hover:text-light'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🛡️ Seguridad & Bypass
              </motion.button>
            </div>

            {/* Status Tab */}
            {activeTab === 'status' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {/* Maintenance Notice */}
                <motion.div
                  className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-2 border-blue-500/50 rounded-2xl p-6 mb-6"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">ℹ️</div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-300 mb-2">
                        Política de Mantenimiento
                      </h3>
                      <p className="text-blue-200 mb-2">
                        Cualquier mantenimiento programado será notificado con <span className="font-bold text-white">30 minutos de anticipación</span> en nuestro Discord oficial.
                      </p>
                      <p className="text-sm text-blue-300">
                        📢 Únete a nuestro Discord para recibir notificaciones en tiempo real
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      className="bento-card p-6 rounded-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-light">{service.name}</h3>
                        <motion.div
                          className="flex items-center gap-2 bg-green-900/30 border border-green-500/50 rounded-full px-4 py-2"
                          animate={{ 
                            boxShadow: [
                              '0 0 0px rgba(16, 185, 129, 0)',
                              '0 0 15px rgba(16, 185, 129, 0.5)',
                              '0 0 0px rgba(16, 185, 129, 0)'
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-green-400 rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span className="text-green-400 text-sm font-bold uppercase">Online</span>
                        </motion.div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/50 rounded-lg p-3">
                          <p className="text-xs text-highlight mb-1">Uptime</p>
                          <p className="text-xl font-bold text-success">{service.uptime}</p>
                        </div>
                        <div className="bg-primary/50 rounded-lg p-3">
                          <p className="text-xs text-highlight mb-1">Latencia</p>
                          <p className="text-xl font-bold text-light">{service.ping}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats Summary */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <div className="text-3xl font-black text-success mb-1">99.97%</div>
                    <div className="text-sm text-highlight">Uptime Global</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">⚡</div>
                    <div className="text-3xl font-black text-blue-400 mb-1">13ms</div>
                    <div className="text-sm text-highlight">Latencia Promedio</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">🛡️</div>
                    <div className="text-3xl font-black text-accent mb-1">0</div>
                    <div className="text-sm text-highlight">Bans Reportados</div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Main Security Banner */}
                <motion.div
                  className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-2 border-accent/50 rounded-2xl p-8 text-center"
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(139, 92, 246, 0.2)',
                      '0 0 60px rgba(139, 92, 246, 0.4)',
                      '0 0 30px rgba(139, 92, 246, 0.2)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-6xl mb-4">🛡️</div>
                  <h3 className="text-3xl font-black text-light mb-3">
                    100% INDETECTABLE
                  </h3>
                  <p className="text-xl text-highlight mb-4">
                    Nuestro sistema de seguridad multicapa garantiza 0% de detección
                  </p>
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                      <span className="text-success font-bold">VGC Bypass Activo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                      <span className="text-success font-bold">Offsets Actualizados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                      <span className="text-success font-bold">0 Bans</span>
                    </div>
                  </div>
                </motion.div>

                {/* Security Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {securityFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      className="bento-card p-6 rounded-2xl"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">{feature.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-light">{feature.title}</h4>
                            <span className="bg-success/20 border border-success/50 text-success text-xs font-bold px-3 py-1 rounded-full">
                              {feature.status}
                            </span>
                          </div>
                          <p className="text-sm text-highlight">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Technical Details */}
                <motion.div
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-accent/30 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-light mb-4 flex items-center gap-3">
                    <span>🔬</span>
                    Detalles Técnicos del Bypass
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-success">✓</span>
                        <span className="text-light">Kernel-mode driver firmado digitalmente</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-success">✓</span>
                        <span className="text-light">Inyección manual mapping avanzada</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-success">✓</span>
                        <span className="text-light">Ofuscación de strings en tiempo real</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-success">✓</span>
                        <span className="text-light">Anti-debugging multicapa</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-success">✓</span>
                        <span className="text-light">Encriptación AES-256 + XOR dinámico</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-success">✓</span>
                        <span className="text-light">Bypass de integrity checks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-success">✓</span>
                        <span className="text-light">Spoofer HWID integrado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-success">✓</span>
                        <span className="text-light">Auto-update de offsets post-patch</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Update Schedule */}
                <motion.div
                  className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-2 border-warning/50 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">⚡</div>
                    <div>
                      <h3 className="text-xl font-bold text-warning mb-2">
                        Sistema de Actualización Automática
                      </h3>
                      <p className="text-light/80 mb-3">
                        Nuestros offsets se actualizan automáticamente cada 30 minutos después de cada patch de VALORANT.
                      </p>
                      <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-highlight">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-success">●</span>
                          <span>Última actualización: Hace 12 minutos</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-success">●</span>
                          <span>Próxima verificación: En 18 minutos</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-success">●</span>
                          <span>Versión del juego: 8.11.0.2345678</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
