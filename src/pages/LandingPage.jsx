import React, { useEffect } from 'react';
import Lenis from 'lenis';
import HeroLanding from '../components/landingpage/HeroLanding';
import AboutLanding from '../components/landingpage/AboutLanding';
import TechStackLanding from '../components/landingpage/TechStackLanding';
import ServiceLanding from '../components/landingpage/ServiceLanding';
import PortfolioLanding from '../components/landingpage/PorftolioLanding';
import Footer from '../components/common/Footer';
import ContactLanding from '../components/landingpage/ContactLanding';

const LandingPage = () => {
  useEffect(() => {
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
    
      {/* Hero Section */}
      <HeroLanding />
      
      {/* About Section */}
      <AboutLanding />
      
      {/* Tech Stack Section */}
      <TechStackLanding />
      
      {/* Services Section */}
      <ServiceLanding />
      
      {/* Portfolio Section */}
      <PortfolioLanding />
      <ContactLanding/>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;