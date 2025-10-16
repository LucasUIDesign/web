'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SupportPage() {
  const faqs = [
    {
      question: "¿Cómo instalo Phantom Protocol?",
      answer: "Después de tu compra, recibirás un email con tu licencia y el link de descarga. Simplemente descarga el archivo, ejecuta el instalador y sigue las instrucciones en pantalla. El proceso toma menos de 2 minutos."
    },
    {
      question: "¿Es seguro usar Phantom Protocol?",
      answer: "Absolutamente. Phantom Protocol utiliza tecnología de bypass VGC de última generación con 0 bans reportados. Nuestro sistema se actualiza automáticamente antes de cada parche de Valorant para garantizar tu seguridad."
    },
    {
      question: "¿Funciona en todos los modos de juego?",
      answer: "Sí, Phantom Protocol funciona en todos los modos: Competitivo, No Competitivo, Deathmatch, Spike Rush y modos personalizados. Compatible con todas las regiones."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos Bitcoin (BTC), Ethereum (ETH), USDT y Litecoin (LTC). Los pagos en criptomonedas son instantáneos y 100% seguros."
    },
    {
      question: "¿Cuánto tarda en activarse mi licencia?",
      answer: "Una vez confirmado tu pago, recibirás tu licencia por email en menos de 5 minutos. El proceso es completamente automático."
    },
    {
      question: "¿Puedo usar mi licencia en múltiples PCs?",
      answer: "Cada licencia está vinculada a un HWID (Hardware ID). Si necesitas cambiar de PC, contacta a soporte y te ayudaremos con el reset de HWID sin costo adicional."
    },
    {
      question: "¿Qué incluye el soporte 24/7?",
      answer: "Nuestro equipo está disponible 24/7 para ayudarte con instalación, configuración, troubleshooting y cualquier duda. Tiempo de respuesta promedio: menos de 30 minutos."
    },
    {
      question: "¿Hay actualizaciones incluidas?",
      answer: "Sí, todas las actualizaciones son automáticas y gratuitas durante la vigencia de tu licencia. Nuestro sistema se actualiza antes de cada parche de Valorant."
    }
  ]

  const guides = [
    {
      title: "Guía de Instalación Rápida",
      description: "Aprende a instalar Phantom Protocol en menos de 2 minutos",
      icon: "📥",
      time: "2 min"
    },
    {
      title: "Configuración Óptima",
      description: "Ajusta Phantom Protocol para máximo rendimiento",
      icon: "⚙️",
      time: "5 min"
    },
    {
      title: "Solución de Problemas",
      description: "Resuelve los problemas más comunes rápidamente",
      icon: "🔧",
      time: "3 min"
    },
    {
      title: "Mejores Prácticas",
      description: "Tips para usar Phantom Protocol de forma segura",
      icon: "🛡️",
      time: "4 min"
    }
  ]

  return (
    <div className="min-h-screen bg-primary text-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-black mb-6 bg-gradient-to-r from-accent via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Centro de Ayuda
            </h1>
            <p className="text-xl text-highlight max-w-2xl mx-auto">
              Todo lo que necesitas saber sobre Phantom Protocol. Soporte 24/7 disponible.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bento-card p-6 text-center">
              <div className="text-4xl mb-3">⚡</div>
              <div className="text-3xl font-black text-accent mb-2">&lt;30min</div>
              <div className="text-sm text-highlight">Tiempo de Respuesta</div>
            </div>
            <div className="bento-card p-6 text-center">
              <div className="text-4xl mb-3">✅</div>
              <div className="text-3xl font-black text-success mb-2">24/7</div>
              <div className="text-sm text-highlight">Soporte Disponible</div>
            </div>
            <div className="bento-card p-6 text-center">
              <div className="text-4xl mb-3">🎯</div>
              <div className="text-3xl font-black text-blue-400 mb-2">98%</div>
              <div className="text-sm text-highlight">Satisfacción</div>
            </div>
          </motion.div>

          {/* Installation Guides */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-display font-black mb-8 text-center">
              Guías de Instalación
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  className="bento-card p-6 hover:scale-105 transition-transform cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{guide.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{guide.title}</h3>
                  <p className="text-sm text-highlight mb-4">{guide.description}</p>
                  <div className="flex items-center gap-2 text-xs text-accent">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {guide.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-display font-black mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  className="bento-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <h3 className="text-lg font-bold mb-3 text-accent">{faq.question}</h3>
                  <p className="text-sm text-highlight leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Support CTA */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bento-card p-12 max-w-3xl mx-auto">
              <div className="text-5xl mb-6">💬</div>
              <h2 className="text-3xl font-display font-black mb-4">
                ¿Necesitas Ayuda Adicional?
              </h2>
              <p className="text-highlight mb-8">
                Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier duda o problema.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@phantom-protocol.com"
                  className="px-8 py-4 bg-gradient-to-r from-accent to-purple-600 rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  📧 Enviar Email
                </a>
                <Link
                  href="/#pricing"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  🛒 Ver Planes
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
