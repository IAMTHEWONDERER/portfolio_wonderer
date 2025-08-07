import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Star, Award, Users, Clock, Sparkles, Zap, Target } from 'lucide-react';
import HeroLanding from '../components/landingpage/HeroLanding';
import AboutLanding from '../components/landingpage/AboutLanding';
import TechStackLanding from '../components/landingpage/TechStackLanding';
import ServiceLanding from '../components/landingpage/ServiceLanding';
import PortfolioLanding from '../components/landingpage/PorftolioLanding';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f0] relative overflow-hidden">
      {/* Hero Section */}
      <HeroLanding />

      {/* About Section - New Artistic Component */}
      <AboutLanding />

      {/* Tech Stack Section */}
      <TechStackLanding />

      {/* Services Section - Now using our custom component */}
      <ServiceLanding />

      {/* Portfolio Section */}
      <PortfolioLanding />

      {/* Creative CTA Section */}
      <section className="py-32 bg-[#001b5b] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Start Your
            <span className="block text-[#e61f00]">Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your vision and create something extraordinary together. 
            Your success is my priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-12 py-6 bg-[#e61f00] text-white font-semibold rounded-full hover:bg-[#d61a00] transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-2xl">
              <span className="flex items-center gap-3 text-lg">
                Start Your Project
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            <button className="px-12 py-6 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#001b5b] transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 text-lg">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img src="/imgs/logotext.png" alt="logo" className='h-20 mx-auto' />
            </div>
            <p className="text-gray-400 mb-8 text-lg">
              Crafting digital experiences with precision and innovation
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="text-gray-400 hover:text-[#e61f00] transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e61f00] transition-colors duration-300 font-medium">
                Portfolio
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e61f00] transition-colors duration-300 font-medium">
                Contact
              </a>
            </div>
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2024 Wonderer. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;