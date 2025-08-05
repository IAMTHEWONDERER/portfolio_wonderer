import React, { useState } from 'react';
import { EnhancedNavbar } from '../components/common/Navbar';
import { 
  HomePage, 
  AboutPage, 
  ContactPage, 
  ProductsPage, 
  GalleryPage 
} from './pages';

const AppRouter = () => {
  const [currentPath, setCurrentPath] = useState('/');

  const navigate = (path) => {
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/products':
        return <ProductsPage />;
      case '/gallery':
        return <GalleryPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <EnhancedNavbar currentPath={currentPath} onNavigate={navigate} />
      {renderPage()}
    </div>
  );
};

export default AppRouter;