"use client"
import React from 'react';

const TrustedBrandsSection = () => {
  const brands = [
    'Google', 'Microsoft', 'Adobe', 'Netflix', 'Salesforce', 'Meta', 
    'Shopify', 'Spotify', 'Airbnb', 'Uber', 'Tesla', 'PayPal'
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-full"></div>
            <span className="text-sm font-semibold uppercase tracking-wider">Trusted Worldwide</span>
            <div className="w-2 h-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-full"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent">
            Powering B2B Brands Globally
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies that trust DMI.ai to scale their brand presence
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex animate-scroll">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center group"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 px-8 py-6 border border-gray-100 group-hover:border-[#8A3FFC]/20">
                  <div className="text-xl font-bold text-gray-400 group-hover:text-[#8A3FFC] transition-colors duration-300">
                    {brand}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>500+ Active Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBrandsSection;
