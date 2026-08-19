import React, { useState } from 'react';
import { SirinLogo } from './SirinLogo';
import { useSirin } from '../context/SirinContext';
import { Instagram, Youtube, Facebook, ArrowUp, X } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const { companyConfig, setIsAdminOpen } = useSirin();
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#110522] text-white py-12 border-t border-purple-950 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-900/40">
          {/* Logo with double-click admin opener */}
          <div
            onDoubleClick={() => setIsAdminOpen(true)}
            className="cursor-pointer transition-opacity hover:opacity-95"
            title="Double-click to open Live Admin Editor"
          >
            <SirinLogo size="md" variant="white" showTagline={true} />
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-purple-200 uppercase tracking-wider">
            {navLinks.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavClick(item.id)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={companyConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-purple-950 hover:bg-purple-900 text-purple-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={companyConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-purple-950 hover:bg-purple-900 text-purple-300 hover:text-white transition-colors cursor-pointer"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href={companyConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-purple-950 hover:bg-purple-900 text-purple-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar with Double-Tap on SIRIN to open Admin Panel */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-400">
          <div
            id="footer-copyright-admin-trigger"
            onDoubleClick={() => setIsAdminOpen(true)}
            className="cursor-pointer hover:text-purple-200 transition-colors"
            title="Double-click to open Admin Panel"
          >
            © 2026 <span className="font-bold text-white underline decoration-purple-500 underline-offset-2">{companyConfig.name}</span>. {companyConfig.tagline}.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

      {legalModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-[#1A0A33] text-white max-w-md w-full rounded-2xl p-6 shadow-2xl border border-purple-500/30 space-y-3 text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="text-purple-300 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-purple-200/80 leading-relaxed">
              SIRIN VISUALS maintains strict client confidentiality. Project inquiries and media assets are used strictly for production execution and licensing agreements.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};
