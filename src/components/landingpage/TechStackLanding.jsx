import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform, useDragControls } from 'framer-motion';
import { Github, Linkedin, Mail, Download, X, Globe } from 'lucide-react';
import { CV_FILE, CV_DOWNLOAD_NAME, CV_LAST_UPDATED } from '../../data/projects';

const TechStackLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showCV, setShowCV] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

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
    // Load immediately when component mounts
    setIsLoaded(true);

    // Detect Safari browser
    const detectSafari = () => {
      const userAgent = navigator.userAgent;
      const isSafariBrowser = /Safari/.test(userAgent) && !/Chrome/.test(userAgent) && !/Chromium/.test(userAgent);
      setIsSafari(isSafariBrowser);
    };

    detectSafari();

    const handleNavbarMenuOpen = () => {
      if (showCV) {
        setShowCV(false);
      }
    };

    window.addEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);

    return () => {
      window.removeEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);
    };
  }, [showCV]);

  // Continuous smooth animation when not dragging
  useEffect(() => {
    if (isDragging) return;

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
  }, [x, isDragging, techLogos.length]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV_FILE;
    link.download = CV_DOWNLOAD_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f5f0] py-20"
      >
        <div className="absolute inset-0 opacity-[0.02]">
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

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center">
            <div
              className="overflow-hidden mb-8"
              style={{
                animation: isLoaded ? 'slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <div className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-sm mb-2">
                <div className="w-12 h-px bg-[#0a0100]/30" />
                <span className="font-erstoria">Tech Stack</span>
                <div className="w-12 h-px bg-[#0a0100]/30" />
              </div>
            </div>

            <div className="overflow-hidden mb-12">
              <h2
                className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-6"
                style={{
                  animation: isLoaded ? 'slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards' : 'none',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                  opacity: isLoaded ? 1 : 0,
                }}
              >
                TECHNICAL
                <span className="block text-[#e61f00]">EXPERTISE</span>
              </h2>
            </div>

            <div
              className="overflow-hidden mb-12"
              style={{
                animation: isLoaded ? 'slideUp 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-3xl mx-auto leading-relaxed">
                A comprehensive overview of my technical skills and the technologies I work with
                to bring innovative ideas to life.
              </p>
            </div>

            {/* Tech Icons Carousel */}
            <div
              className="overflow-hidden mb-16"
              style={{
                animation: isLoaded ? 'slideUp 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
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
                <span className="text-sm text-[#0a0100]/40 font-erstoria tracking-widest">
                  <span className="hidden md:inline">TECH STACK</span>
                  <span className="md:hidden">DRAG TO EXPLORE</span>
                </span>
              </div>
            </div>

            <div
              className="overflow-hidden"
              style={{
                animation: isLoaded ? 'slideUp 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-[400px] sm:max-w-2xl md:max-w-[650px] lg:max-w-5xl mx-auto px-2 sm:px-4 md:px-0">
                {techCategories.map((category, index) => {
                  const levelInfo = getLevelIndicator(category.level);
                  const isActive = activeCategory === index;

                  return (
                    <div
                      key={index}
                      className="border border-[#0a0100]/10 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-[#0a0100]/20 transition-all duration-500 cursor-pointer active:scale-[0.99]"
                      onClick={() => setActiveCategory(isActive ? null : index)}
                    >
                      {/* Card Header */}
                      <div className="p-3 sm:p-4 md:p-6">
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
                          <span className="text-xs uppercase tracking-widest text-[#0a0100]/50 font-erstoria sm:ml-4 flex-shrink-0">
                            {category.level}
                          </span>
                        </div>
                      </div>

                      {/* Expandable Technology List */}
                      <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 border-t border-[#0a0100]/10">
                          <div className="pt-2 sm:pt-3 md:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {category.technologies.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 transition-all duration-300 hover:bg-[#0a0100]/5 rounded-sm px-1 sm:px-2 cursor-pointer"
                              >
                                <img
                                  src={tech.logo}
                                  alt={tech.name}
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
            </div>

            <div
              className="overflow-hidden mt-16"
              style={{
                animation: isLoaded ? 'slideUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setShowCV(true)}
                  className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
                >
                  <span className="font-erstoria text-base tracking-wide">VIEW MY CV</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideUp {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>
      </section>

      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a0100]/90 backdrop-blur-sm z-[100000] flex items-center justify-center p-2 sm:p-4"
            onClick={() => setShowCV(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#f5f5f0] shadow-2xl w-full max-w-5xl h-full sm:h-[95vh] sm:max-h-[95vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header - Responsive */}
              <div className="bg-[#f5f5f0] p-3 sm:p-6 border-b border-[#0a0100]/10 flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-4">
                  <h2 className="font-erstoria text-lg sm:text-2xl tracking-wide text-[#0a0100]">CV</h2>
                  <div className="w-4 sm:w-8 h-px bg-[#e61f00]" />
                </div>
              </div>

              {/* PDF Viewer - Responsive Height */}
              <div className="flex-1 bg-[#f5f5f0] p-2 sm:p-6 pt-2 sm:pt-4 overflow-hidden">
                <div className="w-full h-full bg-white shadow-inner overflow-auto">
                  {isSafari ? (
                    /* Safari-specific PDF viewer */
                    <div className="w-full h-full flex flex-col items-center justify-center space-y-6 p-8">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-[#0a0100]/10 rounded-full flex items-center justify-center mx-auto">
                          <svg
                            className="w-8 h-8 text-[#0a0100]/60"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h3 className="font-erstoria text-lg text-[#0a0100] tracking-wide">
                          Safari PDF Viewer
                        </h3>
                        <p className="text-[#0a0100]/70 text-sm max-w-md">
                          Safari has restrictions on embedded PDFs. Click the button below to open the CV in a new tab for the best viewing experience.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <a
                          href={CV_FILE}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#0a0100] text-white hover:bg-[#e61f00] transition-all duration-300 cursor-pointer active:scale-95"
                        >
                          <span className="font-erstoria text-sm tracking-wide">OPEN CV IN NEW TAB</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>

                        <button
                          onClick={handleDownloadCV}
                          className="group inline-flex items-center justify-center gap-3 px-6 py-3 border border-[#0a0100]/30 text-[#0a0100] hover:bg-[#0a0100]/5 transition-all duration-300 cursor-pointer active:scale-95"
                        >
                          <Download className="w-4 h-4" />
                          <span className="font-erstoria text-sm tracking-wide">DOWNLOAD CV</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Standard iframe for other browsers */
                    <iframe
                      src={`${CV_FILE}#toolbar=0&navpanes=0&scrollbar=1&zoom=FitH`}
                      className="w-full h-full border-none"
                      title="CV - Oussama Alouche"
                    />
                  )}
                </div>
              </div>

              {/* Modal Footer - Responsive Controls */}
              <div className="bg-[#f5f5f0] p-3 sm:p-6 border-t border-[#0a0100]/10 flex-shrink-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#0a0100]/50 font-erstoria">
                    Updated {CV_LAST_UPDATED}
                  </span>

                  {/* Action Buttons Group */}
                  <div className="flex items-center gap-1">
                    {/* Download Button - Icon only */}
                    <button
                      onClick={handleDownloadCV}
                      className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300 cursor-pointer active:scale-95"
                      title="Download CV"
                      aria-label="Download CV"
                    >
                      <Download size={16} className="sm:w-5 sm:h-5" />
                    </button>

                    {/* Close Button */}
                    <button
                      onClick={() => setShowCV(false)}
                      className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300 cursor-pointer active:scale-95"
                      aria-label="Close CV"
                    >
                      <X size={16} className="sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Loading fallback */}
              <div className="absolute inset-6 flex items-center justify-center bg-white" style={{ display: 'none' }} id="pdf-loading">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-[#e61f00] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-[#0a0100]/60 font-erstoria tracking-wide">LOADING CV...</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TechStackLanding;