import React from 'react';
import { motion } from 'framer-motion';
import EstateVideo from './EstateVideo';

export default function Heritage() {
  return (
    <section id="heritage" className="py-24 px-6 md:px-12 bg-kenjige-cream text-kenjige-brown">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <EstateVideo />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Rooted in the legendary <br/> <span className="italic text-kenjige-green">Baba Budan Hills.</span>
          </h2>
          <p className="font-sans text-lg leading-relaxed text-kenjige-brown/80">
            For over eight decades, the Kenjige family has tended to the misty slopes of the Western Ghats. Our home is more than a vintage bungalow; it is the heartbeat of a legacy. We don't just source coffee—we nurture it from seed to cup on our family estate in Kenjige village.
          </p>
          <p className="font-sans text-lg leading-relaxed text-kenjige-brown/80">
            Experience the authentic, shade-grown taste of India's finest Arabica, handpicked and masterfully roasted using secrets passed down through three generations. Brought directly from our Indian estate to the USA.
          </p>
          <div className="pt-4 border-t border-kenjige-brown/20 flex gap-12">
            <div>
              <p className="font-serif text-3xl mb-1">1940s</p>
              <p className="font-sans text-sm uppercase tracking-widest opacity-60">Established</p>
            </div>
            <div>
              <p className="font-serif text-3xl mb-1">Single</p>
              <p className="font-sans text-sm uppercase tracking-widest opacity-60">Origin</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}