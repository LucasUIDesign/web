'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">PHANTOM PROTOCOL</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              La plataforma de cheats más avanzada para VALORANT.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#pricing" className="hover:text-accent transition-colors">Phantom Protocol</a></li>
              <li><a href="#features" className="hover:text-accent transition-colors">Características</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Planes de Acceso</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Documentación</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Soporte</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/support" className="hover:text-highlight transition-colors">Centro de Ayuda</a></li>
              <li><a href="/support" className="hover:text-highlight transition-colors">Guías de Instalación</a></li>
              <li><a href="/support" className="hover:text-highlight transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="/support" className="hover:text-highlight transition-colors">Soporte 24/7</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-light transition-colors">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-light transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-light transition-colors">Política de Reembolsos</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Phantom Protocol. All rights reserved.
          </div>
        </div>

        {/* Floating back to top button */}
        <motion.button
          className="fixed bottom-8 right-8 bg-gradient-to-r from-red-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}