"use client"
import React from 'react';
import { Sparkles, Mail, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-[#121212] py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-lg">
                <Sparkles className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold">DMI.ai</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              The AI-first platform that empowers B2B brands to auto-generate on-brand content, websites, and mobile apps at scale.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-[#8A3FFC] transition-colors">AI Brand Engine</a></li>
              <li><a href="#" className="hover:text-[#8A3FFC] transition-colors">Website Builder</a></li>
              <li><a href="#" className="hover:text-[#8A3FFC] transition-colors">Mobile App Design</a></li>
              <li><a href="#" className="hover:text-[#8A3FFC] transition-colors">Marketing Assets</a></li>
              <li><a href="#" className="hover:text-[#8A3FFC] transition-colors">Brand Guidelines</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-[#8A3FFC] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#8A3FFC] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#8A3FFC] transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-[#8A3FFC] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#8A3FFC] transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 DMI.ai. All rights reserved. Built for the future of brand management.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#8A3FFC] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#8A3FFC] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#8A3FFC] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
