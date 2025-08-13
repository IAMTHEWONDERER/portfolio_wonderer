import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, Phone, Github, Linkedin, MapPin, Clock, Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/common/Footer';
import Lenis from 'lenis';

const ContactPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);
  const [showCV, setShowCV] = useState(false);
  const [cvLanguage, setCvLanguage] = useState('english');
  
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleNavbarMenuOpen = () => {
      if (showCV) {
        setShowCV(false);
      }
    };

    window.addEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);

    // Cleanup function
    return () => {
      lenis.destroy();
      window.removeEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);
    };
  }, [showCV]);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "theoblivionitself@gmail.com",
      href: "mailto:theoblivionitself@gmail.com",
      color: "text-[#e61f00]",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 7 20 14 88 07",
      href: "tel:+212720148807",
      color: "text-[#0a0100]",
      description: "Call me during business hours"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/IAMTHEWONDERER",
      href: "https://github.com/IAMTHEWONDERER",
      color: "text-[#e61f00]",
      description: "Check out my repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/oussama-alouche",
      href: "https://linkedin.com/in/oussama-alouche",
      color: "text-[#0a0100]",
      description: "Connect with me professionally"
    }
  ];

  const additionalInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Morocco",
      description: "Based in North Africa"
    },
    {
      icon: Clock,
      label: "Availability",
      value: "GMT+1 Timezone",
      description: "Available Mon-Fri, 9AM-6PM"
    }
  ];

  const cvFiles = {
    english: '/pdfs/Oussama_Alouche.pdf',
    french: '/pdfs/OussamaAlouche.pdf'
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFiles[cvLanguage];
    link.download = `OussamaAlouche_CV_${cvLanguage.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0a0100 1px, transparent 1px),
              linear-gradient(to bottom, #0a0100 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div 
            className="overflow-hidden mb-8"
            style={{
              animation: isLoaded ? 'slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <div className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-sm mb-2">
              <div className="w-12 h-px bg-[#0a0100]/30" />
              <span className="font-erstoria">Get In Touch</span>
              <div className="w-12 h-px bg-[#0a0100]/30" />
            </div>
          </div>

          <div className="overflow-hidden mb-12">
            <h1 
              className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-6"
              style={{
                animation: isLoaded ? 'slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              LET'S CREATE
              <span className="block text-[#e61f00]">TOGETHER</span>
            </h1>
          </div>

          <div 
            className="overflow-hidden mb-16"
            style={{
              animation: isLoaded ? 'slideUp 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-4xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Whether it's a complete 
              digital transformation or a simple website refresh, let's discuss how we can 
              bring your vision to life.
            </p>
          </div>
        </div>

        {/* Contact Information Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          style={{
            animation: isLoaded ? 'slideUp 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const isHovered = hoveredContact === index;
            
            return (
              <a 
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group relative border border-[#0a0100]/10 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-[#0a0100]/20 transition-all duration-500 cursor-pointer overflow-hidden p-8 block active:scale-[0.98]"
                onMouseEnter={() => setHoveredContact(index)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#e61f00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-center gap-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#0a0100]/5 group-hover:bg-[#e61f00]/10 transition-colors duration-500">
                    <Icon className={`w-8 h-8 ${contact.color} transition-transform duration-300 group-hover:scale-110`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-erstoria text-xl text-[#0a0100] tracking-wide mb-2 group-hover:text-[#e61f00] transition-colors duration-300">
                      {contact.label}
                    </h3>
                    <p className="text-[#0a0100]/70 text-sm leading-relaxed group-hover:text-[#0a0100]/90 transition-colors duration-300 mb-2">
                      {contact.value}
                    </p>
                    <p className="text-[#0a0100]/50 text-xs">
                      {contact.description}
                    </p>
                  </div>

                  <ArrowUpRight 
                    className={`w-6 h-6 text-[#0a0100]/40 transition-all duration-300 ${
                      isHovered ? 'translate-x-1 -translate-y-1 text-[#e61f00]' : ''
                    }`}
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional Information Section */}
        <div 
          className="max-w-4xl mx-auto mb-20"
          style={{
            animation: isLoaded ? 'slideUp 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          <div className="text-center mb-12">
            <h2 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4">
              Additional Information
            </h2>
            <p className="text-[#0a0100]/70 leading-relaxed">
              Everything you need to know about getting in touch and working together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {additionalInfo.map((info, index) => {
              const Icon = info.icon;
              
              return (
                <div key={index} className="flex items-center gap-6 p-6 bg-white/30 backdrop-blur-sm border border-[#0a0100]/10">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0a0100]/5">
                    <Icon className="w-6 h-6 text-[#0a0100]/60" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-erstoria text-lg text-[#0a0100]/80 tracking-wide mb-2">
                      {info.label}
                    </h4>
                    <p className="text-[#0a0100]/70 text-sm mb-1">
                      {info.value}
                    </p>
                    <p className="text-[#0a0100]/50 text-xs">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Response Guarantee */}
          <div className="bg-[#e61f00]/5 border border-[#e61f00]/20 p-8 text-center">
            <h4 className="font-erstoria text-xl text-[#0a0100] mb-4">
              Quick Response Guarantee
            </h4>
            <p className="text-[#0a0100]/70 leading-relaxed max-w-2xl mx-auto">
              I typically respond to all messages within 24 hours during business days. 
              For urgent matters, feel free to call or text me directly. Let's start building 
              something amazing together!
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div 
          className="text-center"
          style={{
            animation: isLoaded ? 'slideUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          <div className="mb-8">
            <h2 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4">
              Ready to start your project?
            </h2>
            <p className="text-[#0a0100]/70 max-w-2xl mx-auto leading-relaxed">
              From initial concept to final launch, I'm here to guide you through every step 
              of your digital journey. Let's create something extraordinary together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:theoblivionitself@gmail.com"
              className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
            >
              <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-erstoria text-base tracking-wide">SEND EMAIL</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
            
            <a
              href="tel:+212720148807"
              className="group inline-flex items-center justify-center gap-4 px-8 py-4 border border-[#0a0100] text-[#0a0100] hover:bg-[#0a0100] hover:text-white transition-all duration-300 active:scale-95 min-w-[200px] cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span className="font-erstoria text-base tracking-wide">CALL NOW</span>
            </a>

            <button 
              onClick={() => setShowCV(true)}
              className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#e61f00] text-white overflow-hidden transition-all duration-500 hover:bg-[#0a0100] active:scale-95 min-w-[200px] cursor-pointer"
            >
              <span className="font-erstoria text-base tracking-wide">VIEW MY CV</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />

      {/* CV Modal */}
      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a0100]/90 backdrop-blur-sm z-[100000] flex items-center justify-center p-2 sm:p-4"
            onClick={() => setShowCV(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#f5f5f0] shadow-2xl w-full max-w-5xl h-full sm:h-[95vh] sm:max-h-[95vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header - Responsive */}
              <div className="bg-[#f5f5f0] p-3 sm:p-6 border-b border-[#0a0100]/10 flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-4">
                  <h2 className="font-erstoria text-lg sm:text-2xl tracking-wide text-[#0a0100]">CV</h2>
                  <div className="w-4 sm:w-8 h-px bg-[#e61f00]" />
                </div>
              </div>

              {/* PDF Viewer - Responsive Height */}
              <div className="flex-1 bg-[#f5f5f0] p-2 sm:p-6 pt-2 sm:pt-4 overflow-hidden">
                <div className="w-full h-full bg-white shadow-inner overflow-auto">
                  <iframe
                    key={cvLanguage}
                    src={`${cvFiles[cvLanguage]}#toolbar=0&navpanes=0&scrollbar=1&zoom=FitH`}
                    className="w-full h-full border-none"
                    title={`CV - ${cvLanguage === 'english' ? 'English' : 'Français'}`}
                    onLoad={() => console.log(`CV loaded: ${cvLanguage}`)}
                  />
                </div>
              </div>

              {/* Modal Footer - Responsive Controls */}
              <div className="bg-[#f5f5f0] p-3 sm:p-6 border-t border-[#0a0100]/10 flex-shrink-0">
                <div className="flex items-center justify-between gap-2">
                  {/* Language Toggle */}
                  <div className="flex items-center gap-1 bg-white border border-[#0a0100]/20">
                    <button
                      onClick={() => setCvLanguage('english')}
                      className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-erstoria tracking-wide transition-all duration-300 cursor-pointer active:scale-95 ${
                        cvLanguage === 'english'
                          ? 'bg-[#0a0100] text-white'
                          : 'text-[#0a0100]/70 hover:text-[#0a0100] hover:bg-[#0a0100]/5'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setCvLanguage('french')}
                      className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-erstoria tracking-wide transition-all duration-300 cursor-pointer active:scale-95 ${
                        cvLanguage === 'french'
                          ? 'bg-[#0a0100] text-white'
                          : 'text-[#0a0100]/70 hover:text-[#0a0100] hover:bg-[#0a0100]/5'
                      }`}
                    >
                      FR
                    </button>
                  </div>
                  
                  {/* Action Buttons Group */}
                  <div className="flex items-center gap-1">
                    {/* Download Button - Icon only */}
                    <button
                      onClick={handleDownloadCV}
                      className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300 cursor-pointer active:scale-95"
                      title="Download CV"
                      aria-label="Download CV"
                    >
                      <Download size={16} className="sm:w-5 sm:h-5" />
                    </button>

                    {/* Close Button */}
                    <button
                      onClick={() => setShowCV(false)}
                      className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300 cursor-pointer active:scale-95"
                      aria-label="Close CV"
                    >
                      <X size={16} className="sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Loading fallback */}
              <div className="absolute inset-6 flex items-center justify-center bg-white" style={{display: 'none'}} id="pdf-loading">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-[#e61f00] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-[#0a0100]/60 font-erstoria tracking-wide">LOADING CV...</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;