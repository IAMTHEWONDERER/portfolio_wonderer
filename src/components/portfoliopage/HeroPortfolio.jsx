import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Globe, Code, Palette, Zap, Figma, Monitor, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform, useDragControls } from 'framer-motion';

const HeroPortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  
  const x = useMotionValue(0);
  const dragControls = useDragControls();

  const featuredProjects = [
    {
      title: "EJSWCO",
      subtitle: "Corporate Excellence",
      description: "Modern corporate website showcasing professional services with elegant design",
      url: "https://ejswco.vercel.app",
      tech: ["React", "Next.js", "Tailwind"],
      category: "Website",
      type: "website",
      screenshot: "/imgs/screenshots/ejswco.png"
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
      title: "Wonderer Portfolio",
      subtitle: "Personal Showcase",
      description: "My personal portfolio showcasing my skills, projects, and creative journey",
      url: "https://wondererme.vercel.app",
      tech: ["React", "Tailwind CSS", "Vite"],
      category: "Personal Project",
      type: "website",
      screenshot: "/imgs/screenshots/wonderer.png"
    },
    {
      title: "Asanada",
      subtitle: "Digital Beauty",
      description: "Beautiful responsive website with exceptional user experience",
      url: "https://asanada-website.vercel.app",
      tech: ["React", "Framer Motion"],
      category: "Website",
      type: "website",
      screenshot: "/imgs/screenshots/asanada.png"
    }
  ];

  // Create infinite carousel array
  const infiniteProjects = [...featuredProjects, ...featuredProjects, ...featuredProjects];

  const skills = [
    { icon: Code, label: "Development", count: "15+" },
    { icon: Palette, label: "Design", count: "10+" },
    { icon: Zap, label: "Optimization", count: "100%" }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Carousel navigation functions for infinite scroll
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
    const threshold = 100;
    
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
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [isDragging]); // Removed currentIndex dependency for infinite scroll

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleViewAllClick = () => {
    // Scroll to the DisplayPortfolio section if we're already on the portfolio page
    const displayPortfolioSection = document.querySelector('section[data-section="display-portfolio"]');
    if (displayPortfolioSection) {
      displayPortfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f5f0]"
    >
      {/* Background Grid */}
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

      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-[#0a0100]/5 to-[#e61f00]/5 rounded-full blur-3xl top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-[#e61f00]/5 to-[#0a0100]/5 rounded-full blur-3xl bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          
          {/* Left Content - Desktop Order */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Section Label */}
            <div 
              className="overflow-hidden"
              style={{
                animation: isLoaded ? 'slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 text-[#0a0100]/60 uppercase tracking-widest text-xs sm:text-sm mb-2">
                <div className="w-8 sm:w-12 h-px bg-[#0a0100]/30" />
                <span className="font-erstoria">Portfolio</span>
                <div className="w-8 sm:w-12 h-px bg-[#0a0100]/30" />
              </div>
            </div>

            {/* Main Heading */}
            <div className="overflow-hidden">
              <h1 
                className="font-erstoria text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[0.9] tracking-tight text-[#0a0100] mb-4 md:mb-6"
                style={{
                  animation: isLoaded ? 'slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards' : 'none',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                  opacity: isLoaded ? 1 : 0,
                }}
              >
                DIGITAL
                <span className="block text-[#e61f00]">PORTFOLIO</span>
              </h1>
            </div>

            {/* Description */}
            <div 
              className="overflow-hidden"
              style={{
                animation: isLoaded ? 'slideUp 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#0a0100]/70 font-light max-w-2xl leading-relaxed mb-6 md:mb-8">
                A curated collection of innovative digital experiences, each crafted with precision, 
                passion, and purpose to deliver exceptional results.
              </p>
            </div>

            {/* Skills Stats */}
            <div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 overflow-hidden"
              style={{
                animation: isLoaded ? 'slideUp 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#0a0100]/5">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a0100]/60" />
                    </div>
                    <div>
                      <div className="font-erstoria text-base sm:text-lg text-[#0a0100] font-bold">{skill.count}</div>
                      <div className="text-xs text-[#0a0100]/60 uppercase tracking-wide">{skill.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Projects Carousel */}
          <div 
            className="relative order-1 lg:order-2"
            style={{
              animation: isLoaded ? 'slideUp 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            {/* Carousel Container */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative overflow-hidden bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/20 transition-all duration-500">
                
                {/* Carousel Content */}
                <motion.div
                  ref={carouselRef}
                  className="flex"
                  style={{ x }}
                  drag="x"
                  dragControls={dragControls}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  whileTap={{ cursor: "grabbing" }}
                  animate={{ x: -currentIndex * 100 + "%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0 }}
                >
                  {infiniteProjects.map((project, index) => {
                    const actualIndex = index % featuredProjects.length;
                    return (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 cursor-pointer"
                        onClick={() => handleProjectClick(project.url)}
                        onMouseEnter={() => setHoveredProject(actualIndex)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        {/* Project Screenshot */}
                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4] overflow-hidden">
                          
                          {/* Screenshot Preview */}
                          {project.screenshot ? (
                            <div className="absolute inset-0">
                              <img 
                                src={project.screenshot}
                                alt={`${project.title} preview`}
                                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                                onError={(e) => {
                                  // Fallback to icon if screenshot doesn't load
                                  e.target.style.display = 'none';
                                  e.target.parentElement.nextElementSibling.style.display = 'flex';
                                }}
                              />
                              
                              {/* Gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0100]/30 via-transparent to-transparent" />
                              
                              {/* Type indicator */}
                              <div className="absolute top-4 right-4">
                                <div className={`p-2 backdrop-blur-sm ${
                                  project.type === 'design' 
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
                              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <div className={`inline-block px-3 py-1 mb-2 backdrop-blur-sm text-xs font-erstoria tracking-widest uppercase ${
                                  project.type === 'design' 
                                    ? 'bg-[#e61f00]/20 border border-[#e61f00]/30 text-white' 
                                    : 'bg-white/20 border border-white/30 text-white'
                                }`}>
                                  {project.category}
                                </div>
                                <h3 className="font-erstoria text-lg sm:text-xl lg:text-2xl font-bold mb-1 drop-shadow-lg">
                                  {project.title}
                                </h3>
                                <p className="text-sm text-white/90 mb-2 drop-shadow">
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

                              {/* Hover overlay - Centered */}
                              <div className={`absolute inset-0 bg-[#0a0100]/0 transition-all duration-300 flex items-center justify-center ${
                                hoveredProject === actualIndex ? 'bg-[#0a0100]/40' : ''
                              }`}>
                                <div className={`transition-all duration-300 text-center transform ${
                                  hoveredProject === actualIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                }`}>
                                  <div className="text-white font-erstoria tracking-wide text-sm lg:text-base bg-[#0a0100]/90 px-6 py-3 backdrop-blur-sm border border-white/20 shadow-lg">
                                    <span>{project.type === 'design' ? 'VIEW DESIGN' : 'VIEW PROJECT'}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            /* Fallback if no screenshot */
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
                  className="absolute left-2 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm border border-[#0a0100]/20 hover:bg-white hover:border-[#0a0100]/40 transition-all duration-300 flex items-center justify-center group z-20"
                  disabled={isDragging}
                >
                  <ChevronLeft className="w-5 h-5 text-[#0a0100]/70 group-hover:text-[#0a0100]" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm border border-[#0a0100]/20 hover:bg-white hover:border-[#0a0100]/40 transition-all duration-300 flex items-center justify-center group z-20"
                  disabled={isDragging}
                >
                  <ChevronRight className="w-5 h-5 text-[#0a0100]/70 group-hover:text-[#0a0100]" />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(featuredProjects.length + index)}
                    className={`w-2 h-2 transition-all duration-300 rounded-full ${
                      currentIndex % featuredProjects.length === index 
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

            {/* View All Link */}
            <div className="mt-6 text-center">
              <div 
                className="inline-flex items-center gap-2 text-[#0a0100]/60 hover:text-[#e61f00] transition-colors duration-300 cursor-pointer group"
                onClick={handleViewAllClick}
              >
                <span className="text-sm uppercase tracking-widest font-erstoria">View All Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div 
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          style={{
            animation: isLoaded ? 'slideUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4s forwards' : 'none',
            transform: isLoaded ? 'translateY(0) translateX(-50%)' : 'translateY(100%) translateX(-50%)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          <div className="flex flex-col items-center gap-2 text-[#0a0100]/60">
            <span className="text-xs uppercase tracking-wide font-erstoria">Explore Projects</span>
            <div className="w-px h-8 bg-[#0a0100]/30"></div>
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
        
        /* Line clamp utility */
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default HeroPortfolio;