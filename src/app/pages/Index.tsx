
import React from 'react';
import HeroSection from '../components/HeroSection';
import CreateWithAISection from '../components/CreateWithAISection';
import CollaborativeDesignSection from '../components/CollaborativeDesignSection';
import PrintReadySection from '../components/PrintReadySection';
import TemplateCarouselSection from '../components/TemplateCarouselSection';
import TrustedBrandsSection from '../components/TrustedBrandsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import CTAFooterSection from '../components/CTAFooterSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <div id="features">
        <CreateWithAISection />
      </div>
      <CollaborativeDesignSection />
      <PrintReadySection />
      <div id="templates">
        <TemplateCarouselSection />
      </div>
      <TrustedBrandsSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <TestimonialsSection />
      <div id="about">
        <CTAFooterSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
