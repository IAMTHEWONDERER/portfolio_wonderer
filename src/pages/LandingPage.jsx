import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Star, Award, Users, Clock, Sparkles, Zap, Target } from 'lucide-react';
import HeroLanding from '../components/landingpage/HeroLanding';

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroLanding />

      {/* About Section with Creative Layout */}
      <section id="main-content" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#001b5b]/5 text-[#001b5b] rounded-full mb-8">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>About Me</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-[#001b5b] mb-8 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Crafting Digital
                <span className="block text-[#e61f00]">Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
                With over 5 years of experience in web development and design, I specialize in creating 
                stunning, functional, and user-centric digital experiences. Every project is approached 
                with meticulous attention to detail and a passion for innovation.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#e61f00] rounded-full"></div>
                  <span className="text-lg text-gray-700 font-medium">Modern Web Technologies</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#e61f00] rounded-full"></div>
                  <span className="text-lg text-gray-700 font-medium">Responsive Design</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#e61f00] rounded-full"></div>
                  <span className="text-lg text-gray-700 font-medium">Performance Optimization</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center group">
                    <div className="text-4xl font-black text-[#001b5b] mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>Projects</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black text-[#001b5b] mb-3 group-hover:scale-110 transition-transform duration-300">5+</div>
                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>Years</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black text-[#001b5b] mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>Satisfaction</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black text-[#001b5b] mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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