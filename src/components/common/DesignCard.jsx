import React, { useRef, useState } from 'react';
import { Figma, FileText, Palette } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { RevealItem } from '../../utils/motion';

/**
 * A UI/UX design concept card.
 *
 * Always a <button>: activating it either opens a Figma file in a new tab
 * or opens the PDF modal — both are actions, not navigations.
 *
 * Type is signalled by the Figma / FileText icon only. The previous
 * green/blue/amber badge tinting encoded asset delivery mechanism (figma
 * link vs pdf), coloured a label that named the project category, and
 * failed contrast at `text-xs`: green-600 on white is 3.30:1 and
 * amber-600 is 3.19:1, both under the 4.5:1 AA floor.
 */
const DesignCard = ({ design, onOpen }) => {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-2.5%', '2.5%']);

  const isFigma = design.type === 'figma';
  const showImage = Boolean(design.screenshot) && !failed;
  const TypeIcon = isFigma ? Figma : FileText;

  return (
    <RevealItem>
      <button
        type="button"
        onClick={() => onOpen(design)}
        className="focus-ring group relative flex flex-col w-full text-left bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/20 transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-lg active:scale-[0.98]"
      >
        {/* Preview */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4] overflow-hidden">
          {showImage ? (
            <>
              <div ref={ref} className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={design.screenshot}
                  alt={`${design.title} design preview`}
                  loading="lazy"
                  onError={() => setFailed(true)}
                  className="w-full h-full object-cover"
                  style={reduced ? undefined : { y, scale: 1.08 }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0100]/30 via-transparent to-transparent" />

              <div className="absolute top-4 right-4">
                <div className="p-2 backdrop-blur-sm bg-white/20 border border-white/30">
                  <TypeIcon className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
              </div>

              <div className="absolute inset-0 bg-[#0a0100]/0 group-hover:bg-[#0a0100]/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-center">
                  <div className="text-white font-erstoria tracking-wide text-sm lg:text-base bg-[#0a0100]/90 px-6 py-3 backdrop-blur-sm border border-white/20 shadow-lg">
                    {isFigma ? 'VIEW IN FIGMA' : 'VIEW DESIGN'}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg border border-[#0a0100]/10 mx-auto">
                  <Palette className="w-8 h-8 text-[#0a0100]/70" aria-hidden="true" />
                </div>
                <p className="font-erstoria text-xl text-[#0a0100] mb-2">{design.title}</p>
                <p className="text-[#0a0100]/70">{design.subtitle}</p>
              </div>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 md:p-8 flex-grow flex flex-col w-full">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 mb-3 text-xs font-erstoria tracking-widest uppercase bg-[#0a0100]/5 text-[#0a0100]/60 border border-[#0a0100]/10">
                {design.category}
              </div>
              <h4 className="font-erstoria text-lg sm:text-xl md:text-2xl text-[#0a0100] tracking-wide mb-2 group-hover:text-[#e61f00] transition-colors duration-300">
                {design.title}
              </h4>
              <p className="text-sm text-[#0a0100]/60 mb-3">{design.subtitle}</p>
              <p className="text-xs text-[#0a0100]/60 uppercase tracking-wide">
                {design.year}
              </p>
            </div>
            <TypeIcon
              aria-hidden="true"
              className="w-5 h-5 text-[#0a0100]/40 transition-all duration-300 flex-shrink-0 group-hover:scale-110 group-hover:text-[#e61f00]"
            />
          </div>

          <p className="text-[#0a0100]/70 text-sm leading-relaxed mb-4">
            {design.description}
          </p>

          <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
            {design.tools.map((tool) => (
              <span
                key={tool}
                className="px-2 py-1 text-xs bg-[#0a0100]/5 text-[#0a0100]/60 font-medium border border-[#0a0100]/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </button>
    </RevealItem>
  );
};

export default DesignCard;
