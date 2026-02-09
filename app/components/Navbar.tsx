'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import StatusModal from './StatusModal'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showStatusModal, setShowStatusModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 10, 14, 0)', 'rgba(5, 10, 14, 0.95)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { name: 'Store', href: '#pricing' },
    { name: 'Features', href: '#features' },
    { name: 'Status', href: '#status', onClick: () => setShowStatusModal(true) },
    { name: 'Support', href: '/support' }
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-accent/10 backdrop-blur-xl"
        style={{ backgroundColor }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo size="small" />

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault()
                      item.onClick()
                    }
                  }}
                  className="text-light/60 hover:text-accent font-semibold transition-colors relative group cursor-pointer text-sm lg:text-base"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-electric"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Status Indicator */}
              <motion.button
                onClick={() => setShowStatusModal(true)}
                className="hidden sm:flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-accent/15 transition-colors cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-2 h-2 bg-accent rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-accent text-xs sm:text-sm font-semibold">Online</span>
              </motion.button>

              {/* Get Access Button - Desktop */}
              <motion.a
                href="#pricing"
                className="hidden md:block text-sm lg:text-base font-display font-bold px-4 lg:px-6 py-2 rounded-xl transition-all duration-300 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,209,0.15), rgba(123,97,255,0.15))',
                  border: '1px solid rgba(0,255,209,0.3)',
                  color: '#00FFD1'
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(0,255,209,0.3)',
                  borderColor: 'rgba(0,255,209,0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Access
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/20"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={mobileMenuOpen}
              >
                <motion.span
                  className="block w-5 h-0.5 bg-accent mb-1"
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-accent mb-1"
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-accent"
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="absolute top-16 left-4 right-4 rounded-2xl overflow-hidden border border-accent/20"
              style={{
                background: 'linear-gradient(135deg, rgba(5,10,14,0.98), rgba(10,22,40,0.98))',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,255,209,0.1)'
              }}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault()
                        item.onClick()
                      }
                      setMobileMenuOpen(false)
                    }}
                    className="block px-4 py-3 rounded-xl text-light/70 hover:text-accent hover:bg-accent/10 font-semibold transition-all text-base"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile Status */}
                <div className="pt-2 border-t border-accent/10">
                  <div className="flex items-center gap-2 px-4 py-3">
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-accent text-sm font-semibold">All services online</span>
                  </div>
                </div>

                {/* Mobile CTA */}
                <motion.a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-3 rounded-xl font-display font-bold text-primary"
                  style={{
                    background: 'linear-gradient(135deg, #00FFD1, #00B4D8)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Access
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <StatusModal isOpen={showStatusModal} onClose={() => setShowStatusModal(false)} />
    </>
  )
}
