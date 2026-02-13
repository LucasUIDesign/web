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

export default function EnglishPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <LoadingScreen lang="en" />
      <main id="main-content" className="relative min-h-screen">
        <CustomCursor />
        <Navbar lang="en" />
        <HeroSection lang="en" />
        <BentoGrid lang="en" />
        <VGCBypassDemo lang="en" />
        <PricingSection lang="en" />
        <SocialProof lang="en" />
        <Footer lang="en" />
      </main>
    </>
  )
}
