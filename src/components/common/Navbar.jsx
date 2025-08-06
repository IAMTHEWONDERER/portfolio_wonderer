import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNavbarTransition } from '../../utils/useNavbarTransition';

// Utility function for className merging
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Enhanced Navbar Component with React Router integration
export const EnhancedNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { startNavbarTransition } = useNavbarTransition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosingForTransition, setIsClosingForTransition] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  // Language definitions
  const languages = {
    fr: {
      code: 'fr',
      name: 'FR',
      displayName: 'Français',
      nav: {
        home: 'Accueil',
        about: 'A Propos',
        contact: 'Contact',
        portfolio: 'Portfolio'
      }
    },
    en: {
      code: 'en',
      name: 'EN',
      displayName: 'English',
      nav: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        portfolio: 'Portfolio'
      }
    },
  };

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
  };

  const t = languages[currentLanguage];

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.contact, href: '/contact' },
    { label: t.nav.portfolio, href: '/portfolio' }
  ];

  // Listen for navbar transition events
  useEffect(() => {
    const handleNavbarTransitionStart = () => {
      setIsClosingForTransition(true);
      // Start closing animation
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 100);
    };

    const handleNavbarTransitionEnd = () => {
      setIsClosingForTransition(false);
    };

    window.addEventListener('navbarTransitionStart', handleNavbarTransitionStart);
    window.addEventListener('navbarTransitionEnd', handleNavbarTransitionEnd);

    return () => {
      window.removeEventListener('navbarTransitionStart', handleNavbarTransitionStart);
      window.removeEventListener('navbarTransitionEnd', handleNavbarTransitionEnd);
    };
  }, []);

  const handleNavItemClick = (href) => {
    if (href === location.pathname) {
      setIsMobileMenuOpen(false);
      return;
    }

    // Use navbar transition for navigation
    startNavbarTransition(href, () => {
      navigate(href);
    });
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      return;
    }
    
    startNavbarTransition('/', () => {
      navigate('/');
    });
  };

  const handleMobileMenuClose = () => {
    if (!isClosingForTransition) {
      setIsMobileMenuOpen(false);
    }
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen && !isClosingForTransition) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen, isClosingForTransition]);

  return (
    <>
      <nav className="bg-transparent fixed top-0 left-0 w-full z-30">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-26">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={handleHomeClick}
                className="text-2xl font-bold text-[#001b5b]" 
                style={{ fontFamily: 'Poppins, sans-serif', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <img src="/imgs/logotext.png" alt="logo" className='h-24' />
              </button>
            </div>

            {/* Hamburger Menu for All Devices */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "p-3 transition-all duration-300 shadow-sm border border-gray-200 relative z-[10002]",
                  isMobileMenuOpen 
                    ? "text-white bg-[#e61f00] border-[#e61f00]" 
                    : "text-[#e61f00] bg-white border-gray-200"
                )}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={cn(
                      "absolute inset-0 transition-all duration-300",
                      isMobileMenuOpen ? "opacity-0 rotate-45 scale-0" : "opacity-100 rotate-0 scale-100"
                    )}
                    size={24}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 transition-all duration-300",
                      isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-45 scale-0"
                    )}
                    size={24}
                  />
                </div>
              </button>
            </div>
              
            {/* Menu Overlay */}
            <div className={`hamburger-overlay-custom ${isMobileMenuOpen ? 'open' : ''}`}>
              <style>{`
                .hamburger-overlay-custom {
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100vw;
                  height: 100vh;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background: rgba(255, 255, 255, 0.1);
                  backdrop-filter: blur(10px);
                  -webkit-backdrop-filter: blur(10px);
                  z-index: 9999;
                  clip-path: circle(0px at calc(100vw - 60px) 60px);
                  transition: clip-path 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                  pointer-events: none;
                }
                .hamburger-overlay-custom.open {
                  clip-path: circle(150% at calc(100vw - 60px) 60px);
                  pointer-events: auto;
                }
                .mobile-menu-content {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 0.25rem;
                  padding: 1rem 2rem;
                  height: 100vh;
                  width: 100%;
                }
                .menu-items-container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  max-width: 600px;
                }
                .mobile-nav-item {
    font-family: 'Erstoria', sans-serif;
                  color: #000000;
                  text-decoration: none;
                  opacity: 0;
                  transform: translateX(-200px);
                  transition: all 0.3s ease;
                  position: relative;
                  text-transform: uppercase;
                  letter-spacing: 0.02em;
                  text-align: left;
                  width: 100%;
                  padding: 0.4rem 0;
                  margin: 0.05rem 0;
                  display: block;
                  cursor: pointer;
                  background: none;
                  border: none;
                  font-weight: 600;
                }
                .mobile-nav-item:hover {
                  color: #e61f00;
                }
                .mobile-nav-item.current {
                  color: #e61f00;
                }
                
                /* Mobile styles */
                @media (max-width: 768px) {
                  .mobile-nav-item {
                    font-size: 1.75rem;
                    font-weight: normal;
                    padding: 0.4rem 0;
                    margin: 0.05rem 0;
                  }
                  .hamburger-overlay-custom {
                    clip-path: circle(0px at calc(100vw - 40px) 40px);
                  }
                  .hamburger-overlay-custom.open {
                    clip-path: circle(150% at calc(100vw - 40px) 40px);
                  }
                }
                
                /* Desktop styles */
                @media (min-width: 769px) {
                  .mobile-nav-item {
                    font-size: 6rem;
                    font-weight: normal;
                    padding: 0.2rem 0;
                    margin: 0.05rem 0;
                  }
                  .mobile-menu-content {
                    gap: 0.25rem;
                    padding: 2rem 3rem;
                  }
                }
                
                .hamburger-overlay-custom.open .mobile-nav-item {
                  opacity: 1;
                  transform: translateX(0);
                }
                
                .language-selector-custom {
                  margin-top: 0.5rem;
                  padding-top: 0.75rem;
                  border-top: 1px solid rgba(0, 0, 0, 0.2);
                  width: 100%;
                  max-width: 600px;
                }
                
                /* Desktop language selector adjustments */
                @media (min-width: 769px) {
                  .language-selector-custom {
                    margin-top: 0.75rem;
                    padding-top: 1rem;
                    max-width: 600px;
                  }
                  .language-button span:first-child {
                    font-size: 1.3rem !important;
                  }
                }
                
                .language-buttons {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 0.3rem;
                  width: 100%;
                  text-align: center;
                }
                
                .language-button {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 0.2rem;
                  padding: 0.75rem 0.4rem;
                  transition: all 0.3s ease;
                  cursor: pointer;
                  background: rgba(255, 255, 255, 0.1);
                  color: #000000;
                  border: 2px solid transparent;
                  font-family: 'Roboto', sans-serif;
                  min-height: 50px;
                  text-align: center;
                  font-weight: 900;
                }
                
                .language-button:hover {
                  background: rgba(255, 255, 255, 0.2);
                  color: #e61f00;
                }
                
                .language-button.active {
                  background: rgba(255, 255, 255, 0.9);
                  color: #e61f00;
                  border-color: #e61f00;
                }
                
                .language-button span:first-child {
                  font-size: 1.1rem;
                  font-weight: 600;
                }
              `}</style>
              
              <div className="mobile-menu-content">
                {/* Menu Items Container */}
                <div className="menu-items-container font-black">
                  {navItems.map((item, index) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavItemClick(item.href)}
                      className={`mobile-nav-item ${location.pathname === item.href ? 'current' : ''}`}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                
                {/* Language Selector */}
                <div className="language-selector-custom">
                  <div className="language-buttons">
                    {Object.values(languages).map((lang) => (
                      <div
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`language-button ${currentLanguage === lang.code ? 'active' : ''}`}
                      >
                        <span>{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};