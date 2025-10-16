'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import StatusModal from './StatusModal'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showStatusModal, setShowStatusModal] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.95)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Store', href: '#pricing' },
    { name: 'Features', href: '#features' },
    { name: 'Status', href: '#status', onClick: () => setShowStatusModal(true) },
    { name: 'Support', href: '/support' }
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/50 backdrop-blur-md"
      style={{ backgroundColor }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="small" />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
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
                className="text-gray-300 hover:text-white font-semibold transition-colors relative group cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Status Indicator */}
          <motion.button
            onClick={() => setShowStatusModal(true)}
            className="flex items-center space-x-2 bg-green-900/20 border border-green-500/30 rounded-full px-4 py-2 hover:bg-green-900/30 transition-colors cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
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
            <span className="text-green-400 text-sm font-semibold">All services online</span>
          </motion.button>
          
          <StatusModal isOpen={showStatusModal} onClose={() => setShowStatusModal(false)} />

          {/* Dashboard Button */}
          <motion.button
            className="hidden md:block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(176, 38, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Dashboard
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}