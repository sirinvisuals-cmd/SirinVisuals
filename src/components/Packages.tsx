import React, { useState } from 'react';
import { useSirin } from '../context/SirinContext';
import { droneShowAddOns } from '../data/sirinData';
import { Sparkles, Check, Film, Plane } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (pkgName: string) => void;
  onRequestCustomQuote: () => void;
}

export const Packages: React.FC<PackagesProps> = ({
  onSelectPackage,
  onRequestCustomQuote,
}) => {
  const { packages, droneShows, language, t } = useSirin();
  const [activeTab, setActiveTab] = useState<'production' | 'drone-shows'>('production');

  return (
    <section id="pricing" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 font-tech">
            {t('pricing_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#190830] font-display">
            {t('pricing_heading')}
          </h2>
          <p className="text-sm sm:text-base text-[#56496E]">
            {t('pricing_subheading')}
          </p>

          {/* Segmented Tab Switcher */}
          <div className="pt-3 inline-flex p-1 rounded-xl bg-gray-100/80 border border-gray-200">
            <button
              type="button"
              id="pricing-tab-production"
              onClick={() => setActiveTab('production')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'production'
                  ? 'bg-white text-purple-900 shadow-xs'
                  : 'text-gray-600 hover:text-purple-900'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>
                {language === 'hi' ? 'प्रोडक्शन पैकेज' : 'Production Packages'} ({packages.length})
              </span>
            </button>

            <button
              type="button"
              id="pricing-tab-drones"
              onClick={() => setActiveTab('drone-shows')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'drone-shows'
                  ? 'bg-purple-900 text-white shadow-xs'
                  : 'text-gray-600 hover:text-purple-900'
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>
                {language === 'hi' ? 'सिरिन स्काई ड्रोन शो' : 'SIRIN SKY Drone Shows'}
              </span>
            </button>
          </div>
        </div>

        {/* Tab 1: Standard Production Packages */}
        {activeTab === 'production' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {packages.map((pkg) => {
                const isPopular = pkg.isPopular;
                return (
                  <div
                    key={pkg.id}
                    id={`package-card-${pkg.id}`}
                    className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 ${
                      isPopular
                        ? 'bg-purple-900 text-white shadow-xl ring-2 ring-purple-600 scale-[1.02]'
                        : 'bg-[#FAFAFC] border border-gray-100 hover:border-purple-200 hover:shadow-md text-[#190830]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-[10px] font-bold font-tech uppercase tracking-wider px-2 py-0.5 rounded ${
                            isPopular
                              ? 'bg-purple-700 text-white'
                              : 'bg-purple-50 text-purple-800'
                          }`}
                        >
                          {isPopular
                            ? t('pricing_popular_badge')
                            : pkg.badge || (language === 'hi' ? 'टियर' : 'Tier')}
                        </span>
                      </div>

                      <h3
                        className={`text-xl font-extrabold font-display ${
                          isPopular ? 'text-white' : 'text-[#1F0838]'
                        }`}
                      >
                        {pkg.name}
                      </h3>

                      <p
                        className={`text-xs mt-1 mb-4 ${
                          isPopular ? 'text-purple-200' : 'text-[#64557D]'
                        }`}
                      >
                        {pkg.subtitle}
                      </p>

                      {/* Price */}
                      <div className="pb-4 mb-4 border-b border-purple-500/20">
                        <span
                          className={`text-2xl font-black font-display tracking-tight ${
                            isPopular ? 'text-white' : 'text-purple-950'
                          }`}
                        >
                          {pkg.formattedPrice}
                        </span>
                      </div>

                      {/* Checklist */}
                      <div className="space-y-2 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs">
                            <Check
                              className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                                isPopular ? 'text-purple-300' : 'text-purple-600'
                              }`}
                            />
                            <span
                              className={isPopular ? 'text-purple-100' : 'text-[#3E3054]'}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      id={`btn-select-pkg-${pkg.id}`}
                      onClick={() => onSelectPackage(`PACKAGE: ${pkg.name}`)}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        isPopular
                          ? 'bg-white text-purple-900 hover:bg-purple-50 shadow-sm'
                          : 'bg-white hover:bg-purple-900 hover:text-white text-purple-900 border border-purple-200'
                      }`}
                    >
                      {language === 'hi' ? `चुनें: ${pkg.name}` : `Choose ${pkg.name}`}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-[#1F0838] font-display">
                  {language === 'hi'
                    ? 'क्या आपको कस्टम मल्टी-डे या विशेष पैकेज चाहिए?'
                    : 'Need a tailored multi-day or custom multi-camera package?'}
                </h4>
                <p className="text-xs text-[#5D4E75]">
                  {language === 'hi'
                    ? 'हम कमर्शियल शूट, डेस्टिनेशन वेडिंग्स और कॉर्पोरेट इवेंट्स के लिए अनुकूलित पैकेज तैयार करते हैं।'
                    : 'We create bespoke production plans for commercials, destination weddings, and corporate summits.'}
                </p>
              </div>
              <button
                type="button"
                id="pricing-custom-quote-btn"
                onClick={onRequestCustomQuote}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-purple-900 hover:bg-purple-800 transition-colors flex-shrink-0 cursor-pointer"
              >
                {t('pricing_custom_quote')}
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: SIRIN SKY Drone Shows */}
        {activeTab === 'drone-shows' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl bg-[#140826] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs text-purple-300 font-tech font-bold uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('drone_badge')}</span>
                </div>
                <h3 className="text-xl font-bold font-display mt-1">
                  {t('drone_heading')}
                </h3>
                <p className="text-xs text-purple-200/80 max-w-xl mt-1">
                  {t('drone_subheading')}
                </p>
              </div>

              <button
                type="button"
                onClick={onRequestCustomQuote}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 flex-shrink-0 cursor-pointer"
              >
                {t('drone_request_quote')}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {droneShows.map((tier) => (
                <div
                  key={tier.id}
                  id={`droneshow-tier-${tier.id}`}
                  className="rounded-2xl p-6 bg-[#FAFAFC] border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold font-tech text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                        {tier.drones}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">{tier.duration}</span>
                    </div>

                    <h4 className="text-lg font-bold text-[#1F0838] font-display">
                      {tier.name}
                    </h4>

                    <div className="text-sm font-extrabold text-purple-950 font-display mt-1 mb-4">
                      {tier.formattedPrice}
                    </div>

                    <div className="space-y-1.5 mb-6">
                      {tier.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#3E3054]">
                          <Check className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPackage(`SIRIN SKY: ${tier.name}`)}
                    className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-purple-900 bg-white hover:bg-purple-900 hover:text-white border border-purple-200 transition-all cursor-pointer"
                  >
                    {language === 'hi' ? `पूछताछ करें: ${tier.name}` : `Enquire ${tier.name}`}
                  </button>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-900 font-tech mb-3">
                {language === 'hi' ? 'ड्रोन शो ऐड-ऑन और अतिरिक्त सुविधाएं' : 'Drone Show Add-ons'}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {droneShowAddOns.map((addon) => (
                  <div
                    key={addon.id}
                    className="p-3 rounded-xl bg-purple-50/50 border border-purple-100/60 text-center"
                  >
                    <div className="text-xs font-bold text-[#1F0838]">{addon.title}</div>
                    <div className="text-[10px] text-[#695982] mt-0.5">{addon.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
