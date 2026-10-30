import React from 'react';
import Reveal from './Reveal';
import EstateVideo from './EstateVideo';

const facts = [
  { value: "1940s", label: "Established" },
  { value: "Three", label: "Generations" },
  { value: "Single", label: "Origin" }
];

export default function Heritage() {
  return (
    <section id="heritage" className="bg-sand py-24 md:py-36 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-leaf mb-4">The estate</p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-[-0.01em] leading-[1.05]">
            Rooted in the legendary Baba Budan Hills.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 md:mt-20">
          <EstateVideo />
        </Reveal>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto text-lg md:text-xl leading-relaxed text-muted">
          <Reveal>
            <p>
              For over eight decades, the Kenjige family has tended the misty slopes of the Western Ghats.{" "}
              <span className="text-ink">Our home is more than a vintage bungalow; it is the heartbeat of a legacy.</span>{" "}
              We don't just source coffee. We nurture it from seed to cup on our family estate in Kenjige village.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Shade-grown, handpicked, and masterfully roasted using secrets passed down through three generations.{" "}
              <span className="text-ink">Brought directly from our estate in India to the United States.</span>
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16 md:mt-24 grid grid-cols-3 max-w-4xl mx-auto border-t border-line">
          {facts.map((fact) => (
            <div key={fact.label} className="pt-8 text-center">
              <p className="text-3xl md:text-5xl font-serif">{fact.value}</p>
              <p className="mt-2 text-sm text-muted">{fact.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
