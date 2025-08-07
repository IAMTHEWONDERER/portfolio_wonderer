import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f5f5f0] py-8 overflow-hidden border-t border-[#0a0100]/10">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left: Brand & Copyright */}
          <div className="flex items-center gap-4">
            <h3 className="font-erstoria text-lg text-[#0a0100] tracking-wide">
              WONDERER
            </h3>
            <div className="w-8 h-px bg-[#e61f00]" />
            <p className="text-[#0a0100]/50 text-xs font-erstoria tracking-widest">
              © {currentYear} ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex gap-6 text-sm">
            <Link 
              to="/" 
              className="text-[#0a0100]/60 hover:text-[#e61f00] transition-colors duration-300 font-erstoria tracking-wide"
            >
              HOME
            </Link>
            <Link 
              to="/portfolio" 
              className="text-[#0a0100]/60 hover:text-[#e61f00] transition-colors duration-300 font-erstoria tracking-wide"
            >
              PORTFOLIO
            </Link>
            <Link 
              to="/contact" 
              className="text-[#0a0100]/60 hover:text-[#e61f00] transition-colors duration-300 font-erstoria tracking-wide"
            >
              CONTACT
            </Link>
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/IAMTHEWONDERER" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 bg-[#0a0100]/5 hover:bg-[#e61f00] transition-all duration-300 border border-[#0a0100]/10 hover:border-[#e61f00]"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-[#0a0100]/60 group-hover:text-white transition-colors duration-300" />
            </a>
            <a 
              href="https://linkedin.com/in/oussama-alouche"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 bg-[#0a0100]/5 hover:bg-[#e61f00] transition-all duration-300 border border-[#0a0100]/10 hover:border-[#e61f00]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-[#0a0100]/60 group-hover:text-white transition-colors duration-300" />
            </a>
            <a 
              href="mailto:theoblivionitself@gmail.com"
              className="group p-2 bg-[#0a0100]/5 hover:bg-[#e61f00] transition-all duration-300 border border-[#0a0100]/10 hover:border-[#e61f00]"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-[#0a0100]/60 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;