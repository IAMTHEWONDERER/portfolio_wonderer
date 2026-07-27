import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';
import { heroCarouselProjects, PROFILE } from '../../data/projects';
import { ContainerScroll } from '../ui/container-scroll-animation';
import ProjectCarousel from '../common/ProjectCarousel';
import { Magnetic } from '../../utils/motion';

const rotatingTexts = ['ENGINEER', 'DESIGNER', 'LEADER'];

/**
 * The landing hero.
 *
 * This is the only section that still animates on mount rather than on
 * scroll — it is above the fold, so a scroll-triggered reveal would never
 * fire. Everything below the fold uses the shared scroll-driven Reveal.
 */
const HeroLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (reduced) return undefined;
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [reduced]);

  const revealStyle = (duration, delay) =>
    reduced
      ? undefined
      : {
          animation: isLoaded
            ? `slideUp ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s forwards`
            : 'none',
          transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
          opacity: isLoaded ? 1 : 0,
        };

  return (
    <section className="relative bg-[#f5f5f0] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
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

      <ContainerScroll
        titleComponent={
          <div className="w-full text-center px-4 sm:px-6 space-y-6 md:space-y-8 relative z-10">
            {/* Name */}
            <div className="overflow-hidden">
              <div
                className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-sm"
                style={revealStyle(1, 0.1)}
              >
                <div className="w-12 h-px bg-[#0a0100]/30" />
                <span className="font-erstoria">{PROFILE.name}</span>
                <div className="w-12 h-px bg-[#0a0100]/30" />
              </div>
            </div>

            {/* Heading */}
            <div className="overflow-hidden">
              <h1
                className="font-erstoria text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-[#0a0100]"
                style={revealStyle(1.2, 0.2)}
              >
                <span className="block mb-2">CREATIVE</span>
                <span className="block relative overflow-hidden h-[1.2em] text-[#e61f00]">
                  {rotatingTexts.map((text, index) => {
                    const isCurrentText = index === currentTextIndex;
                    const isNextText =
                      index === (currentTextIndex + 1) % rotatingTexts.length;

                    let position = 'translateY(100%)';
                    let visibility = 'hidden';

                    if (isCurrentText) {
                      position = 'translateY(-100%)';
                      visibility = 'visible';
                    } else if (isNextText) {
                      position = 'translateY(0)';
                      visibility = 'visible';
                    }

                    return (
                      <span
                        key={text}
                        className="absolute inset-0 flex items-center justify-center roulette-text"
                        style={{
                          transform: reduced
                            ? isNextText
                              ? 'translateY(0)'
                              : position
                            : position,
                          visibility,
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

            {/* Description */}
            <div className="overflow-hidden" style={revealStyle(1.4, 0.4)}>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#0a0100]/70 font-light max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
                Full-Stack Engineer &amp; Frontend Architect building products end to end.
                Design systems, product frontends, and the AI-powered services behind them.
              </p>
            </div>
          </div>
        }
      >
        <ProjectCarousel
          projects={heroCarouselProjects}
          fillHeight
          arrowClassName="left-2 md:left-4"
          arrowClassNameRight="right-2 md:right-4"
          titleClassName="text-xl md:text-2xl lg:text-3xl"
          overlayPadding="p-4 md:p-6"
        />
      </ContainerScroll>

      {/* CTA Buttons */}
      <div className="relative z-10 mt-8 md:mt-12 pb-8 md:pb-12">
        <div
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          style={revealStyle(1.6, 0.6)}
        >
          <Magnetic>
            <Link
              to="/portfolio"
              className="focus-ring group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
            >
              <span className="font-erstoria text-base tracking-wide">VIEW WORK</span>
              <ArrowUpRight
                aria-hidden="true"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </Magnetic>

          <Link
            to="/contact"
            className="focus-ring group inline-flex items-center justify-center gap-4 px-8 py-4 border border-[#0a0100] text-[#0a0100] hover:bg-[#0a0100] hover:text-white transition-all duration-300 active:scale-95 min-w-[200px] cursor-pointer"
          >
            <span className="font-erstoria text-base tracking-wide">CONTACT</span>
            <ArrowUpRight
              aria-hidden="true"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
