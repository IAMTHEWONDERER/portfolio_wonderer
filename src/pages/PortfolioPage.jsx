import React from 'react';
import Footer from '../components/common/Footer';
import HeroPortfolio from '../components/portfoliopage/HeroPortfolio';
import ThinkPortfolio from '../components/portfoliopage/ThinkPortfolio';
import ExperienceTimeline from '../components/portfoliopage/ExperienceTimeline';
import DisplayPortfolio from '../components/portfoliopage/DisplayPortfolio';

const PortfolioPage = () => {

  return (
    <div className="min-h-screen bg-[#f5f5f0] relative overflow-hidden">
      {/* Background Grid Pattern */}
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

      {/* Navbar is rendered once globally in AppRouter — do not add a second one here. */}

      {/*
        `<main>` intentionally has no `z-index`. It used to be `z-10`, which
        opened a stacking context that pinned this page's modals underneath
        the fixed navbar.
      */}
      <main className="relative">
        <HeroPortfolio />
        <ThinkPortfolio />
        <ExperienceTimeline />
        <DisplayPortfolio />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
