'use client'

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BentoGrid from './components/BentoGrid'
import PricingSection from './components/PricingSection'
import PaymentSection from './components/PaymentSection'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import MatrixBackground from './components/MatrixBackground'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <LoadingScreen />
      <main className="relative min-h-screen">
        <CustomCursor />
        <MatrixBackground />
        <Navbar />
        <HeroSection />
        <BentoGrid />
        <PricingSection />
        <PaymentSection />
        <SocialProof />
        <Footer />
      </main>
    </>
  )
}