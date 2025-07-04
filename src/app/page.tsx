import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CreateWithAISection from './components/CreateWithAISection'
import CollaborativeDesignSection from './components/CollaborativeDesignSection'
import PrintReadySection from './components/PrintReadySection'
import TemplateCarouselSection from './components/TemplateCarouselSection'
import TrustedBrandsSection from './components/TrustedBrandsSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import CTAFooterSection from './components/CTAFooterSection'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CreateWithAISection/>
      <CollaborativeDesignSection/>
      <PrintReadySection/>
      <TemplateCarouselSection/>
      <TrustedBrandsSection/>
      <TestimonialsSection/>
      <PricingSection/>
      <CTAFooterSection/>
      <Footer/>

    </div>
  )
}

export default page
