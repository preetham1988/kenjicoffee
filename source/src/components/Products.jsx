import React from 'react';
import Reveal from './Reveal';
import OrderRequest from './OrderRequest';
import { SHOW_PROFILE_EVENT } from './Profile';
import { products } from '../data';

// Light to dark, one shade per roast level.
const ROAST_SHADES = ["#C9A27A", "#A47551", "#7B4B2A", "#5A3420", "#3E2723"];

function RoastScale({ roast }) {
  return (
    <span className="flex items-center justify-end gap-2.5">
      {roast.level && (
        <span className="flex gap-1" role="img" aria-label={`Roast level ${roast.level} of 5, light to dark`}>
          {ROAST_SHADES.map((shade, i) => (
            <span
              key={shade}
              className="w-4 h-1.5 rounded-full"
              style={{ backgroundColor: i < roast.level ? shade : "#DED4C5" }}
            />
          ))}
        </span>
      )}
      <span>{roast.label}</span>
    </span>
  );
}

export default function Products() {
  return (
    <section id="shop" className="bg-sand pt-12 pb-16 md:py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center">
          <p className="text-sm font-medium text-leaf mb-4">Specialty coffee</p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-[-0.01em] leading-[1.05]">Freshly roasted.</h2>
          <p className="mt-5 text-lg md:text-xl text-muted">Grown on our farm. Sent from our family to yours.</p>
        </Reveal>

        <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.08} className="h-full">
              <article className="group h-full flex flex-col bg-white rounded-[1.75rem] p-4 pb-8 text-center">
                <div className="aspect-[4/3] md:aspect-square overflow-hidden rounded-[1.25rem] bg-sand">
                  <img
                    src={product.image}
                    alt={product.imageAlt || product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-7 text-[13px] text-muted">{product.type}</p>
                <h3 className="mt-1 text-[1.6rem] leading-tight font-serif px-2">{product.name}</h3>
                <p className="mt-3 text-[15px] text-muted px-4">{product.notes}</p>
                {product.profile && (
                  <a
                    href="#profile"
                    onClick={() => window.dispatchEvent(new CustomEvent(SHOW_PROFILE_EVENT, { detail: product.id }))}
                    className="inline-block mt-2 text-[15px] text-leaf hover:underline underline-offset-4"
                  >
                    Cupping &amp; sensory profile <span aria-hidden="true">›</span>
                  </a>
                )}

                <dl className="mt-6 mx-3 text-[13px] text-left border-t border-line">
                  <div className="flex items-center justify-between gap-4 py-2.5 border-b border-line">
                    <dt className="text-muted">Roast</dt>
                    <dd className="text-right"><RoastScale roast={product.roast} /></dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2.5 border-b border-line">
                    <dt className="text-muted">Best for</dt>
                    <dd className="text-right">{product.bestFor}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-6 px-2">
                  <OrderRequest product={product} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
