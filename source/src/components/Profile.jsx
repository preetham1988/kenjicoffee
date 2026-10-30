import React from 'react';
import Reveal from './Reveal';
import OrderRequest from './OrderRequest';
import { products } from '../data';

const product = products.find((p) => p.profile);

export default function Profile() {
  return (
    <section id="profile" className="py-24 md:py-36 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-leaf mb-4">Cupping &amp; sensory profile</p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-[-0.01em] leading-[1.05]">{product.name}.</h2>
          <p className="mt-5 text-lg md:text-xl text-muted">The way our family has always made filter coffee.</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 md:mt-16 overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem] bg-sand aspect-[4/3] md:aspect-[16/9]">
          <img src={product.image} alt={product.imageAlt || product.name} loading="lazy" className="w-full h-full object-cover" />
        </Reveal>

        <dl className="mt-14 md:mt-20 border-t border-line">
          {product.profile.map(([term, description], i) => (
            <Reveal key={term} delay={i * 0.05}>
              <div className="grid md:grid-cols-[14rem_1fr] gap-2 md:gap-8 py-7 md:py-9 border-b border-line">
                <dt className="text-sm font-medium text-leaf md:pt-1.5">{term}</dt>
                <dd className="text-xl md:text-3xl font-medium tracking-[-0.02em] leading-snug">{description}</dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-14 text-center">
          <OrderRequest product={product} />
        </Reveal>
      </div>
    </section>
  );
}
