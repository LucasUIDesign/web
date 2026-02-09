'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#030508] border-t border-accent/10">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display font-bold text-accent mb-3 sm:mb-4 text-base sm:text-lg">PHANTOM PROTOCOL</h4>
            <p className="text-light/40 text-xs sm:text-sm leading-relaxed">
              El software de entrenamiento más avanzado para VALORANT. Mejora tu rendimiento con tecnología de punta.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-light/80 mb-3 sm:mb-4 text-sm sm:text-base">Productos</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-light/40 text-xs sm:text-sm">
              <li><a href="#pricing" className="hover:text-accent transition-colors">Phantom Protocol</a></li>
              <li><a href="#features" className="hover:text-accent transition-colors">Características</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Planes de Acceso</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Documentación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-light/80 mb-3 sm:mb-4 text-sm sm:text-base">Soporte</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-light/40 text-xs sm:text-sm">
              <li><a href="/support" className="hover:text-highlight transition-colors">Centro de Ayuda</a></li>
              <li><a href="/support" className="hover:text-highlight transition-colors">Guías de Instalación</a></li>
              <li><a href="/support" className="hover:text-highlight transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="/support" className="hover:text-highlight transition-colors">Soporte 24/7</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-light/80 mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-light/40 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-light/70 transition-colors">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-light/70 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-light/70 transition-colors">Política de Reembolsos</a></li>
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <div className="text-light/30 text-xs sm:text-sm font-mono">
            © {currentYear} Phantom Protocol. All rights reserved.
          </div>
        </div>

        {/* Floating back to top button */}
        <motion.button
          aria-label="Volver arriba"
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 p-2.5 sm:p-3 rounded-full shadow-lg z-50"
          style={{
            background: 'linear-gradient(135deg, rgba(0,255,209,0.2), rgba(123,97,255,0.2))',
            border: '1px solid rgba(0,255,209,0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(0,255,209,0.15)'
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 30px rgba(0,255,209,0.3)'
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}
