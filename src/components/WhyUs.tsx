import React from 'react';
import { whyUsAdvantages } from '../data/sirinData';
import { Users, Sparkles, Clock, MapPin } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'why-1':
        return <Users className="w-5 h-5 text-purple-700" />;
      case 'why-2':
        return <Sparkles className="w-5 h-5 text-purple-700" />;
      case 'why-3':
        return <Clock className="w-5 h-5 text-purple-700" />;
      case 'why-4':
      default:
        return <MapPin className="w-5 h-5 text-purple-700" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 font-tech">
            The SIRIN Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#190830] font-display">
            Every Moment Deserves To Be Extraordinary
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsAdvantages.map((adv) => (
            <div
              key={adv.id}
              className="p-6 rounded-2xl bg-[#FAFAFC] border border-gray-100 hover:border-purple-200 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center mb-4">
                {getIcon(adv.id)}
              </div>
              <h3 className="text-base font-bold text-[#1F0838] font-display">
                {adv.title}
              </h3>
              <div className="text-xs font-bold text-purple-700 mt-0.5">
                {adv.subtitle}
              </div>
              <p className="text-xs text-[#5C4E73] leading-relaxed mt-2">
                {adv.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
