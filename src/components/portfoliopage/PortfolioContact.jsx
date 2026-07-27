import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../../data/projects';
import { Magnetic, Reveal } from '../../utils/motion';

/**
 * One close, at the end, after the work.
 *
 * The page previously carried two near-identical bordered CTA panels — same
 * border, same backdrop-blur, same padding, same button — and the first of
 * them asked for the project before any work had been shown. This is the only
 * ask on the page, and it comes last.
 */
const PortfolioContact = () => (
  <section className="relative py-20 md:py-28" aria-labelledby="portfolio-contact-heading">
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
      <Reveal>
        <div className="border-t border-[#0a0100]/15 pt-12 md:pt-16">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
            <div>
              <h2
                id="portfolio-contact-heading"
                className="font-erstoria text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-[#0a0100] text-balance"
              >
                Have something that needs building?
              </h2>
              <p className="mt-5 text-lg text-[#0a0100]/70 leading-relaxed max-w-xl text-pretty">
                I take on design-systems and full-stack product work. If any of
                the above looks like the problem you have, get in touch.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Magnetic>
                <Link
                  to="/contact"
                  className="focus-ring group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#e61f00] text-white hover:bg-[#0a0100] transition-colors duration-300 cursor-pointer active:scale-95"
                >
                  <span className="font-erstoria text-sm tracking-widest uppercase">
                    Start a conversation
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </Magnetic>

              {/* The primary address only. Presenting two inboxes as equals put
                  a decision in front of the page's single conversion. */}
              <a
                href={`mailto:${CONTACT.emailPrimary}`}
                className="focus-ring inline-flex items-center gap-2 text-sm text-[#0a0100]/60 hover:text-[#e61f00] transition-colors duration-300"
              >
                <Mail aria-hidden="true" className="w-4 h-4" />
                {CONTACT.emailPrimary}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default PortfolioContact;
