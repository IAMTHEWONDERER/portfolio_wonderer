import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '../../utils/hooks';
import { Magnetic, MaskedLines, Reveal, SectionLabel } from '../../utils/motion';

/**
 * The decorative image cluster is absolutely positioned against the
 * section, so it collides with the centred content between `md` and
 * `lg`. It is now `xl`-and-up only, and the three sizes come off the
 * standard scale (`w-68 h-84` was the odd one out).
 */
const artisticImages = [
  {
    id: 1,
    src: '/imgs/oussama-presenting.jpeg',
    alt: 'Oussama Alouche presenting to a room',
    position: 'top-8 left-12',
    size: 'w-72 h-96',
    delay: '0.5s',
  },
  {
    id: 2,
    src: '/imgs/im3.jpeg',
    alt: 'Design references pinned together',
    position: 'top-32 right-16',
    size: 'w-64 h-80',
    delay: '1s',
  },
  {
    id: 3,
    src: '/imgs/im5.jpg',
    alt: 'A sketchbook page of interface studies',
    position: 'bottom-12 left-6',
    size: 'w-64 h-80',
    delay: '1.5s',
  },
];

const skills = [
  'Frontend Architecture',
  'Design Systems',
  'Full-Stack Engineering',
  'AI Integration',
];

const AboutLanding = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 767.98px)');
  const reduced = useReducedMotion();

  /*
   * Auto-rotate the mobile carousel. `isMobile` is now derived from a
   * media query hook that is correct on first paint, rather than state
   * that started `false` and was corrected inside the same effect that
   * consumed it — which left the carousel missing on the first frame.
   */
  useEffect(() => {
    if (!isMobile || reduced) return undefined;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % artisticImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, reduced]);

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % artisticImages.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + artisticImages.length) % artisticImages.length,
    );

  const getImageFilter = (imageId) =>
    hoveredImage === imageId
      ? 'grayscale(0%) contrast(1.1) brightness(1)'
      : 'grayscale(100%) contrast(1.2) brightness(1)';

  return (
    <section id="about" className="relative overflow-hidden bg-[#f5f5f0] py-20 md:py-32">
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

      {/* Decorative image cluster — xl and up only */}
      <div className="hidden xl:block" aria-hidden="true">
        {artisticImages.map((image) => (
          <div
            key={image.id}
            className={`absolute ${image.position} ${image.size}`}
            style={{
              animationDelay: image.delay,
              zIndex: 1,
              animation: reduced
                ? 'none'
                : 'fadeInScale 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
              opacity: reduced ? 1 : 0,
            }}
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover shadow-md transition-[filter] duration-700 ease-out"
                style={{ filter: getImageFilter(image.id) }}
              />
              <div className="absolute inset-0 border border-[#0a0100]/20" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div
        id="main-content"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16"
      >
        <div className="text-center">
          <SectionLabel className="mb-8">About</SectionLabel>

          <MaskedLines
            as="h2"
            lines={['CRAFTING DIGITAL', 'EXPERIENCES']}
            className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-12"
          />

          {/* Quote */}
          <Reveal className="mb-12" delay={0.1}>
            <Quote aria-hidden="true" className="w-8 h-8 text-[#e61f00] mb-4 mx-auto" />
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-[#0a0100]/70 font-light italic leading-relaxed max-w-3xl mx-auto">
              &ldquo;Design is not just what it looks like and feels like. Design is how it
              works.&rdquo;
            </blockquote>
          </Reveal>

          {/* Description */}
          <Reveal className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left max-w-4xl mx-auto">
              <div>
                <p className="text-lg text-[#0a0100]/70 leading-relaxed mb-6">
                  I&apos;m Oussama Alouche, a Full-Stack Engineer &amp; Frontend Architect,
                  currently Design Systems &amp; Frontend Experience Lead at BuildwellAI,
                  remote from London.
                </p>
                <p className="text-lg text-[#0a0100]/70 leading-relaxed">
                  There I own the whole UI/UX function — brand identity, design system and
                  visual consistency across every product in the suite.
                </p>
              </div>
              <div>
                <p className="text-lg text-[#0a0100]/70 leading-relaxed mb-6">
                  I work in React, Next.js and TypeScript on the front, and FastAPI, Node
                  and PostgreSQL behind it, turning complex requirements into interfaces
                  that feel obvious.
                </p>
                <p className="text-lg text-[#0a0100]/70 leading-relaxed">
                  My focus is design systems, frontend architecture and AI integration —
                  building products end to end rather than handing them off halfway.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Mobile image carousel */}
          {isMobile && (
            <Reveal className="mb-16">
              <div className="max-w-lg mx-auto">
                <div className="relative w-full h-80 mb-8">
                  <img
                    src={artisticImages[currentImageIndex].src}
                    alt={artisticImages[currentImageIndex].alt}
                    className="w-full h-full object-cover shadow-md"
                  />
                  <div className="absolute inset-0 border border-[#0a0100]/20" />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="focus-ring flex items-center gap-2 px-5 py-3 border border-[#0a0100]/30 text-[#0a0100]/70 hover:border-[#e61f00] hover:text-[#e61f00] hover:bg-[#e61f00]/5 transition-all duration-300 active:scale-95 cursor-pointer"
                  >
                    <span className="font-erstoria text-sm uppercase tracking-widest">
                      PREV
                    </span>
                  </button>

                  <div className="flex gap-3">
                    {artisticImages.map((image, index) => (
                      <button
                        key={image.id}
                        type="button"
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Show image ${index + 1}`}
                        aria-current={index === currentImageIndex}
                        className={`focus-ring w-3 h-3 rounded-full transition-all duration-300 active:scale-95 cursor-pointer ${
                          index === currentImageIndex
                            ? 'bg-[#e61f00] scale-110'
                            : 'bg-[#0a0100]/30 hover:bg-[#0a0100]/50'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="focus-ring flex items-center gap-2 px-5 py-3 border border-[#0a0100]/30 text-[#0a0100]/70 hover:border-[#e61f00] hover:text-[#e61f00] hover:bg-[#e61f00]/5 transition-all duration-300 active:scale-95 cursor-pointer"
                  >
                    <span className="font-erstoria text-sm uppercase tracking-widest">
                      NEXT
                    </span>
                  </button>
                </div>

                <div className="text-center mt-4">
                  <span className="text-sm text-[#0a0100]/60 font-erstoria tracking-widest">
                    {String(currentImageIndex + 1).padStart(2, '0')} /{' '}
                    {String(artisticImages.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </Reveal>
          )}

          {/* Expertise. These carried hover styling and a cursor-pointer
              but were never interactive — a false affordance. */}
          <Reveal className="mb-16">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm uppercase tracking-widest text-[#0a0100]/60">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border border-[#0a0100]/20 px-4 md:px-6 py-2 md:py-3"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* CTA */}
          <Reveal>
            <Magnetic>
              <Link
                to="/contact"
                className="focus-ring group relative inline-flex items-center justify-center gap-4 px-8 py-4 border border-[#0a0100] text-[#0a0100] hover:bg-[#0a0100] hover:text-white transition-all duration-300 overflow-hidden active:scale-95 cursor-pointer min-w-[200px]"
              >
                <span className="font-erstoria text-base tracking-wide">
                  LET&apos;S COLLABORATE
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutLanding;
