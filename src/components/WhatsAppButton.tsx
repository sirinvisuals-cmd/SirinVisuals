import React from 'react';
import { useSirin } from '../context/SirinContext';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const { companyConfig } = useSirin();

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(companyConfig.defaultWhatsAppMessage);
    const url = `https://wa.me/${companyConfig.whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto"
    >
      <button
        type="button"
        id="floating-whatsapp-btn"
        onClick={handleWhatsAppClick}
        aria-label="Chat with SIRIN VISUALS on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />

        {/* Tooltip on hover */}
        <span className="hidden group-hover:inline-flex absolute right-16 px-3 py-1.5 bg-[#1F0A38] text-white text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap border border-purple-800">
          Chat on WhatsApp
        </span>
      </button>
    </aside>
  );
};
