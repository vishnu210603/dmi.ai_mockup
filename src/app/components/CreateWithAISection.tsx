"use client"
import React from 'react';
import { Sparkles, Wand2, Smartphone, Globe } from 'lucide-react';

const CreateWithAISection = () => {
  return (
    <section id='features' className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-lg">
                <Sparkles className="text-white" size={24} />
              </div>
              <span className="text-[#8A3FFC] font-semibold">AI-Powered Brand Engine</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#121212] mb-6">
              One Brand Kit. Infinite Possibilities.
            </h2>
            
            <p className="text-lg text-[#444] mb-8 leading-relaxed">
              Upload your brand assets once, and watch DMI.ai auto-generate websites, mobile apps, social content, and marketing materials that perfectly match your brand identity.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Globe className="text-[#8A3FFC]" size={20} />
                <span className="text-[#444]">Auto-generate responsive websites</span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="text-[#8A3FFC]" size={20} />
                <span className="text-[#444]">Create native mobile app designs</span>
              </div>
              <div className="flex items-center gap-3">
                <Wand2 className="text-[#8A3FFC]" size={20} />
                <span className="text-[#444]">Generate on-brand marketing content</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Upload Brand Kit
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#8A3FFC] rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Brand analysis in progress...</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-full h-24 bg-gradient-to-br from-[#8A3FFC] to-[#4F82FF] rounded-lg mb-3 flex items-center justify-center">
                      <Globe className="text-white" size={24} />
                    </div>
                    <div className="text-xs text-gray-500">Website</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm ring-2 ring-[#8A3FFC] ring-opacity-20">
                    <div className="w-full h-24 bg-gradient-to-br from-purple-400 via-[#8A3FFC] to-[#4F82FF] rounded-lg mb-3 flex items-center justify-center">
                      <Smartphone className="text-white animate-pulse" size={24} />
                    </div>
                    <div className="text-xs text-[#8A3FFC] font-semibold">Mobile App</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} className="text-[#8A3FFC]" />
                    <span className="text-sm font-medium">Brand Intelligence</span>
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    "Detected modern SaaS brand. Generating clean, professional layouts with your purple gradient and contemporary typography."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateWithAISection;
