import React from 'react';
import HeroLanding from '../components/landingpage/HeroLanding';

const LandingPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroLanding />
      
      {/* Additional sections can be added here */}
      {/* Example: About preview, featured work, etc. */}
    </div>
  );
};

export default LandingPage;