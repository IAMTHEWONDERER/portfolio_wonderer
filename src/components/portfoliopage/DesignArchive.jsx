import React, { useState } from 'react';
import { designConcepts } from '../../data/projects';
import DesignCard from '../common/DesignCard';
import PdfModal from '../common/PdfModal';
import { RevealGroup } from '../../utils/motion';
import SectionHead from './SectionHead';

/**
 * Interface and product design work. Kept as a grid — unlike the project
 * index, these are visual artifacts, so the thumbnail *is* the content and a
 * list would throw away the only thing worth showing.
 */
const DesignArchive = () => {
  const [currentPdf, setCurrentPdf] = useState(null);

  const handleOpen = (design) => {
    if (design.type === 'figma') {
      window.open(design.link, '_blank', 'noopener,noreferrer');
      return;
    }
    setCurrentPdf(design);
  };

  return (
    <>
      <section className="relative py-16 md:py-24" aria-labelledby="design-archive-heading">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <SectionHead index={4} title="Interface design" id="design-archive-heading">
            Product and brand design work — flows, systems and high-fidelity
            prototypes, most of it shipped alongside the build.
          </SectionHead>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {designConcepts.map((design) => (
              <DesignCard key={design.slug} design={design} onOpen={handleOpen} />
            ))}
          </RevealGroup>
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

export default DesignArchive;
