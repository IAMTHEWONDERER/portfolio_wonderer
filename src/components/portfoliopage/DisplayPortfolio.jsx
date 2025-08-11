import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ExternalLink, Globe, Monitor, Smartphone, Code, Palette, Figma, Eye, Download, FileText, ExternalLinkIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const SimplifiedPortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredDesign, setHoveredDesign] = useState(null);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [currentPdf, setCurrentPdf] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Load immediately when component mounts
    setIsLoaded(true);
  }, []);

  // Use the same projects from PortfolioLanding
  const featuredProjects = [
    {
      title: "EJSWCO",
      description: "A modern corporate website showcasing professional services with elegant design and seamless user experience.",
      url: "https://ejswco.vercel.app",
      tech: ["React", "Next.js", "Tailwind CSS"],
      category: "Corporate Website"
    },
    {
      title: "WorkWhile",
      description: "Innovative workspace solution platform with clean interface design and powerful functionality.",
      url: "https://workwhile.vercel.app",
      tech: ["React", "Node.js", "MongoDB"],
      category: "School Project"
    },
    {
      title: "Asanada",
      description: "Beautiful and responsive website delivering exceptional user experience and modern aesthetics.",
      url: "https://asanada-website.vercel.app",
      tech: ["React", "JavaScript", "Framer Motion"],
      category: "Work Project"
    },
    {
      title: "Wonderer Portfolio",
      description: "My personal portfolio showcasing my skills, projects, and creative journey.",
      url: "https://wondererme.vercel.app",
      tech: ["React", "Tailwind CSS", "Vite"],
      category: "Personal Project"
    },
    {
      title: "Class Management",
      description: "A comprehensive class management system designed to streamline educational processes.",
      url: "https://class-management-zeta.vercel.app",
      tech: ["React", "Node.js", "Express"],
      category: "School Project"
    },{
        title: "LMS System",
        description: "A Learning Management System designed to enhance educational experiences with interactive features.",
        url: "https://eduk.asanada.org",
        tech: ["Laravel", "MySQL"],
        category: "Work Project"
    }
  ];

  // UI/UX Designs - mix of Figma link and PDF files
  const designConcepts = [
    {
      title: "FinanceFlow Banking App",
      description: "Modern mobile banking interface with intuitive user flows and secure transaction processes.",
      category: "Mobile App",
      tools: ["Figma", "Principle"],
      mockupType: "mobile",
      year: "2024",
      colors: ["#1e3a8a", "#3b82f6", "#e0f2fe"],
      type: "figma",
      link: "https://www.figma.com/design/example-banking-app" // Replace with actual Figma link
    },
    {
      title: "E-Commerce Platform Design",
      description: "Complete e-commerce platform design with user-centered shopping experience and modern aesthetics.",
      category: "Web Platform",
      tools: ["Figma", "Adobe XD"],
      mockupType: "desktop",
      year: "2024",
      colors: ["#059669", "#10b981", "#ecfdf5"],
      type: "pdf",
      file: "/designs/ecommerce-design.pdf", // 20MB PDF
      fileSize: "18.5 MB"
    },
    {
      title: "Educational Dashboard",
      description: "Comprehensive learning management system design focused on student engagement and progress tracking.",
      category: "Web Dashboard",
      tools: ["Figma", "Framer"],
      mockupType: "desktop",
      year: "2024",
      colors: ["#7c3aed", "#8b5cf6", "#f3e8ff"],
      type: "pdf",
      file: "/designs/education-dashboard.pdf", // 20MB PDF
      fileSize: "21.2 MB"
    },
    {
      title: "Healthcare Mobile App",
      description: "Patient-centered healthcare application with appointment scheduling and health monitoring features.",
      category: "Mobile App",
      tools: ["Figma", "Protopie"],
      mockupType: "mobile",
      year: "2024",
      colors: ["#ea580c", "#fb923c", "#fed7aa"],
      type: "pdf",
      file: "/designs/healthcare-app.pdf", // 20MB PDF
      fileSize: "19.8 MB"
    },
    {
      title: "Real Estate Platform",
      description: "Property search and management platform with advanced filtering and immersive property showcases.",
      category: "Web Platform",
      tools: ["Figma", "Sketch"],
      mockupType: "desktop",
      year: "2024",
      colors: ["#0f172a", "#1e293b", "#f1f5f9"],
      type: "pdf",
      file: "/designs/real-estate-platform.pdf", // 20MB PDF
      fileSize: "22.1 MB"
    },
    {
      title: "Fitness Tracking App",
      description: "Personal wellness companion with workout planning, nutrition tracking, and progress analytics.",
      category: "Mobile App",
      tools: ["Figma", "InVision"],
      mockupType: "mobile",
      year: "2024",
      colors: ["#dc2626", "#ef4444", "#fee2e2"],
      type: "pdf",
      file: "/designs/fitness-app.pdf", // 20MB PDF
      fileSize: "17.9 MB"
    }
  ];

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDesignClick = (design) => {
    if (design.type === 'figma') {
      window.open(design.link, '_blank', 'noopener,noreferrer');
    } else {
      setCurrentPdf(design);
      setShowPdfModal(true);
    }
  };

  const handleDownloadPdf = (design) => {
    const link = document.createElement('a');
    link.href = design.file;
    link.download = `${design.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section 
        ref={sectionRef}
        data-section="display-portfolio"
        className="relative py-20 md:py-12 bg-[#f5f5f0] overflow-hidden"
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <div 
              className={`overflow-hidden mb-8 transition-all duration-700 ${
                isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-sm mb-2">
                <div className="w-12 h-px bg-[#0a0100]/30" />
                <span className="font-erstoria">Selected Works</span>
                <div className="w-12 h-px bg-[#0a0100]/30" />
              </div>
            </div>

            <div 
              className={`overflow-hidden mb-12 transition-all duration-700 ${
                isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isLoaded ? '0.1s' : '0s' }}
            >
              <h2 
                className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-6"
              >
                FEATURED
                <span className="block text-[#e61f00]">PROJECTS</span>
              </h2>
            </div>

            <div 
              className={`overflow-hidden mb-16 transition-all duration-700 ${
                isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isLoaded ? '0.2s' : '0s' }}
            >
              <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-4xl mx-auto leading-relaxed">
                A curated selection of my best web development projects and UI/UX design concepts, 
                demonstrating technical expertise and creative vision.
              </p>
            </div>
          </div>

          {/* Web Development Section */}
          <div 
            className={`mb-32 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: isLoaded ? '0.3s' : '0s' }}
          >
            <div 
              className={`mb-16 transition-all duration-700 ${
                isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isLoaded ? '0.3s' : '0s' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Code className="w-8 h-8 text-[#e61f00]" />
                <h3 className="font-erstoria text-3xl md:text-4xl text-[#0a0100] tracking-wide">
                  WEB DEVELOPMENT
                </h3>
              </div>
              <p className="text-lg text-[#0a0100]/70 leading-relaxed max-w-3xl">
                Live web applications showcasing modern development practices, 
                performance optimization, and exceptional user experiences.
              </p>
            </div>

            {/* Projects Grid - Mobile Optimized */}
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-700 ${
                isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isLoaded ? '0.4s' : '0s' }}
            >
              {featuredProjects.map((project, index) => (
                <div 
                  key={index}
                  className={`group relative bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/20 transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-lg transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  onClick={() => handleProjectClick(project.url)}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    transitionDelay: isLoaded ? `${index * 0.1}s` : '0s',
                    minHeight: '420px',
                  }}
                >
                  {/* Project Preview - Mobile First */}
                  <div className="relative bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4] overflow-hidden h-56">
                    
                    {/* Universal Project Preview */}
                    <div className="relative w-full h-full flex items-center justify-center p-6">
                      {/* Mobile & Desktop Compatible Preview */}
                      <div className="w-full h-full flex flex-col items-center justify-center text-center">
                        {/* Project Icon */}
                        <div className="w-16 h-16 bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg border border-[#0a0100]/10">
                          <Globe className="w-8 h-8 text-[#0a0100]/70" />
                        </div>
                        
                        {/* Project Title */}
                        <h3 className="font-erstoria text-xl text-[#0a0100] mb-2 tracking-wide">
                          {project.title}
                        </h3>
                        
                        {/* Category */}
                        <div className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-[#0a0100]/10  mb-3">
                          <span className="text-xs font-erstoria tracking-widest text-[#0a0100]/70 uppercase">
                            {project.category}
                          </span>
                        </div>
                        
                        {/* Call to Action */}
                        <div className="flex items-center gap-2 text-[#e61f00] text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                          <span>View Live Site</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Desktop iframe overlay - only visible on hover */}
                      <div className="hidden lg:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-white overflow-hidden">
                        <iframe
                          src={project.url}
                          className="absolute inset-0 w-full h-full"
                          style={{
                            width: '300%',
                            height: '300%',
                            transform: 'scale(0.333)',
                            transformOrigin: 'top left',
                            pointerEvents: 'none',
                            border: 'none',
                          }}
                          title={`${project.title} Preview`}
                          loading="lazy"
                        />
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-[#0a0100]/20 flex items-center justify-center">
                          <div className="text-white font-erstoria tracking-wide text-sm bg-[#0a0100]/80 px-4 py-2">
                            <span>CLICK TO VISIT</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4 sm:p-6 md:p-8 flex-grow flex flex-col">
                    <div className="mb-4 flex-grow">
                      <h3 className="font-erstoria text-lg sm:text-xl md:text-2xl text-[#0a0100] tracking-wide mb-2 group-hover:text-[#e61f00] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-[#0a0100]/70 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-[#0a0100]/5 text-[#0a0100]/60 font-medium border border-[#0a0100]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs uppercase tracking-widest text-[#0a0100]/50 font-erstoria">
                        View Project
                      </span>
                      <ArrowUpRight 
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-[#0a0100]/40 transition-all duration-300 ${
                          hoveredProject === index ? 'translate-x-1 -translate-y-1 text-[#e61f00]' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UI/UX Design Section */}
          <div 
            className={`mb-20 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: isLoaded ? '0.3s' : '0s' }}
          >
            <div 
              className={`mb-16 transition-all duration-700 ${
                isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isLoaded ? '0.5s' : '0s' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Palette className="w-8 h-8 text-[#e61f00]" />
                <h3 className="font-erstoria text-3xl md:text-4xl text-[#0a0100] tracking-wide">
                  UI/UX DESIGN
                </h3>
              </div>
              <p className="text-lg text-[#0a0100]/70 leading-relaxed max-w-3xl">
                Creative interface designs and user experience concepts that demonstrate 
                design thinking, visual hierarchy, and interaction patterns.
              </p>
            </div>

            {/* Design Grid - Optimized */}
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-700 ${
                isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isLoaded ? '0.6s' : '0s' }}
            >
              {designConcepts.map((design, index) => (
                <div 
                  key={index}
                  className={`group relative bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/30 transition-all duration-500 cursor-pointer overflow-hidden transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  onClick={() => handleDesignClick(design)}
                  onMouseEnter={() => setHoveredDesign(index)}
                  onMouseLeave={() => setHoveredDesign(null)}
                  style={{
                    transitionDelay: isLoaded ? `${index * 0.1}s` : '0s',
                  }}
                >
                  {/* Design Mockup */}
                  <div className={`relative overflow-hidden bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4] ${
                    design.mockupType === 'mobile' ? 'h-80' : 'h-64'
                  }`}>
                    
                    <div className="w-full h-full flex items-center justify-center p-8">
                      {design.mockupType === 'mobile' ? (
                        // Mobile Mockup (same as before)
                        <div className="relative">
                          <div 
                            className="w-48 h-72 rounded-3xl p-1 shadow-2xl"
                            style={{ backgroundColor: design.colors[0] }}
                          >
                            <div className="w-full h-full bg-white rounded-3xl p-4 overflow-hidden">
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <div className="w-6 h-1 bg-[#0a0100]/20 rounded-full"></div>
                                  <div className="w-8 h-1 bg-[#0a0100]/20 rounded-full"></div>
                                </div>
                                <div 
                                  className="h-8 rounded-lg"
                                  style={{ backgroundColor: `${design.colors[1]}20` }}
                                ></div>
                                <div className="space-y-2">
                                  <div className="h-4 bg-[#0a0100]/10 rounded w-3/4"></div>
                                  <div className="h-4 bg-[#0a0100]/10 rounded w-1/2"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="h-16 bg-[#0a0100]/5 rounded-lg"></div>
                                  <div 
                                    className="h-16 rounded-lg"
                                    style={{ backgroundColor: `${design.colors[1]}15` }}
                                  ></div>
                                </div>
                                <div className="space-y-2">
                                  {[1,2,3].map(i => (
                                    <div key={i} className="flex items-center gap-3">
                                      <div 
                                        className="w-3 h-3 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: `${design.colors[1]}40` }}
                                      ></div>
                                      <div className="h-3 bg-[#0a0100]/5 rounded flex-1"></div>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex justify-center pt-4">
                                  <div 
                                    className="h-1 w-12 rounded-full"
                                    style={{ backgroundColor: design.colors[0] }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Smartphone className="absolute -top-2 -right-2 w-6 h-6 text-[#0a0100]/30" />
                        </div>
                      ) : (
                        // Desktop Mockup (same as before)
                        <div className="relative w-full max-w-md">
                          <div 
                            className="rounded-lg p-1 shadow-xl"
                            style={{ backgroundColor: design.colors[0] }}
                          >
                            <div className="bg-white rounded-lg p-6 space-y-4">
                              <div className="flex items-center gap-2 pb-3 border-b border-[#0a0100]/10">
                                <div 
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: `${design.colors[1]}50` }}
                                ></div>
                                <div className="w-3 h-3 bg-[#0a0100]/20 rounded-full"></div>
                                <div className="w-3 h-3 bg-[#0a0100]/20 rounded-full"></div>
                              </div>
                              <div className="flex gap-4 pb-2">
                                <div 
                                  className="h-2 w-12 rounded-full"
                                  style={{ backgroundColor: design.colors[1] }}
                                ></div>
                                <div className="h-2 w-8 bg-[#0a0100]/20 rounded-full"></div>
                                <div className="h-2 w-10 bg-[#0a0100]/20 rounded-full"></div>
                              </div>
                              <div 
                                className="h-12 rounded-lg mb-4"
                                style={{ backgroundColor: `${design.colors[2]}60` }}
                              ></div>
                              <div className="grid grid-cols-3 gap-2">
                                {[1,2,3].map(i => (
                                  <div key={i} className="space-y-1">
                                    <div 
                                      className="h-8 rounded"
                                      style={{ backgroundColor: i === 2 ? `${design.colors[1]}20` : '#0a010010' }}
                                    ></div>
                                    <div className="h-1 bg-[#0a0100]/10 rounded"></div>
                                    <div className="h-1 bg-[#0a0100]/5 rounded w-2/3"></div>
                                  </div>
                                ))}
                              </div>
                              <div className="pt-2 border-t border-[#0a0100]/10">
                                <div className="flex justify-between">
                                  <div className="h-1 w-16 bg-[#0a0100]/20 rounded-full"></div>
                                  <div className="h-1 w-12 bg-[#0a0100]/20 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Monitor className="absolute -top-2 -right-2 w-6 h-6 text-[#0a0100]/30" />
                        </div>
                      )}
                    </div>

                    {/* Design Overlay */}
                    <div className="absolute inset-0 bg-[#0a0100]/0 group-hover:bg-[#0a0100]/5 transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-[#0a0100] font-erstoria tracking-wide text-sm">
                        {design.type === 'figma' ? (
                          <>
                            <ExternalLinkIcon className="w-5 h-5" />
                            <span>OPEN IN FIGMA</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-5 h-5" />
                            <span>VIEW DESIGN</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 text-xs font-erstoria tracking-wide rounded-full ${
                        design.type === 'figma' 
                          ? 'bg-green-500/10 text-green-600 border border-green-500/20' 
                          : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                      }`}>
                        {design.type === 'figma' ? 'FIGMA' : 'PDF'}
                      </div>
                    </div>
                  </div>

                  {/* Design Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-erstoria text-xl text-[#0a0100] tracking-wide mb-2 group-hover:text-[#e61f00] transition-colors duration-300">
                          {design.title}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-[#0a0100]/50 uppercase tracking-wide mb-3">
                          <span>{design.category}</span>
                          <span>•</span>
                          <span>{design.year}</span>
                          {design.fileSize && (
                            <>
                              <span>•</span>
                              <span>{design.fileSize}</span>
                            </>
                          )}
                        </div>
                      </div>
                      {design.type === 'figma' ? (
                        <Figma 
                          className={`w-5 h-5 text-[#0a0100]/40 transition-all duration-300 flex-shrink-0 ${
                            hoveredDesign === index ? 'scale-110 text-[#e61f00]' : ''
                          }`}
                        />
                      ) : (
                        <FileText 
                          className={`w-5 h-5 text-[#0a0100]/40 transition-all duration-300 flex-shrink-0 ${
                            hoveredDesign === index ? 'scale-110 text-[#e61f00]' : ''
                          }`}
                        />
                      )}
                    </div>
                    
                    <p className="text-[#0a0100]/70 text-sm leading-relaxed mb-4">
                      {design.description}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {design.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="px-2 py-1 text-xs bg-[#0a0100]/5 text-[#0a0100]/60 font-medium border border-[#0a0100]/10 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div 
            className={`text-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: isLoaded ? '0.7s' : '0s' }}
          >
            <div className="border border-[#0a0100]/10 bg-white/50 backdrop-blur-sm p-8 md:p-12 max-w-4xl mx-auto">
              <h4 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4 tracking-wide">
                Ready to Start Your Project?
              </h4>
              <p className="text-lg text-[#0a0100]/70 mb-8 leading-relaxed">
                Let's collaborate to bring your vision to life with innovative design and 
                cutting-edge development.
              </p>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
              >
                <span className="font-erstoria text-base tracking-wide">GET IN TOUCH</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          /* Smooth transitions for all devices */
          .transform {
            transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                       opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          /* Line clamp utility */
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          /* Ensure smooth rendering on all devices */
          .group {
            will-change: transform, opacity;
            backface-visibility: hidden;
          }
          
          /* Mobile optimizations */
          @media (max-width: 768px) {
            .group {
              transform: translateZ(0);
            }
          }
        `}</style>
      </section>

      {/* PDF Modal for large files */}
      <AnimatePresence>
        {showPdfModal && currentPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a0100]/90 backdrop-blur-sm z-[100000] flex items-center justify-center p-2 sm:p-4"
            onClick={() => setShowPdfModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#f5f5f0] shadow-2xl w-full max-w-5xl h-full sm:h-[95vh] sm:max-h-[95vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-[#f5f5f0] p-3 sm:p-6 border-b border-[#0a0100]/10 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <h2 className="font-erstoria text-lg sm:text-2xl tracking-wide text-[#0a0100]">
                      {currentPdf.title}
                    </h2>
                    <div className="w-4 sm:w-8 h-px bg-[#e61f00]" />
                    <span className="text-sm text-[#0a0100]/60">{currentPdf.fileSize}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {/* Download Button */}
                    <button
                      onClick={() => handleDownloadPdf(currentPdf)}
                      className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300"
                      title="Download PDF"
                    >
                      <Download size={16} className="sm:w-5 sm:h-5" />
                    </button>

                    {/* Close Button */}
                    <button
                      onClick={() => setShowPdfModal(false)}
                      className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300"
                    >
                      <span className="text-lg">×</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* PDF Content */}
              <div className="flex-1 relative bg-white">
                {/* Loading message for large PDFs */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-center">
                  <FileText className="w-16 h-16 text-[#0a0100]/30 mb-4" />
                  <h3 className="font-erstoria text-xl text-[#0a0100] mb-2">
                    {currentPdf.title}
                  </h3>
                  <p className="text-[#0a0100]/70 mb-6 max-w-md">
                    This design file is {currentPdf.fileSize}. Click download to view the complete design system and detailed mockups.
                  </p>
                  <button
                    onClick={() => handleDownloadPdf(currentPdf)}
                    className="inline-flex items-center gap-3 bg-[#e61f00] text-white px-6 py-3 font-erstoria tracking-wide uppercase text-sm hover:bg-[#cc1a00] transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF ({currentPdf.fileSize})</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SimplifiedPortfolio;