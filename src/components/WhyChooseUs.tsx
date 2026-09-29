import React from 'react';
import { ShieldCheck, Car, Calendar, Headphones } from 'lucide-react';
import { FEATURES } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-red-500" />,
  Car: <Car className="w-6 h-6 text-red-500" />,
  Calendar: <Calendar className="w-6 h-6 text-red-500" />,
  Headphones: <Headphones className="w-6 h-6 text-red-500" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl font-extrabold mt-2 sm:text-4xl">
            A straightforward rental experience
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            ABS Rent-A-Car focuses on providing dependable vehicles and direct, personal service for every customer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <div className="p-2.5 bg-red-50 rounded-lg w-fit mb-4">
                {iconMap[feature.iconName]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};