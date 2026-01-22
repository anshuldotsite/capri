"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    title: "The Super",
    subtitle: "Loaded with toppings, baked to perfection."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
    title: "The Galati",
    subtitle: "A spicy kick with fresh ingredients."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1593560708920-63984ed86de2?q=80&w=2070&auto=format&fit=crop",
    title: "Meat Lovers",
    subtitle: "For those who want it all."
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Dark Overlay - slightly darker for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Texture Overlay */}
      <div className="absolute inset-0 z-10 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 flex flex-col justify-center items-start text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl space-y-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold leading-tight drop-shadow-md tracking-tight">
            Penny More, Penny Less, <br />
            <span className="text-[#C8102E]">Capri Pizza</span> Is Still The Best!
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl leading-relaxed drop-shadow-sm font-inter opacity-90">
            Experience the authentic taste of Windsor-style pizza. Shredded pepperoni, Galati cheese blend, and a family recipe perfected over generations.
          </p>
        </motion.div>
      </div>

      {/* Steam Effects (Decorative) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-10 overflow-hidden">
         {[...Array(5)].map((_, i) => (
           <div 
             key={i}
             className="steam-particle absolute bottom-0 bg-white/20 w-32 h-32 blur-3xl rounded-full"
             style={{
               left: `${20 + i * 15}%`,
               animationDelay: `${i * 0.8}s`,
               animationDuration: `${3 + i}s`
             }}
           />
         ))}
      </div>
    </section>
  );
}
