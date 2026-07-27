import React from 'react';
import { Reveal } from '../../utils/motion';

/**
 * The one section header for the portfolio page.
 *
 * The page previously repeated a centred eyebrow-with-rules-both-sides plus a
 * two-line black/red masthead for every section, ten times across the site.
 * Repetition that total stops reading as a system and starts reading as a
 * template of itself — by the fourth one you already know what is coming.
 *
 * So the poster treatment is spent once, on the page's `<h1>` in the hero.
 * Every section below is this instead: a numeral, a single left rule, and a
 * one-line heading, left-aligned to the content it introduces. Quieter, and
 * it lets the hero actually be the loudest thing on the page.
 */
const SectionHead = ({ index, title, children, id }) => (
  <Reveal className="mb-10 md:mb-12">
    <div className="flex items-baseline gap-4 mb-3">
      <span
        aria-hidden="true"
        className="font-erstoria text-sm text-[#e61f00] tabular-nums"
      >
        {String(index).padStart(2, '0')}
      </span>
      <span aria-hidden="true" className="w-10 h-px bg-[#0a0100]/25" />
    </div>

    <h2
      id={id}
      className="font-erstoria text-3xl md:text-4xl lg:text-5xl leading-[0.95] tracking-tight text-[#0a0100] text-balance"
    >
      {title}
    </h2>

    {children && (
      <p className="mt-4 text-base md:text-lg text-[#0a0100]/70 leading-relaxed max-w-2xl text-pretty">
        {children}
      </p>
    )}
  </Reveal>
);

export default SectionHead;
