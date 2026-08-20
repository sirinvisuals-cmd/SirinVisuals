import React, { useState } from 'react';
import { useSirin } from '../context/SirinContext';
import { PortfolioItem } from '../types';
import { PortfolioModal } from './PortfolioModal';
import { resolveImageUrl } from '../data/assets';
import { Sparkles, Eye, ArrowUpRight, SlidersHorizontal } from 'lucide-react';

interface PortfolioProps {
  onBookProject: (projectName?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onBookProject }) => {
  const { stories, visualStoriesHeading, visualStoriesSubheading, language, t } = useSirin();
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'ALL', label: language === 'hi' ? t('portfolio_filter_all') : 'ALL' },
    { id: 'DRONE', label: language === 'hi' ? t('portfolio_filter_drone') : 'DRONE' },
    { id: 'PHOTOGRAPHY', label: language === 'hi' ? t('portfolio_filter_photo') : 'PHOTOGRAPHY' },
    { id: 'VIDEOGRAPHY', label: language === 'hi' ? t('portfolio_filter_video') : 'VIDEOGRAPHY' },
    { id: 'CINEMATIC', label: language === 'hi' ? t('portfolio_filter_cinematic') : 'CINEMATIC' },
    { id: 'PRODUCT', label: language === 'hi' ? t('portfolio_filter_product') : 'PRODUCT' },
    { id: 'EVENTS', label: language === 'hi' ? t('portfolio_filter_events') : 'EVENTS' },
    { id: 'SOCIAL MEDIA', label: language === 'hi' ? t('portfolio_filter_social') : 'SOCIAL MEDIA' },
  ];

  const filteredItems =
    activeCategory === 'ALL'
      ? stories
      : stories.filter((item) => item.category === activeCategory);

  const displayHeading = language === 'hi' && visualStoriesHeading === 'OUR VISUAL STORIES'
    ? t('portfolio_heading')
    : visualStoriesHeading;

  const displaySubheading = language === 'hi' && visualStoriesSubheading.includes('A showcase of')
    ? t('portfolio_subheading')
    : visualStoriesSubheading;

  return (
    <section id="portfolio" className="py-20 bg-white border-t border-purple-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-bold font-tech uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>{t('portfolio_badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#190730] tracking-tight font-display">
            {displayHeading}
          </h2>

          <p className="text-xs sm:text-sm text-[#5C4F75] max-w-2xl mx-auto leading-relaxed">
            {displaySubheading}
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              id={`portfolio-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-tech tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-purple-900 text-white shadow-xs'
                  : 'bg-purple-50/70 text-[#493963] hover:bg-purple-100 hover:text-purple-950 border border-purple-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Responsive Masonry/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`portfolio-card-${item.id}`}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#160B28] cursor-pointer border border-purple-200/80 shadow-xs hover:shadow-xl hover:shadow-purple-500/15 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-end min-h-[300px] sm:min-h-[340px]"
            >
              {/* Media Thumbnail */}
              <img
                src={resolveImageUrl(item.image)}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = resolveImageUrl(null);
                }}
              />

              {/* Dark/Purple Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#150626] via-[#150626]/40 to-transparent group-hover:from-[#110420] transition-colors" />

              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-tech uppercase tracking-wider bg-white/90 backdrop-blur-xs text-purple-950 shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Before/After Tag if applicable */}
              {item.beforeAfter && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-tech uppercase tracking-wider bg-purple-950/80 text-purple-200 border border-purple-400/30 backdrop-blur-xs flex items-center gap-1">
                    <SlidersHorizontal className="w-3 h-3 text-purple-300" />
                    <span>Grading Demo</span>
                  </span>
                </div>
              )}

              {/* Card Bottom Meta */}
              <div className="relative z-10 p-6 space-y-2 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-medium text-purple-300/90 tracking-wide font-tech">
                    {item.client || 'Featured Project'} • {item.location || 'Studio'}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-purple-950 transition-colors">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display tracking-tight text-white group-hover:text-purple-200 transition-colors line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-xs text-purple-100/70 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/10 text-purple-200/90 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Showcase Lightbox Modal */}
      {activeItem && (
        <PortfolioModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
          onEnquireSimilar={(title) => {
            setActiveItem(null);
            onBookProject(`Inquiry for Project: ${title}`);
          }}
        />
      )}
    </section>
  );
};
