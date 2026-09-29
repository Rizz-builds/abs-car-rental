import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
            CONTACT
          </span>
          <h2 className="text-3xl font-extrabold mt-2 sm:text-4xl">
            Get in touch with us
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Call or message us directly for vehicle availability, pricing and rental details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Proprietor: {BUSINESS_INFO.proprietor}
            </p>

            <div className="space-y-6 text-sm">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  PHONE
                </span>
                {BUSINESS_INFO.phones.map((phone) => (
                  <div key={phone} className="flex items-center gap-2 mb-1 text-slate-800 font-medium">
                    <Phone className="w-4 h-4 text-red-500" />
                    <a href={`tel:${phone}`} className="hover:text-red-500">{phone}</a>
                  </div>
                ))}
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  ADDRESS
                </span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {BUSINESS_INFO.fullAddress}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phones[0]}`}
                  className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp Us
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold px-4 py-2 rounded-lg transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 border border-slate-200 rounded-2xl overflow-hidden min-h-[300px]">
            <iframe
              title="Business Location"
              src={BUSINESS_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="bg-[#0c1017] text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-2">Need a Car for Your Journey?</h3>
          <p className="text-xs text-gray-400 mb-6">
            Contact ABS Rent-A-Car for vehicle availability, pricing and rental details.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phones[0]}`}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="mt-4 text-xs font-mono text-gray-400 flex justify-center gap-4">
            <span>{BUSINESS_INFO.phones[0]}</span>
            <span>{BUSINESS_INFO.phones[1]}</span>
          </div>
        </div>
      </div>
    </section>
  );
};