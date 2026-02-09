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

type WalletOption = 'wallet1' | 'wallet2'

export default function CheckoutModal({ isOpen, onClose, plan }: CheckoutModalProps) {
  const [step, setStep] = useState(1)
  const [selectedWallet, setSelectedWallet] = useState<WalletOption>('wallet1')
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutos
  const [email, setEmail] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  // Wallets ETH del cliente
  const wallets = {
    wallet1: "0xFc574A6cB9358aB43E2861bEf8bc8a512C160A55",
    wallet2: "0x37154761C074bFba57931F32EC2fc25518Bb1c1a"
  }

  const ethPrice = 3500 // USD por ETH (aproximado)

  const getCryptoAmount = () => {
    return (plan.price / ethPrice).toFixed(6)
  }

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
      setSelectedWallet('wallet1')
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

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-title"
          className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-[#1a1625] via-[#0f0f1e] to-[#1a1625] rounded-3xl border-2 border-purple-500/30 shadow-[0_0_50px_rgba(139,92,246,0.3)]"
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            aria-label="Cerrar checkout"
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-red-600/20 hover:bg-red-600/40 rounded-full border-2 border-red-500/50 transition-all"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(168,85,247,0.4)',
                    '0 0 40px rgba(168,85,247,0.6)',
                    '0 0 20px rgba(168,85,247,0.4)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl">💎</span>
                {plan.name}
              </motion.div>
              <h2 id="checkout-title" className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Checkout Seguro
              </h2>
              <p className="text-xl text-gray-400">
                Pago 100% anónimo con <span className="text-crypto-eth font-bold">Ethereum (ETH)</span>
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 ${
                      step >= s
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.5)]'
                        : 'bg-gray-800 text-gray-500 border-gray-700'
                    }`}
                    animate={step >= s ? {
                      scale: [1, 1.15, 1],
                      rotate: [0, 360, 0]
                    } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    {step > s ? '✓' : s}
                  </motion.div>
                  {s < 3 && (
                    <div className={`w-20 h-1.5 mx-3 rounded-full ${
                      step > s
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                        : 'bg-gray-700'
                    }`} />
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
                  className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border-2 border-red-500/60 rounded-2xl p-8 mb-10 relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(239, 68, 68, 0.3)',
                      '0 0 40px rgba(239, 68, 68, 0.6)',
                      '0 0 20px rgba(239, 68, 68, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                  <div className="text-center relative z-10">
                    <p className="text-red-300 font-bold text-lg mb-3">⏰ Tiempo Limitado</p>
                    <div className="text-7xl font-black text-white mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                      {formatTime(timeLeft)}
                    </div>
                    <p className="text-base text-gray-300">
                      Precio garantizado por {formatTime(timeLeft)} minutos
                    </p>
                  </div>
                </motion.div>

                {/* Wallet Selector */}
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <motion.button
                    onClick={() => setSelectedWallet('wallet1')}
                    className={`relative p-6 rounded-2xl border-2 transition-all overflow-hidden ${
                      selectedWallet === 'wallet1'
                        ? 'bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border-crypto-eth shadow-[0_0_30px_rgba(98,126,234,0.5)]'
                        : 'bg-gray-800/50 border-gray-700 hover:border-crypto-eth/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedWallet === 'wallet1' && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                    <div className="relative z-10">
                      <div className="text-5xl mb-3">Ξ</div>
                      <div className="text-xl font-bold text-crypto-eth mb-1">Wallet 1</div>
                      <div className="text-xs text-gray-400 font-mono">0xFc57...0A55</div>
                    </div>
                  </motion.button>

                  <motion.button
                    onClick={() => setSelectedWallet('wallet2')}
                    className={`relative p-6 rounded-2xl border-2 transition-all overflow-hidden ${
                      selectedWallet === 'wallet2'
                        ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.5)]'
                        : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedWallet === 'wallet2' && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                    <div className="relative z-10">
                      <div className="text-5xl mb-3">Ξ</div>
                      <div className="text-xl font-bold text-purple-400 mb-1">Wallet 2</div>
                      <div className="text-xs text-gray-400 font-mono">0x3715...1c1a</div>
                    </div>
                  </motion.button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* QR Code */}
                  <motion.div
                    className="rounded-2xl p-8 border-2 relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-crypto-eth/50"
                    whileHover={{ scale: 1.02 }}
                    layout
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2 text-center">
                        Escanea el QR
                      </h3>
                      <p className="text-center font-bold mb-6 text-lg text-crypto-eth">
                        Ξ Ethereum (ETH)
                      </p>
                      <div className="bg-white p-4 rounded-xl">
                        <QRCode value={`ethereum:${wallets[selectedWallet]}?value=${getCryptoAmount()}`} />
                      </div>
                      <p className="text-center text-sm text-gray-400 mt-4">
                        Usa MetaMask, Trust Wallet o cualquier wallet ETH
                      </p>
                    </div>
                  </motion.div>

                  {/* Payment Details */}
                  <div className="space-y-6">
                    {/* Amount */}
                    <motion.div
                      className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-6 border-2 border-yellow-500/40 relative overflow-hidden"
                      whileHover={{ borderColor: 'rgba(234, 179, 8, 0.8)' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-shimmer" />
                      <label className="block text-sm font-bold text-yellow-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                        <span className="text-2xl">💰</span> Cantidad Exacta
                      </label>
                      <div className="flex items-center gap-3 relative z-10">
                        <div className="flex-1 bg-black/60 p-5 rounded-xl border border-yellow-500/20">
                          <code className="text-3xl font-black block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            {getCryptoAmount()} ETH
                          </code>
                          <span className="text-lg text-gray-400">≈ ${plan.price} USD</span>
                        </div>
                        <motion.button
                          onClick={() => copyToClipboard(getCryptoAmount(), 'amount')}
                          aria-label="Copiar cantidad"
                          className="bg-yellow-600 hover:bg-yellow-700 px-5 py-5 rounded-xl font-bold text-xl shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {copied === 'amount' ? '✓' : '📋'}
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Address */}
                    <motion.div
                      className="rounded-2xl p-6 border-2 relative overflow-hidden bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-crypto-eth/40"
                      whileHover={{ borderColor: 'rgba(98, 126, 234, 0.8)' }}
                      layout
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                      <label className="block text-sm font-bold mb-4 uppercase tracking-wider flex items-center gap-2 text-crypto-eth">
                        <span className="text-2xl">📍</span> Dirección ETH ({selectedWallet === 'wallet1' ? 'Wallet 1' : 'Wallet 2'})
                      </label>
                      <div className="flex items-center gap-3 relative z-10">
                        <code className="flex-1 text-sm break-all font-mono bg-black/60 p-4 rounded-xl border text-crypto-eth border-crypto-eth/20">
                          {wallets[selectedWallet]}
                        </code>
                        <motion.button
                          onClick={() => copyToClipboard(wallets[selectedWallet], 'address')}
                          aria-label="Copiar dirección"
                          className="bg-crypto-eth hover:bg-blue-600 px-5 py-4 rounded-xl font-bold shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {copied === 'address' ? '✓' : '📋'}
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Security Badge */}
                    <motion.div
                      className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500/40 rounded-2xl p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">🛡️</span>
                        <div className="text-sm text-purple-200">
                          <p className="font-bold text-lg mb-2">100% Seguro y Anónimo</p>
                          <p className="text-gray-300">Transacción encriptada end-to-end. No guardamos ningún dato personal.</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.button
                  onClick={() => setStep(2)}
                  className="mt-10 w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white font-black py-6 px-8 rounded-2xl text-xl relative overflow-hidden group shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(168,85,247,0.6)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    YA REALICÉ EL PAGO
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold text-white mb-3">
                    Sube tu Comprobante
                  </h3>
                  <p className="text-lg text-gray-400">
                    Verifica tu transacción para recibir tu licencia instantáneamente
                  </p>
                </div>

                {/* Email */}
                <motion.div
                  className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border-2 border-purple-500/40"
                  whileHover={{ borderColor: 'rgba(168, 85, 247, 0.8)' }}
                >
                  <label htmlFor="checkout-email" className="block text-base font-bold text-purple-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <span className="text-2xl" aria-hidden="true">📧</span> Tu Email
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    autoComplete="email"
                    className="w-full bg-black/60 border-2 border-purple-500/30 rounded-xl px-6 py-5 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all text-lg font-medium"
                  />
                  <p className="text-sm text-gray-400 mt-3 flex items-center gap-2">
                    <span>✅</span> Recibirás tu licencia y archivo de descarga aquí
                  </p>
                </motion.div>

                {/* Transaction ID */}
                <motion.div
                  className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border-2 border-blue-500/40"
                  whileHover={{ borderColor: 'rgba(59, 130, 246, 0.8)' }}
                >
                  <label htmlFor="checkout-txid" className="block text-base font-bold text-blue-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <span className="text-2xl" aria-hidden="true">🔗</span> ID de Transacción (Opcional)
                  </label>
                  <input
                    id="checkout-txid"
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="Hash de la transacción (opcional pero recomendado)"
                    className="w-full bg-black/60 border-2 border-blue-500/30 rounded-xl px-6 py-5 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all font-mono text-base"
                  />
                </motion.div>

                {/* File Upload */}
                <motion.div
                  className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border-2 border-dashed border-green-500/50 hover:border-green-500 transition-all"
                  whileHover={{ scale: 1.01 }}
                >
                  <label htmlFor="checkout-proof" className="block text-base font-bold text-green-400 mb-6 uppercase tracking-wider flex items-center gap-2">
                    <span className="text-2xl" aria-hidden="true">📸</span> Comprobante de Pago
                  </label>

                  {!previewUrl ? (
                    <label className="cursor-pointer block">
                      <input
                        id="checkout-proof"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <div className="text-center py-16">
                        <motion.div
                          className="w-28 h-28 mx-auto mb-6 bg-green-600/20 rounded-full flex items-center justify-center border-4 border-green-500/30"
                          whileHover={{ scale: 1.15, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <svg className="w-14 h-14 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </motion.div>
                        <p className="text-white font-bold mb-3 text-2xl">
                          Click para subir imagen
                        </p>
                        <p className="text-base text-gray-400">
                          PNG, JPG o captura de pantalla de tu wallet
                        </p>
                      </div>
                    </label>
                  ) : (
                    <div className="relative">
                      <img src={previewUrl} alt="Preview" className="w-full rounded-xl border-2 border-green-500/30" />
                      <motion.button
                        onClick={() => {
                          setSelectedFile(null)
                          setPreviewUrl(null)
                        }}
                        className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className={`w-full font-black py-6 px-8 rounded-2xl text-xl relative overflow-hidden shadow-2xl ${
                    email && selectedFile && !isSubmitting
                      ? 'bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 text-white'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={email && selectedFile && !isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={email && selectedFile && !isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <motion.div
                        className="w-6 h-6 border-4 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      VERIFICANDO PAGO...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      ENVIAR COMPROBANTE
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                className="text-center py-12"
              >
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(34,197,94,0.6)]"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                <h3 className="text-5xl font-black text-white mb-6">
                  ¡Comprobante Recibido!
                </h3>

                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-2 border-green-500/50 rounded-2xl p-10 mb-10 max-w-2xl mx-auto">
                  <p className="text-2xl text-green-300 font-bold mb-6 flex items-center justify-center gap-3">
                    <span className="text-3xl">✅</span> Tu pago está siendo verificado
                  </p>
                  <p className="text-xl text-gray-300 mb-6">
                    Recibirás tu licencia y el archivo de descarga en:
                  </p>
                  <div className="bg-black/60 rounded-xl p-6 mb-6 border-2 border-green-500/30">
                    <code className="text-purple-400 font-mono text-2xl break-all">{email}</code>
                  </div>
                  <p className="text-lg text-gray-400 flex items-center justify-center gap-2">
                    <span>⏱️</span> Tiempo estimado: 5-15 minutos
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <motion.div
                    className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500/40 rounded-2xl p-8"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.8)' }}
                  >
                    <div className="text-5xl mb-4">🛡️</div>
                    <h4 className="font-bold text-white text-xl mb-3">100% Indetectable</h4>
                    <p className="text-base text-gray-400">
                      Sistema de bypass avanzado de última generación
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-2 border-green-500/40 rounded-2xl p-8"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(34, 197, 94, 0.8)' }}
                  >
                    <div className="text-5xl mb-4">⚡</div>
                    <h4 className="font-bold text-white text-xl mb-3">Activación Rápida</h4>
                    <p className="text-base text-gray-400">
                      Listo para usar en menos de 2 minutos
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-2 border-yellow-500/40 rounded-2xl p-8"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(234, 179, 8, 0.8)' }}
                  >
                    <div className="text-5xl mb-4">💎</div>
                    <h4 className="font-bold text-white text-xl mb-3">Calidad Premium</h4>
                    <p className="text-base text-gray-400">
                      Soporte 24/7 y actualizaciones constantes
                    </p>
                  </motion.div>
                </div>

                <motion.button
                  onClick={onClose}
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white font-black py-5 px-12 rounded-2xl text-xl shadow-[0_0_30px_rgba(168,85,247,0.5)]"
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
