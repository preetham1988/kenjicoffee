import React from 'react';
import Reveal from './Reveal';
import EstateVideo from './EstateVideo';
import { BRAND } from '../config';
import { origin } from '../data';

const originRows = origin.filter(([, value]) => value);

export default function Heritage() {
  return (
    <section id="heritage" className="py-24 md:py-36 px-5 md:px-8">
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

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <Reveal className="h-full">
            <div className="h-full bg-sand rounded-[1.75rem] p-8 md:p-10 flex flex-col">
              <p className="text-sm font-medium text-leaf">Where Indian coffee began</p>
              <p className="mt-5 font-serif text-2xl md:text-[1.9rem] leading-snug">
                Local legend says coffee came to India through these very hills.
              </p>
              <p className="mt-5 text-[17px] leading-relaxed text-muted">
                In the 1600s, the Sufi saint Baba Budan is said to have carried seven coffee seeds home from Yemen and
                planted them in the hills of Chikkamagaluru that now bear his name. Our family has grown coffee in the
                same district for three generations.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-white rounded-[1.75rem] p-8 md:p-10 border border-line">
              <div className="flex items-baseline justify-between gap-4 pb-4 border-b-2 border-ink">
                <p className="font-semibold tracking-[0.18em] uppercase text-[12px]">{BRAND}</p>
                <p className="text-[12px] text-muted uppercase tracking-[0.12em]">Origin</p>
              </div>
              <dl className="text-[15px]">
                {originRows.map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-6 py-3 border-b border-dashed border-line last:border-b-0">
                    <dt className="text-muted">{label}</dt>
                    <dd className="text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
