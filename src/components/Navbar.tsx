import React, { useState, useEffect } from 'react';
import { SirinLogo } from './SirinLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useSirin } from '../context/SirinContext';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onBookClick: (packageName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const { t } = useSirin();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav_services'), href: '#services' },
    { label: t('nav_portfolio'), href: '#portfolio' },
    { label: t('nav_pricing'), href: '#pricing' },
    { label: t('nav_drone_shows'), href: '#drone-shows' },
    { label: t('nav_about'), href: '#about' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            id="nav-logo-link"
            className="flex items-center gap-2 focus:outline-none"
            aria-label="SIRIN VISUALS Home"
          >
            <SirinLogo size="sm" variant="purple" showTagline={false} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-[#473B5E]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-purple-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Area (Language Switcher + Book CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher variant="navbar" />

            <button
              type="button"
              id="nav-book-btn"
              onClick={() => onBookClick()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-purple-900 hover:bg-purple-800 rounded-full transition-all duration-200 shadow-xs cursor-pointer"
            >
              <span>{t('nav_book_project')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Bar (Language Switcher + Hamburger 3 Lines) */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher variant="navbar" />

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#24083E] hover:text-purple-700 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu (Opened by 3 lines) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-gray-100 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg space-y-3 animate-in fade-in duration-150">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-[#30164E] hover:text-purple-700 py-1.5 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              id="mobile-menu-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-purple-900 hover:bg-purple-800 rounded-xl cursor-pointer shadow-xs"
            >
              {t('nav_book_project')}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
