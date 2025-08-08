import React, { useState, useEffect, useRef } from 'react';
import { EnhancedNavbar } from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HeroPortfolio from '../components/portfoliopage/HeroPortfolio';
import Lenis from 'lenis';
import ThinkPortfolio from '../components/portfoliopage/ThinkPortfolio';
import SimplifiedPortfolio from '../components/portfoliopage/DisplayPortfolio';

const PortfolioPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

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

      {/* Navbar */}
      <EnhancedNavbar />


      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroPortfolio />

        <ThinkPortfolio/>

          <SimplifiedPortfolio/>
      </main>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;