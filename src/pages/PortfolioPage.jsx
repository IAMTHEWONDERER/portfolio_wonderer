import React from 'react';
import Footer from '../components/common/Footer';
import PortfolioHero from '../components/portfoliopage/PortfolioHero';
import FeaturedWork from '../components/portfoliopage/FeaturedWork';
import ExperienceTimeline from '../components/portfoliopage/ExperienceTimeline';
import ProjectIndex from '../components/portfoliopage/ProjectIndex';
import DesignArchive from '../components/portfoliopage/DesignArchive';
import PortfolioContact from '../components/portfoliopage/PortfolioContact';

/**
 * The portfolio page, rebuilt.
 *
 * Order is an argument: what I am building now, who I have built it for, what
 * else I have shipped, how it looked, then the ask. Work before process, and
 * the ask last.
 *
 * Two things are deliberately gone.
 *
 * `ThinkPortfolio` — a 2,400px five-card "how I think" section whose copy
 * ("I start by immersing myself in your world") described no project and would
 * have read identically on any agency site. It also carried the page's second
 * CTA panel. The CV it hosted now opens from the hero, where a recruiter looks
 * for it.
 *
 * `DisplayPortfolio` — a single 7,700px component holding three grids and a
 * CTA. Split into FeaturedWork, ProjectIndex and DesignArchive so each has one
 * job, and so the middle one could stop being a third card grid.
 *
 * Section rhythm is 192px between sections, versus 256px before, and the
 * heading treatment steps down: one masthead in the hero, numbered single-line
 * heads everywhere below.
 */
const PortfolioPage = () => (
  <div className="min-h-screen bg-[#f5f5f0] relative overflow-hidden">
    {/* Background grid — the page's substrate, fixed so it does not scroll
        with content and reveal its own seams. */}
    <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
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

    {/* Navbar is rendered once globally in AppRouter — do not add one here. */}

    {/*
      `<main>` intentionally has no `z-index`. It used to be `z-10`, which
      opened a stacking context that pinned this page's modals underneath the
      fixed navbar.
    */}
    <main className="relative">
      <PortfolioHero />
      <FeaturedWork />
      <ExperienceTimeline />
      <ProjectIndex />
      <DesignArchive />
      <PortfolioContact />
    </main>

    <Footer />
  </div>
);

export default PortfolioPage;
