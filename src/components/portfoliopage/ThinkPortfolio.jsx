import React, { useState, useEffect } from 'react';
import { Brain, Target, Users, Lightbulb, Code, Palette, Zap, ArrowRight, Circle, ArrowUpRight, Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThinkPortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [showCV, setShowCV] = useState(false);
  const [cvLanguage, setCvLanguage] = useState('english');
  const [isSafari, setIsSafari] = useState(false);

  const thinkingPhases = [
    {
      icon: Brain,
      title: "UNDERSTAND",
      subtitle: "Deep Research",
      description: "I start by immersing myself in your world. Understanding your business, users, and goals is the foundation of every successful project.",
      details: [
        "User research & analysis",
        "Business goal alignment",
        "Market & competitor study",
        "Technical requirements"
      ],
      color: "from-[#0a0100] to-[#2d2d2d]",
      delay: 0.2
    },
    {
      icon: Lightbulb,
      title: "IDEATE",
      subtitle: "Creative Solutions",
      description: "With insights gathered, I brainstorm innovative solutions that balance creativity with functionality, ensuring every idea serves a purpose.",
      details: [
        "Concept development",
        "Feature prioritization",
        "User journey mapping",
        "Creative exploration"
      ],
      color: "from-[#e61f00] to-[#ff4d4d]",
      delay: 0.4
    },
    {
      icon: Palette,
      title: "DESIGN",
      subtitle: "Visual Excellence",
      description: "I craft beautiful, intuitive interfaces that not only look stunning but guide users naturally toward their goals with seamless interactions.",
      details: [
        "Visual design systems",
        "Interaction prototypes",
        "Responsive layouts",
        "Accessibility focus"
      ],
      color: "from-[#0a0100] to-[#4a4a4a]",
      delay: 0.6
    },
    {
      icon: Code,
      title: "DEVELOP",
      subtitle: "Technical Mastery",
      description: "Clean, efficient code brings designs to life. I build scalable, performant solutions using modern technologies and best practices.",
      details: [
        "Modern frameworks",
        "Performance optimization",
        "Clean architecture",
        "Cross-browser compatibility"
      ],
      color: "from-[#e61f00] to-[#cc1a00]",
      delay: 0.8
    },
    {
      icon: Target,
      title: "OPTIMIZE",
      subtitle: "Continuous Improvement",
      description: "Launch is just the beginning. I monitor, analyze, and refine to ensure your project continues to deliver exceptional results.",
      details: [
        "Performance monitoring",
        "User feedback analysis",
        "Iterative improvements",
        "Success measurement"
      ],
      color: "from-[#0a0100] to-[#666666]",
      delay: 1.0
    }
  ];

  const principles = [
    {
      icon: Users,
      title: "User-Centric",
      description: "Every decision prioritizes the user experience"
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Fast, efficient solutions that scale"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Designs that drive measurable results"
    }
  ];

  const cvFiles = {
    english: '/pdfs/Oussama_Alouche.pdf',
    french: '/pdfs/OussamaAlouche.pdf'
  };

  useEffect(() => {
    // Load immediately when component mounts
    setIsLoaded(true);

    // Detect Safari browser
    const detectSafari = () => {
      const userAgent = navigator.userAgent;
      const isSafariBrowser = /Safari/.test(userAgent) && !/Chrome/.test(userAgent) && !/Chromium/.test(userAgent);
      setIsSafari(isSafariBrowser);
    };

    detectSafari();

    const handleNavbarMenuOpen = () => {
      if (showCV) {
        setShowCV(false);
      }
    };

    window.addEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);

    return () => {
      window.removeEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);
    };
  }, [showCV]);

  // Auto-rotate through phases
  useEffect(() => {
    if (isLoaded) {
      const interval = setInterval(() => {
        setActivePhase((prev) => (prev + 1) % thinkingPhases.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFiles[cvLanguage];
    link.download = `OussamaAlouche_CV_${cvLanguage.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section 
        className="relative py-20 md:pt-32 md:pb-12 bg-[#f5f5f0] overflow-hidden"
      >
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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {thinkingPhases.map((phase, index) => (
          <div
            key={index}
            className={`absolute w-64 h-64 bg-gradient-to-br ${phase.color} opacity-[0.02] rounded-full blur-3xl transition-all duration-1000 ${
              activePhase === index ? 'scale-110 opacity-[0.04]' : 'scale-90 opacity-[0.01]'
            }`}
            style={{
              left: `${10 + index * 18}%`,
              top: `${20 + (index % 2) * 40}%`,
              animationDelay: `${index * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
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
              <span className="font-erstoria">Philosophy</span>
              <div className="w-12 h-px bg-[#0a0100]/30" />
            </div>
          </div>

          <div className="overflow-hidden mb-12">
            <h2 
              className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-6"
              style={{
                animation: isLoaded ? 'slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              HOW I
              <span className="block text-[#e61f00]">THINK</span>
            </h2>
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
              My design philosophy is rooted in understanding, empathy, and strategic thinking. 
              Every project follows a thoughtful process that ensures exceptional outcomes.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          style={{
            animation: isLoaded ? 'slideUp 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div 
                key={index}
                className="bg-white/30 backdrop-blur-sm border border-[#0a0100]/10 p-8 text-center hover:bg-white/50 hover:border-[#0a0100]/20 transition-all duration-500 h-64"
              >
                <div className="w-16 h-16 bg-[#e61f00]/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#e61f00]" />
                </div>
                <h3 className="font-erstoria text-xl text-[#0a0100] tracking-wide mb-3">
                  {principle.title}
                </h3>
                <p className="text-[#0a0100]/70 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Thinking Process */}
        <div className="mb-20">
          <div 
            className="text-center mb-16"
            style={{
              animation: isLoaded ? 'slideUp 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <h3 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4">
              MY DESIGN PROCESS
            </h3>
            <p className="text-[#0a0100]/70 max-w-3xl mx-auto leading-relaxed">
              A systematic approach that transforms ideas into impactful digital experiences
            </p>
          </div>

          {/* Process Cards - Staggered Layout */}
          <div className="mb-12">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 max-w-5xl mx-auto">
              {thinkingPhases.slice(0, 3).map((phase, index) => {
                const Icon = phase.icon;
                const isActive = activePhase === index;
                
                return (
                  <div 
                    key={index}
                    className="group relative cursor-pointer"
                    onClick={() => setActivePhase(index)}
                    style={{
                      animation: isLoaded ? `slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${1.2 + phase.delay}s forwards` : 'none',
                      transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
                      opacity: isLoaded ? 1 : 0,
                    }}
                  >
                    <div className={`bg-white border transition-all duration-700 overflow-hidden h-80 flex flex-col ${
                      isActive 
                        ? 'border-[#e61f00] shadow-xl' 
                        : 'border-[#0a0100]/10 hover:border-[#0a0100]/20 hover:shadow-lg'
                    }`}>
                      
                      {/* Card Header */}
                      <div className={`p-6 flex-1 flex flex-col transition-all duration-700 ${
                        isActive ? 'bg-gradient-to-br from-[#e61f00]/5 via-transparent to-[#e61f00]/10' : ''
                      }`}>
                        
                        {/* Phase Number */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-[#0a0100]/30 font-erstoria">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                            isActive 
                              ? 'border-[#e61f00] bg-[#e61f00]' 
                              : 'border-[#0a0100]/20 group-hover:border-[#e61f00]/50'
                          }`}>
                            <Circle className={`w-2 h-2 transition-colors duration-500 ${
                              isActive ? 'text-white' : 'text-transparent'
                            }`} />
                          </div>
                        </div>

                        {/* Icon */}
                        <div className={`w-14 h-14 flex items-center justify-center mb-4 transition-all duration-500 ${
                          isActive 
                            ? 'bg-[#e61f00] text-white' 
                            : 'bg-[#0a0100]/5 text-[#0a0100]/60 group-hover:bg-[#0a0100]/10'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        
                        {/* Title */}
                        <h4 className={`font-erstoria text-lg tracking-wide mb-2 transition-colors duration-300 ${
                          isActive ? 'text-[#e61f00]' : 'text-[#0a0100] group-hover:text-[#e61f00]'
                        }`}>
                          {phase.title}
                        </h4>

                        {/* Subtitle */}
                        <p className="text-xs uppercase tracking-wide text-[#0a0100]/60 mb-3 font-erstoria">
                          {phase.subtitle}
                        </p>
                        
                        {/* Description */}
                        <p className="text-sm text-[#0a0100]/70 leading-relaxed flex-1">
                          {phase.description}
                        </p>
                      </div>

                      {/* Active Indicator Glow */}
                      {isActive && (
                        <div className="absolute inset-0 border-2 border-[#e61f00] rounded-sm opacity-20 pointer-events-none" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row - 2 Cards Centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {thinkingPhases.slice(3, 5).map((phase, index) => {
                const actualIndex = index + 3;
                const Icon = phase.icon;
                const isActive = activePhase === actualIndex;
                
                return (
                  <div 
                    key={actualIndex}
                    className="group relative cursor-pointer"
                    onClick={() => setActivePhase(actualIndex)}
                    style={{
                      animation: isLoaded ? `slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${1.2 + phase.delay}s forwards` : 'none',
                      transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
                      opacity: isLoaded ? 1 : 0,
                    }}
                  >
                    <div className={`bg-white border transition-all duration-700 overflow-hidden h-80 flex flex-col ${
                      isActive 
                        ? 'border-[#e61f00] shadow-xl' 
                        : 'border-[#0a0100]/10 hover:border-[#0a0100]/20 hover:shadow-lg'
                    }`}>
                      
                      {/* Card Header */}
                      <div className={`p-6 flex-1 flex flex-col transition-all duration-700 ${
                        isActive ? 'bg-gradient-to-br from-[#e61f00]/5 via-transparent to-[#e61f00]/10' : ''
                      }`}>
                        
                        {/* Phase Number */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-[#0a0100]/30 font-erstoria">
                            {String(actualIndex + 1).padStart(2, '0')}
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                            isActive 
                              ? 'border-[#e61f00] bg-[#e61f00]' 
                              : 'border-[#0a0100]/20 group-hover:border-[#e61f00]/50'
                          }`}>
                            <Circle className={`w-2 h-2 transition-colors duration-500 ${
                              isActive ? 'text-white' : 'text-transparent'
                            }`} />
                          </div>
                        </div>

                        {/* Icon */}
                        <div className={`w-14 h-14 flex items-center justify-center mb-4 transition-all duration-500 ${
                          isActive 
                            ? 'bg-[#e61f00] text-white' 
                            : 'bg-[#0a0100]/5 text-[#0a0100]/60 group-hover:bg-[#0a0100]/10'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        
                        {/* Title */}
                        <h4 className={`font-erstoria text-lg tracking-wide mb-2 transition-colors duration-300 ${
                          isActive ? 'text-[#e61f00]' : 'text-[#0a0100] group-hover:text-[#e61f00]'
                        }`}>
                          {phase.title}
                        </h4>

                        {/* Subtitle */}
                        <p className="text-xs uppercase tracking-wide text-[#0a0100]/60 mb-3 font-erstoria">
                          {phase.subtitle}
                        </p>
                        
                        {/* Description */}
                        <p className="text-sm text-[#0a0100]/70 leading-relaxed flex-1">
                          {phase.description}
                        </p>
                      </div>

                      {/* Active Indicator Glow */}
                      {isActive && (
                        <div className="absolute inset-0 border-2 border-[#e61f00] rounded-sm opacity-20 pointer-events-none" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Navigation */}
          <div className="flex justify-center">
            <div className="flex gap-3">
              {thinkingPhases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`relative group transition-all duration-300 cursor-pointer ${
                    index === activePhase 
                      ? 'scale-110' 
                      : 'hover:scale-105'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activePhase 
                      ? 'bg-[#e61f00] shadow-lg shadow-[#e61f00]/30' 
                      : 'bg-[#0a0100]/30 group-hover:bg-[#0a0100]/50'
                  }`} />
                  {index === activePhase && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#e61f00] animate-ping opacity-20" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* View My CV Button */}
        <div 
          className="text-center mb-20"
          style={{
            animation: isLoaded ? 'slideUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.8s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          <div className="border border-[#0a0100]/10 bg-white/50 backdrop-blur-sm p-8 md:p-12 max-w-4xl mx-auto">
            <h4 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4 tracking-wide">
              Interested in Learning More?
            </h4>
            <p className="text-lg text-[#0a0100]/70 mb-6 leading-relaxed">
              Dive deeper into my experience, skills, and professional journey through my comprehensive CV.
            </p>
            <p className="text-sm text-[#0a0100]/50 mb-8 font-erstoria tracking-wide">
              LAST UPDATED: 13TH AUGUST 2025
            </p>
            <button 
              onClick={() => setShowCV(true)}
              className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
            >
              <span className="font-erstoria text-base tracking-wide">VIEW MY CV</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>

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
            {/* Modal Header */}
            <div className="bg-[#f5f5f0] p-3 sm:p-6 border-b border-[#0a0100]/10 flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-4">
                <h2 className="font-erstoria text-lg sm:text-2xl tracking-wide text-[#0a0100]">CV</h2>
                <div className="w-4 sm:w-8 h-px bg-[#e61f00]" />
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-[#f5f5f0] p-2 sm:p-6 pt-2 sm:pt-4 overflow-hidden">
              <div className="w-full h-full bg-white shadow-inner overflow-auto">
                {isSafari ? (
                  /* Safari-specific PDF viewer */
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-6 p-8">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-[#0a0100]/10 rounded-full flex items-center justify-center mx-auto">
                        <svg 
                          className="w-8 h-8 text-[#0a0100]/60" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                          />
                        </svg>
                      </div>
                      <h3 className="font-erstoria text-lg text-[#0a0100] tracking-wide">
                        Safari PDF Viewer
                      </h3>
                      <p className="text-[#0a0100]/70 text-sm max-w-md">
                        Safari has restrictions on embedded PDFs. Click the button below to open the CV in a new tab for the best viewing experience.
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <a
                        href={cvFiles[cvLanguage]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#0a0100] text-white hover:bg-[#e61f00] transition-all duration-300 cursor-pointer active:scale-95"
                      >
                        <span className="font-erstoria text-sm tracking-wide">OPEN CV IN NEW TAB</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                      
                      <button
                        onClick={handleDownloadCV}
                        className="group inline-flex items-center justify-center gap-3 px-6 py-3 border border-[#0a0100]/30 text-[#0a0100] hover:bg-[#0a0100]/5 transition-all duration-300 cursor-pointer active:scale-95"
                      >
                        <Download className="w-4 h-4" />
                        <span className="font-erstoria text-sm tracking-wide">DOWNLOAD CV</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Standard iframe for other browsers */
                  <iframe
                    key={cvLanguage}
                    src={`${cvFiles[cvLanguage]}#toolbar=0&navpanes=0&scrollbar=1&zoom=FitH`}
                    className="w-full h-full border-none"
                    title={`CV - ${cvLanguage === 'english' ? 'English' : 'Français'}`}
                    onLoad={() => console.log(`CV loaded: ${cvLanguage}`)}
                  />
                )}
              </div>
            </div>

            {/* Modal Footer */}
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
                
                {/* Action Buttons */}
                <div className="flex items-center gap-1">
                  {/* Download Button */}
                  <button
                    onClick={handleDownloadCV}
                    className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300 cursor-pointer active:scale-95"
                    title="Download CV"
                  >
                    <Download size={16} className="sm:w-5 sm:h-5" />
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={() => setShowCV(false)}
                    className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300 cursor-pointer active:scale-95"
                  >
                    <X size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default ThinkPortfolio;