'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import QRCode from './QRCode'

export default function PaymentSection() {
  const [step, setStep] = useState(1)
  const [paymentProgress, setPaymentProgress] = useState(0)
  const [transactionStatus, setTransactionStatus] = useState('waiting') // waiting, processing, confirmed

  const btcAddress = "bc1ql0upf2d9xntcwzjrjx62j4h5vr09z62mcwwd6e"
  const btcAmount = "0.0045"
  const usdAmount = "99.99"

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
            PAGO SEGURO CON BITCOIN
          </h2>
          <p className="text-xl text-gray-300">
            Transacciones 100% anónimas y seguras
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
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">
                Paso 1: Escanea el QR o Copia la Dirección
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <QRCode value={`bitcoin:${btcAddress}?amount=${btcAmount}`} />
                  <p className="text-sm text-gray-400 mt-4">
                    Escanea con tu wallet de Bitcoin
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Dirección Bitcoin:
                    </label>
                    <div className="flex items-center bg-gray-800 rounded-lg p-3">
                      <code className="text-sm text-green-400 flex-1 break-all">
                        {btcAddress}
                      </code>
                      <button
                        onClick={() => copyToClipboard(btcAddress)}
                        className="ml-2 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                      >
                        Copiar
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Cantidad exacta:
                    </label>
                    <div className="flex items-center bg-gray-800 rounded-lg p-3">
                      <code className="text-sm text-yellow-400 flex-1">
                        {btcAmount} BTC (≈${usdAmount})
                      </code>
                      <button
                        onClick={() => copyToClipboard(btcAmount)}
                        className="ml-2 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                      >
                        Copiar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                onClick={() => setStep(2)}
                className="mt-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-8 rounded-lg neon-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                YA ENVIÉ EL PAGO
              </motion.button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-6 text-neon-purple">
                Paso 2: Verificando Transacción
              </h3>
              
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <motion.div
                      className="w-full h-full border-4 border-purple-500 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl">₿</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-4">
                    Buscando tu transacción en la blockchain...
                  </p>
                  
                  <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-4 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${paymentProgress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  
                  <p className="text-sm text-gray-400">
                    {paymentProgress < 100 ? `${Math.round(paymentProgress)}% completado` : 'Transacción confirmada!'}
                  </p>
                </div>

                {transactionStatus === 'confirmed' && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setStep(3)}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-8 rounded-lg neon-border"
                  >
                    CONTINUAR
                  </motion.button>
                )}
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
                Solo envía BTC desde la red Bitcoin. Otras redes (ERC20, BEP20, TRC20) NO son compatibles. 
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