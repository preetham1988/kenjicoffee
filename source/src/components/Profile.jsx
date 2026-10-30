import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import OrderRequest from './OrderRequest';
import { products } from '../data';

const profiled = products.filter((p) => p.profile);
// The filter coffee is the family's signature, so its profile is open first.
const DEFAULT_ID = (profiled.find((p) => p.id === 2) || profiled[0]).id;

// Product cards fire this so their "Cupping & sensory profile" link opens the right tab.
export const SHOW_PROFILE_EVENT = "kenjige:show-profile";

const brewSteps = [
  {
    title: "Fill the filter.",
    text: "Add two to three tablespoons of ground coffee to the top chamber and rest the press disc on it."
  },
  {
    title: "Let it drip.",
    text: "Pour in water just off the boil, cover, and let the decoction drip through slowly, about 10 to 15 minutes."
  },
  {
    title: "Add hot milk.",
    text: "Mix about one part decoction with three parts hot milk. Sweeten to taste."
  },
  {
    title: "Pour and froth.",
    text: "Pour between the dabara and tumbler from a height until it's frothy and just cool enough to sip."
  }
];

export default function Profile() {
  const [selectedId, setSelectedId] = useState(DEFAULT_ID);
  const product = profiled.find((p) => p.id === selectedId);

  useEffect(() => {
    const show = (e) => setSelectedId(e.detail);
    window.addEventListener(SHOW_PROFILE_EVENT, show);
    return () => window.removeEventListener(SHOW_PROFILE_EVENT, show);
  }, []);

  return (
    <section id="profile" className="py-24 md:py-36 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-leaf mb-4">Cupping &amp; sensory profiles</p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-[-0.01em] leading-[1.05]">Taste the difference.</h2>
          <p className="mt-5 text-lg md:text-xl text-muted">How each of our coffees smells, tastes and finishes.</p>
        </Reveal>

        <div role="tablist" aria-label="Coffees" className="mt-10 md:mt-12 mx-auto w-fit max-w-full flex p-1 rounded-full bg-sand text-[14px] md:text-[15px]">
          {profiled.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              id={`profile-tab-${p.id}`}
              aria-selected={p.id === selectedId}
              aria-controls="profile-panel"
              onClick={() => setSelectedId(p.id)}
              className={`rounded-full px-4 md:px-6 py-2 font-medium whitespace-nowrap transition-colors ${p.id === selectedId ? "bg-ink text-white" : "text-muted hover:text-ink"}`}
            >
              {p.shortName || p.name}
            </button>
          ))}
        </div>

        <motion.div
          key={product.id}
          id="profile-panel"
          role="tabpanel"
          aria-labelledby={`profile-tab-${product.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-serif tracking-[-0.01em]">{product.name}</h3>
            {product.summary && (
              <p className="mt-5 font-serif italic text-xl md:text-2xl text-ink/80 leading-snug">“{product.summary}”</p>
            )}
          </div>

          <div className="mt-10 md:mt-14 overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem] bg-sand aspect-[4/3] md:aspect-[16/9]">
            <img src={product.image} alt={product.imageAlt || product.name} loading="lazy" className="w-full h-full object-cover" />
          </div>

          <dl className="mt-12 md:mt-16 border-t border-line">
            {product.profile.map(([term, description]) => (
              <div key={term} className="grid md:grid-cols-[14rem_1fr] gap-2 md:gap-8 py-7 md:py-9 border-b border-line">
                <dt className="text-sm font-medium text-leaf md:pt-1.5">{term}</dt>
                <dd className="text-xl md:text-3xl font-medium tracking-[-0.02em] leading-snug">{description}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 text-center">
            <OrderRequest product={product} />
          </div>
        </motion.div>

        <div id="brew" className="mt-24 md:mt-32 pt-16 md:pt-20 border-t border-line scroll-mt-20">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-serif tracking-[-0.01em]">Make filter coffee at home.</h3>
            <p className="mt-4 text-lg text-muted">
              All you need is a South Indian coffee filter, hot milk, and a dabara and tumbler, or any cup.
            </p>
          </Reveal>
          <ol className="mt-10 md:mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {brewSteps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.06} className="h-full bg-sand rounded-[1.5rem] p-6 md:p-7">
                  <span className="font-serif italic text-3xl text-leaf leading-none">{i + 1}</span>
                  <p className="mt-4 text-lg font-medium">{step.title}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
