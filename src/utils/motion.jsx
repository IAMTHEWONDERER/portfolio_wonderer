import React, { createContext, useContext, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { EASE, VIEWPORT, useFinePointer, useObserverFallback } from './hooks';

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
 *
 * Reveals use the explicit `useInView` hook plus `animate`, rather than
 * the `whileInView` prop. `whileInView` registered no IntersectionObserver
 * at all here — every reveal stayed pinned at its `initial` state, i.e.
 * opacity 0 — so the visibility of the whole site now rests on a hook
 * whose observer can actually be seen being created.
 */

/** Shared by every reveal so one ref/observer pattern is used throughout. */
const useReveal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, VIEWPORT);
  return { ref, inView };
};

/**
 * Render as plain markup, with no motion wrapper at all, when the visitor
 * asked for reduced motion — or when the IntersectionObserver probe failed.
 *
 * The second case is the important one. A transition needs
 * `requestAnimationFrame` to advance, and an environment where the observer
 * never reports is usually one where frames are suspended too. Merely
 * flipping the target to `opacity: 1` would never actually arrive there, so
 * the content has to bypass motion entirely rather than animate toward
 * being visible. Failure mode is "no animation", never "no content".
 */
const useStaticRender = () => {
  const reduced = useReducedMotion();
  const observerBroken = useObserverFallback();
  return reduced || observerBroken;
};

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
  const reduced = useStaticRender();
  const { ref, inView } = useReveal();
  const Tag = motion[as] || motion.div;

  if (reduced) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
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
  const reduced = useStaticRender();
  const { ref, inView } = useReveal();
  const Tag = motion[as] || motion.div;

  if (reduced) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <StaggerContext.Provider value>
      <Tag
        ref={ref}
        className={className}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren } },
        }}
        {...rest}
      >
        {children}
      </Tag>
    </StaggerContext.Provider>
  );
};

export const RevealItem = ({ children, className, y = 24, as = 'div', ...rest }) => {
  const reduced = useStaticRender();
  const inGroup = useContext(StaggerContext);
  const standalone = useReveal();
  const Tag = motion[as] || motion.div;

  if (reduced) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  /* Inside a group the parent drives the variant; standalone items
     observe themselves. */
  const control = inGroup
    ? {}
    : {
        ref: standalone.ref,
        initial: 'hidden',
        animate: standalone.inView ? 'show' : 'hidden',
      };

  return (
    <Tag className={className} variants={variants} {...control} {...rest}>
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
  const reduced = useStaticRender();
  const { ref, inView } = useReveal();

  return (
    <Tag className={className} ref={reduced ? undefined : ref}>
      {lines.map((line, index) => {
        const isAccent = accentLast && index === lines.length - 1;
        const accentClass = isAccent ? 'text-[#e61f00]' : '';

        if (reduced) {
          return (
            <span key={line} className={`block ${accentClass}`}>
              {line}
            </span>
          );
        }

        return (
          <span key={line} className="block overflow-hidden">
            <motion.span
              className={`block ${accentClass}`}
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : { y: '110%' }}
              transition={{ duration: 0.85, ease: EASE, delay: delay + index * 0.12 }}
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
