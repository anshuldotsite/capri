"use client";

import { useState } from "react";
import { locations, Location } from "../data";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Locations() {
  const [activeLocation, setActiveLocation] = useState<Location>(locations[0]);

  return (
    <section id="locations" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#C8102E] font-bold tracking-widest uppercase text-sm font-poppins">Find Us</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900">Our Locations</h2>
          <p className="max-w-2xl mx-auto text-gray-600 font-inter">
            Conveniently located across Windsor and Essex County.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
          {/* Location List */}
          <div className="lg:col-span-4 bg-gray-50/50 rounded-2xl p-6 overflow-y-auto space-y-3 border border-gray-100 scrollbar-hide">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveLocation(loc)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 group ${
                  activeLocation.id === loc.id
                    ? "bg-white shadow-lg border-l-4 border-[#C8102E]"
                    : "bg-white/50 border-l-4 border-transparent hover:bg-white hover:shadow-sm"
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`font-poppins font-bold text-lg ${
                    activeLocation.id === loc.id ? "text-[#C8102E]" : "text-gray-900"
                  }`}>{loc.name}</h3>
                </div>
                
                <p className="text-gray-500 text-sm mb-3 font-inter">{loc.address}</p>
                
                <div className="flex items-center gap-4 text-xs text-gray-400 font-inter">
                   <div className="flex items-center gap-1">
                     <Clock size={12} />
                     <span>{loc.hours.split('-')[0].trim()}</span>
                   </div>
                   <div className="flex items-center gap-1">
                     <Phone size={12} />
                     <span>{loc.phone}</span>
                   </div>
                </div>
              </button>
            ))}
          </div>

          {/* Map Display */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeLocation.id}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.5 }}
                 className="absolute inset-0 z-0"
               >
                 <iframe 
                   width="100%" 
                   height="100%" 
                   frameBorder="0" 
                   title="map" 
                   marginHeight={0} 
                   marginWidth={0} 
                   scrolling="no" 
                   src={`https://maps.google.com/maps?q=${activeLocation.coordinates.lat},${activeLocation.coordinates.lng}&z=15&output=embed`}
                   className="grayscale-[20%] contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                 />
               </motion.div>
             </AnimatePresence>

             {/* Floating Info Card */}
             <div className="absolute bottom-6 left-6 max-w-sm w-full">
               <motion.div 
                 key={activeLocation.id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="bg-white/95 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/20"
               >
                 <h3 className="font-poppins font-bold text-xl text-gray-900 mb-4">{activeLocation.name}</h3>
                 <div className="space-y-3 text-sm text-gray-600 font-inter">
                   <div className="flex items-start gap-3">
                     <MapPin className="text-[#C8102E] mt-0.5 shrink-0" size={16} />
                     <span>{activeLocation.address}</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Phone className="text-[#C8102E] shrink-0" size={16} />
                     <span>{activeLocation.phone}</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Clock className="text-[#C8102E] shrink-0" size={16} />
                     <span>{activeLocation.hours}</span>
                   </div>
                 </div>
                 <button className="w-full mt-5 bg-[#1a1a1a] text-white py-2.5 rounded-lg font-bold hover:bg-[#C8102E] transition-colors flex items-center justify-center gap-2 text-sm">
                   <Navigation size={16} />
                   Get Directions
                 </button>
               </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
