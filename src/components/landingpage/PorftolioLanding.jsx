import React, { useState } from 'react';
import { ArrowUpRight, Globe, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { landingDesignConcepts, landingProjects } from '../../data/projects';
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

const SubsectionHeader = ({ icon: Icon, title }) => (
  <Reveal className="flex items-center gap-4 mb-8">
    <Icon className="w-8 h-8 text-[#e61f00]" aria-hidden="true" />
    <h3 className="font-erstoria text-3xl md:text-4xl text-[#0a0100] tracking-wide">
      {title}
    </h3>
  </Reveal>
);

const PortfolioLanding = () => {
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
            <SectionLabel className="mb-8">Portfolio</SectionLabel>

            <MaskedLines
              as="h2"
              lines={['SELECTED', 'WORK']}
              className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-12"
            />

            <Reveal delay={0.1}>
              <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-3xl mx-auto leading-relaxed">
                Explore some of the exceptional websites and applications I&apos;ve crafted.
                Each project represents a unique solution tailored to deliver outstanding
                results.
              </p>
            </Reveal>
          </div>

          {/* Web Development */}
          <div className="mb-32">
            <SubsectionHeader icon={Globe} title="WEB DEVELOPMENT" />

            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
              {landingProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </RevealGroup>
          </div>

          {/* UI/UX Design */}
          <div className="mb-20">
            <SubsectionHeader icon={Palette} title="UI/UX DESIGN" />

            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {landingDesignConcepts.map((design) => (
                <DesignCard key={design.slug} design={design} onOpen={handleDesignOpen} />
              ))}
            </RevealGroup>
          </div>

          {/* View More */}
          <Reveal className="text-center">
            <p className="text-[#0a0100]/70 max-w-2xl mx-auto leading-relaxed mb-8">
              These are just a few examples of the digital experiences I create. Each
              project is a testament to attention to detail, innovative solutions and
              exceptional craftsmanship.
            </p>
            <Magnetic>
              <Link
                to="/portfolio"
                className="focus-ring group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
              >
                <span className="font-erstoria text-base tracking-wide">VIEW MORE</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <PdfModal
        open={Boolean(currentPdf)}
        onClose={() => setCurrentPdf(null)}
        title={currentPdf?.title ?? ''}
        fileUrl={currentPdf ? `/pdfs/${currentPdf.filename}` : ''}
        downloadName={currentPdf?.filename}
        eyebrow={currentPdf?.category ?? ''}
        newTabLabel="OPEN DESIGN IN NEW TAB"
        downloadLabel="DOWNLOAD DESIGN"
      />
    </>
  );
};

export default PortfolioLanding;
