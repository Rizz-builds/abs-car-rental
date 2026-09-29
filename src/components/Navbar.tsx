import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0c1017] border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="bg-red-600 text-white font-bold text-xs p-2 rounded-md tracking-wider">
              ABS
            </div>
            <div>
              <div className="font-bold text-base leading-tight">{BUSINESS_INFO.name}</div>
              <div className="text-[10px] text-gray-400">DHAKA, BANGLADESH</div>
            </div>
          </a>

          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-red-500 transition">Home</a>
            <a href="#vehicles" className="hover:text-red-500 transition">Vehicles</a>
            <a href="#services" className="hover:text-red-500 transition">Services</a>
            <a href="#about" className="hover:text-red-500 transition">About Us</a>
            <a href="#contact" className="hover:text-red-500 transition">Contact</a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#121824] border-b border-gray-800 px-4 pt-2 pb-4 space-y-2">
          <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-gray-200 hover:text-red-500">Home</a>
          <a href="#vehicles" onClick={() => setIsOpen(false)} className="block py-2 text-gray-200 hover:text-red-500">Vehicles</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-gray-200 hover:text-red-500">Services</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-200 hover:text-red-500">About Us</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-200 hover:text-red-500">Contact</a>
        </div>
      )}
    </header>
  );
};