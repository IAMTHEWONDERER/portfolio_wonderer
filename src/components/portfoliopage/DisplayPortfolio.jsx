import React, { useState } from 'react';
import { ArrowUpRight, Code, Palette, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  CV_LAST_UPDATED,
  designConcepts,
  flagshipProjects,
  portfolioWebProjects,
} from '../../data/projects';
import ProjectCard from '../common/ProjectCard';
import DesignCard from '../common/DesignCard';
import PdfModal from '../common/PdfModal';
import {
  Magnetic,
  MaskedLines,
  Reveal,
  RevealGroup,
  SectionLabel,
} from '../../utils/motion';

const GRID = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8';

const SubsectionHeader = ({ icon: Icon, title, children }) => (
  <Reveal className="mb-16">
    <div className="flex items-center gap-4 mb-6">
      <Icon className="w-8 h-8 text-[#e61f00]" aria-hidden="true" />
      <h3 className="font-erstoria text-3xl md:text-4xl text-[#0a0100] tracking-wide">
        {title}
      </h3>
    </div>
    <p className="text-lg text-[#0a0100]/70 leading-relaxed max-w-3xl">{children}</p>
  </Reveal>
);

const DisplayPortfolio = () => {
  const [currentPdf, setCurrentPdf] = useState(null);

  const handleDesignOpen = (design) => {
    if (design.type === 'figma') {
      window.open(design.link, '_blank', 'noopener,noreferrer');
      return;
    }
    setCurrentPdf(design);
  };

  return (
    <>
      <section
        data-section="display-portfolio"
        className="relative py-20 md:py-32 bg-[#f5f5f0] overflow-hidden"
      >
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
            <SectionLabel className="mb-8">Selected Works</SectionLabel>

            <MaskedLines
              as="h2"
              lines={['FEATURED', 'PROJECTS']}
              className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-12"
            />

            <Reveal delay={0.1}>
              <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-3xl mx-auto leading-relaxed">
                A curated selection of the products, platforms and design systems I build —
                from live ventures to client and product engineering work.
              </p>
            </Reveal>
          </div>

          {/* Products & Ventures */}
          <div className="mb-32">
            <SubsectionHeader icon={Sparkles} title="PRODUCTS & VENTURES">
              Current work — the products I design and engineer at BuildwellAI, my own
              venture, and the platform behind my master&apos;s thesis.
            </SubsectionHeader>

            <RevealGroup className={GRID}>
              {flagshipProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </RevealGroup>
          </div>

          {/* Web Development */}
          <div className="mb-32">
            <SubsectionHeader icon={Code} title="WEB DEVELOPMENT">
              Live web applications showcasing modern development practices, performance
              optimisation and exceptional user experiences.
            </SubsectionHeader>

            <RevealGroup className={GRID}>
              {portfolioWebProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </RevealGroup>
          </div>

          {/* UI/UX Design */}
          <div className="mb-20">
            <SubsectionHeader icon={Palette} title="UI/UX DESIGN">
              Creative interface designs and user experience concepts that demonstrate
              design thinking, visual hierarchy and interaction patterns.
            </SubsectionHeader>

            <RevealGroup className={GRID}>
              {designConcepts.map((design) => (
                <DesignCard key={design.slug} design={design} onOpen={handleDesignOpen} />
              ))}
            </RevealGroup>
          </div>

          {/* Call to Action */}
          <Reveal className="text-center">
            <div className="border border-[#0a0100]/10 bg-white/50 backdrop-blur-sm p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4 tracking-wide">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-[#0a0100]/70 mb-8 leading-relaxed">
                Let&apos;s collaborate to bring your vision to life with innovative design
                and cutting-edge development.
              </p>
              <Magnetic>
                <Link
                  to="/contact"
                  className="focus-ring group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
                >
                  <span className="font-erstoria text-base tracking-wide">GET IN TOUCH</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      <PdfModal
        open={Boolean(currentPdf)}
        onClose={() => setCurrentPdf(null)}
        title={currentPdf?.title ?? ''}
        fileUrl={currentPdf ? `/pdfs/${currentPdf.filename}` : ''}
        downloadName={currentPdf?.filename}
        eyebrow={currentPdf?.category ?? `Updated ${CV_LAST_UPDATED}`}
        newTabLabel="OPEN DESIGN IN NEW TAB"
        downloadLabel="DOWNLOAD DESIGN"
      />
    </>
  );
};

export default DisplayPortfolio;
