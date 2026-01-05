import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Globe, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContainerScroll } from '../ui/container-scroll-animation';
import { motion, useMotionValue } from 'framer-motion';

const HeroLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const carouselRef = useRef(null);
  const x = useMotionValue(0);

  const rotatingTexts = ['ENGINEER', 'DESIGNER', 'LEADER'];

  const featuredProjects = [
    {
      title: "TRCKS",
      subtitle: "Gym Progress Tracking",
      description: "AI-powered gym progress tracking platform with conversational workout logging",
      url: "#",
      tech: ["React", "TypeScript", "Supabase", "AI MCPs"],
      category: "Personal Business",
      type: "website",
      screenshot: "/imgs/screenshots/trcks.png"
    },
    {
      title: "WorkWhile",
      subtitle: "Workspace Innovation",
      description: "Innovative platform with clean interface and powerful functionality",
      url: "https://workwhile.vercel.app",
      tech: ["React", "Node.js", "MongoDB"],
      category: "Platform",
      type: "website",
      screenshot: "/imgs/screenshots/workwhile.png"
    },
    {
      title: "ASANADA LMS",
      subtitle: "Learning Platform",
      description: "Full learning management system with courses, quizzes, and forums",
      url: "https://eduk.asanada.org",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      category: "Work Project",
      type: "website",
      screenshot: "/imgs/screenshots/asanada.png"
    },
    {
      title: "FOSTP Platform",
      subtitle: "Organization Portal",
      description: "High-performance SSR website with real-time member management",
      url: "#",
      tech: ["Next.js", "Tailwind CSS", "Firebase"],
      category: "Work Project",
      type: "website",
      screenshot: "/imgs/screenshots/fostp.png"
    },
    {
      title: "RMA-connect",
      subtitle: "IoT Management",
      description: "Electric charging station management with real-time monitoring dashboards",
      url: "#",
      tech: ["React", "Angular", "Flutter"],
      category: "Work Project",
      type: "website",
      screenshot: "/imgs/screenshots/rma.png"
    }
  ];

  const infiniteProjects = [...featuredProjects, ...featuredProjects, ...featuredProjects];

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Reset position for infinite scroll
  useEffect(() => {
    const totalProjects = featuredProjects.length;
    if (currentIndex >= totalProjects * 2) {
      setCurrentIndex(totalProjects);
    } else if (currentIndex < totalProjects) {
      setCurrentIndex(totalProjects + currentIndex);
    }
  }, [currentIndex, featuredProjects.length]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = x.get();
    const threshold = 50;

    if (currentX < -threshold) {
      nextSlide();
    } else if (currentX > threshold) {
      prevSlide();
    }

    x.set(0);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-[#f5f5f0] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
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

      <ContainerScroll
        titleComponent={
          <div className="w-full text-center px-4 md:px-6 space-y-6 md:space-y-8 relative z-10">
            {/* Name Introduction */}
            <div className="overflow-hidden">
              <div
                className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-xs md:text-sm"
                style={{
                  animation: isLoaded ? 'slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s forwards' : 'none',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                  opacity: isLoaded ? 1 : 0,
                }}
              >
                <div className="w-8 md:w-12 h-px bg-[#0a0100]/30" />
                <h2 className="font-erstoria">Oussama Alouche</h2>
                <div className="w-8 md:w-12 h-px bg-[#0a0100]/30" />
              </div>
            </div>

            {/* Header Text */}
            <div className="overflow-hidden">
              <h1
                className="font-erstoria text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-[#0a0100] font-normal"
                style={{
                  animation: isLoaded ? 'slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards' : 'none',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <span className="block mb-2">CREATIVE</span>
                <span className="block relative overflow-hidden h-[1.2em] text-[#e61f00]">
                  {rotatingTexts.map((text, index) => {
                    const isCurrentText = index === currentTextIndex;
                    const isNextText = index === (currentTextIndex + 1) % rotatingTexts.length;

                    let position;
                    let visibility = 'hidden';

                    if (isCurrentText) {
                      position = 'translateY(-100%)';
                      visibility = 'visible';
                    } else if (isNextText) {
                      position = 'translateY(0)';
                      visibility = 'visible';
                    } else {
                      position = 'translateY(100%)';
                    }

                    return (
                      <span
                        key={`${text}-${index}`}
                        className="absolute inset-0 flex items-center justify-center roulette-text"
                        style={{
                          transform: position,
                          visibility: visibility,
                          zIndex: isNextText ? 2 : 1,
                        }}
                      >
                        {text}
                      </span>
                    );
                  })}
                </span>
              </h1>
            </div>

            {/* Description */}
            <div
              className="overflow-hidden"
              style={{
                animation: isLoaded ? 'slideUp 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#0a0100]/70 font-light max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
                Frontend Engineer crafting scalable, high-performance web experiences.
                Specializing in design systems, AI integration, and exceptional user interfaces.
              </p>
            </div>
          </div>
        }
      >
        {/* Carousel inside the 3D Card */}
        <div className="relative w-full h-full">
          <div className="relative overflow-hidden h-full bg-white">

            {/* Carousel Content */}
            <motion.div
              ref={carouselRef}
              className="flex h-full"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ type: "spring", stiffness: 250, damping: 35 }}
            >
              {infiniteProjects.map((project, index) => {
                const actualIndex = index % featuredProjects.length;
                return (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 cursor-pointer"
                    onClick={(e) => {
                      if (!isDragging) {
                        handleProjectClick(project.url);
                      }
                    }}
                    onMouseEnter={() => setHoveredProject(actualIndex)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Project Screenshot */}
                    <div className="relative h-full bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4] overflow-hidden">

                      {project.screenshot ? (
                        <div className="absolute inset-0">
                          <img
                            src={project.screenshot}
                            alt={`${project.title} preview`}
                            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />

                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0100]/30 via-transparent to-transparent" />

                          {/* Type indicator */}
                          <div className="absolute top-4 right-4">
                            <div className={`p-2 backdrop-blur-sm ${project.type === 'design'
                              ? 'bg-[#e61f00]/20 border border-[#e61f00]/30'
                              : 'bg-white/20 border border-white/30'
                              }`}>
                              {project.type === 'design' ? (
                                <Palette className="w-4 h-4 text-white" />
                              ) : (
                                <Globe className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </div>

                          {/* Project info overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                            <div className={`inline-block px-3 py-1 mb-2 backdrop-blur-sm text-xs font-erstoria tracking-widest uppercase ${project.type === 'design'
                              ? 'bg-[#e61f00]/20 border border-[#e61f00]/30 text-white'
                              : 'bg-white/20 border border-white/30 text-white'
                              }`}>
                              {project.category}
                            </div>
                            <h3 className="font-erstoria text-xl md:text-2xl lg:text-3xl font-bold mb-1 drop-shadow-lg">
                              {project.title}
                            </h3>
                            <p className="text-sm md:text-base text-white/90 mb-3 drop-shadow">
                              {project.subtitle}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.slice(0, 3).map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-0.5 text-xs bg-white/20 backdrop-blur-sm border border-white/30 text-white"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Hover overlay */}
                          <div className={`absolute inset-0 bg-[#0a0100]/0 transition-all duration-300 flex items-center justify-center ${hoveredProject === actualIndex ? 'bg-[#0a0100]/40' : ''
                            }`}>
                            <div className={`transition-all duration-300 text-center transform ${hoveredProject === actualIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                              }`}>
                              <div className="text-white font-erstoria tracking-wide text-sm lg:text-base bg-[#0a0100]/90 px-6 py-3 backdrop-blur-sm border border-white/20 shadow-lg">
                                <span>{project.type === 'design' ? 'VIEW DESIGN' : 'VIEW PROJECT'}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg border border-[#0a0100]/10 mx-auto">
                              {project.type === 'design' ? (
                                <Palette className="w-8 h-8 text-[#e61f00]/70" />
                              ) : (
                                <Globe className="w-8 h-8 text-[#0a0100]/70" />
                              )}
                            </div>
                            <h3 className="font-erstoria text-xl text-[#0a0100] mb-2">{project.title}</h3>
                            <p className="text-[#0a0100]/70">{project.subtitle}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm border border-[#0a0100]/20 hover:bg-white hover:border-[#0a0100]/40 transition-all duration-300 flex items-center justify-center group z-20"
              disabled={isDragging}
            >
              <ChevronLeft className="w-5 h-5 text-[#0a0100]/70 group-hover:text-[#0a0100]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm border border-[#0a0100]/20 hover:bg-white hover:border-[#0a0100]/40 transition-all duration-300 flex items-center justify-center group z-20"
              disabled={isDragging}
            >
              <ChevronRight className="w-5 h-5 text-[#0a0100]/70 group-hover:text-[#0a0100]" />
            </button>
          </div>
        </div>
      </ContainerScroll>

      {/* CTA Buttons - Below the card */}
      <div className="relative z-10 mt-8 md:mt-12 pb-8 md:pb-12">
        <div
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          style={{
            animation: isLoaded ? 'slideUp 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          <Link to="/portfolio">
            <button className="group relative inline-flex items-center justify-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 bg-[#0a0100] text-white border-[#0a0100] hover:border-[#e61f00] overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[180px] md:min-w-[200px] cursor-pointer ">
              <span className="font-erstoria text-sm md:text-base tracking-wide">VIEW WORK</span>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </Link>
          <Link to="/contact">
            <button className="group inline-flex items-center justify-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 border border-[#0a0100] text-[#0a0100] hover:bg-[#0a0100] hover:text-white transition-all duration-300 active:scale-95 min-w-[180px] md:min-w-[200px] cursor-pointer ">
              <span className="font-erstoria text-sm md:text-base tracking-wide">CONTACT</span>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </Link>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(featuredProjects.length + index)}
              className={`w-2 h-2 transition-all duration-300 rounded-full ${currentIndex % featuredProjects.length === index
                ? 'bg-[#e61f00] scale-125'
                : 'bg-[#0a0100]/30 hover:bg-[#0a0100]/50'
                }`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-[#0a0100]/60 font-erstoria tracking-widest uppercase">
            {String((currentIndex % featuredProjects.length) + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .roulette-text {
          transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), visibility 0s linear 0s;
        }
      `}</style>
    </section>
  );
};

export default HeroLanding;