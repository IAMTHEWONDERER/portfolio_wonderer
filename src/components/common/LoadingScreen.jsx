import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete, onProgressUpdate }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const animationRef = useRef();

  useEffect(() => {
    // Detect Safari browser
    const detectSafari = () => {
      const userAgent = navigator.userAgent;
      const isSafariBrowser = /Safari/.test(userAgent) && !/Chrome/.test(userAgent) && !/Chromium/.test(userAgent);
      setIsSafari(isSafariBrowser);
    };

    detectSafari();

    // Ensure scrolling is disabled when component mounts
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Smooth progress from 0 to 100
    const duration = 3000; // 3 seconds total loading time
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progressValue = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(progressValue);
      
      // Call progress update callback
      if (onProgressUpdate) {
        onProgressUpdate(progressValue);
      }
      
      if (progressValue >= 100) {
        setIsComplete(true);
        // Start reveal animation after brief pause
        setTimeout(() => setShowReveal(true), 800);
      } else {
        animationRef.current = requestAnimationFrame(updateProgress);
      }
    };
    
    animationRef.current = requestAnimationFrame(updateProgress);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showReveal) {
      // Complete the loading process after reveal animation
      setTimeout(() => {
        onLoadingComplete();
      }, 1200); // Match reveal timing
    }
  }, [showReveal, onLoadingComplete]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Generate Safari-specific height styles
  const getSafariHeightStyles = () => {
    if (isSafari) {
      return {
        height: '100vh',
        minHeight: '100vh',
        maxHeight: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      };
    }
    return {
      height: '110dvh',
      minHeight: '100dvh',
      maxHeight: '110dvh',
      WebkitFillAvailable: '110dvh'
    };
  };

  const getSafariContentStyles = () => {
    if (isSafari) {
      return {
        minHeight: '100vh',
        height: '100vh',
        maxHeight: '100vh'
      };
    }
    return {
        height: '110dvh',
      minHeight: '100dvh',
      maxHeight: '110dvh',
    };
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showReveal ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: showReveal ? 1.2 : 0,
          ease: [0.76, 0, 0.24, 1]
        }}
        className="fixed inset-0 z-[100000] bg-[#f5f5f0] overflow-hidden"
        style={getSafariHeightStyles()}
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #0a0100 1px, transparent 1px),
                linear-gradient(to bottom, #0a0100 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {/* Static Background Elements */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          animate={{ 
            scale: showReveal ? 1.1 : 1,
            opacity: showReveal ? 0 : 1 
          }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute w-96 h-96 bg-gradient-to-br from-[#0a0100]/5 to-[#e61f00]/5 rounded-full blur-3xl top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-80 h-80 bg-gradient-to-br from-[#e61f00]/5 to-[#0a0100]/5 rounded-full blur-3xl bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2" />
        </motion.div>

        {/* Loading Content - Centered */}
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center text-center"
          style={getSafariContentStyles()}
          animate={{ 
            y: showReveal ? -50 : 0,
            opacity: showReveal ? 0 : 1,
            scale: showReveal ? 0.9 : 1
          }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Brand/Logo Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-sm mb-6">
              <div className="w-8 h-px bg-[#0a0100]/30" />
              <span className="font-erstoria">Loading</span>
              <div className="w-8 h-px bg-[#0a0100]/30" />
            </div>
            <h1 className="font-erstoria text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#0a0100] mb-2">
              WONDERER
            </h1>
            <div className="w-16 h-px bg-[#e61f00] mx-auto" />
          </motion.div>

          {/* Circular Progress Indicator - Better Centering */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: showReveal ? 1.1 : 1,
            }}
            transition={{ 
              duration: showReveal ? 1.2 : 0.8, 
              delay: showReveal ? 0 : 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="relative mb-8 w-32 h-32 flex items-center justify-center"
          >
            {/* SVG Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="128"
                height="128"
                viewBox="0 0 128 128"
                className="transform -rotate-90"
                style={{ display: 'block' }}
              >
                {/* Background Circle */}
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  fill="none"
                  stroke="rgba(10, 1, 0, 0.1)"
                  strokeWidth="2"
                />
                {/* Progress Circle */}
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  fill="none"
                  stroke="#e61f00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  style={{
                    transition: 'stroke-dashoffset 0.1s ease-out',
                  }}
                />
              </svg>
            </div>

            {/* Progress Percentage - Perfectly Centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                className="font-erstoria text-2xl md:text-3xl text-[#0a0100] tracking-wide"
                style={{ 
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {Math.floor(progress)}%
              </span>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-3"
          >
            <p className="text-[#0a0100]/70 text-sm md:text-base tracking-wide">
              {Math.floor(progress) < 30 && "Initializing experience..."}
              {Math.floor(progress) >= 30 && Math.floor(progress) < 60 && "Loading creative assets..."}
              {Math.floor(progress) >= 60 && Math.floor(progress) < 90 && "Preparing portfolio..."}
              {Math.floor(progress) >= 90 && Math.floor(progress) < 100 && "Almost ready..."}
              {Math.floor(progress) >= 100 && "Welcome!"}
            </p>
            
            {/* Animated dots - Only show while loading */}
            {!isComplete && (
              <div className="flex justify-center space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 bg-[#e61f00] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Completion pulse - Only show when complete */}
            {isComplete && !showReveal && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex justify-center"
              >
                <div className="w-2 h-2 border-2 border-[#e61f00] rounded-full animate-pulse" />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Elegant Reveal Overlay - Fade with scale */}
        {showReveal && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-gradient-to-br from-[#f5f5f0] via-[#f5f5f0] to-[#e9e9e4] z-20"
          />
        )}

        {/* Subtle particle effect during reveal */}
        {showReveal && (
          <div className="absolute inset-0 z-30 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight
                }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  y: '-100vh'
                }}
                transition={{ 
                  duration: 1.5,
                  delay: i * 0.05,
                  ease: "easeOut"
                }}
                className="absolute w-1 h-1 bg-[#e61f00]/30 rounded-full"
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
