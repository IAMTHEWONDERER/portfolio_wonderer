import React from 'react';

// Home Page Component
export const HomePage = () => (
  <div style={{ padding: '2rem', paddingTop: '8rem', minHeight: '100vh' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>Home Page</h1>
    <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.6' }}>
      This is the home page. The navbar transition creates a smooth reveal effect when navigating between pages.
    </p>
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '8px' }}>
      <h3>Dual Transition System:</h3>
      <ul>
        <li><strong>Navbar Transition:</strong> Click menu items for circular reveal effect</li>
        <li><strong>Regular Transition:</strong> Use for buttons, links, and other navigation</li>
        <li><strong>Language Support:</strong> Switch between FR/EN seamlessly</li>
        <li><strong>Responsive Design:</strong> Works on all devices</li>
      </ul>
    </div>
  </div>
);

// About Page Component
export const AboutPage = () => (
  <div style={{ padding: '2rem', paddingTop: '8rem', minHeight: '100vh', backgroundColor: '#f0f8ff' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#002b65' }}>About Page</h1>
    <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6' }}>
      The navbar's circular clip-path animation reveals the new page content as it closes.
    </p>
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
      <h3>How the Navbar Transition Works:</h3>
      <ol>
        <li>Click navbar menu item</li>
        <li>Page content changes instantly (behind overlay)</li>
        <li>Overlay stays open momentarily</li>
        <li>Overlay closes with circular animation</li>
        <li>New page is revealed underneath</li>
      </ol>
    </div>
  </div>
);

// Contact Page Component
export const ContactPage = () => (
  <div style={{ padding: '2rem', paddingTop: '8rem', minHeight: '100vh', backgroundColor: '#f0fff4' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#276749' }}>Contact Page</h1>
    <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6' }}>
      Contact us through this beautiful transition effect powered by the navbar overlay.
    </p>
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
      <h3>Technical Details:</h3>
      <ul>
        <li><strong>Z-Index:</strong> Navbar overlay at 9999</li>
        <li><strong>Animation Duration:</strong> 800ms total</li>
        <li><strong>Clip-Path:</strong> Circular reveal animation</li>
        <li><strong>Event System:</strong> Custom events coordinate timing</li>
      </ul>
    </div>
  </div>
);

// Products Page Component
export const ProductsPage = () => (
  <div style={{ padding: '2rem', paddingTop: '8rem', minHeight: '100vh', backgroundColor: '#fef5e7' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#702459' }}>Products & Services</h1>
    <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6' }}>
      Explore our products and services with smooth navbar transitions.
    </p>
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
      <h3>File Structure:</h3>
      <ul>
        <li><code>contexts/LanguageContext.jsx</code> - Language management</li>
        <li><code>hooks/useNavbarTransition.js</code> - Transition logic</li>
        <li><code>components/EnhancedNavbar.jsx</code> - Main navbar</li>
        <li><code>pages/Pages.jsx</code> - All page components</li>
        <li><code>AppRouter.jsx</code> - Main application</li>
      </ul>
    </div>
  </div>
);

// Gallery Page Component
export const GalleryPage = () => (
  <div style={{ padding: '2rem', paddingTop: '8rem', minHeight: '100vh', backgroundColor: '#fdf2f8' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#831843' }}>Gallery</h1>
    <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6' }}>
      Browse our gallery with elegant page transitions.
    </p>
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
      <h3>Integration with React Router:</h3>
      <p>To use with React Router, replace the state-based navigation in AppRouter.jsx with:</p>
      <pre style={{ backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '4px', marginTop: '1rem' }}>
{`import { useNavigate, useLocation } from 'react-router-dom';

// In your component:
const navigate = useNavigate();
const location = useLocation();

// Replace navigate function with:
const handleNavigation = (path) => {
  startNavbarTransition(path, () => {
    navigate(path);
  });
};`}
      </pre>
    </div>
  </div>
);