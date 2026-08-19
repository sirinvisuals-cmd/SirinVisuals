import React from 'react';
import { SirinLogo } from './SirinLogo';
import { useSirin } from '../context/SirinContext';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreWorkClick: () => void;
  onWatchReelClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookClick,
  onExploreWorkClick,
  onWatchReelClick,
}) => {
  const { t, language } = useSirin();

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-900 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>{t('hero_badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#190830] tracking-tight font-display leading-[1.1]">
              {t('hero_title_line1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-500">
                {t('hero_title_line2')}
              </span>{' '}
              {t('hero_title_line3')}
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#4E4163] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero_description')}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                type="button"
                id="hero-cta-book"
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-purple-900 hover:bg-purple-800 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{t('hero_cta_book')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-cta-explore"
                onClick={onExploreWorkClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#2A0E4E] hover:text-purple-900 bg-white hover:bg-purple-50 border border-purple-200 rounded-full transition-all duration-200 cursor-pointer"
              >
                <span>{t('hero_cta_explore')}</span>
              </button>
            </div>

            {/* Direct contact hint */}
            <div className="text-xs text-[#716487] pt-2">
              {t('hero_sub_badge')}
            </div>
          </div>

          {/* Right Column: Clean Brand Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-purple-100 bg-white group">
              <img
                src="/src/assets/images/sirin_official_poster_1787144399628.jpg"
                alt="Official SIRIN VISUALS Production"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Minimalist Showreel Play Pill */}
              <button
                type="button"
                id="hero-watch-showreel"
                onClick={onWatchReelClick}
                className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-purple-100 flex items-center justify-between group/btn hover:bg-white transition-all shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-900 text-white flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-[#1C0933]">
                      {t('hero_cta_showreel')}
                    </div>
                    <div className="text-[10px] text-[#695D7D]">
                      2026 Production Highlight (4K)
                    </div>
                  </div>
                </div>
                <div className="text-xs font-semibold text-purple-700 underline group-hover/btn:text-purple-900">
                  {language === 'hi' ? 'चलाएं' : 'Play'}
                </div>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
