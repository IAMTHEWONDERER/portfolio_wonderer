import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ExternalLink, Globe, Code, Palette, Zap } from 'lucide-react';

const HeroPortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const featuredProjects = [
    {
      title: "EJSWCO",
      subtitle: "Corporate Excellence",
      description: "Modern corporate website showcasing professional services with elegant design",
      url: "https://ejswco.vercel.app",
      tech: ["React", "Next.js", "Tailwind"],
      category: "Corporate",
      color: "from-[#0a0100] to-[#2d2d2d]",
      accent: "#e61f00"
    },
    {
      title: "WorkWhile",
      subtitle: "Workspace Innovation",
      description: "Innovative platform with clean interface and powerful functionality",
      url: "https://workwhile.vercel.app",
      tech: ["React", "Node.js", "MongoDB"],
      category: "Platform",
      color: "from-[#e61f00] to-[#ff4d4d]",
      accent: "#0a0100"
    },
    {
      title: "Asanada",
      subtitle: "Digital Beauty",
      description: "Beautiful responsive website with exceptional user experience",
      url: "https://asanada-website.vercel.app",
      tech: ["React", "Framer Motion"],
      category: "Website",
      color: "from-[#0a0100] to-[#4a4a4a]",
      accent: "#e61f00"
    },
    {
      title: "Class Management",
      subtitle: "Educational System",
      description: "Comprehensive management system for educational processes",
      url: "https://class-management-zeta.vercel.app",
      tech: ["React", "Express", "Node.js"],
      category: "System",
      color: "from-[#e61f00] to-[#cc1a00]",
      accent: "#0a0100"
    }
  ];

  const skills = [
    { icon: Code, label: "Development", count: "15+" },
    { icon: Palette, label: "Design", count: "10+" },
    { icon: Zap, label: "Optimization", count: "100%" }
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Auto-rotate projects
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const currentProjectData = featuredProjects[currentProject];

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

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-96 h-96 bg-gradient-to-br ${currentProjectData.color} opacity-[0.03] rounded-full blur-3xl transition-all duration-1000`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              transform: `translate(-50%, -50%) scale(${1 + i * 0.2})`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div 
              className="overflow-hidden"
              style={{
                animation: isLoaded ? 'slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <div className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-sm mb-2">
                <div className="w-12 h-px bg-[#0a0100]/30" />
                <span className="font-erstoria">Portfolio</span>
                <div className="w-12 h-px bg-[#0a0100]/30" />
              </div>
            </div>

            {/* Main Heading */}
            <div className="overflow-hidden">
              <h1 
                className="font-erstoria text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-[#0a0100] mb-6"
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
              <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-2xl leading-relaxed mb-8">
                A curated collection of innovative digital experiences, each crafted with precision, 
                passion, and purpose to deliver exceptional results.
              </p>
            </div>

            {/* Skills Stats */}
            <div 
              className="flex gap-8 overflow-hidden"
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
                    <div className="w-10 h-10 flex items-center justify-center bg-[#0a0100]/5">
                      <Icon className="w-5 h-5 text-[#0a0100]/60" />
                    </div>
                    <div>
                      <div className="font-erstoria text-lg text-[#0a0100] font-bold">{skill.count}</div>
                      <div className="text-xs text-[#0a0100]/60 uppercase tracking-wide">{skill.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Featured Project Showcase */}
          <div 
            className="relative"
            style={{
              animation: isLoaded ? 'slideUp 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            {/* Main Project Display */}
            <div 
              className="group relative bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/20 transition-all duration-700 cursor-pointer overflow-hidden active:scale-[0.98] mb-6"
              onClick={() => handleProjectClick(currentProjectData.url)}
              onMouseEnter={() => setHoveredProject(currentProject)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Preview */}
              <div className="relative h-80 bg-[#f5f5f0] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${currentProjectData.color} opacity-5`} />
                
                {/* Website Preview */}
                <div className="relative w-full h-full">
                  <iframe
                    key={currentProject} // Force re-render on project change
                    src={currentProjectData.url}
                    className="w-full h-full scale-50 origin-top-left transform transition-transform duration-700 group-hover:scale-52"
                    style={{
                      width: '200%',
                      height: '200%',
                      pointerEvents: 'none'
                    }}
                    title={`${currentProjectData.title} Preview`}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0a0100]/0 group-hover:bg-[#0a0100]/20 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white font-erstoria tracking-wide">
                    <Globe className="w-5 h-5" />
                    <span>VISIT SITE</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#0a0100]/10 backdrop-blur-sm">
                  <span className="text-xs font-erstoria tracking-widest text-[#0a0100]/70 uppercase">
                    {currentProjectData.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-erstoria text-2xl text-[#0a0100] tracking-wide mb-1 group-hover:text-[#e61f00] transition-colors duration-300">
                    {currentProjectData.title}
                  </h3>
                  <p className="text-sm text-[#0a0100]/50 font-erstoria tracking-widest uppercase mb-3">
                    {currentProjectData.subtitle}
                  </p>
                  <p className="text-[#0a0100]/70 text-sm leading-relaxed mb-4">
                    {currentProjectData.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {currentProjectData.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-[#0a0100]/5 text-[#0a0100]/60 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="flex items-center justify-between">
              {/* Project Dots */}
              <div className="flex gap-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentProject 
                        ? 'bg-[#e61f00] scale-110' 
                        : 'bg-[#0a0100]/30 hover:bg-[#0a0100]/50'
                    }`}
                  />
                ))}
              </div>

              {/* View All Link */}
              <div className="flex items-center gap-2 text-[#0a0100]/60 hover:text-[#e61f00] transition-colors duration-300 cursor-pointer">
                <span className="text-xs uppercase tracking-widest font-erstoria">View All</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
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
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroPortfolio;