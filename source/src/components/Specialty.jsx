import React from 'react';
import Reveal from './Reveal';
import { products } from '../data';

const comparison = [
  ["Quality", "Not scored. Bought and sold by volume.", "Scores 80 or more out of 100 when tasted by trained cuppers, on the Specialty Coffee Association scale."],
  ["Picking", "Often strip-picked: ripe and unripe cherries together.", "Picked by hand, only when the cherries are ripe."],
  ["Sorting", "More broken and defective beans get through.", "Sorted to remove defective beans."],
  ["Origin", "Blended from many farms and countries.", "Traceable to the farm it was grown on."],
  ["Roast", "Often roasted very dark, which hides flaws and flattens flavor.", "Roasted to bring out each coffee's natural flavor."],
  ["Taste", "Bitter and one-note.", "Distinct notes, like cocoa, citrus and berries."]
];

const reasons = [
  {
    title: "Picked by hand, cherry by cherry.",
    text: "Pickers return to the same plants again and again, taking only ripe cherries. It's far more work than stripping a branch in one go."
  },
  {
    title: "Fewer beans make the cut.",
    text: "Unripe and defective beans are sorted out, so each harvest gives less coffee that's good enough to sell."
  },
  {
    title: "Grown slowly, in the shade.",
    text: "Coffee grown under shade trees ripens slowly and builds more flavor, but each plant produces less."
  },
  {
    title: "Fair to the farm.",
    text: "Everyday coffee is priced by a global market that ignores quality, often below what it costs to grow. Specialty prices pay for the care in every bag, and with us that goes straight to the family that grows it."
  }
];

// Cost per cup from the real prices: a bag's weight divided by about 15 g of coffee per cup.
const GRAMS_PER_CUP = 15;
const GRAMS_PER_LB = 453.6;
const perCup = products
  .map((p) => {
    const lb = parseFloat(p.size);
    const price = parseFloat(p.price.replace(/[^0-9.]/g, ""));
    return /lb/.test(p.size) && lb && price ? price / ((lb * GRAMS_PER_LB) / GRAMS_PER_CUP) : null;
  })
  .filter(Boolean);
const cups = Math.floor(GRAMS_PER_LB / GRAMS_PER_CUP);
const money = (n) => `$${n.toFixed(2)}`;

export default function Specialty() {
  return (
    <section id="specialty" className="bg-ink text-white py-24 md:py-36 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-[#C9A27A] mb-4">Why specialty coffee</p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-[-0.01em] leading-[1.05]">Not all coffee is the same.</h2>
          <p className="mt-5 text-lg md:text-xl text-white/60">
            Specialty coffee is the top grade of coffee, judged on how it's grown, picked, sorted and how it tastes.
            Ours is grown, picked and roasted by our family. Here's what sets it apart, and why it costs a little more.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 md:mt-20">
          <div className="rounded-[1.75rem] overflow-hidden border border-white/10">
            <div className="hidden md:grid grid-cols-[11rem_1fr_1fr] text-sm">
              <div className="px-7 py-5" />
              <div className="px-7 py-5 text-white/50">Everyday coffee</div>
              <div className="px-7 py-5 bg-white/[0.06] text-[#C9A27A] font-medium">Specialty coffee</div>
            </div>
            {comparison.map(([label, everyday, specialty]) => (
              <div key={label} className="grid md:grid-cols-[11rem_1fr_1fr] border-t border-white/10 first:border-t-0 md:first:border-t">
                <div className="px-6 md:px-7 pt-5 md:py-5 font-serif text-xl md:text-lg">{label}</div>
                <div className="px-6 md:px-7 pt-3 md:py-5 text-[15px] leading-relaxed text-white/50">
                  <span className="md:hidden block text-[12px] uppercase tracking-[0.12em] text-white/35 mb-1">Everyday</span>
                  {everyday}
                </div>
                <div className="px-6 md:px-7 py-4 md:py-5 mt-3 md:mt-0 mb-5 md:mb-0 mx-4 md:mx-0 rounded-2xl md:rounded-none bg-white/[0.06] text-[15px] leading-relaxed">
                  <span className="md:hidden block text-[12px] uppercase tracking-[0.12em] text-[#C9A27A] mb-1">Specialty</span>
                  {specialty}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20 md:mt-28 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-serif tracking-[-0.01em]">Why it costs more.</h3>
        </Reveal>
        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 gap-px bg-white/10 rounded-[1.75rem] overflow-hidden">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.06} className="bg-ink">
              <div className="h-full p-8 md:p-10 bg-white/[0.04]">
                <h4 className="text-xl md:text-2xl font-serif">{reason.title}</h4>
                <p className="mt-3 text-[16px] leading-relaxed text-white/60">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {perCup.length > 0 && (
          <Reveal className="mt-16 md:mt-24 text-center">
            <p className="font-serif text-5xl md:text-7xl text-[#C9A27A]">Under ${Math.ceil(Math.max(...perCup))} a cup.</p>
            <p className="mt-5 text-lg text-white/60 max-w-xl mx-auto">
              A 1 lb bag makes about {cups} cups at {GRAMS_PER_CUP} g of coffee each: {money(Math.min(...perCup))} to {money(Math.max(...perCup))} a cup,
              a fraction of a café coffee.
            </p>
            <a href="#shop" className="inline-block mt-8 rounded-full bg-[#C9A27A] text-ink px-6 py-3 text-[15px] font-medium hover:bg-[#d6b48e] transition-colors">
              Shop specialty coffee
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
