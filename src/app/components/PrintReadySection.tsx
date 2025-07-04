"use client"
import React from 'react';
import { Printer, Download, FileText, Smartphone } from 'lucide-react';

const PrintReadySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-lg">
                <Printer className="text-white" size={24} />
              </div>
              <span className="text-[#8A3FFC] font-semibold">Multi-Platform Export</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#121212] mb-6">
              Launch Across Every Channel
            </h2>
            
            <p className="text-lg text-[#444] mb-8 leading-relaxed">
              From business cards to app stores, DMI.ai generates production-ready assets optimized for every platform. One brand, infinite touchpoints.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <FileText className="text-[#8A3FFC]" size={20} />
                <span className="text-[#444]">Print-ready marketing materials</span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="text-[#8A3FFC]" size={20} />
                <span className="text-[#444]">App store assets & mockups</span>
              </div>
              <div className="flex items-center gap-3">
                <Download className="text-[#8A3FFC]" size={20} />
                <span className="text-[#444]">Social media templates & formats</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Explore Exports
              </button>
              <button className="border-2 border-[#8A3FFC] text-[#8A3FFC] px-8 py-3 rounded-lg font-semibold hover:bg-[#8A3FFC] hover:text-white transition-all duration-300">
                Start Building
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-[#8A3FFC] to-[#4F82FF] rounded-lg mb-3 flex items-center justify-center">
                    <FileText className="text-white" size={32} />
                  </div>
                  <div className="text-sm font-medium text-[#121212]">Brand Guidelines</div>
                  <div className="text-xs text-gray-500">Print Ready</div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-3 flex items-center justify-center">
                    <Smartphone className="text-white" size={24} />
                  </div>
                  <div className="text-sm font-medium text-[#121212]">App Store Assets</div>
                  <div className="text-xs text-gray-500">All Formats</div>
                </div>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-400 via-[#8A3FFC] to-[#4F82FF] rounded-lg mb-3 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-1">LAUNCH</div>
                      <div className="text-sm opacity-80">Campaign Kit</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-[#121212]">Marketing Suite</div>
                  <div className="text-xs text-gray-500">Multi-Platform</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
              Export Ready!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintReadySection;
