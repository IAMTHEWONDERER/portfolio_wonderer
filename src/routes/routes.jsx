import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnhancedNavbar } from '../components/common/Navbar';
import { PageTransitionLayout } from './PageTransitionLayout';
import LandingPage from '../pages/LandingPage';

const AppRouter = () => {
  return (
    <Router>
      <div className='bg-[#f5f5f0]' style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <EnhancedNavbar />
        <Routes>
          <Route path="/" element={
            <PageTransitionLayout backgroundColor="#ffffff">
              <LandingPage />
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