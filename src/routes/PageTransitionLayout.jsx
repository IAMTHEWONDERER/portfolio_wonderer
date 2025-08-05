import React, { useState, useEffect } from 'react';

// Animation timing constants
const EXIT_DELAY = 200; // Time before starting enter animation
const COLUMN_DELAY = 0.05; // Delay between each column

// Core Page Transition Layout Component
export const PageTransitionLayout = ({ children, backgroundColor = '#ffffff' }) => {
  const [transitionState, setTransitionState] = useState('enter'); // 'exit', 'waiting', 'enter'
  const nbOfColumns = 5;

  useEffect(() => {
    // Listen for transition events
    const handleTransitionStart = () => {
      setTransitionState('exit');
    };

    const handleTransitionEnd = () => {
      setTimeout(() => {
        setTransitionState('enter');
      }, EXIT_DELAY);
    };

    window.addEventListener('pageTransitionStart', handleTransitionStart);
    window.addEventListener('pageTransitionWaiting', handleTransitionEnd);

    return () => {
      window.removeEventListener('pageTransitionStart', handleTransitionStart);
      window.removeEventListener('pageTransitionWaiting', handleTransitionEnd);
    };
  }, []);

  const getColumnStyle = (index) => {
    if (transitionState === 'exit') {
      // Exit starts from the same end as enter (right to left)
      const delay = COLUMN_DELAY * (nbOfColumns - 1 - index) * 1000;
      return {
        height: '100vh',
        transform: 'translateY(0)',
        transition: `all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}ms`
      };
    } else if (transitionState === 'enter') {
      // Enter animation (right to left, matching original)
      const delay = COLUMN_DELAY * (nbOfColumns - 1 - index) * 1000;
      return {
        height: '0',
        transform: 'translateY(100vh)',
        transition: `all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}ms`
      };
    }
    return {
      height: '0',
      transform: 'translateY(100vh)',
      transition: 'none'
    };
  };

  const getBackgroundStyle = () => {
    return {
      opacity: transitionState === 'exit' ? 0.5 : 0,
      transition: 'opacity 0.4s ease'
    };
  };

  return (
    <>
      <style jsx>{`
        .page-transition-stairs {
          position: relative;
          min-height: 100vh;
          background-color: ${backgroundColor};
        }
        
        .page-transition-container {
          position: fixed;
          width: 100vw;
          height: 100vh;
          display: flex;
          left: 0;
          top: 0;
          pointer-events: none;
          z-index: 9999;
        }
        
        .page-transition-column {
          position: relative;
          height: 100%;
          width: 100%;
          background-color: black;
        }
        
        .page-transition-background {
          position: fixed;
          width: 100%;
          height: 100vh;
          background-color: black;
          z-index: 9998;
          pointer-events: none;
          top: 0;
          left: 0;
        }
        
        .page-transition-content {
          position: relative;
          z-index: 0;
        }
      `}</style>
      
      <div className="page-transition-stairs">
        <div 
          className="page-transition-background"
          style={getBackgroundStyle()}
        />
        <div className="page-transition-container">
          {[...Array(nbOfColumns)].map((_, i) => (
            <div
              key={i} 
              className="page-transition-column"
              style={getColumnStyle(i)}
            />
          ))}
        </div>
        <div className="page-transition-content">
          {children}
        </div>
      </div>
    </>
  );
};