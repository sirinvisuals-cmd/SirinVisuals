import React from 'react';
import { PricingPackage } from '../types';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PricingCardProps {
  pkg: PricingPackage;
  onSelectPackage: (packageName: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  pkg,
  onSelectPackage,
}) => {
  const isPopular = pkg.isPopular;

  return (
    <div
      id={`pricing-card-${pkg.id}`}
      className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
        isPopular
          ? 'bg-gradient-to-b from-[#2E0854] to-[#1C0533] text-white shadow-xl shadow-purple-900/25 border-2 border-purple-400/50 scale-[1.02] z-10'
          : 'bg-white text-[#1E0F36] border border-purple-100 hover:border-purple-300 shadow-xs hover:shadow-lg'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-400 to-purple-500 text-white text-[10px] font-extrabold font-tech uppercase tracking-widest shadow-md flex items-center gap-1">
          <Sparkles className="w-3 h-3 fill-white" />
          <span>MOST POPULAR</span>
        </div>
      )}

      {/* Header */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3
            className={`text-xl font-extrabold font-display tracking-tight ${
              isPopular ? 'text-white' : 'text-[#24083E]'
            }`}
          >
            {pkg.name}
          </h3>
          <span
            className={`text-[10px] font-tech font-bold uppercase px-2 py-0.5 rounded ${
              isPopular
                ? 'bg-purple-800/80 text-purple-200 border border-purple-500/30'
                : 'bg-purple-50 text-purple-800'
            }`}
          >
            Starting From
          </span>
        </div>

        {/* Pricing tag */}
        <div className="mt-3 flex items-baseline gap-1">
          <span
            className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isPopular ? 'text-white' : 'text-[#290747]'
            }`}
          >
            {pkg.formattedPrice}
          </span>
          <span
            className={`text-xs font-semibold ${
              isPopular ? 'text-purple-300' : 'text-purple-700'
            }`}
          >
            / base scope
          </span>
        </div>

        {/* Subtitle / Best For */}
        <p
          className={`text-xs mt-2.5 leading-relaxed ${
            isPopular ? 'text-purple-200' : 'text-[#584972]'
          }`}
        >
          {pkg.subtitle}
        </p>

        {/* Features List */}
        <div
          className={`mt-6 pt-5 space-y-3 border-t ${
            isPopular ? 'border-purple-800/80' : 'border-purple-100'
          }`}
        >
          {pkg.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs">
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  isPopular
                    ? 'bg-purple-500/30 text-purple-200'
                    : 'bg-purple-100 text-purple-800'
                }`}
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span
                className={`leading-tight ${
                  isPopular ? 'text-purple-100' : 'text-[#2F2148]'
                }`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 pt-4">
        <button
          type="button"
          id={`pkg-select-btn-${pkg.id}`}
          onClick={() => onSelectPackage(pkg.name)}
          className={`w-full py-3 px-4 rounded-xl text-xs font-bold font-tech uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
            isPopular
              ? 'bg-white text-[#25083E] hover:bg-purple-50 shadow-md active:scale-98'
              : 'bg-gradient-to-r from-[#290747] to-[#6722A8] text-white hover:from-[#1E0533] hover:to-[#55188E] active:scale-98'
          }`}
        >
          <span>GET STARTED</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <p
          className={`text-[10px] text-center mt-2.5 font-medium ${
            isPopular ? 'text-purple-300' : 'text-[#72628C]'
          }`}
        >
          Custom add-ons available upon request
        </p>
      </div>
    </div>
  );
};
