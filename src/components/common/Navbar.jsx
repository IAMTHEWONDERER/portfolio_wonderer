import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNavbarTransition } from '../../utils/useNavbarTransition';

// Utility function for className merging
const cn = (...classes) => classes.filter(Boolean).join(' ');

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

/**
 * The site navbar. Rendered exactly once, by AppRouter — PortfolioPage and
 * ProjectDetailPage used to mount a second copy on top of this one.
 *
 * The overlay CSS lives in src/index.css rather than an inline <style>.
 */
export const EnhancedNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { startNavbarTransition } = useNavbarTransition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosingForTransition, setIsClosingForTransition] = useState(false);

  // Listen for navbar transition events
  useEffect(() => {
    const handleNavbarTransitionStart = () => {
      setIsClosingForTransition(true);
      setTimeout(() => setIsMobileMenuOpen(false), 100);
    };

    const handleNavbarTransitionEnd = () => setIsClosingForTransition(false);

    window.addEventListener('navbarTransitionStart', handleNavbarTransitionStart);
    window.addEventListener('navbarTransitionEnd', handleNavbarTransitionEnd);

    return () => {
      window.removeEventListener('navbarTransitionStart', handleNavbarTransitionStart);
      window.removeEventListener('navbarTransitionEnd', handleNavbarTransitionEnd);
    };
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen && !isClosingForTransition) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, isClosingForTransition]);

  const handleNavItemClick = (href) => {
    if (href === location.pathname) {
      setIsMobileMenuOpen(false);
      return;
    }

    startNavbarTransition(href, () => navigate(href));
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') return;
    startNavbarTransition('/', () => navigate('/'));
  };

  /**
   * Open/close the menu. Opening dispatches `hamburgerMenuOpen`, which the
   * CV/PDF surfaces listen for so an open modal closes behind the menu.
   * Three components had been listening for this event since it was
   * written; nothing had ever dispatched it.
   */
  const toggleMenu = () => {
    setIsMobileMenuOpen((open) => {
      const next = !open;
      if (next) window.dispatchEvent(new CustomEvent('hamburgerMenuOpen'));
      return next;
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex justify-between items-center h-26">
          {/* Logo */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={handleHomeClick}
              className="focus-ring font-erstoria text-2xl font-bold text-[#0a0100] bg-transparent border-none cursor-pointer"
            >
              WONDERER
            </button>
          </div>

          {/* Hamburger */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className={cn(
                'focus-ring p-3 transition-all duration-300 shadow-sm border relative z-[2] cursor-pointer active:scale-95',
                isMobileMenuOpen
                  ? 'text-[#f5f5f0] bg-[#e61f00] border-[#e61f00]'
                  : 'text-[#0a0100] bg-[#f5f5f0] border-[#0a0100]/10',
              )}
            >
              <div className="relative w-6 h-6" aria-hidden="true">
                <Menu
                  className={cn(
                    'absolute inset-0 transition-all duration-300',
                    isMobileMenuOpen
                      ? 'opacity-0 rotate-45 scale-0'
                      : 'opacity-100 rotate-0 scale-100',
                  )}
                  size={24}
                />
                <X
                  className={cn(
                    'absolute inset-0 transition-all duration-300',
                    isMobileMenuOpen
                      ? 'opacity-100 rotate-0 scale-100'
                      : 'opacity-0 -rotate-45 scale-0',
                  )}
                  size={24}
                />
              </div>
            </button>
          </div>

          {/* Menu Overlay */}
          <div
            id="site-menu"
            className={`hamburger-overlay-custom ${isMobileMenuOpen ? 'open' : ''}`}
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="mobile-menu-content">
              <div className="menu-items-container font-black">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                    onClick={() => handleNavItemClick(item.href)}
                    aria-current={location.pathname === item.href ? 'page' : undefined}
                    className={`mobile-nav-item ${
                      location.pathname === item.href ? 'current' : ''
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
