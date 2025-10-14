'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import QRCode from './QRCode'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  plan: {
    name: string
    price: number
    duration: string
  }
}

export default function CheckoutModal({ isOpen, onClose, plan }: CheckoutModalProps) {
  const [step, setStep] = useState(1)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutos en segundos
  const [email, setEmail] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const btcAddress = "bc1ql0upf2d9xntcwzjrjx62j4h5vr09z62mcwwd6e"
  const btcAmount = (plan.price / 45000).toFixed(8)

  // Countdown timer
  useEffect(() => {
    if (!isOpen || step !== 1) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen, step])

  // Reset cuando se cierra
  useEffect(() => {
    if (!isOpen) {
      setStep(1)
      setTimeLeft(300)
      setEmail('')
      setTransactionId('')
      setSelectedFile(null)
      setPreviewUrl(null)
    }
  }, [isOpen])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setStep(3)
      setIsSubmitting(false)
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1a1625] to-[#0f0f1e] rounded-2xl border-2 border-purple-500/30 shadow-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-red-600/20 hover:bg-red-600/40 rounded-full border border-red-500/50 transition-colors"
          >
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {plan.name}
              </motion.div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Checkout Seguro
              </h2>
              <p className="text-gray-400">
                Completa tu compra de forma segura y anónima
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= s
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                    animate={step >= s ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {step > s ? '✓' : s}
                  </motion.div>
                  {s < 3 && (
                    <div className={`w-16 h-1 mx-2 ${step > s ? 'bg-green-500' : 'bg-gray-700'}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Payment Info */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                {/* Countdown Timer */}
                <motion.div
                  className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-2 border-red-500/50 rounded-xl p-6 mb-8"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(239, 68, 68, 0)',
                      '0 0 20px rgba(239, 68, 68, 0.5)',
                      '0 0 0px rgba(239, 68, 68, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-center">
                    <p className="text-red-300 font-semibold mb-2">⏰ Tiempo Limitado para Completar el Pago</p>
                    <div className="text-5xl font-black text-white mb-2">
                      {formatTime(timeLeft)}
                    </div>
                    <p className="text-sm text-gray-400">
                      El precio está garantizado por {formatTime(timeLeft)} minutos
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* QR Code */}
                  <motion.div
                    className="bg-gradient-to-br from-accent/20 to-highlight/20 rounded-xl p-6 border border-accent/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-bold text-light mb-2 text-center">
                      Escanea con tu Wallet Bitcoin
                    </h3>
                    <p className="text-center font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                      ₿ Bitcoin (BTC)
                    </p>
                    <QRCode value={`bitcoin:${btcAddress}?amount=${btcAmount}`} />
                    <p className="text-center text-sm text-light/60 mt-4">
                      Usa cualquier wallet Bitcoin
                    </p>
                  </motion.div>

                  {/* Payment Details */}
                  <div className="space-y-4">
                    {/* Amount */}
                    <motion.div
                      className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-xl p-6 border border-yellow-500/30"
                      whileHover={{ borderColor: '#eab308' }}
                    >
                      <label className="block text-sm font-bold text-yellow-400 mb-3 uppercase tracking-wider">
                        💰 Cantidad Exacta
                      </label>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-black/50 p-4 rounded-lg">
                          <code className="text-3xl font-bold block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                            {btcAmount} BTC
                          </code>
                          <span className="text-lg text-gray-400">≈ €{plan.price}</span>
                        </div>
                        <motion.button
                          onClick={() => copyToClipboard(btcAmount)}
                          className="bg-yellow-600 hover:bg-yellow-700 px-4 py-4 rounded-lg font-semibold"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          📋
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Address */}
                    <motion.div
                      className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-500/30"
                      whileHover={{ borderColor: '#10b981' }}
                    >
                      <label className="block text-sm font-bold text-green-400 mb-3 uppercase tracking-wider">
                        📍 Dirección Bitcoin
                      </label>
                      <div className="flex items-center gap-3">
                        <code className="flex-1 text-sm text-green-400 break-all font-mono bg-black/50 p-3 rounded-lg">
                          {btcAddress}
                        </code>
                        <motion.button
                          onClick={() => copyToClipboard(btcAddress)}
                          className="bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg font-semibold whitespace-nowrap"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          📋
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Security Badge */}
                    <motion.div
                      className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🛡️</span>
                        <div className="text-sm text-blue-200">
                          <p className="font-semibold mb-1">100% Seguro y Anónimo</p>
                          <p className="text-xs">Transacción encriptada. No guardamos datos personales.</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.button
                  onClick={() => setStep(2)}
                  className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-5 px-8 rounded-xl text-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    YA REALICÉ EL PAGO
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>
            )}

            {/* Step 2: Upload Proof */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Sube tu Comprobante de Pago
                  </h3>
                  <p className="text-gray-400">
                    Verifica tu transacción para recibir tu licencia
                  </p>
                </div>

                {/* Email */}
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
                  whileHover={{ borderColor: '#8b5cf6' }}
                >
                  <label className="block text-sm font-bold text-purple-400 mb-3 uppercase tracking-wider">
                    📧 Tu Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors text-lg"
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    ✅ Recibirás tu licencia y el archivo de descarga aquí
                  </p>
                </motion.div>

                {/* Transaction ID */}
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
                  whileHover={{ borderColor: '#8b5cf6' }}
                >
                  <label className="block text-sm font-bold text-purple-400 mb-3 uppercase tracking-wider">
                    🔗 ID de Transacción (Opcional)
                  </label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="Hash de la transacción Bitcoin"
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors font-mono text-sm"
                  />
                </motion.div>

                {/* File Upload */}
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border-2 border-dashed border-gray-600 hover:border-purple-500 transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <label className="block text-sm font-bold text-purple-400 mb-4 uppercase tracking-wider">
                    📸 Comprobante de Pago
                  </label>

                  {!previewUrl ? (
                    <label className="cursor-pointer block">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <div className="text-center py-12">
                        <motion.div
                          className="w-20 h-20 mx-auto mb-4 bg-purple-600/20 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </motion.div>
                        <p className="text-white font-semibold mb-2 text-lg">
                          Click para subir captura de pantalla
                        </p>
                        <p className="text-sm text-gray-400">
                          PNG, JPG o captura de tu wallet
                        </p>
                      </div>
                    </label>
                  ) : (
                    <div className="relative">
                      <img src={previewUrl} alt="Preview" className="w-full rounded-lg" />
                      <motion.button
                        onClick={() => {
                          setSelectedFile(null)
                          setPreviewUrl(null)
                        }}
                        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    </div>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={!email || !selectedFile || isSubmitting}
                  className={`w-full font-bold py-5 px-8 rounded-xl text-lg relative overflow-hidden ${
                    email && selectedFile && !isSubmitting
                      ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={email && selectedFile && !isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={email && selectedFile && !isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      VERIFICANDO...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      ENVIAR COMPROBANTE
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  )}
                </motion.button>
              </motion.div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  ¡Comprobante Recibido!
                </h3>

                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 mb-6 max-w-2xl mx-auto">
                  <p className="text-lg text-green-200 mb-4">
                    ✅ Tu pago está siendo verificado
                  </p>
                  <p className="text-gray-300 mb-4">
                    Si todo está correcto y el pago se confirma, recibirás tu licencia y el archivo de descarga en:
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 mb-4">
                    <code className="text-purple-400 font-mono text-lg">{email}</code>
                  </div>
                  <p className="text-sm text-gray-400">
                    ⏱️ Tiempo estimado: 5-15 minutos
                  </p>
                </div>

                {/* Security Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <motion.div
                    className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">🛡️</div>
                    <h4 className="font-bold text-white mb-2">100% Indetectable</h4>
                    <p className="text-sm text-gray-400">
                      Bypass completo de Vanguard y VGC
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">⚡</div>
                    <h4 className="font-bold text-white mb-2">Instalación Fácil</h4>
                    <p className="text-sm text-gray-400">
                      Ejecuta y juega en menos de 2 minutos
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">🔒</div>
                    <h4 className="font-bold text-white mb-2">El Más Seguro</h4>
                    <p className="text-sm text-gray-400">
                      0 bans reportados. Garantía total
                    </p>
                  </motion.div>
                </div>

                <motion.button
                  onClick={onClose}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ENTENDIDO
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}