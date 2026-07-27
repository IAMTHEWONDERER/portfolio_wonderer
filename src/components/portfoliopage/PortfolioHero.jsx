import React, { useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import {
  CV_FILE,
  CV_DOWNLOAD_NAME,
  CV_LAST_UPDATED,
  PROFILE,
  experience,
  flagshipProjects,
  webProjects,
} from '../../data/projects';
import PdfModal from '../common/PdfModal';
import { Magnetic, MaskedLines, Reveal } from '../../utils/motion';

/*
 * Facts, derived from the data rather than typed in, so they cannot drift.
 *
 * This slot used to read "Expert / Development", "Expert / Design Systems",
 * "Core Focus / Performance" — two of the three were the same word, in the one
 * place on a portfolio where a reader looks for something checkable. Counts are
 * not impressive on their own, but they are true, and a reader can verify every
 * one of them by scrolling.
 */
const facts = [
  { value: String(webProjects.length), label: 'Projects shipped' },
  { value: String(flagshipProjects.length), label: 'Products in flight' },
  { value: String(experience.length), label: 'Engineering roles' },
];

const PortfolioHero = () => {
  const [showCV, setShowCV] = useState(false);

  const scrollToWork = () => {
    document
      .querySelector('[data-section="featured-work"]')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          {/* Eyebrow: the page's only rule-flanked label. */}
          <Reveal className="mb-6">
            <span className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-[0.2em] text-xs">
              <span aria-hidden="true" className="w-10 h-px bg-[#0a0100]/30" />
              Portfolio
            </span>
          </Reveal>

          {/*
            The single masthead on the page. Everything below uses SectionHead,
            so this is the one place the two-line black/red treatment appears
            and it therefore actually reads as the top of the hierarchy.
          */}
          <MaskedLines
            as="h1"
            lines={['SELECTED', 'WORK']}
            className="font-erstoria text-[clamp(3rem,12vw,9rem)] leading-[0.85] tracking-tight text-[#0a0100] mb-10"
          />

          {/* Asymmetric: statement left, facts right. Not centred — centring
              every block is what made the old page feel like a template. */}
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 items-end">
            <Reveal delay={0.08}>
              <p className="text-xl md:text-2xl text-[#0a0100]/80 font-light leading-snug max-w-2xl text-pretty">
                {PROFILE.title}. Currently {PROFILE.currentRole}, building design
                systems and the products that run on them.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Magnetic>
                  {/*
                    Red at rest, ink on hover. The accent used to be spent on
                    half of every heading while the one thing a visitor should
                    click sat in near-black and only turned red once the cursor
                    was already on it.
                  */}
                  <button
                    type="button"
                    onClick={scrollToWork}
                    className="focus-ring group inline-flex items-center gap-3 px-7 py-4 bg-[#e61f00] text-white hover:bg-[#0a0100] transition-colors duration-300 cursor-pointer active:scale-95"
                  >
                    <span className="font-erstoria text-sm tracking-widest uppercase">
                      See the work
                    </span>
                    <ArrowDown
                      aria-hidden="true"
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
                    />
                  </button>
                </Magnetic>

                <button
                  type="button"
                  onClick={() => setShowCV(true)}
                  className="focus-ring inline-flex items-center gap-3 px-7 py-4 border border-[#0a0100]/25 text-[#0a0100] hover:border-[#0a0100] transition-colors duration-300 cursor-pointer active:scale-95"
                >
                  <Download aria-hidden="true" className="w-4 h-4" />
                  <span className="font-erstoria text-sm tracking-widest uppercase">
                    CV
                  </span>
                </button>
              </div>
            </Reveal>

            {/* Facts as a rule-separated column, not badges. */}
            <Reveal delay={0.16}>
              <dl className="border-t border-[#0a0100]/15">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-6 py-4 border-b border-[#0a0100]/15"
                  >
                    <dt className="text-xs uppercase tracking-[0.18em] text-[#0a0100]/60">
                      {fact.label}
                    </dt>
                    <dd className="font-erstoria text-3xl md:text-4xl text-[#0a0100] tabular-nums leading-none">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[#0a0100]/50">
                CV updated {CV_LAST_UPDATED}
              </p>
            </Reveal>
          </div>
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

export default PortfolioHero;
