import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section id="top" className="px-5 md:px-8 pt-12 md:pt-16 pb-14 md:pb-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-[13px] md:text-sm font-medium text-leaf mb-4"
          >
            Est. 1940s · Chikkamagaluru, India
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease }}
            className="text-[3.25rem] leading-[1.02] md:text-7xl lg:text-8xl font-serif tracking-[-0.02em]"
          >
            Heritage,<br /> <span className="italic text-ink/70">roasted.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.16, ease }}
            className="mt-5 md:mt-7 text-lg md:text-xl text-muted max-w-md mx-auto md:mx-0 leading-snug"
          >
            Three generations of coffee from the Baba Budan Hills. Now in the United States.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 flex items-center justify-center md:justify-start gap-7"
          >
            <a href="#shop" className="rounded-full bg-leaf text-white px-6 py-3 text-[15px] font-medium hover:bg-leaf/90 transition-colors">
              Shop coffee
            </a>
            <a href="#heritage" className="text-[15px] font-medium text-leaf hover:underline underline-offset-4">
              Watch the estate <span aria-hidden="true">›</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease }}
          className="overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem] bg-sand aspect-[4/3] md:aspect-[5/4]"
        >
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&auto=format&fit=crop"
            alt="A cup of Kenjige coffee"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
