import React, { useState, useEffect } from 'react';

// Animation timing constants
const EXIT_DELAY = 200; // Time before starting enter animation
const COLUMN_DELAY = 0.05; // Delay between each column

/**
 * Stair-wipe route transition.
 *
 * The CSS lives in src/index.css. It used to be inlined in a
 * `<style jsx>` block that interpolated `backgroundColor` straight into
 * the stylesheet text; the colour is now handed over as a custom
 * property instead, so nothing is ever injected into CSS.
 *
 * `.page-transition-content` deliberately carries no `z-index`. It used
 * to be `z-index: 0`, which opened a stacking context that trapped every
 * modal on the site underneath the fixed navbar.
 */
export const PageTransitionLayout = ({ children, backgroundColor = '#f5f5f0' }) => {
  const [transitionState, setTransitionState] = useState('enter'); // 'exit' | 'enter'
  const nbOfColumns = 5;

  useEffect(() => {
    const handleTransitionStart = () => setTransitionState('exit');
    const handleTransitionEnd = () => {
      setTimeout(() => setTransitionState('enter'), EXIT_DELAY);
    };

    window.addEventListener('pageTransitionStart', handleTransitionStart);
    window.addEventListener('pageTransitionWaiting', handleTransitionEnd);

    return () => {
      window.removeEventListener('pageTransitionStart', handleTransitionStart);
      window.removeEventListener('pageTransitionWaiting', handleTransitionEnd);
    };
  }, []);

  const getColumnStyle = (index) => {
    const delay = COLUMN_DELAY * (nbOfColumns - 1 - index) * 1000;

    if (transitionState === 'exit') {
      return {
        height: '100vh',
        transform: 'translateY(0)',
        transition: `all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}ms`,
      };
    }

    return {
      height: '0',
      transform: 'translateY(100vh)',
      transition: `all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}ms`,
    };
  };

  const getBackgroundStyle = () => ({
    opacity: transitionState === 'exit' ? 0.5 : 0,
    transition: 'opacity 0.4s ease',
  });

  return (
    <div className="page-transition-stairs" style={{ '--page-bg': backgroundColor }}>
      <div className="page-transition-background" style={getBackgroundStyle()} />
      <div className="page-transition-container" aria-hidden="true">
        {[...Array(nbOfColumns)].map((_, i) => (
          <div key={i} className="page-transition-column" style={getColumnStyle(i)} />
        ))}
      </div>
      <div className="page-transition-content">{children}</div>
    </div>
  );
};
