"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/app/lib/firebase';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    router.push('/');
  };

  const getInitials = () => {
    if (!user?.displayName) return "U";
    const parts = user.displayName.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div 
              onClick={() => router.push('/')}
              className="text-2xl font-bold bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent cursor-pointer"
            >
              DMI.ai
            </div>
          </div>

          {/* Nav links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#8A3FFC]">About</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-[#8A3FFC]">Features</button>
              <button onClick={() => scrollToSection('templates')} className="text-gray-700 hover:text-[#8A3FFC]">Templates</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-[#8A3FFC]">Pricing</button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {!user ? (
              <button 
                onClick={() => router.push('/login')} 
                className="text-gray-700 hover:text-[#8A3FFC]"
              >
                Sign In
              </button>
            ) : (
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white flex items-center justify-center font-semibold hover:shadow-lg"
                >
                  {getInitials()}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            <button 
              onClick={() => router.push('/editor')}
              className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Free
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#8A3FFC]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#8A3FFC]">Features</button>
              <button onClick={() => scrollToSection('templates')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#8A3FFC]">Templates</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#8A3FFC]">Pricing</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#8A3FFC]">About</button>
              <div className="border-t border-gray-200 pt-4 pb-3">
                {!user ? (
                  <button 
                    onClick={() => router.push('/login')} 
                    className="w-full text-left px-3 py-2 text-gray-700 hover:text-[#8A3FFC]"
                  >
                    Sign In
                  </button>
                ) : (
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 text-gray-700 hover:text-red-500"
                  >
                    Logout
                  </button>
                )}
                <button 
                  onClick={() => router.push('/editor')}
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
