import React from 'react';
import { useSirin } from '../context/SirinContext';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const { companyConfig } = useSirin();

  const handleRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    const action = companyConfig.floatingButtonAction || 'whatsapp';
    const cleanNumber = (companyConfig.whatsappNumber || companyConfig.phoneRaw || '').replace(/[^0-9]/g, '');

    if (action === 'call') {
      const dialNumber = companyConfig.phoneRaw || companyConfig.phone || cleanNumber;
      window.location.href = `tel:${dialNumber.replace(/\s+/g, '')}`;
    } else {
      const encodedMsg = encodeURIComponent(
        companyConfig.defaultWhatsAppMessage || 'Hi SIRIN VISUALS, I would like to enquire about a visual production project.'
      );
      const url = `https://wa.me/${cleanNumber}${encodedMsg ? `?text=${encodedMsg}` : ''}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const isCall = companyConfig.floatingButtonAction === 'call';
  const targetNumber = isCall ? (companyConfig.phone || companyConfig.phoneRaw) : companyConfig.whatsappNumber;

  return (
    <aside
      aria-label="Direct contact option"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto select-none"
    >
      <button
        type="button"
        id="floating-corner-redirect-btn"
        onClick={handleRedirect}
        aria-label={isCall ? `Call ${targetNumber}` : `Chat on WhatsApp with ${targetNumber}`}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-tr from-[#20ba5a] to-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-108 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50 cursor-pointer"
      >
        {/* Pulsing Green Live Online Dot indicator */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow-xs"></span>
        </span>

        {/* Icon based on configured redirection action */}
        {isCall ? (
          <Phone className="w-6 h-6 fill-white text-white drop-shadow-xs" />
        ) : (
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#20ba5a] drop-shadow-xs" />
        )}

        {/* Enhanced Hover Tooltip */}
        <span className="hidden sm:group-hover:inline-flex items-center gap-1.5 absolute right-16 px-3.5 py-2 bg-[#17092E] text-white text-xs font-semibold rounded-xl shadow-xl whitespace-nowrap border border-purple-500/40 animate-in fade-in slide-in-from-right-2 duration-150">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>
            {isCall ? `Call Direct: ${targetNumber}` : `Chat on WhatsApp (${targetNumber})`}
          </span>
        </span>
      </button>
    </aside>
  );
};
