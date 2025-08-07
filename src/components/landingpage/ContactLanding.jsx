import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "theoblivionitself@gmail.com",
      href: "mailto:theoblivionitself@gmail.com",
      color: "text-[#e61f00]"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 7 20 14 88 07",
      href: "tel:+212720148807",
      color: "text-[#0a0100]"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/IAMTHEWONDERER",
      href: "https://github.com/IAMTHEWONDERER",
      color: "text-[#e61f00]"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/oussama-alouche",
      href: "https://linkedin.com/in/oussama-alouche",
      color: "text-[#0a0100]"
    }
  ];

  const handleContactPageNavigation = () => {
    navigate('/contact');
  };

  return (
    <section 
      ref={sectionRef}
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
              <span className="font-erstoria">Get In Touch</span>
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
              LET'S
              <span className="block text-[#e61f00]">CONNECT</span>
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
              Ready to bring your vision to life? Let's discuss your project 
              and create something extraordinary together.
            </p>
          </div>
        </div>

        {/* Contact Information Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          style={{
            animation: isLoaded ? 'slideUp 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const isHovered = hoveredContact === index;
            
            return (
              <a 
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group relative border border-[#0a0100]/10 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-[#0a0100]/20 transition-all duration-500 cursor-pointer overflow-hidden p-8"
                onMouseEnter={() => setHoveredContact(index)}
                onMouseLeave={() => setHoveredContact(null)}
                style={{
                  animation: isLoaded ? `slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${1 + index * 0.1}s forwards` : 'none',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isLoaded ? 1 : 0,
                }}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#e61f00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-center gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center bg-[#0a0100]/5 group-hover:bg-[#e61f00]/10 transition-colors duration-500">
                    <Icon className={`w-8 h-8 ${contact.color} transition-transform duration-300 group-hover:scale-110`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-erstoria text-xl text-[#0a0100] tracking-wide mb-2 group-hover:text-[#e61f00] transition-colors duration-300">
                      {contact.label}
                    </h3>
                    <p className="text-[#0a0100]/70 text-sm leading-relaxed group-hover:text-[#0a0100]/90 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight 
                    className={`w-6 h-6 text-[#0a0100]/40 transition-all duration-300 ${
                      isHovered ? 'translate-x-1 -translate-y-1 text-[#e61f00]' : ''
                    }`}
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div 
          className="text-center overflow-hidden"
          style={{
            animation: isLoaded ? 'slideUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4s forwards' : 'none',
            transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
            opacity: isLoaded ? 1 : 0,
          }}
        >
          <div className="mb-8">
            <h3 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4">
              Have a project in mind?
            </h3>
            <p className="text-[#0a0100]/70 max-w-2xl mx-auto leading-relaxed">
              Visit my contact page for a detailed contact form and more ways to get in touch.
            </p>
          </div>
          
          <button 
            onClick={handleContactPageNavigation}
            className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] min-w-[200px]"
          >
            <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-erstoria text-base tracking-wide">CONTACT PAGE</span>
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

export default ContactLanding;