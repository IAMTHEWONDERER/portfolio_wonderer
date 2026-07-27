import React from 'react';
import { ArrowUpRight, Code, Palette, Zap } from 'lucide-react';
import { portfolioHeroProjects } from '../../data/projects';
import ProjectCarousel from '../common/ProjectCarousel';
import { MaskedLines, Reveal, RevealGroup, RevealItem } from '../../utils/motion';

// Proficiency indicators, not counts of shipped projects.
const skills = [
  { icon: Code, label: 'Development', level: 'Expert' },
  { icon: Palette, label: 'Design Systems', level: 'Expert' },
  { icon: Zap, label: 'Performance', level: 'Core Focus' },
];

const HeroPortfolio = () => {
  const handleViewAllClick = () => {
    document
      .querySelector('section[data-section="display-portfolio"]')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f5f0]">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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

      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-[#0a0100]/5 to-[#e61f00]/5 rounded-full blur-3xl top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-[#e61f00]/5 to-[#0a0100]/5 rounded-full blur-3xl bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <Reveal className="overflow-hidden">
              <div className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-sm mb-2">
                <div className="w-12 h-px bg-[#0a0100]/30" />
                <span className="font-erstoria">Portfolio</span>
                <div className="w-12 h-px bg-[#0a0100]/30" />
              </div>
            </Reveal>

            <MaskedLines
              as="h1"
              lines={['DIGITAL', 'PORTFOLIO']}
              className="font-erstoria text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-[#0a0100] mb-4 md:mb-6"
            />

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#0a0100]/70 font-light max-w-2xl leading-relaxed mb-6 md:mb-8">
                A curated collection of innovative digital experiences, each crafted with
                precision, passion and purpose to deliver exceptional results.
              </p>
            </Reveal>

            <RevealGroup className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  // items-start, not items-center: "Design Systems" wraps to a
                  // second line, and centring pushed that item's value out of
                  // line with its neighbours.
                  <RevealItem key={skill.label} className="flex items-start gap-3">
                    <div
                      aria-hidden="true"
                      className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-[#0a0100]/5"
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a0100]/60" />
                    </div>
                    <div>
                      <div className="font-erstoria text-base sm:text-lg text-[#0a0100] font-bold">
                        {skill.level}
                      </div>
                      <div className="text-xs text-[#0a0100]/60 uppercase tracking-wide whitespace-nowrap">
                        {skill.label}
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>

          {/* Right Content - Projects Carousel */}
          <Reveal className="relative order-1 lg:order-2" delay={0.15}>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <ProjectCarousel projects={portfolioHeroProjects} />
            </div>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={handleViewAllClick}
                className="focus-ring inline-flex items-center gap-2 text-[#0a0100]/60 hover:text-[#e61f00] transition-colors duration-300 cursor-pointer group active:scale-95"
              >
                <span className="text-sm uppercase tracking-widest font-erstoria">
                  View All Projects
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroPortfolio;
