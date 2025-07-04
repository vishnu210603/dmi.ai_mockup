"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "DMI.ai transformed our brand rollout. We launched across 12 platforms in half the time with perfect consistency.",
      name: "Sarah Chen",
      role: "Brand Director",
      company: "TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      companyLogo: "TF"
    },
    {
      quote: "The AI understands our brand better than some of our designers. It's like having a creative team that never sleeps.",
      name: "Marcus Rodriguez",
      role: "Creative Lead",
      company: "InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      companyLogo: "IC"
    },
    {
      quote: "From website to mobile app to business cards - all perfectly on-brand. DMI.ai is the future of brand management.",
      name: "Lisa Wang",
      role: "Marketing VP",
      company: "ScaleUp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      companyLogo: "SU"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent mb-4">
            Trusted by B2B Leaders
          </h2>
          <p className="text-xl text-[#444] max-w-2xl mx-auto">
            See how leading brands use DMI.ai to scale their digital presence
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg transform transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'scale-105 ring-4 ring-[#8A3FFC] ring-opacity-20' 
                    : 'scale-95 opacity-70'
                }`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-[#444] mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-[#121212]">{testimonial.name}</div>
                    <div className="text-sm text-[#444]">{testimonial.role}</div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{testimonial.companyLogo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={prevTestimonial}
              className="bg-white hover:bg-gray-50 rounded-full p-2 shadow-md transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-[#8A3FFC]" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#8A3FFC]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="bg-white hover:bg-gray-50 rounded-full p-2 shadow-md transition-all duration-300"
            >
              <ChevronRight size={24} className="text-[#8A3FFC]" />
            </button>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Brand Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
