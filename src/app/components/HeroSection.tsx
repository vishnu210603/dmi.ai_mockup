"use client"
import React from 'react';
import { ArrowRight, Sparkles, Zap, Target, Play, Pause } from 'lucide-react';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const route = useRouter();

  return (
    <section id='about' className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-border p-[2px] rounded-full mb-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-full"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent uppercase tracking-wider">AI-First Brand Platform</span>
                <div className="w-2 h-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-full"></div>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Launch Your Brand
              <br />
              <span className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent">
                Everywhere
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              Create consistent, professional brand experiences across all platforms with our AI-powered design platform. 
              From social media to presentations, maintain your brand identity automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start mb-12">
              <button 
                onClick={() => route.push('/templates')}
                className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <Sparkles size={24} />
                Start Building Now
                <ArrowRight size={24} />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-[#8A3FFC] hover:text-[#8A3FFC] transition-all duration-300 bg-white/50 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Side - Graphics (Smaller) */}
          <div className="relative h-[450px]">
            <div className="relative z-10 h-full">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 h-full flex flex-col scale-[0.85]">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-4 mb-4 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded w-2/3"></div>
                  </div>

                  <div className="relative bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg h-32 flex items-center justify-center mb-4">
                    <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
                    <div className="relative z-10 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center animate-pulse">
                      <Pause className="text-purple-600" size={20} />
                    </div>
                    <div className="absolute top-3 left-3 text-white/80 text-sm font-medium">Brand Video</div>
                    <div className="absolute bottom-3 right-3 text-white/80 text-xs">2:34</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 bg-gradient-to-r from-purple-300 to-pink-300 rounded"></div>
                    <div className="h-8 bg-gradient-to-r from-blue-300 to-purple-300 rounded"></div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="h-10 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded flex-1 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Create Design</span>
                  </div>
                  <div className="h-10 bg-gray-200 rounded w-20 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Save</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-bounce">
                <Sparkles className="text-purple-500" size={20} />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-pulse">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 -right-6 bg-white rounded-full p-2 shadow-lg animate-ping">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `
      }} />
    </section>
  );
};

export default HeroSection;
