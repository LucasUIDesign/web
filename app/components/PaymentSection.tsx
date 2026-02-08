'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import QRCode from './QRCode'

export default function PaymentSection() {
  const [step, setStep] = useState(1)
  const [paymentProgress, setPaymentProgress] = useState(0)
  const [transactionStatus, setTransactionStatus] = useState('waiting') // waiting, processing, confirmed
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [transactionId, setTransactionId] = useState('')

  const ethAddress = "0xFc574A6cB9358aB43E2861bEf8bc8a512C160A55"
  const ethAmount = "0.028571"
  const euroAmount = "99.99"

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

  useEffect(() => {
    if (step === 2) {
      const interval = setInterval(() => {
        setPaymentProgress(prev => {
          if (prev >= 100) {
            setTransactionStatus('confirmed')
            return 100
          }
          return prev + Math.random() * 10
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [step])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // Aquí podrías agregar una notificación de "copiado"
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-futuristic font-bold mb-6 glow-text">
            PAGO SEGURO CON ETHEREUM
          </h2>
          <p className="text-xl text-gray-300">
            Transacciones 100% anónimas y seguras con ETH
          </p>
        </motion.div>

        {/* Pasos del proceso */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    step >= stepNumber 
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}
                  animate={step >= stepNumber ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {step > stepNumber ? '✓' : stepNumber}
                </motion.div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? 'bg-green-500' : 'bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contenido del paso actual */}
        <div className="bg-dark-card rounded-xl p-8 border border-gray-700">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Paso 1: Realiza el Pago con Ethereum
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* QR Code */}
                <motion.div 
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-white mb-2">Escanea el QR</h4>
                    <p className="text-sm text-gray-400">Usa tu wallet de Ethereum</p>
                  </div>
                  <QRCode value={`ethereum:${ethAddress}?value=${ethAmount}`} />
                </motion.div>
                
                {/* Detalles de pago */}
                <div className="space-y-6">
                  <motion.div
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
                    whileHover={{ borderColor: '#8b5cf6' }}
                  >
                    <label className="block text-sm font-bold text-purple-400 mb-3 uppercase tracking-wider">
                      Dirección Ethereum
                    </label>
                    <div className="flex items-center gap-3">
                      <code className="text-sm text-green-400 flex-1 break-all font-mono bg-black/50 p-3 rounded">
                        {ethAddress}
                      </code>
                      <motion.button
                        onClick={() => copyToClipboard(ethAddress)}
                        className="bg-purple-600 hover:bg-purple-700 px-4 py-3 rounded-lg text-sm font-semibold whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📋 Copiar
                      </motion.button>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
                    whileHover={{ borderColor: '#eab308' }}
                  >
                    <label className="block text-sm font-bold text-yellow-400 mb-3 uppercase tracking-wider">
                      Cantidad Exacta
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-black/50 p-3 rounded">
                        <code className="text-2xl text-yellow-400 font-bold block">
                          {ethAmount} ETH
                        </code>
                        <span className="text-sm text-gray-400">≈ €{euroAmount}</span>
                      </div>
                      <motion.button
                        onClick={() => copyToClipboard(ethAmount)}
                        className="bg-yellow-600 hover:bg-yellow-700 px-4 py-3 rounded-lg text-sm font-semibold whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📋 Copiar
                      </motion.button>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💡</span>
                      <div className="text-sm text-blue-200">
                        <p className="font-semibold mb-1">Importante:</p>
                        <p>Envía exactamente la cantidad indicada. Después de enviar, sube tu comprobante en el siguiente paso.</p>
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  YA ENVIÉ EL PAGO
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Paso 2: Sube tu Comprobante de Pago
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
                  whileHover={{ borderColor: '#8b5cf6' }}
                >
                  <label className="block text-sm font-bold text-purple-400 mb-3 uppercase tracking-wider">
                    Tu Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                  <p className="text-xs text-gray-400 mt-2">Recibirás tu licencia aquí</p>
                </motion.div>

                {/* Transaction ID */}
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
                  whileHover={{ borderColor: '#8b5cf6' }}
                >
                  <label className="block text-sm font-bold text-purple-400 mb-3 uppercase tracking-wider">
                    ID de Transacción (Opcional)
                  </label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="Hash de la transacción Bitcoin"
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors font-mono text-sm"
                  />
                </motion.div>

                {/* File Upload */}
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border-2 border-dashed border-gray-600 hover:border-purple-500 transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <label className="block text-sm font-bold text-purple-400 mb-4 uppercase tracking-wider">
                    Comprobante de Pago
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
                        <p className="text-white font-semibold mb-2">Click para subir imagen</p>
                        <p className="text-sm text-gray-400">PNG, JPG o captura de pantalla</p>
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
                  onClick={() => {
                    if (email && selectedFile) {
                      setStep(3)
                    }
                  }}
                  disabled={!email || !selectedFile}
                  className={`w-full font-bold py-5 px-8 rounded-xl text-lg relative overflow-hidden ${
                    email && selectedFile
                      ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={email && selectedFile ? { scale: 1.02 } : {}}
                  whileTap={email && selectedFile ? { scale: 0.98 } : {}}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    ENVIAR COMPROBANTE
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-400">
                ¡Pago Confirmado! 🎉
              </h3>
              
              <div className="max-w-md mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-4xl text-white">✓</span>
                </motion.div>
                
                <p className="text-lg text-gray-300 mb-6">
                  Tu licencia de Phantom Protocol ha sido activada exitosamente.
                </p>
                
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-400 mb-2">Código de licencia:</p>
                  <code className="text-green-400 font-mono text-lg">
                    PP-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </code>
                </div>
                
                <p className="text-sm text-gray-400 mb-6">
                  Recibirás un email con las instrucciones de descarga e instalación en los próximos 5 minutos.
                </p>
                
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg neon-border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  DESCARGAR AHORA
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Advertencia importante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-red-900/30 border border-red-500 rounded-lg p-6"
        >
          <div className="flex items-start">
            <span className="text-2xl mr-4">⚠️</span>
            <div>
              <h4 className="font-bold text-red-300 mb-2">IMPORTANTE:</h4>
              <p className="text-red-200 text-sm leading-relaxed">
                Solo envía ETH desde la red Ethereum (ERC-20). Otras redes (BEP20, TRC20, Arbitrum, Optimism) podrían NO ser compatibles.
                Los fondos enviados desde redes incorrectas se perderán permanentemente y no son reembolsables.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Características de seguridad */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-dark-card p-6 rounded-lg border border-gray-700">
            <span className="text-3xl mb-4 block">🔒</span>
            <h4 className="font-bold text-white mb-2">100% Anónimo</h4>
            <p className="text-gray-400 text-sm">Sin registro de datos personales</p>
          </div>
          <div className="bg-dark-card p-6 rounded-lg border border-gray-700">
            <span className="text-3xl mb-4 block">⚡</span>
            <h4 className="font-bold text-white mb-2">Activación Rápida</h4>
            <p className="text-gray-400 text-sm">Licencia lista en 10 minutos</p>
          </div>
          <div className="bg-dark-card p-6 rounded-lg border border-gray-700">
            <span className="text-3xl mb-4 block">🛡️</span>
            <h4 className="font-bold text-white mb-2">Seguridad Total</h4>
            <p className="text-gray-400 text-sm">Transacciones encriptadas</p>
          </div>
        </div>
      </div>
    </section>
  )
}