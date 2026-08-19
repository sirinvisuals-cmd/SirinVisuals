import React, { useState } from 'react';
import { useSirin } from '../context/SirinContext';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  onContactClick: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onContactClick }) => {
  const { faqs } = useSirin();
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-7']);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 font-tech">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#190830] font-display">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-gray-100">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div key={faq.id} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#1F0838] font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center text-purple-900 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-purple-900 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-2 pb-1 text-xs sm:text-sm text-[#5C4E73] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
