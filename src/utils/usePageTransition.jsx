import { useState } from 'react';

// Animation timing constants
const EXIT_DELAY = 200; // Time before starting enter animation

// Transition Controller Hook
export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = (callback) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Dispatch transition start event
    window.dispatchEvent(new CustomEvent('pageTransitionStart'));
    
    // Wait for exit animation to complete, then call callback
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('pageTransitionWaiting'));
      callback();
      
      // Wait for enter animation to complete
      setTimeout(() => {
        setIsTransitioning(false);
      }, EXIT_DELAY + 600);
    }, 600); // Exit duration: 400ms + 200ms for all column stagger
  };

  return { startTransition, isTransitioning };
};