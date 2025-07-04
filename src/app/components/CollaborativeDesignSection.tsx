"use client"
import React from 'react';
import { MessageCircle, Users, Share2, Clock } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const CollaborativeDesignSection = () => {
  const teamMembers = [
    { name: 'Gaurav', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    { name: 'Natasha', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face' },
    { name: 'Vishal', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-xl">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Live brand sync</span>
                  </div>
                  <Clock size={16} className="text-gray-400" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {teamMembers.map((member, index) => (
                        <div key={member.name} className="relative">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                          />
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                            index === 0 ? 'bg-green-400' : index === 1 ? 'bg-blue-400' : 'bg-purple-400'
                          }`}></div>
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">3 brand managers online</span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <img src={teamMembers[1].avatar} alt="Natasha" className="w-6 h-6 rounded-full" />
                      <div className="bg-[#8A3FFC] text-white text-sm px-3 py-2 rounded-lg rounded-tl-none">
                        Brand guidelines approved! 🎨
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-blue-500 text-white text-sm px-3 py-2 rounded-lg rounded-tr-none">
                        Mobile designs look perfect ✨
                      </div>
                      <img src={teamMembers[2].avatar} alt="Vishal" className="w-6 h-6 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MessageCircle size={14} />
                    <span>
                      <TypingAnimation 
                        text="Gaurav is reviewing brand consistency..." 
                        speed={80}
                        shouldLoop={true}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-lg">
                <MessageCircle className="text-white" size={24} />
              </div>
              <span className="text-[#8A3FFC] font-semibold">Brand Collaboration</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#121212] mb-6">
              Keep Your Team Aligned
            </h2>
            
            <p className="text-lg text-[#444] mb-8 leading-relaxed">
              Collaborate on brand assets in real-time. Ensure consistency across all platforms with built-in brand guidelines and approval workflows.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Users className="text-[#8A3FFC]" size={20} />
                <span className="text-[#444]">Real-time brand asset collaboration</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="text-[#8A3FFC]" size={20} />
                <span className="text-[#444]">Built-in approval workflows</span>
              </div>
              <div className="flex items-center gap-3">
                <Share2 className="text-[#8A3FFC]" size={20} />
                <span className="text-[#444]">Automatic brand consistency checks</span>
              </div>
            </div>
            
            <button className="border-2 border-[#8A3FFC] text-[#8A3FFC] px-8 py-3 rounded-lg font-semibold hover:bg-[#8A3FFC] hover:text-white transition-all duration-300">
              Start Team Workspace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborativeDesignSection;
