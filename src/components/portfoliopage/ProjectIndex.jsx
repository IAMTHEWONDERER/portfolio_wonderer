import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioWebProjects } from '../../data/projects';
import { RevealGroup, RevealItem } from '../../utils/motion';
import SectionHead from './SectionHead';

/**
 * Client and product work as an index, not a third grid of cards.
 *
 * By this point in the page the reader has already seen one card grid. A
 * second identical grid of eight, then a third of seven, is what made the page
 * feel like a template repeating itself — and a card is a poor container for
 * work that is mostly older and mostly not the argument.
 *
 * An index reads faster, fits eight items in the height of three cards, and
 * gives the page a second texture. It is also honest about rank: these are
 * listed, the flagship four are shown.
 */
const Row = ({ project, index }) => {
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="font-erstoria text-xs text-[#0a0100]/40 tabular-nums w-8 flex-shrink-0 pt-2"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <span className="flex-1 min-w-0">
        <span className="block font-erstoria text-xl md:text-2xl lg:text-3xl text-[#0a0100] tracking-tight leading-tight group-hover:text-[#e61f00] transition-colors duration-300 text-balance">
          {project.title}
        </span>
        <span className="mt-1 block text-sm text-[#0a0100]/60">
          {project.subtitle}
        </span>
      </span>

      {/* Tech reads as metadata here, so it is plain text rather than chips —
          eight rows of chips would be visual noise. */}
      <span className="hidden lg:block flex-1 min-w-0 text-sm text-[#0a0100]/60 leading-relaxed">
        {project.tech.slice(0, 4).join(' · ')}
      </span>

      {/* Older entries carry no verified date. An em dash keeps the column
          aligned rather than leaving a hole in the rhythm. */}
      <span className="hidden md:block w-40 flex-shrink-0 text-xs uppercase tracking-[0.15em] text-[#0a0100]/50 tabular-nums">
        {project.period ?? '—'}
      </span>

      <span className="w-6 flex-shrink-0 flex items-start pt-2">
        {project.url || project.to ? (
          <ArrowUpRight
            aria-hidden="true"
            className="w-5 h-5 text-[#0a0100]/30 transition-all duration-300 group-hover:text-[#e61f00] group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        ) : (
          <span className="text-[10px] uppercase tracking-widest text-[#0a0100]/40 whitespace-nowrap">
            {project.linkNote ?? '—'}
          </span>
        )}
      </span>
    </>
  );

  const shell =
    'group flex items-start gap-5 md:gap-8 py-6 md:py-7 border-b border-[#0a0100]/12 transition-colors duration-300';

  // Element type follows behaviour, same contract as ProjectCard: internal
  // case study is a Link, public URL is an anchor, neither is inert.
  if (project.to) {
    return (
      <RevealItem>
        <Link to={project.to} className={`focus-ring ${shell} hover:bg-[#0a0100]/[0.03] cursor-pointer`}>
          {inner}
        </Link>
      </RevealItem>
    );
  }

  if (project.url) {
    return (
      <RevealItem>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`focus-ring ${shell} hover:bg-[#0a0100]/[0.03] cursor-pointer`}
        >
          {inner}
        </a>
      </RevealItem>
    );
  }

  return (
    <RevealItem>
      <div className={shell}>{inner}</div>
    </RevealItem>
  );
};

const ProjectIndex = () => (
  <section className="relative py-16 md:py-24" aria-labelledby="project-index-heading">
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
      <SectionHead index={3} title="Client &amp; product work" id="project-index-heading">
        Platforms and applications delivered for employers and clients, from
        learning systems to IoT dashboards.
      </SectionHead>

      <RevealGroup className="border-t border-[#0a0100]/12" stagger={0.05}>
        {portfolioWebProjects.map((project, i) => (
          <Row key={project.slug} project={project} index={i} />
        ))}
      </RevealGroup>
    </div>
  </section>
);

export default ProjectIndex;
