import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-kenjige-cream flex flex-col">
      <nav className="w-full z-20 flex justify-between items-center px-6 py-8 md:px-12 text-kenjige-brown border-b border-kenjige-brown/10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-serif text-xl font-bold tracking-widest uppercase"
        >
          Kenjige
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex space-x-12 text-xs uppercase tracking-[0.2em] items-center font-medium"
        >
          <a href="#heritage" className="hover:opacity-50 transition-opacity hidden md:block">Heritage</a>
          <a href="#about" className="hover:opacity-50 transition-opacity hidden md:block">About Us</a>
          <a href="#shop" className="hover:opacity-50 transition-opacity hidden md:block">Shop</a>
          <button className="flex items-center space-x-2 hover:opacity-50 transition-opacity">
            <span className="hidden md:block">Cart [0]</span>
            <ShoppingBag size={16} className="md:hidden" />
          </button>
        </motion.div>
      </nav>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 md:px-12 py-12 items-center">
        <div className="lg:col-span-6 z-10 flex flex-col justify-center h-full pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-xs uppercase tracking-[0.3em] mb-6 text-kenjige-brown/50">
              Est. 1940s • Mudigere, India
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tight mb-8">
              Heritage <br />
              <span className="italic font-light text-kenjige-brown/70">Roasted.</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-relaxed text-kenjige-brown/70 max-w-md mb-12">
              Three generations of slow agriculture and masterful roasting. Direct trade specialty coffee from the legendary Baba Budan Hills to your cup.
            </p>
            <a
              href="#shop"
              className="group inline-flex items-center space-x-4 border-b border-kenjige-brown/30 pb-2 hover:border-kenjige-brown transition-all duration-300"
            >
              <span className="font-sans uppercase tracking-[0.2em] text-xs font-semibold">Explore The Harvest</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 h-[50vh] lg:h-[75vh] w-full relative mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 bg-kenjige-brown/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop"
              alt="Specialty coffee"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-kenjige-brown/10 hidden lg:block"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-kenjige-brown/10 hidden lg:block"></div>
        </motion.div>
      </div>
    </div>
  );
}
