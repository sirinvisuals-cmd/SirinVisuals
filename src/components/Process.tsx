import React from 'react';
import { processSteps } from '../data/sirinData';

interface ProcessProps {
  onStartProcess: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartProcess }) => {
  return (
    <section id="process" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 font-tech">
            Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#190830] font-display">
            How It Works
          </h2>
          <p className="text-sm text-[#5C4E73]">
            A transparent 4-stage process from your initial idea to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-[#FAFAFC] border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black font-display text-purple-900/30">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-[#1F0838] font-display mt-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5C4E73] leading-relaxed mt-2">
                  {step.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200/50 text-[10px] font-bold uppercase tracking-wider text-purple-700">
                Phase {step.step}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
