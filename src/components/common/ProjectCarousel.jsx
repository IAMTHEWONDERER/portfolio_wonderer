import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion } from 'framer-motion';

/**
 * The one project carousel, used by the landing hero.
 *
 * Infinite scrolling works off a tripled array. Two things were wrong
 * before and are fixed here:
 *
 *  1. `currentIndex` started at 0 and an effect immediately pushed it to
 *     `length`, so the spring animated across the whole set on mount —
 *     the carousel visibly scroll-raced on every page load. It now
 *     *starts* in the middle copy.
 *  2. The wrap at either end re-targeted the spring, so every full cycle
 *     animated backwards through the set. The wrap now happens with the
 *     transition suppressed for a single frame, which is what makes the
 *     loop seamless.
 */
const ProjectCarousel = ({
  projects,
  // 16:9 to match the website screenshots these slides carry; the old fixed
  // heights produced a near-square frame that cropped headlines mid-word.
  slideHeightClass = 'aspect-video',
  autoAdvanceMs = 5000,
  arrowClassName = 'left-2',
  arrowClassNameRight = 'right-2',
  titleClassName = 'text-lg sm:text-xl lg:text-2xl',
  overlayPadding = 'p-4',
  fillHeight = false,
}) => {
  const total = projects.length;
  const tripled = [...projects, ...projects, ...projects];

  const [index, setIndex] = useState(total);
  const [snap, setSnap] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);
  const x = useMotionValue(0);
  const reduced = useReducedMotion();

  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => setIndex((i) => i - 1), []);

  // Wrap back into the middle copy without animating.
  useEffect(() => {
    if (index >= total * 2) {
      setSnap(true);
      setIndex((i) => i - total);
    } else if (index < total) {
      setSnap(true);
      setIndex((i) => i + total);
    }
  }, [index, total]);

  // Restore the spring on the frame after a wrap.
  useEffect(() => {
    if (!snap) return undefined;
    const id = requestAnimationFrame(() => setSnap(false));
    return () => cancelAnimationFrame(id);
  }, [snap]);

  // Auto-advance. Paused while dragging, and off entirely under reduced motion.
  useEffect(() => {
    if (isDragging || reduced) return undefined;
    const id = setInterval(next, autoAdvanceMs);
    return () => clearInterval(id);
  }, [isDragging, reduced, autoAdvanceMs, next]);

  const handleDragEnd = () => {
    setIsDragging(false);
    const dragged = x.get();
    const threshold = 50;
    if (dragged < -threshold) next();
    else if (dragged > threshold) prev();
    x.set(0);
  };

  const activeIndex = ((index % total) + total) % total;

  const transition =
    snap || reduced ? { duration: 0 } : { type: 'spring', stiffness: 250, damping: 35 };

  const renderSlide = (project, key) => {
    const body = (
      <div
        className={`relative ${fillHeight ? 'h-full' : slideHeightClass} bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4] overflow-hidden`}
      >
        {project.screenshot ? (
          <div className="absolute inset-0">
            <img
              src={project.screenshot}
              alt={`${project.title} preview`}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
            {/*
              The slide carries a title, subtitle and tech chips over the
              capture. A light scrim was not enough: screenshots of marketing
              sites have their own headlines and buttons in exactly this band,
              and the two sets of text collided. This is opaque enough at the
              base to guarantee the card's own text always wins.
            */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0100]/95 via-[#0a0100]/55 to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="w-16 h-16 bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg border border-[#0a0100]/10 mx-auto">
                <Globe aria-hidden="true" className="w-8 h-8 text-[#0a0100]/70" />
              </div>
              <p className="font-erstoria text-xl text-[#0a0100] mb-2">{project.title}</p>
              <p className="text-[#0a0100]/70">{project.subtitle}</p>
            </div>
          </div>
        )}

        {/* Info overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 ${overlayPadding} ${
            project.screenshot ? 'text-white' : 'text-[#0a0100]'
          }`}
        >
          {project.screenshot && (
            <>
              <div className="inline-block px-3 py-1 mb-2 backdrop-blur-sm text-xs font-erstoria tracking-widest uppercase bg-white/20 border border-white/30 text-white">
                {project.category}
              </div>
              {/* A card label, not a document heading — using <h3> here put
                  an h1 → h3 skip directly under the page title. */}
              <p
                className={`font-erstoria ${titleClassName} font-bold mb-1 drop-shadow-lg`}
              >
                {project.title}
              </p>
              <p className="text-sm text-white/90 mb-2 drop-shadow">{project.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs bg-white/20 backdrop-blur-sm border border-white/30 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );

    const shell = `focus-ring-light block w-full ${fillHeight ? 'h-full' : ''} flex-shrink-0`;

    if (project.to) {
      return (
        <Link
          key={key}
          to={project.to}
          className={`${shell} cursor-pointer`}
          draggable={false}
          onClick={(e) => isDragging && e.preventDefault()}
        >
          {body}
        </Link>
      );
    }

    if (project.url) {
      return (
        <a
          key={key}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${shell} cursor-pointer`}
          draggable={false}
          onClick={(e) => isDragging && e.preventDefault()}
        >
          {body}
        </a>
      );
    }

    return (
      <div key={key} className={shell}>
        {body}
      </div>
    );
  };

  return (
    <div className={`relative w-full ${fillHeight ? 'h-full' : ''}`}>
      <div
        className={`relative overflow-hidden ${fillHeight ? 'h-full bg-white' : 'bg-white border border-[#0a0100]/10'}`}
      >
        <motion.div
          ref={carouselRef}
          className={`flex ${fillHeight ? 'h-full' : ''}`}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: 'grabbing' }}
          animate={{ x: `${-index * 100}%` }}
          transition={transition}
        >
          {tripled.map((project, i) => renderSlide(project, `${project.slug}-${i}`))}
        </motion.div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous project"
          className={`focus-ring absolute ${arrowClassName} top-[38%] cursor-pointer -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm border border-[#0a0100]/20 hover:bg-white hover:border-[#0a0100]/40 transition-all duration-300 flex items-center justify-center group z-20 active:scale-95`}
        >
          <ChevronLeft
            aria-hidden="true"
            className="w-5 h-5 text-[#0a0100]/70 group-hover:text-[#0a0100]"
          />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next project"
          className={`focus-ring absolute ${arrowClassNameRight} top-[38%] cursor-pointer -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm border border-[#0a0100]/20 hover:bg-white hover:border-[#0a0100]/40 transition-all duration-300 flex items-center justify-center group z-20 active:scale-95`}
        >
          <ChevronRight
            aria-hidden="true"
            className="w-5 h-5 text-[#0a0100]/70 group-hover:text-[#0a0100]"
          />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((project, i) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => setIndex(total + i)}
            aria-label={`Show ${project.title}`}
            aria-current={activeIndex === i}
            className={`focus-ring w-2 h-2 rounded-full transition-all duration-300 cursor-pointer active:scale-95 ${
              activeIndex === i
                ? 'bg-[#e61f00] scale-125'
                : 'bg-[#0a0100]/30 hover:bg-[#0a0100]/50'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4">
        {/* tabular-nums: the index ticks every 5s, and proportional digits
            made the counter shift width as it counted. */}
        <span className="text-sm text-[#0a0100]/60 font-erstoria tracking-widest uppercase tabular-nums">
          {String(activeIndex + 1).padStart(2, '0')} /{' '}
          {String(total).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default ProjectCarousel;
