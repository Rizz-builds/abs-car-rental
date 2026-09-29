import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const StickyBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0c1017] border-t border-gray-800 p-2 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
      <a
        href={`tel:${BUSINESS_INFO.phones[0]}`}
        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 text-xs transition"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 text-xs transition"
      >
        <MessageSquare className="w-4 h-4" />
        WhatsApp
      </a>
    </div>
  );
};