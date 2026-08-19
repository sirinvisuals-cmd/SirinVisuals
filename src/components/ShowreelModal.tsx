import React from 'react';
import { X, Sparkles, Film, ArrowRight } from 'lucide-react';
import { SirinLogo } from './SirinLogo';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  onBookClick,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="showreel-video-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#140826] text-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border border-purple-500/40 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-purple-900/60 flex items-center justify-between bg-[#1C0B35]">
          <div className="flex items-center gap-3">
            <SirinLogo size="sm" variant="white" showTagline={false} />
            <div className="text-xs font-bold font-tech uppercase tracking-widest text-purple-300">
              OFFICIAL 4K PRODUCTION SHOWREEL
            </div>
          </div>

          <button
            type="button"
            id="close-showreel-modal"
            onClick={onClose}
            className="p-1 text-purple-300 hover:text-white hover:bg-purple-900/50 rounded-full"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src="/src/assets/images/sirin_hero_cinematic_1787143442924.jpg"
            alt="SIRIN VISUALS 4K Showreel"
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />

          {/* Animated Overlay Simulation */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#140826] via-transparent to-transparent" />

          {/* Ambient Video Graphic */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-violet-500 flex items-center justify-center shadow-2xl animate-pulse">
              <Film className="w-7 h-7 text-white" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl sm:text-2xl font-extrabold font-display text-white">
                SIRIN VISUALS SHOWREEL 2026
              </h4>
              <p className="text-xs sm:text-sm text-purple-200 max-w-md">
                Featuring 4K RED Cinematography, FPV Drone Flythroughs, 360 Video Booths, and 500-Drone Synchronized Sky Displays.
              </p>
            </div>
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="p-4 sm:p-5 bg-[#17092E] border-t border-purple-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-purple-300/80 text-center sm:text-left">
            Production credits: SIRIN VISUALS Team • Global Shoots
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-purple-300 hover:text-white"
            >
              Close
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookClick();
              }}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold font-tech uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 rounded-xl shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book This Level of Production</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
