import React from 'react';
import { flagshipProjects } from '../../data/projects';
import ProjectCard from '../common/ProjectCard';
import { RevealGroup } from '../../utils/motion';
import SectionHead from './SectionHead';

/**
 * The four current products, 2x2 and large.
 *
 * These are the strongest argument on the page, so they get the most room and
 * come first. A three-column grid left one orphan card in a row of its own,
 * and because the orphan was the imageless NDA project the section ended on a
 * near-empty box.
 */
const FeaturedWork = () => (
  <section
    data-section="featured-work"
    className="relative py-16 md:py-24"
    aria-labelledby="featured-work-heading"
  >
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
      <SectionHead index={1} title="Products &amp; ventures" id="featured-work-heading">
        Current work — the products I design and engineer at BuildwellAI, my own
        venture, and the platform behind my master&apos;s thesis.
      </SectionHead>

      <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {flagshipProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </RevealGroup>
    </div>
  </section>
);

export default FeaturedWork;
