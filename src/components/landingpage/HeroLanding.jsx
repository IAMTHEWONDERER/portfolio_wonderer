import React, { useState, useEffect } from 'react';

const HeroLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const letters = "WONDERER".split("");

  return (
    <>
      <style jsx>{`
        @keyframes letterEnter {
          from {
            opacity: 0;
            transform: translateY(100px) rotateX(90deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.8;
          }
        }

        .letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(100px) rotateX(90deg);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center bottom;
        }

        .letter.visible {
          animation: letterEnter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .letter:hover {
          color: #e61f00;
          transform: translateY(-10px) scale(1.1);
          text-shadow: 0 10px 20px rgba(230, 31, 0, 0.2);
        }

        .subtitle {
          animation: fadeInUp 1s ease-out 2s forwards;
        }

        .floating-dot {
          animation: float 6s ease-in-out infinite;
        }

        .floating-dot:nth-child(1) {
          animation-delay: 0s;
        }

        .floating-dot:nth-child(2) {
          animation-delay: 2s;
        }

        .floating-dot:nth-child(3) {
          animation-delay: 4s;
        }
      `}</style>

      <section className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center relative overflow-hidden">
        {/* Background decorative gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-full bg-gradient-radial from-gray-100/10 via-transparent to-transparent" 
               style={{
                 background: `radial-gradient(circle at 25% 25%, rgba(240, 240, 240, 0.1) 0%, transparent 50%), 
                            radial-gradient(circle at 75% 75%, rgba(230, 230, 230, 0.1) 0%, transparent 50%)`
               }} />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="floating-dot absolute w-1 h-1 bg-red-500/30 rounded-full top-1/5 left-1/10" />
          <div className="floating-dot absolute w-1 h-1 bg-red-500/30 rounded-full top-3/5 right-15" />
          <div className="floating-dot absolute w-1 h-1 bg-red-500/30 rounded-full bottom-1/5 left-1/5" />
        </div>

        {/* Main WONDERER text */}
        <h1 className="font-erstoria text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-normal text-gray-900 text-center tracking-wider relative z-20 m-0 p-8">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`letter ${isVisible ? 'visible' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <div className="subtitle absolute bottom-1/5 left-1/2 transform -translate-x-1/2 font-erstoria text-base md:text-xl lg:text-2xl text-gray-600 tracking-[0.2em] uppercase opacity-0">
          Creative Portfolio
        </div>
      </section>
    </>
  );
};

export default HeroLanding;