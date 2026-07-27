import React, { useState } from 'react';
import { ArrowUpRight, Code, Palette, Globe, Database, Smartphone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Magnetic,
  MaskedLines,
  Reveal,
  RevealGroup,
  RevealItem,
  SectionLabel,
} from '../../utils/motion';

const ServiceLanding = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Scalable, high-performance web applications with modern frameworks",
      details: [
        "React & Next.js Applications",
        "TypeScript & ES6+",
        "Performance Optimization",
        "Responsive Design"
      ],
      color: "text-[#e61f00]"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive interfaces that engage and convert users",
      details: [
        "User Experience Research",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Accessibility (WCAG)"
      ],
      color: "text-[#0a0100]"
    },
    {
      icon: MessageCircle,
      title: "AI Integration",
      description: "AI-powered features and conversational interfaces",
      details: [
        "AI APIs & MCPs",
        "Conversational Interfaces",
        "AI-assisted Workflows",
        "Intelligent Features"
      ],
      color: "text-[#e61f00]"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Scalable solutions for complex business requirements",
      details: [
        "Custom Web Platforms",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps"
      ],
      color: "text-[#0a0100]"
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Robust server architectures that scale with growth",
      details: [
        "Node.js & Express",
        "Python & FastAPI",
        "Supabase & PostgreSQL",
        "API Architecture"
      ],
      color: "text-[#e61f00]"
    },
    {
      icon: Smartphone,
      title: "Design Systems",
      description: "Reusable component libraries and UI consistency",
      details: [
        "Component-driven Architecture",
        "Design Tokens",
        "Cross-platform Consistency",
        "Documentation"
      ],
      color: "text-[#0a0100]"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#f5f5f0] overflow-hidden">
      {/* Background Grid */}
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
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <SectionLabel className="mb-8">Services</SectionLabel>

          <MaskedLines
            as="h2"
            lines={['WHAT I', 'DELIVER']}
            className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-12"
          />

          <Reveal className="mb-16" delay={0.1}>
            <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to transform your vision into
              exceptional user experiences that drive results.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <RevealItem key={service.title}>
              <button
                type="button"
                aria-expanded={isActive}
                className="focus-ring group relative w-full h-full text-left border border-[#0a0100]/10 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-[#0a0100]/20 transition-all duration-500 cursor-pointer overflow-hidden active:scale-[0.98]"
                onClick={() => setActiveService(isActive ? null : index)}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#e61f00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div aria-hidden="true" className="w-12 h-12 flex items-center justify-center bg-[#0a0100]/5 group-hover:bg-[#e61f00]/10 transition-colors duration-500">
                      <Icon className={`w-6 h-6 ${service.color} transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-erstoria text-xl md:text-2xl text-[#0a0100] tracking-wide mb-4 group-hover:text-[#e61f00] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-[#0a0100]/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Expand Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#0a0100]/60 font-erstoria">
                      Learn More
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className={`w-4 h-4 text-[#0a0100]/40 transition-all duration-300 ${isActive ? 'rotate-45' : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                        }`}
                    />
                  </div>

                  {/* Expanded Details */}
                  <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-60 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="pt-6 border-t border-[#0a0100]/10">
                      <ul className="space-y-3">
                        {service.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-center gap-3 text-sm text-[#0a0100]/70"
                          >
                            <div className="w-1 h-1 bg-[#e61f00] rounded-full flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </button>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Call to Action */}
        <Reveal className="text-center mt-20">
          <div className="mb-8">
            <h3 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4">
              Ready to bring your project to life?
            </h3>
            <p className="text-[#0a0100]/70 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can create something exceptional together.
              Every great project starts with a conversation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Magnetic>
              <Link
                to="/contact"
                className="focus-ring group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
              >
                <span className="font-erstoria text-base tracking-wide">START A PROJECT</span>
                <ArrowUpRight aria-hidden="true" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </Magnetic>
            <Link
              to="/portfolio"
              className="focus-ring group inline-flex items-center justify-center gap-4 px-8 py-4 border border-[#0a0100] text-[#0a0100] hover:bg-[#0a0100] hover:text-white transition-all duration-300 active:scale-95 min-w-[200px] cursor-pointer"
            >
              <span className="font-erstoria text-base tracking-wide">VIEW PORTFOLIO</span>
              <ArrowUpRight aria-hidden="true" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServiceLanding;