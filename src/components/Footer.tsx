import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080b10] text-gray-400 text-xs py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-red-600 text-white font-bold text-xs p-1.5 rounded">ABS</div>
              <span className="text-white font-bold text-base">{BUSINESS_INFO.name}</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Reliable Transportation for Every Journey. AC Cars, Microbuses, HiAce and Pickup Trucks available for rent in Dhaka.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[11px]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#vehicles" className="hover:text-white transition">Vehicles</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[11px]">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <div>
                  {BUSINESS_INFO.phones.map((phone) => (
                    <div key={phone}>{phone}</div>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-[11px]">
          © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};