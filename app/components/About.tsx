"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const photos = [
  "https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2069&auto=format&fit=crop", // Dough making
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop", // Restaurant
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" // Happy people
];

const testimonials = [
  {
    id: 1,
    text: "The best pizza in Windsor, hands down. The shredded pepperoni is a game changer!",
    author: "Sarah M.",
    role: "Local Guide"
  },
  {
    id: 2,
    text: "I've been coming here since I was a kid. The taste hasn't changed a bit. Simply amazing.",
    author: "Mike T.",
    role: "Loyal Customer"
  },
  {
    id: 3,
    text: "Ordered catering for our office party. The service was impeccable and the food was hot.",
    author: "Jessica R.",
    role: "Corporate Client"
  }
];

export function About() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextPhoto = () => setCurrentPhoto((p) => (p + 1) % photos.length);
  const prevPhoto = () => setCurrentPhoto((p) => (p - 1 + photos.length) % photos.length);

  return (
    <section id="about" className="py-24 bg-[#FCFBF9] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[#C8102E] font-bold tracking-widest uppercase text-sm font-poppins">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 leading-tight">
                Proudly serving Windsor and Essex County for more than 50 years!
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-inter">
              <p>
                It all started with a simple passion: to bring the authentic taste of Italian pizza to Windsor. 
                Using only the finest ingredients and a secret family dough recipe, Capri Pizza quickly became 
                a local staple.
              </p>
              <p>
                What makes us different? It's the little things. The way we shred our pepperoni for that perfect 
                crisp in every bite. The Galati cheese blend we use, sourced from local dairy farmers. 
                And of course, the love we put into every single pie.
              </p>
            </div>

            {/* Testimonials Slider */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100/50 relative mt-8">
              <Quote className="text-[#C8102E] mb-4 opacity-20" size={40} />
              <div className="h-32 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <p className="text-lg font-poppins italic text-gray-800 mb-4 leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[2px] bg-[#C8102E]"></div>
                      <div>
                        <span className="font-bold text-sm text-gray-900 block font-poppins">{testimonials[currentTestimonial].author}</span>
                        <span className="text-gray-400 text-xs font-inter">{testimonials[currentTestimonial].role}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex gap-2 absolute bottom-8 right-8">
                 <button 
                   onClick={() => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)}
                   className="p-2 rounded-full hover:bg-gray-50 text-gray-400 hover:text-[#C8102E] transition-colors"
                 >
                   <ChevronLeft size={20} />
                 </button>
                 <button 
                   onClick={() => setCurrentTestimonial((p) => (p + 1) % testimonials.length)}
                   className="p-2 rounded-full hover:bg-gray-50 text-gray-400 hover:text-[#C8102E] transition-colors"
                 >
                   <ChevronRight size={20} />
                 </button>
              </div>
            </div>
          </div>

          {/* Photo Carousel */}
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl group">
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentPhoto}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.5 }}
                 className="absolute inset-0 bg-cover bg-center"
                 style={{ backgroundImage: `url(${photos[currentPhoto]})` }}
               />
             </AnimatePresence>
             
             {/* Navigation Overlay */}
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100">
               <button 
                 onClick={prevPhoto}
                 className="bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all"
               >
                 <ChevronLeft size={24} />
               </button>
               <button 
                 onClick={nextPhoto}
                 className="bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all"
               >
                 <ChevronRight size={24} />
               </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
