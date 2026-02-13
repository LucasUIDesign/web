'use client'

import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import BentoGrid from '../components/BentoGrid'
import PricingSection from '../components/PricingSection'
import SocialProof from '../components/SocialProof'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import LoadingScreen from '../components/LoadingScreen'
import VGCBypassDemo from '../components/VGCBypassDemo'

export default function PortuguesePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <LoadingScreen lang="pt" />
      <main id="main-content" className="relative min-h-screen">
        <CustomCursor />
        <Navbar lang="pt" />
        <HeroSection lang="pt" />
        <BentoGrid lang="pt" />
        <VGCBypassDemo lang="pt" />
        <PricingSection lang="pt" />
        <SocialProof lang="pt" />
        <Footer lang="pt" />
      </main>
    </>
  )
}
