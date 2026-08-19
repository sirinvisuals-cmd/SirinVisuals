import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { X, MapPin, Building, Tag, Sparkles, ArrowRight } from 'lucide-react';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onEnquireSimilar: (title: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onEnquireSimilar,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  if (!item) return null;

  return (
    <div
      id="portfolio-lightbox-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#120824] text-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-purple-900/60 flex items-center justify-between bg-[#1B0B33]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-tech uppercase tracking-wider bg-purple-600/60 border border-purple-400/40 text-purple-200">
              {item.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold font-display tracking-tight text-white line-clamp-1">
              {item.title}
            </h3>
          </div>

          <button
            type="button"
            id="close-portfolio-lightbox"
            onClick={onClose}
            className="p-1.5 text-purple-300 hover:text-white hover:bg-purple-900/50 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Media Container */}
        <div className="relative bg-black flex-1 min-h-[300px] max-h-[500px] flex items-center justify-center overflow-hidden">
          {item.beforeAfter ? (
            /* Interactive Before / After Slider for Post Production / Color Grading */
            <div className="relative w-full h-full min-h-[350px] select-none">
              {/* After Image (Full) */}
              <img
                src={item.beforeAfter.after}
                alt={item.beforeAfter.labelAfter}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={item.beforeAfter.before}
                  alt={item.beforeAfter.labelBefore}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%' }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow-lg">
                  ↔
                </div>
              </div>

              {/* Slider Range Input Controller */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                aria-label="Before and after comparison slider"
              />

              {/* Badges */}
              <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/70 text-[10px] font-tech text-purple-200 border border-purple-500/30">
                {item.beforeAfter.labelBefore}
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded bg-purple-900/80 text-[10px] font-tech text-white border border-purple-400/40">
                {item.beforeAfter.labelAfter}
              </div>
            </div>
          ) : (
            /* Standard Cinematic Image / Video View */
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover max-h-[500px]"
              referrerPolicy="no-referrer"
            />
          )}
        </div>

        {/* Metadata & Actions Footer */}
        <div className="p-4 sm:p-6 bg-[#160A2B] border-t border-purple-900/50 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-purple-200/80">
            <div className="flex flex-wrap items-center gap-4">
              {item.client && (
                <div className="flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-purple-400" />
                  <span>Client: {item.client}</span>
                </div>
              )}
              {item.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>Location: {item.location}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-purple-950/80 border border-purple-700/40 text-[11px] text-purple-300 font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-purple-100/90 leading-relaxed">
            {item.description}
          </p>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-purple-300 hover:text-white"
            >
              Close
            </button>

            <button
              type="button"
              id="portfolio-book-similar-btn"
              onClick={() => {
                onClose();
                onEnquireSimilar(item.title);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 rounded-xl shadow-md transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enquire Similar Production</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
