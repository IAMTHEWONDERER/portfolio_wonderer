import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { EnhancedNavbar } from '../components/common/Navbar';
import { PageTransitionLayout } from './PageTransitionLayout';
import LandingPage from '../pages/LandingPage';
import ContactPage from '../pages/ContactPage';
import PortfolioPage from '../pages/PortfolioPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import { useLenis } from '../utils/hooks';

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

// Component to update document title based on route
const DocumentTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const getPageTitle = (path) => {
      switch (path) {
        case '/':
          return 'Wonderer';
        case '/contact':
          return 'Contact';
        case '/portfolio':
          return 'Portfolio';
        default:
          if (path.startsWith('/portfolio/')) {
            return 'Project Details';
          }
          return 'Wonderer';
      }
    };

    document.title = getPageTitle(pathname);
  }, [pathname]);

  return null;
};

const AppRouter = () => {
  /*
   * Mounted exactly once, for the lifetime of the app.
   *
   * Lenis used to be started per page. Because it calls preventDefault() on
   * wheel events at the window, an instance that outlived its page kept
   * swallowing them everywhere — so visiting one smooth-scrolled route left
   * the whole site unscrollable, including routes that never started Lenis.
   * One owner means there is nothing to leak.
   */
  useLenis();

  return (
    <Router>
      <div className='bg-[#f5f5f0]' style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <ScrollToTop />
        <DocumentTitle />
        <EnhancedNavbar />
        <Routes>
          <Route path="/" element={
            <PageTransitionLayout backgroundColor="#f5f5f0">
              <LandingPage />
            </PageTransitionLayout>
          } />
          <Route path="/contact" element={
            <PageTransitionLayout backgroundColor="#f5f5f0">
              <ContactPage />
            </PageTransitionLayout>
          } />
          <Route path="/portfolio" element={
            <PageTransitionLayout backgroundColor="#f5f5f0">
              <PortfolioPage />
            </PageTransitionLayout>
          } />
          <Route path="/portfolio/:slug" element={
            <PageTransitionLayout backgroundColor="#f5f5f0">
              <ProjectDetailPage />
            </PageTransitionLayout>
          } />
          <Route path="*" element={
            <PageTransitionLayout backgroundColor="#f5f5f0">
              <LandingPage />
            </PageTransitionLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;