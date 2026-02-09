'use client'

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BentoGrid from './components/BentoGrid'
import PricingSection from './components/PricingSection'

import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import VGCBypassDemo from './components/VGCBypassDemo'

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
      <main id="main-content" className="relative min-h-screen">
        <CustomCursor />
        <Navbar />
        <HeroSection />
        <BentoGrid />
        <VGCBypassDemo />
        <PricingSection />
        <SocialProof />
        <Footer />
      </main>
    </>
  )
}