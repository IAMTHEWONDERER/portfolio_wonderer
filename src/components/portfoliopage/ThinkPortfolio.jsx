import React, { useState, useEffect, useRef } from 'react';
import { Brain, Target, Users, Lightbulb, Code, Palette, Zap, ArrowRight, Circle } from 'lucide-react';

const ThinkPortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-rotate through phases
  useEffect(() => {
    if (isLoaded) {
      const interval = setInterval(() => {
        setActivePhase((prev) => (prev + 1) % thinkingPhases.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#f5f5f0] overflow-hidden"
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

        {/* Philosophy Quote */}
        <div 
          className="text-center max-w-4xl mx-auto"
          style={{
            animation: isLoaded ? 'slideUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.6s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          <div className="bg-[#e61f00]/5 border border-[#e61f00]/20 p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl font-light text-[#0a0100]/80 leading-relaxed mb-6 italic">
              "Great design isn't just about making things look beautiful—it's about understanding 
              people, solving problems, and creating experiences that truly matter."
            </blockquote>
            <div className="w-12 h-px bg-[#e61f00] mx-auto mb-4" />
            <cite className="font-erstoria text-sm uppercase tracking-widest text-[#0a0100]/60">
              — Oussama Alouche
            </cite>
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
  );
};

export default ThinkPortfolio;