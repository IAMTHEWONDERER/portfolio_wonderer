import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/common/LoadingScreen';
import AppRouter from './routes/routes';

const AppWithLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    
    if (!hasSeenLoading) {
      // First time visitor - show loading screen
      setIsLoading(true);
      
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
    // Remove loading screen - page will be revealed
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Always render the main content */}
      <div className="min-h-screen">
        <AppRouter />
      </div>
      
      {/* Loading screen only shows for first-time visitors when content is ready */}
      {isLoading && isContentReady && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      
      {/* Simple loading state while preparing first-time visit */}
      {isLoading && !isContentReady && (
        <div className="fixed inset-0 z-[100002] bg-[#f5f5f0] flex items-center justify-center">
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
