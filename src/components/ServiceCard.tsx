import React from 'react';
import { ServiceItem } from '../types';
import {
  Compass,
  Camera,
  Video,
  Film,
  Sparkles,
  Clapperboard,
  Package,
  Share2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (serviceName: string) => void;
  onExploreService?: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onExploreService,
}) => {
  const getIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-purple-700' };
    switch (name) {
      case 'Drone':
        return <Compass {...props} />;
      case 'Camera':
        return <Camera {...props} />;
      case 'Video':
        return <Video {...props} />;
      case 'Film':
        return <Film {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Clapperboard':
        return <Clapperboard {...props} />;
      case 'Package':
        return <Package {...props} />;
      case 'Share2':
      default:
        return <Share2 {...props} />;
    }
  };

  return (
    <div
      id={`service-card-${service.id}`}
      className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-purple-100/90 hover:border-purple-300 shadow-xs hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Tagline & Badge */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-gradient-to-tr group-hover:from-purple-700 group-hover:to-violet-600 flex items-center justify-center transition-all duration-300 group-hover:text-white">
            <span className="group-hover:text-white transition-colors [&>svg]:group-hover:text-white">
              {getIcon(service.icon)}
            </span>
          </div>

          {service.badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-tech uppercase tracking-wider bg-purple-100 text-purple-900 border border-purple-200">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-[#23083D] group-hover:text-purple-900 transition-colors font-display tracking-tight">
          {service.title}
        </h3>

        {/* Sub-tagline breakdown */}
        <div className="text-xs font-semibold text-purple-700 mt-1 font-tech">
          {service.tagline}
        </div>

        {/* Description */}
        <p className="text-sm text-[#4D4063] leading-relaxed mt-3">
          {service.description}
        </p>

        {/* Highlights List */}
        <div className="mt-4 pt-4 border-t border-purple-50 space-y-2">
          {service.highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#3E3254]">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-purple-100/70 flex items-center justify-between gap-3">
        <button
          type="button"
          id={`service-explore-btn-${service.id}`}
          onClick={() => {
            if (onExploreService) {
              onExploreService(service);
            } else {
              onSelectService(service.title);
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-900 hover:text-purple-950 group-hover:underline"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>

        <button
          type="button"
          id={`service-book-btn-${service.id}`}
          onClick={() => onSelectService(service.title)}
          className="px-3 py-1.5 text-[11px] font-bold text-purple-900 hover:text-white bg-purple-50 hover:bg-purple-800 rounded-md transition-colors"
        >
          Enquire
        </button>
      </div>
    </div>
  );
};
