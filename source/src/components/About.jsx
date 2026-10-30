import React from 'react';
import Reveal from './Reveal';
import sketch from './sketch.svg?raw';

const generations = [
  {
    numeral: "I",
    label: "The foundation",
    name: "Our grandmother",
    text: "Kenjige Coffee began in the hills of Chikkamagaluru, where our grandmother laid the foundation for the Kenjige properties and a family legacy rooted in the land."
  },
  {
    numeral: "II",
    label: "The pioneer",
    name: "Pradeep Kenjige",
    text: "Her son, Pradeep Kenjige, carried that vision forward — a pioneer whose passion and hard work shaped Kenjige Estate and made coffee a part of our family’s way of life."
  },
  {
    numeral: "III",
    label: "The third generation",
    name: "Nosthush Kenjige",
    tag: "American cricketer · Fitness enthusiast",
    text: "Today, the third generation, Nosthush Kenjige, carries that legacy from Chikkamagaluru to the United States — sharing the coffee, tradition and story of our family with a new generation."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-leaf mb-4">About us</p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-[-0.01em] leading-[1.05]">
            Three generations.<br />
            <span className="text-muted">One legacy.</span>
          </h2>
        </Reveal>

        {/* Pencil-style sketch: the grandmother's deep-rooted tree, the Kenjige Estate bungalow, the journey to the USA */}
        <Reveal delay={0.1} className="mt-14 md:mt-20">
          <div
            role="img"
            aria-label="Pencil sketch of the Kenjige story: the Chikkamagaluru hills and a deep-rooted tree, the Kenjige Estate bungalow among coffee plants, and a plane carrying a cup of coffee to the United States"
            className="bg-[#FBF8F2] rounded-[1.75rem] md:rounded-[2.25rem] px-4 py-6 md:px-14 md:py-12 [&_svg]:block [&_svg]:w-full [&_svg]:h-auto"
            dangerouslySetInnerHTML={{ __html: sketch }}
          />
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-12 md:gap-12">
          {generations.map((gen, i) => (
            <Reveal key={gen.numeral} delay={i * 0.08}>
              <p className="font-serif italic text-3xl text-leaf leading-none">{gen.numeral}</p>
              <p className="mt-5 text-sm text-muted">{gen.label}</p>
              <h3 className="mt-1 text-2xl font-serif">{gen.name}</h3>
              {gen.tag && (
                <a href="#pitch" className="mt-3 inline-block rounded-full bg-leaf/10 text-leaf px-3 py-1 text-[12px] font-medium hover:bg-leaf/15 transition-colors">
                  {gen.tag}
                </a>
              )}
              <p className="mt-4 text-[17px] leading-relaxed text-muted">{gen.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 md:mt-28 text-center">
          <p className="font-serif italic text-3xl md:text-5xl text-ink">From our estate to your cup.</p>
        </Reveal>
      </div>
    </section>
  );
}
