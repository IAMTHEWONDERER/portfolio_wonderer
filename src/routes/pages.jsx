import React from 'react';

// Home Page Component
export const HomePage = () => (
  <div style={{ padding: '2rem', paddingTop: '8rem', minHeight: '100vh' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>Home Page</h1>
    <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.6' }}>
      Welcome to the home page with real URL routing! The navbar transition creates a smooth reveal effect when navigating between pages.
    </p>
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '8px' }}>
      <h3>Real URL Routing:</h3>
      <ul>
        <li><strong>Home:</strong> <code>/</code></li>
        <li><strong>About:</strong> <code>/about</code></li>
        <li><strong>Contact:</strong> <code>/contact</code></li>
        <li><strong>Products:</strong> <code>/products</code></li>
        <li><strong>Gallery:</strong> <code>/gallery</code></li>
      </ul>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        Each page has its own URL that you can bookmark, share, or navigate to directly!
      </p>
    </div>
  </div>
);

// About Page Component
export const AboutPage = () => (
  <div style={{ padding: '2rem', paddingTop: '8rem', minHeight: '100vh', backgroundColor: '#f0f8ff' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#002b65' }}>About Page</h1>
    <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6' }}>
      You're now on <strong>/about</strong> - a real URL! The navbar's circular clip-path animation reveals the new page content as it closes.
    </p>
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
      <h3>How the Navbar Transition Works:</h3>
      <ol>
        <li>Click navbar menu item</li>
        <li>React Router navigation happens instantly (behind overlay)</li>
        <li>URL changes to the new route</li>
        <li>Overlay stays open momentarily</li>
        <li>Overlay closes with circular animation</li>
        <li>New page with new URL is revealed underneath</li>
      </ol>
    </div>
  </div>
);

// Contact Page Component
export const ContactPage = () => (
  <div style={{ padding: '2rem', paddingTop: '8rem', minHeight: '100vh', backgroundColor: '#f0fff4' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#276749' }}>Contact Page</h1>
    <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6' }}>
      Welcome to <strong>/contact</strong>! You can bookmark this URL or share it directly with others.
    </p>
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
      <h3>React Router Integration:</h3>
      <ul>
        <li><strong>useLocation():</strong> Gets current URL path</li>
        <li><strong>useNavigate():</strong> Programmatic navigation</li>
        <li><strong>Routes & Route:</strong> URL-to-component mapping</li>
        <li><strong>Browser History:</strong> Back/forward buttons work</li>
      </ul>
    </div>
  </div>
);

// Products Page Component
export const PortfolioPage = () => (
  <div style={{ padding: '2rem', paddingTop: '8rem', minHeight: '100vh', backgroundColor: '#fef5e7' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#702459' }}>Products & Services</h1>
    <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6' }}>
      You're viewing <strong>/products</strong> with full URL support and smooth navbar transitions.
    </p>
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
      <h3>Updated File Structure:</h3>
      <ul>
        <li><code>hooks/useNavbarTransition.js</code> - Transition logic</li>
        <li><code>components/EnhancedNavbar.jsx</code> - Navbar with React Router</li>
        <li><code>pages/Pages.jsx</code> - All page components</li>
        <li><code>AppRouter.jsx</code> - BrowserRouter with Routes</li>
      </ul>
    </div>
  </div>
);

// Gallery Page Component
export const GalleryPage = () => (
  <div style={{ padding: '2rem', paddingTop: '8rem', minHeight: '100vh', backgroundColor: '#fdf2f8' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#831843' }}>Gallery</h1>
    <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6' }}>
      Browse our gallery at <strong>/gallery</strong> with elegant page transitions and real URLs.
    </p>
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
      <h3>Features:</h3>
      <ul>
        <li>✅ Real URLs that can be bookmarked</li>
        <li>✅ Browser back/forward buttons work</li>
        <li>✅ Direct URL access (e.g., example.com/gallery)</li>
        <li>✅ Smooth navbar transition animations</li>
        <li>✅ Language switching (FR/EN)</li>
        <li>✅ Responsive design</li>
      </ul>
    </div>
  </div>
);