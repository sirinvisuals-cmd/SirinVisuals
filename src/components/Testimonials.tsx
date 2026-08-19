import React from 'react';
import { testimonialsData } from '../data/sirinData';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#FAFAFC] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 font-tech">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#190830] font-display">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#4E4163] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-50">
                <div className="text-xs font-bold text-[#1F0838]">{t.name}</div>
                <div className="text-[11px] text-purple-700">{t.role} • {t.companyOrEvent}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
