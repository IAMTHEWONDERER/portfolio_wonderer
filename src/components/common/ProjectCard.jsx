import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { RevealItem } from '../../utils/motion';

const SURFACE =
  'group relative flex flex-col bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/20 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg';

/**
 * Screenshot with a small scroll-driven parallax offset, replacing the
 * old `hover:scale-105`. Compositor-only: `transform` and nothing else.
 */
/**
 * `fit` follows the shape of the source image.
 *
 * Landscape captures fill the frame ('cover'). Portrait phone screenshots
 * must not — cropping a 1:2 screen into a 3:2 card leaves a meaningless
 * sliver — so they are contained and sit on the card's own gradient, which
 * reads as a device on a surface. Contained images also skip the 1.08 scale,
 * since scaling would crop back the padding that makes them legible.
 */
const ParallaxScreenshot = ({ src, alt, fit = 'cover' }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-2.5%', '2.5%']);
  const contain = fit === 'contain';

  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-hidden ${
        contain ? 'bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4]' : ''
      }`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={
          contain
            ? 'w-full h-full object-contain p-4'
            : 'w-full h-full object-cover object-top'
        }
        style={reduced ? undefined : contain ? { y } : { y, scale: 1.08 }}
      />
    </div>
  );
};

/**
 * The one project card.
 *
 * Renders three ways, and the element type follows the behaviour:
 *   - internal case study  -> <Link>
 *   - public external URL  -> <a target="_blank">
 *   - neither              -> plain <div>, not focusable, no cursor-pointer
 *
 * The icon-fallback panel is load-bearing: BuildwellAI, TRCKS and the NDA
 * project ship without imagery. It also covers a screenshot that 404s,
 * via `failed` state rather than the old `nextElementSibling` handler
 * (which dereferenced null and threw on every image error).
 */
const ProjectCard = ({ project }) => {
  const [failed, setFailed] = useState(false);
  const hasCaseStudy = Boolean(project.to);
  const hasLink = hasCaseStudy || Boolean(project.url);
  const showImage = Boolean(project.screenshot) && !failed;

  const actionLabel = hasCaseStudy
    ? 'View Case Study'
    : project.url
      ? 'View Project'
      : project.linkNote || 'Not Publicly Available';

  const inner = (
    <>
      {/* Preview */}
      <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4] overflow-hidden">
        {showImage ? (
          <>
            <div className="absolute inset-0" onError={() => setFailed(true)}>
              <ParallaxScreenshot
                src={project.screenshot}
                alt={`${project.title} preview`}
                fit={project.screenshotFit}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0100]/30 via-transparent to-transparent" />

            <div className="absolute top-4 right-4">
              <div className="p-2 backdrop-blur-sm bg-white/20 border border-white/30">
                <Globe className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
            </div>

            {hasLink && (
              <div className="absolute inset-0 bg-[#0a0100]/0 group-hover:bg-[#0a0100]/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-center">
                  <div className="text-white font-erstoria tracking-wide text-sm lg:text-base bg-[#0a0100]/90 px-6 py-3 backdrop-blur-sm border border-white/20 shadow-lg">
                    {hasCaseStudy ? 'VIEW CASE STUDY' : 'VIEW PROJECT'}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="w-16 h-16 bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg border border-[#0a0100]/10 mx-auto">
                <Globe className="w-8 h-8 text-[#0a0100]/70" aria-hidden="true" />
              </div>
              <p className="font-erstoria text-xl text-[#0a0100] mb-2">{project.title}</p>
              <p className="text-[#0a0100]/70">{project.subtitle}</p>
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4 sm:p-6 md:p-8 flex-grow flex flex-col">
        <div className="mb-4 flex-grow">
          <div className="mb-3">
            <div className="inline-block px-3 py-1 mb-3 text-xs font-erstoria tracking-widest uppercase bg-[#0a0100]/5 text-[#0a0100]/60 border border-[#0a0100]/10">
              {project.category}
            </div>
            <h4 className="font-erstoria text-lg sm:text-xl md:text-2xl text-[#0a0100] tracking-wide mb-2 group-hover:text-[#e61f00] transition-colors duration-300">
              {project.title}
            </h4>
            <p className="text-sm text-[#0a0100]/60 mb-3">{project.subtitle}</p>
          </div>
          <p className="text-[#0a0100]/70 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-[#0a0100]/5 text-[#0a0100]/60 font-medium border border-[#0a0100]/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs uppercase tracking-widest text-[#0a0100]/60 font-erstoria">
            {actionLabel}
          </span>
          {hasLink && (
            <ArrowUpRight
              aria-hidden="true"
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a0100]/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#e61f00]"
            />
          )}
        </div>
      </div>
    </>
  );

  const surface = `${SURFACE} ${hasLink ? 'cursor-pointer focus-ring active:scale-[0.98]' : ''}`;

  if (hasCaseStudy) {
    return (
      <RevealItem>
        <Link to={project.to} className={surface}>
          {inner}
        </Link>
      </RevealItem>
    );
  }

  if (project.url) {
    return (
      <RevealItem>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={surface}
        >
          {inner}
        </a>
      </RevealItem>
    );
  }

  return (
    <RevealItem>
      <div className={surface}>{inner}</div>
    </RevealItem>
  );
};

export default ProjectCard;
