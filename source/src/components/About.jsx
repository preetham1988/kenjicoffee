import React from 'react';
import { motion } from 'framer-motion';
import sketch from './sketch.svg?raw';

const generations = [
  {
    numeral: "I",
    label: "The Foundation",
    name: "Our Grandmother",
    text: "Kenjige Coffee began in the hills of Chikkamagaluru, where our grandmother laid the foundation for the Kenjige properties and a family legacy rooted in the land."
  },
  {
    numeral: "II",
    label: "The Pioneer",
    name: "Pradeep Kenjige",
    text: "Her son, Pradeep Kenjige, carried that vision forward — a pioneer whose passion and hard work shaped Kenjige Estate and made coffee a part of our family’s way of life."
  },
  {
    numeral: "III",
    label: "The Third Generation",
    name: "Nosthush Kenjige",
    text: "Today, the third generation, Nosthush Kenjige, carries that legacy from Chikkamagaluru to the United States — sharing the coffee, tradition and story of our family with a new generation."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 px-6 md:px-12 bg-[#EFE9DF] text-kenjige-brown border-y border-kenjige-brown/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-kenjige-brown/60 mb-4">About Us</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight uppercase tracking-wide">
            Three Generations. <span className="italic text-kenjige-green">One Legacy.</span>
          </h2>
        </motion.div>

        {/* Pencil-style sketch: the grandmother's deep-rooted tree, the Kenjige Estate bungalow, the journey to the USA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          role="img"
          aria-label="Pencil sketch of the Kenjige story: the Chikkamagaluru hills and a deep-rooted tree, the Kenjige Estate bungalow among coffee plants, and a plane carrying a cup of coffee to the United States"
          className="bg-[#FBF8F2] border border-kenjige-brown/15 rounded-sm p-4 md:px-10 md:py-8 shadow-[0_20px_40px_-24px_rgba(62,39,35,0.4)] mb-16 [&_svg]:block [&_svg]:w-full [&_svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: sketch }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14"
        >
          {generations.map((gen) => (
            <motion.div key={gen.numeral} variants={item} className="border-t border-kenjige-brown/20 pt-6">
              <span className="block font-serif italic text-4xl leading-none text-kenjige-green mb-3">{gen.numeral}</span>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-kenjige-brown/60 mb-1">{gen.label}</p>
              <h3 className="font-serif text-2xl mb-4">{gen.name}</h3>
              <p className="font-sans text-base leading-relaxed text-kenjige-brown/80">{gen.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-16 text-center font-serif italic text-3xl md:text-4xl text-kenjige-green">From our estate to your cup.</p>
      </div>
    </section>
  );
}
