"use client"
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CTAFooterSection = () => {
  const route = useRouter();

  return (
    <section className="py-20 bg-gradient-to-br from-[#8A3FFC] via-[#6B46C1] to-[#4F82FF] relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <Sparkles size={16} className="text-white" />
          <span className="text-white text-sm font-medium">Ready to Transform Your Brand?</span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Launch Your Brand Everywhere.
          <br />
          <span className="text-blue-200">Powered by AI.</span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
          Join thousands of businesses using DMI.ai to create consistent, professional brand experiences across all platforms automatically.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => route.push('/templates')}
            className="bg-white text-[#8A3FFC] px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Sparkles size={20} />
            Start Building Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#8A3FFC] transition-all duration-300 flex items-center gap-2">
            <ArrowRight size={20} />
            Schedule Demo
          </button>
        </div>

        <div className="mt-8 text-blue-100 text-sm">
          Free trial • No credit card required • Start in minutes
        </div>
      </div>
    </section>
  );
};

export default CTAFooterSection;
