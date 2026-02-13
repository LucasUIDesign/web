'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'
import { translations, t, type Lang } from '../translations'

interface LoadingScreenProps {
  lang?: Lang
}

export default function LoadingScreen({ lang = 'es' }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('INITIALIZING PHANTOM PROTOCOL')
  const [showTitle, setShowTitle] = useState(false)
  const [showPhantom, setShowPhantom] = useState(false)

  const particles = useMemo(() =>
    [...Array(40)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 3,
      color: Math.random() > 0.6 ? '#FF4655' : Math.random() > 0.3 ? '#C850C0' : '#FFD700'
    })), []
  )

  const embers = useMemo(() =>
    [...Array(15)].map(() => ({
      x: 35 + Math.random() * 30,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3,
      size: 2 + Math.random() * 4
    })), []
  )

  useEffect(() => {
    const t1 = setTimeout(() => setShowPhantom(true), 300)
    const t2 = setTimeout(() => setShowTitle(true), 1000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    const statusMessages = translations.loading.statusMessages[lang]

    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 3.5 + 1
        if (next >= 100) {
          clearInterval(interval)
          setStatusText(statusMessages[statusMessages.length - 1])
          setTimeout(() => setIsLoading(false), 1000)
          return 100
        }
        const msgIndex = Math.min(Math.floor(next / 13), statusMessages.length - 1)
        setStatusText(statusMessages[msgIndex])
        return next
      })
    }, 280)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#030308] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* === DEEP BACKGROUND === */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#080510] to-[#030308]" />

          {/* Noise/grain texture */}
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px'
          }} />

          {/* === VOLUMETRIC LIGHT RAYS behind phantom === */}
          <motion.div
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120vw',
              height: '120vh',
              background: 'conic-gradient(from 0deg at 50% 40%, transparent 0deg, rgba(255,70,85,0.03) 15deg, transparent 30deg, rgba(255,70,85,0.04) 50deg, transparent 70deg, rgba(200,80,192,0.03) 90deg, transparent 110deg, rgba(255,70,85,0.03) 130deg, transparent 150deg, rgba(255,215,0,0.02) 170deg, transparent 190deg, rgba(255,70,85,0.04) 210deg, transparent 230deg, rgba(200,80,192,0.03) 250deg, transparent 270deg, rgba(255,70,85,0.03) 300deg, transparent 320deg, rgba(255,70,85,0.04) 345deg, transparent 360deg)',
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />

          {/* === MASSIVE CRIMSON AURA === */}
          <motion.div
            className="absolute rounded-full w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -55%)',
              background: 'radial-gradient(ellipse at center, rgba(255,70,85,0.2) 0%, rgba(255,70,85,0.08) 30%, rgba(200,80,192,0.04) 50%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Secondary gold aura */}
          <motion.div
            className="absolute rounded-full w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px]"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -55%)',
              background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.08) 0%, rgba(255,70,85,0.04) 40%, transparent 70%)',
              filter: 'blur(30px)',
            }}
            animate={{
              scale: [1.1, 0.9, 1.1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* === PHANTOM SILHOUETTE - CENTERED === */}
          <AnimatePresence>
            {showPhantom && (
              <motion.div
                className="absolute z-10"
                style={{ top: '50%', left: '50%' }}
                initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-55%' }}
                animate={{ opacity: 1, scale: 1, x: '-50%', y: '-55%' }}
                transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
              >
                {/* Phantom floating animation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* === HOODED PHANTOM BODY - RESPONSIVE === */}
                  <div className="relative w-[180px] h-[240px] sm:w-[220px] sm:h-[300px] md:w-[260px] md:h-[350px] lg:w-[280px] lg:h-[380px]">

                    {/* Outer aura edge glow */}
                    <motion.div
                      className="absolute inset-[-12px] sm:inset-[-16px] md:inset-[-20px]"
                      style={{
                        clipPath: 'polygon(50% 0%, 28% 6%, 18% 16%, 14% 28%, 12% 40%, 10% 55%, 8% 70%, 12% 82%, 18% 88%, 25% 84%, 32% 90%, 38% 85%, 44% 92%, 50% 87%, 56% 92%, 62% 85%, 68% 90%, 75% 84%, 82% 88%, 88% 82%, 92% 70%, 90% 55%, 88% 40%, 86% 28%, 82% 16%, 72% 6%)',
                        background: 'radial-gradient(ellipse at 50% 30%, rgba(255,70,85,0.15), transparent 70%)',
                        filter: 'blur(15px)',
                      }}
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Main phantom body */}
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(50% 2%, 30% 7%, 20% 17%, 16% 30%, 14% 42%, 12% 55%, 10% 70%, 14% 82%, 20% 87%, 27% 83%, 34% 89%, 40% 84%, 46% 91%, 50% 86%, 54% 91%, 60% 84%, 66% 89%, 73% 83%, 80% 87%, 86% 82%, 90% 70%, 88% 55%, 86% 42%, 84% 30%, 80% 17%, 70% 7%)',
                        background: 'linear-gradient(180deg, #0a0510 0%, #060310 40%, #04020a 100%)',
                      }}
                    />

                    {/* Phantom body edge highlight */}
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(50% 2%, 30% 7%, 20% 17%, 16% 30%, 14% 42%, 12% 55%, 10% 70%, 14% 82%, 20% 87%, 27% 83%, 34% 89%, 40% 84%, 46% 91%, 50% 86%, 54% 91%, 60% 84%, 66% 89%, 73% 83%, 80% 87%, 86% 82%, 90% 70%, 88% 55%, 86% 42%, 84% 30%, 80% 17%, 70% 7%)',
                        background: 'linear-gradient(135deg, rgba(255,70,85,0.08) 0%, transparent 30%, transparent 70%, rgba(200,80,192,0.06) 100%)',
                      }}
                    />

                    {/* Hood inner void */}
                    <div
                      className="absolute"
                      style={{
                        top: '8%',
                        left: '28%',
                        width: '44%',
                        height: '20%',
                        borderRadius: '50% 50% 40% 40%',
                        background: 'radial-gradient(ellipse at 50% 60%, #020105 0%, #050308 100%)',
                      }}
                    />

                    {/* === GLOWING EYES === */}
                    {/* Left eye */}
                    <motion.div
                      className="absolute rounded-full w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px]"
                      style={{
                        top: '16%',
                        left: '37%',
                        background: 'radial-gradient(circle, #FF4655 30%, rgba(255,70,85,0.5) 60%, transparent 100%)',
                        boxShadow: '0 0 10px #FF4655, 0 0 25px #FF4655, 0 0 50px rgba(255,70,85,0.6), 0 0 80px rgba(255,70,85,0.3), 0 0 120px rgba(255,70,85,0.15)',
                      }}
                      animate={{
                        boxShadow: [
                          '0 0 10px #FF4655, 0 0 25px #FF4655, 0 0 50px rgba(255,70,85,0.6), 0 0 80px rgba(255,70,85,0.3)',
                          '0 0 15px #FF4655, 0 0 35px #FF4655, 0 0 70px rgba(255,70,85,0.8), 0 0 100px rgba(255,70,85,0.4), 0 0 150px rgba(255,70,85,0.2)',
                          '0 0 10px #FF4655, 0 0 25px #FF4655, 0 0 50px rgba(255,70,85,0.6), 0 0 80px rgba(255,70,85,0.3)',
                        ],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    {/* Left eye core */}
                    <div className="absolute rounded-full bg-white w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] md:w-[5px] md:h-[5px]" style={{
                      top: 'calc(16% + 4px)', left: 'calc(37% + 5px)',
                      opacity: 0.9,
                      boxShadow: '0 0 4px #fff'
                    }} />

                    {/* Right eye */}
                    <motion.div
                      className="absolute rounded-full w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px]"
                      style={{
                        top: '16%',
                        left: '54%',
                        background: 'radial-gradient(circle, #FF4655 30%, rgba(255,70,85,0.5) 60%, transparent 100%)',
                        boxShadow: '0 0 10px #FF4655, 0 0 25px #FF4655, 0 0 50px rgba(255,70,85,0.6), 0 0 80px rgba(255,70,85,0.3)',
                      }}
                      animate={{
                        boxShadow: [
                          '0 0 10px #FF4655, 0 0 25px #FF4655, 0 0 50px rgba(255,70,85,0.6), 0 0 80px rgba(255,70,85,0.3)',
                          '0 0 15px #FF4655, 0 0 35px #FF4655, 0 0 70px rgba(255,70,85,0.8), 0 0 100px rgba(255,70,85,0.4), 0 0 150px rgba(255,70,85,0.2)',
                          '0 0 10px #FF4655, 0 0 25px #FF4655, 0 0 50px rgba(255,70,85,0.6), 0 0 80px rgba(255,70,85,0.3)',
                        ],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                    />
                    {/* Right eye core */}
                    <div className="absolute rounded-full bg-white w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] md:w-[5px] md:h-[5px]" style={{
                      top: 'calc(16% + 4px)', left: 'calc(54% + 5px)',
                      opacity: 0.9,
                      boxShadow: '0 0 4px #fff'
                    }} />

                    {/* Eye light beam (subtle) */}
                    <motion.div
                      className="absolute"
                      style={{
                        top: '17%',
                        left: '38%',
                        width: '24%',
                        height: '2px',
                        background: 'linear-gradient(90deg, rgba(255,70,85,0.4), rgba(255,70,85,0.6), rgba(255,70,85,0.4))',
                        filter: 'blur(1px)',
                      }}
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* === VANDAL RIFLE === */}
                    <div
                      className="absolute hidden sm:block"
                      style={{
                        top: '32%',
                        left: '-25%',
                        width: '150%',
                        height: '50px',
                        transform: 'rotate(-12deg)',
                      }}
                    >
                      {/* Rifle stock */}
                      <div className="absolute" style={{
                        left: '0%',
                        top: '8px',
                        width: '60px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #1a1020 0%, #0f0a18 50%, #0a0812 100%)',
                        clipPath: 'polygon(0% 20%, 100% 0%, 100% 70%, 80% 100%, 0% 80%)',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(255,70,85,0.05)',
                        border: '1px solid rgba(255,70,85,0.1)',
                      }} />

                      {/* Rifle receiver/body */}
                      <div className="absolute" style={{
                        left: '55px',
                        top: '5px',
                        width: '200px',
                        height: '28px',
                        background: 'linear-gradient(180deg, #1a1428 0%, #100e1e 40%, #0a0812 100%)',
                        borderRadius: '3px 2px 2px 3px',
                        boxShadow: '0 2px 15px rgba(0,0,0,0.8), 0 0 15px rgba(255,70,85,0.06), inset 0 1px 0 rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,70,85,0.08)',
                      }}>
                        {/* Receiver top rail */}
                        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
                          background: 'linear-gradient(90deg, rgba(255,70,85,0.05), rgba(255,70,85,0.15), rgba(255,70,85,0.05))',
                        }} />
                        {/* Ejection port detail */}
                        <div className="absolute" style={{
                          top: '4px', left: '40%', width: '30px', height: '10px',
                          border: '1px solid rgba(255,70,85,0.06)',
                          borderRadius: '1px',
                        }} />
                      </div>

                      {/* Pistol grip */}
                      <div className="absolute" style={{
                        left: '130px',
                        top: '30px',
                        width: '18px',
                        height: '35px',
                        background: 'linear-gradient(180deg, #12101e 0%, #0a0812 100%)',
                        borderRadius: '0 0 4px 4px',
                        transform: 'rotate(8deg)',
                        boxShadow: '0 3px 8px rgba(0,0,0,0.6)',
                        border: '1px solid rgba(255,70,85,0.06)',
                      }} />

                      {/* Magazine (curved) */}
                      <div className="absolute" style={{
                        left: '155px',
                        top: '28px',
                        width: '22px',
                        height: '45px',
                        background: 'linear-gradient(180deg, #16122a 0%, #0e0a1e 100%)',
                        borderRadius: '3px 3px 8px 2px',
                        transform: 'rotate(6deg) skewX(-3deg)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.7), 0 0 8px rgba(255,70,85,0.04)',
                        border: '1px solid rgba(255,70,85,0.08)',
                      }} />

                      {/* Barrel */}
                      <div className="absolute" style={{
                        left: '252px',
                        top: '8px',
                        width: '140px',
                        height: '14px',
                        background: 'linear-gradient(180deg, #18142a 0%, #0e0a1e 60%, #100e20 100%)',
                        borderRadius: '2px 4px 4px 2px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.6), 0 0 10px rgba(255,70,85,0.04), inset 0 1px 0 rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,70,85,0.06)',
                      }} />

                      {/* Muzzle brake */}
                      <div className="absolute" style={{
                        left: '388px',
                        top: '5px',
                        width: '30px',
                        height: '20px',
                        background: 'linear-gradient(180deg, #1a152e 0%, #0a0812 100%)',
                        borderRadius: '2px 6px 6px 2px',
                        boxShadow: '0 0 15px rgba(255,70,85,0.08), 0 2px 8px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,70,85,0.1)',
                      }}>
                        {/* Muzzle slots */}
                        <div className="absolute top-[3px] right-[4px] w-[2px] h-[14px] bg-black/30 rounded" />
                        <div className="absolute top-[3px] right-[10px] w-[2px] h-[14px] bg-black/30 rounded" />
                      </div>

                      {/* Front sight */}
                      <div className="absolute" style={{
                        left: '370px',
                        top: '2px',
                        width: '8px',
                        height: '8px',
                        background: '#12101e',
                        clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                        border: '1px solid rgba(255,70,85,0.08)',
                      }} />

                      {/* Muzzle glow */}
                      <motion.div
                        className="absolute rounded-full"
                        style={{
                          left: '415px',
                          top: '-5px',
                          width: '40px',
                          height: '40px',
                          background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,70,85,0.15) 40%, transparent 70%)',
                          filter: 'blur(8px)',
                        }}
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>

                    {/* === MOBILE RIFLE (simplified, smaller) === */}
                    <div
                      className="absolute sm:hidden"
                      style={{
                        top: '34%',
                        left: '-15%',
                        width: '130%',
                        height: '30px',
                        transform: 'rotate(-12deg)',
                      }}
                    >
                      {/* Rifle body simplified */}
                      <div className="absolute" style={{
                        left: '0',
                        top: '4px',
                        width: '100%',
                        height: '18px',
                        background: 'linear-gradient(180deg, #1a1428 0%, #100e1e 40%, #0a0812 100%)',
                        borderRadius: '3px',
                        boxShadow: '0 2px 15px rgba(0,0,0,0.8), 0 0 15px rgba(255,70,85,0.06)',
                        border: '1px solid rgba(255,70,85,0.08)',
                      }}>
                        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{
                          background: 'linear-gradient(90deg, rgba(255,70,85,0.05), rgba(255,70,85,0.15), rgba(255,70,85,0.05))',
                        }} />
                      </div>
                      {/* Grip */}
                      <div className="absolute" style={{
                        left: '42%',
                        top: '18px',
                        width: '12px',
                        height: '22px',
                        background: 'linear-gradient(180deg, #12101e 0%, #0a0812 100%)',
                        borderRadius: '0 0 3px 3px',
                        transform: 'rotate(8deg)',
                        border: '1px solid rgba(255,70,85,0.06)',
                      }} />
                      {/* Muzzle glow */}
                      <motion.div
                        className="absolute rounded-full"
                        style={{
                          right: '-10px',
                          top: '-4px',
                          width: '24px',
                          height: '24px',
                          background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,70,85,0.15) 40%, transparent 70%)',
                          filter: 'blur(6px)',
                        }}
                        animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>

                    {/* === PHANTOM INTERNAL GLOW === */}
                    <motion.div
                      className="absolute"
                      style={{
                        top: '25%',
                        left: '30%',
                        width: '40%',
                        height: '30%',
                        background: 'radial-gradient(circle, rgba(255,70,85,0.06) 0%, transparent 70%)',
                        filter: 'blur(20px)',
                      }}
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Glitch lines on phantom */}
                    <motion.div
                      className="absolute left-[15%] w-[70%] h-[2px]"
                      style={{
                        top: '45%',
                        background: 'linear-gradient(90deg, transparent, rgba(200,80,192,0.5), transparent)',
                      }}
                      animate={{ opacity: [0, 0.8, 0], left: ['15%', '18%', '15%'] }}
                      transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 4 }}
                    />
                    <motion.div
                      className="absolute left-[20%] w-[60%] h-[1.5px]"
                      style={{
                        top: '60%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)',
                      }}
                      animate={{ opacity: [0, 0.6, 0], left: ['20%', '17%', '20%'] }}
                      transition={{ duration: 0.12, repeat: Infinity, repeatDelay: 3.5, delay: 2 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* === GROUND REFLECTION === */}
          <div className="absolute bottom-[16%] sm:bottom-[18%] left-1/2 -translate-x-1/2 w-[80%] max-w-[600px]">
            <motion.div
              style={{
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(255,70,85,0.3), rgba(200,80,192,0.2), rgba(255,70,85,0.3), transparent)',
                boxShadow: '0 0 30px rgba(255,70,85,0.15), 0 0 60px rgba(255,70,85,0.08)',
              }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Ground glow */}
            <div style={{
              height: '80px',
              background: 'linear-gradient(180deg, rgba(255,70,85,0.08) 0%, transparent 100%)',
              filter: 'blur(20px)',
              marginTop: '-5px',
            }} />
          </div>

          {/* === RISING EMBERS/PARTICLES === */}
          {embers.map((e, i) => (
            <motion.div
              key={`ember-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${e.x}%`,
                bottom: '20%',
                width: e.size,
                height: e.size,
                background: i % 2 === 0 ? '#FF4655' : '#FFD700',
                boxShadow: `0 0 ${e.size * 3}px ${i % 2 === 0 ? 'rgba(255,70,85,0.8)' : 'rgba(255,215,0,0.8)'}`,
              }}
              animate={{
                y: [0, -(200 + Math.random() * 300)],
                x: [(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 100],
                opacity: [0, 0.9, 0],
                scale: [0.5, 1, 0.3],
              }}
              transition={{
                duration: e.duration,
                repeat: Infinity,
                delay: e.delay,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* === FLOATING AMBIENT PARTICLES === */}
          {particles.map((p, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute rounded-full"
              style={{
                top: `${p.y}%`,
                left: `${p.x}%`,
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              }}
              animate={{
                y: [0, -(20 + Math.random() * 40), 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* === SCAN LINE === */}
          <motion.div
            className="absolute left-0 right-0 h-[1px] z-20"
            style={{
              background: 'linear-gradient(90deg, transparent 10%, rgba(255,70,85,0.3) 30%, rgba(255,70,85,0.5) 50%, rgba(255,70,85,0.3) 70%, transparent 90%)',
              boxShadow: '0 0 20px rgba(255,70,85,0.15)',
            }}
            animate={{ top: ['-2%', '102%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />

          {/* === TITLE: PHANTOM PROTOCOL = MODO DIOS === */}
          <AnimatePresence>
            {showTitle && (
              <motion.div
                className="absolute top-[4%] sm:top-[6%] md:top-[7%] z-20 text-center px-4"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, type: 'spring', stiffness: 60 }}
              >
                <motion.h1
                  className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-black tracking-[0.08em] sm:tracking-[0.15em] uppercase"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(255,70,85,0.3), 0 0 40px rgba(255,70,85,0.15)',
                      '0 0 20px rgba(255,70,85,0.6), 0 0 60px rgba(255,70,85,0.3), 0 0 100px rgba(255,70,85,0.15)',
                      '0 0 10px rgba(255,70,85,0.3), 0 0 40px rgba(255,70,85,0.15)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] via-[#C850C0] to-[#FF4655]">
                    PHANTOM PROTOCOL
                  </span>
                  <span className="text-white/20 mx-1 sm:mx-3">=</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF4655] to-[#FFD700]">
                    {t(translations.loading.godMode, lang)}
                  </span>
                </motion.h1>
                <motion.div
                  className="mt-2 sm:mt-3 mx-auto h-[1px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #FF4655, #FFD700, #FF4655, transparent)',
                    boxShadow: '0 0 10px rgba(255,70,85,0.3)',
                  }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* === LOADING INFO === */}
          <div className="absolute bottom-[4%] sm:bottom-[6%] md:bottom-[8%] z-20 flex flex-col items-center px-4 w-full max-w-[280px] sm:max-w-sm">
            {/* Status text */}
            <motion.div
              className="font-mono text-[10px] sm:text-xs text-[#FF4655]/60 mb-3 sm:mb-4 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.span
                className="inline-block w-1.5 h-1.5 bg-[#FF4655] rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <span className="truncate tracking-widest">{statusText}</span>
              <motion.span
                className="text-[#FF4655]/40"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >_</motion.span>
            </motion.div>

            {/* Progress bar */}
            <div className="w-full mb-3">
              <div className="h-[3px] bg-white/[0.03] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full relative"
                  style={{
                    background: 'linear-gradient(90deg, #FF4655, #C850C0, #FFD700)',
                    boxShadow: '0 0 15px rgba(255,70,85,0.5), 0 0 30px rgba(255,70,85,0.2)',
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Percentage */}
            <motion.div
              className="font-mono text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4655] to-[#C850C0]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {Math.round(Math.min(progress, 100))}%
            </motion.div>
          </div>

          {/* === BOTTOM TAG === */}
          <motion.div
            className="absolute bottom-1 sm:bottom-4 flex items-center gap-2 text-[8px] sm:text-[10px] text-white/10 font-mono tracking-[0.2em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="w-6 sm:w-10 h-px bg-gradient-to-r from-transparent to-[#FF4655]/20" />
            <span>SECURE • UNDETECTABLE • PHANTOM</span>
            <div className="w-6 sm:w-10 h-px bg-gradient-to-l from-transparent to-[#FF4655]/20" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
