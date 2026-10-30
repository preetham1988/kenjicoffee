import React from 'react';
import Reveal from './Reveal';

const pillars = [
  { title: "Early starts.", text: "A strong, smooth cup for the first session of the day." },
  { title: "Long days.", text: "Low-acidity roasts made for cup after cup." },
  { title: "Built on discipline.", text: "Three generations of patience, from seed to cup." }
];

// Side view of a cricket ball: the raised seam runs across the middle, stitched on both sides.
function CricketBall() {
  const seam = (t, offset) => {
    const y = 14 + t * 172;
    const x = 100 + offset - 24 * t * (1 - t); // same curve as the seam paths below
    return [x, y];
  };
  return (
    <svg viewBox="0 0 200 200" className="w-40 md:w-56 h-auto mx-auto" aria-hidden="true" fill="none" strokeLinecap="round">
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="2" />
      <path d="M94 13 Q82 100 94 187" stroke="currentColor" strokeWidth="2" />
      <path d="M106 13 Q94 100 106 187" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 15 }, (_, i) => {
        const t = (i + 1) / 16;
        const [lx, y] = seam(t, -6);
        const [rx] = seam(t, 6);
        return (
          <g key={i} stroke="#C9A27A" strokeWidth="1.6">
            <path d={`M${lx - 4} ${y} l-7 -3`} />
            <path d={`M${rx + 4} ${y} l7 -3`} />
          </g>
        );
      })}
    </svg>
  );
}

export default function Pitch() {
  return (
    <section id="pitch" className="bg-ink text-white py-24 md:py-36 px-5 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-[#C9A27A] mb-4">From the estate to the pitch</p>
          <h2 className="text-4xl md:text-7xl font-serif tracking-[-0.02em] leading-[1.02]">
            Fuel for the<br />long game.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 md:mt-20 text-white">
          <CricketBall />
        </Reveal>

        <Reveal className="mt-14 md:mt-20 max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-3xl leading-snug tracking-[-0.015em] text-white/60">
            <span className="text-white">Nosthush Kenjige is an American cricketer and fitness enthusiast,</span>{" "}
            and the third generation of a coffee family from Chikkamagaluru. Kenjige Coffee is made for the same kind of days:
            early starts, long sessions, and the quiet ritual of a good cup before it all begins.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-px bg-white/10 rounded-[1.75rem] overflow-hidden">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08} className="bg-ink">
              <div className="p-8 md:p-10 h-full bg-white/[0.04]">
                <h3 className="text-xl md:text-2xl font-serif">{pillar.title}</h3>
                <p className="mt-2 text-[17px] text-white/60 leading-relaxed">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
