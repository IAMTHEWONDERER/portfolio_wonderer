import { useState } from 'react';

// Enhanced Page Transition Hook for both Navbar and Regular transitions
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

// Regular Page Transition Hook for buttons/direct navigation
export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = (callback) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Dispatch regular transition start event
    window.dispatchEvent(new CustomEvent('pageTransitionStart'));
    
    // Wait for exit animation to complete, then call callback
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('pageTransitionWaiting'));
      callback();
      
      // Wait for enter animation to complete
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200 + 600); // EXIT_DELAY + enter animation duration
    }, 600); // Exit duration: 400ms + 200ms for all column stagger
  };

  return { startTransition, isTransitioning };
};