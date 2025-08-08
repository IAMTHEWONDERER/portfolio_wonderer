import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const HeroLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const rotatingTexts = ['DEVELOPER', 'DESIGNER', 'CREATOR'];

  useEffect(() => {
    setIsLoaded(true);

    // Text rotation animation - slower interval for smooth roulette effect
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToContent = () => {
    const element = document.getElementById('main-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-screen flex flex-col justify-between overflow-hidden bg-[#f5f5f0]"
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

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-24 pt-16">
        <div className="w-full max-w-6xl text-center">
          {/* Name Introduction */}
          <div className="mb-6 overflow-hidden">
            <div 
              className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-sm"
              style={{
                animation: isLoaded ? 'slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <div className="w-12 h-px bg-[#0a0100]/30" />
              <span className="font-erstoria">Oussama Alouche</span>
              <div className="w-12 h-px bg-[#0a0100]/30" />
            </div>
          </div>

          {/* Header Text */}
          <div className="mb-12 md:mb-16">
            <div className="overflow-hidden">
              <h1 
                className="font-erstoria text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight text-[#0a0100] font-normal"
                style={{
                  animation: isLoaded ? 'slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards' : 'none',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <span className="block">CREATIVE</span>
                <span className="block relative overflow-hidden h-[1.2em] text-[#e61f00]">
                  {/* Stack all texts - infinite roulette loop */}
                  {rotatingTexts.map((text, index) => {
                    // Calculate the position for each text
                    const isCurrentText = index === currentTextIndex;
                    const isNextText = index === (currentTextIndex + 1) % rotatingTexts.length;
                    const isPreviousText = index === (currentTextIndex - 1 + rotatingTexts.length) % rotatingTexts.length;
                    
                    let position;
                    let visibility = 'hidden';
                    
                    if (isCurrentText) {
                      position = 'translateY(-100%)'; // Current text slides up and out
                      visibility = 'visible';
                    } else if (isNextText) {
                      position = 'translateY(0)'; // Next text comes to center (visible)
                      visibility = 'visible';
                    } else {
                      position = 'translateY(100%)'; // All others stay below and hidden
                    }

                    return (
                      <span 
                        key={`${text}-${index}`}
                        className="absolute inset-0 flex items-center justify-center roulette-text"
                        style={{
                          transform: position,
                          visibility: visibility,
                          zIndex: isNextText ? 2 : 1,
                        }}
                      >
                        {text}
                      </span>
                    );
                  })}
                 
                </span>
              </h1>
            </div>
          </div>

          {/* Description */}
          <div 
            className="mb-12 overflow-hidden"
            style={{
              animation: isLoaded ? 'slideUp 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-[#0a0100]/70 font-light max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences through innovative design and development. 
              Creating meaningful connections between brands and their audiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center overflow-hidden"
            style={{
              animation: isLoaded ? 'slideUp 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <Link to="/portfolio">
            <button className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer">
              <span className="font-erstoria text-base tracking-wide">VIEW WORK</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            </Link>
            <Link to="/contact">
            <button className="group inline-flex items-center justify-center gap-4 px-8 py-4 border border-[#0a0100] text-[#0a0100] hover:bg-[#0a0100] hover:text-white transition-all duration-300 active:scale-95 min-w-[200px] cursor-pointer">
              <span className="font-erstoria text-base tracking-wide">CONTACT</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-6 md:p-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Location */}
          <div 
            className="text-center sm:text-left"
            style={{
              animation: isLoaded ? 'slideUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <div className="text-sm text-[#0a0100]/60 uppercase tracking-wide mb-1">Based in</div>
            <div className="font-erstoria text-lg text-[#0a0100]">Morocco</div>
          </div>

          {/* Stats */}
          <div 
            className="flex gap-8 text-center"
            style={{
              animation: isLoaded ? 'slideUp 2.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <div>
              <div className="text-2xl font-erstoria font-bold text-[#0a0100] mb-1">15+</div>
              <div className="text-xs text-[#0a0100]/60 uppercase tracking-wide">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-erstoria font-bold text-[#0a0100] mb-1">~2</div>
              <div className="text-xs text-[#0a0100]/60 uppercase tracking-wide">Years</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={handleScrollToContent}
            className="group flex items-center gap-2 text-[#0a0100]/60 hover:text-[#0a0100] transition-colors duration-300 cursor-pointer"
            style={{
              animation: isLoaded ? 'slideUp 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <span className="text-xs uppercase tracking-wide">Explore</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        .roulette-text {
          transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), visibility 0s linear 0s;
        }
      `}</style>
    </section>
  );
};

export default HeroLanding;