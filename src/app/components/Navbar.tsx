"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div 
              onClick={() => route.push('/')}
              className="text-2xl font-bold bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent cursor-pointer"
            >
              DMI.ai
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#8A3FFC] transition-colors">About</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-[#8A3FFC] transition-colors">Features</button>
              <button onClick={() => scrollToSection('templates')} className="text-gray-700 hover:text-[#8A3FFC] transition-colors">Templates</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-[#8A3FFC] transition-colors">Pricing</button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#8A3FFC] transition-colors">
              Sign In
            </button>
            <button 
              onClick={() => route.push('/editor')}
              className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#8A3FFC]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#8A3FFC]">Features</button>
              <button onClick={() => scrollToSection('templates')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#8A3FFC]">Templates</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#8A3FFC]">Pricing</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#8A3FFC]">About</button>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-[#8A3FFC]">
                  Sign In
                </button>
                <button 
                  onClick={() => route.push('/editor')}
                  className="w-full mt-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-3 py-2 rounded-lg"
                >
                  Start Free
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
