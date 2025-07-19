import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Mail, Home, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const isGalleryPage = location.hash === '#/project/gallery';
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (href: string): void => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateMain = () => {
    navigate("/");
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-neutral-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
<div className="relative group cursor-pointer" onClick={handleNavigateMain}>
  {/* Pulse Dot */}
  <div className="w-3 h-3 bg-neutral-900 rounded-full"></div>
  <div className="absolute -top-1 -left-1 w-5 h-5 border-2 border-neutral-300 rounded-full animate-pulse"></div>

  {/* Tail Tooltip: Show only on /#/project/gallery */}
  {isGalleryPage && (
    <div className="absolute left-6 top-1 animate-fade-in">
      <div className="relative bg-white text-neutral-800 text-xs px-3 py-1 rounded-lg shadow-md">
        Click here to back home page
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white" />
      </div>
    </div>
  )}
</div>
            <div className="ml-4" onClick={handleNavigateMain}>
              <span className="text-xl font-medium text-neutral-900 tracking-tight">
                Yves Rey Badan
              </span>
              <div className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
                Full-Stack Developer
              </div>
            </div>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-neutral-50/80 rounded-full p-1 border border-neutral-200/60">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-6 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-all duration-300 rounded-full hover:bg-white hover:shadow-sm group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/100 rounded-full transition-all duration-300 shadow-none group-hover:shadow-sm"></div>
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => handleNavClick('#contact')}
              className="group relative px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
            >
              <div className="w-6 h-6 relative">
                <span 
                  className={`absolute top-2 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : 'rotate-0 translate-y-0'
                  }`}
                />
                <span 
                  className={`absolute top-3.5 left-0 w-6 h-0.5 bg-current transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
          }`}
        >
          <div className="py-6 space-y-1 bg-white/95 backdrop-blur-xl rounded-2xl border border-neutral-200/60 shadow-xl mt-4">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center w-full px-6 py-4 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50/80 transition-all duration-200 font-medium ${
                  index === 0 ? 'rounded-t-2xl' : ''
                } ${index === navItems.length - 1 ? 'rounded-b-2xl' : ''}`}
              >
                <item.icon className="w-5 h-5 mr-4 opacity-60" />
                <span>{item.name}</span>
              </button>
            ))}
            <div className="px-6 pt-4 border-t border-neutral-200/60">
              <button 
                onClick={() => handleNavClick('#contact')}
                className="group w-full flex items-center justify-center px-6 py-4 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-800 transition-all duration-300"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;