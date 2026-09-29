import React from 'react';
import { Car, Bus, Truck } from 'lucide-react';
import { SERVICES } from '../data';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-[#0c1017] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
            OUR SERVICES
          </span>
          <h2 className="text-3xl font-extrabold mt-2 sm:text-4xl">
            Rental transportation services
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-2xl mx-auto">
            ABS Rent-A-Car provides a range of vehicle rental services to meet your transportation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#121824] p-6 rounded-xl border border-gray-800"
            >
              <div className="p-2.5 bg-red-900/30 text-red-500 rounded-lg w-fit mb-4">
                {index === 3 ? <Truck className="w-5 h-5" /> : index >= 1 ? <Bus className="w-5 h-5" /> : <Car className="w-5 h-5" />}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};