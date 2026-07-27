import React, { useState, useEffect } from 'react';
import { Brain, Target, Users, Lightbulb, Code, Palette, Circle, ArrowUpRight, Zap } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { CV_FILE, CV_DOWNLOAD_NAME, CV_LAST_UPDATED } from '../../data/projects';
import PdfModal from '../common/PdfModal';
import {
  Magnetic,
  MaskedLines,
  Reveal,
  RevealGroup,
  RevealItem,
  SectionLabel,
} from '../../utils/motion';

const thinkingPhases = [
  {
    icon: Brain,
    title: 'UNDERSTAND',
    subtitle: 'Deep Research',
    description:
      'I start by immersing myself in your world. Understanding your business, users and goals is the foundation of every successful project.',
  },
  {
    icon: Lightbulb,
    title: 'IDEATE',
    subtitle: 'Creative Solutions',
    description:
      'With insights gathered, I brainstorm innovative solutions that balance creativity with functionality, ensuring every idea serves a purpose.',
  },
  {
    icon: Palette,
    title: 'DESIGN',
    subtitle: 'Visual Excellence',
    description:
      'I craft beautiful, intuitive interfaces that not only look stunning but guide users naturally toward their goals with seamless interactions.',
  },
  {
    icon: Code,
    title: 'DEVELOP',
    subtitle: 'Technical Mastery',
    description:
      'Clean, efficient code brings designs to life. I build scalable, performant solutions using modern technologies and best practices.',
  },
  {
    icon: Target,
    title: 'OPTIMIZE',
    subtitle: 'Continuous Improvement',
    description:
      'Launch is just the beginning. I monitor, analyse and refine to ensure your project continues to deliver exceptional results.',
  },
];

const principles = [
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Every decision prioritises the user experience',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Fast, efficient solutions that scale',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Designs that drive measurable results',
  },
];

/**
 * One phase card. Previously this markup existed twice — once for the
 * top row of three and once for the bottom row of two — and was a
 * `<div onClick>`, so it could not be reached or activated by keyboard.
 */
const PhaseCard = ({ phase, index, isActive, onSelect }) => {
  const Icon = phase.icon;

  return (
    <RevealItem>
      <button
        type="button"
        onClick={() => onSelect(index)}
        aria-pressed={isActive}
        className={`focus-ring group relative w-full text-left bg-white border transition-all duration-500 overflow-hidden min-h-80 flex flex-col cursor-pointer active:scale-[0.98] ${
          isActive
            ? 'border-[#e61f00] shadow-xl'
            : 'border-[#0a0100]/10 hover:border-[#0a0100]/20 hover:shadow-lg'
        }`}
      >
        <div
          className={`p-6 flex-1 flex flex-col transition-all duration-500 ${
            isActive ? 'bg-gradient-to-br from-[#e61f00]/5 via-transparent to-[#e61f00]/10' : ''
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-[#0a0100]/50 font-erstoria">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div
              aria-hidden="true"
              className={`w-6 h-6 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                isActive
                  ? 'border-[#e61f00] bg-[#e61f00]'
                  : 'border-[#0a0100]/20 group-hover:border-[#e61f00]/50'
              }`}
            >
              <Circle
                className={`w-2 h-2 transition-colors duration-500 ${
                  isActive ? 'text-white' : 'text-transparent'
                }`}
              />
            </div>
          </div>

          <div
            aria-hidden="true"
            className={`w-14 h-14 flex items-center justify-center mb-4 transition-all duration-500 ${
              isActive
                ? 'bg-[#e61f00] text-white'
                : 'bg-[#0a0100]/5 text-[#0a0100]/60 group-hover:bg-[#0a0100]/10'
            }`}
          >
            <Icon className="w-6 h-6" />
          </div>

          <h4
            className={`font-erstoria text-lg tracking-wide mb-2 transition-colors duration-300 ${
              isActive ? 'text-[#e61f00]' : 'text-[#0a0100] group-hover:text-[#e61f00]'
            }`}
          >
            {phase.title}
          </h4>

          <p className="text-xs uppercase tracking-wide text-[#0a0100]/60 mb-3 font-erstoria">
            {phase.subtitle}
          </p>

          <p className="text-sm text-[#0a0100]/70 leading-relaxed flex-1">
            {phase.description}
          </p>
        </div>
      </button>
    </RevealItem>
  );
};

const ThinkPortfolio = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [showCV, setShowCV] = useState(false);
  const reduced = useReducedMotion();

  /* Close the CV when the navbar menu opens. Navbar now actually
     dispatches this — before, nothing ever did. */
  useEffect(() => {
    const handleNavbarMenuOpen = () => setShowCV(false);
    window.addEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);
    return () => window.removeEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);
  }, []);

  /*
   * The phases used to auto-rotate every 3s. Removed.
   *
   * These cards are real <button>s carrying `aria-pressed`, and the interval's
   * dependency array did not include the selection — so a click did not reset
   * the timer. A reader who selected DEVELOP lost it after 0–3s (1.5s on
   * average) and was moved to the *next* phase, not held. A control that
   * reports a pressed state the reader cannot hold is broadcasting incorrect
   * state to assistive tech, and on a page whose whole premise is editorial
   * stillness, a red highlight crawling across five cards forever fights the
   * design. Selection is now the reader's alone.
   */

  return (
    <>
      <section className="relative py-16 md:py-24 bg-[#f5f5f0] overflow-hidden">
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

        {/* Ambient blobs. Collapsed from five off-palette gradients
            (#2d2d2d, #4a4a4a, #666666, #ff4d4d) onto the one accent —
            at 2–4% opacity behind a 3xl blur they were indistinguishable. */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {thinkingPhases.map((phase, index) => (
            <div
              key={phase.title}
              className={`absolute w-64 h-64 bg-gradient-to-br from-[#0a0100] to-[#e61f00] rounded-full blur-3xl transition-all duration-1000 ${
                activePhase === index ? 'scale-110 opacity-[0.04]' : 'scale-90 opacity-[0.01]'
              }`}
              style={{ left: `${10 + index * 18}%`, top: `${20 + (index % 2) * 40}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-14">
            <SectionLabel className="mb-8">Philosophy</SectionLabel>

            <MaskedLines
              as="h2"
              lines={['HOW I', 'THINK']}
              className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-12"
            />

            <Reveal delay={0.1}>
              <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-3xl mx-auto leading-relaxed">
                My design philosophy is rooted in understanding, empathy and strategic
                thinking. Every project follows a thoughtful process that ensures
                exceptional outcomes.
              </p>
            </Reveal>
          </div>

          {/* Core Principles */}
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <RevealItem
                  key={principle.title}
                  className="bg-white/30 backdrop-blur-sm border border-[#0a0100]/10 p-8 text-center hover:bg-white/50 hover:border-[#0a0100]/20 transition-all duration-500 min-h-64"
                >
                  <div
                    aria-hidden="true"
                    className="w-16 h-16 bg-[#e61f00]/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <Icon className="w-8 h-8 text-[#e61f00]" />
                  </div>
                  <h3 className="font-erstoria text-xl text-[#0a0100] tracking-wide mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-[#0a0100]/70 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {/* Thinking Process */}
          <div className="mb-20">
            <Reveal className="text-center mb-16">
              <h3 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4">
                MY DESIGN PROCESS
              </h3>
              <p className="text-[#0a0100]/70 max-w-3xl mx-auto leading-relaxed">
                A systematic approach that transforms ideas into impactful digital
                experiences
              </p>
            </Reveal>

            {/*
              One grid, not two.
              The five phases used to be hand-split into a max-w-5xl 3-column
              grid and a max-w-3xl 2-column grid. Because the second container
              was narrower but held fewer columns, row 2's cards came out WIDER
              than row 1's (~384px vs ~341px at lg) and their edges aligned to
              nothing above them — the one place the column structure visibly
              broke on a site built on alignment. A single grid gives 3 + 2 at
              a consistent width.
            */}
            <div className="mb-12">
              <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {thinkingPhases.map((phase, index) => (
                  <PhaseCard
                    key={phase.title}
                    phase={phase}
                    index={index}
                    isActive={activePhase === index}
                    onSelect={setActivePhase}
                  />
                ))}
              </RevealGroup>
            </div>

            {/* Process Navigation */}
            <div className="flex justify-center">
              <div className="flex gap-3">
                {thinkingPhases.map((phase, index) => (
                  <button
                    key={phase.title}
                    type="button"
                    onClick={() => setActivePhase(index)}
                    aria-label={`Show phase ${index + 1}: ${phase.title}`}
                    aria-pressed={index === activePhase}
                    className={`focus-ring relative group transition-all duration-300 cursor-pointer active:scale-95 ${
                      index === activePhase ? 'scale-110' : 'hover:scale-105'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === activePhase
                          ? 'bg-[#e61f00] shadow-lg shadow-[#e61f00]/30'
                          : 'bg-[#0a0100]/30 group-hover:bg-[#0a0100]/50'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CV */}
          <Reveal className="text-center mb-20">
            <div className="border border-[#0a0100]/10 bg-white/50 backdrop-blur-sm p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4 tracking-wide">
                Interested in Learning More?
              </h3>
              <p className="text-lg text-[#0a0100]/70 mb-6 leading-relaxed">
                Dive deeper into my experience, skills and professional journey through my
                comprehensive CV.
              </p>
              <p className="text-sm text-[#0a0100]/60 mb-8 font-erstoria tracking-wide">
                LAST UPDATED: {CV_LAST_UPDATED}
              </p>
              <Magnetic>
                <button
                  type="button"
                  onClick={() => setShowCV(true)}
                  className="focus-ring group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
                >
                  <span className="font-erstoria text-base tracking-wide">VIEW MY CV</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      <PdfModal
        open={showCV}
        onClose={() => setShowCV(false)}
        title="CV"
        fileUrl={CV_FILE}
        downloadName={CV_DOWNLOAD_NAME}
        eyebrow={`Updated ${CV_LAST_UPDATED}`}
        newTabLabel="OPEN CV IN NEW TAB"
        downloadLabel="DOWNLOAD CV"
      />
    </>
  );
};

export default ThinkPortfolio;
