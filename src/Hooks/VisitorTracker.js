// VisitorTracker.jsx - Updated to use environment variable
import { useEffect } from 'react';

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      // Only track once per session
      if (sessionStorage.getItem('visitor_tracked')) return;

      try {
        // Get basic visitor info
        const visitorData = {
          page: window.location.pathname,
          referrer: document.referrer || 'Direct visit',
          timestamp: new Date().toLocaleString('en-US', {
            timeZone: 'Africa/Casablanca',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            weekday: 'short'
          }),
          userAgent: navigator.userAgent,
          language: navigator.language,
          screenSize: `${screen.width}x${screen.height}`,
          sessionId: Math.random().toString(36).substring(2, 8)
        };

        // Format message for Discord
        const message = `🎯 **New Visitor!**

📄 **Page:** ${visitorData.page}
⏰ **Time:** ${visitorData.timestamp}
🔗 **From:** ${getReferrerDisplay(visitorData.referrer)}
🌍 **Language:** ${visitorData.language}
📱 **Screen:** ${visitorData.screenSize}
🆔 **Session:** ${visitorData.sessionId}

${getDeviceInfo(visitorData.userAgent)}`;

        // Get Discord webhook URL from environment variable
        const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
        
        // Check if webhook URL exists
        if (!DISCORD_WEBHOOK_URL) {
          console.warn('Discord webhook URL not found in environment variables');
          return;
        }

        // Send to Discord
        await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: message,
            username: 'Portfolio Visitor',
            avatar_url: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
          })
        });

        // Mark as tracked
        sessionStorage.setItem('visitor_tracked', 'true');
        console.log('Visitor tracked successfully');

      } catch (error) {
        console.log('Tracking failed (this is normal):', error.message);
        // Fail silently - don't break the site if tracking fails
      }
    };

    // Track visitor after page loads
    const timer = setTimeout(trackVisitor, 2000);
    return () => clearTimeout(timer);
  }, []);

  return null; // Component renders nothing
};

// Helper functions
const getReferrerDisplay = (referrer) => {
  if (!referrer || referrer === 'Direct visit') return '🔗 Direct visit';
  
  try {
    const url = new URL(referrer);
    const domain = url.hostname.replace('www.', '');
    
    // Common sites with emojis
    if (domain.includes('google')) return '🔍 Google Search';
    if (domain.includes('linkedin')) return '💼 LinkedIn';
    if (domain.includes('github')) return '👨‍💻 GitHub';
    if (domain.includes('twitter') || domain.includes('x.com')) return '🐦 Twitter/X';
    if (domain.includes('facebook')) return '📘 Facebook';
    if (domain.includes('instagram')) return '📸 Instagram';
    
    return `🌐 ${domain}`;
  } catch {
    return '🔗 External link';
  }
};

const getDeviceInfo = (userAgent) => {
  const ua = userAgent.toLowerCase();
  
  // Device type
  let device = '🖥️ Desktop';
  if (ua.includes('mobile') || ua.includes('android') || ua.includes('iphone')) {
    device = '📱 Mobile';
  } else if (ua.includes('tablet') || ua.includes('ipad')) {
    device = '📱 Tablet';
  }
  
  // Browser
  let browser = 'Unknown';
  if (ua.includes('chrome') && !ua.includes('edge')) browser = 'Chrome';
  else if (ua.includes('firefox')) browser = 'Firefox';
  else if (ua.includes('safari') && !ua.includes('chrome')) browser = 'Safari';
  else if (ua.includes('edge')) browser = 'Edge';
  
  // OS
  let os = '';
  if (ua.includes('windows')) os = 'Windows';
  else if (ua.includes('mac')) os = 'Mac';
  else if (ua.includes('android')) os = 'Android';
  else if (ua.includes('ios') || ua.includes('iphone') || ua.includes('ipad')) os = 'iOS';
  else if (ua.includes('linux')) os = 'Linux';
  
  return `${device} • ${browser}${os ? ` • ${os}` : ''}`;
};

export default VisitorTracker;