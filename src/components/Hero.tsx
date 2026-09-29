import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] bg-slate-950 text-white flex items-center justify-center text-center overflow-hidden py-16">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=1920"
          alt="Car Fleet Background"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-red-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <MapPin className="w-3.5 h-3.5 text-red-500" />
          <span>{BUSINESS_INFO.location}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white mb-4">
          {BUSINESS_INFO.name}
        </h1>

        {/* Red Tagline */}
        <p className="text-xl sm:text-2xl text-red-400 font-semibold mb-3">
          {BUSINESS_INFO.tagline}
        </p>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
          {BUSINESS_INFO.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phones[0]}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-600/30 transition duration-200 text-sm sm:text-base"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 transition duration-200 text-sm sm:text-base"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

      </div>
    </section>
  );
}