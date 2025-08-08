import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { EnhancedNavbar } from '../components/common/Navbar';
import { PageTransitionLayout } from './PageTransitionLayout';
import LandingPage from '../pages/LandingPage';
import ContactPage from '../pages/ContactPage';
import PortfolioPage from '../pages/PortfolioPage';
// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Also ensure it happens after any transitions
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);
  }, [pathname]);

  return null;
};

const AppRouter = () => {
  return (
    <Router>
      <div className='bg-[#f5f5f0]' style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <ScrollToTop />
        <EnhancedNavbar />
        <Routes>
          <Route path="/" element={
            <PageTransitionLayout backgroundColor="#ffffff">
              <LandingPage />
            </PageTransitionLayout>
          } />
          <Route path="/contact" element={
            <PageTransitionLayout backgroundColor="#ffffff">
              <ContactPage />
            </PageTransitionLayout>
          } />
          <Route path="/portfolio" element={
            <PageTransitionLayout backgroundColor="#ffffff">
              <PortfolioPage />
            </PageTransitionLayout>
          } />
          <Route path="*" element={
            <PageTransitionLayout backgroundColor="#ffffff">
              <LandingPage />
            </PageTransitionLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;