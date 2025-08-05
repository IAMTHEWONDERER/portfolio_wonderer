import { useState } from 'react';

// Enhanced Page Transition Hook for Navbar
export const useNavbarTransition = () => {
  const [isNavbarTransitioning, setIsNavbarTransitioning] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);

  const startNavbarTransition = (path, callback) => {
    if (isNavbarTransitioning) return;
    
    setIsNavbarTransitioning(true);
    setPendingPath(path);
    
    // Dispatch navbar transition start event
    window.dispatchEvent(new CustomEvent('navbarTransitionStart', { detail: { path } }));
    
    // Execute the navigation callback immediately (page changes behind the overlay)
    callback();
    
    // Wait for the navbar close animation to complete
    setTimeout(() => {
      setIsNavbarTransitioning(false);
      setPendingPath(null);
      window.dispatchEvent(new CustomEvent('navbarTransitionEnd'));
    }, 800); // Match the navbar close animation duration
  };

  return { startNavbarTransition, isNavbarTransitioning, pendingPath };
};