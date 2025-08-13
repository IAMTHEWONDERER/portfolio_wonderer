import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ExternalLink, Globe, Palette, Figma, Download, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const PortfolioLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredDesign, setHoveredDesign] = useState(null);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [currentPdf, setCurrentPdf] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load immediately when component mounts
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "EJSWCO",
      subtitle: "Corporate Excellence",
      description: "A modern corporate website showcasing professional services with elegant design and seamless user experience.",
      url: "https://ejswco.vercel.app",
      tech: ["React", "Next.js", "Tailwind CSS"],
      category: "Corporate Website",
      type: "website",
      screenshot: "/imgs/screenshots/ejswco.png"
    },
    {
      title: "WorkWhile",
      subtitle: "Workspace Innovation",
      description: "Innovative workspace solution platform with clean interface design and powerful functionality.",
      url: "https://workwhile.vercel.app",
      tech: ["React", "Node.js", "MongoDB"],
      category: "School Project",
      type: "website",
      screenshot: "/imgs/screenshots/workwhile.png"
    },
    {
      title: "Eduk Asanada LMS",
      subtitle: "Learning Platform",
      description: "A comprehensive Learning Management System designed to enhance educational experiences with interactive features.",
      url: "https://eduk.asanada.org",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      category: "Work Project",
      type: "website",
      screenshot: "/imgs/screenshots/edukasanada.png"
    },
    
  ];

  const designConcepts = [
    {
      title: "AidUs Charity Platform",
      subtitle: "Donation & Community",
      description: "A comprehensive charity and donation platform designed to connect donors with causes, featuring intuitive donation flows and community engagement.",
      category: "Charity Platform",
      tools: ["Figma", "Prototyping"],
      mockupType: "desktop",
      year: "2024",
      colors: ["#059669", "#10b981", "#ecfdf5"],
      type: "figma",
      link: "https://www.figma.com/design/4oLIS6PsSSDOgbJwWX6kV5/AidUs--Charity---Donation?node-id=0-1&p=f",
      screenshot: "/imgs/screenshots/aidus.png"
    },
  
    {
      title: "ITS",
      subtitle: "Construction Materials",
      description: "Modern marketplace platform for buying construction materials with advanced search, vendor management, and seamless ordering experience.",
      category: "Marketplace Platform",
      tools: ["Figma", "Protopie"],
      mockupType: "mobile",
      year: "2024",
      colors: ["#ea580c", "#fb923c", "#fed7aa"],
      type: "pdf",
      filename: "its.pdf",
      requiresContact: false,
      screenshot: "/imgs/screenshots/its.png"
    },
   
 
  ];

  const handleViewMore = () => {
    navigate('/portfolio');
  };

  const handleProjectClick = (project) => {
    if (project.type === 'website') {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    } else if (project.type === 'design') {
      // Navigate to portfolio page for design details
      navigate('/portfolio');
    }
  };

  const handleDesignClick = (design) => {
    if (design.type === 'figma') {
      window.open(design.link, '_blank', 'noopener,noreferrer');
    } else if (design.type === 'protected' && design.requiresContact) {
      // Trigger contact modal for protected files
      setCurrentPdf(design);
      setShowPdfModal(true);
    } else if (design.type === 'pdf') {
      // Show PDF in modal for viewing
      setCurrentPdf(design);
      setShowPdfModal(true);
    } else {
      // Direct download for unrestricted files
      handleDownloadPdf(design);
    }
  };

  const handleDownloadPdf = (design) => {
    const link = document.createElement('a');
    link.href = `/pdfs/${design.filename}`;
    link.download = design.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      className="relative min-h-screen py-20 md:py-32 bg-[#f5f5f0] overflow-hidden"
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

        {/* Web Development Section */}
        <div 
          className="mb-32"
          style={{
            animation: isLoaded ? 'slideUp 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Globe className="w-8 h-8 text-[#e61f00]" />
            <h3 className="font-erstoria text-3xl md:text-4xl text-[#0a0100] tracking-wide">
              WEB DEVELOPMENT
            </h3>
          </div>

          {/* Website Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {projects.filter(project => project.type === 'website').map((project, index) => (
              <div 
                key={index}
                className="group relative bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/20 transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-lg"
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Screenshot Preview */}
                <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4] overflow-hidden">
                  
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
                        <div className="p-2 backdrop-blur-sm bg-white/20 border border-white/30">
                          <Globe className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Hover overlay - Centered */}
                      <div className={`absolute inset-0 bg-[#0a0100]/0 transition-all duration-300 flex items-center justify-center ${
                        hoveredProject === index ? 'bg-[#0a0100]/40' : ''
                      }`}>
                        <div className={`transition-all duration-300 text-center transform ${
                          hoveredProject === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}>
                          <div className="text-white font-erstoria tracking-wide text-sm lg:text-base bg-[#0a0100]/90 px-6 py-3 backdrop-blur-sm border border-white/20 shadow-lg">
                            <span>VIEW PROJECT</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Fallback if no screenshot */
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg border border-[#0a0100]/10 mx-auto">
                          <Globe className="w-8 h-8 text-[#0a0100]/70" />
                        </div>
                        <h3 className="font-erstoria text-xl text-[#0a0100] mb-2">{project.title}</h3>
                        <p className="text-[#0a0100]/70">{project.subtitle}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-4 sm:p-6 md:p-8 flex-grow flex flex-col">
                  <div className="mb-4 flex-grow">
                    <div className="mb-3">
                      <div className="inline-block px-3 py-1 mb-3 text-xs font-erstoria tracking-widest uppercase bg-[#0a0100]/5 text-[#0a0100]/60 border border-[#0a0100]/10">
                        {project.category}
                      </div>
                      <h3 className="font-erstoria text-lg sm:text-xl md:text-2xl text-[#0a0100] tracking-wide mb-2 group-hover:text-[#e61f00] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#0a0100]/60 mb-3">{project.subtitle}</p>
                    </div>
                    <p className="text-[#0a0100]/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-[#0a0100]/5 text-[#0a0100]/60 font-medium border border-[#0a0100]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
          className="mb-20"
          style={{
            animation: isLoaded ? 'slideUp 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.0s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Palette className="w-8 h-8 text-[#e61f00]" />
            <h3 className="font-erstoria text-3xl md:text-4xl text-[#0a0100] tracking-wide">
              UI/UX DESIGN
            </h3>
          </div>

          {/* Design Grid - Display first 2 designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {designConcepts.slice(0, 2).map((design, index) => (
              <div 
                key={index}
                className="group relative bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/30 transition-all duration-500 cursor-pointer overflow-hidden"
                onClick={() => handleDesignClick(design)}
                onMouseEnter={() => setHoveredDesign(index)}
                onMouseLeave={() => setHoveredDesign(null)}
              >
                {/* Design Screenshot Preview */}
                <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4] overflow-hidden">
                  
                  {/* Screenshot Preview */}
                  {design.screenshot ? (
                    <div className="absolute inset-0">
                      <img 
                        src={design.screenshot}
                        alt={`${design.title} design preview`}
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
                          design.type === 'figma'
                            ? 'bg-green-500/20 border border-green-500/30' 
                            : 'bg-blue-500/20 border border-blue-500/30'
                        }`}>
                          {design.type === 'figma' ? (
                            <Figma className="w-4 h-4 text-white" />
                          ) : (
                            <Palette className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </div>

                      {/* Hover overlay - Centered */}
                      <div className={`absolute inset-0 bg-[#0a0100]/0 transition-all duration-300 flex items-center justify-center ${
                        hoveredDesign === index ? 'bg-[#0a0100]/40' : ''
                      }`}>
                        <div className={`transition-all duration-300 text-center transform ${
                          hoveredDesign === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}>
                          <div className="text-white font-erstoria tracking-wide text-sm lg:text-base bg-[#0a0100]/90 px-6 py-3 backdrop-blur-sm border border-white/20 shadow-lg">
                            <span>
                              {design.type === 'figma' 
                                ? 'VIEW IN FIGMA' 
                                : design.requiresContact 
                                ? 'REQUEST ACCESS' 
                                : 'VIEW DESIGN'
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Fallback if no screenshot - Abstract mockup */
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg border border-[#0a0100]/10 mx-auto">
                          <Palette className="w-8 h-8 text-[#e61f00]/70" />
                        </div>
                        <h3 className="font-erstoria text-xl text-[#0a0100] mb-2">{design.title}</h3>
                        <p className="text-[#0a0100]/70">{design.subtitle}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Design Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="mb-3">
                        <div className={`inline-block px-3 py-1 mb-3 text-xs font-erstoria tracking-widest uppercase ${
                          design.type === 'figma'
                            ? 'bg-green-500/10 text-green-600 border border-green-500/20'
                            : design.type === 'protected'
                            ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                            : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                        }`}>
                          {design.category}
                        </div>
                        <h4 className="font-erstoria text-xl text-[#0a0100] tracking-wide mb-2 group-hover:text-[#e61f00] transition-colors duration-300">
                          {design.title}
                        </h4>
                        <p className="text-sm text-[#0a0100]/60 mb-3">{design.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#0a0100]/50 uppercase tracking-wide mb-3">
                        <span>{design.year}</span>
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
          <Link to="/portfolio">
          
          <button 
            onClick={handleViewMore}
            className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] min-w-[200px] cursor-pointer active:scale-95"
          >
            <span className="font-erstoria text-base tracking-wide">VIEW MORE</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          </Link>
        </div>
      </div>

      {/* PDF Modal for design files */}
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
                <div className="flex items-center gap-2 sm:gap-4">
                  <h2 className="font-erstoria text-lg sm:text-2xl tracking-wide text-[#0a0100]">
                    {currentPdf.title}
                  </h2>
                  <div className="w-4 sm:w-8 h-px bg-[#e61f00]" />
                </div>
              </div>

              {/* PDF Viewer - Responsive Height */}
              <div className="flex-1 bg-[#f5f5f0] p-2 sm:p-6 pt-2 sm:pt-4 overflow-hidden">
                {currentPdf.requiresContact ? (
                  /* Contact request for protected files */
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-center p-6">
                    <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                      <FileText className="w-16 h-16 text-amber-600" />
                    </div>
                    <h3 className="font-erstoria text-2xl text-[#0a0100] mb-3">
                      {currentPdf.title}
                    </h3>
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-6 max-w-lg">
                      <p className="text-amber-800 text-sm font-medium mb-2">🔒 Protected Design File</p>
                      <p className="text-amber-700 text-sm">
                        This premium design file contains detailed mockups, 
                        design systems, and professional documentation.
                      </p>
                    </div>
                    <p className="text-[#0a0100]/70 mb-6 max-w-md">
                      To access the complete design files and documentation, please get in touch. 
                      I'll be happy to share the full case study and design assets.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-[#e61f00] text-white px-6 py-3 font-erstoria tracking-wide uppercase text-sm hover:bg-[#cc1a00] transition-colors duration-300"
                        onClick={() => setShowPdfModal(false)}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Contact Me</span>
                      </Link>
                      
                      <button
                        onClick={() => window.open('mailto:theoblivionitself@gmail.com?subject=Design%20File%20Request:%20' + encodeURIComponent(currentPdf.title))}
                        className="inline-flex items-center gap-3 bg-[#0a0100] text-white px-6 py-3 font-erstoria tracking-wide uppercase text-sm hover:bg-[#0a0100]/80 transition-colors duration-300"
                      >
                        <span>📧</span>
                        <span>Email Direct</span>
                      </button>
                    </div>
                    
                    <p className="text-xs text-[#0a0100]/50 mt-6 max-w-sm">
                      Professional portfolio work • Available for serious inquiries
                    </p>
                  </div>
                ) : (
                  /* PDF Viewer for regular PDFs */
                  <div className="w-full h-full bg-white shadow-inner overflow-auto">
                    <iframe
                      src={`/pdfs/${currentPdf.filename}#toolbar=0&navpanes=0&scrollbar=1&zoom=FitH`}
                      className="w-full h-full border-none"
                      title={`${currentPdf.title} - Design PDF`}
                      onLoad={() => console.log(`PDF loaded: ${currentPdf.filename}`)}
                    />
                  </div>
                )}
              </div>

              {/* Modal Footer - Responsive Controls */}
              <div className="bg-[#f5f5f0] p-3 sm:p-6 border-t border-[#0a0100]/10 flex-shrink-0">
                <div className="flex items-center justify-between gap-2">
                  {/* Design Info */}
                  <div className="flex items-center gap-1">
                    <span className="text-xs uppercase tracking-widest text-[#0a0100]/50 font-erstoria">
                      {currentPdf.category}
                    </span>
                  </div>
                  
                  {/* Action Buttons Group */}
                  <div className="flex items-center gap-1">
                    {/* Download Button - Only show for non-protected files */}
                    {!currentPdf.requiresContact && (
                      <button
                        onClick={() => handleDownloadPdf(currentPdf)}
                        className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300 cursor-pointer active:scale-95"
                        title="Download PDF"
                        aria-label="Download PDF"
                      >
                        <Download size={16} className="sm:w-5 sm:h-5" />
                      </button>
                    )}

                    {/* Close Button */}
                    <button
                      onClick={() => setShowPdfModal(false)}
                      className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300 cursor-pointer active:scale-95"
                      aria-label="Close PDF"
                    >
                      <span className="text-lg">×</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
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
  );
};

export default PortfolioLanding;