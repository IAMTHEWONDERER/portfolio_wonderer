import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/common/LoadingScreen';
import AppRouter from './routes';

const AppWithLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Detect Safari browser
    const detectSafari = () => {
      const userAgent = navigator.userAgent;
      const isSafariBrowser = /Safari/.test(userAgent) && !/Chrome/.test(userAgent) && !/Chromium/.test(userAgent);
      setIsSafari(isSafariBrowser);
    };

    detectSafari();

    // Check if this is the first visit in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    
    if (!hasSeenLoading) {
      // First time visitor - show loading screen
      setIsLoading(true);
      
      // Prevent scrolling during loading
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      // Mark as seen in session storage
      sessionStorage.setItem('hasSeenLoading', 'true');
      
      // Preload critical resources
      const prepareContent = async () => {
        try {
          // List of critical images to preload
          const criticalImages = [
            '/imgs/screenshots/ejswco.png',
            '/imgs/screenshots/workwhile.png',
            '/imgs/screenshots/asanada.png',
            '/imgs/screenshots/wonderer.png',
            '/imgs/screenshots/rma.png',
          ];

          // Preload images
          const imagePromises = criticalImages.map(src => {
            return new Promise((resolve) => {
              const img = new Image();
              img.onload = () => resolve(src);
              img.onerror = () => resolve(src); // Continue even if image fails
              img.src = src;
            });
          });

          // Wait for images to load (or fail gracefully)
          await Promise.all(imagePromises);
          
          // Preload fonts if needed
          if (document.fonts) {
            await document.fonts.ready;
          }
          
          // Mark content as ready
          setIsContentReady(true);
          
        } catch (error) {
          console.log('Resource loading completed:', error);
          setIsContentReady(true); // Continue anyway
        }
      };

      prepareContent();
    } else {
      // Returning visitor (refresh) - skip loading screen
      setIsContentReady(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    // Re-enable scrolling
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    // Remove loading screen - page will be revealed
    setIsLoading(false);
  };

  // Handle showing content at 80% progress
  const handleProgressUpdate = (progress) => {
    if (progress >= 80 && !showContent) {
      setShowContent(true);
    }
  };

  // Generate Safari-specific height styles
  const getSafariHeightStyles = () => {
    if (isSafari) {
      return {
        minHeight: '100vh',
        maxHeight: '100vh',
        height: '100vh'
      };
    }
    return {
      minHeight: '100vh',
      maxHeight: '100dvh'
    };
  };

  const getSafariLoadingStyles = () => {
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
      height: '100vh',
      minHeight: '100vh',
      maxHeight: '100dvh',
      WebkitFillAvailable: '100vh'
    };
  };

  return (
    <div className="relative" style={getSafariHeightStyles()}>
      {/* Main content - show when loading is complete OR when progress hits 80% */}
      {(!isLoading || showContent) && (
        <div style={getSafariHeightStyles()}>
          <AppRouter />
        </div>
      )}
      
      {/* Loading screen only shows for first-time visitors when content is ready */}
      {isLoading && isContentReady && (
        <LoadingScreen 
          onLoadingComplete={handleLoadingComplete} 
          onProgressUpdate={handleProgressUpdate}
        />
      )}
      
      {/* Simple loading state while preparing first-time visit */}
      {isLoading && !isContentReady && (
        <div 
          className="fixed inset-0 z-[100002] bg-[#f5f5f0] flex items-center justify-center" 
          style={getSafariLoadingStyles()}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 border-2 border-[#e61f00] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="font-erstoria text-[#0a0100]/70 text-sm tracking-wide">Preparing...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppWithLoading;
