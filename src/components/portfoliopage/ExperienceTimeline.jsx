import React, { useRef } from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { experience, education } from '../../data/projects';
import { EASE, VIEWPORT, useObserverFallback } from '../../utils/hooks';
import { Reveal, RevealGroup, RevealItem } from '../../utils/motion';
import SectionHead from './SectionHead';

/**
 * The vertical rail draws itself in as the section scrolls past, and each
 * node pops once the rail reaches it. Compositor-only — `scaleY` on the
 * rail, `scale`/`opacity` on the nodes. Under reduced motion the rail is
 * simply present at full height and the nodes are static.
 */
const TimelineRail = ({ progress, reduced }) => (
  <motion.div
    aria-hidden="true"
    className="absolute left-[7px] top-2 bottom-2 w-px bg-[#0a0100]/30 origin-top"
    style={reduced ? undefined : { scaleY: progress }}
  />
);

const TimelineNode = ({ current, reduced }) => {
  const ref = useRef(null);
  const observed = useInView(ref, VIEWPORT);
  const fallback = useObserverFallback();
  const inView = observed || fallback;
  /*
   * The node sits in the gutter beside the card. A hollow 15px square on a
   * hairline rail read as debris floating in whitespace rather than as a
   * point on a spine, so it is filled, and a short rule reaches across the
   * gutter to physically connect it to the card.
   */
  const shape = `absolute left-0 top-9 w-[15px] h-[15px] border-2 ${
    current ? 'bg-[#e61f00] border-[#e61f00]' : 'bg-[#0a0100]/25 border-[#0a0100]/25'
  }`;

  if (reduced) return <div aria-hidden="true" className={shape} />;

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.45, ease: EASE, delay: 0.15 }}
      className={shape}
    />
  );
};

const ExperienceTimeline = () => {
  const railRef = useRef(null);
  // Static render covers both reduced-motion and a non-reporting observer,
  // so the rail and nodes are simply present rather than mid-animation.
  const prefersReduced = useReducedMotion();
  const observerBroken = useObserverFallback();
  const reduced = prefersReduced || observerBroken;

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 80%', 'end 60%'],
  });
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      data-section="experience-timeline"
      className="relative py-16 md:py-24"
      aria-labelledby="experience-heading"
    >
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Was a centred masthead, the second of ten on the site. Now the
            shared numbered head, so the hero keeps the only poster treatment. */}
        <SectionHead index={2} title="Where I&rsquo;ve built it" id="experience-heading">
          Three engineering roles, newest first, and the qualifications behind
          them.
        </SectionHead>

        {/* Work Timeline */}
        <div ref={railRef} className="relative mb-20 md:mb-28">
          <TimelineRail progress={railScale} reduced={reduced} />

          <RevealGroup className="space-y-8 md:space-y-10" stagger={0.12}>
            {experience.map((role) => (
              <RevealItem
                key={`${role.company}-${role.period}`}
                className="relative pl-10 md:pl-14"
              >
                <TimelineNode current={role.current} reduced={reduced} />

                {/* Connector: ties the node to the card across the gutter. */}
                <div
                  aria-hidden="true"
                  className="absolute left-[15px] top-[46px] h-px w-[25px] md:w-[41px] bg-[#0a0100]/20"
                />

                <div className="bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/20 transition-all duration-500 p-6 md:p-8">
                  {/* Period + location */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-erstoria tracking-widest uppercase border ${
                        role.current
                          ? 'bg-[#e61f00]/10 text-[#e61f00] border-[#e61f00]/20'
                          : 'bg-[#0a0100]/5 text-[#0a0100]/60 border-[#0a0100]/10'
                      }`}
                    >
                      {role.period}
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0a0100]/60">
                      <MapPin aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="break-words">{role.location}</span>
                    </span>
                  </div>

                  <h3 className="font-erstoria text-xl md:text-2xl text-[#0a0100] tracking-wide mb-2">
                    {role.role}
                  </h3>

                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase
                      aria-hidden="true"
                      className="w-4 h-4 text-[#e61f00] flex-shrink-0"
                    />
                    <p className="font-erstoria text-base text-[#e61f00] tracking-wide">
                      {role.company}
                    </p>
                  </div>

                  {role.companyNote && (
                    <p className="text-xs text-[#0a0100]/60 mb-5 leading-relaxed">
                      {role.companyNote}
                    </p>
                  )}

                  <ul className="space-y-3 mt-5">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 w-1.5 h-1.5 bg-[#e61f00]/60 flex-shrink-0"
                        />
                        <span className="text-sm md:text-base text-[#0a0100]/70 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Education */}
        <div>
          <Reveal className="flex items-center gap-4 mb-10">
            <GraduationCap
              aria-hidden="true"
              className="w-8 h-8 text-[#e61f00] flex-shrink-0"
            />
            <h3 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] tracking-wide">
              EDUCATION
            </h3>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {education.map((entry) => (
              <RevealItem
                key={entry.degree}
                className="bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/20 transition-all duration-500 p-6 md:p-8 flex flex-col"
              >
                <span className="inline-block self-start px-3 py-1 mb-4 text-xs font-erstoria tracking-widest uppercase bg-[#0a0100]/5 text-[#0a0100]/60 border border-[#0a0100]/10">
                  {entry.period}
                </span>
                <h4 className="font-erstoria text-lg md:text-xl text-[#0a0100] tracking-wide mb-2">
                  {entry.degree}
                </h4>
                <p className="font-erstoria text-sm text-[#e61f00] tracking-wide mb-3">
                  {entry.school}
                </p>
                {entry.detail && (
                  <p className="text-sm text-[#0a0100]/70 leading-relaxed mt-auto">
                    {entry.detail}
                  </p>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
