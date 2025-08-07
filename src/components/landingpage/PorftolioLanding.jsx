import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PortfolioLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "EJSWCO",
      description: "A modern corporate website showcasing professional services with elegant design and seamless user experience.",
      url: "https://ejswco.vercel.app",
      image: "https://via.placeholder.com/600x400/f5f5f0/0a0100?text=EJSWCO",
      tech: ["React", "Next.js", "Tailwind CSS"],
      category: "Corporate Website"
    },
    {
      title: "WorkWhile",
      description: "Innovative workspace solution platform with clean interface design and powerful functionality.",
      url: "https://workwhile.vercel.app",
      image: "https://via.placeholder.com/600x400/f5f5f0/e61f00?text=WorkWhile",
      tech: ["React", "Node.js", "MongoDB"],
      category: "School Project"
    },
    {
      title: "Asanada",
      description: "Beautiful and responsive website delivering exceptional user experience and modern aesthetics.",
      url: "https://asanada-website.vercel.app",
      image: "https://via.placeholder.com/600x400/f5f5f0/0a0100?text=Asanada",
      tech: ["React", "JavaScript", "Framer Motion"],
      category: "Work Project"
    },
    {
        title: "Wonderer Portfolio",
        description: "My personal portfolio showcasing my skills, projects, and creative journey.",
        url: "https://wondererme.vercel.app",
        image: "https://via.placeholder.com/600x400/f5f5f0/e61f00?text=Wonderer.me",
        tech: ["React", "Tailwind CSS", "Vite"],
        category: "Personal Project"
    },{
        title: "Class management",
        description: "A comprehensive class management system designed to streamline educational processes.",
        url: "https://class-management-zeta.vercel.app",
        image: "https://via.placeholder.com/600x400/f5f5f0/0a0100?text=Class+Management",
        tech: ["React", "Node.js", "Express"],
        category: "School Project",
    }
  ];

  const handleViewMore = () => {
    navigate('/portfolio');
  };

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 md:py-32 bg-[#f5f5f0] overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0a0100 1px, transparent 1px),
              linear-gradient(to bottom, #0a0100 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
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
              <span className="font-erstoria">Portfolio</span>
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
              SELECTED
              <span className="block text-[#e61f00]">WORK</span>
            </h2>
          </div>

          <div 
            className="overflow-hidden mb-16"
            style={{
              animation: isLoaded ? 'slideUp 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-3xl mx-auto leading-relaxed">
              Explore some of the exceptional websites and applications I've crafted. 
              Each project represents a unique solution tailored to deliver outstanding results.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          style={{
            animation: isLoaded ? 'slideUp 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/20 transition-all duration-500 cursor-pointer overflow-hidden"
              onClick={() => handleProjectClick(project.url)}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animation: isLoaded ? `slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${1 + index * 0.2}s forwards` : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              {/* Project Image/Preview */}
              <div className="relative h-64 bg-[#f5f5f0] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0100]/5 to-[#e61f00]/5" />
                
                {/* Website Preview using iframe */}
                <div className="relative w-full h-full">
                  <iframe
                    src={project.url}
                    className="w-full h-full scale-50 origin-top-left transform transition-transform duration-700 group-hover:scale-52"
                    style={{
                      width: '200%',
                      height: '200%',
                      pointerEvents: 'none'
                    }}
                    title={`${project.title} Preview`}
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
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="font-erstoria text-2xl text-[#0a0100] tracking-wide mb-2 group-hover:text-[#e61f00] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#0a0100]/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-[#0a0100]/5 text-[#0a0100]/60 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#0a0100]/50 font-erstoria">
                    View Project
                  </span>
                  <ArrowUpRight 
                    className={`w-5 h-5 text-[#0a0100]/40 transition-all duration-300 ${
                      hoveredProject === index ? 'translate-x-1 -translate-y-1 text-[#e61f00]' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div 
          className="text-center overflow-hidden"
          style={{
            animation: isLoaded ? 'slideUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.6s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          <div className="mb-8">
            <p className="text-[#0a0100]/70 max-w-2xl mx-auto leading-relaxed mb-6">
              These are just a few examples of the digital experiences I create. 
              Each project is a testament to attention to detail, innovative solutions, and exceptional craftsmanship.
            </p>
          </div>
          
          <button 
            onClick={handleViewMore}
            className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] min-w-[200px]"
          >
            <span className="font-erstoria text-base tracking-wide">VIEW MORE</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
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
  );
};

export default PortfolioLanding;