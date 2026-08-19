import React, { useState } from 'react';
import { useSirin } from '../context/SirinContext';
import { ServiceItem } from '../types';
import {
  Plane,
  Camera,
  Video,
  Scissors,
  Layers,
  Film,
  ShoppingBag,
  Share2,
  ArrowRight,
  X,
  CheckCircle2,
} from 'lucide-react';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  const { services, t, language } = useSirin();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'drone-services':
        return <Plane className="w-5 h-5" />;
      case 'photography':
        return <Camera className="w-5 h-5" />;
      case 'videography':
        return <Video className="w-5 h-5" />;
      case 'editing':
      case 'video-editing':
        return <Scissors className="w-5 h-5" />;
      case 'photo-booth':
        return <Layers className="w-5 h-5" />;
      case 'cinematic-films':
        return <Film className="w-5 h-5" />;
      case 'product-shoot':
        return <ShoppingBag className="w-5 h-5" />;
      case 'content-creation':
      default:
        return <Share2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 font-tech">
            {t('services_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#190830] font-display">
            {t('services_heading')}
          </h2>
          <p className="text-sm sm:text-base text-[#56496E]">
            {t('services_subheading')}
          </p>
        </div>

        {/* 8 Clean Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-900 flex items-center justify-center mb-4 group-hover:bg-purple-900 group-hover:text-white transition-colors">
                  {getIcon(service.id)}
                </div>

                <h3 className="text-base font-bold text-[#1F0838] font-display">
                  {service.title}
                </h3>

                <p className="text-xs text-[#5C4E73] leading-relaxed mt-2">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-50 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-purple-700 hover:text-purple-950 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{language === 'hi' ? 'विवरण' : 'Details'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  onClick={() => onBookService(service.title)}
                  className="text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-purple-900 cursor-pointer"
                >
                  {language === 'hi' ? 'बुक करें' : 'Book'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          id="service-detail-modal"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-purple-100 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-900 text-white flex items-center justify-center shadow-xs">
                  {getIcon(selectedService.id)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F0838] font-display">
                    {selectedService.title}
                  </h3>
                  <div className="text-xs text-purple-700 font-semibold font-tech">
                    {selectedService.tagline}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#4E4064] leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-950 font-tech">
                {language === 'hi' ? 'शामिल विशेषताएं और डिलीवरेबल्स' : 'Included Capabilities & Deliverables'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#55476E]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
              <div className="text-xs text-gray-500 font-tech">
                {selectedService.deliverables}
              </div>
              <button
                type="button"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onBookService(title);
                }}
                className="px-5 py-2.5 bg-purple-900 hover:bg-purple-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
              >
                {t('services_book_service')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
