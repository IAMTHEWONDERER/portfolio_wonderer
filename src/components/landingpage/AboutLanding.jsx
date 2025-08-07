import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Quote } from 'lucide-react';

const AboutLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Artistic images with dark shader effect
  const artisticImages = [
    {
      id: 1,
      src: '/imgs/im2.jpeg',
      alt: 'Creative Process',
      title: 'Creative Process',
      position: 'top-8 left-12',
      size: 'w-72 h-96',
      delay: '0.5s'
    },
    {
      id: 2,
      src: '/imgs/im3.jpeg',
      alt: 'Design Inspiration',
      title: 'Design Inspiration',
      position: 'top-32 right-16',
      size: 'w-64 h-80',
      delay: '1s'
    },
    {
      id: 3,
      src: '/imgs/im1.jpeg',
      alt: 'Artistic Vision',
      title: 'Artistic Vision',
      position: 'bottom-12 left-6', 
      size: 'w-68 h-84',
      delay: '1.5s'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Auto-rotate carousel only on mobile
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % artisticImages.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % artisticImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + artisticImages.length) % artisticImages.length);
  };

  // Get filter styles based on device and hover state
  const getImageFilter = (imageId) => {
    if (isMobile) {
      return 'none'; // No filter on mobile
    }
    return hoveredImage === imageId
      ? 'grayscale(0%) contrast(1.1) brightness(1)' 
      : 'grayscale(100%) contrast(1.2) brightness(1)';
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f5f0] py-20"
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

      {/* Desktop: Artistic Images with Black/White to Color Effect */}
      <div className="hidden md:block">
        {artisticImages.map((image) => (
          <div
            key={image.id}
            className={`absolute ${image.position} ${image.size}`}
            style={{
              animationDelay: image.delay,
              zIndex: 1,
              animation: 'fadeInScale 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
              opacity: 0,
            }}
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="relative w-full h-full group cursor-pointer">
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover shadow-md transition-all duration-700 ease-out"
                style={{
                  filter: getImageFilter(image.id),
                }}
              />
              
              {/* Subtle Border */}
              <div className="absolute inset-0 border border-[#0a0100]/20" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center">
          {/* Section Label */}
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
              <span className="font-erstoria">About</span>
              <div className="w-12 h-px bg-[#0a0100]/30" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="overflow-hidden mb-12">
            <h2 
              className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-6"
              style={{
                animation: isLoaded ? 'slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              CRAFTING DIGITAL
              <span className="block text-[#e61f00]">EXPERIENCES</span>
            </h2>
          </div>

          {/* Quote */}
          <div 
            className="overflow-hidden mb-12"
            style={{
              animation: isLoaded ? 'slideUp 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <div className="relative">
              <Quote className="w-8 h-8 text-[#e61f00] mb-4 mx-auto" />
              <p className="text-xl md:text-2xl lg:text-3xl text-[#0a0100]/80 font-light italic leading-relaxed max-w-3xl mx-auto">
                "Design is not just what it looks like and feels like. 
                Design is how it works."
              </p>
            </div>
          </div>

          {/* Description */}
          <div 
            className="overflow-hidden mb-16"
            style={{
              animation: isLoaded ? 'slideUp 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
              <div>
                <p className="text-lg text-[#0a0100]/70 leading-relaxed mb-6">
                  My name is Oussama Alouche, 24 Years old, a passionate designer and developer based in Morocco, dedicated to creating 
                  meaningful digital experiences that bridge the gap between aesthetics and functionality.
                </p>
                <p className="text-lg text-[#0a0100]/70 leading-relaxed">
                  My approach combines minimalist design principles with cutting-edge technology 
                  to deliver solutions that are both beautiful and purposeful.
                </p>
              </div>
              <div>
                <p className="text-lg text-[#0a0100]/70 leading-relaxed mb-6">
                  With a keen eye for detail and a deep understanding of user experience, 
                  I transform complex ideas into elegant, intuitive interfaces.
                </p>
                <p className="text-lg text-[#0a0100]/70 leading-relaxed">
                  Every project is an opportunity to push creative boundaries while maintaining 
                  the highest standards of craftsmanship and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: Image Carousel */}
          {isMobile && (
            <div 
              className="overflow-hidden mb-16 md:hidden"
              style={{
                animation: isLoaded ? 'slideUp 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards' : 'none',
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <div className="max-w-lg mx-auto">
                {/* Image Container */}
                <div className="relative w-full h-80 mb-8">
                  <div className="relative w-full h-full group cursor-pointer">
                    <img
                      src={artisticImages[currentImageIndex].src}
                      alt={artisticImages[currentImageIndex].alt}
                      className="w-full h-full object-cover shadow-md transition-all duration-700 ease-out rounded-sm"
                      style={{
                        filter: 'none', // No filter on mobile
                      }}
                    />
                    <div className="absolute inset-0 border border-[#0a0100]/20 rounded-sm" />
                    
                    {/* Image Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0100]/80 to-transparent p-6">
                      <h3 className="font-erstoria text-lg text-white tracking-wide">
                        {artisticImages[currentImageIndex].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevImage}
                    className="group flex items-center gap-2 px-6 py-3 border border-[#0a0100]/30 text-[#0a0100]/70 hover:border-[#e61f00] hover:text-[#e61f00] hover:bg-[#e61f00]/5 transition-all duration-300"
                  >
                    <span className="font-erstoria text-sm uppercase tracking-widest">PREV</span>
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex gap-3">
                    {artisticImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-[#e61f00] scale-110' 
                            : 'bg-[#0a0100]/30 hover:bg-[#0a0100]/50'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextImage}
                    className="group flex items-center gap-2 px-6 py-3 border border-[#0a0100]/30 text-[#0a0100]/70 hover:border-[#e61f00] hover:text-[#e61f00] hover:bg-[#e61f00]/5 transition-all duration-300"
                  >
                    <span className="font-erstoria text-sm uppercase tracking-widest">NEXT</span>
                  </button>
                </div>

                {/* Image Counter */}
                <div className="text-center mt-4">
                  <span className="text-sm text-[#0a0100]/50 font-erstoria tracking-widest">
                    {String(currentImageIndex + 1).padStart(2, '0')} / {String(artisticImages.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Skills/Expertise */}
          <div 
            className="overflow-hidden mb-16"
            style={{
              animation: isLoaded ? 'slideUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest text-[#0a0100]/60">
              <span className="border border-[#0a0100]/20 px-6 py-3 hover:border-[#e61f00] hover:text-[#e61f00] transition-colors duration-300">
                UI/UX Design
              </span>
              <span className="border border-[#0a0100]/20 px-6 py-3 hover:border-[#e61f00] hover:text-[#e61f00] transition-colors duration-300">
                Frontend Development
              </span>
              <span className="border border-[#0a0100]/20 px-6 py-3 hover:border-[#e61f00] hover:text-[#e61f00] transition-colors duration-300">
                Brand Identity
              </span>
              <span className="border border-[#0a0100]/20 px-6 py-3 hover:border-[#e61f00] hover:text-[#e61f00] transition-colors duration-300">
                Creative Direction
              </span>
            </div>
          </div>

          {/* CTA */}
          <div 
            className="overflow-hidden"
            style={{
              animation: isLoaded ? 'slideUp 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4s forwards' : 'none',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            <button className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 border-2 border-[#0a0100] text-[#0a0100] hover:bg-[#0a0100] hover:text-white transition-all duration-500 overflow-hidden">
              <span className="font-erstoria text-lg tracking-wide">LET'S COLLABORATE</span>
              <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
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

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutLanding;