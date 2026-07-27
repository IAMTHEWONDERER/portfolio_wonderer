import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, useMotionValue, useDragControls, useReducedMotion } from 'framer-motion';
import { CV_FILE, CV_DOWNLOAD_NAME, CV_LAST_UPDATED } from '../../data/projects';
import PdfModal from '../common/PdfModal';
import { Magnetic, MaskedLines, Reveal, SectionLabel } from '../../utils/motion';

const TechStackLanding = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showCV, setShowCV] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const reduced = useReducedMotion();

  const carouselRef = useRef(null);
  const x = useMotionValue(0);
  const dragControls = useDragControls();

  const techLogos = [
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Tailwind', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Supabase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Jest', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    { name: 'GraphQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'Redux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' }
  ];

  // Create duplicated array for seamless loop
  const duplicatedLogos = [...techLogos, ...techLogos, ...techLogos];

  const techCategories = [
    {
      category: "Modern Frontend",
      level: "Expert",
      description: "Building scalable, high-performance web applications",
      technologies: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }
      ],
      color: "text-[#e61f00]"
    },
    {
      category: "Frontend Architecture",
      level: "Expert",
      description: "Component-driven architecture and design systems",
      technologies: [
        { name: "Design Systems", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "Accessibility (WCAG)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "Responsive Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ],
      color: "text-[#e61f00]"
    },
    {
      category: "UI/UX Development",
      level: "Expert",
      description: "From wireframes to high-fidelity prototypes",
      technologies: [
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Prototyping", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "UX Flows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Visual Hierarchy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ],
      color: "text-[#e61f00]"
    },
    {
      category: "Testing & Quality",
      level: "Proficient",
      description: "Ensuring reliability through comprehensive testing",
      technologies: [
        { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
        { name: "React Testing Library", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Unit Testing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
        { name: "Code Reviews", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ],
      color: "text-[#0a0100]/70"
    },
    {
      category: "APIs & Integration",
      level: "Expert",
      description: "Connecting frontends to powerful backends",
      technologies: [
        { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "Webhooks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Third-party Services", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ],
      color: "text-[#0a0100]/70"
    },
    {
      category: "Backend & Platforms",
      level: "Intermediate",
      description: "Server-side development and database management",
      technologies: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python/FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ],
      color: "text-[#0a0100]/70"
    },
    {
      category: "AI Integration",
      level: "Proficient",
      description: "AI-powered features and conversational interfaces",
      technologies: [
        { name: "AI APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Model Context Protocols", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "AI Workflows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Conversational UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
      ],
      color: "text-[#e61f00]"
    },
    {
      category: "DevOps & Deployment",
      level: "Intermediate",
      description: "CI/CD pipelines and cloud infrastructure",
      technologies: [
        { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ],
      color: "text-[#0a0100]/60"
    }
  ];

  useEffect(() => {
    const handleNavbarMenuOpen = () => setShowCV(false);
    window.addEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);
    return () => window.removeEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);
  }, []);

  // Continuous smooth animation when not dragging
  useEffect(() => {
    if (isDragging || reduced) return;

    const itemWidth = 120; // 80px icon + 40px gap
    const totalWidth = techLogos.length * itemWidth;

    let animationId;

    const smoothAnimation = () => {
      const currentX = x.get();
      const newX = currentX - 0.5; // Continuous smooth movement (0.5px per frame)

      // Reset position when we've moved one full set
      if (Math.abs(newX) >= totalWidth) {
        x.set(0);
      } else {
        x.set(newX);
      }

      animationId = requestAnimationFrame(smoothAnimation);
    };

    animationId = requestAnimationFrame(smoothAnimation);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [x, isDragging, reduced, techLogos.length]);

  const getLevelIndicator = (level) => {
    switch (level) {
      case 'Expert':
        return { dots: 3, color: 'bg-[#e61f00]' };
      case 'Intermediate':
        return { dots: 2, color: 'bg-[#e61f00]' };
      case 'Proficient':
        return { dots: 2, color: 'bg-[#e61f00]' };
      default:
        return { dots: 1, color: 'bg-[#e61f00]' };
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    // Snap to nearest position
    const itemWidth = 120;
    const currentX = x.get();
    const nearestPosition = Math.round(currentX / itemWidth) * itemWidth;
    x.set(nearestPosition);
  };

  return (
    <>
      <section
        id="tech-stack"
        className="relative overflow-hidden bg-[#f5f5f0] py-16 md:py-24"
      >
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
          <div className="text-center">
            <SectionLabel className="mb-8">Tech Stack</SectionLabel>

            <MaskedLines
              as="h2"
              lines={['TECHNICAL', 'EXPERTISE']}
              className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-12"
            />

            <Reveal className="mb-12" delay={0.1}>
              <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-3xl mx-auto leading-relaxed">
                A comprehensive overview of my technical skills and the technologies I work with
                to bring innovative ideas to life.
              </p>
            </Reveal>

            {/* Tech Icons Carousel */}
            <Reveal className="overflow-hidden mb-16">
              <div className="relative w-full h-32 flex items-center justify-center mb-6">
                {/* Carousel Container */}
                <div className="relative w-full max-w-4xl overflow-hidden">
                  {/* Gradient Masks */}
                  <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#f5f5f0] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#f5f5f0] to-transparent z-10 pointer-events-none" />

                  {/* Scrollable Icons */}
                  <motion.div
                    ref={carouselRef}
                    className="flex items-center gap-10 cursor-grab active:cursor-grabbing"
                    style={{ x }}
                    drag="x"
                    dragControls={dragControls}
                    dragConstraints={{ left: -techLogos.length * 120, right: 120 }}
                    dragElastic={0.1}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    whileTap={{ cursor: "grabbing" }}
                    transition={{
                      type: "tween",
                      ease: "linear",
                      duration: 0
                    }}
                  >
                    {duplicatedLogos.map((tech, index) => (
                      <motion.div
                        key={`${tech.name}-${index}`}
                        className="flex-shrink-0 w-20 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="relative">
                          <img
                            src={tech.url}
                            alt={tech.name}
                            className="w-16 h-16 object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                            draggable={false}
                          />
                          {/* Tooltip */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="text-xs text-[#0a0100]/60 font-erstoria tracking-wider whitespace-nowrap bg-white/80 backdrop-blur-sm px-2 py-1 rounded shadow-sm">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Instructions */}
              <div className="flex justify-center">
                <span className="text-sm text-[#0a0100]/60 font-erstoria tracking-widest">
                  <span className="hidden md:inline">TECH STACK</span>
                  <span className="md:hidden">DRAG TO EXPLORE</span>
                </span>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-[400px] sm:max-w-2xl md:max-w-[650px] lg:max-w-5xl mx-auto px-2 sm:px-4 md:px-0">
                {techCategories.map((category, index) => {
                  const levelInfo = getLevelIndicator(category.level);
                  const isActive = activeCategory === index;

                  return (
                    <div
                      key={category.category}
                      className="border border-[#0a0100]/10 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-[#0a0100]/20 transition-all duration-500"
                    >
                      {/* Card Header */}
                      <button
                        type="button"
                        aria-expanded={isActive}
                        onClick={() => setActiveCategory(isActive ? null : index)}
                        className="focus-ring w-full text-left p-3 sm:p-4 md:p-6 cursor-pointer active:scale-[0.98] transition-transform duration-300">
                        <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                          <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                            <h3 className="font-erstoria text-sm sm:text-base md:text-lg lg:text-xl text-[#0a0100] tracking-wide truncate">
                              {category.category}
                            </h3>
                            <div className="flex gap-1 flex-shrink-0">
                              {Array.from({ length: 3 }, (_, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${i < levelInfo.dots ? levelInfo.color : 'bg-[#0a0100]/10'
                                    }`}
                                />
                              ))}
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 sm:w-5 sm:h-5 text-[#0a0100]/60 transition-transform duration-300 flex-shrink-0 ${isActive ? 'rotate-180' : ''
                              }`}
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                          <p className="text-[#0a0100]/60 text-xs sm:text-sm leading-relaxed flex-grow">
                            {category.description}
                          </p>
                          <span className="text-xs uppercase tracking-widest text-[#0a0100]/60 font-erstoria sm:ml-4 flex-shrink-0">
                            {category.level}
                          </span>
                        </div>
                      </button>

                      {/* Expandable Technology List */}
                      <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 border-t border-[#0a0100]/10">
                          <div className="pt-2 sm:pt-3 md:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {category.technologies.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 rounded-sm px-1 sm:px-2"
                              >
                                <img
                                  src={tech.logo}
                                  alt=""
                                  aria-hidden="true"
                                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain flex-shrink-0"
                                />
                                <span className="text-xs sm:text-sm text-[#0a0100]/70 font-medium truncate">
                                  {tech.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal className="mt-16">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Magnetic>
                  <button
                    type="button"
                    onClick={() => setShowCV(true)}
                    className="focus-ring group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
                  >
                    <span className="font-erstoria text-base tracking-wide">VIEW MY CV</span>
                    <ArrowUpRight aria-hidden="true" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </Magnetic>
              </div>
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

export default TechStackLanding;