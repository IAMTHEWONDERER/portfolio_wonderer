import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Shared motion primitives.
 *
 * Rules this file enforces, so no component has to remember them:
 *   1. `prefers-reduced-motion` degrades every animation to an instant
 *      state change — never to "nothing rendered".
 *   2. Only `transform` and `opacity` are animated. Nothing here touches
 *      width/height/top/left/margin/filter.
 *   3. Reveals are driven by scroll position, not by a mount timer, so
 *      content below the fold animates when it is actually reached.
 */

export const EASE = [0.25, 0.46, 0.45, 0.94];

/** Fire once, slightly before the element is fully in view. */
export const VIEWPORT = { once: true, margin: '-100px 0px -80px 0px' };

/* ------------------------------------------------------------------ */
/* Reveal — a single element sliding up into view                      */
/* ------------------------------------------------------------------ */

export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.7,
  as = 'div',
  ...rest
}) => {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/* ------------------------------------------------------------------ */
/* RevealGroup / RevealItem — staggered children                       */
/* ------------------------------------------------------------------ */
/*
 * Replaces the hand-rolled `transitionDelay: ${index * 0.1}s` arithmetic.
 * The group owns the timing; items just declare themselves as children.
 */

const StaggerContext = createContext(false);

export const RevealGroup = ({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.04,
  as = 'div',
  ...rest
}) => {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.div;

  return (
    <StaggerContext.Provider value>
      <Tag
        className={className}
        initial={reduced ? false : 'hidden'}
        whileInView={reduced ? undefined : 'show'}
        viewport={VIEWPORT}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: stagger,
              delayChildren,
            },
          },
        }}
        {...rest}
      >
        {children}
      </Tag>
    </StaggerContext.Provider>
  );
};

export const RevealItem = ({ children, className, y = 24, as = 'div', ...rest }) => {
  const reduced = useReducedMotion();
  const inGroup = useContext(StaggerContext);
  const Tag = motion[as] || motion.div;

  const variants = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      };

  return (
    <Tag
      className={className}
      variants={variants}
      /* Standalone use outside a group still animates on scroll. */
      {...(inGroup
        ? {}
        : {
            initial: reduced ? false : 'hidden',
            whileInView: reduced ? undefined : 'show',
            viewport: VIEWPORT,
          })}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/* ------------------------------------------------------------------ */
/* MaskedLines — per-line clip reveal for section headings             */
/* ------------------------------------------------------------------ */
/*
 * `lines` is an array of strings. The final line is rendered in the
 * accent colour, matching the established two-line section heading.
 */

export const MaskedLines = ({
  lines,
  as: Tag = 'h2',
  className = '',
  accentLast = true,
  delay = 0,
}) => {
  const reduced = useReducedMotion();

  return (
    <Tag className={className}>
      {lines.map((line, index) => {
        const isAccent = accentLast && index === lines.length - 1;
        return (
          <span key={line} className="block overflow-hidden">
            <motion.span
              className={`block ${isAccent ? 'text-[#e61f00]' : ''}`}
              initial={reduced ? false : { y: '110%' }}
              whileInView={reduced ? undefined : { y: '0%' }}
              viewport={VIEWPORT}
              transition={{
                duration: 0.85,
                ease: EASE,
                delay: delay + index * 0.12,
              }}
            >
              {line}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
};

/* ------------------------------------------------------------------ */
/* SectionLabel — the eyebrow rule + tracked label                     */
/* ------------------------------------------------------------------ */

export const SectionLabel = ({ children, className = '', single = false }) => (
  <Reveal className={`overflow-hidden ${className}`}>
    <div className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-sm mb-2">
      <div className="w-12 h-px bg-[#0a0100]/30" />
      <span className="font-erstoria">{children}</span>
      {!single && <div className="w-12 h-px bg-[#0a0100]/30" />}
    </div>
  </Reveal>
);

/* ------------------------------------------------------------------ */
/* Magnetic — cursor-following translate for primary CTAs              */
/* ------------------------------------------------------------------ */
/*
 * Pointer-fine devices only, capped at `strength` px, and disabled
 * entirely under reduced motion. Layers on top of the existing
 * `via-white/10` sweep rather than replacing it.
 */

const useFinePointer = () => {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)');
    const update = () => setFine(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return fine;
};

export const Magnetic = ({ children, strength = 8, className = '' }) => {
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const active = fine && !reduced;

  const handleMove = (event) => {
    if (!active) return;
    const box = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - (box.left + box.width / 2);
    const dy = event.clientY - (box.top + box.height / 2);
    setOffset({
      x: Math.max(-strength, Math.min(strength, (dx / box.width) * strength * 2)),
      y: Math.max(-strength, Math.min(strength, (dy / box.height) * strength * 2)),
    });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.div
      className={`inline-block ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      animate={active ? offset : { x: 0, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export { useReducedMotion };
