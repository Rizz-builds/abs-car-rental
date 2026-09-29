import React from 'react';
import { ArrowRight } from 'lucide-react';
import { VEHICLES, BUSINESS_INFO } from '../data';

export const Vehicles: React.FC = () => {
  return (
    <section id="vehicles" className="py-16 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
            OUR VEHICLES
          </span>
          <h2 className="text-3xl font-extrabold mt-2 sm:text-4xl">
            Choose the right vehicle for you
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            We offer four categories of vehicles for rent. Contact us directly for availability, specifications and rental details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VEHICLES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase text-slate-800">
                  {vehicle.badge}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {vehicle.description}
                  </p>
                </div>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi,%20I%20am%20interested%20in%20renting%20${encodeURIComponent(vehicle.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-600 transition"
                >
                  Contact for Details
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          Vehicle availability, specifications and rental pricing are provided upon direct contact.
        </p>
      </div>
    </section>
  );
};