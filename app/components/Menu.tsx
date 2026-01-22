"use client";

import { useState } from "react";
import { menuItems, MenuItem } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: 'all', label: 'All Items' },
  { id: 'pizza', label: 'Signature Pizzas' },
  { id: 'subs', label: 'Subs' },
  { id: 'wings', label: 'Wings' },
  { id: 'catering', label: 'Catering' },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#FCFBF9] paper-texture relative">
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#C8102E] font-bold tracking-widest uppercase text-sm">Authentic Taste</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900">Our Menu</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hand-tossed dough, homemade sauce, and the freshest toppings. 
            Taste the tradition in every bite.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300 border-2",
                activeCategory === cat.id
                  ? "bg-[#C8102E] border-[#C8102E] text-white shadow-lg scale-105"
                  : "bg-transparent border-gray-200 text-gray-600 hover:border-[#C8102E] hover:text-[#C8102E]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  // Default to Large (Medium index logic or specific key)
  const [size, setSize] = useState<'baby' | 'small' | 'medium' | 'large' | 'queen' | 'king'>('large');

  const sizeLabels: Record<string, string> = {
    baby: 'Baby (6pcs)',
    small: 'Small (8pcs)',
    medium: 'Medium (12pcs)',
    large: 'Large (16pcs)',
    queen: 'Queen (24pcs)',
    king: 'King (32pcs)'
  };

  const currentPrice = item.category === 'pizza' && item.prices 
    ? item.prices[size] 
    : item.price;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100/50 flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden bg-gray-50">
        <div 
           className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
           style={{ backgroundImage: `url(${item.image}), url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop')` }}
        />
        {item.popular && (
          <div className="absolute top-4 left-4 bg-[#D32F2F] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            POPULAR
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-playfair font-bold text-xl text-gray-900 leading-tight group-hover:text-[#C8102E] transition-colors">
            {item.name}
          </h3>
          <span className="font-bold text-[#C8102E] text-lg shrink-0 ml-2">
            ${currentPrice?.toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
          {item.description}
        </p>

        {/* Size Selector for Pizza */}
        {item.category === 'pizza' && item.prices && (
          <div className="mb-6">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Select Size</label>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(sizeLabels) as Array<keyof typeof sizeLabels>).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={cn(
                    "py-1.5 text-[10px] sm:text-xs font-medium rounded-md transition-all border",
                    size === s 
                      ? "bg-[#C8102E] text-white border-[#C8102E] shadow-md" 
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  )}
                  title={sizeLabels[s]}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-50">
          <button 
            onClick={() => {
              const sizeDetails = item.category === 'pizza' ? `Size: ${sizeLabels[size]}` : '';
              alert(`Added to cart:\n${item.name}\n${sizeDetails}\nPrice: $${currentPrice?.toFixed(2)}`);
            }}
            className="flex-1 bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-[#C8102E] transition-colors flex items-center justify-center gap-2 text-sm shadow-md hover:shadow-lg active:scale-95"
          >
            <Plus size={16} />
            Add
          </button>
          <button className="p-2.5 border border-gray-200 text-gray-500 rounded-lg hover:border-[#C8102E] hover:text-[#C8102E] transition-colors active:scale-95 bg-white">
            <Info size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
