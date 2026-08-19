import React from 'react';
import { SirinLogo } from './SirinLogo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-20 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Ethos */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-700 font-tech">
                About Studio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#190830] font-display">
                The Story Behind SIRIN VISUALS
              </h2>
            </div>

            <div className="space-y-4 text-sm text-[#4E4163] leading-relaxed">
              <p>
                <strong>SIRIN VISUALS</strong> exists to transform moments, brands, and celebrations into impactful visual experiences. We bring complete visual production capabilities under one roof — combining cutting-edge aerial technology with cinematic storytelling.
              </p>
              <p>
                Whether coordinating large-scale synchronized drone light displays, capturing high-fashion editorial lookbooks, or producing commercial brand films, our certified crew operates with rigorous technical precision.
              </p>
            </div>

            <div className="pt-2">
              <SirinLogo size="md" variant="purple" showTagline={true} />
            </div>

            <div className="pt-2">
              <button
                type="button"
                id="about-get-in-touch"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-purple-900 hover:bg-purple-800 rounded-full transition-all shadow-xs"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
              <img
                src="/src/assets/images/sirin_film_crew_1787143479237.jpg"
                alt="SIRIN VISUALS Camera Crew & Drone Production"
                className="w-full h-[360px] sm:h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-gray-100 flex items-center justify-between text-xs text-[#20083B] font-semibold">
                <span>Certified Global Drone & Cinema Crew</span>
                <CheckCircle2 className="w-4 h-4 text-purple-700" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
