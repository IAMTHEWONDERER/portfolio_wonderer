import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnhancedNavbar } from '../components/common/Navbar';
import { PageTransitionLayout } from './PageTransitionLayout';
import { 
  HomePage, 
  AboutPage, 
  ContactPage, 
  PortfolioPage 
} from './pages';

// Main App Router Component with Dual Transitions
const AppRouter = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <EnhancedNavbar />
        <Routes>
          <Route path="/" element={
            <PageTransitionLayout backgroundColor="#f7fafc">
              <HomePage />
            </PageTransitionLayout>
          } />
          <Route path="/about" element={
            <PageTransitionLayout backgroundColor="#f0f8ff">
              <AboutPage />
            </PageTransitionLayout>
          } />
          <Route path="/contact" element={
            <PageTransitionLayout backgroundColor="#f0fff4">
              <ContactPage />
            </PageTransitionLayout>
          } />
          <Route path="/portfolio" element={
            <PageTransitionLayout backgroundColor="#fef5e7">
              <PortfolioPage />
            </PageTransitionLayout>
          } />
          <Route path="*" element={
            <PageTransitionLayout backgroundColor="#f7fafc">
              <HomePage />
            </PageTransitionLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;