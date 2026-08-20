import React, { useState } from 'react';
import { droneShowTiers, droneShowAddOns } from '../data/sirinData';
import { DroneShowTier } from '../types';
import { APP_IMAGES } from '../data/assets';
import {
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Clock,
  Radio,
  Music,
  Video,
  Camera,
  SunMedium,
  Film,
  Boxes,
  Check,
} from 'lucide-react';

interface DroneShowsProps {
  onPlanDroneShow: (tierName?: string) => void;
}

export const DroneShows: React.FC<DroneShowsProps> = ({ onPlanDroneShow }) => {
  const [activeTier, setActiveTier] = useState<DroneShowTier>(droneShowTiers[1]); // Sky Pro default

  const getAddOnIcon = (id: string) => {
    switch (id) {
      case 'add-1':
        return <Music className="w-4 h-4 text-purple-400" />;
      case 'add-2':
        return <Video className="w-4 h-4 text-purple-400" />;
      case 'add-3':
        return <Camera className="w-4 h-4 text-purple-400" />;
      case 'add-4':
        return <SunMedium className="w-4 h-4 text-purple-400" />;
      case 'add-5':
        return <Film className="w-4 h-4 text-purple-400" />;
      case 'add-6':
      default:
        return <Boxes className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section
      id="drone-shows"
      className="py-24 bg-gradient-to-b from-[#130726] via-[#1B0A33] to-[#0F041F] text-white relative overflow-hidden"
    >
      {/* Animated Night Sky Stars & Ambient Violet Constellation Glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-3xl" />
      </div>

      {/* Synchronized Drone Light Grid Dots in Background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#A855F7 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-500/40 text-purple-200 text-xs font-bold font-tech uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
            <span>AERIAL LIGHT SPECTACLE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            SIRIN <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">SKY</span>
          </h2>

          <p className="text-lg sm:text-xl font-bold font-tech tracking-[0.2em] text-purple-300 uppercase">
            LIGHTS. STORIES. IN THE SKY.
          </p>

          <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed max-w-2xl mx-auto font-normal">
            Turn the night sky into your canvas. From 50-drone intimate brand reveals to 5,000+ drone arena constellations with synchronized 3D animated choreography and audio.
          </p>
        </div>

        {/* Featured Visual Spotlight Banner */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-purple-500/30 bg-[#160B28]/90 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Image */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 overflow-hidden">
              <img
                src={APP_IMAGES.skyDroneShow}
                alt="SIRIN SKY Spectacular Synchronized Drone Show Formations"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#160B28]/40 to-[#160B28] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160B28] via-transparent to-transparent lg:hidden" />
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/60 backdrop-blur-xs border border-purple-400/40 text-[10px] font-tech text-purple-200 uppercase tracking-wider">
                DGCA Compliant • 100% Geo-Fenced
              </div>
            </div>

            {/* Quick Drone Highlights Box */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest">
                  PRECISION SWARM TECHNOLOGY
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  Next-Gen Aerial Storytelling
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
                Every drone in our fleet is equipped with ultra-bright RGBW LEDs with sub-centimeter GPS positioning, capable of complex 3D holographic illusions and brand logo morphs.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-purple-200">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-purple-950/60 border border-purple-800/60">
                  <Radio className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Dual Redundancy</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-purple-950/60 border border-purple-800/60">
                  <Clock className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Up to 25+ Mins</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  id="sirin-sky-featured-cta"
                  onClick={() => onPlanDroneShow()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold font-tech uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 rounded-xl shadow-lg transition-all"
                >
                  <span>PLAN YOUR DRONE SHOW →</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Drone Show Packages Grid */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-display text-white">
              FLEET TIERS & PACKAGES
            </h3>
            <span className="text-xs font-tech text-purple-300 uppercase tracking-wider">
              Select tier to enquire
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {droneShowTiers.map((tier) => (
              <div
                key={tier.id}
                id={`drone-tier-card-${tier.id}`}
                className="relative rounded-2xl p-6 bg-[#180B2E]/90 border border-purple-500/30 hover:border-purple-400 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold font-tech uppercase tracking-widest text-purple-300">
                      {tier.name}
                    </span>
                    {tier.badge && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-purple-900/90 text-purple-200 border border-purple-600/40">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-3">
                    <div className="text-2xl font-extrabold font-display text-white tracking-tight">
                      {tier.drones}
                    </div>
                    <div className="text-xl font-bold text-purple-300 mt-1 font-tech">
                      Starting {tier.formattedPrice}
                    </div>
                    <div className="text-xs text-purple-300/80 mt-1 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-purple-400" />
                      <span>{tier.duration}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-purple-800/60 space-y-2.5">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-purple-100">
                        <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-800/40">
                  <button
                    type="button"
                    id={`btn-plan-drone-${tier.id}`}
                    onClick={() => onPlanDroneShow(tier.name)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold font-tech uppercase tracking-wider bg-purple-600/40 hover:bg-purple-600 text-white border border-purple-400/40 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Enquire {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 9: DRONE SHOW ADD-ONS Horizontal Premium Feature Strip */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#1B0B33]/80 border border-purple-500/30 backdrop-blur-md">
          <div className="text-center sm:text-left mb-6">
            <h4 className="text-lg font-bold font-tech uppercase tracking-widest text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>DRONE SHOW ADD-ONS</span>
            </h4>
            <p className="text-xs text-purple-300 mt-1">
              Elevate your aerial performance with integrated production services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {droneShowAddOns.map((addon) => (
              <div
                key={addon.id}
                id={`addon-card-${addon.id}`}
                className="p-4 rounded-xl bg-purple-950/70 border border-purple-800/50 hover:border-purple-500/60 transition-colors text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="p-2 rounded-lg bg-purple-900/60 group-hover:bg-purple-800 transition-colors">
                  {getAddOnIcon(addon.id)}
                </div>
                <div className="text-xs font-bold text-white font-tech uppercase tracking-wide">
                  {addon.title}
                </div>
                <div className="text-[11px] text-purple-300 leading-tight">
                  {addon.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Action trigger for drone show planner */}
          <div className="mt-8 pt-6 border-t border-purple-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-purple-300">
              <ShieldAlert className="w-4 h-4 text-purple-400" />
              <span>Airspace clearance & DGCA safety compliance handled end-to-end</span>
            </div>

            <button
              type="button"
              id="plan-drone-show-bottom-cta"
              onClick={() => onPlanDroneShow('Custom Drone Show Package')}
              className="inline-flex items-center gap-2 px-7 py-3 text-xs font-bold font-tech uppercase tracking-wider text-[#1F0738] bg-white hover:bg-purple-100 rounded-xl shadow-lg transition-all"
            >
              <span>PLAN YOUR DRONE SHOW →</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
