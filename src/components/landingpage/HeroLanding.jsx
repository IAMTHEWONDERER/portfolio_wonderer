import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const HeroLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollToContent = () => {
    const element = document.getElementById('main-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#f5f5f0]"
    >
      {/* Floating Orbs - Smooth CSS Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb floating-orb-1" />
        <div className="floating-orb floating-orb-2" />
        <div className="floating-orb floating-orb-3" />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #001b5b 1px, transparent 1px),
              linear-gradient(to bottom, #001b5b 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="w-full max-w-7xl">
          {/* Header Text */}
          <div className="mb-16 md:mb-24">
            <div className="overflow-hidden">
              <h1 
                className="font-erstoria text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] leading-[0.85] tracking-tight text-[#001b5b] font-normal"
                style={{
                  animation: isLoaded ? 'slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : 'none',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <span className="block">CREATIVE</span>
                <span className="block relative">
                  DEVELOPER
                  <div 
                    className="absolute -right-4 -top-4 w-8 h-8 bg-[#e61f00] rounded-full"
                    style={{
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }}
                  />
                </span>
              </h1>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Column - Description */}
            <div className="space-y-8">
              <div 
                className="overflow-hidden"
                style={{
                  animation: isLoaded ? 'slideUp 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards' : 'none',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                  opacity: isLoaded ? 1 : 0,
                }}
              >
                <p className="text-lg md:text-xl lg:text-2xl text-[#001b5b]/70 font-light leading-relaxed">
                  Crafting digital experiences through innovative design and meticulous development. 
                  Specializing in creating meaningful connections between brands and their audiences.
                </p>
              </div>

              {/* Stats */}
              <div 
                className="grid grid-cols-2 gap-8 pt-8"
                style={{
                  animation: isLoaded ? 'slideUp 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards' : 'none',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                  opacity: isLoaded ? 1 : 0,
                }}
              >
                <div>
                  <div className="text-3xl md:text-4xl font-erstoria font-bold text-[#001b5b] mb-2">50+</div>
                  <div className="text-sm md:text-base text-[#001b5b]/60 uppercase tracking-wide">Projects</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-erstoria font-bold text-[#001b5b] mb-2">5+</div>
                  <div className="text-sm md:text-base text-[#001b5b]/60 uppercase tracking-wide">Years</div>
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="flex flex-col justify-end space-y-8">
              <div 
                className="overflow-hidden"
                style={{
                  animation: isLoaded ? 'slideUp 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards' : 'none',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                  opacity: isLoaded ? 1 : 0,
                }}
              >
                <button className="group relative w-full md:w-auto inline-flex items-center justify-between p-6 md:p-8 bg-[#001b5b] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00]">
                  <span className="font-erstoria text-lg md:text-xl tracking-wide">VIEW MY WORK</span>
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </div>

              <div 
                className="overflow-hidden"
                style={{
                  animation: isLoaded ? 'slideUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards' : 'none',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                  opacity: isLoaded ? 1 : 0,
                }}
              >
                <button className="group w-full md:w-auto inline-flex items-center justify-between p-6 md:p-8 border border-[#001b5b] text-[#001b5b] hover:bg-[#001b5b] hover:text-white transition-all duration-300">
                  <span className="font-erstoria text-lg md:text-xl tracking-wide">GET IN TOUCH</span>
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-6 md:p-12 lg:p-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          {/* Location */}
          <div 
            className="mb-8 md:mb-0"
            style={{
              animation: isLoaded ? 'slideUp 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <div className="text-sm md:text-base text-[#001b5b]/60 uppercase tracking-wide mb-2">Based in</div>
            <div className="font-erstoria text-xl md:text-2xl text-[#001b5b]">Morocco</div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={handleScrollToContent}
            className="group flex items-center gap-3 text-[#001b5b]/60 hover:text-[#001b5b] transition-colors duration-300"
            style={{
              animation: isLoaded ? 'slideUp 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <span className="text-sm md:text-base uppercase tracking-wide">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(15px);
          }
        }

        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(15px) translateX(-10px);
          }
          50% {
            transform: translateY(25px) translateX(5px);
          }
          75% {
            transform: translateY(10px) translateX(-15px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          33% {
            transform: translateY(-15px) translateX(8px) scale(1.05);
          }
          66% {
            transform: translateY(10px) translateX(-12px) scale(0.95);
          }
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.6;
        }

        .floating-orb-1 {
          top: 20%;
          right: 15%;
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #e61f00 0%, #ff4757 100%);
          animation: float 8s ease-in-out infinite;
          filter: blur(1px);
        }

        .floating-orb-2 {
          bottom: 30%;
          left: 10%;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #001b5b 0%, #3742fa 100%);
          animation: floatReverse 10s ease-in-out infinite;
          animation-delay: -2s;
          filter: blur(1px);
        }

        .floating-orb-3 {
          top: 50%;
          left: 70%;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #e61f00 0%, #001b5b 100%);
          animation: floatSlow 12s ease-in-out infinite;
          animation-delay: -4s;
          filter: blur(0.5px);
        }

        @media (max-width: 768px) {
          .floating-orb-1 {
            width: 80px;
            height: 80px;
            top: 15%;
            right: 10%;
          }
          
          .floating-orb-2 {
            width: 60px;
            height: 60px;
            bottom: 25%;
            left: 5%;
          }
          
          .floating-orb-3 {
            width: 40px;
            height: 40px;
            top: 45%;
            left: 65%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroLanding;
