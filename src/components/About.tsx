import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
            ABOUT US
          </span>
          <h2 className="text-3xl font-extrabold mt-2 sm:text-4xl">
            Your local car rental partner in Dhaka
          </h2>
          <p className="mt-4 text-sm text-slate-600 max-w-3xl leading-relaxed">
            ABS Rent-A-Car provides rental transportation services in Dhaka, Bangladesh. We offer AC cars, microbuses, HiAce vans and pickup trucks for rent to meet a variety of travel and transport needs.
          </p>
          <p className="mt-2 text-sm text-slate-600 max-w-3xl leading-relaxed">
            Customers contact us directly to inquire about vehicle availability, specifications and rental details. We are committed to providing a straightforward and dependable rental experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-12">
          <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block mb-1">
            PROPRIETOR
          </span>
          <h3 className="text-lg font-bold text-slate-900 mb-3">
            {BUSINESS_INFO.proprietor}
          </h3>
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500" />
              <span>{BUSINESS_INFO.phones.join('   ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>{BUSINESS_INFO.fullAddress}</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200"
            alt="City highway traffic"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-md">
            <span className="text-xl font-black text-red-600">4</span>
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider ml-2">
              VEHICLE TYPES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};