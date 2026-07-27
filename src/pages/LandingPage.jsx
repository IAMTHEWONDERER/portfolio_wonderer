import React from 'react';
import HeroLanding from '../components/landingpage/HeroLanding';
import AboutLanding from '../components/landingpage/AboutLanding';
import TechStackLanding from '../components/landingpage/TechStackLanding';
import ServiceLanding from '../components/landingpage/ServiceLanding';
import PortfolioLanding from '../components/landingpage/PorftolioLanding';
import Footer from '../components/common/Footer';
import ContactLanding from '../components/landingpage/ContactLanding';

/*
 * Smooth scroll is owned app-wide by `useLenis()` in AppRouter. This page used
 * to start a SECOND instance, which (a) skipped the reduced-motion bail-out in
 * the shared hook, so the home page ignored `prefers-reduced-motion`,
 * (b) leaked a self-perpetuating rAF loop that cleanup never cancelled, and
 * (c) passed Lenis v0 option names that v1 ignores. Deleted, not fixed.
 */
const LandingPage = () => {
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