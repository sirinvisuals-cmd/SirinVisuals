import React from 'react';
import { useSirin } from '../context/SirinContext';

export const TrustBar: React.FC = () => {
  const { trustStats, language, t } = useSirin();

  const getTranslatedLabel = (id: string, defaultLabel: string) => {
    if (language === 'hi') {
      switch (id) {
        case 'stat-1':
          return t('stat_services_label');
        case 'stat-2':
          return t('stat_packages_label');
        case 'stat-3':
          return t('stat_coverage_label');
        case 'stat-4':
          return t('stat_team_label');
      }
    }
    return defaultLabel;
  };

  const getTranslatedValue = (id: string, defaultValue: string) => {
    if (language === 'hi' && id === 'stat-3') {
      return 'ग्लोबल';
    }
    return defaultValue;
  };

  return (
    <section className="py-10 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {trustStats.map((stat, idx) => (
            <div key={stat.id} className={`${idx !== 0 ? 'lg:border-l lg:border-gray-100' : ''}`}>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-purple-950">
                {getTranslatedValue(stat.id, stat.value)}
              </div>
              <div className="text-xs font-semibold text-[#66577D] mt-0.5">
                {getTranslatedLabel(stat.id, stat.label)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
