import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section id="top" className="pt-20 md:pt-28 pb-20 md:pb-28 px-5 md:px-8 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="text-[13px] md:text-sm font-medium text-leaf mb-5"
      >
        Est. 1940s · Chikkamagaluru, India
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.08, ease }}
        className="text-[3.25rem] leading-[1.02] md:text-8xl lg:text-[7.5rem] font-serif tracking-[-0.02em]"
      >
        Heritage,<br className="md:hidden" /> <span className="italic text-ink/70">roasted.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.16, ease }}
        className="mt-6 md:mt-8 text-lg md:text-2xl text-muted max-w-2xl mx-auto leading-snug tracking-[-0.01em]"
      >
        Three generations of coffee from the Baba Budan Hills. Now in the United States.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-9 flex items-center justify-center gap-7"
      >
        <a href="#shop" className="rounded-full bg-leaf text-white px-6 py-3 text-[15px] font-medium hover:bg-leaf/90 transition-colors">
          Shop coffee
        </a>
        <a href="#heritage" className="text-[15px] font-medium text-leaf hover:underline underline-offset-4">
          Watch the estate <span aria-hidden="true">›</span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.25, ease }}
        className="mt-16 md:mt-20 max-w-6xl mx-auto overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem] bg-sand aspect-[4/3] md:aspect-[16/8]"
      >
        <img
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop"
          alt="A cup of Kenjige coffee"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
