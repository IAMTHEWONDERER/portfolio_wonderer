import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Star, Award, Users, Clock, Sparkles, Zap, Target } from 'lucide-react';
import HeroLanding from '../components/landingpage/HeroLanding';
import AboutLanding from '../components/landingpage/AboutLanding';
import TechStackLanding from '../components/landingpage/TechStackLanding';

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

      {/* Services Section with Creative Cards */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#e61f00]/5 text-[#e61f00] rounded-full mb-8">
              <Target className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#001b5b] mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What I Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive web development and design services tailored to your unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
              <div className="w-16 h-16 bg-[#001b5b]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-[#001b5b]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001b5b] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Web Development</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Custom web applications built with modern technologies and best practices
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#e61f00] rounded-full"></div>
                  React & Next.js Development
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#e61f00] rounded-full"></div>
                  Full-Stack Solutions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#e61f00] rounded-full"></div>
                  API Integration
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
              <div className="w-16 h-16 bg-[#e61f00]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-[#e61f00]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001b5b] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>UI/UX Design</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Beautiful, intuitive interfaces that enhance user experience and engagement
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#e61f00] rounded-full"></div>
                  User Interface Design
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#e61f00] rounded-full"></div>
                  User Experience Optimization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#e61f00] rounded-full"></div>
                  Prototyping & Wireframing
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
              <div className="w-16 h-16 bg-[#001b5b]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-[#001b5b]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001b5b] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Performance</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Optimized websites that load fast and provide exceptional user experience
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#e61f00] rounded-full"></div>
                  Speed Optimization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#e61f00] rounded-full"></div>
                  SEO Best Practices
                </li> 
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#e61f00] rounded-full"></div>
                  Mobile Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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